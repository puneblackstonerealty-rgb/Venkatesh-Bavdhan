/**
 * The developer's Pune portfolio.
 *
 * ─── Source ────────────────────────────────────────────────────────────────
 *
 * All of it is from venkateshbuildcon.com — the developer's own site — crawled
 * 2026-08-07 (the listing at /pune-projects/ plus all 33 individual project
 * pages) and re-checked against the listing on 2026-11-06. First-party
 * throughout. Nothing here comes from a listing portal.
 *
 *   • `status` is the developer's own taxonomy. Their listing marks each card
 *     with `project_status-completed|ongoing|upcoming`. In August two cards
 *     carried BOTH ongoing and upcoming and were grouped here as current
 *     launches. As of 2026-11-06 no card carries both; Tresor and Vanaya are
 *     plain `ongoing`. They are still grouped first, now as the developer's
 *     2026 launches (Tresor unveiled at a First Privilege Meet, events post
 *     published 17 Aug 2026; Vanaya's Grand Launch and Bhoomipujan, 16/17 Oct
 *     2026, developer events and News & PR pages).
 *   • `config` and `where` are split from the line printed directly beneath
 *     each project's <h1>. That line is the reliable field.
 *   • `luxe` marks membership of Venkatesh Luxe, their premium sub-brand, as
 *     tagged in their own navigation.
 *   • `image` is each page's og:image — the developer's own hero render,
 *     downscaled to 900px and re-encoded. Originals were 9.4 MB across the
 *     set; these are 2.6 MB.
 *
 * ⚠ DO NOT take copy from their og:title / og:description tags. They are
 * broken across most of the site: the Tresor page and the New Beginnings page
 * both served Anandmayi's title in August, and fourteen unrelated projects all
 * serve "Venkatesh Lake Vista: 1, 2, 3 BHK Flats in Ambegaon". Only the <h1>
 * and the line beneath it are trustworthy, which is why those are what is
 * used. The same caution applies to RERA numbers printed on their project
 * pages: several are copied from the wrong project (2026-11-06).
 *
 * ⚠ These are the DEVELOPER'S other projects. They are shown to establish the
 * builder's track record and nothing more. Since 27 Aug 2026 Serenique itself
 * is on the developer's listing too (ongoing, "3 & 2 BHK, near Chandani
 * Chowk"); it is counted in `portfolio.total` but not shown as a card on its
 * own site.
 */

export type DeveloperProject = {
  /** Matches the image filename in /public/developer. */
  slug: string
  name: string
  config: string
  where: string
  /** Venkatesh Luxe, the developer's premium sub-brand. */
  luxe?: boolean
  commercial?: boolean
  image: string
  /**
   * Optional outbound link to the project's own site.
   *
   * Only set where a dedicated site exists AND the client controls it — these
   * open in a new tab, so the Serenique page stays alive behind them. Do not
   * point these at venkateshbuildcon.com project pages: sending a warm visitor
   * to the developer's own site loses the lead.
   */
  href?: string
}

/** Their 2026 launches. Tagged `ongoing` on the listing (2026-11-06); see the header. */
export const launchProjects: DeveloperProject[] = [
  {
    slug: 'venkatesh-tresor',
    name: 'Venkatesh Tresor',
    config: '4.5-bed sky chalets & penthouses',
    where: 'Pallod Farms, Baner',
    luxe: true,
    image: '/developer/venkatesh-tresor.jpg',
  },
  {
    slug: 'new-beginnings',
    /* Listing, 2026-11-06: the card that read "Venkatesh New Beginnings" in
       August now reads "Venkatesh Vanaya", sub-line "4, 3 & 2 BHK Tropical
       Homes, Near Oxygen Park, Kharadi". The slug is kept because it is only
       a key. Was name "Venkatesh New Beginnings", where "Kharadi". */
    name: 'Venkatesh Vanaya',
    config: '4, 3 & 2 BHK tropical homes',
    where: 'Near Oxygen Park, Kharadi',
    /* ⚠ The ONE image here not taken from the developer's site, which is why
       it carries a different filename to the slug. In August that page's
       og:image was a decorative leaf-vine graphic, so this hero was taken
       from the client's own Kharadi project files instead.
       ⚠ 2026-11-06: the developer's og:image is now a real render (Cam-06),
       and the Kharadi research found that several images in the client's
       Kharadi files are NOT renders of this project. Whether this one is has
       not been checked. Swap it for the official render (Task 6). */
    image: '/developer/new-beginnings-hero.webp',
    /* The client's own microsite for the Kharadi project — the sibling build
       to this one, same domain after the rename. Safe to link because the
       lead lands with the same team. */
    href: 'https://venkateshnewbeginnings.com/',
  },
]

