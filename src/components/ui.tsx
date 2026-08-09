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
 * `dark` sets `text-white/70` on the wrapper so descendants inherit a readable
 * default instead of every child having to remember it. Copper is only offered
 * on dark — see the note in globals.css about why it never appears on light.
 */
export function Section({
  children,
  id,
  tone = 'white',
  className,
}: {
  children: ReactNode
  id?: string
  tone?: 'white' | 'surface' | 'dark'
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        tone === 'surface' && 'bg-surface',
        tone === 'white' && 'bg-card',
        tone === 'dark' && 'bg-twilight text-white/70',
        className,
      )}
    >
      {children}
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
        <p
          className={cn(
            'eyebrow rule-lead',
            align === 'center' && '[&::after]:mx-auto',
            dark ? 'text-copper' : 'text-brand',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={cn('mt-5 text-2xl md:text-3xl', dark && 'text-white')}>{title}</h2>
      {lede && <p className={cn('mt-4 text-base', dark ? 'text-white/65' : 'text-body')}>{lede}</p>}
    </div>
  )
}

type ButtonVariant = 'primary' | 'secondary' | 'copper' | 'ghost-light'

const VARIANTS: Record<ButtonVariant, string> = {
  /* 8.2:1 on white. The page's default action. */
  primary: 'bg-brand text-white hover:bg-brand-hover',
  /* Outlined, for the second action in a pair — so a hero with two CTAs reads
     as one choice and one alternative rather than two competing slabs. */
  secondary: 'border border-line-strong bg-card text-ink hover:border-brand hover:text-brand',
  /* Dark surfaces only. 5.8:1 twilight-deep on copper. */
  copper: 'bg-copper text-twilight-deep hover:bg-white',
  'ghost-light': 'border border-white/30 text-white hover:border-white hover:bg-white/10',
}

export function Button({
  children,
  onClick,
  type = 'button',
  href,
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
      <a href={href} className={classes}>
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
      <dt className={cn('eyebrow', dark ? 'text-white/45' : 'text-muted')}>{label}</dt>
      <dd className={cn('mt-1.5 font-display text-lg', dark ? 'text-white' : 'text-ink')}>
        {value}
      </dd>
    </div>
  )
}
