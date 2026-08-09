import {
  completedProjects,
  launchProjects,
  ongoingProjects,
  portfolio,
} from '../developer-projects'
import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'the-developer-track-record',
  title: 'The builder behind Serenique, counted rather than described',
  excerpt:
    'Every developer says they are established. This is what Venkatesh Buildcon has actually delivered across Pune, taken from their own published portfolio and counted.',
  category: 'Developer News',
  publishedAt: '2026-08-09',
  author: 'Blackstone Realty',
  readingMinutes: 4,
  sources: [
    { label: 'Venkatesh Buildcon, Pune projects', href: 'https://www.venkateshbuildcon.com/pune-projects/' },
    { label: 'MahaRERA portal', href: 'https://maharera.maharashtra.gov.in/' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        When a project is pre-launch there is very little about the building itself to assess. No
        carpet areas, no plans, no show flat. What you can assess is the builder, because their
        finished work is standing in Pune and can be visited.
      </p>
      <p>
        The figures below come from Venkatesh Buildcon&rsquo;s own website, counted rather than
        quoted. If they update their portfolio, these numbers move with it.
      </p>

      <h2>The portfolio</h2>
      <ul>
        <li>
          <strong>{portfolio.total} projects</strong> in Pune, across roughly 26 years.
        </li>
        <li>
          <strong>{completedProjects.length} completed</strong> and delivered.
        </li>
        <li>
          <strong>{ongoingProjects.length} under construction</strong> today.
        </li>
        <li>
          <strong>{launchProjects.length} current launches</strong>, which the developer marks as
          both ongoing and upcoming.
        </li>
      </ul>
      <p>
        Serenique is not among them. It is a newer registration and does not yet appear on their own
        site, which is ordinary at this stage and worth stating rather than glossing over.
      </p>

      <h2>Where they build</h2>
      <p>
        The delivered work clusters in a few parts of Pune rather than scattering across the metro.
        Ambegaon and Dhayari account for a large share of the completed projects. Keshavnagar in
        Mundhwa carries the four Graffiti buildings. Kothrud, Vadgaon, Katraj and Vadgaon Sheri
        each hold delivered stock.
      </p>
      <p>
        The current work sits further west and north: Baner, Shivajinagar, Erandwane, Prabhat Road,
        Sinhagad Road, Pimple Nilakh and Balewadi. Bavdhan belongs to that second group.
      </p>

      <h2>What the mix tells you</h2>
      <p>
        The completed list is mostly 1, 2 and 3 BHK. The ongoing list is mostly 3, 4 and 5 BHK, and
        a good part of it sits under Venkatesh Luxe, their premium sub-brand. Two of the current
        projects are commercial rather than residential.
      </p>
      <p>
        That is a builder who started in affordable and mid-market housing on Pune&rsquo;s southern
        edge and has moved upward and westward. Whether that is reassuring depends on what you are
        buying: there is more delivered evidence at the smaller configurations than at the larger
        ones.
      </p>

      <h2>What this does not tell you</h2>
      <p>
        A project count is not a quality assessment. It says nothing about handover delays,
        construction standards, the state of the societies after possession, or how the builder
        behaves when something goes wrong.
      </p>
      <p>Three things will tell you more than any number on this page:</p>
      <ol>
        <li>
          <strong>Visit two delivered projects.</strong> Not the show flat. A society that has been
          occupied for five years, where the lifts, the water supply and the common areas have had
          time to reveal themselves.
        </li>
        <li>
          <strong>Talk to residents.</strong> Ask when they got possession against when they were
          promised it, and what the maintenance handover was like.
        </li>
        <li>
          <strong>Read the promoter&rsquo;s record on the MahaRERA portal.</strong> Complaints and
          orders are public and searchable by promoter, not only by project.
        </li>
      </ol>
      <p>
        We list the full portfolio on the developer page, including the locations, so you can pick
        two that are near you and go and look. That is a better use of a Saturday than any brochure.
      </p>
    </>
  )
}
