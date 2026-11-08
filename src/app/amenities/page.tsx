import type { Metadata } from 'next'

import { GalleryFigure, MonogramRule, PauseHeadline } from '@/components/brochure'
import { CtaButton } from '@/components/lead'
import { PageCta, PageHero } from '@/components/page-shell'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { Container, Section, SectionHead } from '@/components/ui'
import { amenities, brochureCopy, gallery, galleryImage } from '@/content/project'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/amenities',
  title: 'Amenities',
  description:
    'Venkatesh Serenique amenities: a podium pool with a vanishing edge, gym, co-working lounge, multipurpose court, creche, herbal garden and amphitheatre.',
})

/* The brochure's amenity spreads (B p22–33): the "pause the noise" opening,
   the ground and podium lists, the renders, and the cluster plan with its
   numbered key. Every list and image reads from content/project.ts. */
export default function AmenitiesPage() {
  const images = gallery.filter((image) => image.group === 'Amenities')
  const plan = galleryImage('podium-plan')

  return (
    <>
      <BreadcrumbStructuredData name="Amenities" path="/amenities" />
      <PageHero
        image={{ src: galleryImage('sit-out').src, alt: galleryImage('sit-out').alt }}
        eyebrow="Life at Serenique"
        title="Amenities"
        lede={`${amenities.summary}, on the podium and at ground level.`}
      />

      <Section tone="surface" ornament="right">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <PauseHeadline lines={brochureCopy.noise} />
              <MonogramRule className="mt-2" />
              <p className="mt-6 text-base text-body">{brochureCopy.noiseBody}</p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              {[
                { title: 'On the podium', items: amenities.podium },
                { title: 'At ground level', items: amenities.ground },
              ].map((group) => (
                <div key={group.title}>
                  <h2 className="text-xl">{group.title}</h2>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-body">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper-deep"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHead
            title="The amenities, as rendered"
            lede="The developer’s own renders of the Phase 1 amenities. Artistic impressions, as the developer labels them."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <GalleryFigure key={image.id} image={image} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHead
            title="The podium plan"
            lede="Where each amenity sits on the A-cluster podium. The numbers follow the key printed in the developer’s brochure."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)]">
            <GalleryFigure
              image={plan}
              ratio="aspect-[2400/1697]"
              sizes="(min-width: 1024px) 65vw, 100vw"
            />
            {/* A real sequence: each number is the label on the plan. */}
            <ol className="columns-2 gap-6 text-sm text-body lg:columns-1">
              {brochureCopy.clusterLegend.map((item, index) => (
                <li key={item} className="mb-2 flex break-inside-avoid gap-3">
                  <span className="w-5 shrink-0 text-right font-display text-copper-deep">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <PageCta
        title="See the amenities in person"
        body="The sales team walks you through the podium plan, the sample flat and the site, and sends the full amenity schedule."
      >
        <CtaButton intent="Book a Site Visit" variant="copper" size="lg">
          Book a Site Visit
        </CtaButton>
      </PageCta>
    </>
  )
}
