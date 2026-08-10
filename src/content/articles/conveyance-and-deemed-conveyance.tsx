import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'conveyance-and-deemed-conveyance',
  title: 'Who owns the land under your flat, and when',
  excerpt:
    'Buying a flat does not give your society the land it stands on. Conveyance does, and when the builder will not cooperate, Maharashtra has a statutory route around them.',
  category: 'Buying Guide',
  publishedAt: '2026-08-05',
  author: 'Blackstone Realty',
  readingMinutes: 7,
  cover: {
    src: '/illustrations/conveyance-timeline.svg',
    alt: 'Timeline showing conveyance deadlines and the deemed conveyance route in Maharashtra',
  },
  sources: [
    { label: 'Maharashtra Ownership Flats Act, 1963, Section 11' },
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
        You buy a flat. You register the agreement. You move in. The society gets formed. And the
        land under the building still belongs to the builder.
      </p>
      <p>
        That surprises most buyers, and it stays true until a separate step happens. That step is
        conveyance, and a large number of Maharashtra societies never complete it.
      </p>

      <h2>What conveyance is</h2>
      <p>
        Conveyance is the transfer of title in the land and the building from the promoter to the
        registered society. Until it happens, the society owns the structure it occupies in a
        practical sense and owns nothing in a legal one.
      </p>
      <p>Three things depend on it.</p>
      <ul>
        <li>
          <strong>Redevelopment.</strong> A society that does not hold title cannot redevelop on its
          own terms, decades from now when that becomes the question.
        </li>
        <li>
          <strong>Unused development rights.</strong> If additional floor space potential remains on
          the plot, it belongs to whoever holds the land. That is the builder until conveyance.
        </li>
        <li>
          <strong>Clean title on resale.</strong> A careful buyer&rsquo;s lawyer will ask, and an
          unconveyed society is a question mark on the file.
        </li>
      </ul>

      <h2>The deadlines</h2>
      <p>
        Under the Maharashtra Ownership Flats Act, the promoter is required to convey within four
        months of the society being formed, where no other period is agreed.
      </p>
      <p>
        On a project registered under RERA, where no conveyance period has been agreed, the promoter
        is to execute conveyance within three months of the occupancy certificate being issued.
      </p>
      <p>
        Both of those are obligations rather than suggestions. Both are widely missed, which is why
        the second route exists.
      </p>

      <Note title="Deemed conveyance, in one sentence">
        <p>
          If the builder will not execute the conveyance, the society can apply to a government
          officer to have it ordered without the builder&rsquo;s cooperation.
        </p>
      </Note>

      <h2>How deemed conveyance works</h2>
      <p>
        It is a statutory remedy under Section 11 of the Maharashtra Ownership Flats Act. The
        society applies to the Competent Authority, which is the District Deputy Registrar of
        Cooperative Societies, who hears both sides and issues a conveyance order. That order is
        then registered at the sub-registrar&rsquo;s office like any other deed.
      </p>
      <p>The mechanics are unglamorous and manageable.</p>
      <ol>
        <li>The society passes a resolution and appoints someone to run it</li>
        <li>Every member&rsquo;s registered agreement for sale is collected in true copy</li>
        <li>
          The society&rsquo;s registration certificate, the property card, the approved plans and a
          title report are assembled
        </li>
        <li>Form VII is filed before the Competent Authority with a ₹2,000 court fee stamp</li>
        <li>Both sides are heard, and the order follows</li>
      </ol>

      <Figure
        src="/illustrations/oc-and-cc.svg"
        alt="Comparison of the commencement certificate, completion certificate and occupancy certificate"
        width={1200}
        height={675}
        caption="The occupancy certificate starts the three-month conveyance clock on a RERA project, which is one more reason not to take possession without it."
        credit="Illustration"
      />

      <h2>The relaxation worth knowing about</h2>
      <p>
        Historically, a society without an occupancy certificate was stuck: no OC, no conveyance.
        That trapped exactly the societies with the least cooperative builders.
      </p>
      <p>
        Maharashtra has since cut the document list from twelve to eight and provided that deemed
        conveyance may be granted even where the society does not hold an occupancy or completion
        certificate.
      </p>
      <p>
        That is a significant change and it is not widely known. If your society was told years ago
        that it could not proceed without an OC, that advice may no longer hold.
      </p>

      <h2>What this means when you are buying off-plan</h2>
      <p>
        On a project like Serenique, conveyance is years away and there is nothing to check yet.
        What you can do is put it in the file now.
      </p>
      <ul>
        <li>
          <strong>Ask what conveyance period the agreement specifies.</strong> If it names one, that
          period governs instead of the statutory default.
        </li>
        <li>
          <strong>Keep your registered agreement safe.</strong> Every member needs a true copy of
          theirs for a deemed conveyance application, and chasing them down twenty years later is
          the single biggest delay in the process.
        </li>
        <li>
          <strong>On a phased scheme, ask how the land will be divided.</strong> Eleven towers on
          fourteen acres may convey as one society or as several, and that decision is made long
          before anyone thinks about it.
        </li>
      </ul>
      <p>
        This is general information about the statutory route rather than legal advice. A society
        actually pursuing conveyance should take its own papers to a lawyer who does this work.
      </p>
    </>
  )
}