export const ongoingProjects: DeveloperProject[] = [
  {
    slug: 'venkatesh-erandwane-central',
    name: 'Venkatesh Erandwane Central',
    config: '4, 3 & 2 BHK',
    where: 'Erandwane',
    luxe: true,
    image: '/developer/venkatesh-erandwane-central.jpg',
  },
  {
    slug: 'venkatesh-laurel',
    name: 'Venkatesh Laurel',
    config: '4 & 3 BHK',
    where: 'Near Modibaug, Central Shivajinagar',
    luxe: true,
    image: '/developer/venkatesh-laurel.jpg',
  },
  {
    slug: 'venkatesh-skylife',
    name: 'Venkatesh Skylife',
    config: '4, 3 & 2 BHK',
    where: 'Sinhagad Road',
    luxe: true,
    image: '/developer/venkatesh-skylife.jpg',
  },
  {
    slug: 'venkatesh-pleasant',
    name: 'Venkatesh Pleasant',
    config: '4 & 3 BHK',
    where: 'Prabhat Road',
    luxe: true,
    image: '/developer/venkatesh-pleasant.jpg',
  },
  {
    slug: 'midori-towers',
    name: 'Midori Towers',
    config: '4, 3 & 2 BHK',
    where: 'Pimple Nilakh',
    image: '/developer/midori-towers.jpg',
  },
  {
    slug: 'midori-towers-commercial',
    name: 'Midori Towers Commercial',
    config: 'Commercial',
    where: 'Pimple Nilakh',
    commercial: true,
    image: '/developer/midori-towers-commercial.webp',
  },
  {
    slug: 'vertica',
    name: 'Vertica',
    config: 'Commercial',
    where: 'Balewadi Highstreet',
    commercial: true,
    image: '/developer/vertica.jpg',
  },
  {
    slug: 'venkatesh-anandmayi',
    name: 'Venkatesh Anandmayi',
    config: '2 BHK',
    where: 'Ambegaon',
    image: '/developer/venkatesh-anandmayi.jpg',
  },
]

