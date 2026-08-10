import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'the-numbers-that-were-never-true',
  title: 'The Serenique numbers that were never true',
  excerpt:
    'One listing site carried the only hard figures for this project. It said 2.5 acres and 3 towers. The real answer is 14 acres and 11 towers, and the gap is worth a case study.',
  category: 'Project Update',
  publishedAt: '2026-08-07',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/the-correction.svg',
    alt: 'Comparison of the listing site figures against the figures the client confirmed',
  },
  sources: [
    { label: 'The client, relaying the developer, 9 August 2026' },
    { label: 'Listing-site figures as published and fetched 7 August 2026' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        For two days this site published that Venkatesh Serenique sat on 2.5 acres with 3 towers. It
        was the only figure anyone had, it was attributed, and it was wrong by a multiple.
      </p>
      <p>
        The correct figures came from the client, relaying the developer: <strong>14 acres</strong>{' '}
        and <strong>11 towers</strong>. That is 5.6 times the land and nearly four times the towers.
      </p>
      <p>
        We are leaving the episode on the record rather than quietly restating the page, because it
        is the most useful thing this site can tell a buyer about how listing data works.
      </p>

      <Figure
        src="/illustrations/release-ledger.svg"
        alt="Ledger showing five released items about Serenique and six that are still awaited"
        width={1200}
        height={675}
        caption="What the developer has actually issued. Everything in the right-hand column is what other sites are filling in for themselves."
        credit="Illustration"
      />

      <h2>How a number that wrong gets published</h2>
      <p>
        Not by anyone lying. Listing platforms and broker microsites are built to have a filled-in
        page for every project, because an empty field ranks badly and converts worse.
      </p>
      <p>So the fields get filled, from whatever is available:</p>
      <ul>
        <li>An early plan that was later superseded</li>
        <li>A single registered phase, presented as though it were the whole scheme</li>
        <li>A neighbouring project by the same builder</li>
        <li>Another page on the same site, copied and lightly edited</li>
      </ul>
      <p>
        The second of those is the most likely explanation here. A first-phase registration covering
        a few towers on part of the land, read as the entire development, produces exactly this kind
        of error.
      </p>

      <h2>What we did with the rest of that source</h2>
      <p>
        This is the part that matters more than the correction itself. When a source is wrong about
        acreage, tower count and configuration mix, the question is not just what to fix. It is what
        else from that source is still on the page.
      </p>
      <p>Three things were, and each was handled differently.</p>
      <ol>
        <li>
          <strong>The unit count was deleted, not corrected.</strong> That source said 380 homes.
          380 across 11 towers of 27 floors is not plausible, and no replacement total has been
          issued by anyone. A wrong number sitting beside correct ones reads as authoritative in a
          way that an absent one does not, so the row moved to &ldquo;Awaited&rdquo;.
        </li>
        <li>
          <strong>The MahaRERA number was kept, and flagged.</strong> It is the only one anyone has
          published, and it is attributed. It also has a prefix that does not match the usual
          Maharashtra formats, so it needs checking against the portal before anyone relies on it.
        </li>
        <li>
          <strong>The December 2031 possession date was kept, and flagged.</strong> Same reasoning.
          It is the only date published, and the binding one is whatever the MahaRERA record for the
          phase says.
        </li>
      </ol>

      <Note title="The uncomfortable footnote">
        <p>
          Two sites we had rejected as unreliable both claimed a 4 BHK. We excluded it, because the
          two sources we trusted said 2 and 3 BHK only. The client has since confirmed the 4 BHK is
          real. The reasoning was sound on the evidence available and it still produced a wrong
          page, which is the argument for asking the developer early rather than adjudicating
          between listing sites.
        </p>
      </Note>

      <h2>What a buyer should take from this</h2>
      <p>
        Not that listing sites are worthless. They are often the only place a pre-launch project
        appears at all, and this one was right that Serenique exists, that it is in Bavdhan, and
        that it is by this developer.
      </p>
      <p>
        What they are not is a substitute for the registered record. Three checks cost you ten
        minutes:
      </p>
      <ul>
        <li>
          <strong>Search the registered name on MahaRERA,</strong> not the marketing name, and read
          the promoter, the completion date and the sanctioned layout.
        </li>
        <li>
          <strong>Ask which phase you are being sold,</strong> and whether the figures you were
          given describe that phase or the whole scheme. This is where the 2.5-acre error most
          likely came from.
        </li>
        <li>
          <strong>Treat any figure without a named source as a placeholder,</strong> including on
          this site. Every number here carries an attribution for exactly that reason.
        </li>
      </ul>
      <p>
        <Link href="/updates/what-has-actually-been-released">The release ledger</Link> exists
        because of this episode. It shows which numbers are real and which are still being invented
        elsewhere, and it is the most honest thing a pre-launch page can do.
      </p>
    </>
  )
}
