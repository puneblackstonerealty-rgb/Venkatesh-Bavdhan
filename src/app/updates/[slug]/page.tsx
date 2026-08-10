import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArticleCard } from '@/components/article-card'
import { CtaButton } from '@/components/lead'
import { PageCta, Prose } from '@/components/page-shell'
import { Container, Eyebrow, Section } from '@/components/ui'
import { articleMetas, formatArticleDate, getArticle, relatedArticles } from '@/content/articles'
import { site } from '@/content/project'
import { isVector } from '@/lib/images'
import { pageMetadata, SITE_URL } from '@/lib/seo'

export const dynamic = 'error'

/** Every article is prerendered. Adding a file adds a static route. */
export function generateStaticParams() {
  return articleMetas.map((meta) => ({ slug: meta.slug }))
}

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return pageMetadata({ path: '/updates', title: 'Not found', description: '', index: false })

  const { meta } = article
  return {
    ...pageMetadata({
      path: `/updates/${meta.slug}`,
      title: meta.title,
      description: meta.excerpt,
    }),
    /* Opts this route out of the root layout's `%s | Venkatesh Serenique`
       template. That suffix costs 21 of the ~60 characters Google displays,
       which is a fair trade on /location (where the brand IS the query) and a
       bad one on an article titled "The five-year defect liability period",
       where the headline is the entire reason anyone clicks. Landing pages
       keep the suffix; articles get the full line. */
    title: { absolute: meta.title },
    // Overrides the site-wide `website` type for this route only.
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      siteName: site.name,
      url: `${SITE_URL}/updates/${meta.slug}`,
      title: meta.title,
      description: meta.excerpt,
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt ?? meta.publishedAt,
      authors: [meta.author],
    },
  }
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const { meta, default: Body } = article
  const related = relatedArticles(slug)

  return (
    <>
      <ArticleStructuredData
        title={meta.title}
        excerpt={meta.excerpt}
        slug={meta.slug}
        author={meta.author}
        publishedAt={meta.publishedAt}
        updatedAt={meta.updatedAt}
        cover={meta.cover?.src}
      />

      {/* ── Masthead ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-twilight">
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
            <Link href="/updates" className="hover:text-white">
              Updates
            </Link>
          </nav>

          <div className="mt-8 max-w-[46rem]">
            <Eyebrow tone="dark">{meta.category}</Eyebrow>
            <h1 className="mt-5 text-3xl text-white md:text-4xl">{meta.title}</h1>
            <p className="mt-5 text-base text-white/65">{meta.excerpt}</p>

            <p className="mt-8 text-xs text-white/45">
              {meta.author} · {formatArticleDate(meta.publishedAt)}
              {meta.readingMinutes ? ` · ${meta.readingMinutes} min read` : ''}
              {meta.updatedAt ? ` · updated ${formatArticleDate(meta.updatedAt)}` : ''}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <Section tone="white">
        <Container>
          {meta.cover && (
            <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-xl bg-brand-soft">
              <Image
                src={meta.cover.src}
                alt={meta.cover.alt}
                fill
                priority
                sizes="(min-width: 1024px) 1056px, 100vw"
                /* See src/lib/images.ts — SVG diagrams must skip the optimizer. */
                unoptimized={isVector(meta.cover.src)}
                className="object-cover"
              />
            </div>
          )}

          <Prose>
            <Body />
          </Prose>

          {meta.sources && meta.sources.length > 0 && (
            <div className="mt-14 max-w-[52rem] rounded-lg border border-line bg-surface p-6">
              <p className="eyebrow text-muted">Sources</p>
              <ul className="mt-4 space-y-2 text-sm text-body">
                {meta.sources.map((source) => (
                  <li key={source.label}>
                    {source.href ? (
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand underline underline-offset-4"
                      >
                        {source.label}
                      </a>
                    ) : (
                      source.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>

      {/* ── Related ────────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <Section tone="surface">
          <Container>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-4">
              <h2 className="text-2xl">More updates</h2>
              <Link href="/updates" className="text-sm text-brand underline underline-offset-4">
                All updates
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} meta={item} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <PageCta
        title="Be first when the numbers land"
        body="Carpet areas, the price list and the plans go to registered buyers before they reach the portals."
      >
        <CtaButton intent="Register your interest" variant="copper" size="lg">
          Register Your Interest
        </CtaButton>
      </PageCta>
    </>
  )
}

/**
 * BlogPosting markup.
 *
 * ⚠ Only asserts what the page visibly shows — headline, description, dates,
 * author, publisher. No `image` is claimed when an article has no cover, and
 * no rating or engagement metric is invented.
 */
function ArticleStructuredData({
  title,
  excerpt,
  slug,
  author,
  publishedAt,
  updatedAt,
  cover,
}: {
  title: string
  excerpt: string
  slug: string
  author: string
  publishedAt: string
  updatedAt?: string
  cover?: string
}) {
  const url = `${SITE_URL}/updates/${slug}`
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: title,
        description: excerpt,
        url,
        /* Claimed only when the page actually renders one, and absolute
           because a relative path in JSON-LD is resolved against the
           document, which breaks the moment the page is syndicated. */
        ...(cover ? { image: `${SITE_URL}${cover}` } : {}),
        datePublished: publishedAt,
        dateModified: updatedAt ?? publishedAt,
        author: { '@type': 'Organization', name: author },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Updates', item: `${SITE_URL}/updates` },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
