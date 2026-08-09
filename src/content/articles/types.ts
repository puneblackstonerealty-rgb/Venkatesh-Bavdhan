import type { ReactNode } from 'react'

/**
 * Article categories.
 *
 * Kept to a short closed list on purpose. The index page groups and filters by
 * these, and a category nobody else uses is a category nobody clicks. Add one
 * only when there are at least two articles that need it.
 */
export const CATEGORIES = [
  'Project Update',
  'Construction',
  'Locality',
  'Developer News',
  'Buying Guide',
] as const

export type Category = (typeof CATEGORIES)[number]

export type ArticleMeta = {
  /** URL segment. Lowercase, hyphenated, stable — changing it breaks the link. */
  slug: string
  title: string
  /** One or two sentences. Used on the card, in <meta description> and in the share card. */
  excerpt: string
  category: Category
  /** ISO date, `YYYY-MM-DD`. Drives sort order and the visible date. */
  publishedAt: string
  /** Set when a piece is materially revised, not for typo fixes. */
  updatedAt?: string
  author: string
  /** Rough minutes. Optional — omitted rather than guessed badly. */
  readingMinutes?: number
  /**
   * Optional cover image, from /public. Articles read fine without one; the
   * card falls back to a typographic tile.
   */
  cover?: { src: string; alt: string }
  /**
   * Where the facts came from. Rendered at the foot of the article.
   * This site's whole editorial position is that figures carry their source —
   * an article that asserts something new should say where it came from.
   */
  sources?: Array<{ label: string; href?: string }>
}

/** What every article file exports. */
export type ArticleModule = {
  meta: ArticleMeta
  default: () => ReactNode
}
