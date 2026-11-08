# Venkatesh Serenique — Bavdhan, Pune

Marketing site for a residential project at Bavdhan, **launched in 2026**,
built with Next.js 16 (App Router), React 19, TypeScript and Tailwind 4.

---

## The one thing to understand first

**Where the facts come from, as of 6 November 2026.** The project has
launched. MahaRERA records Phase 1 as `VENKATESH SERENIQUE- PHASE -1`,
**PM1261012601412** (registered 3 Aug 2026, corrected 31 Aug 2026, completion
**30 Sep 2031**): one building of three residential wings (A1, A2, A3) and a
13-shop commercial wing, **380 homes + 13 shops**, on Survey No. 34/1/1/1,
Bavdhan Khurd. The developer's own site gives the land (**3.75 acres** in
Phase 1 of a **9.75-acre** parcel), **2 & 3 BHK** (plus a 1 BHK and a 2.5 BHK
on the refuge floors in its floor plans), RERA carpet areas, amenities,
specifications, renders and a brochure. It has **not** published a price list
itself; on 8 November 2026 the client supplied the developer's own **price
list (cost sheet) dated 13 Oct 2026** for Wings A2 and A3, and the site now
publishes every line of it on `/configurations` with its date and conditions
(see "The price list and the brochure" below).

Authority order is now **MahaRERA > the developer's own website > the
client's earlier figures > news > portals**. Every value in
`src/content/project.ts` names its source and date, and `phase1` there holds
the MahaRERA record that the rest of the site reads.

> **The client's 9 August figures are superseded.** 14 acres, 11 towers,
> 3 basements + G + P + 27 floors and 2, 3 & 4 BHK were given to us before
> launch. MahaRERA and the developer contradict all four, and by the client's
> standing decision the official figures replace them. The `380 homes` this
> site deleted in August as "impossible" turned out to be the Phase 1
> residential count exactly; it is back, labelled Phase 1. The "PM" prefix on
> the RERA number, once suspected to be a typo, is a genuine MahaRERA prefix.
> Do not reinstate any of the August figures.

The history below is kept because the lesson in it still holds.

> **Read this before trusting any figure in git history.** Until 9 August the
> site carried 2.5 acres, 3 towers, 28 storeys, 380 homes and 2 & 3 BHK, taken
> from Propstar, the only page then publishing checkable numbers. The developer's
> figures put the project at **5.6x the land and nearly 4x the towers**, and
> confirmed a 4 BHK that two sources had been dismissed for claiming.
>
> The **unit count has been removed, not corrected**. 380 homes across 11 towers
> of 27 floors is impossible, and no replacement total has been issued. It is now
> an `Awaited` row on the release ledger. Do not reconstruct it by multiplying
> floors by an assumed flats-per-floor.
>
> The lesson worth keeping: the reasoning that excluded the 4 BHK was sound on
> the evidence available and still produced a wrong page. Ask the client early.
> A listing site is a poor substitute for the builder even when it agrees with
> the builder.

The site was built around that gap rather than papering over it. The hero
carries a **release ledger** — a plain list of what has been issued and what
has not — and each unreleased section was a `<Reveal>` block that said so and
captured the enquiry. Since the launch the ledger shows almost everything as
published (today's price is the one row still out, because the price list
is a dated quotation that has lapsed), and the reveal blocks
describe the published material and offer to send it, until the real
sections are built. The original reasoning:

- Several sites currently ranking for this project publish full spec sheets.
  Those figures are not sourced from the developer. One of them reproduces the
  *Kharadi* project's developer statistics verbatim on a Bavdhan page.
- "We'll send it the day it's issued" converts better on a pre-launch page
  than a borrowed floor plan does.
- Under RERA, advertising unpublished specifications as fact is a real
  exposure, not a stylistic preference.

**If you add a figure to this site, add a source comment beside it.**
`src/content/project.ts` is written to that rule throughout.

---

