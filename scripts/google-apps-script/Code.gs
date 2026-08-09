/**
 * Lead capture for Venkatesh Serenique, Bavdhan.
 *
 * Paste this into a Google Apps Script project bound to a Google Sheet. It does
 * two things per enquiry: appends a row, and emails a notification. The email
 * is sent by Apps Script itself with MailApp — there is no third-party email
 * service anywhere in the path.
 *
 * ⚠ THIS PROJECT NEEDS ITS OWN SHEET AND ITS OWN SECRET.
 * Do not point it at the Kharadi project's deployment. Two sites writing into
 * one sheet makes it impossible to tell which project a lead came from, and
 * rotating the secret for one would silently break the other.
 *
 * ── SETUP ──────────────────────────────────────────────────────────────────
 *
 *  1. Create a NEW Google Sheet — name it e.g. "Serenique Leads".
 *  2. Extensions → Apps Script. Delete the placeholder, paste this file.
 *  3. Edit the three CONFIG values below. SHARED_SECRET must be a long random
 *     string — invent one, it is not a password you need to remember.
 *  4. Run the `setup` function once (select it, press Run). It creates the
 *     sheet tab with its header row and asks for the permissions MailApp
 *     needs. Approve them. Google will warn the app is unverified — that is
 *     expected for your own script; choose Advanced → Go to (project).
 *  5. Deploy → New deployment → type "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone
 *     "Anyone" is required because the site's server calls this without a
 *     Google login. The SHARED_SECRET is what actually protects it.
 *  6. Copy the Web app URL (ends in /exec).
 *  7. Add to .env.local locally, and to the host's environment variables in
 *     production:
 *       LEADS_WEBHOOK_URL     = the /exec URL
 *       LEADS_WEBHOOK_SECRET  = the same SHARED_SECRET
 *     then redeploy.
 *  8. Check it: open <your site>/api/lead in a browser. It should report
 *     "sheet": "configured".
 *
 * ── CHANGING THINGS LATER ──────────────────────────────────────────────────
 *
 *  Editing this script takes effect only after Deploy → Manage deployments →
 *  edit the existing deployment → Version: New version → Deploy. Saving alone
 *  does nothing to the live URL. If you create a *new* deployment instead, the
 *  URL changes and you must update LEADS_WEBHOOK_URL to match.
 */

// ── CONFIG ───────────────────────────────────────────────────────────────────

/** Where the notification email goes. Comma-separate for more than one. */
const NOTIFY_EMAIL = 'pune.blackstonerealty@gmail.com'

/** Tab name inside the spreadsheet. Created automatically. */
const SHEET_NAME = 'Serenique Leads'

/** Must match LEADS_WEBHOOK_SECRET in the site's environment. Change this. */
const SHARED_SECRET = 'CHANGE-ME-to-a-long-random-string'

// ─────────────────────────────────────────────────────────────────────────────

const HEADERS = [
  'Received (IST)',
  'Name',
  'Mobile',
  'Email',
  'Enquiry',
  'Page',
  'Reference',
  'IP',
  'User agent',
]

/**
 * Run once from the editor. Creates the tab with its header row and triggers
 * the permission prompts for Sheets and Gmail. Sends a test email to
 * NOTIFY_EMAIL so you know delivery works before a real lead depends on it.
 */
function setup() {
  const sheet = getSheet_()
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: 'Lead capture is connected — Venkatesh Serenique, Bavdhan',
    body: [
      'This is the one-time test from setup().',
      '',
      'Sheet tab: ' + SHEET_NAME,
      'Rows so far: ' + sheet.getLastRow(),
      '',
      'If you can read this, notifications work.',
      'Next: Deploy > New deployment > Web app.',
    ].join('\n'),
  })
  Logger.log(
    'Ready. Tab "%s" has %s row(s). Test email sent to %s.',
    SHEET_NAME,
    sheet.getLastRow(),
    NOTIFY_EMAIL,
  )
}

