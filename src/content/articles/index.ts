import type { ArticleModule } from './types'

/* ───────────────────────────────────────────────────────────────────────────
   THE ARTICLE REGISTRY

   ┌─ TO ADD AN ARTICLE ─────────────────────────────────────────────────────┐
   │ 1. Copy any existing file in this folder to <your-slug>.tsx             │
   │ 2. Edit its `meta` and its body                                        │
   │ 3. Add one import line below, and one entry to REGISTERED              │
   │ That is the whole process. No CMS, no database, no build step.          │
   └─────────────────────────────────────────────────────────────────────────┘

   The imports are explicit rather than globbed because Next needs to know
   every route at build time in order to prerender it. A glob would work in
   dev and silently ship an empty index in production.

   Sorting, the "latest" strip on the home page, the sitemap entries and the
   category counts all read from this one array — nothing else needs touching.
   ─────────────────────────────────────────────────────────────────────────── */

import * as releasedSoFar from './what-has-actually-been-released'
import * as bavdhanConnectivity from './what-bavdhan-actually-connects-to'

const REGISTERED: ArticleModule[] = [releasedSoFar, bavdhanConnectivity]

/** Newest first. This is the order every listing uses. */
export const articles: ArticleModule[] = [...REGISTERED].sort((a, b) =>
  b.meta.publishedAt.localeCompare(a.meta.publishedAt),
)

export const articleMetas = articles.map((article) => article.meta)

export function getArticle(slug: string): ArticleModule | undefined {
  return articles.find((article) => article.meta.slug === slug)
}

/** Categories that actually have an article, in listing order, with counts. */
export function usedCategories(): Array<{ name: string; count: number }> {
  const counts = new Map<string, number>()
  for (const { meta } of articles) {
    counts.set(meta.category, (counts.get(meta.category) ?? 0) + 1)
  }
  return [...counts.entries()].map(([name, count]) => ({ name, count }))
}

/** Up to `limit` other articles, newest first. Used under each article. */
export function relatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug)?.meta
  if (!current) return articleMetas.slice(0, limit)
  // Same category first, then everything else — so a construction update leads
  // to the next construction update rather than to a locality guide.
  const rest = articleMetas.filter((meta) => meta.slug !== slug)
  const sameCategory = rest.filter((meta) => meta.category === current.category)
  const others = rest.filter((meta) => meta.category !== current.category)
  return [...sameCategory, ...others].slice(0, limit)
}

/** `2026-08-07` → `7 August 2026`. One formatter so dates cannot drift. */
export function formatArticleDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return `${day} ${MONTHS[month - 1]} ${year}`
}

export const updatesIndex = {
  eyebrow: 'Updates',
  title: 'Project updates & Bavdhan notes',
  lede: 'What the developer has actually released, what has changed on site, and what is worth knowing about Bavdhan. Updated as the project moves.',
  empty: 'The first update is being written. Register and we will send it to you.',
}
