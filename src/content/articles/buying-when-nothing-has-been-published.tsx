import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'buying-when-nothing-has-been-published',
  title: 'How to do diligence on a project with no brochure',
  excerpt:
    'No price list, no carpet areas, no plans, no renders. Seven checks are still available to you, most of them free, and none of them need the developer to cooperate.',
  category: 'Buying Guide',
  publishedAt: '2026-08-10',
  author: 'Blackstone Realty',
  readingMinutes: 7,
  cover: {
    src: '/illustrations/off-plan-diligence.svg',
    alt: 'Seven checks a buyer can make on a project that has published almost nothing',
  },
  sources: [
    { label: 'MahaRERA portal', href: 'https://maharera.maharashtra.gov.in/' },
    {
      label: 'Real Estate (Regulation and Development) Act, 2016',
      href: 'https://www.indiacode.nic.in/handle/123456789/2158',
    },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        There is a version of this page that says &ldquo;register and we will tell you when we know
        more&rdquo;. This is not that page, because there is genuinely a lot you can find out right
        now, and none of it requires anyone&rsquo;s permission.
      </p>

      <h2>1. The registration on the portal</h2>
      <p>
        Search the registered name, not the marketing name. For this project that is{' '}
        <strong>Shree Venkatesh Serenique Phase 1</strong>.
      </p>
      <p>
        The record gives you the promoter as a legal entity, the declared completion date, the
        sanctioned layout as a downloadable file, and the filed carpet areas. That is four things
        the brochure does not exist to tell you, available before the brochure exists.
      </p>

      <h2>2. The promoter&rsquo;s other registrations</h2>
      <p>
        The portal lists every project by the same promoter, including the ones that ran late. This
        is the only track record that is verifiable rather than described.
      </p>
      <p>
        Compare declared completion dates against actual ones across their delivered projects. A
        firm that has been consistently a few months late is a different proposition from one that
        has been years late once.
      </p>

      <h2>3. Quarterly progress filings</h2>
      <p>
        Promoters are required to file progress updates against a registered project. They are
        public, and they are the most honest construction update available anywhere.
      </p>
      <p>
        Read them against what a sales team is telling you. Where the two differ, you have learned
        something more useful than either on its own.
      </p>

      <h2>4. A delivered building, visited alone</h2>
      <p>
        This is the check almost nobody does and it is worth more than the other six put together.
      </p>
      <p>
        Go to{' '}
        <Link href="/updates/the-developer-track-record">
          a completed project by the same developer
        </Link>
        , unaccompanied, and talk to somebody who lives there. Three questions cover most of it:
        when were you promised possession and when did you get it, what broke in the first two years
        and how did the builder respond, and how did the handover to the residents&rsquo;
        association go.
      </p>

      <Note title="Why unaccompanied matters">
        <p>
          A site visit arranged by a sales team goes to a project chosen by the sales team, and you
          meet residents who happen to be walking past. Twenty minutes in an occupied society on a
          Saturday morning, on your own, produces different answers.
        </p>
      </Note>

      <h2>5. The land, and the road to it</h2>
      <p>
        No street address has been published for Serenique, which limits this one for now. When it
        is released, stand on the plot on a weekday morning.
      </p>
      <p>
        Look at the approach road rather than the entrance, ask what is planned on the neighbouring
        plots, and ask the nearest existing society about water. In Bavdhan that last question is
        the one that matters.
      </p>

      <h2>6. Whether a bank will lend against it</h2>
      <p>
        Ask two or three lenders whether the project is on their approved list. An approved project
        means a bank has already run legal and technical diligence on the title and the plans, at
        their cost rather than yours.
      </p>
      <p>
        A project no lender will touch is information. So is a project three of them have already
        cleared.
      </p>

      <Figure
        src="/illustrations/pre-launch-tradeoff.svg"
        alt="What a buyer gains and gives up by committing at pre-launch rather than at launch"
        width={1200}
        height={675}
        caption="What you are buying at this stage is the plot, the promoter and the date. Everything else is still to come."
        credit="Illustration"
      />

      <h2>7. What is in writing, and what is not</h2>
      <p>
        At pre-launch, almost everything you are told is a plan rather than a commitment. That is
        not dishonesty, it is the stage the project is at.
      </p>
      <p>
        The discipline is to sort what you have heard into two lists. Anything in a registered
        document or on the portal goes in the first list. Everything else goes in the second, and
        the second list should not be part of your decision.
      </p>

      <h2>What you are actually buying</h2>
      <p>
        With no plans, no areas and no price, the purchase reduces to three things: the plot, the
        promoter and the declared date.
      </p>
      <p>
        All three of those are checkable today. Which is why buying early is a reasonable decision
        and buying early <em>while believing you have information that does not exist</em> is not.
      </p>
      <p>
        The release ledger on the home page exists to keep that line visible. When something moves
        from the awaited column to the released column, it is because a document exists, not because
        somebody said so.
      </p>
    </>
  )
}
