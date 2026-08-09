import Link from 'next/link'
import type { ReactNode } from 'react'

import { cn, Container, Eyebrow } from './ui'

/**
 * The masthead every inner page opens with. One component so the routes cannot
 * drift apart in spacing, breadcrumb shape or heading size — which is exactly
 * what happens when each page hand-rolls its own header.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string
  title: string
  lede?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-twilight">
      {/* A single soft pool of light behind the copy, so the flat dark panel
          has some depth without costing an image request. Which matters here:
          there are no images to request. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-[120px]"
      />
      <Container className="relative py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-white/45">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span className="text-white/70">{title}</span>
        </nav>

        <div className="mt-8 max-w-[46rem]">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-3xl text-white md:text-4xl">{title}</h1>
          {lede && <p className="mt-5 text-base text-white/65">{lede}</p>}
          {children}
        </div>
      </Container>
    </section>
  )
}

/**
 * Long-form copy — the policy pages and every article body.
 *
 * Styles bare HTML elements so an article file can be written as plain JSX
 * with <h2>, <p>, <ul>, <blockquote> and so on, and needs no imports and no
 * className. That is the whole point: adding an article should be writing,
 * not assembling components.
 */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'max-w-[52rem] text-base text-body',
        '[&_h2]:mt-12 [&_h2]:text-xl [&_h2:first-child]:mt-0 md:[&_h2]:text-2xl',
        '[&_h3]:mt-8 [&_h3]:text-lg',
        '[&_h4]:mt-6 [&_h4]:text-base [&_h4]:text-ink',
        '[&_p]:mt-4',
        '[&_ul]:mt-4 [&_ul]:space-y-2.5 [&_ul]:pl-0',
        '[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2.5 [&_ol]:pl-5',
        '[&_ol_li]:pl-1 [&_ol_li]:before:content-none',
        '[&_ul>li]:relative [&_ul>li]:pl-5',
        "[&_ul>li]:before:absolute [&_ul>li]:before:top-[0.7em] [&_ul>li]:before:left-0 [&_ul>li]:before:h-1 [&_ul>li]:before:w-1 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-brand [&_ul>li]:before:content-['']",
        '[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4',
        '[&_strong]:font-medium [&_strong]:text-ink',
        // A pulled-out quote, set on the surface tone with a brand rule.
        '[&_blockquote]:mt-8 [&_blockquote]:rounded-lg [&_blockquote]:border-l-2 [&_blockquote]:border-brand [&_blockquote]:bg-surface [&_blockquote]:px-6 [&_blockquote]:py-5',
        '[&_blockquote_p:first-child]:mt-0 [&_blockquote]:font-display [&_blockquote]:text-lg [&_blockquote]:text-ink',
        '[&_hr]:mt-10 [&_hr]:border-line',
        '[&_figure]:mt-8 [&_figcaption]:mt-3 [&_figcaption]:text-xs [&_figcaption]:text-muted',
        '[&_img]:rounded-xl',
        // Wide tables scroll inside their own box rather than pushing the page
        // sideways on a phone.
        '[&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm',
        '[&_th]:border-b [&_th]:border-line [&_th]:py-2.5 [&_th]:pr-4 [&_th]:text-left [&_th]:font-medium [&_th]:text-ink',
        '[&_td]:border-b [&_td]:border-line [&_td]:py-2.5 [&_td]:pr-4 [&_td]:align-top',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** A closing band that gives every inner page the same single next step. */
export function PageCta({
  title,
  body,
  children,
}: {
  title: string
  body?: string
  children: ReactNode
}) {
  return (
    <section className="bg-twilight py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="text-2xl text-white md:text-3xl">{title}</h2>
          {body && <p className="mt-4 text-base text-white/65">{body}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
        </div>
      </Container>
    </section>
  )
}
