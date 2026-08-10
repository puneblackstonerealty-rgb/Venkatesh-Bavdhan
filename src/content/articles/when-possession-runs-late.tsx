import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'when-possession-runs-late',
  title: 'When possession runs late, interest is arithmetic',
  excerpt:
    'A missed completion date entitles you to interest at SBI MCLR plus two per cent on everything you have paid. You do not have to win an argument to be owed it.',
  category: 'Buying Guide',
  publishedAt: '2026-08-07',
  author: 'Blackstone Realty',
  readingMinutes: 7,
  cover: {
    src: '/illustrations/delay-interest.svg',
    alt: 'How delay interest is calculated under MahaRERA and what filing a complaint involves',
  },
  sources: [
    {
      label: 'Real Estate (Regulation and Development) Act, 2016, Sections 18 and 31',
      href: 'https://www.indiacode.nic.in/handle/123456789/2158',
    },
    { label: 'MahaRERA portal', href: 'https://maharera.maharashtra.gov.in/' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Possession dates slip. On a scheme of eleven towers built in phases over several years, some
        slippage is close to normal, and most of it gets absorbed without anyone falling out.
      </p>
      <p>
        What buyers often do not know is that the remedy is not a negotiation. It is a formula, and
        it starts running on its own.
      </p>

      <h2>The rate</h2>
      <p>
        Where a promoter fails to hand over possession by the date in the agreement, the allottee is
        entitled to interest on every rupee paid, for every month of delay, until possession.
      </p>
      <p>
        The rate is prescribed rather than argued:{' '}
        <strong>
          the State Bank of India&rsquo;s highest marginal cost of lending rate plus two per cent
        </strong>
        . As at April 2026 that worked out to about <strong>10.85 per cent a year</strong>.
      </p>
      <p>
        On ₹50 lakh already paid, a twelve-month delay is roughly ₹5.4 lakh in interest. That is the
        scale of it, and it is why the provision has teeth.
      </p>

      <Note title="The date that counts">
        <p>
          Not the one in the brochure, and not the one you were told in the sales lounge. The date
          that matters is the declared completion date on the MahaRERA record for{' '}
          <Link href="/updates/what-phase-one-covers">the phase your</Link>
          flat sits in. Check it before you book, and keep a copy.
        </p>
      </Note>

      <h2>Your two options when it slips</h2>
      <p>The Act gives the allottee a choice, and it is genuinely a choice.</p>
      <ol>
        <li>
          <strong>Stay and take the interest.</strong> Continue with the purchase and receive
          interest for the delay period, typically adjusted against your remaining instalments. Most
          buyers do this, because they want the flat.
        </li>
        <li>
          <strong>Withdraw and take a refund.</strong> Exit the project and receive the full amount
          paid back, with interest. This is the stronger remedy and the one worth having in reserve.
        </li>
      </ol>
      <p>
        You are not required to decide immediately, and choosing to wait does not waive the interest
        for the period you waited.
      </p>

      <h2>How a complaint actually works</h2>
      <p>
        The process is administrative rather than a court case, and it is designed to be usable.
      </p>
      <ul>
        <li>
          <strong>Filed online</strong> with the Authority, against the registered project
        </li>
        <li>
          <strong>₹5,000</strong> complaint fee
        </li>
        <li>
          <strong>60 to 90 days</strong> to a first hearing, on recent turnaround
        </li>
        <li>
          <strong>60 days to pay</strong> once an order is made
        </li>
        <li>
          <strong>Enforceable as arrears of land revenue</strong> through the District Collector if
          the promoter does not comply
        </li>
      </ul>
      <p>
        That last point is the one that matters. An order that cannot be enforced is a letter. This
        one is recoverable the way tax is recoverable.
      </p>

      <Figure
        src="/illustrations/maharera-lookup.svg"
        alt="What to read on a MahaRERA project record and which name to search under"
        width={1200}
        height={675}
        caption="Everything a delay claim rests on is on the public record: the promoter, the phase, and the declared completion date."
        credit="Illustration"
      />

      <h2>What weakens a claim</h2>
      <p>Three things, all avoidable, and all decided long before there is a dispute.</p>
      <ol>
        <li>
          <strong>No registered agreement for sale.</strong> An allotment letter is not the same
          thing. The agreement is what carries the date, and no more than ten per cent of the cost
          should have been taken before it was executed and registered.
        </li>
        <li>
          <strong>Accepting a revised date in writing.</strong> If you sign an addendum agreeing to
          a new completion date, the clock resets to that one. Read anything you are asked to sign
          during a delay, and take advice before signing it.
        </li>
        <li>
          <strong>Your own late payments.</strong> A promoter will argue the delay was partly yours.
          Keep your instalments current, or your correspondence explaining why they are not.
        </li>
      </ol>

      <h2>What this means for a pre-launch buyer</h2>
      <p>
        Serenique&rsquo;s possession date is published as December 2031 by its listing partner, and
        that figure has not been confirmed against the portal. Some third-party sites quote 2028,
        which nothing supports.
      </p>
      <p>
        None of those are the date that would govern a delay claim. That date is the declared
        completion date on the registration covering your phase, and it exists on the public record
        the moment your phase is registered.
      </p>
      <p>
        Ask for it, read it, and keep a copy with your agreement. It is the single most valuable
        piece of paper in the whole file, and it is free.
      </p>
      <p>
        This is general information about the statutory position rather than legal advice. Rates and
        turnaround times change; confirm the current position before relying on it.
      </p>
    </>
  )
}
