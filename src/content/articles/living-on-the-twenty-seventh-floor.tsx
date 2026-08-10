import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'living-on-the-twenty-seventh-floor',
  title: 'What changes when a tower goes to 27 floors',
  excerpt:
    'A tall building is not a taller version of a short one. Lifts, water pressure, fire access, wind and maintenance all behave differently, and each is a question worth asking.',
  category: 'Buying Guide',
  publishedAt: '2026-08-04',
  author: 'Blackstone Realty',
  readingMinutes: 7,
  cover: {
    src: '/illustrations/high-rise-realities.svg',
    alt: 'The systems that change when a residential tower reaches twenty-seven floors',
  },
  sources: [
    { label: 'The client, relaying the developer, 9 August 2026' },
    { label: 'General high-rise design and fire-safety practice in Indian residential buildings' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Serenique is planned as eleven towers of three basements, ground, a podium and 27 floors.
        That last figure is the one worth sitting with, because a 27-storey residential building
        behaves differently from the seven-storey buildings most Pune buyers have lived in.
      </p>
      <p>
        None of what follows is a criticism of tall buildings. It is a list of the questions that
        stop being details above about the fifteenth floor.
      </p>

      <h2>Lifts stop being a convenience</h2>
      <p>
        On a low building, a lift is something you use. On a 27-storey tower it is the only
        practical way in and out, and the morning peak concentrates into roughly ninety minutes.
      </p>
      <p>
        Two questions settle it: how many lifts per tower, and what speed are they rated at? Four
        apartments a floor across 27 floors with two lifts is a very different morning from the same
        building with three.
      </p>
      <p>
        Ask also whether one of them is a service lift, because a building where furniture and
        deliveries share the passenger lifts is a building with a permanent queue.
      </p>

      <h2>Water has to be pumped, twice</h2>
      <p>
        Above roughly the fifteenth floor, water reaches you through booster pumps and pressure
        zoning rather than through gravity alone. That is standard engineering and it works.
      </p>
      <p>
        It matters more here than it would elsewhere, because parts of Bavdhan run on{' '}
        <Link href="/updates/water-in-bavdhan">an intermittent</Link>
        municipal supply. A building that depends on pumps, in a pocket that depends on tankers, is
        two dependencies stacked on each other.
      </p>
      <p>
        Ask about tank capacity in days, not litres, and ask what happens to the upper floors during
        a power cut.
      </p>

      <Note title="The question people forget">
        <p>
          Does the power backup cover the flat, or only the common areas? On the twenty-fifth floor,
          a backup that runs the lifts and the lobby but not your home is a materially different
          product from one that runs both, and the monthly cost differs accordingly.
        </p>
      </Note>

      <h2>Fire safety becomes a design constraint</h2>
      <p>
        Tall residential buildings require refuge floors, pressurised staircases, wet risers and
        sprinklers, and they require an approach that a turntable ladder can actually reach.
      </p>
      <p>Three things to ask, and to see on the plan rather than be told:</p>
      <ol>
        <li>Which floors are refuge floors, and how far is yours from the nearest one</li>
        <li>Whether the fire tender approach road is wide enough and unobstructed by parking</li>
        <li>Whether the building has its fire NOC, and for which towers</li>
      </ol>
      <p>
        Evacuating 27 floors on foot is slow. That is why the design compensates, and why it is
        worth confirming the design is actually there.
      </p>

      <Figure
        src="/illustrations/which-floor.svg"
        alt="Trade-offs between low, middle and high floors in a tall residential tower"
        width={1200}
        height={675}
        caption="Height is charged for as floor rise. Most of the practical advantages of it are not linear with the price."
        credit="Illustration"
      />

      <h2>Wind is real up there</h2>
      <p>
        On the upper third of a tall tower, balcony use changes. Loose furniture moves, drying
        clothes outdoors becomes impractical on some days, and window and railing specification
        matters more than it does lower down.
      </p>
      <p>
        This is the single most common surprise for buyers moving up from a low building, and it is
        one nobody mentions in a sales lounge.
      </p>

      <h2>Maintenance rises with height</h2>
      <p>
        Pumps, high-speed lifts, facade cleaning access, diesel for the generator and the servicing
        of fire systems all cost more in a tall building than a short one, and they are shared
        across the flats in that building.
      </p>
      <p>
        Ask for the projected maintenance figure per square foot per month, in writing, before you
        book. On a large scheme with a podium and a clubhouse it is one of the biggest recurring
        costs of ownership and it is rarely volunteered.
      </p>

      <h2>What none of this is</h2>
      <p>
        It is not an argument against buying high. Upper floors get the light, the air, the quiet
        and the view, and in Bavdhan they get the Sahyadri foothills, which is the thing people
        actually move here for.
      </p>
      <p>
        It is an argument for asking six specific questions before you pay{' '}
        <Link href="/updates/which-floor-should-you-buy">a floor-rise premium</Link>.
        Serenique&rsquo;s specifications have not been published yet, so these are the questions to
        have ready for the day they are.
      </p>
    </>
  )
}
