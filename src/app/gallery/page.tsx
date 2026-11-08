import type { Metadata } from 'next'

import { GalleryFigure } from '@/components/brochure'
import { CtaButton } from '@/components/lead'
import { PageCta, PageHero } from '@/components/page-shell'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { Container, Section, SectionHead } from '@/components/ui'
import { gallery, type GalleryImage, galleryImage } from '@/content/project'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/gallery',
  title: 'Gallery',
  description:
    'Renders of Venkatesh Serenique Phase 1, Bavdhan: the towers, the entrance, the podium pool and amenities, brochure pictures and the plans.',
})

/* Every image the developer has issued for Serenique, grouped the way the
   brochure groups them. Each opens full size in a new tab, which is the
   simplest viewer that works everywhere and needs no script. */
const GROUPS: Array<{ id: string; group: GalleryImage['group']; lede: string }> = [
  { id: 'building', group: 'The building', lede: 'Phase 1 from the road, the air and the gate.' },
  {
    id: 'amenities',
    group: 'Amenities',
    lede: 'The podium and the indoor amenities, as rendered by the developer.',
  },
  { id: 'lifestyle', group: 'Lifestyle', lede: 'The mood pictures from the developer’s brochure.' },
  {
    id: 'plans',
    group: 'Plans',
    lede: 'The master layout, the A-cluster plan and the podium amenity plan.',
  },
]

export default function GalleryPage() {
  const cover = galleryImage('worms-eye')

  return (
    <>
      <BreadcrumbStructuredData name="Gallery" path="/gallery" />
      <PageHero
        image={{ src: cover.src, alt: cover.alt }}
        eyebrow="Venkatesh Serenique"
        title="Gallery"
        lede="The developer’s renders, brochure pictures and plans for Phase 1. Every image is an artistic impression."
      />

      {GROUPS.map((section, index) => {
        const images = gallery.filter((image) => image.group === section.group)
        return (
          <Section key={section.id} id={section.id} tone={index % 2 ? 'surface' : 'white'}>
            <Container>
              <SectionHead title={section.group} lede={section.lede} />
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image) => (
                  <a
                    key={image.id}
                    href={image.src}
                    target="_blank"
                    rel="noopener"
                    className="block rounded-lg focus-visible:outline-offset-4"
                    aria-label={`${image.caption}, open full size`}
                  >
                    <GalleryFigure
                      image={image}
                      ratio={section.group === 'Plans' ? 'aspect-[2400/1697]' : 'aspect-[4/3]'}
                    />
                  </a>
                ))}
              </div>
            </Container>
          </Section>
        )
      })}

      <PageCta
        title="Get the full brochure"
        body="The developer’s brochure has every render, the plans and the specifications in one file. Tell us where to send it."
      >
        <CtaButton intent="Get the Brochure" variant="copper" size="lg">
          Get the Brochure
        </CtaButton>
      </PageCta>
    </>
  )
}
