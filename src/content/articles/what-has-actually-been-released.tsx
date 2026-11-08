import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'
import { phase1, priceList, releaseStatus } from '@/content/project'

import type { ArticleMeta } from './types'

/* Rewritten 8 November 2026. The August version listed what nobody had
   published yet; since the launch almost all of it is out. The ledger below
   reads from `releaseStatus` in content/project.ts, the same list the site
   uses everywhere else, so it cannot drift from the rest of the site. It
   also absorbs "what-pre-launch-actually-means", retired the same day. */

const released = releaseStatus.items.filter((item) => item.released)
const awaited = releaseStatus.items.filter((item) => !item.released)

export const meta: ArticleMeta = {
  slug: 'what-has-actually-been-released',
  title: 'What has been released at Venkatesh Serenique so far',
  excerpt: `Serenique launched in August 2026. The MahaRERA registration, floor plans, carpet areas, renders and a price list dated ${priceList.issuedShort} are all out. Here is the full ledger.`,
  metaDescription: `Serenique launched in August 2026: MahaRERA registration, floor plans, carpet areas, renders and a price list are out. The full ledger.`,
  category: 'Project Update',
  publishedAt: '2026-08-07',
  updatedAt: '2026-11-08',
  author: 'Blackstone Realty',
  readingMinutes: 4,
  cover: {
    src: '/illustrations/release-ledger.svg',
    alt: 'Ledger of what the developer has published about Venkatesh Serenique',
  },
  sources: [
    {
      label: `MahaRERA, ${phase1.registeredName} (${phase1.reraId}), corrected ${phase1.correctedOn}`,
      href: 'https://maharera.maharashtra.gov.in',
    },
    {
      label: 'Venkatesh Buildcon, Serenique project page, "Now launched", read 6 November 2026',
      href: 'https://www.venkateshbuildcon.com',
    },
    { label: 'Venkatesh Buildcon, Serenique brochure and Wing A2 and A3 floor plans, October 2026' },
    { label: `Venkatesh Buildcon, price list for Wings A2 and A3, ${priceList.issued}` },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Venkatesh Serenique went from a name to a launched project between August and October
        2026. In August, almost nothing a buyer asks for had been published. Today most of it has,
        and most of it can be checked against MahaRERA.
      </p>

      <h2>What is out</h2>
      <ul>
        {released.map((item) => (
          <li key={item.id}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>

      <Figure
        src="/illustrations/release-ledger.svg"
        alt="Ledger of what the developer has published about Serenique"
        width={1200}
        height={675}
        caption="The developer's own material, not a listing site's guesses, is now the source for almost every figure."
        credit="Illustration"
      />

      {awaited.length > 0 && (
        <>
          <h2>What is still not published</h2>
          <ul>
            {awaited.map((item) => (
              <li key={item.id}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </>
      )}
      <p>
        Two more things are worth asking for in person. The floor-rise schedule, because the price
        list says floor rise applies from the fifth residential floor but does not print the rate.
        And anything about Phase 2: the other {phase1.futureAcres} acres are marked future
        development, and nothing about them is registered.
      </p>

      <h2>What changed since August</h2>
      <ul>
        <li>
          <strong>The registration checks out.</strong> {phase1.reraId} is a genuine MahaRERA
          number. Its PM prefix is one of the current formats, not the typo this site once suspected.
          It is registered as {phase1.registeredName}, completion {phase1.completion}.
        </li>
        <li>
          <strong>The scale is Phase 1&rsquo;s.</strong> One building, three residential wings,{' '}
          {phase1.homes} homes and {phase1.shops} shops on {phase1.landAcres} acres. The earlier
          whole-scheme figures we carried are replaced. <Link href="/updates/phase-one-and-the-whole-site">
            Phase 1 and the whole site
          </Link>{' '}
          explains the difference.
        </li>
        <li>
          <strong>There is a price list.</strong> The developer&rsquo;s sheet dated{' '}
          {priceList.issued} is published line by line on{' '}
          <Link href="/configurations#price-list">the configurations page</Link>. It was valid for{' '}
          {priceList.validDays} days, so ask for today&rsquo;s.
        </li>
      </ul>

      <Note title="&ldquo;Pre-launch&rdquo; never meant much">
        <p>
          The word has no legal standing. Under Section 3 of the RERA Act a project that needs
          registration cannot be advertised or booked until it is registered, and once it is, its
          sanctioned plans and carpet areas are on the MahaRERA portal for anyone to read. If you
          pay anything before then, your money is not protected the way the Act intends.
        </p>
      </Note>

      <h2>How to use this</h2>
      <p>
        Treat this page as a checklist, not a summary. Each item on it has a document behind it,
        and the sales team should be able to show you every one. Anything they cannot show you is
        still a promise. <Link href="/updates/how-to-check-a-maharera-registration">
          Checking the registration yourself
        </Link>{' '}
        takes ten minutes.
      </p>
    </>
  )
}
