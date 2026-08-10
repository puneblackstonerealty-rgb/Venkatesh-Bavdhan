import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'fourteen-acres-and-eleven-towers',
  title: 'Fourteen acres, eleven towers, and what that scale implies',
  excerpt:
    'The client has confirmed the land, the tower count and the structure. Here is what those three figures let you infer about the project, and where the inference has to stop.',
  category: 'Project Update',
  publishedAt: '2026-08-01',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/tower-stack.svg',
    alt: 'Section diagram of a tower showing three basements, ground, podium and twenty-seven floors',
  },
  sources: [
    { label: 'The client, relaying the developer, 9 August 2026' },
    { label: 'MahaRERA portal', href: 'https://maharera.maharashtra.gov.in/' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Three figures have been confirmed for Serenique, and they came from the client relaying the
        developer rather than from a listing site. That matters here more than usual, because the
        listing sites were badly wrong.
      </p>
      <ul>
        <li>
          <strong>14 acres</strong> of land
        </li>
        <li>
          <strong>11 towers</strong>
        </li>
        <li>
          <strong>Three basements, ground, a podium and 27 floors</strong> per tower
        </li>
        <li>
          <strong>2, 3 and 4 BHK</strong> homes
        </li>
      </ul>
      <p>
        That is the whole confirmed specification.{' '}
        <Link href="/updates/what-has-actually-been-released">
          Everything else is still awaited
        </Link>
        .
      </p>

      <h2>What 14 acres and 11 towers tells you</h2>
      <p>
        It tells you this is a township-scale scheme rather than a single-building project, and that
        changes what you are buying in three ways.
      </p>
      <ul>
        <li>
          <strong>It will be built in phases.</strong> Nobody builds eleven towers at once. Which
          means some residents will move in while construction continues beside them, and the phase
          your tower falls in decides how long that lasts for you.
        </li>
        <li>
          <strong>The amenities will be shared across all of it.</strong> Whatever is eventually
          announced, it is being sized for the whole scheme rather than for one tower.
        </li>
        <li>
          <strong>The internal roads and the entry points matter.</strong> On a fourteen-acre site,
          how far you walk to a gate and where construction traffic enters are real daily facts.
        </li>
      </ul>

      <Figure
        src="/illustrations/release-ledger.svg"
        alt="Ledger showing five released items about Serenique and six that are still awaited"
        width={1200}
        height={675}
        caption="What has been issued, and what has not. The right-hand column is the reason to register rather than a gap to fill in."
        credit="Illustration"
      />

      <h2>What 27 floors tells you</h2>
      <p>
        A 27-storey residential tower is around 90 metres of habitable height. At that scale,
        several things stop being details and become engineering: lift count and speed, water
        pressure to the upper floors, refuge floors and fire access, and the wind load on upper
        balconies.
      </p>
      <p>
        None of that is a criticism. It is what tall buildings are. It does mean the specification
        list, when it arrives, is worth reading more carefully than it would be on a seven-storey
        scheme.
      </p>

      <Note title="Three basements is a deliberate choice">
        <p>
          Three basement levels plus a podium means parking goes underground and the deck above it
          carries no cars. That is the expensive way to do it and it is the better one to live with,
          because it removes the conflict between reversing vehicles and children rather than
          managing it with speed bumps.
        </p>
      </Note>

      <h2>Where the inference has to stop</h2>
      <p>You can multiply 11 towers by 27 floors and reach a number. Do not.</p>
      <p>
        The total unit count has not been published. Getting from towers and floors to homes
        requires knowing how many apartments sit on each floor, and that has not been stated. Towers
        on the edge of a plot are frequently shorter than the tallest one, and a mixed 2, 3 and 4
        BHK scheme does not have a uniform floor plate.
      </p>
      <p>
        A listing site did publish a unit count for this project. It said 380 homes, alongside 2.5
        acres and 3 towers. All three came from the same source and the first two were wrong by
        multiples, so the third has been removed from this site rather than adjusted.
      </p>

      <h2>What to ask for</h2>
      <ol>
        <li>
          <strong>The total number of units filed on the MahaRERA record</strong> for the registered
          phase. That is a declared figure rather than a marketing one.
        </li>
        <li>
          <strong>Which towers fall inside Phase 1,</strong> and when the remaining phases are
          expected to be registered.
        </li>
        <li>
          <strong>The sanctioned layout,</strong> which shows tower positions, the gaps between them
          and where the gates are.
        </li>
        <li>
          <strong>Lifts per tower,</strong> which on a 27-storey building is one of the few
          specification questions that changes daily life every single morning.
        </li>
      </ol>
      <p>
        Four confirmed figures is more than most pre-launch projects publish. It is also a long way
        short of enough to decide on, and the honest position is to say which of those two things is
        true at any given moment.
      </p>
    </>
  )
}