## ⚠ Confirm before launch

Three things are carried on assumption and are marked `CONFIRM` in the code.
None of them blocks development; all three block go-live.

| What | Where | Why it matters |
| ---- | ----- | -------------- |
| ~~The MahaRERA number~~ **Resolved 2026-11-06** | `phase1` / `legal.reraRegistrations` in `content/project.ts` | `PM1261012601412` is genuine: the MahaRERA search returns it for "Serenique" and Form C (dated 31 Aug 2026) carries it. "PM" is a current MahaRERA prefix, not a slip for "PR". The detail view on the portal is CAPTCHA-gated, so land area, the unit-type table, litigation and QPRs were not read; worth one manual look. |
| **Blackstone Realty's RERA agent number** | `legal.advertiser` | The footer now reads "Marketed by Blackstone Realty, Pune." The previous Home Bazaar Services line and its registration number were carried over from another project by mistake and have been removed. **No agent registration is printed at all right now** — a marketing site for a MahaRERA-registered project is expected to carry one. Add Blackstone Realty's to this string. |
| **The chat persona** | `site.chatAgentName` | The widget introduces itself as "Sneha Kulkarni". That is a persona, not a named employee — the same pattern the Kharadi site runs. Replace it with a real member of the team, or accept that a visitor being asked for a phone number is talking to a name that is not a person. |

### Removed at the client's request — read this before "fixing" anything

The small grey captions under the map, the distance list, the configuration
cards, the release ledger and the developer grid have all been **deleted**. So
has the MahaRERA "pending verification" caveat in the footer.

The facts those captions stated are still true and are still recorded in
`src/content/project.ts` — they are simply no longer printed. Three consequences
worth knowing:

- The map is a **locality** embed centred on Bavdhan, not a plot pin. The
  survey number is now on record, but no coordinates are. Nothing on the page
  says so any more.
- Landmark lists carry no distances because no source publishes them. Nothing on
  the page says so any more.
- The RERA number was unverified when the caveat was removed. It has since
  been verified (2026-11-06), so the missing caveat no longer matters.

**Resolved 2026-08-07 — developer identity.** This was the third open item. The
developer's own logo artwork, recovered from the reference sites, reads *"Shree
Venkatesh Buildcon Pvt. Ltd. — an Ankush Asabe venture"*. Ankush Asabe is the
byline Venkatesh Buildcon prints on its own Kharadi campaign creatives, so the
listing portals' "Shree Venkatesh Buildcon" and the developer's "Venkatesh
Buildcon" are one firm. A logo asserting its own registered name is first-party
evidence in a way an aggregator's prose is not. `/about-developer` explains the
two names to buyers rather than hiding the question.

---

## Media audit — what the reference URLs actually contained

Roughly 75 media files were enumerated across the four reference pages. **One is
Serenique's.**

**The find:** the developer's own launch creative, on `propstarrealty.com`
(`alt="Venkatesh Serenique Bavdhan"`, the only Serenique-specific image on the
page). It supplies, verbatim and now used throughout the site:

- the wordmark lockup — sprig device over `VENKATESH / SERENIQUE / BAVDHAN`,
  reproduced in [`src/components/wordmark.tsx`](src/components/wordmark.tsx)
- the strapline **"A life of serenity. A home that defines you."** — the only
  line of copy on this site the developer wrote
- the five-point feature strip, now `featureStrip` in `content/project.ts`
  (three of its five lines are still the creative verbatim)

**⚠ This creative is out of date and is no longer authoritative on scale.** It
reads *"Premium 2 & 3 BHK Homes"* and *"3 Premium Residential Towers"*, and its
artwork shows three-tower massing. The developer's 9 August figures say eleven
towers and a 2/3/4 mix. The creative is undated and was recovered from a
competitor's media library, so it most likely predates the current scheme. The
site now prints the developer's figures and the affected lines carry a comment
saying they are deliberately no longer verbatim. Use it for the wordmark, the
strapline and the amenity language only.

