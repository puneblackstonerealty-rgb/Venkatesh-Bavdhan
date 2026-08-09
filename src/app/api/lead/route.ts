import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Lead capture.
 *
 * Enquiries go to a Google Apps Script web app, which appends a row to a
 * Google Sheet and sends the notification email with MailApp. Both happen
 * inside Google — there is no transactional email service in the path, and
 * this route holds no mail credentials.
 *
 * ⚠ This project must have its OWN Apps Script deployment, its own Sheet and
 * its own secret — not the Kharadi project's. Two sites posting into one sheet
 * makes it impossible to tell which project a lead came from, and rotating the
 * secret for one would silently break the other.
 *
 * The script and its setup steps are in scripts/google-apps-script/Code.gs.
 */

/** Where enquiries land. Set NOTIFY_EMAIL in the Apps Script to change it. */
const LEAD_TO = process.env.LEAD_TO ?? 'pune.blackstonerealty@gmail.com'

/** Apps Script can be slow to wake. Long enough to survive a cold start, short
 *  enough that the visitor is not left staring at a spinner. */
const WEBHOOK_TIMEOUT_MS = 10_000

type Lead = {
  name?: string
  email?: string
  phone?: string
  intent?: string
  pagePath?: string
}

type CapturedLead = {
  id: string
  receivedAt: string
  name?: string
  email?: string
  phone: string
  intent: string
  pagePath?: string
  ip?: string
  userAgent?: string
}

/**
 * "98765 43210" / "+91 98765 43210" -> "+919876543210". Null if not a valid
 * Indian mobile — which also rejects the all-zeros placeholder that marketing
 * templates ship with.
 *
 * A number arriving with a non-India country code takes the looser E.164 path
 * instead. Every form on this site is India-only and always sends +91, so they
 * still get the strict rule; the looser branch exists so that an NRI buyer's
 * number submitted by any future widget is not dropped on the floor.
 */
function toE164(raw: string): string | null {
  const trimmed = raw.trim()
  const digits = trimmed.replace(/\D/g, '')
  if (!digits) return null

  const isIndian = !trimmed.startsWith('+') || trimmed.startsWith('+91')
  if (isIndian) {
    const local = digits.startsWith('91') && digits.length === 12 ? digits.slice(2) : digits
    if (local.length !== 10) return null
    if (!/^[6-9]/.test(local)) return null
    return `+91${local}`
  }

  // E.164 allows 8–15 digits including the country code.
  if (digits.length < 8 || digits.length > 15) return null
  if (/^0+$/.test(digits)) return null
  return `+${digits}`
}

type SheetResult = 'written' | 'not-configured' | 'failed'

async function sendToSheet(lead: CapturedLead): Promise<SheetResult> {
  const url = process.env.LEADS_WEBHOOK_URL
  if (!url) return 'not-configured'

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      // The secret travels in the body, not a header: an Apps Script web app
      // deployed for "Anyone" cannot read custom request headers.
      body: JSON.stringify({ ...lead, secret: process.env.LEADS_WEBHOOK_SECRET ?? '' }),
      // Apps Script answers a POST with a 302 to googleusercontent; the JSON
      // is on the other side, so redirects must be followed.
      redirect: 'follow',
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    })

    // Apps Script returns HTTP 200 even for its own errors, so the body is the
    // only place a rejected secret or a script exception shows up.
    const text = await response.text()
    if (!response.ok) {
      console.error(`[lead] Sheet webhook HTTP ${response.status}: ${text.slice(0, 300)}`)
      return 'failed'
    }
    try {
      const parsed = JSON.parse(text) as { ok?: boolean; notified?: boolean; error?: string }
      if (!parsed.ok) {
        console.error(`[lead] Sheet webhook rejected the lead: ${parsed.error ?? 'unknown'}`)
        return 'failed'
      }
      if (parsed.notified === false) {
        // The row is saved; only the email failed. Worth a distinct line in the
        // log, because the lead is safe but nobody has been told.
        console.error(`[lead] ${lead.id} written to the sheet but NOT emailed to ${LEAD_TO}.`)
      }
      return 'written'
    } catch {
      // Apps Script serves an HTML error page when a deployment is stale or
      // the permissions were never granted.
      console.error(`[lead] Sheet webhook returned non-JSON: ${text.slice(0, 300)}`)
      return 'failed'
    }
  } catch (error) {
    console.error('[lead] Sheet webhook failed:', error)
    return 'failed'
  }
}

