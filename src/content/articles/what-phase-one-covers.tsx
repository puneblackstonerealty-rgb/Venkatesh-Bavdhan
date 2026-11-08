import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'
import { grouped, phase1 } from '@/content/project'

import type { ArticleMeta } from './types'

/* Rewritten 8 November 2026 from the Phase 1 MahaRERA filing (Form C as
   corrected 31 Aug 2026) and the developer's Wing A2 and A3 floor plans. The
   August version asked which towers Phase 1 covered; the filing now says.
   Every figure is read from `phase1` in content/project.ts. */

const plannedWings = phase1.wings.filter((wing) => wing.homesPerTypicalFloor)
const parking = phase1.parking

export const meta: ArticleMeta = {
  slug: 'what-phase-one-covers',
  title: 'What Phase 1 covers, wing by wing',
  excerpt: `The MahaRERA filing for Serenique Phase 1 covers one building: Wings A1, A2 and A3 and ${phase1.shops} shops, ${grouped(phase1.units)} units in all. What each wing holds, and what the registration binds.`,
  metaDescription: `Serenique Phase 1 on MahaRERA: Wings A1, A2 and A3 and ${phase1.shops} shops, ${grouped(phase1.units)} units. What each wing holds and what the registration binds.`,
  category: 'Project Update',
  publishedAt: '2026-08-08',
  updatedAt: '2026-11-08',
  author: 'Blackstone Realty',
  readingMinutes: 5,
  cover: {
    src: '/illustrations/phase-one.svg',
    alt: `Phase 1 of Venkatesh Serenique on ${phase1.landAcres} acres beside ${phase1.futureAcres} acres of future development`,
  },
  sources: [
    {
      label: `MahaRERA, ${phase1.registeredName} (${phase1.reraId}), Form C annexure, corrected ${phase1.correctedOn}`,
      href: 'https://maharera.maharashtra.gov.in',
    },
    { label: 'Venkatesh Buildcon, Phase 1 floor plans for Wings A2 and A3, October 2026' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Serenique is registered with MahaRERA as {phase1.registeredName}, number {phase1.reraId}.
        The registration covers {phase1.building}, one building with three residential wings and a
        row of {phase1.shops} shops, on {phase1.landAcres} of the parcel&rsquo;s{' '}
        {phase1.parcelAcres} acres.
      </p>

      <Figure
        src="/illustrations/phase-one.svg"
        alt="What the Phase 1 registration covers"
        width={1200}
        height={675}
        caption={`Phase 1 is registered. The other ${phase1.futureAcres} acres are not.`}
        credit="Illustration"
      />

      <h2>Wing by wing</h2>
      <table>
        <thead>
          <tr>
            <th>Wing</th>
            <th>Units</th>
            <th>Habitable floors</th>
            <th>Commencement certificate up to</th>
          </tr>
        </thead>
        <tbody>
          {phase1.wings.map((wing) => (
            <tr key={wing.id}>
              <td>{wing.id}</td>
              <td>{wing.units}</td>
              <td>{wing.habitableFloors}</td>
              <td>Floor {wing.ccFloors}</td>
            </tr>
          ))}
          <tr>
            <td>Shops</td>
            <td>{phase1.shops}</td>
            <td>1</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <p>
        Almost every home is in the two tall wings.{' '}
        {plannedWings
          .map(
            (wing) =>
              `Wing ${wing.id} has ${wing.homesPerTypicalFloor} homes on a typical floor and ${wing.lifts}`,
          )
          .join('. ')}
        . Wing A1&rsquo;s three units are not drawn on any published plan, so their type is not
        known.
      </p>
      <p>
        Both tall wings have refuge floors at {phase1.refugeFloors.join(', ')}, where the plans show
        the handful of 1 BHK and 2.5 BHK homes. The 19th floor carries the fire tank and pump room
        and has fewer homes than a typical floor.
      </p>

      <h2>Parking, as filed</h2>
      <p>
        The filing lists {grouped(parking.totals.fourWheeler)} four-wheeler spaces,{' '}
        {grouped(parking.totals.twoWheeler)} two-wheeler spaces and {parking.totals.visitor}{' '}
        visitor spaces across Phase 1.
      </p>
      <Note title="One oddity in the filing">
        <p>
          Wing A1, with three units, shows exactly the same parking figures as Wing A3, with{' '}
          {phase1.wings.find((wing) => wing.id === 'A3')?.units} units. It may be a filing quirk. The
          totals above include it as filed. Ask the sales team which spaces belong to your wing, and
          make sure your allotment letter and agreement name the space.
        </p>
      </Note>

      <h2>What the registration binds</h2>
      <p>
        Everything above is a statement the developer has made to the regulator for Phase 1. The
        completion date, {phase1.completion}, is the one a delay claim is measured against, along
        with the date in your own registered agreement. Nothing about the other{' '}
        {phase1.futureAcres} acres is registered, so anything promised there, including shared
        amenities, is not yet covered.
      </p>
      <p>
        <Link href="/updates/phase-one-and-the-whole-site">Phase 1 and the whole site</Link> covers
        how the phases fit together, and{' '}
        <Link href="/updates/parking-and-what-you-actually-own">parking and what you own</Link>{' '}
        covers what to insist on in writing.
      </p>
    </>
  )
}
