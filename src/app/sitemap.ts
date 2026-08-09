import type { MetadataRoute } from 'next'

import { articleMetas } from '@/content/articles'
import { SITE_URL } from '@/lib/seo'

/**
 * Priorities are relative to each other, not absolute scores. The home page
 * and the two pages a buyer converts from rank above the supporting pages; the
 * policy pages exist for compliance and are marked accordingly.
 *
 * /thank-you is deliberately absent — it is noindex and disallowed in robots,
 * and all three have to agree.
 *
 * ⚠ There is no /amenities or /gallery entry because those routes do not
 * exist yet — see the note on `nav` in content/project.ts. Add both here on
 * the same commit that creates them, or they will not be crawled.
 */
const ROUTES: Array<{ path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/configurations', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/location', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/updates', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/about-developer', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/terms-conditions', priority: 0.2, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'monthly' },
  { path: '/disclaimer', priority: 0.3, changeFrequency: 'monthly' },
]

/**
 * When the static pages' CONTENT last changed. Bump it when you edit copy,
 * not when you deploy.
 *
 * ⚠ This used to be `new Date()`, which stamped every static page with the
 * build time. That tells crawlers all nine pages changed on every deploy,
 * including deploys that only touched config. Google treats a lastmod that is
 * always "now" as noise and starts ignoring the field for the whole site,
 * which costs you the one signal that makes it recrawl quickly when something
 * genuinely did change.
 *
 * Articles below are exempt: they carry their own real dates already.
 */
const CONTENT_LAST_UPDATED = '2026-08-09'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_LAST_UPDATED)

  const staticRoutes = ROUTES.map((route) => ({
    url: route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  /* Articles are added by dropping a file into src/content/articles and
     registering it there. They appear here automatically — nobody has to
     remember to add a sitemap entry. `lastModified` is the article's own date,
     not the build date, so a crawler is not told every piece changed on every
     deploy. */
  const articleRoutes = articleMetas.map((meta) => ({
    url: `${SITE_URL}/updates/${meta.slug}`,
    lastModified: new Date(meta.updatedAt ?? meta.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...articleRoutes]
}
