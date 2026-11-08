import Image from 'next/image'
import Link from 'next/link'

import { brochureCopy, legal, nav, site } from '@/content/project'

import { Container, Eyebrow } from './ui'
import { Wordmark } from './wordmark'

/**
 * Rendered once in the root layout, so every route carries the same MahaRERA
 * disclosure and the same legal links.
 */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-twilight-deep py-16 text-surface/60">
      <span
        aria-hidden="true"
        className="ornament-hibiscus ornament-hibiscus-light -top-16 -right-20 w-72 md:-right-6 md:w-96"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <Wordmark tone="dark" size="lg" className="w-48 md:w-56" />
            <p className="mt-6 max-w-[24rem] text-sm">
              Enquiries and site visits for {site.name}, {site.locality}.
            </p>
            <a
              href={`tel:${site.phone}`}
              className="mt-5 inline-block font-display text-xl text-surface hover:text-copper"
            >
              {site.phoneDisplay}
            </a>
          </div>

          <div>
            <Eyebrow tone="dark">{legal.reraHeading}</Eyebrow>
            <p className="mt-5 text-sm">{legal.reraIntro}</p>

            <ul className="mt-6 space-y-3">
              {legal.reraRegistrations.map((registration) => (
                <li
                  key={registration.id}
                  className="flex items-center justify-between gap-4 rounded-lg border border-copper/25 p-4"
                >
                  <span>
                    <span className="block text-sm font-medium text-surface">
                      {registration.phase}
                    </span>
                    {registration.wings && (
                      <span className="block text-xs text-surface/50">{registration.wings}</span>
                    )}
                    <span className="mt-1 block font-mono text-[13px] break-all text-copper">
                      {registration.id}
                    </span>
                  </span>
                  {/* The QR the developer prints beside this number on the
                      brochure cover (B p1). It decodes to the MahaRERA project
                      record, maharerait.maharashtra.gov.in/project/view/66318.
                      MahaRERA's advertising rules ask for the QR with the
                      number. */}
                  <span className="shrink-0 text-center">
                    <Image
                      src="/brand/serenique-rera-qr.png"
                      alt={`MahaRERA QR code for ${registration.id}`}
                      width={462}
                      height={462}
                      className="h-20 w-20 rounded-xs bg-white p-1"
                    />
                    <span className="mt-1 block text-[0.6rem] text-surface/50">Scan to verify</span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={legal.reraPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-copper underline underline-offset-4 hover:text-surface"
            >
              Verify at maharera.maharashtra.gov.in
            </a>
          </div>
        </div>

        {/* The brochure's back-cover credits (B p44). */}
        <dl className="mt-14 grid gap-x-8 gap-y-4 border-t border-surface/10 pt-8 text-xs sm:grid-cols-2 lg:grid-cols-4">
          {brochureCopy.credits.map((credit) => (
            <div key={credit.role}>
              <dt className="tracking-[0.12em] text-copper uppercase">{credit.role}</dt>
              <dd className="mt-1 text-surface/70">{credit.name}</dd>
            </div>
          ))}
        </dl>

        <nav
          aria-label="Footer"
          className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-surface/10 pt-8 text-sm"
        >
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-surface">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 space-y-3 text-xs leading-relaxed text-surface/40">
          <p>{legal.advertiser}</p>
          <p>{legal.officeAddress}</p>
          <p>
            Enquiries: {site.phoneDisplay} ·{' '}
            <a href={`mailto:${site.leadEmail}`} className="hover:text-surface">
              {site.leadEmail}
            </a>
          </p>
          <p>
            <span className="font-medium text-surface/65">Disclaimer: </span>
            {legal.disclaimerShort}{' '}
            <Link href="/disclaimer" className="text-copper underline underline-offset-4">
              Read the full disclaimer
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-surface/10 pt-6 text-xs text-surface/40">
          <span>
            © {new Date().getFullYear()} {legal.copyright}
          </span>
          <span className="flex flex-wrap items-center gap-4">
            {legal.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-surface">
                {link.label}
              </Link>
            ))}
          </span>
        </div>
      </Container>
    </footer>
  )
}
