/**
 * Whether this tab has submitted an enquiry. It gates the brochure link on
 * /thank-you (components/brochure-download.tsx).
 *
 * sessionStorage, not localStorage: the flag should last for the visit and be
 * gone when the tab closes, so a returning visitor is asked again. It is a
 * courtesy gate, not security. The PDF is a public file; the point is only
 * that the link is handed over after an enquiry rather than before one.
 *
 * Both functions swallow storage errors (private windows, blocked site data,
 * quota). A throwing store must never break the lead submission that calls
 * markLeadSubmitted(); the visitor simply does not get the link.
 */
const KEY = 'lead-submitted'

export function markLeadSubmitted(): void {
  try {
    sessionStorage.setItem(KEY, '1')
  } catch {
    /* storage unavailable */
  }
}

export function hasSubmittedLead(): boolean {
  try {
    return sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}