**⚠ The image file itself is not shipped.** Propstar has stamped a large
"PROPSTAR REALTY" watermark across the centre of it. Publishing a competing
broker's mark on this client's own lead-generation site would be commercially
self-defeating, quite apart from the rights question — and removing another
party's watermark is not a call to make unilaterally.

**Everything else was rejected, and why it matters that it was:**

| Asset | What it actually is |
| ----- | ------------------- |
| `puneupcoming/masterplan.webp` | A master plan with ~11 towers labelled A–K. Serenique has **3**. Different project. |
| `puneupcoming/venkatesh-bavdhan.webp` | Generic AI-generated city skyline stock. |
| `puneupcoming/gallery/*` | `glamping-resort-suites`, `outlet-mall`, `diabetes-control-room`, `wellness-pavilion-spaces` — a wellness-resort template, not a Pune apartment project. |
| `puneupcoming/floor_plan1.jpg` | A graphic reading "this LAYOUT is COMING SOON". |
| `prelaunch/masplan.jpg` | A graphic reading "Master Plan COMING SOON". |
| `prelaunch/gallery_img1–8.jpg` | Generic stock interior photography. |
| `prelaunch/images/kns-nelamangala.webp` | A **Bangalore** project. The template was never re-skinned. |
| `propstar/379.png` | A two-tower project with a skybridge and spires — a different listing on the same site. |

This is the concrete evidence for the editorial position the site already took:
the pages ranking for this query are filled with imagery that is not this
project's. Had these been dropped in, the site would be showing buyers an
11-tower master plan for a 3-tower development.

**The developer's mark** is at `public/brand/venkatesh-buildcon.png` (full
colour, client-confirmed), with a greyscale vector alongside at
`venkatesh-buildcon.svg` for any future single-colour use.

---

## The developer portfolio on /about-developer

`venkateshbuildcon.com` was crawled on 2026-08-07 — the `/pune-projects/`
listing plus all 33 individual project pages — to give the About page real
content. It is all first-party; no listing portal is involved.

The data is in
[`src/content/developer-projects.ts`](src/content/developer-projects.ts),
grouped by the developer's own status taxonomy (their listing tags each card
`project_status-completed|ongoing|upcoming`):

| Group | Count | Notes |
| ----- | ----- | ----- |
| Recent launches | 2 | Tresor and Vanaya (formerly New Beginnings). In August both were tagged ongoing *and* upcoming; as of 2026-11-06 both are plain ongoing |
| Ongoing | 8 | Includes 2 commercial (Vertica, Midori Commercial) |
| Completed | 23 | Skydale moved here on 2026-11-06 |

The developer's own count is 34: the 33 above plus Serenique, which is on its
listing since 27 Aug 2026 but is not shown as a card on its own site.
`portfolio.total` counts it.

`config` and `where` are split from the line printed directly beneath each
project's `<h1>`. **That line is the only trustworthy field on those pages.**

> ⚠ **Do not take copy from their `og:title` / `og:description`.** Those tags
> are broken across most of the site: the Tresor page and the New Beginnings
> page both serve *Anandmayi's* title, and fourteen unrelated projects all
> serve "Venkatesh Lake Vista: 1, 2, 3 BHK Flats in Ambegaon".

**Imagery** is each page's `og:image` — the developer's own hero render —
downscaled to 900px and re-encoded. Originals were 9.4 MB across the set; the
shipped versions are 2.6 MB. All 33 were reviewed individually before use.

One exception, and it is commented in the data file: the New Beginnings page's
`og:image` is a decorative leaf-vine graphic rather than a render (that page is
one of the ones with broken meta tags). It is replaced by the project's actual
hero, taken from the client's own Kharadi project files, and named
`new-beginnings-hero.webp` rather than matching its slug so the different
provenance is visible at the filename.

**Editorial guard rails on that section:**

