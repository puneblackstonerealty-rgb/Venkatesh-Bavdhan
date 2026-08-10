import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'schools-and-hospitals-around-bavdhan',
  title: 'Schools, hospitals and the ordinary week in Bavdhan',
  excerpt:
    'Commutes get the attention. The trips that decide whether an address works are the school run and the chemist at ten at night, and those are different journeys entirely.',
  category: 'Locality',
  publishedAt: '2026-08-06',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/bavdhan-social-infra.svg',
    alt: 'Schools, hospitals and everyday retail named in the Bavdhan catchment',
  },
  sources: [
    { label: 'Locality research for Bavdhan, compiled August 2026' },
    { label: 'Distances as published by locality data sources, where published' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Buyers evaluate an address on the commute, which happens ten times a week, and ignore the
        errands, which happen thirty. The errands are what make a neighbourhood liveable or
        exhausting.
      </p>
      <p>Here is what sits in the Bavdhan catchment, and what to check about each.</p>

      <h2>Schools</h2>
      <p>
        Named in the catchment: Vibgyor High Bavdhan, Indus International School, The Orchid School,
        Mercedes-Benz International School and Ryan International School.
      </p>
      <p>
        That is a genuinely strong list for a west Pune suburb. Two caveats before you count it.
      </p>
      <ul>
        <li>
          <strong>Proximity is not admission.</strong> A school four kilometres away that you cannot
          get into is not an amenity. Ask each school directly about intake, waiting lists and
          whether they operate a distance-based preference.
        </li>
        <li>
          <strong>Drive the school run at 7:45 on a weekday.</strong> The gate approach at drop-off
          is the worst traffic condition in most Indian suburbs and it never appears in a drive-time
          table.
        </li>
      </ul>

      <h2>Healthcare</h2>
      <p>
        Sahyadri Hospital at Kothrud is about 4 km away and Jupiter Hospital at Baner about 6 km.
        Manipal Hospital at Pashan and Chellaram Hospital are also in the catchment.
      </p>
      <p>
        Two multispecialty hospitals inside about six kilometres is a real advantage, and it is one
        that does not degrade as the suburb gets busier the way a drive time does.
      </p>

      <Note title="The ten at night test">
        <p>
          Find the nearest 24-hour chemist and the nearest hospital with a functioning emergency
          department, and check both on a map before you buy. Not the nearest hospital. The nearest
          one that will admit you at two in the morning. They are frequently not the same place.
        </p>
      </Note>

      <h2>Everyday shopping</h2>
      <p>
        Aditya Shagun Mall, Vishal Shopping Complex, Bandal Dhankude Plaza and a D-Mart cover the
        weekly run and most of the rest.
      </p>
      <p>
        The thing to check is not the mall. It is the layer underneath it: the vegetable vendor, the
        medical store, the laundry, the hardware shop. A suburb with towers and a mall and no small
        shops is one where every minor errand becomes a car journey.
      </p>
      <p>
        Walk a five hundred metre radius from the site on a weekday evening. What is open tells you
        more about daily life than any list of landmarks.
      </p>

      <Figure
        src="/illustrations/bavdhan-distances.svg"
        alt="Hub and spoke schematic of published distances from Bavdhan to nearby landmarks"
        width={1200}
        height={675}
        caption="Only two of these carry a published distance. The rest are named without one here, rather than given an invented time."
        credit="Illustration"
      />

      <h2>Why there are no drive times on this page</h2>
      <p>
        Because almost none were published. Where a source gave a distance, we print the distance.
        Where a source named a landmark without a figure, we name the landmark and stop.
      </p>
      <p>
        Real-estate microsites attach a confident &ldquo;5 minutes&rdquo; to every institution they
        can name. Those numbers are usually invented, and they are the easiest claim on any page to
        disprove by getting in a car.
      </p>
      <p>We would rather publish a shorter list you can check than a longer one you cannot.</p>

      <h2>What to test before you commit</h2>
      <ol>
        <li>
          <strong>Water supply.</strong> Municipal or tanker, and how many hours a day. In Bavdhan
          <Link href="/updates/water-in-bavdhan">this is the question</Link>, and it varies pocket
          to pocket.
        </li>
        <li>
          <strong>The approach road at peak.</strong> Entrances get landscaped. The road that
          carries you to it is the one you use twice a day.
        </li>
        <li>
          <strong>Power backup.</strong> Whether it covers the flat or only the common areas, and
          what it costs monthly.
        </li>
        <li>
          <strong>Mobile signal inside the building,</strong> on the floor you are being offered.
          Trivial until it is not.
        </li>
      </ol>
      <p>
        Bavdhan does the ordinary week well. The schools and the hospitals are real and they are
        close. The part that needs your own checking is water, and that one is worth an afternoon.
      </p>
    </>
  )
}
