import type { Metadata, Viewport } from 'next'
import { Forum, Poppins } from 'next/font/google'

import { Analytics, AnalyticsNoScript } from '@/components/analytics'
import { ChatWidget } from '@/components/chat-widget'
import { SiteFooter } from '@/components/footer'
import { Header } from '@/components/header'
import { LeadDialog } from '@/components/lead'
import { MobileCtaBar } from '@/components/mobile-cta'
import { SiteStructuredData } from '@/components/structured-data'
import { nav, site, siteMeta } from '@/content/project'
import { ALLOW_INDEXING, OG_IMAGE, SITE_URL } from '@/lib/seo'

import './globals.css'

/**
 * Forum + Poppins, chosen to match the developer's Serenique brochure.
 *
 * The brochure sets its headlines in a flared, glyphic Roman face in spaced
 * capitals ("PAUSE THE CHAOS. PLAY WITH THE CHOICES."). Forum is the closest
 * free face with the same flared terminals. Marcellus would be closer still,
 * but the client's Kharadi site already uses it, and the two projects are
 * seen side by side. Poppins is the face on the developer's own Serenique
 * floor plans, so the body copy matches the developer's documents.
 *
 * Forum ships one weight (400). Poppins is not a variable font, so its
 * weights are listed: 300 for large light text, 400 body, 500 and 600 for
 * labels and buttons.
 */
const display = Forum({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display-src',
})

const body = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-body-src',
})

/* Read from content/project.ts so the figures in them cannot drift from the
   page. They were hard-coded here until November 2026, and still said
   "pre-launch" and "11 towers on 14 acres" after the project launched. */
const TITLE = siteMeta.title
const DESCRIPTION = siteMeta.description

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
  // Stops iOS Safari auto-linking figures like "3.75 Acres" as phone numbers.
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
  themeColor: '#26361a',
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-surface"
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
