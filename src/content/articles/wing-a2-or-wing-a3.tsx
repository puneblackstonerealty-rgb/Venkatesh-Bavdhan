import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'
import { IMAGE_CREDIT, phase1, priceList, rupeesShort, sqftText } from '@/content/project'

import type { ArticleMeta } from './types'

/* Every figure here is read from project.ts: the wing table is MahaRERA's
   Form C annexure plus the developer's floor plans, the areas and prices are
   the developer's price list of 13 Oct 2026. Nothing is retyped. */

const wing = (id: 'A2' | 'A3') => {
  const w = phase1.wings.find((x) => x.id === id)
  if (!w?.homesPerTypicalFloor || !w.lifts) throw new Error(`no plan figures for Wing ${id}`)
  return { ...w, homesPerTypicalFloor: w.homesPerTypicalFloor, lifts: w.lifts }
}
const a2 = wing('A2')
const a3 = wing('A3')

const lines = (id: 'A2' | 'A3', type: '2 BHK' | '3 BHK') =>
  priceList.lines.filter((l) => l.wing === id && l.type === type)
const span = (values: number[]) => [Math.min(...values), Math.max(...values)]

const a2Two = lines('A2', '2 BHK')
const a3Two = lines('A3', '2 BHK')
const a3Three = lines('A3', '3 BHK')

const [a2TwoMin, a2TwoMax] = span(a2Two.map((l) => l.reraCarpet.sqft))
const [a3TwoMin, a3TwoMax] = span(a3Two.map((l) => l.reraCarpet.sqft))
const a2TwoFrom = Math.min(...a2Two.map((l) => l.agreementValue))
const a3TwoFrom = Math.min(...a3Two.map((l) => l.agreementValue))
const a3ThreeFrom = Math.min(...a3Three.map((l) => l.agreementValue))

/* Agreement value per sq m of RERA carpet, averaged over a wing's 2 BHK lines.
   Used only to show the two wings are priced at about the same rate. */
const ratePerSqm = (ls: typeof a2Two) =>
  ls.reduce((sum, l) => sum + l.agreementValue / l.reraCarpet.sqm, 0) / ls.length
const lakhs = (n: number) => `₹${(n / 100000).toFixed(2)} lakh`

const passengerLifts = (lifts: string) => Number(lifts.match(/^(\d+)/)?.[1] ?? 0)

