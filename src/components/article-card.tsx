import Image from 'next/image'
import Link from 'next/link'

import { formatArticleDate } from '@/content/articles'
import type { ArticleMeta } from '@/content/articles/types'
import { isVector } from '@/lib/images'

import { cn } from './ui'

/**
 * A card for one article.
 *
 * `feature` is for the newest piece on the index, `tile` for the rest and for
 * the strip on the home page.
 *
 * Articles do not need a cover image — most project updates will not have one.
 * Without a `cover` the card falls back to a typographic tile using the
 * category as its subject, which keeps the grid even without demanding a
 * picture nobody has.
 */
export function ArticleCard({
  meta,
  variant = 'tile',
  priority = false,
}: {
  meta: ArticleMeta
  variant?: 'feature' | 'tile'
  priority?: boolean
}) {
  const feature = variant === 'feature'

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border border-line bg-card',
        'transition-colors hover:border-brand/40 focus-within:border-brand',
        feature && 'md:flex-row',
      )}
    >
      <div
        className={cn(
          'relative shrink-0 overflow-hidden bg-brand-soft',
          feature ? 'aspect-[16/10] md:aspect-auto md:w-[46%]' : 'aspect-[16/10]',
        )}
      >
        {meta.cover ? (
          <Image
            src={meta.cover.src}
            alt={meta.cover.alt}
            /* Diagram covers are SVG. See src/lib/images.ts — without this the
               optimizer answers 400 and the card renders an empty tile, in
               production only. */
            unoptimized={isVector(meta.cover.src)}
            fill
            priority={priority}
            sizes={feature ? '(min-width: 768px) 520px, 100vw' : '(min-width: 640px) 380px, 100vw'}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-twilight px-6 text-center">
            <span className="font-display text-lg text-copper md:text-xl">{meta.category}</span>
          </div>
        )}
      </div>

      <div className={cn('flex flex-1 flex-col', feature ? 'p-6 md:p-8' : 'p-5')}>
        <p className="eyebrow text-brand">{meta.category}</p>

        <h3 className={cn('mt-3 text-ink', feature ? 'text-xl md:text-2xl' : 'font-display text-lg')}>
          {meta.title}
        </h3>

        <p className={cn('mt-3 text-sm text-body', feature ? 'line-clamp-4' : 'line-clamp-3')}>
          {meta.excerpt}
        </p>

        <p className="mt-auto pt-5 text-xs text-muted">
          {formatArticleDate(meta.publishedAt)}
          {meta.readingMinutes ? ` · ${meta.readingMinutes} min read` : ''}
        </p>
      </div>

      {/* Stretched link — the whole card is the target, and the heading is what
          a screen reader announces. */}
      <Link
        href={`/updates/${meta.slug}`}
        className="absolute inset-0 z-10 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <span className="sr-only">{meta.title}</span>
      </Link>
    </article>
  )
}
