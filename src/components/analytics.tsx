import Script from 'next/script'

/**
 * Google Tag Manager and Google Analytics 4.
 *
 * ─── The rule this file enforces ───────────────────────────────────────────
 *
 * GTM AND DIRECT GA4 ARE MUTUALLY EXCLUSIVE. If NEXT_PUBLIC_GTM_ID is set,
 * the direct GA4 tag is not rendered at all, whatever NEXT_PUBLIC_GA_ID says.
 *
 * The reason is the failure this setup is most likely to hit. Once GTM is on
 * the site, the obvious next step is to add a GA4 configuration tag inside
 * GTM. If the site ALSO loads gtag.js directly, every pageview is counted
 * twice. Nothing breaks, no error appears, and the numbers are simply wrong
 * in a way nobody notices until they are used to judge a campaign.
 *
 * ⚠ THE TRADE: the moment you set NEXT_PUBLIC_GTM_ID, analytics stops until
 * you add the GA4 tag inside GTM with measurement ID from NEXT_PUBLIC_GA_ID.
 * That is deliberate. Silence is recoverable in an afternoon; a month of
 * doubled numbers is not, because you cannot tell afterwards which half was
 * real.
 *
 * ─── Loading ───────────────────────────────────────────────────────────────
 *
 * `afterInteractive` puts the tag in after hydration rather than blocking
 * first paint. Analytics is not needed for the page to be usable, and this is
 * a marketing site whose whole job is to load fast on a phone on mobile data.
 *
 * ─── Privacy ───────────────────────────────────────────────────────────────
 *
 * These tags set cookies and send the visitor's IP to Google. The privacy
 * policy says so — see the "Analytics and tag management" section in
 * content/legal.ts. If you remove these tags, correct that section too, and
 * if you add another tag through GTM, check the policy still describes what
 * the site actually does.
 */
export function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  if (gtmId) {
    return (
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
    )
  }

  if (gaId) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
        </Script>
      </>
    )
  }

  return null
}

/**
 * GTM's <noscript> fallback. Belongs immediately after the opening <body>.
 *
 * Only rendered when GTM is the active tag, because direct GA4 has no
 * no-JavaScript path and an empty iframe would just be a wasted request.
 *
 * Worth keeping even though it only fires for visitors with JavaScript off:
 * it is also what some privacy browsers and preview crawlers fall back to,
 * and it costs one hidden iframe.
 */
export function AnalyticsNoScript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  if (!gtmId) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
