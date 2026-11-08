import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'water-in-bavdhan',
  title: 'Water in Bavdhan: the question nobody volunteers',
  excerpt:
    'Parts of the suburb run on an alternate-day municipal supply and fill the gap with tankers. It is the most common source of regret in a Pune society and the least likely thing to come up on a site visit.',
  metaDescription:
    "Water in Bavdhan: alternate-day supply, tankers, and why the developer's own spec lists chargeable tankers. What to ask before you book.",
  category: 'Locality',
  publishedAt: '2026-08-05',
  updatedAt: '2026-11-08',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/bavdhan-water.svg',
    alt: 'The questions to ask about water supply before buying in Bavdhan',
  },
  sources: [
    {
      label: 'Published resident reporting and locality reviews for Bavdhan, compiled August 2026',
    },
    { label: 'Reporting on water supply in Pune’s western suburbs, 2026' },
  ],
}

export default function Body() {
  return (
    <>
      <p>We could leave this one out. Most sites selling flats in Bavdhan do.</p>
      <p>
        It is in here because it is the single most common thing people regret not asking, and
        because a buyer who finds out in April rather than in August has a much worse year.
      </p>

      <h2>What is actually reported</h2>
      <p>
        Parts of Bavdhan receive municipal water on an alternate-day schedule rather than daily.
        Resident reporting describes intermittent supply in some pockets, with pressure worst
        through the summer months.
      </p>
      <p>
        The gap gets filled by tankers, bought by the society, and that appears on the maintenance
        bill rather than on any brochure.
      </p>
      <p>
        This is not the whole suburb. It varies pocket to pocket, and it varies with which societies
        have their own borewell and how good it is. Which is exactly why a locality-level answer is
        useless and a plot-level answer is essential.
      </p>

      <Note title="Why this compounds in a tall building">
        <p>
          Above roughly the fifteenth floor, water reaches you through booster pumps rather than
          gravity. A pocket with an intermittent supply, in a building that depends on pumping, is
          two dependencies stacked. Serenique is planned at{' '}
          <Link href="/updates/living-on-the-twenty-seventh-floor">27 floors</Link>, so the question
          matters more here than it would on a low-rise.
        </p>
      </Note>

      <h2>Five questions, asked of the right people</h2>
      <p>
        Ask these of the society committee in a neighbouring completed building, not of a sales
        team. The sales team may genuinely not know, and they are not the ones who paid last
        summer&rsquo;s tanker bill.
      </p>
      <ol>
        <li>
          <strong>Municipal or tanker, and how many hours a day?</strong> Get the answer for April,
          not for August.
        </li>
        <li>
          <strong>What did the society spend on tankers last summer?</strong> A number in rupees
          settles the question faster than any description.
        </li>
        <li>
          <strong>Is there a borewell, and what is its yield in April?</strong> Plenty of borewells
          perform well in November and poorly when it matters.
        </li>
        <li>
          <strong>What is the underground and overhead tank capacity, expressed in days?</strong>{' '}
          Litres mean nothing without knowing how many households draw on them.
        </li>
        <li>
          <strong>Is the connection sanctioned by the municipal corporation,</strong> or still
          running on a builder arrangement? These are different things and only one of them is
          permanent.
        </li>
      </ol>

      <Figure
        src="/illustrations/bavdhan-social-infra.svg"
        alt="Schools, hospitals and everyday retail named in the Bavdhan catchment"
        width={1200}
        height={675}
        caption="The rest of the everyday layer in Bavdhan is genuinely good. Water is the part that needs checking rather than assuming."
        credit="Illustration"
      />

      <h2>What the developer has said about Serenique</h2>
      <p>
        Phase 1 is at Survey No. 34, Bavdhan Khurd, near Chandani Chowk. The developer&rsquo;s own
        specification lists the water supply as{' '}
        <strong>PMC water supply, borewell and water tankers (chargeable)</strong>.
      </p>
      <p>
        That is a candid line, and it answers the first question: tankers are part of the plan, and
        you will pay for them through maintenance. The questions left are how often, at what cost
        per load, and how much storage the building has to ride out a dry week.
      </p>
      <p>
        Pune ran an alternate-day supply city-wide from June to August 2026. Ask the sales team how
        the building is expected to cope in a repeat, and ask to see the overhead and underground
        tank capacities on the plans.
      </p>

      <h2>The fair counterweight</h2>
      <p>
        Bavdhan is not unusual in this. Water pressure is a live issue across Pune&rsquo;s western
        suburbs, and a new building with planned storage usually copes better than an older
        society on a small plot with one overhead tank.
      </p>
      <p>
        So this is a question, not a verdict. The mistake is not buying in Bavdhan. It is buying
        without having asked.
      </p>
    </>
  )
}
