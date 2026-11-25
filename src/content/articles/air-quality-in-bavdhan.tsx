import Link from 'next/link'

import { Note } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'air-quality-in-bavdhan',
  title: 'Air in Bavdhan: what October and Diwali 2026 showed',
  excerpt:
    'Pune’s air index stayed above 100 on most October days and hit 432 the night after Diwali. No official station sits in Bavdhan, so here is what the nearest ones read and how to check for yourself.',
  metaDescription:
    'Air quality near Bavdhan, Pune: October 2026 readings, the 432 spike after Diwali, the nearest official stations, and how to check the air before you buy.',
  category: 'Locality',
  publishedAt: '2026-11-19',
  author: 'Blackstone Realty',
  readingMinutes: 4,
  cover: {
    src: '/illustrations/west-pune-air.svg',
    alt: 'Air quality index bands with Pune readings from October and the night after Diwali 2026 marked',
  },
  sources: [
    {
      label: 'Free Press Journal, Pune AQI above 100 for most days in October, 26 October 2026',
      href: 'https://www.freepressjournal.in/pune/pune-air-pollution-keeps-aqi-above-100-for-most-days-in-october-as-winter-approaches',
    },
    {
      label: 'Free Press Journal, Pune’s air quality turns severe after Diwali, AQI touches 432, 9 November 2026',
      href: 'https://www.freepressjournal.in/pune/punes-air-quality-turns-severe-after-diwali-aqi-touches-432',
    },
    { label: 'Central Pollution Control Board, National Air Quality Index bands' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Brochures in west Pune like to talk about fresh air and green hills. Air is measured, not
        described, so here is what the instruments actually read this autumn, and why nobody can
        honestly quote you a figure for Bavdhan itself.
      </p>

      <h2>First, how to read the number</h2>
      <p>
        India&rsquo;s Air Quality Index runs from 0 to 500. The Central Pollution Control Board
        (CPCB) sorts it into six bands:
      </p>
      <ul>
        <li>0 to 50, good; 51 to 100, satisfactory</li>
        <li>101 to 200, moderate</li>
        <li>201 to 300, poor; 301 to 400, very poor</li>
        <li>401 to 500, severe</li>
      </ul>

      <h2>What Pune read in October</h2>
      <p>
        The city&rsquo;s index stayed above 100, in the moderate band, on most days of October 2026.
        It dipped below 100 only on the 4th, 5th and 6th. On 22 October the city figure was 141,
        and on the 25th it was 130. That is the normal early-winter pattern: as the monsoon ends and
        the air stills, dust and smoke hang around longer.
      </p>

      <h2>The night after Diwali</h2>
      <p>
        In the early hours of 9 November the citywide index touched 432, in the severe band, after
        the fireworks. The station readings from 10 pm the night before tell you more than the
        headline:
      </p>
      <ul>
        <li>Thergaon 227, Gavalinagar 219 and Shivajinagar 204, all in the poor band</li>
        <li>MHADA Colony 173, Katraj Dairy 151 and Park Street 147, moderate</li>
        <li>SPPU, the university campus, 113, at the clean end of moderate</li>
      </ul>
      <p>
        Of the stations named in that reporting, SPPU is the closest to Bavdhan, across Pashan. On
        the worst night of the year it read about half what Shivajinagar did. That is one night at
        one station, and it proves nothing on its own. Watch the nearest stations for a few weeks
        before you draw a conclusion about any address.
      </p>

      <Note title="Why there is no &lsquo;Bavdhan AQI&rsquo;">
        <p>
          We found no official monitoring station inside Bavdhan in the reporting above. A website
          or app showing a precise Bavdhan figure is estimating it from stations elsewhere. Use the
          nearest real stations, SPPU and, where it is reporting, Pashan, and say so when you compare.
        </p>
      </Note>

      <h2>The local factor you can actually see: dust</h2>
      <p>
        For a home near Chandani Chowk, the air problem you will notice day to day is dust, not
        smog. Over the next few years the area has the metro works towards Kothrud Depot, the
        planned widening of the Bhugaon road, and, at Serenique itself, a second phase marked for
        future development on the six acres next door.
      </p>
      <ul>
        <li>Check the air on a still winter evening, not a breezy afternoon.</li>
        <li>
          Use the CPCB&rsquo;s Sameer app, or the IITM&rsquo;s air quality service, and look at the
          nearest stations rather than the city average.
        </li>
        <li>
          Ask the sales team when Phase 2 construction is expected to start, and which side of
          Phase 1 faces it.
        </li>
      </ul>
      <p>
        For the road works, read{' '}
        <Link href="/updates/the-bhugaon-road-plan">the Chandani Chowk to Bhugaon road plan</Link>.
        For what Phase 2 is, read{' '}
        <Link href="/updates/phase-one-and-the-whole-site">Phase 1 and the whole site</Link>.
      </p>
    </>
  )
}
