'use client'

import { openLead } from './lead'

/** Named in the prefilled WhatsApp message so the sales team knows the source. */
const PROJECT = 'Venkatesh Serenique, Bavdhan'

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
/**
 * Builds the wa.me deep link.
 *
 * wa.me wants bare digits with the country code and no punctuation, so the
 * E.164 `+91…` in content has to be stripped. Passing it through with the plus
 * still opens WhatsApp but lands on "phone number shared via url is invalid".
 *
 * The prefilled text is what the salesperson sees first, so it names the
 * project. Two people enquiring about two different Venkatesh projects
 * otherwise arrive as identical "Hi" messages.
 */
function whatsappHref(phone: string, message: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}

export function MobileCtaBar({ phone, phoneDisplay }: { phone: string; phoneDisplay: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-twilight-deep pb-[env(safe-area-inset-bottom)] lg:hidden">
      {/* 1fr auto 1fr: the two text buttons stay equal width and the WhatsApp
          target sits between them at its natural icon width, rather than
          taking a third of the bar and squeezing the labels onto two lines on
          a 360px screen. */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-2 px-3 py-2.5">
        <a
          href={`tel:${phone}`}
          aria-label={`Call ${phoneDisplay}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/25 text-sm font-medium text-white transition-colors active:bg-white/10"
        >
          <PhoneIcon />
          Call Now
        </a>

        {/* Opens the WhatsApp app on a phone and web.whatsapp.com elsewhere.
            New tab on purpose: this bar is fixed to every page, and replacing
            the page would lose whatever they were reading.

            ⚠ This does NOT create a row in the leads sheet. It hands the
            visitor straight to WhatsApp, so the only record is the WhatsApp
            inbox. Deliberate, but it means sheet volume undercounts enquiries
            once this ships. */}
        <a
          href={whatsappHref(phone, `Hi, I would like details on ${PROJECT}.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Message us on WhatsApp about ${PROJECT}`}
          className="inline-flex min-h-11 w-11 items-center justify-center rounded-md border border-white/25 transition-colors active:bg-white/10"
        >
          <WhatsAppIcon />
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

/**
 * WhatsApp's own mark, kept in full colour.
 *
 * Left as the official green rather than recoloured to the site palette: the
 * whole value of this button is that it is recognised without being read, and
 * a copper WhatsApp glyph is just an unfamiliar shape. It is also the only
 * treatment WhatsApp's brand guidelines permit.
 *
 * The white disc behind the glyph is part of the mark and is what keeps it
 * legible on the dark bar.
 */
function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path
        fill="#fff"
        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
      />
      <path
        fill="#cfd8dc"
        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5"
      />
      <path
        fill="#40c351"
        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 1.5a1.3 1.3 0 0 0-1.8.2L1 2.7C.4 3.4.3 4.4.8 5.2a19.6 19.6 0 0 0 10 10c.8.5 1.8.4 2.5-.2l1-.8a1.3 1.3 0 0 0 .2-1.8l-1.6-2a1.3 1.3 0 0 0-1.7-.3l-1.3.8a13.8 13.8 0 0 1-4.6-4.6l.8-1.3a1.3 1.3 0 0 0-.3-1.7l-2-1.6Z" />
    </svg>
  )
}
