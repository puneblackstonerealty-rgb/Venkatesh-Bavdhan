import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'which-floor-should-you-buy',
  title: 'Which floor to buy in a 27-storey tower',
  excerpt:
    'Floor rise is charged in a straight line upwards. Almost none of the advantages you are buying behave that way, which is where the value sits.',
  category: 'Buying Guide',
  publishedAt: '2026-08-08',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/which-floor.svg',
    alt: 'Trade-offs between low, middle and high floors in a tall residential tower',
  },
  sources: [
    { label: 'The client, relaying the developer, 9 August 2026' },
    { label: 'General high-rise residential practice in Indian projects' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        On a 27-storey tower, the same flat can cost several lakh more depending only on how high up
        it is. Developers charge that as floor rise, usually as a per square foot premium that
        increases from a threshold floor upwards.
      </p>
      <p>
        The premium is linear. What you are buying with it is not, and that mismatch is where the
        decision lives.
      </p>

      <h2>What actually improves with height</h2>
      <ul>
        <li>
          <strong>View,</strong> which improves sharply until you clear the surrounding buildings
          and the treeline, and then improves slowly. In Bavdhan, clearing the line towards the
          Sahyadri foothills is the step that matters, and it happens at a specific floor rather
          than gradually.
        </li>
        <li>
          <strong>Light,</strong> for the same reason and at the same point.
        </li>
        <li>
          <strong>Road noise,</strong> which drops off quickly through the lower floors and then
          keeps dropping slowly.
        </li>
        <li>
          <strong>Privacy from the podium,</strong> which is largely resolved by about the fifth
          floor.
        </li>
      </ul>
      <p>
        Almost all of the practical benefit is delivered by the point where you clear the
        obstructions. Paying twice as much floor rise to go from the eighteenth to the
        twenty-seventh buys you a marginal improvement on something you already had.
      </p>

      <h2>What gets worse with height</h2>
      <ul>
        <li>
          <strong>Lift dependence.</strong> On the third floor the stairs are an option. On the
          twenty-fifth they are not, and a lift breakdown is a different kind of day.
        </li>
        <li>
          <strong>Water pressure complexity.</strong> Upper floors run on{' '}
          <Link href="/updates/living-on-the-twenty-seventh-floor">booster pumps</Link>. In a suburb
          with an intermittent supply, that is a second dependency on top of the first.
        </li>
        <li>
          <strong>Wind.</strong> Balcony use on the upper third changes in a way people
          underestimate until they live it.
        </li>
        <li>
          <strong>Evacuation time on foot,</strong> which is why refuge floors exist and why it is
          worth knowing where yours is.
        </li>
      </ul>

      <Note title="The resale point nobody makes">
        <p>
          Middle floors usually resell most easily, because they suit the widest range of buyers.
          The very top carries a premium that the next buyer may not want to pay, and the very
          bottom carries a discount that follows the flat. If there is any chance you will sell
          within ten years, that matters more than the view does.
        </p>
      </Note>

      <h2>A rough way to think about it</h2>
      <p>
        On a 27-floor building, the useful bands are broadly these. The exact thresholds depend on
        what surrounds the tower, which is why the sanctioned layout matters.
      </p>
      <ul>
        <li>
          <strong>Floors 1 to 8.</strong> Cheapest, quickest to leave, least dependent on lifts and
          pumps. You look at the podium rather than the horizon, and you hear the deck and the gate.
        </li>
        <li>
          <strong>Floors 9 to 18.</strong> Usually above the treeline and the road noise, below the
          worst of the wind, and the easiest band to resell. For most households this is the sweet
          spot.
        </li>
        <li>
          <strong>Floors 19 to 27.</strong> The best light, view and quiet, and the highest premium,
          the most lift dependence and the most wind.
        </li>
      </ul>

      <Figure
        src="/illustrations/high-rise-realities.svg"
        alt="The systems that change when a residential tower reaches twenty-seven floors"
        width={1200}
        height={675}
        caption="The systems that change with height. Lifts and water are the two that decide an ordinary weekday."
        credit="Illustration"
      />

      <h2>Questions to ask before paying floor rise</h2>
      <ol>
        <li>
          <strong>Show me the whole floor-rise table,</strong> not the rate for the floor I was
          shown. The shape of the table tells you where the developer thinks the value is.
        </li>
        <li>
          <strong>What is directly in front of this tower, and how tall will it be?</strong> A
          twentieth floor facing another tower thirty metres away is not a twentieth-floor view.
        </li>
        <li>
          <strong>Which floors are refuge floors?</strong> The flat immediately above one has
          different neighbours and different noise from the flat five floors up.
        </li>
        <li>
          <strong>How many lifts serve this tower, and is one of them a service lift?</strong>
        </li>
        <li>
          <strong>At what floor does the booster pump zone change?</strong> Pressure behaves
          differently at the bottom of a zone than at the top of one.
        </li>
      </ol>
      <p>
        Serenique&rsquo;s floor plans, unit mix and floor-rise structure have not been published
        yet. These are the questions to have ready for the day they are, rather than the day after
        you have booked.
      </p>
    </>
  )
}