- Every image is credited as an artistic impression, once per section.
- The page states plainly that none of the projects shown is Serenique.
- No delivery statistics are claimed beyond what the developer's own site
  states in plain text. The "50+ projects / 20+ cities / 10,000+ families"
  corporate card found on one of the rejected reference sites is **not** used —
  it contradicts both the developer's site (26 years) and the Kharadi
  first-party creatives (6,000+ families).
- Only the first launch card is `priority`; the other 32 lazy-load. Next
  identifies that card as the page's LCP element.

### Ask the developer for

**Update 2026-11-06:** items 1 to 5 and 7 are now published on the developer's
own site (a clean official logo, renders, master layout, cluster and podium
plans, floor plans with RERA carpet areas, the amenity list, Form C with its
QR, and the survey number). The files are in the research assets folder with
their source URLs. Item 6's **price list** arrived from the client on
2026-11-08 and is published (see "The price list and the brochure"); it stays
out of the JSON-LD (Ruling R17), so item 6's `offers` note no longer applies.
The original list:

1. **The clean launch creative** — same artwork, no broker watermark. Unblocks
   the hero and the OG card immediately.
2. **The Serenique wordmark** as vector or transparent PNG — replaces the
   type-set mark in `wordmark.tsx`.
3. Renders / elevations → unblocks `reveals.gallery`, enables `/gallery`.
4. Master plan and unit floor plans → unblocks `reveals.configurations`.
5. Amenity schedule → unblocks `reveals.amenities`, enables `/amenities`.
6. Carpet areas and the price list → unblocks `reveals.pricing`, and lets
   `offers` markup into the JSON-LD for the first time.
7. The MahaRERA QR code and the surveyed site address → footer QR, and a real
   map pin instead of a locality map.

Also carried over and worth a glance: `site.phone` / `site.leadEmail`, taken
from the Kharadi site because it is the same marketing operation. Change them
in one place if Serenique gets its own tracked line.

---

## The price list and the brochure

**Price list.** `priceList` in `src/content/project.ts` holds every line of
the developer's cost sheet dated 13 Oct 2026 (10 lines: 9 in Wings A2 and A3
and one "2 BHK (REFUGE)" line with no wing), transcribed from the client kit's
`price-sheets.csv` and re-checked against a render of the sheet. A build-time
check fails if any line's all-in total is not the sum of its parts. Every
price on the site is derived from it: the hero's "from" figure, the
configuration cards, the starting prices, the table and conditions on
`/configurations`, the price FAQ, the legal pages and `/llms.txt`.

- The sheet was "valid for 15 Days only", so it lapsed around 28 Oct 2026.
  Every price carries the date and tells the buyer to confirm today's price.
  When the client sends a newer sheet, replace `PRICE_LIST_ISSUED` and every
  line together.
- **Never published:** the sheet itself (image or PDF), the booking payee's
  name (Ruling R18; the booking amount is), and anything from the
  channel-partner docket (token scheme, "indicative" ranges, area tables).
