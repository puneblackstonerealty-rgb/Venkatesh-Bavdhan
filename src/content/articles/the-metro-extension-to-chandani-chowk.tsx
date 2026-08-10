import Link from 'next/link'

import { Figure, Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'the-metro-extension-to-chandani-chowk',
  title: 'The metro extension to Chandani Chowk, and how to price it',
  excerpt:
    'Corridor 2A was cleared by the Union Cabinet in June 2025 and entered execution in April 2026. It is a real project on a four-year build, which is a specific thing to buy on.',
  category: 'Locality',
  publishedAt: '2026-08-04',
  author: 'Blackstone Realty',
  readingMinutes: 6,
  cover: {
    src: '/illustrations/metro-phase-2.svg',
    alt: 'Schematic of the Pune Metro Aqua Line and its approved Phase 2 extension from Vanaz to Chandani Chowk',
  },
  sources: [
    {
      label: 'Press Information Bureau, Cabinet approval of Pune Metro Phase 2',
      href: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2139488&reg=48&lang=2',
    },
    { label: 'Pune Metro', href: 'https://www.punemetrorail.org/' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Almost every Bavdhan listing mentions the metro. Most of them are vague about it, which is a
        shame, because this is one of the few pieces of Pune infrastructure where the facts are
        specific and checkable.
      </p>

      <h2>What has actually been approved</h2>
      <p>
        The Union Cabinet cleared Pune Metro Phase 2 on 25 June 2025. It covers two corridors as
        extensions of the existing Vanaz to Ramwadi Aqua Line:
      </p>
      <ul>
        <li>
          <strong>Corridor 2A:</strong> Vanaz to Chandani Chowk, which is the one that matters here
        </li>
        <li>
          <strong>Corridor 2B:</strong> Ramwadi to Wagholi and Vitthalwadi, at the other end
        </li>
      </ul>
      <p>
        Together they run 12.75 km elevated across 13 stations, at a sanctioned cost of about ₹3,626
        crore, shared between the central government, the state and external funding agencies.
        Implementation is by Maha-Metro. The stated timeline is four years from sanction, and the
        project entered its execution phase in April 2026.
      </p>

      <Figure
        src="/illustrations/hinjawadi-commute.svg"
        alt="Diagram of the Bavdhan to Hinjawadi commute at three different times of day"
        width={1200}
        height={675}
        caption="What the extension does not solve. Corridor 2A runs east into the city, not west towards Hinjawadi."
        credit="Illustration"
      />

      <h2>What it changes for Bavdhan</h2>
      <p>
        Today, the nearest running station is Vanaz, under 4 km away. That is close enough to be
        useful with a drop or an auto, and far enough that most residents drive instead.
      </p>
      <p>
        A terminus at Chandani Chowk would put a station within short reach of Bavdhan, and it would
        be a terminus rather than a through station. That is worth understanding, because trains
        start at a terminus and go out empty, so a seat in the morning becomes realistic rather than
        theoretical.
      </p>
      <p>
        Where it takes you is east: along Paud Road into Kothrud, through to Shivajinagar and the
        Civil Court interchange, and from there north or south on the Purple Line.
      </p>

      <Note title="What it does not do">
        <p>
          It does not go to Hinjawadi. If your commute is{' '}
          <Link href="/updates/the-hinjawadi-commute-from-bavdhan">Bavdhan to the IT park</Link>,
          the metro is not the answer today and Corridor 2A does not make it one. That journey stays
          a road journey.
        </p>
      </Note>

      <h2>How to price an approved but unbuilt line</h2>
      <p>This is where buyers get hurt, and it is worth being direct about it.</p>
      <p>
        An approved corridor is a genuinely stronger signal than a proposed one. Cabinet clearance,
        a sanctioned cost, a named implementing agency and work in execution are four things a
        rumour does not have.
      </p>
      <p>
        It is still four years of construction away at best, and Pune has a long record of transit
        that took longer than announced. The city formally abandoned an elevated inner ring road
        that had been on the books since 1987.
      </p>
      <p>
        The sensible position is to buy the address for what runs today and treat the extension as
        upside you did not pay a premium for. If a seller is asking you to pay more <em>because</em>{' '}
        of Corridor 2A, they are asking you to fund an option that has not vested yet.
      </p>

      <h2>The other side of construction</h2>
      <p>
        Worth saying, because nobody selling you a flat will. Four years of elevated metro
        construction along the Paud Road corridor means four years of diversions, dust and lane
        closures on the route you would use daily.
      </p>
      <p>
        That is the cost of the benefit, and it lands before the benefit does. If you are moving in
        during the build rather than after it, that is the version of the suburb you will live in
        first.
      </p>

      <h2>The test worth doing</h2>
      <p>
        Work out where you would actually go by metro. For most households the honest answer is a
        handful of trips a month into central Pune, not a daily commute.
      </p>
      <p>
        If that is your answer, the extension is a nice-to-have and the road network is what you are
        really buying. If you genuinely would commute on it daily, then it is worth waiting to see
        the stations go up before paying for them.
      </p>
    </>
  )
}
