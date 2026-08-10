import { Figure } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'what-pre-launch-actually-means',
  title: 'What pre-launch actually means, and what you trade for it',
  excerpt:
    'Pre-launch pricing is real, and so is the reason it exists. Here is what you are buying before the brochure exists, and the questions worth asking before you commit.',
  category: 'Buying Guide',
  publishedAt: '2026-08-09',
  author: 'Blackstone Realty',
  readingMinutes: 5,
  cover: {
    src: '/illustrations/pre-launch-tradeoff.svg',
    alt: 'What a buyer gains and gives up by committing at pre-launch rather than at launch',
  },
  sources: [{ label: 'MahaRERA portal', href: 'https://maharera.maharashtra.gov.in/' }],
}

export default function Body() {
  return (
    <>
      <p>
        Pre-launch is one of those phrases that gets used to mean whatever suits the person saying
        it. Used precisely, it means the developer has registered the project and started taking
        interest, but has not yet published the full specification: no price list, no carpet areas,
        no amenity schedule, no floor plans.
      </p>
      <p>
        That is exactly where Venkatesh Serenique is today. It is worth understanding what that does
        and does not mean for you.
      </p>

      <h2>Why the pricing is lower</h2>
      <p>
        A developer at this stage wants two things: evidence that demand exists, and early cash
        flow. Both are worth paying for, and the currency is price.
      </p>
      <p>
        The discount is not charity and it is not a trick. You are being paid to commit before the
        product is fully described, which is a genuine service to the developer and a genuine risk
        to you. Once the price list is published and the show flat opens, that risk disappears and
        so does the discount.
      </p>

      <Figure
        src="/illustrations/release-ledger.svg"
        alt="Ledger showing five released items about Serenique and six that are still awaited"
        width={1200}
        height={675}
        caption="The right-hand column is what you are accepting you will not see before you commit."
        credit="Illustration"
      />

      <h2>What you are actually accepting</h2>

      <h3>You cannot compare on carpet area yet</h3>
      <p>
        Until carpet areas are published, per-square-foot comparison against other projects is not
        possible. Anyone quoting you a rate at this stage is quoting a number that has no
        denominator behind it.
      </p>

      <h3>The amenity list is not fixed</h3>
      <p>
        Amenities shown before the sanctioned plan is approved are intentions. Some will survive
        approval, some will move, some will not happen. This is normal and it is why the agreement
        for sale, not the brochure, is the document that binds.
      </p>

      <h3>The timeline is the longest it will ever be</h3>
      <p>
        Buying at pre-launch means buying at the maximum distance from possession. If you need to
        move in on a defined date, or you are paying rent while servicing a loan, that gap is a real
        cost that has to go in the arithmetic alongside the discount.
      </p>

      <h3>Your money is protected, but not free</h3>
      <p>
        RERA requires seventy per cent of collections to sit in a project-specific account and be
        drawn against construction progress. That is meaningful protection. It is not liquidity. If
        your circumstances change, exiting an under-construction flat is slower and more expensive
        than selling a finished one.
      </p>

      <h2>The questions worth asking now</h2>
      <ul>
        <li>Which phase is my flat in, and is that phase registered?</li>
        <li>
          What is the completion date on that phase&rsquo;s registration, not in conversation?
        </li>
        <li>Is the quoted price all-inclusive, and if not, what is excluded?</li>
        <li>What is the payment schedule tied to, construction stages or calendar dates?</li>
        <li>What happens to my booking amount if I withdraw before the agreement is signed?</li>
        <li>When will carpet areas and the sanctioned plan be published?</li>
      </ul>
      <p>
        A developer or channel partner worth dealing with will answer all six plainly, and will tell
        you when they do not know rather than guessing.
      </p>

      <h2>Who this suits</h2>
      <p>
        Pre-launch works for buyers with time, tolerance for an unfinished specification, and no
        pressure to move by a particular date. It works badly for anyone who needs certainty on
        layout, possession or monthly outgoings.
      </p>
      <p>
        Neither of those is the right answer. They are just different situations, and the discount
        is priced for the first one.
      </p>

      <h2>What we will send you</h2>
      <p>
        Registering does not commit you to anything. It puts you on the list that receives the
        carpet areas, the price list, the floor plans and the amenity schedule on the day the
        developer issues them, which is generally before those documents reach the listing portals.
      </p>
      <p>
        Until then, the honest answer to what a flat here costs is that nobody knows. We would
        rather tell you that than quote you a number we made up.
      </p>
    </>
  )
}
