import type { Metadata } from 'next'

import { site } from '@/content/project'

/**
 * One place that knows the site's absolute origin.
 *
 * The same build answers on the apex, on www, on <project>.vercel.app and on
 * every immutable deployment URL. Without a canonical pointing at one of them,
 * search engines see several copies of every page and pick a winner
 * themselves — usually not the one you want.
 *
 * Resolution order:
 *
 *   1. NEXT_PUBLIC_SITE_URL — the real domain. Set this per environment once a
 *      domain is attached, and it wins over everything below.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the project's stable production
 *      hostname, so a production build with no domain yet still points at
 *      itself rather than at localhost.
 *   3. VERCEL_URL — this deployment's own immutable hostname. On a preview
 *      this is the only right answer: a canonical must name the deployment
 *      being looked at, not a domain serving different content.
 *   4. localhost, for `next dev`.
 *
 * All three Vercel variables are server-side, which is fine because every
 * reader of SITE_URL is a server component, a metadata export, or a route
 * handler. If a client component ever needs it, this has to move to a
 * NEXT_PUBLIC_ variable or it will silently resolve to localhost in the
 * browser bundle.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit

  // Vercel sets these as bare hostnames, with no protocol.
  const host =
    (process.env.VERCEL_ENV === 'production'
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL
      : undefined) ?? process.env.VERCEL_URL

  return host ? `https://${host}` : 'http://localhost:3000'
}

export const SITE_URL = resolveSiteUrl().replace(/\/$/, '')

/**
 * Whether this deployment may be indexed by search engines. Off unless
 * ALLOW_INDEXING is exactly 'true'.
 *
 * ⚠ Opt-IN on purpose. An earlier version of this keyed off VERCEL_ENV and
 * assumed anything not production was a preview needing protection. That is
 * backwards, and it failed the first time it ran: `vercel deploy` on a project
 * with no production deployment yet publishes straight to production, so the
 * guard did not fire and the pre-launch site went up fully crawlable on
 * <project>.vercel.app.
 *
 * Defaulting to "blocked" means the failure mode of forgetting this variable
 * is an unindexed site, which costs nothing and is fixed by setting it. The
 * other way round, forgetting it costs an indexed vercel.app domain competing
 * with the real one for the project's own name, plus a pre-launch page in
 * Google that the client never signed off. Those are not symmetric.
 *
 * Set ALLOW_INDEXING=true in the Vercel project only once the real domain is
 * attached and the client has approved the content going live.
 */
export const ALLOW_INDEXING = process.env.ALLOW_INDEXING === 'true'

/** Landscape card for social shares. See src/app/opengraph-image.tsx. */
export const OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630 }

/* Google truncates titles near 60 characters and descriptions near 158. Copy
   past that is not penalised, it is just cut mid-sentence in the result — so
   the useful half goes first. Every page here is inside both. */

type PageSeoInput = {
  /** Path with a leading slash. '/' for the home page. */
  path: string
  title: string
  description: string
  /** Set false for pages that should never appear in results. */
  index?: boolean
  image?: { url: string; width: number; height: number }
}

/**
 * Builds a page's metadata with its canonical, Open Graph and Twitter tags kept
 * in agreement. Pages call this rather than hand-rolling the object, which is
 * how a site ends up with three different canonical strategies.
 */
export function pageMetadata({
  path,
  title,
  description,
  index = true,
  image = OG_IMAGE,
}: PageSeoInput): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    /* robots.txt keeps a crawler from requesting the page. This keeps the
       page out of the index even when something links to it directly, which
       robots.txt alone does not do. Both are needed. */
    robots:
      index && ALLOW_INDEXING
        ? { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }
        : { index: false, follow: false },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: site.name,
      url,
      title,
      description,
      images: [{ ...image, alt: `${site.name}, ${site.locality}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  }
}
