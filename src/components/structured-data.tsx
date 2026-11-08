import { faqs, legal, phase1, site, siteMeta } from '@/content/project'
import { SITE_URL } from '@/lib/seo'

/**
 * JSON-LD.
 *
 * Emitted as a raw <script type="application/ld+json"> because that is the
 * only form Google's parser accepts, and React will not escape the JSON
 * inside it.
 *
 * ⚠ Everything asserted here is also stated in the visible page. Marking up a
 * claim the page does not make is what gets structured data ignored, or the
 * site penalised.
 *
 * Note what is deliberately ABSENT (re-checked 2026-11-08):
 *   • No `offers` / price markup, and no price in any text below (Ruling
 *     R17). The site publishes the developer's price list, but it is a dated
 *     quotation that has already lapsed, and structured data cannot carry
 *     "as of". The price FAQ is visible on the page and left out of the
 *     FAQPage markup for the same reason (`inSchema: false` in project.ts).
 *   • No `amenityFeature` YET. The developer published an amenity list in
 *     2026 (content/project.ts `amenities`), but no page lays it out as a
 *     list. Add it together with the /amenities route, not before, so the
 *     markup matches visible content.
 *   • No `geo` coordinates. The survey number is on the MahaRERA record and
 *     is used as the street address, but no coordinates have been published,
 *     so any lat/long here would be a guess presented to Google as a fact.
 *   • No `aggregateRating` or review markup. There is nothing to rate.
 */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const PROJECT_ID = `${SITE_URL}/#project`

/** Site-wide graph: the marketing partner, the website, and the development. */
export function SiteStructuredData() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'RealEstateAgent',
            '@id': ORG_ID,
            name: 'Blackstone Realty',
            description: `Authorised marketing partner for ${site.name}, ${site.locality}.`,
            url: SITE_URL,
            telephone: site.phone,
            email: site.leadEmail,
            // The generated share card, which is the only image that
            // represents this business and is guaranteed to exist at 1200x630.
            image: `${SITE_URL}/opengraph-image`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Pune',
              addressRegion: 'Maharashtra',
              addressCountry: 'IN',
            },
            areaServed: { '@type': 'City', name: 'Pune' },
            // Same number as `telephone`, typed so Google knows what it is for
            // and which language it is answered in.
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              telephone: site.phone,
              email: site.leadEmail,
              areaServed: 'IN',
              availableLanguage: ['en', 'hi', 'mr'],
            },
            /* No `sameAs`. It takes verified profile URLs, and no social
               account for this business has been confirmed. Adding guesses
               would either 404 or point at somebody else's page. */
          },
          {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            url: SITE_URL,
            name: site.name,
            inLanguage: 'en-IN',
            publisher: { '@id': ORG_ID },
          },
          {
            // Residence is the correct type for a housing development. A
            // Product would rank the whole project as one item for sale, which
            // it is not — the flats are, and their prices stay out of
            // structured data (see the note at the top).
            '@type': ['Residence', 'ApartmentComplex'],
            '@id': PROJECT_ID,
            name: site.name,
            alternateName: site.registeredName,
            url: SITE_URL,
            description: siteMeta.schemaDescription,
            /* numberOfAccommodationUnits is deliberately absent. MahaRERA
               now gives 380 homes, but for Phase 1 only, and this node is the
               whole development (the developer describes a 9.75-acre parcel
               with 6 acres still to come). A property cannot carry the
               "Phase 1" label the page gives the figure, so asserting it here
               would overstate what it covers. The figure is in `description`
               with its label. */
            address: {
              '@type': 'PostalAddress',
              // MahaRERA Form C. Also printed in the location FAQ.
              streetAddress: phase1.plotStreet,
              addressLocality: 'Bavdhan',
              addressRegion: 'Maharashtra',
              postalCode: '411021',
              addressCountry: 'IN',
            },
            developer: {
              '@type': 'Organization',
              name: site.developer,
            },
            // Where the enquiry actually goes. A real schema.org property for
            // ApartmentComplex, and it matches the CTA on every page.
            tourBookingPage: `${SITE_URL}/contact`,
            containedInPlace: {
              '@type': 'Place',
              name: 'Bavdhan',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bavdhan',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN',
              },
            },
            // The MahaRERA registration, which is the identifier a buyer in
            // Maharashtra actually searches for.
            identifier: legal.reraRegistrations.map((registration) => ({
              '@type': 'PropertyValue',
              name: `MahaRERA ${registration.phase}`,
              value: registration.id,
            })),
          },
        ],
      }}
    />
  )
}

/** Breadcrumbs for an inner page. The home page does not get one. */
export function BreadcrumbStructuredData({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
        ],
      }}
    />
  )
}

/**
 * FAQ markup, generated from the same `faqs` array the home page renders
 * visibly. Google requires FAQ markup to match content the visitor can see;
 * reading one array is what guarantees that rather than hoping. Questions
 * marked `inSchema: false` (the price answer) stay visible but are left out
 * of the markup, which may cover fewer questions than the page, never more.
 */
export function FaqStructuredData() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.filter((faq) => faq.inSchema !== false).map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }}
    />
  )
}
