# Venkatesh Serenique, Bavdhan — design

**Date:** 7 August 2026
**Status:** built and verified
**Client:** Sumeet Karne (Pune — digital marketing / channel partner)

---

## Problem

Build a marketing site for **Venkatesh Serenique, Bavdhan** modelled on the
client's existing Kharadi site (`Codename New Beginnings2`), to compete with the
four pages currently ranking for the query.

The complication is that the Kharadi site's entire visual layer is 34 real asset
files — a banner, four renders, ten amenity tiles, three floor plans, a master
plan, seven campaign creatives, three RERA QR codes and a logo. **Serenique has
none of these, and no prices, carpet areas or amenity list either.**

## What research established

Four reference URLs were supplied. Their actual value, after checking:

| Source | Verdict |
| ------ | ------- |
| `propstarrealty.com` | **Usable.** The only source publishing hard numbers. |
| `housing.com` | **Blocked** (HTTP 406 to any automated fetch). Its URL slug still establishes the registered name and Housing's builder name. |
| `venkateshprelaunch.com` | **Rejected.** "Update Soon" on every material field; publishes the *Kharadi* project's developer statistics on a Bavdhan page. |
| `puneupcomingprojects.com` | **Rejected.** Recycled boilerplate; quotes a 2028 possession contradicted by the only sourced figure. |

Two further sources were added: `venkateshbuildcon.com` (first-party on the
developer) and Bavdhan locality data (for the location page).

**Verified facts:** 2.5 acres · 3 towers · 28 storeys · 380 homes · 2 & 3 BHK ·
MahaRERA `PM1261012601412` · possession Dec 2031 · price on request.

**Published nowhere:** carpet areas, price list, amenity schedule, floor plans,
master plan, renders, brochure, street address, logo.

## Decision

Reuse the Kharadi site's *proven machinery* — component primitives, `/api/lead`,
the Apps Script pipeline, the SEO helper, the documented CSS traps — but size
the page structure to what actually exists, rather than forking a seven-route
site and leaving five routes hollow.

Rejected alternatives:

- **Fork wholesale and swap content.** Fastest, but yields a site whose
  structure assumes assets that do not exist. Thin content ranks below the
  aggregators it is meant to beat.
- **Reuse Kharadi's renders as placeholders.** Misleading to buyers and a RERA
  advertising exposure. Explicitly ruled out.
- **Single long teaser page.** Forfeits the long-tail; "…price", "…floor plan",
  "…location" each want their own URL.

## The central design idea

**The release ledger.** Where a hero render would normally sit, the page carries
a plain two-column list of what the developer has issued and what it has not:

```
MahaRERA registration    Registered
Configurations           2 & 3 BHK
Towers, storeys, homes   3 · 28 · 380
Land parcel              2.5 acres
Carpet areas             Awaited
Price list               Awaited
Floor & master plans     Awaited
Amenity schedule         Awaited
Renders & brochure       Awaited
```

This turns the constraint into the product. On a project this early the most
valuable thing a buyer can be told is *which numbers are real* — every competing
page presents a complete spec sheet and only some of it is sourced. It is also
the strongest capture on the page: each `Awaited` row is a reason to register.

Unreleased sections render a `<Reveal>` component — a deliberate, designed state
with its own CTA, not an empty state or a broken image.

## Architecture

```
src/content/project.ts   Single source of truth. Every fact carries a source
                         comment; three assumptions are marked CONFIRM.
src/content/legal.ts     Policy copy, drafted to match actual site behaviour.
src/components/          ui · wordmark · reveal · header · footer · lead ·
                         mobile-cta · page-shell · legal-page · structured-data
src/lib/seo.ts           Canonical / OG / Twitter, kept in agreement.
src/app/                 5 content routes + 3 legal + thank-you + 404 +
                         robots · sitemap · opengraph-image · icon
src/app/api/lead/        Lead endpoint. Own Sheet, own secret.
scripts/                 Google Apps Script.
```

### Routes

Built: `/`, `/configurations`, `/location`, `/about-developer`, `/contact`,
`/privacy-policy`, `/terms-conditions`, `/disclaimer`, `/thank-you`.

Deliberately **not** built: `/amenities`, `/gallery`. No source material exists;
a "coming soon" route is thin content that competes with the home page. Both are
`<Reveal>` blocks on the home page until the client kit lands. Promoting one
requires four coordinated edits (route, `reveals`, `sitemap.ts`, `nav`) —
documented in the README.

### Visual direction

No photography means type, colour and space carry the page alone.

- **Palette:** twilight blue-green `#152430`, warm limestone `#f7f5f1`, copper
  `#c08654` on dark, slate-teal `#2c5561` on light. Chosen for Bavdhan under the
  Sahyadri foothills, and chosen to be unmistakably *not* the Kharadi site's
  forest-and-gold — the two will be seen side by side.
- **Contrast is structural, not checked afterwards.** Copper exists only as a
  dark-surface token; there is no light-background copper, so the 2.9:1 mistake
  cannot be made by reaching for one.
- **Type:** Fraunces (optical-size serif, holds detail at hero sizes and at
  15px) + Manrope (large x-height, keeps dense factual copy readable). Shares no
  DNA with Marcellus/Jost on the sibling site.
- **Wordmark set in type,** not an image — no logo was supplied and the
  developer identification is unconfirmed, so borrowing the sibling project's
  asset would assert an unverified brand relationship on every page.

