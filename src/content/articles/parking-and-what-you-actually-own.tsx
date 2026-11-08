import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'parking-and-what-you-actually-own',
  title: 'Parking: what you own, and what you were only promised',
  excerpt:
    'A bay named in your registered agreement, an allotment letter and a floating arrangement are sold in near-identical language and give you three very different things.',
  metaDescription:
    "What you own when you are given parking: covered versus open, what the allotment letter and agreement must say, and Serenique's filed count.",
  category: 'Buying Guide',
  publishedAt: '2026-08-09',
  updatedAt: '2026-11-08',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/parking-rights.svg',
    alt: 'What a buyer actually owns when a parking space is allotted with a flat',
  },
  sources: [
    {
      label: 'MahaRERA, Serenique Phase 1 Form C parking table, corrected 31 August 2026',
      href: 'https://maharera.maharashtra.gov.in',
    },
    {
      label: 'Free Press Journal, MahaRERA makes parking details mandatory in legal documents, April 2024',
      href: 'https://www.freepressjournal.in/amp/mumbai/maharera-makes-mandatory-to-include-all-details-related-to-parking-in-legal-documents',
    },
    {
      label: 'Real Estate (Regulation and Development) Act, 2016',
      href: 'https://www.indiacode.nic.in/handle/123456789/2158',
    },
    { label: 'Maharashtra Ownership Flats Act, 1963' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Nobody negotiates hard over parking. It is discussed for two minutes near the end of a long
        conversation about the flat, and it is settled with a sentence.
      </p>
      <p>
        Then the building fills up, every household has two cars instead of one, and the sentence
        turns out to have meant three different things to three different people.
      </p>

      <h2>Three arrangements, in descending order of strength</h2>

      <h3>Named in the registered agreement, with the bay number</h3>
      <p>
        The specific space is identified in the agreement for sale that you register. This is the
        strongest version and the one to ask for.
      </p>
      <p>
        It survives a change of builder personnel, a change of society committee and a dispute with
        a neighbour, because it is recorded in a registered document rather than remembered.
      </p>

      <h3>Allotted by letter, after the agreement</h3>
      <p>
        Very common, and weaker on its own. Since April 2024 the parking details have to be annexed
        to the agreement as well, so if your agreement is silent on them, ask why.
      </p>
      <p>
        In practice most allotment letters are honoured. The problem arrives at handover, when the
        builder exits and the society takes over the common areas, and the society was not party to
        that letter.
      </p>

      <h3>Floating, first come first served</h3>
      <p>
        You have access to the basement. You do not have a place in it. This works perfectly at
        forty per cent occupancy and is contested at ninety-five.
      </p>
      <p>
        If this is the arrangement, ask what the ratio is: how many sanctioned parking spaces exist
        against how many flats. A scheme at 1.2 spaces per flat behaves very differently from one at
        0.8.
      </p>

      <Note title="The point most sales conversations skip">
        <p>
          The law draws a clear line. Open parking is a common area under RERA and the MahaRERA
          rules, and cannot be sold. Covered parking, whether stilt, podium, basement or mechanised,
          and garages can be. The Supreme Court&rsquo;s Nahalchand ruling (2010) barred selling stilt
          parking under the older MOFA regime. Since April 2024 MahaRERA has required the type,
          number, size and location of your parking to be set out in both the allotment letter and
          the agreement.
        </p>
      </Note>

      <h2>What Serenique has filed</h2>
      <p>
        The MahaRERA filing for Phase 1 lists 622 four-wheeler spaces, 1,036 two-wheeler spaces and
        49 visitor spaces. The developer&rsquo;s renders show the parking on a podium under the
        amenity deck. A multi-level podium raises questions a single level does not.
      </p>
      <ul>
        <li>
          <strong>Which level is your bay on?</strong> The lowest level is a longer walk, a longer
          ramp and a different experience in a power cut than the first.
        </li>
        <li>
          <strong>How many ramps serve the parking levels?</strong> On a building of this size, one
          entry ramp is a queue at 9am.
        </li>
        <li>
          <strong>Is there ventilation and lighting on the lower levels,</strong> and does the power
          backup cover them?
        </li>
        <li>
          <strong>Where is visitor parking,</strong> and is it inside the sanctioned count or in
          addition to it?
        </li>
      </ul>

      <Figure
        src="/illustrations/conveyance-timeline.svg"
        alt="Timeline showing conveyance deadlines and the deemed conveyance route in Maharashtra"
        width={1200}
        height={675}
        caption="Parking sits in the common areas, and the common areas pass to the society at conveyance. Which is when informal arrangements get tested."
        credit="Illustration"
      />

      <h2>What to get in writing</h2>
      <ol>
        <li>How many spaces come with the flat, stated as a number</li>
        <li>Whether they are allotted or floating</li>
        <li>If allotted, the bay number and the basement level, named in the agreement</li>
        <li>The total sanctioned parking count for the phase, against the number of flats in it</li>
        <li>Whether a second space can be bought, at what price, and on what basis</li>
      </ol>
      <p>
        None of this is available for Serenique yet. Parking arrangements come with the floor plans
        and the cost sheet, and neither has been published.
      </p>
      <p>
        Which makes now the right time to know what to ask, rather than the week you are handed a
        cost sheet and asked to decide by Friday.
      </p>
      <p>
        This is general information rather than legal advice. Have your own agreement read by a
        lawyer before you sign it.
      </p>
    </>
  )
}
