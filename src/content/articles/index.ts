import type { ArticleModule } from './types'

/* ───────────────────────────────────────────────────────────────────────────
   THE ARTICLE REGISTRY

   ┌─ TO ADD AN ARTICLE ─────────────────────────────────────────────────────┐
   │ 1. Copy any existing file in this folder to <your-slug>.tsx             │
   │ 2. Edit its `meta` and its body                                        │
   │ 3. Add one import line below, and one entry to REGISTERED              │
   │ That is the whole process. No CMS, no database, no build step.          │
   └─────────────────────────────────────────────────────────────────────────┘

   The imports are explicit rather than globbed because Next needs to know
   every route at build time in order to prerender it. A glob would work in
   dev and silently ship an empty index in production.

   Sorting, the "latest" strip on the home page, the sitemap entries and the
   category counts all read from this one array — nothing else needs touching.

   ── WRITING ────────────────────────────────────────────────────────────────
   Bodies are plain JSX. <Prose> on the article page styles h2, h3, p, ul, ol,
   strong, em and a, so those need no imports and no classNames.

   Two components are available from '@/components/article-figure':
     <Figure src alt width height caption credit />  an image with a caption.
       `credit` is 'Illustration' for the diagrams in /public/illustrations, or
       'Delivered project' for a photograph of a building this developer has
       actually completed. There is no 'artistic impression' option, because
       this project has no imagery of its own — see the note in that file.
     <Note title>…</Note>  a short aside for a definition or a caveat.

   Two house rules:
     1. Any figure you state needs a source. Put it in `meta.sources` and it
        renders at the foot of the article.
     2. Write it the way you would say it. No em dashes, no "not just X but Y",
        no rhetorical questions. Short sentences beat balanced ones.
   ─────────────────────────────────────────────────────────────────────────── */

/* ⚠ Keep topics DISTINCT from the Kharadi site's /updates section. Both sites
   belong to the same client AND to the same developer, so a near-duplicate
   guide on two domains makes them compete for the same query and splits the
   ranking between them.

   Already taken on Codename New Beginnings (venkateshnewbeginnings.com), do
   not repeat here:
     • carpet vs built-up vs super built-up
     • stamp duty and registration, GST, the cost sheet, home loans
     • rental yield, booking sequence and the ten per cent rule
     • what to check on a site visit
   The buying guides here are deliberately the ones that site does NOT cover:
   defect liability, OC and CC, conveyance, delay interest, floor choice,
   parking, and diligence with nothing published. Check the other site before
   adding. */

/* The project itself */
import * as releasedSoFar from './what-has-actually-been-released'
import * as scale from './fourteen-acres-and-eleven-towers'
import * as phaseOne from './what-phase-one-covers'
import * as theCorrection from './the-numbers-that-were-never-true'

/* Bavdhan and west Pune */
import * as bavdhanConnectivity from './what-bavdhan-actually-connects-to'
import * as bavdhanRates from './bavdhan-property-rates-in-2026'
import * as chandaniChowk from './the-chandani-chowk-junction'
import * as westPuneCompare from './bavdhan-baner-or-kothrud'
import * as metroPhase2 from './the-metro-extension-to-chandani-chowk'
import * as water from './water-in-bavdhan'
import * as socialInfra from './schools-and-hospitals-around-bavdhan'
import * as hinjawadiCommute from './the-hinjawadi-commute-from-bavdhan'

/* The developer */
import * as developerRecord from './the-developer-track-record'

/* Buying guides. See the warning above before adding to this group. */
import * as reraCheck from './how-to-check-a-maharera-registration'
import * as preLaunchMeaning from './what-pre-launch-actually-means'
import * as defectLiability from './the-five-year-defect-liability'
import * as certificates from './occupancy-and-completion-certificates'
import * as conveyance from './conveyance-and-deemed-conveyance'
import * as delayInterest from './when-possession-runs-late'
import * as highRise from './living-on-the-twenty-seventh-floor'
import * as whichFloor from './which-floor-should-you-buy'
import * as parking from './parking-and-what-you-actually-own'
import * as offPlanDiligence from './buying-when-nothing-has-been-published'

const REGISTERED: ArticleModule[] = [
  releasedSoFar,
  scale,
  phaseOne,
  theCorrection,
  bavdhanConnectivity,
  bavdhanRates,
  chandaniChowk,
  westPuneCompare,
  metroPhase2,
  water,
  socialInfra,
  hinjawadiCommute,
  developerRecord,
  reraCheck,
  preLaunchMeaning,
  defectLiability,
  certificates,
  conveyance,
  delayInterest,
  highRise,
  whichFloor,
  parking,
  offPlanDiligence,
]

/** Newest first. This is the order every listing uses. */
export const articles: ArticleModule[] = [...REGISTERED].sort((a, b) =>
  b.meta.publishedAt.localeCompare(a.meta.publishedAt),
)

export const articleMetas = articles.map((article) => article.meta)

export function getArticle(slug: string): ArticleModule | undefined {
  return articles.find((article) => article.meta.slug === slug)
}

/** Categories that actually have an article, in listing order, with counts. */
export function usedCategories(): Array<{ name: string; count: number }> {
  const counts = new Map<string, number>()
  for (const { meta } of articles) {
    counts.set(meta.category, (counts.get(meta.category) ?? 0) + 1)
  }
  return [...counts.entries()].map(([name, count]) => ({ name, count }))
}

/**
 * The listing grouped under its categories, largest group first.
 *
 * The index was a single undifferentiated grid, which was right at five
 * articles and stopped being right somewhere past a dozen. Grouping gives a
 * reader something to scan and gives the page a set of real headings instead
 * of one heading and twenty cards.
 *
 * `skip` exists because the newest piece is already shown as the feature card
 * at the top, and showing it twice looks like a bug.
 */
export function articlesByCategory(skip?: string) {
  const groups = new Map<string, typeof articleMetas>()
  for (const meta of articleMetas) {
    if (meta.slug === skip) continue
    groups.set(meta.category, [...(groups.get(meta.category) ?? []), meta])
  }
  return [...groups.entries()]
    .map(([name, items]) => ({ name, items }))
    .sort((a, b) => b.items.length - a.items.length)
}

/** Up to `limit` other articles, newest first. Used under each article. */
export function relatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug)?.meta
  if (!current) return articleMetas.slice(0, limit)
  // Same category first, then everything else — so a construction update leads
  // to the next construction update rather than to a locality guide.
  const rest = articleMetas.filter((meta) => meta.slug !== slug)
  const sameCategory = rest.filter((meta) => meta.category === current.category)
  const others = rest.filter((meta) => meta.category !== current.category)
  return [...sameCategory, ...others].slice(0, limit)
}

/** `2026-08-07` → `7 August 2026`. One formatter so dates cannot drift. */
export function formatArticleDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return `${day} ${MONTHS[month - 1]} ${year}`
}

export const updatesIndex = {
  eyebrow: 'Updates',
  title: 'Project updates & Bavdhan notes',
  lede: 'What the developer has actually released, what has changed on site, and what is worth knowing about Bavdhan. Updated as the project moves.',
  empty: 'The first update is being written. Register and we will send it to you.',
}
