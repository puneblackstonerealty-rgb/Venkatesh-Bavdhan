'use client'

import { openLead } from './lead'

/**
 * Sticky action bar, phones and small tablets only.
 *
 * ⚠ This is position:fixed, so no ancestor may carry transform, filter,
 * backdrop-filter or contain:paint — any of them makes that ancestor the
 * containing block and the bar stops being pinned to the viewport. It is
 * mounted as a direct child of the page root for exactly this reason.
 *
 * The body reserves matching bottom padding (see layout.tsx) so the bar never
 * covers the end of the footer, and the safe-area inset keeps it clear of the
 * iOS home indicator.
 */
export function MobileCtaBar({ phone, phoneDisplay }: { phone: string; phoneDisplay: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-twilight-deep pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={`tel:${phone}`}
          aria-label={`Call ${phoneDisplay}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/25 text-sm font-medium text-white transition-colors active:bg-white/10"
        >
          <PhoneIcon />
          Call Now
        </a>
        <button
          type="button"
          onClick={() => openLead('Register your interest')}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-copper text-sm font-medium text-twilight-deep transition-colors active:bg-white"
        >
          Register Now
        </button>
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 1.5a1.3 1.3 0 0 0-1.8.2L1 2.7C.4 3.4.3 4.4.8 5.2a19.6 19.6 0 0 0 10 10c.8.5 1.8.4 2.5-.2l1-.8a1.3 1.3 0 0 0 .2-1.8l-1.6-2a1.3 1.3 0 0 0-1.7-.3l-1.3.8a13.8 13.8 0 0 1-4.6-4.6l.8-1.3a1.3 1.3 0 0 0-.3-1.7l-2-1.6Z" />
    </svg>
  )
}