### Honesty constraints encoded in the build

- No currency, crore, lakh or square-foot figure appears anywhere on the site.
  Verified by grepping the rendered HTML.
- JSON-LD carries **no** `offers`, `priceCurrency`, `amenityFeature`, `geo` or
  `aggregateRating`. Each is absent because the underlying fact is unpublished;
  marking up a price that does not exist is precisely the structured-data abuse
  the guidelines target.
- The map is centred on the **suburb**, not a guessed plot, and says so.
- Landmarks are listed **without** drive times where sources give none.
- The `/configurations` page explains in the visitor's own language why no 4 BHK
  is listed, because two competing sites list one.
- The RERA number is reproduced exactly as sourced, with a visible caveat, and
  no QR — a QR resolving to the wrong registration is worse than none.

## Verification

```
npm run typecheck   exit 0
npm run build       exit 0   — 15 routes, 14 static + /api/lead dynamic
npm run lint        exit 0
```

Smoke-tested against the production build: 14/14 routes return 200; `/api/lead`
returns 400 on an invalid mobile and 200 with a reference id on a valid one;
JSON-LD parses to `FAQPage` and a graph of
`RealEstateAgent · WebSite · Residence+ApartmentComplex`; no forbidden markup
keys present; no fabricated figure in the rendered HTML.

## Addendum — media audit, 7 August 2026

The four reference URLs were re-crawled for imagery. ~75 media files were
enumerated; **one belongs to this project.**

**Recovered:** the developer's own launch creative, on `propstarrealty.com`.
It supplied the wordmark lockup (sprig device over `VENKATESH / SERENIQUE /
BAVDHAN`), the strapline *"A life of serenity. A home that defines you."*, the
product line *"Premium 2 & 3 BHK Homes"*, and a five-point feature strip — all
now in the content layer as source `C`, the site's highest authority. The
wordmark component was rebuilt to the developer's actual lockup rather than the
approximation it started as.

**Not shipped:** the file carries a "PROPSTAR REALTY" watermark across its
centre. Publishing a competing broker's mark on the client's own lead-gen site
is self-defeating, and stripping another party's watermark is not a unilateral
call. The clean original is item 1 on the asset request list in the README.

**Rejected, and instructive:** `puneupcoming`'s master plan shows ~11 towers
labelled A–K for a 3-tower development; its gallery is a wellness-resort
template (`glamping-resort-suites`, `outlet-mall`, `diabetes-control-room`); its
hero is AI stock. `prelaunch` serves `kns-nelamangala.webp` — a Bangalore
project — and literal "COMING SOON" placeholder graphics for its master plan and
floor plans. `propstar/379.png` is a different listing entirely.

This is direct evidence for the editorial position taken at design time. Dropping
these in would have shown buyers an 11-tower master plan for a 3-tower project.

**Resolved as a side effect:** the developer-identity `CONFIRM`. The recovered
logo artwork reads *"Shree Venkatesh Buildcon Pvt. Ltd. — an Ankush Asabe
venture"*; Ankush Asabe is the byline on Venkatesh Buildcon's Kharadi creatives.
Same firm. `/about-developer` now explains the two trading names to buyers
instead of hedging. The developer's vector mark was added at
`public/brand/venkatesh-buildcon.svg`, taken from the client's own Kharadi files
rather than the aggregator's PNG.

Deliberately **not** adopted: the "50+ projects / 20+ cities / 10,000+ happy
families" corporate card on `puneupcoming`. Those contradict both the
developer's own site (26 years) and the Kharadi first-party creatives (6,000+
families). Two incompatible sets means at least one is wrong.

## Addendum 2 — developer portfolio, 7 August 2026

`venkateshbuildcon.com` crawled in full: the `/pune-projects/` listing plus all
33 project pages. `/about-developer` was rebuilt around it, grouped by the
developer's own status taxonomy — 2 current launches, 9 ongoing, 22 completed.

**What made it reliable.** Their listing tags every card
`project_status-completed|ongoing|upcoming`, which gives the grouping for free.
Per-project config and location come from the line printed directly beneath
each `<h1>`. Their `og:title`/`og:description` tags are broken sitewide —
fourteen unrelated projects serve Lake Vista's title, and both Tresor and New
Beginnings serve Anandmayi's — so only the `<h1>` and the line under it are
used. Imagery is each page's `og:image`, downscaled 900px, 9.4 MB → 2.6 MB.

**Verification that mattered.** All 33 images were reviewed on a contact sheet
before shipping. One failed: the New Beginnings `og:image` is a decorative
leaf-vine graphic, not a render. Replaced with the project's real hero from the
client's own Kharadi files, and deliberately named `new-beginnings-hero.webp`
rather than matching its slug so the different provenance shows at the filename.

Not adopted: the "50+ projects / 20+ cities / 10,000+ families" corporate card
carried by one of the rejected reference sites. It contradicts both the
developer's own site (26 years) and the Kharadi first-party creatives (6,000+
families).

The page states plainly that none of the projects shown is Serenique, and
credits every image as an artistic impression.

## Open items

Two `CONFIRM` markers block go-live, not development — the RERA number's prefix
and the advertiser registration. Both are tabulated in the README with the
reasoning. The third, developer attribution, was resolved by the media audit
above.
