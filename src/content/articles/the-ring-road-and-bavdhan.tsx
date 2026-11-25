import Link from 'next/link'

import { Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'the-ring-road-and-bavdhan',
  title: 'Pune Ring Road: what the western section means for Bavdhan',
  excerpt:
    'The western half of Pune’s 170 km Ring Road was 30 per cent built in September, with traffic promised for December 2027. It will not pass through Bavdhan. Here is why it still matters.',
  metaDescription:
    'Pune Ring Road western section: 69 km, 30% built by September 2026, open to traffic by December 2027 (target). What it changes for Bavdhan.',
  category: 'Locality',
  publishedAt: '2026-11-02',
  author: 'Blackstone Realty',
  readingMinutes: 4,
  cover: {
    src: '/illustrations/ring-road-west.svg',
    alt: 'Schematic of the Pune Ring Road western section running west of the highway past Chandani Chowk and Bavdhan',
  },
  sources: [
    {
      label: 'The Bridge Chronicle, Pune Ring Road western stretch 30 per cent complete, 2 September 2026',
      href: 'https://www.thebridgechronicle.com/pune/pune-ring-road-western-stretch-30-percent-complete-traffic-relief-2027-agn97',
    },
    {
      label: 'Free Press Journal, work gains pace on the Ring Road western corridor, 6 March 2026',
      href: 'https://www.freepressjournal.in/pune/major-infrastructure-taking-shape-as-work-gains-pace-on-pune-outer-ring-roads-western-corridor',
    },
    {
      label: 'Punekar News, Chandani Chowk flyover inaugurated, 12 August 2023',
      href: 'https://www.punekarnews.in/pune-chandni-chowk-flyover-inaugurated-gadkari-asks-ajit-pawar-and-chandrakant-patil-to-recommend-name-for-the-flyover/',
    },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Pune&rsquo;s Ring Road is a 170 km loop the Maharashtra State Road Development Corporation
        (MSRDC) is building around the city. It comes in two halves. The western half is the one
        that touches west Pune, and it is the one with a date on it.
      </p>

      <h2>Where the western section stands</h2>
      <ul>
        <li>
          <strong>Length:</strong> 69 km, built as five separate packages.
        </li>
        <li>
          <strong>Progress:</strong> 30 per cent of the work was done by early September 2026,
          with a target of 65 per cent by December 2026.
        </li>
        <li>
          <strong>Opening:</strong> the target is to open it to traffic by December 2027. The
          eastern section is due a year later, in December 2028.
        </li>
        <li>
          <strong>Land:</strong> in March 2026 MSRDC said it held more than 99 per cent of the land
          it needs, 1,054 hectares across 38 villages.
        </li>
      </ul>
      <p>
        The two ends named so far are an interchange at Urse on the Mumbai to Pune Expressway and
        one at Shivare on the Pune to Bengaluru highway, south of the city.
      </p>

      <h2>Why a road that misses Bavdhan still matters to it</h2>
      <p>
        Bavdhan sits on the highway at Chandani Chowk. Today, a truck going from the Expressway
        towards Satara or Bengaluru has one sensible route: down the highway past Chandani Chowk,
        Warje and Katraj. That is the same stretch a Bavdhan resident uses to leave the suburb.
      </p>
      <p>
        The western Ring Road runs from Urse to Shivare, further out to the west. On a map it is a
        parallel route for exactly that through traffic. That is the whole case for it in Bavdhan:
        not a new road you will drive on every day, but fewer heavy vehicles on the one you do.
      </p>
      <p>
        How many trucks will actually move off the highway has not been published, and nobody can
        promise it. Toll rates on the new road, and whether through traffic pays them, will decide
        a lot of it.
      </p>

      <Note title="What it is not">
        <p>
          No Ring Road interchange near Bavdhan or Chandani Chowk has been announced. If someone
          tells you the Ring Road &ldquo;connects Bavdhan&rdquo;, ask them which interchange they
          mean and where it was announced.
        </p>
      </Note>

      <h2>How to read the date</h2>
      <p>
        December 2027 is a target, and Pune&rsquo;s big road projects have a habit of slipping.
        The Chandani Chowk interchange itself was due in 2021 and opened in August 2023. Treat the
        Ring Road as something that may help in the second half of your loan, not the first year
        after you move in.
      </p>
      <p>
        Serenique&rsquo;s own completion date on MahaRERA is September 2031. If the Ring Road keeps
        to anything like its schedule, it will be open years before Phase 1 is handed over.
      </p>
      <p>
        For the roads that matter sooner, read{' '}
        <Link href="/updates/the-chandani-chowk-junction">the Chandani Chowk junction</Link> and{' '}
        <Link href="/updates/what-bavdhan-actually-connects-to">
          what Bavdhan actually connects to
        </Link>
        .
      </p>
    </>
  )
}
