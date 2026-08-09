# Venkatesh Serenique — Bavdhan, Pune

Marketing site for a **pre-launch** residential project at Bavdhan, built with
Next.js 16 (App Router), React 19, TypeScript and Tailwind 4.

---

## The one thing to understand first

This project is genuinely pre-launch. As of 7 August 2026 **nobody has
published** carpet areas, a price list, an amenity schedule, floor plans, a
master plan, renders, a brochure, or even a street address for it. Not the
developer, not the listing portals.

What *is* known is: **14 acres, 11 towers, 3 basements + ground + podium + 27
floors, and 2, 3 & 4 BHK** — all four given to us by the developer through the
channel partnership on **9 August 2026**. Plus a MahaRERA registration and a
December 2031 possession date, which still rest on a listing partner.

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

The site is built around that gap rather than papering over it. The hero
carries a **release ledger** — a plain list of what has been issued and what
has not — and each unreleased section is a `<Reveal>` block that says so and
captures the enquiry. That is a deliberate design position, not an unfinished
one:

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
| **The MahaRERA number** | `legal.reraRegistrations` in `content/project.ts` | Published as `PM1261012601412`. MahaRERA Pune registrations are `P52100…` or `PR126101…` — the `PM` prefix matches neither and reads like a transcription slip of `PR1261012601412`. It is reproduced **exactly as sourced** rather than silently corrected, and the footer shows a caveat until it is verified at [maharera.maharashtra.gov.in](https://maharera.maharashtra.gov.in/). |
| **Blackstone Realty's RERA agent number** | `legal.advertiser` | The footer now reads "Marketed by Blackstone Realty, Pune." The previous Home Bazaar Services line and its registration number were carried over from another project by mistake and have been removed. **No agent registration is printed at all right now** — a marketing site for a MahaRERA-registered project is expected to carry one. Add Blackstone Realty's to this string. |
| **The chat persona** | `site.chatAgentName` | The widget introduces itself as "Sneha Kulkarni". That is a persona, not a named employee — the same pattern the Kharadi site runs. Replace it with a real member of the team, or accept that a visitor being asked for a phone number is talking to a name that is not a person. |

### Removed at the client's request — read this before "fixing" anything

The small grey captions under the map, the distance list, the configuration
cards, the release ledger and the developer grid have all been **deleted**. So
has the MahaRERA "pending verification" caveat in the footer.

The facts those captions stated are still true and are still recorded in
`src/content/project.ts` — they are simply no longer printed. Three consequences
worth knowing:

- The map is a **locality** embed centred on Bavdhan, not a plot pin. Nothing on
  the page says so any more.
- Landmark lists carry no distances because no source publishes them. Nothing on
  the page says so any more.
- The RERA number is unverified and the footer no longer warns about it. That
  makes the first row of this table more urgent, not less.

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
| Current launches | 2 | Tresor and New Beginnings — tagged *both* ongoing and upcoming |
| Ongoing | 9 | Includes 2 commercial (Vertica, Midori Commercial) |
| Completed | 22 | |

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

In priority order. Each one deletes a `<Reveal>` block and turns it into a real
section:

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
rejected and why. In order of authority:

1. **propstarrealty.com** — the only source publishing hard project numbers.
2. **housing.com** — blocks automated fetching (HTTP 406); only its URL slug
   could be read, which still establishes the registered name and the builder
   name as Housing records them.
3. **venkateshbuildcon.com** — first-party, and therefore authoritative on the
   *developer*. It does not list Serenique.
4. **Bavdhan locality data** — used only on the location page, and only where
   at least two sources agree.

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
| 2, 3 & 4 BHK | The stock widget offered a 1 BHK, which this project does not have. The 4 BHK was also removed on 7 August and **put back on 9 August** once the developer confirmed it. Keep `BHK_OPTIONS` in step with `configurations` in `content/project.ts`. |
| Google Fonts injection removed | It fetched Bricolage Grotesque and Plus Jakarta Sans on every page load — two families nothing rendered in, since the CSS inherits Fraunces and Manrope from `next/font`. It was also an undeclared third-party request and it blocked render on a below-the-fold widget. |

The widget is suppressed on `/thank-you`; someone who has just submitted should
not be asked for the same number again.

### Routes that deliberately do not exist yet

**`/amenities` and `/gallery`.** No amenity schedule and no renders exist. A
route whose whole body reads "coming soon" is thin content — it competes with
the home page for the same query and loses to the aggregator listings this site
is meant to outrank. Both live as `<Reveal>` blocks on the home page instead.

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
- **The JSON-LD has no `offers`, `amenityFeature`, `geo` or `aggregateRating`,
  and must not get them** until the underlying facts are published. Marking up
  a price that does not exist to win a rich result is exactly the abuse the
  structured-data guidelines target.
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
anywhere.
