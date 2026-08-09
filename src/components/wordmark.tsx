import { cn } from './ui'

/**
 * The project wordmark.
 *
 * Set in type rather than shipped as an image — but no longer invented. The
 * developer's own launch creative (source C in content/project.ts) locks the
 * mark up as a sprig device over three lines: VENKATESH / SERENIQUE / BAVDHAN,
 * with the outer two letterspaced small caps and BAVDHAN flanked by rules.
 * That structure is reproduced here.
 *
 * ⚠ Still type, not the artwork. The only copy of that creative available is
 * stamped with a competing broker's watermark, so it is not shipped — see the
 * asset checklist in the README for what to request from the developer. When
 * the clean wordmark arrives, replace the markup in this one file; nothing
 * else references it.
 */

/** The sprig above the wordmark on the developer's creative. */
function Sprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 26"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <path d="M10 25V6" />
      <path d="M10 9.5C10 9.5 6.4 9.1 4.6 6.9 2.8 4.7 3.4 1.6 3.4 1.6s3.1.2 4.9 2.4C10.1 6.2 10 9.5 10 9.5Z" />
      <path d="M10 9.5s3.6-.4 5.4-2.6c1.8-2.2 1.2-5.3 1.2-5.3s-3.1.2-4.9 2.4C9.9 6.2 10 9.5 10 9.5Z" />
      <path d="M10 16.5s-2.7-.3-4.1-2C4.6 12.9 5 10.5 5 10.5s2.4.2 3.8 1.8c1.3 1.7 1.2 4.2 1.2 4.2Z" />
      <path d="M10 16.5s2.7-.3 4.1-2c1.3-1.6.9-4 .9-4s-2.4.2-3.8 1.8c-1.3 1.7-1.2 4.2-1.2 4.2Z" />
    </svg>
  )
}

export function Wordmark({
  tone = 'light',
  size = 'sm',
  className,
}: {
  tone?: 'light' | 'dark'
  /** `sm` for the header and footer, `lg` for a centred display lockup. */
  size?: 'sm' | 'lg'
  className?: string
}) {
  const dark = tone === 'dark'
  const large = size === 'lg'

  const accent = dark ? 'text-copper' : 'text-brand'
  const rule = dark ? 'bg-copper/45' : 'bg-brand/35'

  return (
    <span
      className={cn(
        'flex items-center',
        large ? 'flex-col gap-2.5' : 'gap-2.5',
        className,
      )}
    >
      <Sprig className={cn(accent, large ? 'h-8 w-6' : 'h-7 w-5 shrink-0')} />

      <span className={cn('flex flex-col', large && 'items-center')}>
        <span
          className={cn(
            'wordmark-kicker',
            accent,
            large && 'text-[0.625rem] tracking-[0.42em]',
          )}
        >
          Venkatesh
        </span>

        <span
          className={cn(
            'wordmark mt-0.5',
            large ? 'text-4xl md:text-5xl' : 'text-xl sm:text-2xl',
            dark ? 'text-white' : 'text-ink',
          )}
        >
          Serenique
        </span>

        {/* BAVDHAN sits between two short rules on the creative. At header
            size the rules are dropped — at 8px they read as noise. */}
        <span className={cn('mt-1 flex items-center gap-2', large && 'gap-3')}>
          {large && <span aria-hidden="true" className={cn('h-px w-8', rule)} />}
          <span
            className={cn(
              'wordmark-kicker',
              dark ? 'text-white/55' : 'text-muted',
              large && 'text-[0.625rem] tracking-[0.42em]',
            )}
          >
            Bavdhan
          </span>
          {large && <span aria-hidden="true" className={cn('h-px w-8', rule)} />}
        </span>
      </span>
    </span>
  )
}
