import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'occupancy-and-completion-certificates',
  title: 'CC, completion certificate and OC: which one lets you move in',
  excerpt:
    'Three certificates arrive in order and only the last one means the building is fit to live in. Taking possession without it affects your utilities, your resale and your society.',
  category: 'Buying Guide',
  publishedAt: '2026-08-03',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/oc-and-cc.svg',
    alt: 'Comparison of the commencement certificate, completion certificate and occupancy certificate',
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
        Three documents, similar names, very different meanings. Buyers are handed keys against the
        wrong one every year, and the consequences arrive later.
      </p>

      <h2>Commencement Certificate</h2>
      <p>
        Permission to start building, issued by the planning authority once the plans are
        sanctioned. It is the first of the three and the one to ask for before you pay anything.
      </p>
      <p>
        A project being marketed without one is being marketed ahead of its permissions. That is not
        automatically fatal, since permissions do come through, but it is a fact you should know
        before your money is in rather than after.
      </p>

      <h2>Completion Certificate</h2>
      <p>
        Issued when the building is finished and the authority is satisfied it was built to the
        sanctioned plan. It confirms the structure is legal.
      </p>
      <p>
        It does not say the building is fit to occupy. Those are different tests and this is the
        distinction most people miss.
      </p>

      <h2>Occupancy Certificate</h2>
      <p>
        The one that matters at handover. It confirms water, drainage, electricity, fire safety and
        lifts are all in place and signed off, and that the building may legally be occupied.
      </p>
      <p>
        <strong>Do not take possession, and do not make the final payment, without it.</strong>
      </p>

      <Note title="Why the OC is not a formality">
        <p>
          Without it, permanent water and electricity connections can be refused or held on
          temporary arrangements. Your buyer&rsquo;s lender may decline a loan on resale. The
          society&rsquo;s route to taking title to the land is complicated. And occupying a building
          without an OC is a breach that sits with the occupier, not only with the builder.
        </p>
      </Note>

      <h2>What a &ldquo;part OC&rdquo; means</h2>
      <p>
        On a phased scheme, a developer may obtain an occupancy certificate for some towers or some
        floors before the rest are done. That is normal and it is legitimate.
      </p>
      <p>
        The thing to check is whether the part OC covers <em>your</em> flat. A certificate issued
        for towers A and B does nothing for a buyer in tower G. Ask to see the document and find
        your tower and floor named in it.
      </p>

      <Figure
        src="/illustrations/conveyance-timeline.svg"
        alt="Timeline showing conveyance deadlines and the deemed conveyance route in Maharashtra"
        width={1200}
        height={675}
        caption="The OC also starts the clock on conveyance. On a RERA project the promoter is to convey title within three months of it being issued."
        credit="Illustration"
      />

      <h2>The order things should happen in</h2>
      <ol>
        <li>Occupancy certificate issued, covering your tower</li>
        <li>You inspect and snag the flat, in writing, with photographs</li>
        <li>Defects agreed and either fixed or scheduled, in writing</li>
        <li>Final payment made</li>
        <li>
          Possession letter issued and dated, which starts your{' '}
          <Link href="/updates/the-five-year-defect-liability">five-year defect liability</Link>
        </li>
      </ol>
      <p>
        Developers frequently want step four before step two. That ordering is a negotiation, not a
        rule, and it is worth having the conversation before you are standing in the flat with a
        cheque.
      </p>

      <h2>What to ask for, in writing</h2>
      <ul>
        <li>A copy of the occupancy certificate naming your tower</li>
        <li>The completion certificate, and the sanctioned plan it was issued against</li>
        <li>The fire NOC and the lift licence</li>
        <li>The possession letter, dated</li>
        <li>
          The specification annexure, so you can check what was delivered against what was sold
        </li>
      </ul>
      <p>
        None of these are unusual requests. A developer who has them will hand them over in an
        afternoon, and a developer who does not is telling you something useful.
      </p>
      <p>
        This is general information rather than legal advice. Have a lawyer read your own agreement
        and the certificates before you take possession.
      </p>
    </>
  )
}