- **No price in JSON-LD** (Ruling R17), and none on the share card.
- Two lines disagree with the developer's floor plans: the "2 BHK (REFUGE)"
  line (81.40 sq m, no wing; the plan's 2.5 BHK is 83.62 sq m) and Wing A3
  serial 6 (67.85 sq m; the plan says 66.93). Both are published as the sheet
  states them, with a visitor note and a `CONFLICT:` comment, and are on the
  client list.

**Brochure.** `public/brochure/venkatesh-serenique-brochure.pdf` is a
compressed copy of the developer's official 44-page brochure (41.8 MB to
7.8 MB), offered on `/thank-you` after an enquiry (spec decision 13). Every
page was checked on 2026-11-08: no price, no broker mark. It does print
figures this site does not repeat (552 flats, 6-level parking, exact km
distances that differ from the developer's website bands); the comment above
`brochure` in `project.ts` lists them. To replace it, recompress the new PDF
(text and QR pages as vectors, photo pages at about 110 dpi, JPEG about q70;
target under 8 MB), re-check every page, and update `sizeLabel`.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does               |
| ------------------- | -------------------------- |
| `npm run dev`       | Dev server                 |
| `npm run build`     | Production build           |
| `npm start`         | Serve the production build |
| `npm run lint`      | ESLint                     |
| `npm run typecheck` | `tsc --noEmit`             |

All three of build, lint and typecheck must pass before deploying.

---

## Where the content lives

**Almost every string on the site is in
[`src/content/project.ts`](src/content/project.ts).** Copy changes are edits to
that file, not to components.

That file also records where each fact came from, and which sources were
rejected and why. In order of authority (re-ranked 2026-11-06; the header of
`project.ts` has the URLs and dates):

1. **MahaRERA** — the search result, the public record and Form C for
   PM1261012601412. Phase-level facts are labelled Phase 1.
2. **venkateshbuildcon.com** — the developer's own Serenique page and floor
   plans: land, configurations, carpet areas, amenities, specifications.
3. **The client's 9 August figures** — superseded where 1 or 2 contradict them.
4. **News** for the locality (Punekar News, Free Press Journal).
5. **Bavdhan locality data** — kept on the location page only where the
   developer gives nothing for the same place.

propstarrealty.com and the housing.com URL slug, the August sources for the
RERA number, the possession date and the registered name, are no longer used.
Broker prices, and the developer page's "2.9 to 5 CR" (copied from its
Skydale page), are not published. **Prices come only from the developer's
price list (source K in `project.ts`).**

Rejected outright: `venkateshprelaunch.com` and `puneupcomingprojects.com`.
Both rank for this query and both are recycled boilerplate. They are named in
the source header so nobody re-adds them thinking they were missed.

Legal copy for the policy pages is in
[`src/content/legal.ts`](src/content/legal.ts).

> ⚠ The policy pages were drafted to match how this site actually behaves, but
> they are not legal advice and should be reviewed by counsel before launch.

---

## Lead capture

```
form ─┐
      ├→ /api/lead → Google Apps Script → Google Sheet
chat ─┘                       ↓
                       notification email
```

**Two payload shapes reach `/api/lead`, and both are handled.** The forms send
JSON. The chat widget sends `application/x-www-form-urlencoded` with its own
field names and cannot be changed to match, because it posts `no-cors` with
`keepalive` so the request survives its own redirect to `/thank-you`.

> ⚠ Do not simplify `readLead()` in `src/app/api/lead/route.ts` back to
> `request.json()`. The widget's POST would throw on parse and every chatbot
> lead would be lost **silently** — `no-cors` means the widget never sees the
> response and still redirects the visitor to the thank-you page.

The widget's two qualifying answers ride along in the `intent` column, so the
sheet reads `Chatbot — Amenity plan · 2 BHK — from Venkatesh Serenique Bavdhan`
rather than a bare "Chatbot".

The Apps Script both writes the row and sends the email — there is no
transactional email service, and this app holds no mail credentials.

**This project needs its own Apps Script deployment and its own Sheet.** Do not
point it at the Kharadi project's: two sites writing into one sheet makes it
impossible to tell which project a lead came from, and rotating the secret for
one would silently break the other.

The script and its full setup steps are in
[`scripts/google-apps-script/Code.gs`](scripts/google-apps-script/Code.gs).

Check the wiring at any time by opening `/api/lead` in a browser; it reports
which sinks are live without exposing the secret.

If `LEADS_WEBHOOK_URL` is unset, leads are still captured to the server log with
a warning naming the address they did not reach — nothing is silently lost.

---

## Environment variables

Copy `.env.example` to `.env.local` for local work.

