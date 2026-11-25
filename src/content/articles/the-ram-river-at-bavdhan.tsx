import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'
import { IMAGE_CREDIT } from '@/content/project'

import type { ArticleMeta } from './types'

/* The watercourse on Serenique's southern boundary is drawn on the developer's
   plans and labelled "Nala Garden". Whether it is the Ram river or a
   tributary is NOT established, so the piece says so and does not assert it. */

export const meta: ArticleMeta = {
  slug: 'the-ram-river-at-bavdhan',
  title: 'The Ram river at Bavdhan, and what the NGT has ordered',
  excerpt:
    'The Ram river runs 19 km from the Sahyadri foothills through Bhugaon and Bavdhan to the Mula. The green tribunal has ordered the sewage out of it. Where that stands, and what to ask about the water beside Serenique.',
  metaDescription:
    'The Ram river at Bavdhan: the NGT orders on sewage, the next hearing, PMRDA’s river clean-up plan, and what to ask about the watercourse beside Serenique.',
  category: 'Locality',
  publishedAt: '2026-11-23',
  author: 'Blackstone Realty',
  readingMinutes: 5,
  cover: {
    src: '/illustrations/ram-river.svg',
    alt: 'Schematic of the Ram river from its source through Bhugaon, Bhukum, Bavdhan and Pashan to the Mula',
  },
  sources: [
    {
      label: 'Punekar News, NGT orders sewage in the Ram river stopped within six months, 26 July 2025',
      href: 'https://www.punekarnews.in/?p=213617',
    },
    {
      label: 'Punekar News, NGT allows two months to repair damaged chambers along the Ram river, 6 October 2026',
      href: 'https://www.punekarnews.in/?p=246400',
    },
    {
      label: 'Down To Earth, daily court digest, PMRDA report on Mula-Mutha pollution abatement, 2 November 2026',
      href: 'https://www.downtoearth.org.in/amp/story/waste/daily-court-digest-major-environment-orders-november-2-2026',
    },
    {
      label: 'The Bridge Chronicle, sewage treatment plant near Pashan lake completed, 30 June 2025',
      href: 'https://www.thebridgechronicle.com/pune/sewage-treatment-plant-completed-near-pashan-lake-inauguration-awaited',
    },
    { label: 'Ramnadi, Wikipedia, for length, course and flood years', href: 'https://en.wikipedia.org/wiki/Ramnadi' },
    { label: 'Venkatesh Buildcon, Serenique A-Cluster plan, October 2026' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        The Ram river is the small river of west Pune. It rises near Khatpewadi in the Sahyadri
        foothills and runs about 19 km through Bhugaon, Bhukum, Bavdhan, Pashan, Baner and Aundh
        before it joins the Mula. For most of the year it is a narrow stream. For anyone buying in
        Bavdhan it raises two questions: is it clean, and does it flood?
      </p>

      <h2>The sewage problem, and the tribunal</h2>
      <p>
        The river&rsquo;s trouble is what goes into it. The villages and new housing upstream grew
        faster than the drains and treatment plants, and untreated sewage reaches the river. In
        July 2025, on an application by a Bavdhan resident, the National Green Tribunal (NGT)
        ordered Pune Municipal Corporation and the Bhugaon and Bhukum gram panchayats to stop
        untreated sewage entering the river and to set up drainage and treatment within six months.
      </p>
      <p>
        The case is still running. At a hearing on 28 September 2026 the tribunal allowed two months
        for the damaged chambers along the river to be repaired and maintained in the meantime. The
        respondents now include PMC, the Pune Metropolitan Region Development Authority (PMRDA), the
        Maharashtra Pollution Control Board, the Zilla Parishad and both gram panchayats. The main
        matter is listed for hearing on 26 November 2026.
      </p>

      <h2>The bigger clean-up on paper</h2>
      <p>
        At the end of October PMRDA told the tribunal about its own project for the Mula-Mutha river
        network under its jurisdiction: about 107 km of rivers, an estimated ₹500 crore, and a
        completion target of August 2030. That covers the wider river system, not the Ram river
        alone, and it is a plan rather than a finished job.
      </p>
      <p>
        Closer to Bavdhan, a one million litre a day treatment plant near Pashan lake was reported
        complete and awaiting its trial runs in June 2025. Later reports raised problems during its
        trial. We have not confirmed whether it is now running properly, so treat it as unproven.
      </p>

      <Note title="What this means in plain terms">
        <p>
          The courts are pushing, the civic bodies are filing replies, and the money is planned to
          2030. A clean Ram river is a reasonable hope over the life of a home loan. It is not
          something to count on by the time Serenique is handed over.
        </p>
      </Note>

      <h2>Floods</h2>
      <p>
        Parts of Bavdhan, Pashan, Baner and Aundh flooded in heavy monsoon rain in 2011 and again in
        2019. That is why the state of the river&rsquo;s banks and channel matters to a buyer as much
        as the quality of the water in it.
      </p>

      <h2>The water beside Serenique</h2>
      <Figure
        src="/gallery/cluster-plan.webp"
        alt="A-Cluster plan of Venkatesh Serenique, Bavdhan, with the watercourse and nala garden along the southern boundary"
        width={2400}
        height={1697}
        caption="The developer's A-Cluster plan. A watercourse runs along the southern boundary, with a strip marked &ldquo;Nala Garden&rdquo; beside it."
        credit={IMAGE_CREDIT}
      />
      <p>
        The developer&rsquo;s own plans show a watercourse along Serenique&rsquo;s southern
        boundary, with a landscaped strip beside it labelled &ldquo;Nala Garden&rdquo;. The plans do
        not say whether this is the Ram river or a stream that feeds it, and we have not been able to
        confirm which. Either way, it is the most important thing on the site plan to ask about.
      </p>
      <ul>
        <li>
          <strong>Which watercourse is it?</strong> Ask for its name on the revenue map.
        </li>
        <li>
          <strong>Where are the flood lines?</strong> Ask where the blue and red flood lines fall on
          the sanctioned plan, and how far the nearest wing stands from them.
        </li>
        <li>
          <strong>What drains into it?</strong> Ask where the project&rsquo;s treated water from its
          own sewage plants is discharged.
        </li>
        <li>
          <strong>Which homes face it?</strong> In the rains a stream is pleasant to look at; in a
          dry month, an untreated one is not. Ask which series in your wing look onto the garden.
        </li>
      </ul>
      <p>
        Water in the tap is a different question with its own answers. Read{' '}
        <Link href="/updates/water-in-bavdhan">water in Bavdhan</Link>, and for the planned new
        bridge over the river, <Link href="/updates/the-bhugaon-road-plan">the Bhugaon road plan</Link>.
      </p>
    </>
  )
}
