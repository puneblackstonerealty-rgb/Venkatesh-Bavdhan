import type { Metadata } from 'next'
import Link from 'next/link'

import { ArticleCard } from '@/components/article-card'
import { Button, Container, Eyebrow, Section, SectionHead } from '@/components/ui'
import { articleMetas } from '@/content/articles'
import { releaseStatus, site, thankYou } from '@/content/project'
import { pageMetadata } from '@/lib/seo'

export const dynamic = 'error'

/* noindex: a post-submission confirmation has nothing to offer search, and
   indexing it lets people arrive without ever enquiring. Also disallowed in
   robots.ts and absent from the sitemap — all three have to agree. */
export const metadata: Metadata = pageMetadata({
  path: '/thank-you',
  title: 'Thank You',
  description: 'Your enquiry has been registered. Our team will be in touch shortly.',
  index: false,
})

export default function ThankYouPage() {
  /* The same ledger the home page renders, filtered to what is still awaited.
     Reading it here rather than restating it means this page cannot fall out of
     sync with the hero the moment the developer releases something. */
  const awaiting = releaseStatus.items.filter((item) => !item.released)
  const latest = articleMetas.slice(0, 3)

  return (
    <>
      {/* ── Confirmation ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-twilight">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/30 blur-[130px]"
        />
        <Container className="relative py-20 md:py-28">
          <div className="mx-auto max-w-[42rem] text-center">
            <CheckMark />

            <div className="mt-8">
              <Eyebrow tone="dark">{thankYou.eyebrow}</Eyebrow>
            </div>

            <h1 className="mt-5 text-3xl text-white md:text-4xl">{thankYou.heading}</h1>
            <p className="mt-5 text-base text-white/65">{thankYou.lede}</p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href={`tel:${site.phone}`} variant="copper" size="lg">
                <PhoneIcon />
                Call {site.phoneDisplay}
              </Button>
              <Button href="/" variant="ghost-light" size="lg">
                Back to the project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── What happens now ───────────────────────────────────────────── */}
      <Section tone="white">
        <Container>
          <SectionHead eyebrow="Next" title={thankYou.stepsHeading} align="center" />

          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {thankYou.steps.map((step, index) => (
              <li
                key={step.id}
                className="flex flex-col rounded-lg border border-line bg-card p-6"
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft font-display text-lg text-brand"
                >
                  {index + 1}
                </span>
                <p className="eyebrow mt-5 text-muted">{step.when}</p>
                <h3 className="mt-2 font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-3 text-sm text-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ── What is coming ─────────────────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <SectionHead
            eyebrow="On its way"
            title={thankYou.awaitingHeading}
            lede={thankYou.awaitingLede}
          />

          <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {awaiting.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 border-b border-line py-3.5"
              >
                <span className="text-sm text-body">{item.label}</span>
                <span className="eyebrow shrink-0 text-muted">{item.value}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Call band ──────────────────────────────────────────────────── */}
      <Section tone="dark">
        <Container>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[34rem]">
              <h2 className="text-2xl text-white md:text-3xl">{thankYou.callHeading}</h2>
              <p className="mt-4 text-base text-white/65">{thankYou.callBody}</p>
              <p className="mt-6 text-xs text-white/40">{thankYou.wrongDetails}</p>
            </div>

            <div className="shrink-0">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/[0.04] px-7 py-5 transition-colors hover:border-copper"
              >
                <span className="text-copper">
                  <PhoneIcon large />
                </span>
                <span className="text-left">
                  <span className="eyebrow block text-white/45">Call us</span>
                  <span className="mt-1 block font-display text-2xl text-white">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── While you wait ─────────────────────────────────────────────── */}
      <Section tone="white">
        <Container>
          <SectionHead
            eyebrow="Explore"
            title={thankYou.exploreHeading}
            lede={thankYou.exploreLede}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {thankYou.explore.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col rounded-lg border border-line bg-card p-6 transition-colors hover:border-brand/40"
              >
                <h3 className="font-display text-lg text-ink transition-colors group-hover:text-brand">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm text-body">{item.body}</p>
                <span aria-hidden="true" className="eyebrow mt-auto pt-5 text-brand">
                  Read on →
                </span>
              </Link>
            ))}
          </div>

          {/* Renders nothing until an article exists. */}
          {latest.length > 0 && (
            <div className="mt-16">
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-4">
                <h2 className="text-xl">Latest updates</h2>
                <Link href="/updates" className="text-sm text-brand underline underline-offset-4">
                  All updates
                </Link>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {latest.map((meta) => (
                  <ArticleCard key={meta.slug} meta={meta} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}

/** The confirmation mark. Drawn rather than shipped — this site has no icon set. */
function CheckMark() {
  return (
    <span
      aria-hidden="true"
      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-copper/40 bg-copper/10"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-copper"
      >
        <path d="M4 12.5 9.5 18 20 7" />
      </svg>
    </span>
  )
}

function PhoneIcon({ large }: { large?: boolean }) {
  const size = large ? 20 : 12
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 1.5a1.3 1.3 0 0 0-1.8.2L1 2.7C.4 3.4.3 4.4.8 5.2a19.6 19.6 0 0 0 10 10c.8.5 1.8.4 2.5-.2l1-.8a1.3 1.3 0 0 0 .2-1.8l-1.6-2a1.3 1.3 0 0 0-1.7-.3l-1.3.8a13.8 13.8 0 0 1-4.6-4.6l.8-1.3a1.3 1.3 0 0 0-.3-1.7l-2-1.6Z" />
    </svg>
  )
}