export const meta: ArticleMeta = {
  slug: 'wing-a2-or-wing-a3',
  title: 'Wing A2 or Wing A3: choosing your side of Serenique',
  excerpt: `The two big wings of Serenique Phase 1 look alike from the road. Inside, A2 is ${a2.homesPerTypicalFloor} homes a floor, all 2 BHK, and A3 is ${a3.homesPerTypicalFloor} homes a floor with the only 3 BHKs. How to pick between them.`,
  metaDescription: `Serenique Phase 1, Bavdhan: Wing A2 has ${a2.homesPerTypicalFloor} homes a floor, all 2 BHK. Wing A3 has ${a3.homesPerTypicalFloor} and the only 3 BHKs. Areas, lifts and prices compared.`,
  category: 'Project Update',
  publishedAt: '2026-11-09',
  author: 'Blackstone Realty',
  readingMinutes: 5,
  cover: {
    src: '/illustrations/wing-a2-a3.svg',
    alt: `Diagram comparing Wing A2, ${a2.homesPerTypicalFloor} homes a floor, with Wing A3, ${a3.homesPerTypicalFloor} homes a floor, at Venkatesh Serenique`,
  },
  sources: [
    {
      label: `MahaRERA, ${phase1.registeredName} (${phase1.reraId}), Form C annexure, corrected ${phase1.correctedOn}`,
      href: 'https://maharera.maharashtra.gov.in',
    },
    { label: 'Venkatesh Buildcon, floor plans for Wing A2 and Wing A3, October 2026' },
    { label: `Venkatesh Buildcon, Serenique price list for ${priceList.wings}, ${priceList.issued}` },
    { label: 'Venkatesh Buildcon, A-Cluster plan, Serenique launch material, October 2026' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Serenique Phase 1 is one building with two tall wings, A2 and A3. From Chandani Chowk they
        read as one block. On the floor plans they are two quite different buildings, and the wing
        you pick decides your neighbours, your lift queue and which flat types you can buy at all.
      </p>
      <p>
        A third wing, A1, holds only {phase1.wings.find((w) => w.id === 'A1')?.units} units on a
        single habitable floor, and none of the published plans draw them. For almost every buyer,
        the choice is A2 or A3.
      </p>

      <h2>The two wings side by side</h2>
      <ul>
        <li>
          <strong>Wing A2:</strong> {a2.units} units, {a2.habitableFloors} habitable floors,{' '}
          {a2.homesPerTypicalFloor} homes on a typical floor, all of them 2 BHK. {a2.lifts}. The
          2.5 BHK sits on this wing&rsquo;s refuge floors.
        </li>
        <li>
          <strong>Wing A3:</strong> {a3.units} units, {a3.habitableFloors} habitable floors,{' '}
          {a3.homesPerTypicalFloor} homes on a typical floor: four 2 BHK and two 3 BHK. {a3.lifts}.
          The 1 BHK sits on this wing&rsquo;s refuge floors.
        </li>
      </ul>

      <Figure
        src="/gallery/cluster-plan.webp"
        alt="A-Cluster plan of Venkatesh Serenique, Bavdhan, showing Wings A1, A2 and A3 with the podium pool"
        width={2400}
        height={1697}
        caption="The developer's A-Cluster plan. A2 is the middle of the building; A3 is the east end, beside the second open space and a gate. The plan has no north arrow."
        credit={IMAGE_CREDIT}
      />

      <h2>Want a 3 BHK? The choice is already made</h2>
      <p>
        Every 3 BHK in Phase 1 is in Wing A3. On the price list they are two homes a floor, at{' '}
        {sqftText(Math.min(...a3Three.map((l) => l.reraCarpet.sqft)))} to{' '}
        {sqftText(Math.max(...a3Three.map((l) => l.reraCarpet.sqft)))} of RERA carpet, from{' '}
        {rupeesShort(a3ThreeFrom)} before stamp duty, registration and GST. If you need the third
        bedroom, skip the rest of this article and ask which A3 floors are still open.
      </p>

      <h2>Want a 2 BHK? Compare area, not rate</h2>
      <p>
        Both wings sell 2 BHKs, and the price list prices them at almost exactly the same rate. The
        A2 lines average about {lakhs(ratePerSqm(a2Two))} per sq m of RERA carpet and the A3 lines
        about {lakhs(ratePerSqm(a3Two))}. What differs is the size you get for it.
      </p>
      <ul>
        <li>
          <strong>A2 2 BHK:</strong> {sqftText(a2TwoMin)} to {sqftText(a2TwoMax)} RERA carpet,
          from {rupeesShort(a2TwoFrom)}.
        </li>
        <li>
          <strong>A3 2 BHK:</strong> {sqftText(a3TwoMin)} to {sqftText(a3TwoMax)} RERA carpet,
          from {rupeesShort(a3TwoFrom)}.
        </li>
      </ul>
      <p>
        So A2 holds the smallest and cheapest 2 BHKs in the building, and A3&rsquo;s 2 BHKs are a
        little larger for a little more. The gap is a few square feet, not a different home. These
        are agreement values from the list dated {priceList.issued}, which was valid for{' '}
        {priceList.validDays} days. Use them to compare the wings, not as today&rsquo;s quote.
      </p>

      <h2>Neighbours and lifts</h2>
      <p>
        This is where the wings really differ. An A2 floor has {a2.homesPerTypicalFloor} front doors
        on it; an A3 floor has {a3.homesPerTypicalFloor}. The lifts scale with the homes, so on paper
        both wings give two homes a floor to each passenger lift.
      </p>
      <p>
        Over the whole wing the numbers drift apart slightly. A2 puts about{' '}
        {Math.round(a2.units / passengerLifts(a2.lifts))} units on each passenger lift and A3 about{' '}
        {Math.round(a3.units / passengerLifts(a3.lifts))}. What you will notice day to day is the
        corridor: eight households sharing a lobby is a busier floor than six, at the morning rush
        and on moving days.
      </p>

      <Note title="Floors that are not like the others">
        <p>
          Both wings have refuge floors at the {phase1.refugeFloors.join('th, ')}th levels, with
          fewer homes on them. The 19th floor carries the fire tank and pump room, so it also has
          fewer homes: seven in A2 and five in A3 on the floor plans. Ask whether a home you are
          offered sits beside a refuge area or the plant room.
        </p>
      </Note>

      <h2>Where each wing sits on the plot</h2>
      <p>
        On the developer&rsquo;s cluster plan, A2 is the centre of the building, between A1 and A3,
        and the podium pool sits behind it, towards A3. A3 is the east end, next to the second open space
        and one of the site&rsquo;s gates. Shops line the road side of the building.
      </p>
      <p>
        The plan does not show north, so it tells you nothing about which homes catch the morning
        sun or face the road. That is a question for the sales team, flat by flat.
      </p>

      <h2>Questions to ask before you choose</h2>
      <ul>
        <li>Which way does this series face, and what does it look onto: road, pool or garden?</li>
        <li>
          What is the floor rise rate? The price list charges it from the{' '}
          {priceList.terms.floorRiseFrom}th residential floor but does not print the rate.
        </li>
        <li>Is this home next to a refuge area, the 19th-floor plant room or a lift lobby?</li>
        <li>
          For A3 Series 6, which carpet area goes in the agreement? The price list and the floor
          plan give different figures.
        </li>
      </ul>
      <p>
        Every line of the price list is on <Link href="/configurations">the configurations page</Link>
        . For the height question, read{' '}
        <Link href="/updates/which-floor-should-you-buy">which floor to buy</Link> and{' '}
        <Link href="/updates/living-on-the-twenty-seventh-floor">
          what changes when a tower goes to 27 floors
        </Link>
        .
      </p>
    </>
  )
}
