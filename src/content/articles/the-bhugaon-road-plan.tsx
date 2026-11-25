import Link from 'next/link'

import { Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'the-bhugaon-road-plan',
  title: 'The ₹200 crore Chandani Chowk to Bhugaon road plan, and its stall',
  excerpt:
    'PMC wants to widen the road west from Chandani Chowk to 60 metres, with a flyover, a grade separator and a new Ram river bridge. In September the flyover tender was cancelled. Where it stands.',
  metaDescription:
    'Chandani Chowk to Bhugaon road: PMC’s ₹200 crore plan to widen it to 60 m, the flyover and Ram river bridge, and why the tender was cancelled in September 2026.',
  category: 'Locality',
  publishedAt: '2026-11-12',
  author: 'Blackstone Realty',
  readingMinutes: 4,
  cover: {
    src: '/illustrations/bhugaon-road.svg',
    alt: 'Schematic of the Chandani Chowk to Bhugaon road with the planned flyover, grade separator and Ram river bridge',
  },
  sources: [
    {
      label: 'Punekar News, PMC plans ₹200 crore widening of Chandani Chowk to Bhugaon road, 27 March 2026',
      href: 'https://www.punekarnews.in/?p=231510',
    },
    {
      label: 'Construction World, Pune cancels Chandni Chowk Bhugaon flyover tender, 8 September 2026',
      href: 'https://www.constructionworld.in/policy-updates-and-economic-news/pune-cancels-chandni-chowk-bhugaon-flyover-tender/97059',
    },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Everyone in Bavdhan knows the road west out of Chandani Chowk, towards Bhugaon, Pirangut and
        Mulshi. It carries school buses, weekend traffic to the dams and lorries for the Pirangut
        industrial belt, and in places it is barely two lanes wide.
      </p>
      <p>
        In March 2026 Pune Municipal Corporation (PMC) put a plan to rebuild it in front of its
        standing committee. In September the main tender was cancelled. Both halves of that story
        matter if you are buying near Chandani Chowk.
      </p>

      <h2>What PMC proposed in March</h2>
      <ul>
        <li>
          <strong>Widening to 60 metres,</strong> on a road with stretches as narrow as 10 metres.
        </li>
        <li>
          <strong>A flyover of 870 metres</strong> over Ambrosia Chowk and Patil Nagar Chowk, about
          ₹82 crore.
        </li>
        <li>
          <strong>A grade separator of 430 metres</strong> at PVG IT College Chowk, about ₹27
          crore.
        </li>
        <li>
          <strong>A new bridge over the Ram river,</strong> 30 metres long and 70 metres wide.
        </li>
        <li>
          <strong>Cost:</strong> around ₹200 crore in two phases, ₹67.85 crore and ₹135.76 crore.
        </li>
      </ul>

      <h2>Why the tender was cancelled in September</h2>
      <p>
        PMC cancelled the flyover tender because the quoted cost came in above the approved
        estimate. Officials also pointed to work that had not been done first: the land and forest
        assessments, the soil testing, and an independent feasibility report.
      </p>
      <p>
        How far apart the numbers were is disputed. A corporator put the gap at about ₹45 crore;
        officials said it was closer to ₹1.5 crore. Either way, PMC now has to revise the estimate
        and finish the studies before it can tender again, and no new date has been given.
      </p>

      <Note title="Read this as a delay, not a cancellation of the plan">
        <p>
          What was cancelled is a tender, not the widening. The case for the project, a 10-metre
          road carrying a suburb&rsquo;s traffic, has not changed. What has changed is the start
          date, which is now further out and depends on land, including forest land, that PMC has
          not yet secured.
        </p>
      </Note>

      <h2>What it means for a buyer near Chandani Chowk</h2>
      <p>
        If the project goes ahead, the end state is a much better road west. The years in between
        are the cost: a 60-metre widening, a flyover and a bridge are several years of barricades on
        a road that is already tight. Add the metro works between Chandani Chowk and Kothrud Depot,
        which run on the other side of the junction, and the area will be a construction zone for a
        while.
      </p>
      <ul>
        <li>
          If your daily route runs west on this road, budget for slow years before better ones.
        </li>
        <li>
          If it runs east into the city or onto the highway, this project barely touches you.
        </li>
        <li>
          Ask the sales team which roads Serenique&rsquo;s gates open onto. The developer&rsquo;s
          layout shows proposed 18-metre and 24-metre roads beside the site; ask how far each has
          been built.
        </li>
      </ul>
      <p>
        For the junction itself, read{' '}
        <Link href="/updates/the-chandani-chowk-junction">the Chandani Chowk junction</Link>, and
        for the metro works,{' '}
        <Link href="/updates/the-metro-extension-to-chandani-chowk">
          the metro extension to Chandani Chowk
        </Link>
        .
      </p>
    </>
  )
}