| Variable               | Required | Purpose                                             |
| ---------------------- | -------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | yes      | Absolute origin; makes canonicals and OG image resolve |
| `LEADS_WEBHOOK_URL`    | yes      | Apps Script `/exec` URL                             |
| `LEADS_WEBHOOK_SECRET` | yes      | Must match `SHARED_SECRET` in `Code.gs`             |
| `LEAD_TO`              | no       | Only used in log messages                           |
| `CRM_WEBHOOK_URL`      | no       | Optional extra JSON POST per lead                   |

---

## Layout

```
src/app/            Routes. One folder per page; page.tsx is the home page.
src/app/api/lead/   Lead capture endpoint.
src/components/     UI. ui.tsx holds the design primitives.
src/content/        All copy, all sourcing, all legal text.
src/lib/seo.ts      Canonical / OG / Twitter metadata builder.
public/brand/       The developer's mark.
public/developer/   The developer's 33 project renders.
public/chatbot/     Vendored chat widget (third-party; not linted).
scripts/            Google Apps Script for lead capture.
```

### The chat widget

Ported from the Kharadi project and rebranded. `public/chatbot/` is vendored
third-party code and is excluded from ESLint, so the compiler will not catch
regressions in it. **Do not re-copy it from the sibling project** — that would
undo all four changes below.

| Change | Why |
| ------ | --- |
| Retinted to slate-teal | Copper is a dark-surface-only token and would fail contrast on white chat bubbles. The widget sits on white. |
| Conversation rewritten | The stock flow offered a brochure, a quotation and "inventory available with us". None of that exists — this project is pre-launch. Every option is now a request to be sent something *when it is issued*, and the reply says so. |
| 1, 2, 2.5 & 3 BHK | Phase 1's configurations per the developer's floor plans (2026-11-06). The 4 BHK added on 9 August is gone: no published Phase 1 plan has one. The 1 BHK the stock widget offered turns out to exist, on Wing A3's refuge floors. Keep `BHK_OPTIONS` in step with `configurations` in `content/project.ts`. |
| Google Fonts injection removed | It fetched Bricolage Grotesque and Plus Jakarta Sans on every page load — two families nothing rendered in, since the CSS inherits Fraunces and Manrope from `next/font`. It was also an undeclared third-party request and it blocked render on a below-the-fold widget. |

The widget is suppressed on `/thank-you`; someone who has just submitted should
not be asked for the same number again.

### Routes that deliberately do not exist yet

**`/amenities` and `/gallery`.** Until November 2026 no amenity schedule and
no renders existed, and a route whose whole body reads "coming soon" is thin
content. Both now exist on the developer's site, so both routes are due; the
amenity list and specifications are already data in `content/project.ts`
(`amenities`, `specifications`). Until they are built, both live as `<Reveal>`
blocks on the home page.

To promote them when the client kit lands: build the route, delete the matching
entry from `reveals` in `content/project.ts`, add the path to
`src/app/sitemap.ts`, and add it to `nav`. All four, or it will not be crawled.

### Why the project wordmark is type, not artwork

No usable logo file exists for Serenique — the only copy of the developer's
wordmark is inside a broker-watermarked creative (see the media audit above). It
is therefore **set in type** in
[`src/components/wordmark.tsx`](src/components/wordmark.tsx), but it is not
invented: the lockup reproduces the developer's own structure — sprig device
over `VENKATESH / SERENIQUE / BAVDHAN`, outer lines in letterspaced small caps,
`BAVDHAN` flanked by rules at display size. Replace that one file when the clean
wordmark arrives; nothing else references it.

---

## Writing an article

Articles live at `/updates` and `/updates/<slug>`. There is no CMS — a piece is
a file, added from the editor.

**To add one:**

1. Copy any file in `src/content/articles/` to `<your-slug>.tsx`.
2. Edit its `meta` block and write the body.
3. Add one import line and one array entry in
   [`src/content/articles/index.ts`](src/content/articles/index.ts).

That is all. The index page, the "Latest from the project" strip on the home
page, the related-articles rail, the category chips and the sitemap all read
from that one array, and the route prerenders itself via `generateStaticParams`.

