import Image from 'next/image'

import { cn } from './ui'

/**
 * The project mark: the developer's gold interlaced "S" monogram and the
 * VENKATESH / SERENIQUE wordmark, lifted from the Serenique brochure (Oct
 * 2026, page 1) with the cream paper keyed out to transparency. Replaces the
 * type-set sprig wordmark this site used before the official artwork existed.
 *
 *   sm  the header and footer: monogram beside the wordmark, one line
 *   lg  a centred display lockup: monogram stacked over the wordmark
 *
 * `tone="dark"` swaps in the light versions (cream wordmark, flat light-gold
 * monogram) for the deep-olive bands. The brochure's gradient gold turns muddy
 * on dark green, which is why the dark monogram is a flat gold.
 */
export function Wordmark({
  tone = 'light',
  size = 'sm',
  priority = false,
  className,
}: {
  tone?: 'light' | 'dark'
  size?: 'sm' | 'lg'
  /** Set on the header, the one instance that is above the fold everywhere. */
  priority?: boolean
  className?: string
}) {
  const dark = tone === 'dark'

  if (size === 'lg') {
    return (
      <Image
        src={dark ? '/brand/serenique-logo-stacked-light.png' : '/brand/serenique-logo-stacked.png'}
        alt="Venkatesh Serenique"
        width={900}
        height={642}
        priority={priority}
        className={cn('h-auto w-60 md:w-72', className)}
      />
    )
  }

  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <Image
        src={dark ? '/brand/serenique-monogram-light.png' : '/brand/serenique-monogram.png'}
        alt=""
        width={512}
        height={512}
        priority={priority}
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
      />
      <Image
        src={dark ? '/brand/serenique-wordmark-light.png' : '/brand/serenique-wordmark.png'}
        alt="Venkatesh Serenique"
        width={900}
        height={240}
        priority={priority}
        className="h-7 w-auto sm:h-8"
      />
    </span>
  )
}
