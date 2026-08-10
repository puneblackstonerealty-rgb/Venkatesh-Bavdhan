import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'water-in-bavdhan',
  title: 'Water in Bavdhan: the question nobody volunteers',
  excerpt:
    'Parts of the suburb run on an alternate-day municipal supply and fill the gap with tankers. It is the most common source of regret in a Pune society and the least likely thing to come up on a site visit.',
  category: 'Locality',
  publishedAt: '2026-08-05',
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

      <h2>What we do not know about Serenique</h2>
      <p>
        The developer has not published a street address for this project, let alone a water
        arrangement. So we cannot tell you which pocket the plot sits in or how it is served.
      </p>
      <p>
        What we can tell you is that the question exists, that it is answerable, and that it should
        be answered before a booking rather than after possession.
      </p>
      <p>
        When the plot location is released we will publish it, and this is one of the first things
        we will ask about on your behalf.
      </p>

      <h2>The fair counterweight</h2>
      <p>
        Bavdhan is not unusual in this. Water pressure is a live issue across Pune&rsquo;s western
        suburbs, and a large planned development with three basement levels has considerably more
        storage capacity than an older society on a small plot.
      </p>
      <p>
        A 14-acre scheme is also the kind of project that gets a sanctioned bulk connection rather
        than being retrofitted onto an existing line. That tends to work in a buyer&rsquo;s favour.
      </p>
      <p>
        So this is a question, not a verdict. The mistake is not buying in Bavdhan. It is buying
        without having asked.
      </p>
    </>
  )
}