**The body is plain JSX.** Use `<h2>`, `<h3>`, `<p>`, `<ul><li>`, `<ol><li>`,
`<blockquote>`, `<strong>`, `<a>`, `<hr>`, `<figure>` and `<table>` — the
`<Prose>` wrapper styles all of them. No imports, no `className`, no components
to assemble.

- **Imports are explicit, not globbed**, because Next needs every route at build
  time. A glob works in dev and ships an empty index in production.
- **`cover` is optional.** Most construction updates will not have a picture;
  without one the card falls back to a typographic tile rather than demanding an
  image nobody has.
- **`sources` renders at the foot of the article.** Same house rule as the rest
  of the site: a figure carries its source.
- **`slug` is the URL.** Changing it after publishing breaks the link.

The two seed articles are written to be templates as well as real content —
copy whichever is closer in shape to what you are writing.

---

## Corner radius — one scale, no exceptions

Every radius on the site comes from the chat widget's own scale, so the two do
not read as different products. The tokens are defined in
[`globals.css`](src/app/globals.css):

| Token | Value | Use |
| ----- | ----- | --- |
| `rounded-xs` | 8px | badges, chips, tiny overlays |
| `rounded-sm` | 11px | small pills |
| `rounded-md` | 14px | buttons, inputs — anything you click or type into |
| `rounded-lg` | 16px | cards and bordered panels |
| `rounded-xl` | 18px | large containers, dialogs, media frames |
| `rounded-full` | — | circles only: bullet dots, avatars, blur orbs |

These deliberately **override Tailwind's defaults**, so `rounded-md` means 14px
everywhere and nobody has to remember an arbitrary value.

> ⚠ Do not reintroduce `rounded-[Npx]`. The site previously used 2–4px
> throughout, which sat badly beside the widget's 18px window. A grep for
> `rounded-\[` should return only the comment in `globals.css` forbidding it.

---

## Things that will break if you change them

- **No `transform`, `filter`, `backdrop-filter` or `contain: paint` on
  `<header>`, `html` or `body`.** Each makes that element a containing block for
  `position: fixed` descendants, which silently collapses the mobile menu and
  un-pins the mobile CTA bar.
- **`overflow-x: clip` on `html`, not `hidden`.** `hidden` creates a scroll
  container and kills `position: sticky`.
- **Copper is a dark-surface-only token.** `#c08654` is 5.1:1 on twilight and
  2.9:1 on white. There is deliberately no light-background copper token, so
  the mistake cannot be made by reaching for one. On light surfaces the accent
  is `--color-brand`, 8.2:1 on white.
- **The FAQ section and `<FaqStructuredData />` read the same array.** Google
  requires FAQ markup to correspond to visible content. Deleting the visible
  section means deleting the markup too.
- **The JSON-LD has no `offers`, `amenityFeature`, `geo` or `aggregateRating`.**
  `offers` and any other price must stay out even though the site now shows
  the developer's price list (Ruling R17): the list is a dated quotation that
  has lapsed, and structured data cannot say "as of". For the same reason the
  price FAQ is visible but marked `inSchema: false`, which keeps it out of the
  FAQPage markup. The amenity list is published now, so `amenityFeature` can go
  in with the `/amenities` route.
- **`/thank-you` is noindex, disallowed in `robots.ts`, and absent from
  `sitemap.ts`.** All three have to agree.

---

## Verified

As of 7 August 2026, on a clean install:

```
npm run typecheck   exit 0
npm run build       exit 0   — 15 routes, 14 static + /api/lead dynamic
npm run lint        exit 0
```

Smoke-tested against the production build: all 14 routes return 200; `/api/lead`
returns 400 on an invalid mobile and 200 with a reference id on a valid one; the
rendered home page contains no currency, crore, lakh or square-foot figure
anywhere. (That last check was right for August; since November the pages carry
RERA carpet areas, and since 8 November the price list's figures.)
