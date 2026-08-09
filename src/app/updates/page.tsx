import type { Metadata } from 'next'

import { ArticleCard } from '@/components/article-card'
import { CtaButton } from '@/components/lead'
import { PageCta, PageHero } from '@/components/page-shell'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { Container, Section } from '@/components/ui'
import { articleMetas, updatesIndex, usedCategories } from '@/content/articles'
import { pageMetadata } from '@/lib/seo'

export const dynamic = 'error'

export const metadata: Metadata = pageMetadata({
  path: '/updates',
  title: 'Project Updates & Bavdhan Notes',
  description:
    'Construction progress, developer releases and Bavdhan locality notes for Venkatesh Serenique. Updated as the project moves.',
})

export default function UpdatesPage() {
  const [latest, ...rest] = articleMetas
  const categories = usedCategories()

  return (
    <>
      <BreadcrumbStructuredData name="Updates" path="/updates" />
      <PageHero eyebrow={updatesIndex.eyebrow} title={updatesIndex.title} lede={updatesIndex.lede}>
        {categories.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <li
                key={category.name}
                className="rounded-sm border border-white/20 px-3 py-1 text-xs text-white/70"
              >
                {category.name}
                <span className="ml-1.5 text-white/40">{category.count}</span>
              </li>
            ))}
          </ul>
        )}
      </PageHero>

      <Section tone="white">
        <Container>
          {articleMetas.length === 0 ? (
            /* Not decoration — a new site ships with an empty index, and an
               empty grid reads as broken. */
            <div className="mx-auto max-w-[38rem] rounded-lg border border-dashed border-line-strong bg-surface px-6 py-14 text-center">
              <p className="font-display text-xl text-ink">Nothing published yet</p>
              <p className="mt-3 text-sm text-body">{updatesIndex.empty}</p>
              <div className="mt-8">
                <CtaButton intent="Register for updates">Register for Updates</CtaButton>
              </div>
            </div>
          ) : (
            <>
              <ArticleCard meta={latest} variant="feature" priority />

              {rest.length > 0 && (
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((meta) => (
                    <ArticleCard key={meta.slug} meta={meta} />
                  ))}
                </div>
              )}
            </>
          )}
        </Container>
      </Section>

      <PageCta
        title="Get each update as it lands"
        body="Carpet areas, the price list, the plans and the amenity schedule go to registered buyers first."
      >
        <CtaButton intent="Register for Updates" variant="copper" size="lg">
          Register for Updates
        </CtaButton>
      </PageCta>
    </>
  )
}
