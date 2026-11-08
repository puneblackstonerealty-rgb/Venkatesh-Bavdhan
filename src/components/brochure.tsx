import Image from 'next/image'
import type { ReactNode } from 'react'

import { type GalleryImage, IMAGE_CREDIT, type PauseLine } from '@/content/project'

import { cn } from './ui'

/**
 * The building blocks of the brochure layout (spec decision 16).
 *
 * The brochure repeats one device on almost every spread: a two-line
 * "PAUSE the chaos. / PLAY with the choices." headline in spaced capitals,
 * the verb in one colour and its completion in gold, over a render or on
 * cream beside the gold hibiscus. These components are that device, so every
 * page sets it the same way.
 */

/** The gold-hairline-and-monogram divider the brochure uses under headings. */
export function MonogramRule({
  tone = 'light',
  center = false,
  className,
}: {
  tone?: 'light' | 'dark'
  center?: boolean
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'rule-monogram',
        tone === 'dark' && 'rule-monogram-light',
        center && 'rule-monogram-center',
        className,
      )}
    >
      <span />
    </span>
  )
}

/**
 * The brochure's two-tone headline. On cream the verb is olive; over a render
 * it is cream. The completion is gold either way: the brochure gold on cream
 * (large type only, 3.7:1 passes for text this size), light gold on dark.
 */
export function PauseHeadline({
  lines,
  tone = 'light',
  size = 'lg',
  align = 'left',
  as: Tag = 'h2',
  className,
}: {
  lines: PauseLine
  tone?: 'light' | 'dark'
  size?: 'md' | 'lg'
  align?: 'left' | 'center'
  as?: 'h2' | 'p'
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <Tag
      className={cn(
        'font-display tracking-normal uppercase',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {lines.map((line) => (
        <span key={line.verb} className="block">
          <span
            className={cn(
              'block leading-none tracking-[0.06em]',
              size === 'lg' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl',
              dark ? 'text-surface' : 'text-brand',
            )}
          >
            {line.verb}
          </span>
          <span
            className={cn(
              'mt-1.5 mb-3 block tracking-[0.12em]',
              size === 'lg' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
              dark ? 'text-copper' : 'text-copper-deep',
            )}
          >
            {line.rest}
          </span>
        </span>
      ))}
    </Tag>
  )
}

/**
 * A brochure spread: the image fills one half edge to edge, the other half is
 * a page of copy, cream with the gold hibiscus or deep olive. The brochure's
 * lifestyle pictures keep their subject in the middle, so type laid over them
 * lands on a face; side by side, both read. On a phone the image comes first.
 */
export function ImageBand({
  image,
  lines,
  body,
  align = 'left',
  tone = 'light',
  children,
}: {
  image: GalleryImage
  lines: PauseLine
  body?: string
  /** Which side the copy sits on. */
  align?: 'left' | 'right'
  tone?: 'light' | 'dark'
  children?: ReactNode
}) {
  const dark = tone === 'dark'
  const copyRight = align === 'right'
  return (
    <section className={cn('grid lg:grid-cols-2', dark ? 'bg-twilight' : 'bg-card')}>
      <div
        className={cn(
          'relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-[38rem]',
          copyRight ? 'lg:order-1' : 'lg:order-2',
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <p className="absolute right-3 bottom-3 rounded-xs bg-twilight-deep/55 px-2 py-0.5 text-[0.6rem] tracking-[0.06em] text-surface/85">
          {IMAGE_CREDIT}
        </p>
      </div>
      <div
        className={cn(
          'relative flex items-center overflow-hidden px-5 py-16 md:px-12 lg:py-20 xl:px-20',
          copyRight ? 'lg:order-2' : 'lg:order-1',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'ornament-hibiscus -right-16 -bottom-20 w-60 md:w-72',
            dark && 'ornament-hibiscus-light',
          )}
        />
        <div className="relative max-w-[28rem]">
          <PauseHeadline lines={lines} tone={tone} />
          <MonogramRule tone={tone} className="mt-2" />
          {body && (
            <p className={cn('mt-6 text-base', dark ? 'font-light text-surface/85' : 'text-body')}>
              {body}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

/**
 * One captioned image in a grid. `ratio` crops to a common shape so a row of
 * mixed renders lines up; the full image is never distorted.
 */
export function GalleryFigure({
  image,
  ratio = 'aspect-[4/3]',
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  className,
}: {
  image: GalleryImage
  ratio?: string
  sizes?: string
  className?: string
}) {
  return (
    <figure className={cn('group', className)}>
      <div className={cn('relative overflow-hidden rounded-lg bg-line', ratio)}>
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />
        <span className="absolute right-2 bottom-2 rounded-xs bg-twilight-deep/60 px-2 py-0.5 text-[0.6rem] tracking-[0.06em] text-surface/85">
          {IMAGE_CREDIT}
        </span>
      </div>
      <figcaption className="mt-3 text-sm text-ink">{image.caption}</figcaption>
    </figure>
  )
}

/**
 * The brochure's highlight icons, redrawn as gold line art: one stroke weight,
 * round caps, a 32-unit grid. Decorative; the tile's text carries the meaning.
 */
export function HighlightIcon({ id, className }: { id: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    land: (
      <>
        <path d="M4 25c4-3 8-3 12 0s8 3 12 0" />
        <path d="M16 21V9" />
        <path d="M16 13c-3 0-5-2-5-5 3 0 5 2 5 5Z" />
        <path d="M16 11c3 0 5-2 5-5-3 0-5 2-5 5Z" />
      </>
    ),
    homes: (
      <>
        <path d="M5 26V12l11-7 11 7v14" />
        <path d="M12 26v-8h8v8" />
        <path d="M3 26h26" />
      </>
    ),
    tower: (
      <>
        <path d="M9 28V5h10v23" />
        <path d="M19 12h5v16" />
        <path d="M12 9h4M12 13h4M12 17h4M12 21h4" />
        <path d="M5 28h22" />
      </>
    ),
    amenities: (
      <>
        <path d="M4 22c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
        <path d="M10 18V7a3 3 0 0 1 6 0" />
        <path d="M20 18V7a3 3 0 0 1 6 0" />
        <path d="M10 12h10" />
      </>
    ),
    location: (
      <>
        <path d="M16 28s9-8.5 9-15a9 9 0 0 0-18 0c0 6.5 9 15 9 15Z" />
        <circle cx="16" cy="13" r="3.5" />
      </>
    ),
    rera: (
      <>
        <path d="M16 4l10 4v7c0 6-4.5 10.5-10 13-5.5-2.5-10-7-10-13V8l10-4Z" />
        <path d="M11.5 16l3 3 6-6" />
      </>
    ),
  }
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[id]}
    </svg>
  )
}
