import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'what-phase-one-covers',
  title: 'One registration, eleven towers: what Phase 1 actually covers',
  excerpt:
    'Serenique is registered under Phase 1. The scheme is described as eleven towers. Those are two different statements, and the difference decides what is enforceable.',
  category: 'Project Update',
  publishedAt: '2026-08-08',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/phase-one.svg',
    alt: 'Diagram showing that a phase registration covers only part of a multi-tower scheme',
  },
  sources: [
    { label: 'MahaRERA portal', href: 'https://maharera.maharashtra.gov.in/' },
    { label: 'The client, relaying the developer, 9 August 2026' },
    { label: 'Housing.com listing slug establishing the registered project name' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        The registered project name for Serenique is{' '}
        <strong>Shree Venkatesh Serenique Phase 1</strong>. The scheme, as confirmed by the client,
        is eleven towers on fourteen acres.
      </p>
      <p>
        Read those two sentences together and a question falls out: which of the eleven towers does
        Phase 1 cover? Nobody has said, and that gap is worth understanding rather than glossing
        over.
      </p>

      <h2>Why developers register in phases</h2>
      <p>
        Because the Act lets them, and because it makes sense. A promoter registers a phase,
        declares a completion date for it, files its sanctioned plans and its carpet areas, and
        starts selling it. The next phase is registered when it launches.
      </p>
      <p>
        The alternative would be registering eleven towers at once with a single completion date for
        all of them, which would be both slower and less accurate.
      </p>
      <p>
        So phasing is normal. What is not normal is a buyer assuming a phase registration covers the
        whole scheme, and that assumption is easy to fall into when the marketing describes fourteen
        acres and the registration describes considerably less.
      </p>

      <Figure
        src="/illustrations/maharera-lookup.svg"
        alt="What to read on a MahaRERA project record and which name to search under"
        width={1200}
        height={675}
        caption="Search the registered name rather than the marketing name. Everything below is on the record for whichever phase you look up."
        credit="Illustration"
      />

      <h2>What each phase carries of its own</h2>
      <p>
        This is the part that matters, because it is what makes a phase registration a legal object
        rather than an administrative label. Each registered phase has:
      </p>
      <ul>
        <li>
          <strong>Its own sanctioned plan.</strong> Not the marketing layout. The version filed with
          the authority, which is the one that governs.
        </li>
        <li>
          <strong>Its own declared completion date.</strong> This is the date a delay claim would be
          measured from, and it can differ by years between phases.
        </li>
        <li>
          <strong>Its own filed carpet areas.</strong> These override any brochure figure for the
          units inside that phase.
        </li>
        <li>
          <strong>Its own quarterly progress filings,</strong> which are public and are the most
          honest construction update available on any project.
        </li>
      </ul>

      <Note title="A promise about the scheme does not bind an unregistered phase">
        <p>
          If you are shown an amenity plan or a completion date for the overall development, ask
          whether it is filed against a registered phase. If it is not, it is a plan rather than a
          commitment, and there is no registered document behind it to enforce.
        </p>
      </Note>

      <h2>The amenity question this raises</h2>
      <p>
        On a fourteen-acre scheme built in phases, the shared amenities are usually delivered with a
        particular phase rather than the first one.
      </p>
      <p>
        Which means a buyer in an early phase can be paying maintenance towards a clubhouse and a
        podium that arrive several years later, alongside living next to the construction that is
        building them.
      </p>
      <p>
        That is a normal arrangement and it is not a scandal. It is worth knowing about in advance
        rather than discovering at handover, and the way to know is to ask for the amenity delivery
        schedule against the phase you are being sold.
      </p>

      <h2>What we have not been told about Serenique</h2>
      <p>Three things, and we are not going to guess at any of them.</p>
      <ol>
        <li>
          <strong>Which towers fall inside Phase 1.</strong> The registration exists. The mapping
          has not been published.
        </li>
        <li>
          <strong>Whether the 2, 3 and 4 BHK mix is registered or planned.</strong> The client has
          confirmed the mix for the scheme. Whether all three configurations sit inside Phase 1 is a
          different question, which is why this site says the project is &ldquo;planned as&rdquo;
          rather than &ldquo;registered for&rdquo; that mix.
        </li>
        <li>
          <strong>The registration number itself.</strong> The one published for this project has a
          prefix that does not match the usual Maharashtra formats. It is reproduced exactly as its
          source prints it rather than silently corrected, and it needs checking against the portal.
        </li>
      </ol>

      <h2>What to ask</h2>
      <p>
        Before any payment: which phase is my tower in, what is that phase&rsquo;s registration
        number, what completion date is declared on it, and what carpet area is filed for my unit
        type.
      </p>
      <p>
        Four questions, all answerable from a public record, and all of them worth more than
        anything on a brochure.
      </p>
    </>
  )
}
