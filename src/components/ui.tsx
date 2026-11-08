import type { ReactNode } from 'react'

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-[1120px] px-5 md:px-8', className)}>{children}</div>
  )
}

/**
 * Section tones.
 *
 * `dark` sets `text-surface/70` on the wrapper so descendants inherit a readable
 * default instead of every child having to remember it. Copper is only offered
 * on dark — see the note in globals.css about why it never appears on light.
 */
export function Section({
  children,
  id,
  tone = 'white',
  ornament,
  className,
}: {
  children: ReactNode
  id?: string
  tone?: 'white' | 'surface' | 'dark'
  /** The brochure's gold hibiscus line-art in one corner. Use sparingly: two
      or three sections a page at most, or it stops reading as a detail. */
  ornament?: 'left' | 'right'
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        ornament && 'relative overflow-hidden',
        tone === 'surface' && 'bg-surface',
        tone === 'white' && 'bg-card',
        tone === 'dark' && 'bg-twilight text-surface/70',
        className,
      )}
    >
      {ornament && (
        <span
          aria-hidden="true"
          className={cn(
            'ornament-hibiscus w-56 md:w-80',
            ornament === 'right'
              ? '-top-10 -right-16 md:-right-10'
              : '-bottom-16 -left-16 -scale-x-100 md:-left-20 md:w-60',
            tone === 'dark' && 'ornament-hibiscus-light',
          )}
        />
      )}
      <div className={cn(ornament && 'relative')}>{children}</div>
    </section>
  )
}

/**
 * Every section opens the same way: eyebrow, title, optional lede. Centralised
 * so the rhythm cannot drift section to section.
 */
export function SectionHead({
  eyebrow,
  title,
  lede,
  tone = 'light',
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  lede?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <div className={cn('max-w-[46rem]', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className={cn('eyebrow', dark ? 'text-copper' : 'text-gold-text')}>{eyebrow}</p>
      )}
      <h2 className={cn('mt-4 text-2xl md:text-3xl', dark && 'text-surface')}>{title}</h2>
      {/* The brochure's divider: gold hairlines either side of the monogram. */}
      <span
        aria-hidden="true"
        className={cn(
          'rule-monogram mt-4',
          dark && 'rule-monogram-light',
          align === 'center' && 'rule-monogram-center',
        )}
      >
        <span />
      </span>
      {lede && (
        <p className={cn('mt-5 text-base', dark ? 'text-surface/65' : 'text-body')}>{lede}</p>
      )}
    </div>
  )
}

type ButtonVariant = 'primary' | 'secondary' | 'copper' | 'ghost-light'

const VARIANTS: Record<ButtonVariant, string> = {
  /* 8.2:1 on white. The page's default action. */
  primary: 'bg-brand text-surface hover:bg-brand-hover',
  /* Outlined, for the second action in a pair — so a hero with two CTAs reads
     as one choice and one alternative rather than two competing slabs. */
  secondary: 'border border-line-strong bg-card text-ink hover:border-brand hover:text-brand',
  /* Dark surfaces only. 5.8:1 twilight-deep on copper. */
  copper: 'bg-copper text-twilight-deep hover:bg-surface',
  'ghost-light': 'border border-surface/30 text-surface hover:border-surface hover:bg-surface/10',
}

export function Button({
  children,
  onClick,
  type = 'button',
  href,
  download,
  className,
  full,
  size = 'md',
  variant = 'primary',
  ...rest
}: {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  href?: string
  /** Only meaningful with `href`: asks the browser to save the file rather than navigate. */
  download?: boolean
  className?: string
  full?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: ButtonVariant
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type' | 'className'>) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors',
    // 44px minimum on every size — the small variant shrinks padding and type,
    // never the touch target.
    size === 'sm' && 'min-h-11 px-4 text-sm',
    size === 'md' && 'min-h-11 px-6 text-sm',
    size === 'lg' && 'min-h-12 px-8 text-base',
    VARIANTS[variant],
    full && 'w-full',
    className,
  )
  if (href) {
    return (
      <a href={href} download={download} onClick={onClick} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}

export function Eyebrow({
  children,
  tone = 'light',
  className,
}: {
  children: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <p className={cn('eyebrow', tone === 'dark' ? 'text-copper' : 'text-brand', className)}>
      {children}
    </p>
  )
}

/**
 * A label/value pair. Used for the hero facts and the developer figures, so
 * the two cannot drift apart in size or spacing.
 */
export function Stat({
  label,
  value,
  tone = 'light',
}: {
  label: string
  value: string
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <div>
      <dt className={cn('eyebrow', dark ? 'text-surface/45' : 'text-muted')}>{label}</dt>
      <dd className={cn('mt-1.5 font-display text-lg', dark ? 'text-surface' : 'text-ink')}>
        {value}
      </dd>
    </div>
  )
}
