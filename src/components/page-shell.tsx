import Image from 'next/image'
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
  image,
  children,
}: {
  eyebrow: string
  title: string
  lede?: string
  /** One of the developer's renders behind the masthead, under the same
      deep-olive wash as the home hero. Without one, the band carries the
      brochure's hibiscus line-art instead. */
  image?: { src: string; alt: string }
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-twilight">
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,40,19,0.93)_0%,rgba(28,40,19,0.8)_45%,rgba(28,40,19,0.35)_100%)]"
          />
          <p className="absolute top-3 right-4 z-10 text-[0.65rem] tracking-[0.08em] text-surface/70 lg:right-6">
            Artistic impression
          </p>
        </>
      ) : (
        <span
          aria-hidden="true"
          className="ornament-hibiscus ornament-hibiscus-light -top-12 -right-16 w-64 md:-right-6 md:w-96"
        />
      )}
      <Container className="relative py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-surface/45">
          <Link href="/" className="hover:text-surface">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span className="text-surface/70">{title}</span>
        </nav>

        <div className="mt-8 max-w-[46rem]">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-3xl text-surface md:text-4xl">{title}</h1>
          <span aria-hidden="true" className="rule-monogram rule-monogram-light mt-5">
            <span />
          </span>
          {lede && <p className="mt-5 text-base text-surface/75">{lede}</p>}
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
        'normal-case-display max-w-[52rem] text-base text-body',
        '[&_h2]:mt-12 [&_h2]:text-xl [&_h2:first-child]:mt-0 md:[&_h2]:text-2xl',
        '[&_h3]:mt-8 [&_h3]:text-lg',
        '[&_h4]:mt-6 [&_h4]:text-base [&_h4]:text-ink',
        '[&_p]:mt-4',
        '[&_ul]:mt-4 [&_ul]:space-y-2.5 [&_ul]:pl-0',
        '[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2.5 [&_ol]:pl-5',
        '[&_ol_li]:pl-1 [&_ol_li]:before:content-none',
        '[&_ul>li]:relative [&_ul>li]:pl-5',
        "[&_ul>li]:before:absolute [&_ul>li]:before:top-[0.7em] [&_ul>li]:before:left-0 [&_ul>li]:before:h-1 [&_ul>li]:before:w-1 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-copper-deep [&_ul>li]:before:content-['']",
        '[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4',
        '[&_strong]:font-medium [&_strong]:text-ink',
        // A pulled-out quote, set on the surface tone with a brand rule.
        '[&_blockquote]:mt-8 [&_blockquote]:rounded-lg [&_blockquote]:border-l-2 [&_blockquote]:border-copper-deep [&_blockquote]:bg-card [&_blockquote]:px-6 [&_blockquote]:py-5',
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
    <section className="relative overflow-hidden bg-twilight py-14 md:py-20">
      <span
        aria-hidden="true"
        className="ornament-hibiscus ornament-hibiscus-light -bottom-24 -left-20 w-64 -scale-x-100 md:-left-8 md:w-80"
      />
      <Container className="relative">
        <div className="mx-auto max-w-[42rem] text-center">
          <h2 className="text-2xl text-surface md:text-3xl">{title}</h2>
          <span
            aria-hidden="true"
            className="rule-monogram rule-monogram-light rule-monogram-center mt-4"
          >
            <span />
          </span>
          {body && <p className="mt-5 text-base text-surface/75">{body}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
        </div>
      </Container>
    </section>
  )
}
