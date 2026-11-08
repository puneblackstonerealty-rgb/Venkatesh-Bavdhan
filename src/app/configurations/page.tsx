import type { Metadata } from 'next'

import { CtaButton } from '@/components/lead'
import { PageCta, PageHero } from '@/components/page-shell'
import { Reveal } from '@/components/reveal'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { Container, Section, SectionHead, Stat } from '@/components/ui'
import { configurations, hero, releaseStatus, reveals } from '@/content/project'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/configurations',
  /* Kept under 60 characters INCLUDING the "| Venkatesh Serenique" the root
     layout appends. The longer "Homes: Areas, Plans & Price" version came to
     62 and was being cut mid-phrase in results. Both strings live in
     content/project.ts, next to the figures they quote. */
  title: configurations.metaTitle,
  description: configurations.metaDescription,
})

export default function ConfigurationsPage() {
  return (
    <>
      <BreadcrumbStructuredData name="Configurations" path="/configurations" />
      <PageHero
        eyebrow="Homes"
        title="Configurations"
        lede={configurations.intro}
      >
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/12 pt-8 sm:grid-cols-4">
          {hero.facts.map((fact) => (
            <Stat key={fact.label} label={fact.label} value={fact.value} tone="dark" />
          ))}
        </dl>
      </PageHero>

      <Section tone="white">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {configurations.items.map((config) => (
              <article
                key={config.id}
                className="flex flex-col rounded-lg border border-line bg-card p-6"
              >
                <p className="font-display text-3xl text-ink">{config.type}</p>
                <p className="mt-3 text-sm text-muted">{config.note}</p>

                <dl className="mt-6 border-t border-line pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Carpet area</dt>
                    <dd className="text-ink">{config.area ?? 'To be announced'}</dd>
                  </div>
                  <div className="mt-2 flex justify-between gap-4">
                    <dt className="text-muted">Price</dt>
                    <dd className="text-ink">{config.price ?? 'On request'}</dd>
                  </div>
                  <div className="mt-2 flex justify-between gap-4">
                    <dt className="text-muted">Floor plan</dt>
                    <dd className="text-ink">{configurations.planStatus}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-7">
                  <CtaButton intent={`${config.type} areas and pricing`} full>
                    Get {config.type} Details
                  </CtaButton>
                </div>
              </article>
            ))}
          </div>

        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHead
            eyebrow="Scale"
            /* The lede is the Phase 1 scale as MahaRERA and the developer
               state it, read from content/project.ts. It used to be typed
               here as "Eleven towers ... on 14 acres", figures the launch
               has since superseded. */
            title="The scale of the project"
            lede={configurations.scaleLede}
          />

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {releaseStatus.items.map((item) => (
              <div key={item.id} className="border-t border-line pt-4">
                <dt className="eyebrow text-muted">{item.label}</dt>
                <dd
                  className={
                    item.released
                      ? 'mt-1.5 font-display text-lg text-ink'
                      : 'mt-1.5 font-display text-lg text-muted'
                  }
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal
              eyebrow={reveals.configurations.eyebrow}
              heading={reveals.configurations.heading}
              body={reveals.configurations.body}
              cta={reveals.configurations.cta}
              intent="Get Floor Plans First"
            />
            <Reveal
              eyebrow={reveals.pricing.eyebrow}
              heading={reveals.pricing.heading}
              body={reveals.pricing.body}
              cta={reveals.pricing.cta}
              intent="Request the Price List"
            />
          </div>
        </Container>
      </Section>

      <PageCta
        title="Get the current price list"
        body="The developer has not published a price list. Ask us and we will send the current price for the home you are considering, with its floor plan."
      >
        <CtaButton intent="Register for Areas & Pricing" variant="copper" size="lg">
          {configurations.cta}
        </CtaButton>
      </PageCta>
    </>
  )
}
