import type { MetadataRoute } from 'next'

import { ALLOW_INDEXING, SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  /* Every deployment answers on a public hostname that anyone with the link
     can reach, and so can any crawler that finds that link. Until the real
     domain is attached and the client has approved going live, the whole site
     is closed to crawlers and no sitemap is advertised.

     Flip it by setting ALLOW_INDEXING=true on the Vercel project. See the
     note on ALLOW_INDEXING in src/lib/seo.ts for why this is opt-in. */
  if (!ALLOW_INDEXING) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /thank-you is a post-submission confirmation with nothing to offer
        // search, and indexing it lets people arrive without ever enquiring.
        // /api/* is not a page. Both must also stay out of the sitemap.
        disallow: ['/api/', '/thank-you'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
