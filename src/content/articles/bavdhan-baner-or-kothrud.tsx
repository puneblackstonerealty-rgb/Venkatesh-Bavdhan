import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'bavdhan-baner-or-kothrud',
  title: 'Bavdhan, Baner or Kothrud: picking a west Pune address',
  excerpt:
    'Three suburbs off the same junction, at three different prices, each asking you to give something up. Which one is right depends on what you can tolerate, not on which is best.',
  category: 'Locality',
  publishedAt: '2026-08-03',
  author: 'Blackstone Realty',
  readingMinutes: 7,
  cover: {
    src: '/illustrations/west-pune-compare.svg',
    alt: 'Three column comparison of Bavdhan, Baner and Kothrud on what each offers and what each costs',
  },
  sources: [
    {
      label: '99acres, property rates and price trends in Bavdhan, Pune',
      href: 'https://www.99acres.com/property-rates-and-price-trends-in-bavdhan-pune-prffid',
    },
    { label: 'Locality research for west Pune, compiled August 2026' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        West Pune is not one market. It is several, close enough together that brochures treat them
        as interchangeable and different enough that picking the wrong one costs you an hour a day
        for a decade.
      </p>
      <p>The useful comparison is not which is best. It is which trade you are prepared to make.</p>

      <h2>Bavdhan: you pay with infrastructure</h2>
      <p>
        Bavdhan sits beside the Chandani Chowk interchange, which is the single reason to consider
        it. Kothrud, Baner, Aundh and Hinjawadi are all reachable off different arms of the same
        junction without crossing the city. The Sahyadri foothills rise immediately behind, which is
        why the hill-aspect towers command what they do.
      </p>
      <p>
        It is also the cheapest of the three, and the reason is honest: the suburb grew faster than
        its services. Residents report{' '}
        <Link href="/updates/water-in-bavdhan">intermittent water in some pockets</Link>, uneven
        internal roads and a peak-hour queue onto the junction between roughly 8 and 10 in the
        morning.
      </p>
      <p>
        Buy here if you want space and the hills, and if you have checked the water position for the
        specific society rather than the suburb.
      </p>

      <h2>Baner: you pay with money</h2>
      <p>
        Baner has the deepest commercial layer of the three. Offices, restaurants, retail and
        coworking arrived years ago and kept arriving, and the run to Hinjawadi is shorter than from
        Bavdhan.
      </p>
      <p>
        The trade is the rate, which is the highest of the three, and density that has already
        happened rather than density that is coming. The version of Baner you are buying is the
        finished one, and finished neighbourhoods are priced accordingly.
      </p>

      <h2>Kothrud: you pay with inventory</h2>
      <p>
        Kothrud is the oldest and most settled of the three, closest to central Pune, and it has
        been on the metro since the Aqua Line opened. As a place to live today, it is the least
        compromised of the three.
      </p>
      <p>
        The trade is choice. Very little new stock comes to market, so most of what is available is
        resale in older buildings, often without podium parking, a clubhouse or the amenity set a
        new-build buyer expects.
      </p>

      <Figure
        src="/illustrations/bavdhan-rate-spread.svg"
        alt="Chart showing four published rate ranges for Bavdhan that do not agree with each other"
        width={1200}
        height={675}
        caption="Before comparing suburbs on rate, note how wide the published range is within just one of them."
        credit="Illustration"
      />

      <Note title="The comparison that does not work">
        <p>
          Rate per square foot across three suburbs, without checking whether each is quoted on
          carpet area and whether each includes floor rise, parking and club charges. Convert
          everything to all-inclusive cost per square foot of carpet, then compare. Anything else is
          comparing three different products.
        </p>
      </Note>

      <h2>The metro changes the ranking, but not yet</h2>
      <p>
        Kothrud is on the running line today. Bavdhan is not, and Vanaz station is under 4 km away.
      </p>
      <p>
        The{' '}
        <Link href="/updates/the-metro-extension-to-chandani-chowk">
          approved Phase 2 extension
        </Link>{' '}
        would take the Aqua Line from Vanaz to Chandani Chowk, which puts a station within reach of
        Bavdhan. It was cleared by the Union Cabinet in June 2025 and entered execution in April
        2026, with a four-year build.
      </p>
      <p>
        That is a genuine prospect rather than a rumour, and it is still four years of construction
        away. Treat it as upside you did not pay a premium for, not as a reason to pay one.
      </p>

      <h2>How to choose</h2>
      <ul>
        <li>
          <strong>Bavdhan</strong> if you want the most space for the money and the junction serves
          your actual commute, and you have satisfied yourself about water.
        </li>
        <li>
          <strong>Baner</strong> if you want the finished version now, work closer to Hinjawadi, and
          the rate is not the binding constraint.
        </li>
        <li>
          <strong>Kothrud</strong> if being on the metro and near the centre today matters more than
          having a new building with a podium.
        </li>
      </ul>
      <p>
        The mistake is not picking the wrong suburb. It is picking on rate alone, which compares
        three numbers that were never measuring the same thing.
      </p>
    </>
  )
}
