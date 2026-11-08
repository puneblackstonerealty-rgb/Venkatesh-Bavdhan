import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'the-chandani-chowk-junction',
  title: 'The ₹865 crore junction Bavdhan is priced on',
  excerpt:
    'Chandani Chowk was the worst bottleneck in west Pune for a decade. Eight ramps and a rebuilt interchange later, here is what actually changed and what did not.',
  category: 'Locality',
  publishedAt: '2026-08-02',
  updatedAt: '2026-11-08',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/chandani-chowk.svg',
    alt: 'Schematic of the Chandani Chowk interchange showing eight ramp directions from Bavdhan',
  },
  sources: [
    {
      label: 'Punekar News, Chandani Chowk flyover inaugurated by Nitin Gadkari, 12 August 2023',
      href: 'https://www.punekarnews.in/pune-chandni-chowk-flyover-inaugurated-gadkari-asks-ajit-pawar-and-chandrakant-patil-to-recommend-name-for-the-flyover/',
    },
    { label: 'Reporting on Chandani Chowk metro works and the heavy-vehicle restriction, October 2026' },
    { label: 'Locality research for Bavdhan, compiled August 2026' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        For most of the last decade, the single strongest argument against buying in Bavdhan was a
        traffic light. Chandani Chowk sat where Paud Road met National Highway 48 and the Mumbai to
        Pune Expressway, and it could not carry what was being put through it.
      </p>
      <p>
        That is the thing that has changed, and it is the reason the suburb reads differently in
        2026 than it did in 2020.
      </p>
      <p>
        It is not finished changing. Metro works for the Aqua Line extension to Chandani Chowk began
        in April 2026, and from 28 October 2026 heavy vehicles have been kept off the Chandani Chowk
        to Kothrud Depot stretch while they continue. The PMC has also drawn up a widening plan for
        the road from Chandani Chowk to Bhugaon, which it describes as congested.
      </p>

      <h2>What was built</h2>
      <p>
        The junction was rebuilt as a multi-level interchange at a reported cost of around ₹865
        crore. Nitin Gadkari opened it on 12 August 2023, when it was described as completely ready
        for traffic.
      </p>
      <p>
        The design is eight ramps rather than a single flyover, giving grade-separated movement in
        eight directions: Bavdhan, Paud Road, Mulshi Road, Kothrud, Baner and Aundh, the Katraj-Dehu
        Road bypass, the Expressway towards Mumbai and NH-48 south towards Satara.
      </p>
      <p>
        The practical effect is that traffic which used to stop at a signal to cross now passes over
        or under. Through-movement and turning movement stopped competing for the same tarmac.
      </p>

      <Note title="Why eight ramps rather than a flyover">
        <p>
          A flyover helps one movement, usually the busiest one, and leaves the rest queuing
          underneath it. An interchange separates several movements at once. It costs several times
          as much and it is the only design that works where five roads meet, which is what Chandani
          Chowk is.
        </p>
      </Note>

      <h2>What it did for Bavdhan</h2>
      <p>
        Bavdhan sits immediately beside the junction, which is unusual and is the whole locational
        case for the suburb.
      </p>
      <p>
        Very few Pune addresses put Kothrud, Baner, Aundh and Hinjawadi within reach without driving
        through the middle of the city. Bavdhan does, because all four are reachable off different
        arms of the same interchange. The rebuild made those movements work at a scale that the old
        signal could not.
      </p>

      <Figure
        src="/illustrations/bavdhan-distances.svg"
        alt="Hub and spoke schematic of published distances from Bavdhan to nearby landmarks"
        width={1200}
        height={675}
        caption="Published distances from Bavdhan. Most sources give a distance rather than a drive time, and only the distance is reproduced here."
        credit="Illustration"
      />

      <h2>What it did not do</h2>
      <p>Being fair about it, three things are unchanged.</p>
      <ul>
        <li>
          <strong>The approach roads are still the approach roads.</strong> The interchange moves
          traffic through the junction. Getting from an internal Bavdhan lane onto the arm you want
          is a separate problem, and at 8am it is still a queue.
        </li>
        <li>
          <strong>Peak hours are still peak hours.</strong> Residents report slow movement on the
          Bavdhan to Chandani Chowk stretch between roughly 8 and 10 in the morning and 6 to 8:30 in
          the evening.
        </li>
        <li>
          <strong>Volume grows into new capacity.</strong> This is what road infrastructure does
          everywhere. A junction that works well in 2024 carries more traffic by 2028 precisely
          because it works.
        </li>
      </ul>

      <h2>How to price it into a decision</h2>
      <p>
        The interchange is built, open and being used. That puts it in a different category from the
        infrastructure most Pune microsites cite, which is usually proposed, approved or under way.
      </p>
      <p>
        Which means it is already in the price. Bavdhan re-rated when the junction opened, and a
        buyer arriving in 2026 is paying for a benefit that exists rather than one that might.
      </p>
      <p>
        That is the right way round. Paying today for infrastructure that is already delivered is
        ordinary. Paying today for infrastructure that is drawn on a plan is how people end up
        funding somebody else&rsquo;s option.
      </p>

      <h2>The test</h2>
      <p>
        Drive from Bavdhan to wherever you actually go, on a weekday, at the hour you would leave.
        Then drive back at the hour you would return.
      </p>
      <p>
        Those two numbers are the ones you live with. The junction has made them better than they
        were. It has not made them zero, and no brochure that says otherwise has been in the car
        with you at nine on a Tuesday.
      </p>
    </>
  )
}
