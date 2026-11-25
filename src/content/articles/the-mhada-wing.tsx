import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'
import { grouped, IMAGE_CREDIT, phase1 } from '@/content/project'

import type { ArticleMeta } from './types'

/* Facts: the developer's master layout and A-Cluster plan (Oct 2026 launch
   material, in /public/gallery) label "MHADA WING A4" and a "MHADA STP". The
   MahaRERA Form C annexure lists only Wings A1, A2, A3 and the shops. The 20
   per cent scheme figures are MHADA Pune's Aug 2026 lottery as reported. The
   regulation's exact thresholds were not verified from the UDCPR text, so
   this piece does not state them. */

export const meta: ArticleMeta = {
  slug: 'the-mhada-wing',
  title: 'The MHADA wing on Serenique’s plan, and what it means for you',
  excerpt:
    'The developer’s own layout shows a fourth wing, labelled MHADA Wing A4, with its own gate and its own sewage plant. It is not in the Phase 1 registration. What it is, and what to ask about it.',
  metaDescription:
    'Venkatesh Serenique’s layout shows MHADA Wing A4, outside the Phase 1 MahaRERA registration. What the 20 per cent scheme is and what a buyer should ask.',
  category: 'Project Update',
  publishedAt: '2026-11-16',
  author: 'Blackstone Realty',
  readingMinutes: 5,
  cover: {
    src: '/illustrations/mhada-wing.svg',
    alt: 'Block diagram of Serenique’s A Cluster with MHADA Wing A4 set apart from Wings A1, A2 and A3',
  },
  sources: [
    { label: 'Venkatesh Buildcon, Serenique master layout plan and A-Cluster plan, October 2026' },
    {
      label: `MahaRERA, ${phase1.registeredName} (${phase1.reraId}), Form C annexure, corrected ${phase1.correctedOn}`,
      href: 'https://maharera.maharashtra.gov.in',
    },
    {
      label: 'Free Press Journal, MHADA Pune lottery 2026: 4,462 homes, 27 August 2026',
      href: 'https://www.freepressjournal.in/pune/mhada-pune-lottery-2026-4462-homes-up-for-grabs-check-eligibility-dates-how-to-apply',
    },
    {
      label: 'Punekar News, MHADA Pune Board lottery and the 20 per cent scheme, 24 August 2026',
      href: 'https://www.punekarnews.in/?p=242977',
    },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Look closely at the developer&rsquo;s master layout for Serenique and you will find a fourth
        building at the west end of the cluster. It is labelled &ldquo;MHADA Wing A4&rdquo;. It is
        worth understanding before you book, so here it is plainly.
      </p>

      <Figure
        src="/gallery/master-layout-plan.webp"
        alt="Master layout plan of Venkatesh Serenique, Bavdhan, with MHADA Wing A4 at the west end of the A Cluster"
        width={2400}
        height={1697}
        caption="The developer's master layout. MHADA Wing A4 is the separate block at the left of the A Cluster, with its own entry from the proposed 18-metre road."
        credit={IMAGE_CREDIT}
      />

      <h2>What a MHADA wing is</h2>
      <p>
        Maharashtra&rsquo;s building rules require larger residential layouts in its big cities to
        set aside a share of homes for lower-income households. In Pune this is known as the
        &ldquo;20 per cent scheme&rdquo;. The homes have been handed to MHADA, the state housing
        board, which sells them by lottery at controlled prices.
      </p>
      <p>
        It is a legal requirement, not a choice the developer made, and it is common in large
        projects across the city. MHADA&rsquo;s Pune lottery in August 2026 offered 4,462 homes, and
        2,971 of them came through this scheme.
      </p>
      <Note title="The arrangement is changing">
        <p>
          In August 2026 the 20 per cent scheme was reported to have been withdrawn from MHADA, with
          future homes under it to be allotted through the municipal corporations. The label on the
          plan says MHADA; who actually runs the allotment when A4 is ready may be someone else.
        </p>
      </Note>

      <h2>What Serenique&rsquo;s plans show about A4</h2>
      <ul>
        <li>
          <strong>A separate building.</strong> A4 stands apart from the main block of A1, A2 and
          A3, off the podium.
        </li>
        <li>
          <strong>Its own gate.</strong> The cluster plan gives it an entry and exit onto the
          proposed 18-metre road, separate from the main gates.
        </li>
        <li>
          <strong>Its own sewage plant.</strong> A small &ldquo;MHADA STP&rdquo; is marked beside it,
          next to the main building&rsquo;s plant.
        </li>
        <li>
          <strong>Not in the Phase 1 registration.</strong> The MahaRERA filing lists Wings A1, A2,
          A3 and the shops, {grouped(phase1.units)} units in all. A4 is not among them.
        </li>
      </ul>

      <h2>Where it touches you as a buyer</h2>
      <p>
        For most buyers in A2 or A3, the answer is: not much, day to day. A separate building with
        its own gate and services is the arrangement most buyers would choose. The questions worth
        asking are about money and paperwork, not neighbours.
      </p>
      <ul>
        <li>
          <strong>Amenities.</strong> Does A4 share the podium, the pool and the clubhouse? The plan
          suggests not, but ask, because it changes how crowded those spaces are.
        </li>
        <li>
          <strong>Maintenance.</strong> Is A4 part of the same society and the same maintenance
          pool, or separate? Who runs the MHADA plant?
        </li>
        <li>
          <strong>Registration.</strong> Is A4 registered with MahaRERA on its own, and on what
          timeline will it be built?
        </li>
        <li>
          <strong>The unit count.</strong> The developer&rsquo;s project page says 552 flats; the
          Phase 1 registration counts {phase1.homes} homes. Ask whether the 552 includes A4, and
          what else it covers.
        </li>
      </ul>
      <p>
        None of this is a reason to walk away. It is the kind of detail that should be in writing
        before you sign, like everything else in{' '}
        <Link href="/updates/what-phase-one-covers">what Phase 1 covers</Link>. If you are still
        choosing a wing, read <Link href="/updates/wing-a2-or-wing-a3">Wing A2 or Wing A3</Link>.
      </p>
    </>
  )
}