export const completedProjects: DeveloperProject[] = [
  {
    slug: 'venkatesh-skydale',
    name: 'Venkatesh Skydale',
    /* Listing card, unchanged. The page body now says 2 to 5 BHK; the card
       line is the field this file trusts. */
    config: '5, 4 & 3 BHK luxury homes',
    where: 'Sinhagad Road',
    luxe: true,
    /* Moved from ongoing: the listing tags it `project_status-completed` as
       of 2026-11-06 (ongoing in August). OC and possession status are not
       verified (MahaRERA detail pages are CAPTCHA-gated). */
    image: '/developer/venkatesh-skydale.jpg',
  },
  {
    slug: 'venkatesh-viom',
    name: 'Venkatesh Viom',
    config: '3 & 2 BHK',
    where: 'Kothrud Depot',
    image: '/developer/venkatesh-viom.jpg',
  },
  {
    slug: 'venkatesh-graffiti',
    name: 'Venkatesh Graffiti',
    config: '3 & 2 BHK',
    where: 'Keshavnagar, Mundhwa',
    image: '/developer/venkatesh-graffiti.jpg',
  },
  {
    slug: 'venkatesh-graffiti-elan',
    name: 'Venkatesh Graffiti Elan',
    config: '2 BHK',
    where: 'Keshavnagar, Mundhwa',
    image: '/developer/venkatesh-graffiti-elan.jpg',
  },
  {
    slug: 'venkatesh-graffiti-elite',
    name: 'Venkatesh Graffiti Elite',
    config: '2 BHK',
    where: 'Keshavnagar, Mundhwa',
    image: '/developer/venkatesh-graffiti-elite.jpg',
  },
  {
    slug: 'venkatesh-graffiti-glover',
    name: 'Venkatesh Graffiti Glover',
    config: '2 BHK semi-furnished',
    where: 'Keshavnagar, Mundhwa',
    image: '/developer/venkatesh-graffiti-glover.jpg',
  },
  {
    slug: 'venkatesh-sharvil',
    name: 'Venkatesh Sharvil',
    config: '3 & 2 BHK',
    where: 'Dhayari',
    image: '/developer/venkatesh-sharvil.jpg',
  },
  {
    slug: 'venkatesh-serenity',
    name: 'Venkatesh Serenity',
    config: '3 & 2 BHK and 6 shops',
    where: 'Dhayari',
    image: '/developer/venkatesh-serenity.jpg',
  },
  {
    slug: 'venkatesh-bilva',
    name: 'Venkatesh Bilva',
    config: '2 & 1 BHK',
    where: 'Dhayari Gaon',
    image: '/developer/venkatesh-bilva.jpg',
  },
  {
    slug: 'venkatesh-lake-vista',
    name: 'Venkatesh Lake Vista',
    config: '3, 2 & 1 BHK',
    where: 'Ambegaon',
    image: '/developer/venkatesh-lake-vista.jpg',
  },
  {
    slug: 'venkatesh-lake-life',
    name: 'Venkatesh Lake Life',
    config: '2 & 1 BHK',
    where: 'Dattanagar-Jambhulwadi Road, Ambegaon',
    image: '/developer/venkatesh-lake-life.jpg',
  },
  {
    slug: 'venkatesh-lake-orchid',
    name: 'Venkatesh Lake Orchid',
    config: '2 & 1 BHK',
    where: 'Dattanagar-Jambhulwadi Road, Ambegaon',
    image: '/developer/venkatesh-lake-orchid.jpg',
  },
  {
    slug: 'venkatesh-kshitij',
    name: 'Venkatesh Kshitij',
    config: '3, 2 & 1 BHK',
    where: 'Ambegaon (Kh)',
    image: '/developer/venkatesh-kshitij.jpg',
  },
  {
    slug: 'venkatesh-navita',
    name: 'Venkatesh Navita',
    config: '2 & 1 BHK',
    where: 'Ambegaon (Kh)',
    image: '/developer/venkatesh-navita.jpg',
  },
  {
    slug: 'venkatesh-shubham-residency',
    name: 'Venkatesh Shubham Residency',
    config: '3 & 2 BHK',
    where: 'Ambegaon (Bk)',
    image: '/developer/venkatesh-shubham-residency.jpg',
  },
  {
    slug: 'shree-venkatesh-puram',
    name: 'Shree Venkatesh Puram',
    config: '2 & 1 BHK',
    where: 'Ambegaon (Bk)',
    image: '/developer/shree-venkatesh-puram.jpg',
  },
  {
    slug: 'shree-venkatesh-residency',
    name: 'Shree Venkatesh Residency',
    config: '12 spacious flats',
    where: 'Ambegaon (Bk)',
    image: '/developer/shree-venkatesh-residency.jpg',
  },
  {
    slug: 'venkatesh-joynest',
    name: 'Venkatesh Joynest',
    config: '2 & 1 BHK',
    where: 'Loni Kalbhor, Pune-Solapur Highway',
    image: '/developer/venkatesh-joynest.jpg',
  },
  {
    slug: 'venkatesh-nisarg',
    name: 'Venkatesh Nisarg',
    config: '3 & 2 BHK row houses',
    where: 'Vadgaon (Bk)',
    image: '/developer/venkatesh-nisarg.jpg',
  },
  {
    slug: 'shree-venkatesh-shrushti',
    name: 'Shree Venkatesh Shrushti',
    config: 'Premium row houses',
    where: 'Vadgaon (Bk)',
    image: '/developer/shree-venkatesh-shrushti.jpg',
  },
  {
    slug: 'shree-venkatesh-vrundavan',
    name: 'Shree Venkatesh Vrundavan',
    config: '2 & 1 BHK',
    where: 'Vrundavan',
    image: '/developer/shree-venkatesh-vrundavan.jpg',
  },
  {
    slug: 'venkatesh-prasad',
    name: 'Venkatesh Prasad',
    config: 'Flats',
    where: 'Vadgaon Sheri',
    image: '/developer/venkatesh-prasad.jpg',
  },
  {
    slug: 'venkatesh-shalini-vishwa',
    name: 'Venkatesh Shalini Vishwa',
    config: 'Residential apartments',
    where: 'Katraj',
    image: '/developer/venkatesh-shalini-vishwa.jpg',
  },
]

/**
 * Serenique itself, which the developer's listing includes (ongoing, card
 * dated 27 Aug 2026) but this site does not show as a card. Counted so the
 * total matches the developer's own 34 (23 completed, 11 ongoing).
 */
const SERENIQUE_ON_LISTING = 1

export const portfolio = {
  heading: 'The portfolio behind Serenique',
  /* Listing, 2026-11-06: 34 projects, Serenique among them. Was "Thirty-three
     projects ... Serenique is a separate, newer registration and is not yet
     listed among them". */
  lede: 'Thirty-four projects across Pune, as published on the developer’s own website. Serenique is one of them; the other thirty-three are shown here as context on the builder.',
  groups: [
    {
      id: 'launch',
      label: 'Recent launches',
      note: 'Launched by the developer in 2026.',
      items: launchProjects,
    },
    { id: 'ongoing', label: 'Ongoing', note: 'Under construction across Pune.', items: ongoingProjects },
    {
      id: 'completed',
      label: 'Completed',
      /* Skydale (Sinhagad Road) joined this group on 2026-11-06. */
      note: 'Marked completed by the developer, from Kothrud and Mundhwa to Ambegaon, Vadgaon and Sinhagad Road.',
      items: completedProjects,
    },
  ],
  /* Counted from the developer's own listing rather than asserted. If a
     project is added or removed above, the figure on the page moves with it. */
  total: launchProjects.length + ongoingProjects.length + completedProjects.length + SERENIQUE_ON_LISTING,
}
