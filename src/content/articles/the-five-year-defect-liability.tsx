import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'the-five-year-defect-liability',
  title: 'The five-year warranty you already own on a new flat',
  excerpt:
    'Section 14(3) makes the builder fix structural defects for five years after possession, within thirty days of being told. A shorter warranty clause in your agreement does not override it.',
  category: 'Buying Guide',
  publishedAt: '2026-08-02',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/defect-liability.svg',
    alt: 'Timeline of the five-year structural defect liability period under RERA section 14(3)',
  },
  sources: [
    {
      label: 'Real Estate (Regulation and Development) Act, 2016, Section 14(3)',
      href: 'https://www.indiacode.nic.in/handle/123456789/2158',
    },
    { label: 'MahaRERA portal', href: 'https://maharera.maharashtra.gov.in/' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Most buyers find out about this clause in year four, when something cracks and they assume
        they are on their own. They usually are not.
      </p>
      <p>
        Section 14(3) of the Real Estate (Regulation and Development) Act gives you a five-year
        warranty on a home in a registered project. It is statutory, it runs from the date of
        possession, and it costs you nothing.
      </p>

      <h2>What it says</h2>
      <p>
        If a structural defect, or a defect in workmanship, quality or the provision of services,
        comes to light within five years of possession, the promoter has to put it right at no
        charge to you. The Act gives them thirty days from being informed.
      </p>
      <p>
        If they do not, you are entitled to compensation, and the route to it is a complaint to the
        regulator rather than a civil suit.
      </p>

      <Note title="A shorter warranty in your agreement is not enforceable">
        <p>
          Agreements sometimes carry a one-year or two-year defect clause. That clause does not
          shorten the statutory period. A private contract cannot contract you out of a statutory
          protection, and the five years stands regardless of what the annexure says.
        </p>
      </Note>

      <h2>What counts as a defect</h2>
      <p>
        The Act names structural defects and defects in workmanship, quality and provision of
        services. In practice that has covered things like:
      </p>
      <ul>
        <li>Cracks in structural members, and settlement affecting the frame</li>
        <li>Water ingress through external walls, terraces and around windows</li>
        <li>Leaking or failed plumbing and drainage within the building</li>
        <li>Flooring, plaster and waterproofing that fails prematurely</li>
        <li>Lifts, pumps and common services not performing as specified</li>
      </ul>
      <p>
        It does not cover ordinary wear, damage you caused, or the consequences of your own
        alterations. A builder will reach for those three explanations first, which is why the
        paperwork below matters.
      </p>

      <h2>How to actually claim it</h2>
      <ol>
        <li>
          <strong>Report it in writing, dated.</strong> Email works. A phone call starts no clock
          and proves nothing eighteen months later.
        </li>
        <li>
          <strong>Photograph it, with something for scale,</strong> and keep the originals with
          their timestamps intact.
        </li>
        <li>
          <strong>Reference the section.</strong> Citing Section 14(3) in the first email changes
          the tone of the reply more often than you would expect.
        </li>
        <li>
          <strong>Give them the thirty days,</strong> then follow up in writing again if nothing has
          happened.
        </li>
        <li>
          <strong>Escalate to the regulator</strong> if it is still unresolved. Complaints are filed
          online and heard by the Authority.
        </li>
      </ol>
      <p>
        Where a defect affects several flats, file together. A society or a group of allottees
        carries considerably more weight than one owner, and the evidence is stronger.
      </p>

      <Figure
        src="/illustrations/oc-and-cc.svg"
        alt="Comparison of the commencement certificate, completion certificate and occupancy certificate"
        width={1200}
        height={675}
        caption="The five years run from possession. Which is why the date you take possession, and the certificate you take it against, is worth getting right."
        credit="Illustration"
      />

      <h2>The detail that decides the whole thing</h2>
      <p>
        The clock starts at <strong>possession</strong>, per unit, and possession should be taken
        against{' '}
        <Link href="/updates/occupancy-and-completion-certificates">an occupancy certificate</Link>.
        Not at completion, not at the society handover, and not when the last tower in the scheme
        finishes.
      </p>
      <p>
        On a phased scheme of eleven towers, that means your warranty and your neighbour&rsquo;s in
        a later phase expire on different dates. Keep the possession letter. It is the document that
        proves when your five years began.
      </p>

      <h2>Two things worth doing on the day you take possession</h2>
      <ul>
        <li>
          <strong>Snag the flat properly before you sign anything.</strong> Walk it with a
          checklist, list every defect in writing, and have the builder acknowledge the list.
          Signing a clean handover and raising defects afterwards is a harder position, though not a
          fatal one.
        </li>
        <li>
          <strong>Keep the specification annexure.</strong> Half of all defect arguments are really
          arguments about what was promised, and that document settles them.
        </li>
      </ul>
      <p>
        None of this is exotic. It is a warranty, like the one on a car, and the only unusual thing
        about it is how few buyers know it is there.
      </p>
      <p>
        This is general information about the statute rather than legal advice. Take your own
        agreement to a lawyer if something has actually gone wrong.
      </p>
    </>
  )
}