async function forwardToCrm(lead: CapturedLead): Promise<void> {
  const webhook = process.env.CRM_WEBHOOK_URL
  if (!webhook) return
  try {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(6000),
    })
  } catch (error) {
    console.error('[lead] CRM forward failed:', error)
  }
}

/**
 * The site's forms send JSON; the chat widget sends
 * application/x-www-form-urlencoded with its own field names, and cannot be
 * changed to match because it posts `no-cors` with `keepalive` so the request
 * survives its own redirect. Both shapes are normalised here.
 *
 * ⚠ Do not simplify this back to `request.json()`. The widget's POST would
 * throw on parse and every chatbot lead would be lost — silently, because
 * `no-cors` means the widget never sees the response.
 */
async function readLead(request: Request): Promise<Lead> {
  const contentType = request.headers.get('content-type') ?? ''

  if (contentType.includes('application/json')) {
    return (await request.json()) as Lead
  }

  const form = new URLSearchParams(await request.text())
  const source = form.get('project_id')?.trim()
  const interest = form.get('interest')?.trim()
  const configuration = form.get('configuration')?.trim()

  // The widget collects an interest and a configuration before the number.
  // Folded into `intent` so the sheet's Enquiry column says what they actually
  // asked for rather than a bare "Chatbot".
  const intent = [
    'Chatbot',
    [interest, configuration].filter(Boolean).join(' · ') || null,
    source ? `from ${source}` : null,
  ]
    .filter(Boolean)
    .join(' | ')

  return {
    phone: form.get('mobile') ?? undefined,
    intent,
    // The widget derives project_id from the page title, which is a label
    // rather than a location. Prefer the real path when it sends one.
    pagePath: form.get('page_path')?.trim() || source || undefined,
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await readLead(request)
    const phone = toE164(String(body.phone ?? ''))

    if (!phone) {
      return NextResponse.json(
        {
          ok: false,
          errors: [
            { field: 'phone', message: 'Please enter a valid 10-digit Indian mobile number.' },
          ],
        },
        { status: 400 },
      )
    }

    const lead: CapturedLead = {
      id: crypto.randomUUID(),
      receivedAt: new Date().toISOString(),
      name: body.name?.trim() || undefined,
      email: body.email?.trim().toLowerCase() || undefined,
      phone,
      intent: body.intent ?? 'Enquiry',
      pagePath: body.pagePath,
      ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim(),
      userAgent: request.headers.get('user-agent') ?? undefined,
    }

    // Independent sinks, weakest-last, so a lead survives any one of them being
    // down or unconfigured. The log line cannot fail.
    const [sheetResult] = await Promise.all([sendToSheet(lead), forwardToCrm(lead)])

    if (sheetResult === 'not-configured') {
      console.warn(
        `[lead] LEADS_WEBHOOK_URL is not set. ${lead.id} was NOT written to the sheet or ` +
          `emailed to ${LEAD_TO}. See scripts/google-apps-script/Code.gs for setup.`,
      )
    }
    console.error('[LEAD_CAPTURED]', JSON.stringify(lead))

    // Always 200 once the phone validates, even if forwarding failed. The lead
    // IS captured in the log; showing the buyer an error would only lose one we
    // already have.
    return NextResponse.json({ ok: true, id: lead.id }, { status: 200 })
  } catch (error) {
    console.error('[lead] Unhandled error:', error)
    return NextResponse.json(
      { ok: false, errors: [{ field: 'form', message: 'Something went wrong.' }] },
      { status: 500 },
    )
  }
}

/** Health check: shows which sinks are live without exposing the secret. */
export async function GET(): Promise<Response> {
  return NextResponse.json({
    ok: true,
    sheet: process.env.LEADS_WEBHOOK_URL ? 'configured' : 'not-configured',
    secret: process.env.LEADS_WEBHOOK_SECRET ? 'set' : 'missing',
    notifyEmail: LEAD_TO,
    crm: process.env.CRM_WEBHOOK_URL ? 'webhook' : 'none',
  })
}
