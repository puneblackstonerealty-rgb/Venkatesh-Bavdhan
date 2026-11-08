import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'
import { grouped, phase1 } from '@/content/project'

import type { ArticleMeta } from './types'

/* Replaces two August articles, "fourteen-acres-and-eleven-towers" and
   "the-numbers-that-were-never-true", both of which rested on figures the
   developer's own launch material and the MahaRERA filing have since
   overtaken. Both old slugs redirect here (next.config.ts). */

const residentialWings = phase1.wings.filter((wing) => wing.homesPerTypicalFloor)
const tallest = Math.max(...phase1.wings.map((wing) => wing.habitableFloors))

export const meta: ArticleMeta = {
  slug: 'phase-one-and-the-whole-site',
  title: 'Phase 1 and the whole site: what the Serenique numbers describe',
  excerpt: `Phase 1 is one building on ${phase1.landAcres} of ${phase1.parcelAcres} acres, with ${phase1.homes} homes and ${phase1.shops} shops. What MahaRERA registered, what is still future, and what we got wrong in August.`,
  metaDescription: `Phase 1 of Venkatesh Serenique is one building on ${phase1.landAcres} of ${phase1.parcelAcres} acres with ${phase1.homes} homes. What MahaRERA registered and what is still future.`,
  category: 'Project Update',
  publishedAt: '2026-11-08',
  author: 'Blackstone Realty',
  readingMinutes: 5,
  cover: {
    src: '/illustrations/phase-one.svg',
    alt: `Phase 1 of Venkatesh Serenique on ${phase1.landAcres} acres beside ${phase1.futureAcres} acres marked for future development`,
  },
  sources: [
    {
      label: `MahaRERA, ${phase1.registeredName} (${phase1.reraId}), Form C as corrected ${phase1.correctedOn}`,
      href: 'https://maharera.maharashtra.gov.in',
    },
    {
      label: 'Venkatesh Buildcon, Serenique project page (land parcel, Phase 1 and Phase 2), read 6 November 2026',
      href: 'https://www.venkateshbuildcon.com',
    },
    { label: 'Venkatesh Buildcon, Phase 1 floor plans for Wings A2 and A3, October 2026' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Venkatesh Serenique sits on a {phase1.parcelAcres}-acre parcel near Chandani Chowk. The
        developer is building it in two phases, and only the first one is registered.
      </p>
      <p>
        Phase 1 takes {phase1.landAcres} acres. The other {phase1.futureAcres} acres are marked
        &ldquo;future development&rdquo; on the developer&rsquo;s own layout, and no MahaRERA
        registration exists for them yet.
      </p>

      <Figure
        src="/illustrations/phase-one.svg"
        alt={`Phase 1 on ${phase1.landAcres} acres, Phase 2 on ${phase1.futureAcres} acres`}
        width={1200}
        height={675}
        caption="What is registered today, and what is still a future phase."
        credit="Illustration"
      />

      <h2>What Phase 1 actually is</h2>
      <p>
        One building, which MahaRERA lists as {phase1.building}, with three residential wings and a
        row of shops. The registration, {phase1.reraId}, counts {grouped(phase1.units)} units:
      </p>
      <ul>
        {phase1.wings.map((wing) => (
          <li key={wing.id}>
            <strong>Wing {wing.id}:</strong> {wing.units} units, up to {wing.habitableFloors}{' '}
            habitable {wing.habitableFloors === 1 ? 'floor' : 'floors'}
            {wing.homesPerTypicalFloor
              ? `, ${wing.homesPerTypicalFloor} homes on a typical floor, ${wing.lifts}`
              : ''}
          </li>
        ))}
        <li>
          <strong>Shops:</strong> {phase1.shops} units on one floor
        </li>
      </ul>
      <p>
        That is {phase1.homes} homes and {phase1.shops} shops. The two big wings,{' '}
        {residentialWings.map((wing) => wing.id).join(' and ')}, hold almost all of them, and the
        tallest runs to {tallest} habitable floors. The completion date on the registration is{' '}
        {phase1.completion}.
      </p>

      <h2>What we got wrong in August</h2>
      <p>
        Before launch, this site published the scheme as 14 acres and 11 towers of 2, 3 and 4 BHK
        homes. Those figures came to us second-hand, ahead of any official material, and we said
        so at the time.
      </p>
      <p>
        We also deleted a figure we had seen on a listing site, 380 homes, because it looked
        impossible beside 11 towers. It was not impossible. It is the Phase 1 residential count on
        the MahaRERA filing, exactly. The listing had a first-phase number and presented it as the
        whole project. We had a whole-project picture that turned out not to match the
        developer&rsquo;s own.
      </p>
      <p>
        The developer&rsquo;s launch material and the registration now settle it. Where they
        disagree with what we published, they win, and the pages on this site have been changed to
        match.
      </p>

      <Note title="One figure that still does not reconcile">
        <p>
          The developer&rsquo;s project page also says &ldquo;552 flats and 13 showrooms&rdquo;.
          That is more than the {phase1.homes} homes registered for Phase 1, and the page does not
          say what the difference covers. Until it does, this site prints the registered figure and
          labels it Phase 1.
        </p>
      </Note>

      <h2>Why the phase matters to you</h2>
      <p>
        If you book now, you are buying into Phase 1. The registration, the completion date, the
        parking table and the carpet areas you can check on MahaRERA all describe Phase 1 and
        nothing else.
      </p>
      <ul>
        <li>
          <strong>Ask which wing your home is in,</strong> and read that wing&rsquo;s floor count
          and lift count against the plans. The two wings are not the same building inside.
        </li>
        <li>
          <strong>Ask what is promised for Phase 2,</strong> and whether any shared amenity you are
          paying for depends on it. Nothing about Phase 2 is registered yet.
        </li>
        <li>
          <strong>Treat any whole-project figure as marketing</strong> until a registration
          carries it.
        </li>
      </ul>
      <p>
        <Link href="/updates/what-phase-one-covers">What Phase 1 covers</Link> goes wing by wing,
        and <Link href="/updates/what-has-actually-been-released">the release ledger</Link> lists
        everything the developer has published so far.
      </p>
    </>
  )
}
