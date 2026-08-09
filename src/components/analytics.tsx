import Script from 'next/script'

/**
 * Google Tag Manager and Google Analytics 4.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 *  ⚠  STANDING RULE: NEVER ADD A GA4 TAG INSIDE GTM.
 *
 *  This site loads gtag.js DIRECTLY, and it also loads GTM. That is a
 *  deliberate choice made on 2026-08-09, not an oversight.
 *
 *  If anyone adds a "Google Analytics: GA4 Configuration" tag inside the GTM
 *  container, GA4 will be loaded twice and every pageview, session and
 *  conversion will be counted twice. Nothing errors. No warning appears in
 *  GA4 or GTM. The numbers are simply wrong, and afterwards you cannot
 *  separate the real half from the duplicate.
 *
 *  GTM is here for everything that is NOT GA4: Google Ads conversions, remarketing
 *  tags, Meta pixel, Search Console linkage, and so on. Use it for those.
 *
 *  If you ever do want GA4 managed through GTM instead, remove
 *  NEXT_PUBLIC_GA_ID from the environment FIRST, deploy, confirm gtag.js has
 *  stopped loading, and only then publish the GA4 tag in GTM.
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Why direct rather than through GTM: the published container had no GA4 tag,
 * so analytics was collecting nothing. Loading it here makes measurement work
 * on deploy with no dependency on anyone publishing a GTM container version.
 *
 * ─── Loading ───────────────────────────────────────────────────────────────
 *
 * `afterInteractive` puts both tags in after hydration rather than blocking
 * first paint. Analytics is not needed for the page to be usable, and this is
 * a marketing site whose whole job is to load fast on a phone on mobile data.
 *
 * ─── Privacy ───────────────────────────────────────────────────────────────
 *
 * These tags set cookies and send the visitor's IP to Google. The privacy
 * policy says so — see the "Analytics and tag management" section in
 * content/legal.ts. If you change what loads here, correct that section too.
 */
export function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <>
      {gtmId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}

      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          {/* Shares window.dataLayer with GTM by design. Both Google libraries
              expect that global and coexist on it; this is the standard dual
              install and is not the double-counting problem described above.
              The problem is two GA4 CONFIGS, not two libraries. */}
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      )}
    </>
  )
}

/**
 * GTM's <noscript> fallback. Belongs immediately after the opening <body>.
 *
 * GA4 has no no-JavaScript path, so this is GTM's alone.
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
