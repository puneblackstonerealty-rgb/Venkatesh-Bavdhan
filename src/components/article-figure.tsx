import Image from 'next/image'
import type { ReactNode } from 'react'

import { isVector } from '@/lib/images'

import { cn } from './ui'

/**
 * A picture inside an article body.
 *
 * ⚠ This project has NO imagery of its own. No renders, no elevations, no
 * master plan, no brochure — see the release ledger in content/project.ts.
 * That constraint decides what may appear here, and `credit` is required
 * rather than defaulted so the decision is made per picture:
 *
 *   'Illustration'          the diagrams in /public/illustrations, drawn for
 *                           these articles. Charts and schematics only. They
 *                           never depict Serenique, because nobody knows what
 *                           it looks like yet.
 *   'Delivered project'     a photograph of a building Venkatesh Buildcon has
 *                           actually completed, from /public/developer. Fair
 *                           to show when the subject IS the track record, and
 *                           the caption must name the project so it cannot be
 *                           mistaken for Serenique.
 *
 * There is deliberately no 'Artistic impression' option. The sibling Kharadi
 * site has renders and uses that credit. Here it would have to sit under a
 * picture of something else, which is the exact substitution this site exists
 * not to make.
 *
 * `caption` is not decoration. It is where the number in the picture gets its
 * source, since SVG text is not selectable, not searchable and not read by
 * most crawlers.
 *
 * ⚠ Do not pass the same src as the article's `meta.cover`. The cover renders
 * immediately above the body, so a matching first figure shows the identical
 * picture twice within one screen.
 */
export function Figure({
  src,
  alt,
  width,
  height,
  caption,
  credit,
  className,
}: {
  src: string
  /** Describes the image for someone who cannot see it. Not the caption. */
  alt: string
  width: number
  height: number
  /** Visible line under the image. Carries the source of any figure shown. */
  caption: string
  credit: 'Illustration' | 'Delivered project'
  className?: string
}) {
  return (
    <figure className={cn('mt-10 mb-10', className)}>
      {/* Capped at the file's own pixel width so nothing is ever upscaled.
          Most of the developer photographs are 624px wide; stretched to the
          prose column they go visibly soft, and a blurry photograph on a site
          whose whole argument is "we do not fake it" reads badly. Vectors have
          no intrinsic size, so they are free to fill the column. */}
      <div
        className="mx-auto overflow-hidden rounded-xl border border-line bg-surface"
        style={isVector(src) ? undefined : { maxWidth: width }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 832px, 100vw"
          /* See src/lib/images.ts — the optimizer 400s on SVG by default. */
          unoptimized={isVector(src)}
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        {caption} <span className="text-muted/70">· {credit}</span>
      </figcaption>
    </figure>
  )
}

/**
 * A short aside that is not part of the argument: a definition, a caveat, a
 * number worth pulling out of the paragraph.
 *
 * Deliberately not a blockquote. Blockquotes mean "someone else said this",
 * and using them for emphasis is how a page ends up quoting itself.
 */
export function Note({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="mt-8 rounded-xl border-l-2 border-brand bg-brand-soft/60 p-5">
      {title && <p className="eyebrow text-brand">{title}</p>}
      <div className={cn('text-sm text-body', title && 'mt-3', '[&>p]:mt-3 [&>p:first-child]:mt-0')}>
        {children}
      </div>
    </aside>
  )
}
