import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'parking-and-what-you-actually-own',
  title: 'Parking: what you own, and what you were only promised',
  excerpt:
    'A bay named in your registered agreement, an allotment letter and a floating arrangement are sold in near-identical language and give you three very different things.',
  category: 'Buying Guide',
  publishedAt: '2026-08-09',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/parking-rights.svg',
    alt: 'What a buyer actually owns when a parking space is allotted with a flat',
  },
  sources: [
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
        Very common, and considerably weaker. An allotment letter is a promise from the builder
        rather than a right recorded against your flat.
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
          Common areas belong to the society once conveyance happens, not to the builder. Which is
          why builders selling stilt or open parking as a separately saleable unit has repeatedly
          been struck down. Covered parking within the sanctioned building envelope is treated
          differently from open ground-level space, and the distinction is worth getting in writing.
        </p>
      </Note>

      <h2>Why three basements changes this</h2>
      <p>
        Serenique is planned with three basement levels beneath a podium. That is the expensive way
        to provide parking and it is the good way, because it puts the cars underground and leaves
        the deck above free of them.
      </p>
      <p>It also raises questions a single-level basement does not.</p>
      <ul>
        <li>
          <strong>Which level is your bay on?</strong> The third basement is a longer walk, a longer
          ramp and a different experience in a power cut than the first.
        </li>
        <li>
          <strong>How many ramps serve the basements?</strong> On a scheme of this size, one entry
          ramp for the whole development is a queue at 9am.
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
