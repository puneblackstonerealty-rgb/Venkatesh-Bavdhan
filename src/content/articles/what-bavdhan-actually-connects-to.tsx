import { Figure } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'what-bavdhan-actually-connects-to',
  title: 'What Bavdhan connects to, and what it does not',
  excerpt:
    'Bavdhan sits beside the junction where Paud Road, NH-48 and the Expressway meet. That is the whole case for the address, and the one thing that used to spoil it has been fixed.',
  category: 'Locality',
  publishedAt: '2026-08-06',
  author: 'Blackstone Realty',
  readingMinutes: 5,
  cover: {
    src: '/illustrations/bavdhan-distances.svg',
    alt: 'Hub and spoke schematic of published distances from Bavdhan to nearby landmarks',
  },
  sources: [{ label: 'Public Bavdhan locality data, compiled August 2026' }],
}

export default function Body() {
  return (
    <>
      <p>
        Most Pune suburbs are described by what they sit near. Bavdhan is better described by what
        it lets you skip. It is one of the few addresses from which Kothrud, Baner, Aundh and
        Hinjawadi are all reachable without crossing the centre of the city.
      </p>
      <p>
        That comes down to a single junction. Chandani Chowk is where Paud Road meets National
        Highway 48 and the Mumbai to Pune Expressway, and Bavdhan sits right beside it.
      </p>

      <h2>The distances that matter</h2>
      <ul>
        <li>
          <strong>Vanaz metro station on the Aqua Line</strong>, under 4 km, and already running.
        </li>
        <li>
          <strong>Kothrud and Baner commercial hubs</strong>, 5 to 7 km.
        </li>
        <li>
          <strong>Hinjawadi IT Park</strong>, roughly 14 km, about 30 minutes.
        </li>
        <li>
          <strong>Pune International Airport</strong>, about 30 minutes.
        </li>
        <li>
          <strong>Sahyadri Hospital, Kothrud</strong> at around 4 km, and{' '}
          <strong>Jupiter Hospital, Baner</strong> at around 6 km.
        </li>
      </ul>
      <p>
        These are measured from the centre of Bavdhan, not from any particular project gate. We have
        not converted them all into drive times either. The ones above carrying a time are the ones
        a source actually published.
      </p>

      <Figure
        src="/illustrations/chandani-chowk.svg"
        alt="Schematic of the Chandani Chowk interchange showing eight ramp directions from Bavdhan"
        width={1200}
        height={675}
        caption="Eight ramps rather than a single flyover, which is what five converging roads require."
        credit="Illustration"
      />

      <h2>The bottleneck that got fixed</h2>
      <p>
        For years the fair objection to Bavdhan was Chandani Chowk itself. The junction that gave
        the suburb its reach was also its chokepoint, and the peak-hour queue undid the geography.
      </p>
      <p>
        The flyover and the widened approach roads have changed that in a way residents can feel. It
        is the biggest thing to happen to this locality&rsquo;s case in a decade, and it is why
        Bavdhan reads differently in 2026 than it did in 2019.
      </p>
      <p>
        Metro Phase 2 extensions have been approved to serve the area, which would push it further
        again. Approved is not the same as running, though, so treat it as upside rather than a
        reason to buy today.
      </p>

      <h2>Everyday life</h2>
      <ul>
        <li>
          <strong>Schools:</strong> Vibgyor High Bavdhan, Indus International, The Orchid School,
          Mercedes-Benz International School, Ryan International.
        </li>
        <li>
          <strong>Healthcare:</strong> Sahyadri Kothrud, Jupiter Baner, Manipal Pashan, Chellaram.
        </li>
        <li>
          <strong>Retail:</strong> Aditya Shagun Mall, Vishal Shopping Complex, Bandal Dhankude
          Plaza, D-Mart.
        </li>
      </ul>

      <h2>The fair criticism</h2>
      <p>
        Bavdhan has no large mall and no serious food and beverage anchor inside the locality. For
        either you are driving to Baner or Kothrud, five to seven kilometres away. That is a short
        hop, though it stops feeling short on a weekday evening. Buyers who want everything within
        walking distance should know this before they visit rather than after.
      </p>
      <p>
        The trade is fairly plain. You give up an in-locality high street. You get hill views, lower
        density than Baner, and a junction that reaches four employment hubs without touching
        central Pune.
      </p>
    </>
  )
}
