import Link from 'next/link'

import { legal, nav, site } from '@/content/project'

import { Container, Eyebrow } from './ui'
import { Wordmark } from './wordmark'

/**
 * Rendered once in the root layout, so every route carries the same MahaRERA
 * disclosure and the same legal links.
 */
export function SiteFooter() {
  return (
    <footer className="bg-twilight-deep py-16 text-white/55">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <Wordmark tone="dark" />
            <p className="mt-6 max-w-[24rem] text-sm">
              Pre-launch registrations for {site.name}, {site.locality}.
            </p>
            <a
              href={`tel:${site.phone}`}
              className="mt-5 inline-block font-display text-xl text-white hover:text-copper"
            >
              {site.phoneDisplay}
            </a>
          </div>

          <div>
            <Eyebrow tone="dark">{legal.reraHeading}</Eyebrow>
            <p className="mt-5 text-sm">{legal.reraIntro}</p>

            <ul className="mt-6 space-y-3">
              {legal.reraRegistrations.map((registration) => (
                <li key={registration.id} className="rounded-lg border border-white/12 p-4">
                  <span className="block text-sm font-medium text-white">{registration.phase}</span>
                  {registration.wings && (
                    <span className="block text-xs text-white/50">{registration.wings}</span>
                  )}
                  <span className="mt-1 block font-mono text-[13px] break-all text-copper">
                    {registration.id}
                  </span>
                  {/* No QR: none has been published for this registration, and
                      a QR resolving to the wrong project is worse than none. */}
                </li>
              ))}
            </ul>

            <a
              href={legal.reraPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-copper underline underline-offset-4 hover:text-white"
            >
              Verify at maharera.maharashtra.gov.in
            </a>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-sm"
        >
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 space-y-3 text-xs leading-relaxed text-white/40">
          <p>{legal.advertiser}</p>
          <p>{legal.officeAddress}</p>
          <p>
            Enquiries: {site.phoneDisplay} ·{' '}
            <a href={`mailto:${site.leadEmail}`} className="hover:text-white">
              {site.leadEmail}
            </a>
          </p>
          <p>
            <span className="font-medium text-white/65">Disclaimer: </span>
            {legal.disclaimerShort}{' '}
            <Link href="/disclaimer" className="text-copper underline underline-offset-4">
              Read the full disclaimer
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} {legal.copyright}
          </span>
          <span className="flex flex-wrap items-center gap-4">
            {legal.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </span>
        </div>
      </Container>
    </footer>
  )
}
