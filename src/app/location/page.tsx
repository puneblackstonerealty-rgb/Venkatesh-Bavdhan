import type { Metadata } from 'next'

import { CtaButton } from '@/components/lead'
import { PageCta, PageHero } from '@/components/page-shell'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { Container, Section, SectionHead } from '@/components/ui'
import { location } from '@/content/project'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/location',
  title: 'Location & Connectivity, Bavdhan',
  description:
    'Bavdhan, Pune West. Chandani Chowk, NH-48 and Paud Road at the doorstep, Vanaz Metro under 4 km, Kothrud and Baner 5 to 7 km, Hinjawadi about 14 km.',
})

export default function LocationPage() {
  return (
    <>
      <BreadcrumbStructuredData name="Location & Connectivity" path="/location" />
      <PageHero
        eyebrow="Address"
        title="Location & Connectivity"
        lede={location.paragraphs[0]}
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div>
              <div className="overflow-hidden rounded-xl border border-line">
                <iframe
                  src={location.mapEmbed}
                  title={location.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[420px] w-full border-0"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl">{location.connectivityHeading}</h2>
              <ul className="mt-6">
                {location.pois.map((poi) => (
                  <li
                    key={poi.name}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-3 text-sm"
                  >
                    <span className="text-body">{poi.name}</span>
                    <span className="shrink-0 font-medium text-brand">{poi.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHead
            eyebrow="Getting Around"
            title="Connected on every side"
            lede={location.paragraphs[1]}
          />

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {location.groups.map((group) => (
              <div key={group.id}>
                <h3 className="eyebrow rule-lead text-brand">{group.label}</h3>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-body">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <PageCta
        title="Come and see the location"
        body="The fastest way to judge a Bavdhan address is to stand on it. We will arrange the visit."
      >
        <CtaButton intent="Book a site visit" variant="copper" size="lg">
          {location.cta}
        </CtaButton>
        <CtaButton intent="Get the Full Project Details" variant="ghost-light" size="lg">
          Get Project Details
        </CtaButton>
      </PageCta>
    </>
  )
}