function getSheet_() {
  const book = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = book.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME)
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
    sheet.setFrozenRows(1)
    sheet.setColumnWidth(1, 160)
    sheet.setColumnWidth(5, 240)
  }
  return sheet
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  )
}

/** Health check — open the /exec URL in a browser to see this. */
function doGet() {
  return json_({ ok: true, service: 'lead-capture', project: 'serenique', sheet: SHEET_NAME })
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, error: 'empty body' })
    }

    const lead = JSON.parse(e.postData.contents)

    if (SHARED_SECRET && lead.secret !== SHARED_SECRET) {
      return json_({ ok: false, error: 'unauthorised' })
    }

    // Two requests landing together would otherwise both read the same last
    // row and one would overwrite the other.
    const lock = LockService.getScriptLock()
    lock.waitLock(20000)
    try {
      appendRow_(lead)
    } finally {
      lock.releaseLock()
    }

    // The row is the record of truth and is already safe. If the mail quota is
    // spent or the address bounces, the lead must still count as captured, so
    // the notification failing does not fail the request.
    let notified = true
    try {
      notify_(lead)
    } catch (mailError) {
      notified = false
      console.error('Notification failed: ' + mailError)
    }

    return json_({ ok: true, notified: notified })
  } catch (error) {
    console.error('doPost failed: ' + error)
    return json_({ ok: false, error: String(error) })
  }
}

function appendRow_(lead) {
  getSheet_().appendRow([
    formatIst_(lead.receivedAt),
    lead.name || '',
    // Leading apostrophe keeps Sheets from reading +9188... as a formula or
    // stripping the plus.
    lead.phone ? "'" + lead.phone : '',
    lead.email || '',
    lead.intent || '',
    lead.pagePath || '',
    lead.id || '',
    lead.ip || '',
    lead.userAgent || '',
  ])
}

function formatIst_(iso) {
  const date = iso ? new Date(iso) : new Date()
  return Utilities.formatDate(date, 'Asia/Kolkata', 'dd MMM yyyy, HH:mm')
}

function notify_(lead) {
  const rows = [
    ['Name', lead.name || '—'],
    ['Mobile', lead.phone || '—'],
    ['Email', lead.email || '—'],
    ['Enquiry', lead.intent || '—'],
    ['Page', lead.pagePath || '—'],
    ['Received', formatIst_(lead.receivedAt) + ' IST'],
    ['Reference', lead.id || '—'],
  ]

  const html =
    '<div style="font:15px/1.6 system-ui,sans-serif;color:#101a20">' +
    '<p style="margin:0 0 16px;font-size:17px"><strong>New enquiry — Venkatesh Serenique, Bavdhan</strong></p>' +
    '<table style="border-collapse:collapse">' +
    rows
      .map(function (row) {
        return (
          '<tr><td style="padding:5px 20px 5px 0;color:#66737a">' +
          escapeHtml_(row[0]) +
          '</td><td style="padding:5px 0"><strong>' +
          escapeHtml_(row[1]) +
          '</strong></td></tr>'
        )
      })
      .join('') +
    '</table>' +
    (lead.phone
      ? '<p style="margin:20px 0 0"><a href="tel:' +
        escapeHtml_(lead.phone) +
        '" style="background:#2c5561;color:#fff;padding:10px 18px;border-radius:3px;text-decoration:none">Call ' +
        escapeHtml_(lead.phone) +
        '</a></p>'
      : '') +
    '</div>'

  const options = {
    to: NOTIFY_EMAIL,
    subject:
      'Serenique enquiry — ' +
      (lead.intent || 'Website') +
      ' — ' +
      (lead.name || lead.phone || 'unknown'),
    body: rows
      .map(function (row) {
        return row[0] + ': ' + row[1]
      })
      .join('\n'),
    htmlBody: html,
    name: 'Venkatesh Serenique',
  }

  // Replying to the alert then reaches the buyer directly. Only set when they
  // actually gave an address — an invalid replyTo makes MailApp throw.
  if (lead.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(lead.email)) {
    options.replyTo = lead.email
  }

  MailApp.sendEmail(options)
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
