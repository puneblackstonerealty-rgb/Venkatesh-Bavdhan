import type { ArticleMeta } from './types'

/* ───────────────────────────────────────────────────────────────────────────
   ARTICLE TEMPLATE. Copy this file to start a new one.

   The body below is plain JSX. Use <h2>, <h3>, <p>, <ul><li>, <ol><li>,
   <blockquote>, <strong>, <a>, <hr> and <table>. The <Prose> wrapper on the
   article page styles all of them, so you never need an import or a className.

   Two house rules:
   1. Any figure you state needs a source. Put it in `meta.sources` and it
      renders at the foot of the article.
   2. Write it the way you would say it. No em dashes, no "not just X but Y",
      no rhetorical questions. Short sentences beat balanced ones.
   ─────────────────────────────────────────────────────────────────────────── */

export const meta: ArticleMeta = {
  slug: 'what-has-actually-been-released',
  title: 'What has been released at Venkatesh Serenique so far',
  excerpt:
    'Several sites publish a full spec sheet for this project. Most of it did not come from the developer. Updated 9 August with the developer’s own figures, which corrected two of ours.',
  category: 'Project Update',
  publishedAt: '2026-08-07',
  /* The developer's figures arrived on the 9th and contradicted the listing
     data this article was built on. Rewriting it quietly was the wrong call
     for a piece whose entire argument is "check where the number came from",
     so the correction is stated in the body and this date renders on the
     page beside the original one. */
  updatedAt: '2026-08-09',
  author: 'Blackstone Realty',
  readingMinutes: 4,
  sources: [
    { label: 'MahaRERA portal', href: 'https://maharera.maharashtra.gov.in/' },
    { label: 'Venkatesh Buildcon', href: 'https://www.venkateshbuildcon.com' },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        Venkatesh Serenique is registered, named and moving. Almost none of the numbers a buyer
        normally asks for exist yet. That is ordinary for a project at this stage, but it is worth
        stating clearly, because a handful of websites currently ranking for this project publish a
        complete specification for it.
      </p>

      <h2>What is on the record</h2>
      <p>
        The scale figures below came to us from the developer on 9 August. They replace the numbers
        this article carried when it was first published, which came from a listing site and were
        wrong by a wide margin. The correction is set out further down.
      </p>
      <ul>
        <li>
          <strong>14 acres</strong> at Bavdhan, on the western edge of Pune.
        </li>
        <li>
          <strong>Eleven towers</strong>, each running{' '}
          <strong>three basements, ground, a podium and 27 floors</strong>.
        </li>
        <li>
          <strong>2, 3 and 4 BHK</strong> homes.
        </li>
        <li>
          Registered with MahaRERA as <strong>Shree Venkatesh Serenique Phase 1</strong>.
        </li>
        <li>
          Possession scheduled for <strong>December 2031</strong>.
        </li>
      </ul>

      <h2>What nobody has published</h2>
      <p>
        Not the developer, not the portals. If you have seen any of the following quoted for this
        project, it did not come from the builder:
      </p>
      <ul>
        <li>Carpet areas for any of the three configurations.</li>
        <li>A price list, or a rate per square foot.</li>
        <li>The total number of homes.</li>
        <li>Unit floor plans and the master plan.</li>
        <li>The amenity schedule.</li>
        <li>Renders, elevations or a brochure.</li>
        <li>A street address for the site.</li>
      </ul>

      <h2>The correction</h2>
      <p>
        When this article went up on 7 August it said the project was 2.5 acres, three towers and
        380 homes in 2 and 3 BHK. Every one of those came from the same listing site, which was the
        only page publishing checkable numbers at the time. Four of the five were wrong.
      </p>
      <p>
        The project is 14 acres, not 2.5. It is eleven towers, not three. It includes a 4 BHK. We
        have taken the unit count off the site entirely rather than correct it, because no new total
        has been issued and 380 homes across eleven towers of 27 floors is not a number that can be
        quietly adjusted. It will go back up when the developer publishes one.
      </p>
      <p>
        Worth saying plainly: two sites we had dismissed as unreliable were listing a 4 BHK all
        along, and they were right about it. They were right without publishing a carpet area, next
        to figures that are still wrong, which is why we did not follow them. The lesson is not that
        those sites are trustworthy. It is that a listing site is a poor substitute for the builder,
        including when it happens to agree with the builder.
      </p>

      <h3>The possession date</h3>
      <p>
        You will also see 2028 quoted. That figure sits on a site which reproduces a different
        Venkatesh project&rsquo;s statistics on its Bavdhan page, and a 27-floor tower handing over
        in 2028 does not fit any normal construction timeline. An eleven-tower scheme is a longer
        build again. December 2031 is the better-sourced date, and the registered completion date on
        the MahaRERA portal is the one to rely on.
      </p>

      <h2>What happens next</h2>
      <p>
        Pre-launch pricing usually reaches registered buyers before it reaches the listing portals,
        and that window is the commercial reason to look at a project this early. When the developer
        issues carpet areas, the price list, the plans or the amenity schedule, it goes up here and
        goes out to everyone on the list the same day.
      </p>
      <p>
        Until then, the honest answer to &ldquo;what does a flat at Serenique cost?&rdquo; is that
        nobody knows. Anyone quoting you a number is quoting you a guess.
      </p>
    </>
  )
}
