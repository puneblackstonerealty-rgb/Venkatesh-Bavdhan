import Link from 'next/link'

import { Note } from '@/components/article-figure'
import { phase1 } from '@/content/project'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'property-tax-in-bavdhan',
  title: 'Property tax in Bavdhan: Budruk, Khurd and the PMC line',
  excerpt:
    'Bavdhan is two villages on the revenue map, and only one of them is on the 2021 list of villages merged into Pune Municipal Corporation. Why that matters for your tax bill, and the cut PMC is weighing.',
  metaDescription:
    'Property tax in Bavdhan: which villages joined PMC, the 35 to 40 per cent cut PMC is weighing for merged villages, and what to ask before you book at Serenique.',
  category: 'Buying Guide',
  publishedAt: '2026-11-05',
  author: 'Blackstone Realty',
  readingMinutes: 5,
  cover: {
    src: '/illustrations/bavdhan-tax-line.svg',
    alt: 'Diagram of Bavdhan Budruk and Bavdhan Khurd on either side of the question of which authority taxes a new flat',
  },
  sources: [
    {
      label: 'Free Press Journal, final notification on the inclusion of 23 villages into PMC, 30 June 2021',
      href: 'https://www.freepressjournal.in/mumbai/decision-is-welcome-now-provide-financial-assistance-pune-mayor-murlidhar-mohol-after-maharashtra-govt-issues-final-notification-on-inclusion-of-23-villages-into-pmc',
    },
    {
      label: 'Free Press Journal, PMC’s 32 merged villages may get property tax relief, 9 June 2026',
      href: 'https://www.freepressjournal.in/pune/pune-pmcs-32-merged-villages-may-get-property-tax-relief-as-ncp-pushes-for-rate-cut',
    },
    {
      label: 'Punekar News, 32 merged villages may get 35 to 40 per cent property tax relief, 4 September 2026',
      href: 'https://www.punekarnews.in/pune-32-merged-villages-may-get-35-40-property-tax-relief-from-pmc/',
    },
    {
      label: `MahaRERA, ${phase1.registeredName} (${phase1.reraId}), Form C, project address`,
      href: 'https://maharera.maharashtra.gov.in',
    },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        On a map, Bavdhan is one suburb. On the revenue record it is two villages, Bavdhan Budruk
        and Bavdhan Khurd, and they did not come into the city at the same time. For a buyer, that
        split decides who sends the property tax bill and how big it is likely to be.
      </p>

      <h2>Which part of Bavdhan joined the city, and when</h2>
      <p>
        In June 2021 the state issued the final notification bringing 23 villages into Pune
        Municipal Corporation (PMC). Bavdhan Budruk is on that list. Bavdhan Khurd is not, and we
        have not found it among the 11 villages merged in 2017 either.
      </p>
      <p>
        Serenique&rsquo;s registered address is {phase1.plotStreet}, Taluka Mulshi. That is Bavdhan
        Khurd. The developer&rsquo;s specification lists PMC water supply, which suggests the city
        serves the site, but we have not seen a published document that says which body will assess
        property tax on this survey number. Until someone shows you one, treat it as an open
        question.
      </p>

      <Note title="The one document that settles it">
        <p>
          Ask which planning authority issued Serenique&rsquo;s commencement certificate: PMC or
          the Pune Metropolitan Region Development Authority (PMRDA). The body that sanctions the
          building is a strong guide to the body that will tax it. The certificate is part of the
          developer&rsquo;s MahaRERA filing, and the sales team should be able to show it to you.
        </p>
      </Note>

      <h2>Why merged villages complain about their bills</h2>
      <p>
        When a village joins PMC, homes that paid the gram panchayat&rsquo;s rate move onto the
        city&rsquo;s. Residents of the merged villages have said for years that the jump is too
        steep for the services they actually get. The state&rsquo;s stated position is that tax in
        a merged village should not exceed twice what the gram panchayat charged.
      </p>
      <ul>
        <li>
          <strong>June 2026:</strong> two NCP factions publicly demanded a cut of up to 35 per cent
          in the rates used for the 32 merged villages. The state had earlier suspended recovery of
          old arrears.
        </li>
        <li>
          <strong>September 2026:</strong> PMC was reported to be considering a 35 to 40 per cent
          reduction, with the mayor separately asking for a 30 per cent cut in the annual rateable
          value. The proposal was to go to the standing committee.
        </li>
      </ul>
      <p>
        We have not seen a decision reported since. Until one is, any figure you are quoted for
        &ldquo;property tax after the cut&rdquo; is a guess.
      </p>

      <h2>What this means if you book now</h2>
      <p>
        A flat is assessed for property tax once it is complete and occupied. Serenique&rsquo;s
        completion date on MahaRERA is {phase1.completion}, so the rate that matters to you is the
        one in force then, not today&rsquo;s. That is a reason not to over-weight today&rsquo;s
        argument either way, and also a reason to keep the yearly tax out of the &ldquo;we will
        manage&rdquo; column of your budget.
      </p>
      <ul>
        <li>Ask which authority issued the commencement certificate, and get it in writing.</li>
        <li>
          Ask an existing society on the same road, in Bavdhan Khurd, what its members paid last
          year and to whom. One real bill tells you more than any estimate.
        </li>
        <li>
          If a home loan EMI is already a stretch, add the tax and the monthly maintenance before
          you decide, not after possession.
        </li>
      </ul>
      <p>
        Water is the other service that depends on the same line. Read{' '}
        <Link href="/updates/water-in-bavdhan">water in Bavdhan</Link> before your site visit.
      </p>
    </>
  )
}
