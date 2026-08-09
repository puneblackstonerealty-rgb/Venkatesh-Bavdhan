import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope } from 'next/font/google'

import { Analytics, AnalyticsNoScript } from '@/components/analytics'
import { ChatWidget } from '@/components/chat-widget'
import { SiteFooter } from '@/components/footer'
import { Header } from '@/components/header'
import { LeadDialog } from '@/components/lead'
import { MobileCtaBar } from '@/components/mobile-cta'
import { SiteStructuredData } from '@/components/structured-data'
import { nav, site } from '@/content/project'
import { ALLOW_INDEXING, OG_IMAGE, SITE_URL } from '@/lib/seo'

import './globals.css'

/**
 * Fraunces + Manrope.
 *
 * This site has no photography — see the note at the top of globals.css — so
 * the typeface pair is doing work that a hero render would normally do, and it
 * is chosen rather than defaulted to. Fraunces is a soft, high-contrast serif
 * with an optical-size axis, so it holds its detail at the very large settings
 * a photo-less hero needs and does not fall apart at 15px. Manrope is a
 * geometric-humanist sans with a large x-height, which keeps dense factual
 * copy readable at small sizes.
 *
 * They also share no DNA with the Marcellus/Jost pair on the client's Kharadi
 * site. The two projects will be seen side by side and must not read as one
 * template recoloured.
 *
 * Both are variable fonts, so `weight` is deliberately omitted — specifying it
 * would pin a static instance and lose the axis.
 */
const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-src',
})

const body = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body-src',
})

const TITLE = 'Venkatesh Serenique Bavdhan | 2, 3 & 4 BHK Pre-Launch, Pune'
const DESCRIPTION =
  'Pre-launch at Bavdhan, Pune. 11 towers of G + 27 floors on 14 acres, in 2, 3 & 4 BHK. MahaRERA registered. Register for the first price list.'

export const metadata: Metadata = {
  // Makes every relative URL in metadata — canonicals, OG images — resolve to
  // an absolute one. Set NEXT_PUBLIC_SITE_URL at deploy time or share cards
  // and canonicals point at localhost.
  metadataBase: new URL(SITE_URL),

  // Title template: inner pages supply only their own name and this appends
  // the project, so no page has to repeat the brand and none exceeds the
  // length Google shows. `default` is the home page's full title.
  title: {
    default: TITLE,
    template: `%s | Venkatesh ${site.shortName}`,
  },
  description: DESCRIPTION,
  applicationName: site.name,
  alternates: { canonical: SITE_URL },
  // Inherited by any page that does not set its own. Gated on ALLOW_INDEXING
  // so an un-approved deployment cannot be indexed even if robots.txt is
  // ignored or the page is linked to directly. See src/lib/seo.ts.
  robots: ALLOW_INDEXING
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
      }
    : { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: site.name,
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ ...OG_IMAGE, alt: `${site.name}, ${site.locality}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  // Stops iOS Safari auto-linking figures like "14 Acres" as phone numbers.
  formatDetection: { telephone: false },

  /* Google Search Console site verification.
     Set GOOGLE_SITE_VERIFICATION in the Vercel project to the content value
     of the meta tag Search Console gives you (the token only, not the whole
     tag) and redeploy. Left unset, no tag is emitted at all, which is correct
     — an empty verification meta is worse than none.

     Search Console is what surfaces indexing errors, and it is the only place
     to submit the sitemap. Without it this site is flying blind. */
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport: Viewport = {
  themeColor: '#152430',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      {/* The sticky mobile CTA bar is fixed to the bottom, so the page needs
          matching clearance or it covers the last of the footer. */}
      <body className="min-h-dvh pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:pb-0">
        {/* GTM's noscript fallback, which Google requires immediately after
            the opening <body>. Renders nothing unless GTM is configured. */}
        <AnalyticsNoScript />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <Header nav={nav} phone={site.phone} phoneDisplay={site.phoneDisplay} />

        <main id="main">{children}</main>

        <SiteFooter />

        {/* One dialog for the whole app — every CTA on every route dispatches
            the same window event and this instance listens. */}
        <MobileCtaBar phone={site.phone} phoneDisplay={site.phoneDisplay} />
        <LeadDialog />
        <ChatWidget agentName={site.chatAgentName} />

        <SiteStructuredData />

        {/* Last in the body and loaded afterInteractive, so the tag never
            competes with the page for the first paint. */}
        <Analytics />
      </body>
    </html>
  )
}
