import { faqs, legal, overview, site } from '@/content/project'
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
 * Note what is deliberately ABSENT, and must stay absent until the developer
 * publishes it:
 *   • No `offers` / price markup. No price exists. Fabricating an offer to win
 *     a rich result is exactly the abuse the guidelines target.
 *   • No `amenityFeature`. No amenity schedule has been published.
 *   • No `geo` coordinates. No street address has been published, so any
 *     lat/long here would be a guess presented to Google as a fact.
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
            // it is not — the flats are, and none of them is priced yet.
            '@type': ['Residence', 'ApartmentComplex'],
            '@id': PROJECT_ID,
            name: site.name,
            alternateName: site.registeredName,
            url: SITE_URL,
            description: `Pre-launch residential development by ${site.developer} at ${site.locality}. Eleven towers of ${overview.structure} on 14 acres, in 2, 3 and 4 BHK configurations. The total number of homes, carpet areas and pricing have not been published.`,
            /* numberOfAccommodationUnits is deliberately absent. It used to
               assert 380, which came from a source since shown to be wrong on
               every structural figure it published. An omitted property costs
               nothing in structured data; a wrong one is a claim made to
               Google in the developer's name. Add it back only from a
               published total. */
            address: {
              '@type': 'PostalAddress',
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
 * reading one array is what guarantees that rather than hoping.
 */
export function FaqStructuredData() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }}
    />
  )
}
