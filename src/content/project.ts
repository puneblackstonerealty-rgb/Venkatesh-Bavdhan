/**
 * ALL COPY FOR THE SITE LIVES HERE.
 *
 * ─── Sources, in order of authority (re-ranked 2026-11-06) ─────────────────
 *
 *   R  MAHARERA. The developer's sworn statement to the regulator, and the
 *      one record a buyer's agreement is tied to. OUTRANKS EVERYTHING BELOW.
 *        • Project search, fetched 2026-11-06: returns "Venkatesh Serenique -
 *          Phase 1", PM1261012601412, Mulshi 411021.
 *          https://maharera.maharashtra.gov.in/projects-search-result?project_name=serenique&project_state=27&op=Search
 *        • Public general-details record, projectId 66318, fetched 2026-11-06:
 *          registered 2026-08-03, completion 2031-09-30, 393 units, "Mixed".
 *          https://maharerait.maharashtra.gov.in/public/project/view/66318
 *          (the per-tab detail view is CAPTCHA-gated: land area, the unit-type
 *          table, professionals, litigation and QPRs were NOT read.)
 *        • Form C registration certificate, dated 31/08/2026 (Correction-1),
 *          the developer-hosted copy, read in full 2026-11-06.
 *          https://venkateshbuildcon.com/wp-content/uploads/2026/10/Serenique-Rera-Certificate-2.pdf
 *
 *   D  THE DEVELOPER'S OWN WEBSITE. First-party, and the authority on
 *      everything MahaRERA does not record (land, configurations, carpet
 *      areas, amenities, specifications). Where it contradicts R, R wins and
 *      the developer's figure is recorded at the value, not published.
 *        • Project page, article:modified_time 2026-11-05, fetched 2026-11-06.
 *          https://venkateshbuildcon.com/pune/venkatesh-serenique/
 *        • Listing, Serenique card dated 27 Aug 2026, tagged ongoing.
 *          https://www.venkateshbuildcon.com/pune-projects/
 *
 *   F  THE DEVELOPER'S FLOOR PLANS, Wings A2 and A3 (uploaded Oct 2026, read
 *      2026-11-06). Each sheet carries a carpet-area statement: RERA carpet
 *      in sq m, plus a "total area" that INCLUDES the balconies. Every carpet
 *      area on this site is the RERA carpet column, converted at 10.7639 sq ft
 *      per sq m and rounded to the foot. The total area is never presented as
 *      carpet.
 *        https://venkateshbuildcon.com/wp-content/uploads/2026/10/FLOOR-PLAN-WING-A2.pdf
 *        https://venkateshbuildcon.com/wp-content/uploads/2026/10/Bavdhan-Floor-Plan-Wing-A3.pdf
 *
 *   ★  THE CLIENT, relaying the developer, 2026-08-09: 14 acres, 11 towers,
 *      3 basements + ground + podium + 27 floors, 2/3/4 BHK.
 *      ⚠ SUPERSEDED 2026-11-06. The project has since launched, and R and D
 *      contradict all four figures. By the client's standing decision
 *      (official material beats the earlier figures; spec decision 9) the
 *      official figures are printed and ★'s are not. Each replaced value is
 *      on the "changes to tell the client" list in the Task 3 report, and the
 *      value it replaced is named in the comment where it used to sit.
 *      Possible readings (a larger future masterplan; the MHADA wing) are
 *      undocumented and are not published.
 *
 *   C  THE DEVELOPER'S OLD LAUNCH CREATIVE, recovered 2026-08-07 from P's
 *      media library (watermarked, never shipped). Superseded by D. It read
 *      "PREMIUM 2 & 3 BHK HOMES", which D now confirms; its "3 PREMIUM
 *      RESIDENTIAL TOWERS" does not match R either. Only its strapline is
 *      still used, because nothing has contradicted it.
 *
 *   N  NEWS for the locality: Punekar News, Free Press Journal, Bridge
 *      Chronicle. Each is cited with its date at the value it supports.
 *
 *   L  Locality research for Bavdhan (99acres / NoBroker / SquareYards /
 *      Dwello locality pages, fetched 2026-08-07). Kept only where D does not
 *      give a figure for the same place and nothing contradicts it.
 *
 *   P  https://propstarrealty.com/property/venkatesh-serenique-bavdhan/
 *      ⚠ NO LONGER USED FOR ANYTHING. It was the source of the MahaRERA number
 *      and the "Dec 2031" possession date; R now carries both (the number was
 *      right, the date was not). Do not reinstate a figure from it.
 *
 *   H  The housing.com URL slug "shree-venkatesh-serenique-phase-1". It gave
 *      the registered name until R did. R's name is different (no "Shree"),
 *      so H is retired.
 *
 *   ✗  REJECTED: venkateshprelaunch.com and puneupcomingprojects.com
 *      (recycled boilerplate; one published the Kharadi project's developer
 *      statistics on a Bavdhan page). Also NOT USED: every broker price for
 *      this project (₹1.07 Cr to ₹2.19 Cr on propkeepers / propstar, LOW) and
 *      the developer page's own "Starting from 2.9 to 5 CR (All Inclusive)",
 *      which is the same string as on its Skydale page and so is not a
 *      Serenique price (spec decision 11). Price stays on request.
 *
 * ─── Standing rule ─────────────────────────────────────────────────────────
 *
 * The project launched in 2026 and the developer has now published plans,
 * carpet areas, amenities, specifications, renders and a brochure. The one
 * thing still unpublished is a PRICE LIST, and the site says so rather than
 * borrowing one. Nothing on this page is invented to fill a gap. If you are
 * adding a figure here, it needs a source comment beside it.
 *
 * Phase-level MahaRERA facts are labelled "Phase 1" wherever they are printed.
 * They describe the registered phase, not the 9.75-acre parcel as a whole.
 */

/**
 * Phase 1 as MahaRERA records it.
 *
 * Everything here is R unless a comment says otherwise. Pages, the footer,
 * the FAQ, JSON-LD and /llms.txt read these values; do not retype them.
 */
export const phase1 = {
  label: 'Phase 1',
  /* R: Form C, 31 Aug 2026; MahaRERA search, 2026-11-06. The number was on
     this site since August, taken from P and flagged as a likely typo of a
     "PR" number. It is not: "PM" is a current MahaRERA prefix, and the
     portal returns this record for it. */
  reraId: 'PM1261012601412',
  /* R: Form C, 31 Aug 2026, verbatim, including its spacing. Was "Shree
     Venkatesh Serenique Phase 1" (H). The portal's search list prints it as
     "Venkatesh Serenique - Phase 1"; searching "Serenique" finds it. */
  registeredName: 'VENKATESH SERENIQUE- PHASE -1',
  /* R: Form C promoter, "SHREE VENKATESH BUILDCON PVT LTD". */
  promoter: 'Shree Venkatesh Buildcon Pvt. Ltd.',
  /* R: registration valid from 03/08/2026 (Form C; public record). */
  registeredOn: '3 August 2026',
  /* R: Form C p.3, "Correction-1" u/s 14(2), approved 31/08/2026. What was
     corrected is not stated anywhere public. */
  correctedOn: '31 August 2026',
  /* R: registration valid to, and original completion date, 30/09/2031. No
     extension. Was "Dec 2031" (P). */
  completion: '30 September 2031',
  completionShort: 'Sep 2031',
  /* R: Form C, "Survey No- 34, HISSA NO. 1/1/1 at Bavdhan Khurd, Mulshi,
     Pune, 411021". */
  plot: 'Survey No. 34, Hissa No. 1/1/1, Bavdhan Khurd, Taluka Mulshi, Pune 411021',
  /* The street part of `plot`, for structured-data addresses. */
  plotStreet: 'Survey No. 34, Hissa No. 1/1/1, Bavdhan Khurd',
  /* R: Form C annexure. One building, "BUILDING - A". */
  building: 'Building A',
  /**
   * R: Form C annexure, 31 Aug 2026. `units` is the annexure's "Number of
   * Units (Residential + Non-Residential)" per wing. `ccFloors` is the floor
   * up to which the commencement certificate is issued.
   *
   * `homesPerTypicalFloor`, `lifts` and `refugeFloors` are F (the floor
   * plans), not R. Wing A1's three units are not drawn in any published
   * plan, so their type is unknown.
   */
  wings: [
    { id: 'A1', habitableFloors: 1, units: 3, ccFloors: 8 },
    {
      id: 'A2',
      habitableFloors: 27,
      units: 210,
      ccFloors: 34,
      homesPerTypicalFloor: 8,
      lifts: '4 passenger lifts and 1 fire lift',
    },
    {
      id: 'A3',
      habitableFloors: 28,
      units: 167,
      ccFloors: 35,
      homesPerTypicalFloor: 6,
      lifts: '3 passenger lifts and 1 fire lift',
    },
  ],
  /* R: Wings A1 + A2 + A3 = 3 + 210 + 167. This is the "380 homes" this site
     deleted in August as impossible against ★'s 11 towers; it is the Phase 1
     residential count exactly, and is restored as a Phase 1 figure.
     CONFLICT (not published): D's page says "552 Flats & 13 Showrooms" for
     the project. R wins for Phase 1; what the 552 covers (the MHADA wing?
     later wings?) is undocumented. On the client list. */
  homes: 380,
  /* R: the "COMMERCIAL SHOWROOMS/SHOPS" wing, 13 units, one floor. D says
     "13 Showrooms", which agrees. */
  shops: 13,
  /* R: public record totalNumberOfUnits 393. */
  units: 393,
  /* F: refuge floors in both wings. The 19th floor carries the fire tank and
     pump room (7 homes in A2, 5 in A3). */
  refugeFloors: [5, 10, 15, 20, 25],
  /* D: "Total 9.75 Acre Land Parcel. Phase 1: 3.75 Acres. Phase 2: 6 Acres
     (Future Development)", page modified 2026-11-05. Not R: MahaRERA's land
     tab is CAPTCHA-gated. Replaces ★'s 14 acres. The adjoining parcel is
     Survey 34/1/1/2 on D's master layout; Phase 2 is NOT registered. */
  landAcres: '3.75',
  parcelAcres: '9.75',
  futureAcres: '6',
  /**
   * R: Form C annexure parking table, as filed.
   * ⚠ Wing A1 (3 units) shows exactly the same figures as Wing A3 (292 / 164
   * / 14 / 470). That may be a filing quirk; it is recorded, not interpreted,
   * and the totals below include it. Do not publish these totals without
   * saying so.
   */
  parking: {
    perWing: [
      { wing: 'Shops', twoWheeler: 43, fourWheeler: 14, visitor: 4, total: 61 },
      { wing: 'A1', twoWheeler: 292, fourWheeler: 164, visitor: 14, total: 470 },
      { wing: 'A2', twoWheeler: 409, fourWheeler: 280, visitor: 17, total: 706 },
      { wing: 'A3', twoWheeler: 292, fourWheeler: 164, visitor: 14, total: 470 },
    ],
    totals: { twoWheeler: 1036, fourWheeler: 622, visitor: 49, total: 1707 },
  },
}

export const site = {
  name: 'Venkatesh Serenique',
  shortName: 'Serenique',
  /* R. See phase1.registeredName. This is what a buyer verifying on the
     portal will see on the certificate. */
  registeredName: phase1.registeredName,

  /* RESOLVED 2026-08-07, CONFIRMED 2026-11-06 — developer identity.
     In August this rested on the developer's own logo artwork reading
     "SHREE VENKATESH BUILDCON PVT. LTD. — ANKUSH ASABE VENTURE". It is now
     on the regulator's record: R names SHREE VENKATESH BUILDCON PVT LTD as
     promoter, D's footer reads "© 2026 Shree Venkatesh Buildcon Pvt. Ltd.",
     and the entrance render on D carries "VENKATESH BUILDCON BY ANKUSH
     ASABE". The trading name below is the short form the developer uses on
     its own site; `developerLegalName` carries the registered form. */
  developer: 'Venkatesh Buildcon',
  developerLegalName: phase1.promoter,
  developerByline: 'An Ankush Asabe venture',
  developerSite: 'https://www.venkateshbuildcon.com',
  /* The developer's mark, full colour, confirmed by the client as the correct
     current logo. A greyscale vector of the same mark is kept alongside at
     /brand/venkatesh-buildcon.svg for any future single-colour use. */
  developerLogo: '/brand/venkatesh-buildcon.png',

  locality: 'Bavdhan, Pune',
  /* R: Bavdhan Khurd, Mulshi, 411021 (Form C). D: "Bavdhan, near Chandni
     Chowk, West Pune". Was "Bavdhan, Pune, Maharashtra". The full survey
     number is phase1.plot. No coordinates have been published, so the map is
     still a locality embed (see `location`). */
  address: 'Bavdhan Khurd, near Chandani Chowk, Pune, Maharashtra 411021',
  attribution: 'BAVDHAN · PUNE WEST',

  /* Serenique's own line, given by the client 2026-08-09. It replaces the
     number carried over from the Kharadi site, so calls from this project are
     now distinguishable from that one.

     `phone` is what tel: links dial and must stay E.164; it is never shown.
     `phoneDisplay` is the client's own formatting and is used verbatim
     everywhere the number appears. The two are deliberately not derived from
     each other, so changing one without the other is possible — don't.

     ⚠ This number is also the `telephone` on the RealEstateAgent JSON-LD.
     Search engines treat a phone number as part of the business identity, so
     if it changes again, it has to change here and be redeployed rather than
     patched on one page. */
  phone: '+918167816797',
  phoneDisplay: '8167 8167 97',
  leadEmail: 'pune.blackstonerealty@gmail.com',

  /* ⚠ CONFIRM — the chat widget's persona.
     This is a persona, not a named employee, which is how the sibling Kharadi
     site runs the same widget. Replace it with a real member of the Blackstone
     Realty team before launch, or keep it and be comfortable that a visitor
     asked to give a phone number is talking to a name that is not a person.
     Changing it here changes the launcher label, the header, the teaser and
     the message attribution — nothing else references it. */
  chatAgentName: 'Sneha Kulkarni',
}

/**
 * The home page's <title> and meta description, the share-card alt text and
 * the project description in the JSON-LD. Kept here rather than in
 * layout.tsx / structured-data.tsx so the figures in them are read from the
 * same values as the page, not retyped.
 *
 * `title` must stay under 65 characters and `description` between 70 and 165
 * (`npm run audit` checks both).
 */
export const siteMeta = {
  /* D: "Premium 2 & 3 BHK Residences". Was "2, 3 & 4 BHK Pre-Launch" (★). */
  title: 'Venkatesh Serenique Bavdhan | 2 & 3 BHK Homes, Pune',
  /* F for the carpet area, R for the rest. */
  description: `${phase1.label} near Chandani Chowk, Bavdhan: 2 & 3 BHK from 706 sq ft RERA carpet, ${phase1.homes} homes, MahaRERA ${phase1.reraId}, completion ${phase1.completionShort}.`,
  ogAlt: 'Venkatesh Serenique, 2 & 3 BHK homes near Chandani Chowk, Bavdhan, Pune',
  schemaDescription: `Residential development by Venkatesh Buildcon near Chandani Chowk, Bavdhan, Pune. ${phase1.label}, MahaRERA ${phase1.reraId}, is one building of three residential wings with ${phase1.homes} homes and ${phase1.shops} shops, in 1, 2, 2.5 and 3 BHK configurations, with a declared completion date of ${phase1.completion}. Prices are on request.`,
}

/**
 * Real routes, not anchors.
 *
 * ⚠ There is still no /amenities and no /gallery. Until November 2026 that
 * was because no amenity schedule and no renders existed. They now do (D),
 * so both routes are due: build the route, delete the matching entry from
 * `reveals`, add it to sitemap.ts and add it here. All four, or it will not
 * be crawled. Until then the material is summarised in the reveal blocks and
 * listed in full in `amenities` and `specifications` below.
 */
export const nav = [
  { href: '/configurations', label: 'Homes' },
  { href: '/location', label: 'Location' },
  { href: '/about-developer', label: 'Developer' },
  { href: '/updates', label: 'Updates' },
  { href: '/contact', label: 'Contact' },
] as const

export const hero = {
  /* D: "Now launched" (project page, modified 2026-11-05); listed as ongoing
     on D's listing since 27 Aug 2026. R: registered 3 Aug 2026.
     Was "PRE-LAUNCH · REGISTRATIONS OPEN". */
  badge: 'NOW LAUNCHED · MAHARERA REGISTERED',
  title: 'Venkatesh Serenique',
  subtitle: 'BAVDHAN, PUNE',
  /* D: "Premium 2 & 3 BHK Residences" (page body); "3 & 2 BHK SERENE
     RESIDENCES" on the official logo. This is also C verbatim, so the old
     creative was right after all. Was "Premium 2, 3 & 4 BHK Homes" (★).
     The 1 BHK and 2.5 BHK homes on the refuge floors (F) are a handful in a
     380-home phase and are named in the configurations, not the headline.
     CONFLICT (not used): D's own meta title says "3 & 4 BHK"; no published
     plan contains a 4 BHK. */
  tagline: 'Premium 2 & 3 BHK Homes',
  /* C, the developer's own words. D's current line is "A New Beginning. A
     Serene Way of Life."; this one is kept because nothing contradicts it
     and it avoids echoing the name of the developer's Kharadi campaign. */
  strapline: 'A life of serenity. A home that defines you.',
  /* R. Was "14 acres · 11 towers · 3B + G + P + 27 floors" (★). */
  taglineSub: `${phase1.label} · 3 residential wings · ${phase1.homes} homes + ${phase1.shops} shops`,
  facts: [
    /* D: "Phase 1: 3.75 Acres", page modified 2026-11-05. Was "Land Parcel:
       14 Acres" (★). */
    { label: 'Phase 1 Land', value: `${phase1.landAcres} Acres` },
    /* R: Form C annexure, 31 Aug 2026. Was "Towers: 11" (★); Phase 1 is one
       building of three residential wings, which is in `taglineSub`. */
    { label: 'Phase 1 Homes', value: String(phase1.homes) },
    /* R: 27 sanctioned habitable floors in Wing A2, 28 in Wing A3. D says
       "28-Storeyed Towers". Was "G + 27" (★, with three basements, which
       no official source confirms; D shows podium parking above ground). */
    { label: 'Floors', value: 'Up to 28' },
    /* R: completion 30/09/2031. Was "Possession: Dec 2031" (P). */
    { label: 'RERA Completion', value: phase1.completionShort },
  ],
  /* No price is published by the developer for Serenique. D's "Starting
     from 2.9 to 5 CR" is a template string shared with its Skydale page and
     is NOT used (spec decision 11); broker figures are not used either. */
  priceLabel: 'Price',
  price: 'On Request',
  priceNote: 'Ask for the current price list',
  cta: 'Register Your Interest',
  ctaSecondary: 'Request the Price List',
}

/**
 * The five-point strip along the foot of the hero.
 *
 * Until November 2026 this was the strip from C, the old launch creative.
 * It is now D's own project highlights, in the developer's words where they
 * fit a line.
 */
export const featureStrip = [
  /* D: "Total 9.75 Acre Land Parcel | Phase 1: 3.75 Acres". Was "11 Premium
     Residential Towers" (★ via C). */
  { id: 'phase', label: `Phase 1 of a ${phase1.parcelAcres}-Acre Parcel` },
  /* D: "Premium 2 & 3 BHK Residences". Was "2, 3 & 4 BHK Homes" (★). */
  { id: 'homes', label: 'Premium 2 & 3 BHK Homes' },
  /* R: 27 and 28 habitable floors. D: "28-Storeyed Towers". Was C's
     "Thoughtfully Planned Lifestyle". */
  { id: 'storeys', label: 'Up to 28 Habitable Floors' },
  /* D: "20+ amenities"; "40,000 Sq. Ft. of Grand Indoor & Outdoor
     Amenities". Was C's "Premium Amenities for All Age Groups". */
  { id: 'amenities', label: '20+ Amenities, Ground & Podium' },
  /* D: "Bavdhan, near Chandni Chowk". Was "Bavdhan, Pune". */
  { id: 'where', label: 'Near Chandani Chowk, Bavdhan' },
]

/* Scale is R and D (see each figure's source in `phase1`). The locality
   paragraph is unchanged and is source L. */
export const overview = {
  eyebrow: 'The Project',
  heading: 'A quiet address in Pune West',
  body: [
    /* R: building, wings, homes, shops. D: 3.75 of 9.75 acres, 2 & 3 BHK.
       F: the 1 BHK and 2.5 BHK on the refuge floors. Was "Eleven towers
       stand on 14 acres ... 2, 3 and 4 BHK homes" (★). */
    `Venkatesh Serenique is a launched residential development near Chandani Chowk in Bavdhan. Its first phase, registered with MahaRERA, is a single building of three residential wings above a parking podium, with ${phase1.homes} homes and ${phase1.shops} shops on ${phase1.landAcres} acres of a ${phase1.parcelAcres}-acre parcel. The homes are 2 and 3 BHK, with a few 1 BHK and 2.5 BHK homes on the refuge floors.`,
    'The Sahyadri foothills rise immediately west of the suburb. Bavdhan itself sits close enough to Kothrud, Baner and Hinjawadi that residents reach all three without driving through the middle of Pune.',
  ],
  /**
   * The full structure, written out, for wherever a sentence has room.
   * R: 27 / 28 habitable floors. D and its renders: podium parking. The
   * number of parking levels is NOT stated, because D gives two ("6-Level
   * Parking" and "4 levels of parking") on the same page.
   * Was "three basements, ground, podium and 27 floors" (★).
   */
  structure: 'a parking podium with 27 habitable floors in Wing A2 and 28 in Wing A3',
}

export const highlights = {
  badge: 'AT A GLANCE',
  /* Every line traceable to R, D, F or the locality sources in `location`.
     Nothing aspirational. */
  items: [
    /* D, 2026-11-05. Was "14 acres at Bavdhan, Pune West" (★). */
    `${phase1.label} on ${phase1.landAcres} of ${phase1.parcelAcres} acres near Chandani Chowk`,
    /* R. Was "Eleven towers of three basements, ground, podium and 27
       floors" (★). */
    'One building, three residential wings, up to 28 habitable floors',
    /* R. New: the unit count was removed in August and is restored here. */
    `${phase1.homes} homes and ${phase1.shops} shops in ${phase1.label}`,
    /* D and F. Was "2, 3 and 4 BHK homes" (★). */
    '2 and 3 BHK homes, with 1 BHK and 2.5 BHK on refuge floors',
    /* R. */
    `MahaRERA ${phase1.reraId}, completion ${phase1.completion}`,
    'Chandani Chowk, NH-48 and Paud Road in the immediate catchment',
    'Vanaz metro station on the Aqua Line under 4 km away',
    /* D: distance bands on the project page, 2026-11-05. Was "Hinjawadi IT
       Park roughly 14 km, Kothrud and Baner 5 to 7 km" (L). */
    'Kothrud and Baner 2 to 5 km, Hinjawadi IT Park 8 to 12 km',
  ],
  cta: 'Get the Full Project Details',
}

/**
 * The release ledger — what the developer has actually issued, and what it
 * has not.
 *
 * Until November 2026 most rows here were "Awaited". The project has since
 * launched and almost everything is out; the price list is the one row still
 * unreleased. The ledger stays because it is still the fastest honest answer
 * to "what is actually known", and because the thank-you page reads its
 * unreleased rows as the list of what we will send.
 *
 * Values are short on purpose: they sit in a narrow right-hand column.
 */
export const releaseStatus = {
  heading: 'What has been released',
  note: 'Checked against MahaRERA and the developer’s own website on 6 November 2026.',
  items: [
    /* R. */
    { id: 'rera', label: 'MahaRERA registration', value: phase1.label, released: true },
    /* D and F. Was "2, 3 & 4 BHK" (★). */
    { id: 'config', label: 'Configurations', value: '1, 2, 2.5 & 3 BHK', released: true },
    /* R. Was "Towers: 11" (★). */
    { id: 'scale', label: 'Residential wings', value: 'A1, A2 & A3', released: true },
    /* R. Was "Floors per tower: 3B + G + P + 27" (★). */
    { id: 'structure', label: 'Habitable floors', value: '27 and 28', released: true },
    /* D. Was "Land parcel: 14 acres" (★). */
    { id: 'land', label: 'Phase 1 land', value: `${phase1.landAcres} acres`, released: true },
    /* R. Was "Total homes: Awaited". */
    {
      id: 'homes',
      label: 'Phase 1 homes',
      value: `${phase1.homes} + ${phase1.shops} shops`,
      released: true,
    },
    /* F. Was "Awaited". */
    { id: 'areas', label: 'Carpet areas', value: 'Published', released: true },
    /* D, F. Was "Awaited". */
    { id: 'plans', label: 'Floor & master plans', value: 'Published', released: true },
    /* D. Was "Awaited". */
    { id: 'amenities', label: 'Amenity schedule', value: 'Published', released: true },
    /* D: renders and a brochure (filename dated 8 Oct) on the project page.
       Was "Awaited". */
    { id: 'imagery', label: 'Renders & brochure', value: 'Published', released: true },
    /* R. New row. */
    { id: 'completion', label: 'RERA completion', value: '30 Sep 2031', released: true },
    /* Still not published by D. Broker figures and D's template string are
       not a price list (see the source header). */
    { id: 'price', label: 'Price list', value: 'On request', released: false },
  ],
}

/* The map, the distance list and the configuration cards carry no footnote by
   client instruction. The provenance of every figure is still recorded in this
   file — it is simply not printed under the section any more. */

/**
 * The reveal blocks.
 *
 * Each is a lead capture in the site's existing design. Until November 2026
 * they stood in for material that did not exist. It now does, so the copy
 * says what has been published and offers to send it; Task 6 replaces the
 * amenities and gallery blocks with real sections built from the developer's
 * own renders and plans. When that happens, delete the entry here.
 */
export const reveals = {
  configurations: {
    eyebrow: 'Floor Plans',
    /* F. Was "Layouts and carpet areas are not yet released". */
    heading: 'The Wing A2 and A3 floor plans are out',
    body: 'The developer has published typical, refuge and 19th-floor plans for Wings A2 and A3, each with a RERA carpet-area statement. Tell us which home you are considering and we will send its plan with the carpet area and the current price.',
    cta: 'Get Floor Plans',
  },
  pricing: {
    eyebrow: 'Pricing',
    /* D has published no price list for Serenique. */
    heading: 'The price list is shared on request',
    body: 'The developer has not published a price list for Serenique, and the prices quoted on listing sites do not come from the developer. Ask us and we will send the current price for the home you are considering.',
    cta: 'Request the Price List',
  },
  amenities: {
    eyebrow: 'Lifestyle',
    /* D: "20+ amenities", split ground / podium. Was "Premium amenities for
       all age groups" (C) with "no amenity schedule has been published". */
    heading: 'Over 20 amenities, on the ground and on the podium',
    body: 'The developer’s amenity plan puts a swimming pool with a vanishing edge, a kids’ pool, a gym, a multipurpose court, box cricket, a co-working lounge, a creche and a 1.5 m jogging track on the podium, with a pet park, a herbal garden, a festival lawn and a mini amphitheatre at ground level. Ask for the podium plan and the full list.',
    cta: 'Get the Amenity Plan',
  },
  gallery: {
    eyebrow: 'Imagery',
    /* D: renders, master layout, cluster plan and podium amenity plan. Was
       "Renders and the master plan are awaited". */
    heading: 'Renders and the master layout are out',
    body: 'The developer has issued renders of the Phase 1 building, a master layout, a cluster plan and a podium amenity plan. Any image on this site will be the developer’s own and labelled as an artistic impression. Ask for the brochure and we will send it.',
    cta: 'Get the Brochure',
  },
}

export type Configuration = {
  id: string
  type: string
  /** RERA carpet, in sq ft. null only if the developer has not published one. */
  area: string | null
  price: string | null
  note: string
}

export const configurations = {
  heading: 'Configurations',
  /* D and F. Was "planned as 2, 3 and 4 BHK homes across eleven towers ...
     The developer has not published carpet areas or pricing yet" (★). */
  intro:
    'Phase 1 has 2 and 3 BHK homes across Wings A2 and A3, with a few 1 BHK and 2.5 BHK homes on the refuge floors. The carpet areas below are the RERA carpet areas printed on the developer’s floor plans. Prices are shared on request.',
  /* Page metadata for /configurations. The title is kept under 60
     characters INCLUDING the "| Venkatesh Serenique" the layout appends. */
  metaTitle: '2 & 3 BHK: Carpet Areas & Price',
  metaDescription:
    'Venkatesh Serenique Phase 1, Bavdhan: 2 BHK of 706 to 725 sq ft and 3 BHK of 1,021 to 1,024 sq ft RERA carpet, plus 1 BHK and 2.5 BHK. Prices on request.',
  /* What the card prints in its "Floor plan" row. F. Was "Awaited". */
  planStatus: 'On request',
  /* The lede over the scale ledger on /configurations. R and D. Was "Eleven
     towers of three basements, ground, podium and 27 floors, on 14 acres at
     Bavdhan" (★). */
  scaleLede: `${phase1.label} is one building of three residential wings, ${overview.structure}, on ${phase1.landAcres} acres of a ${phase1.parcelAcres}-acre parcel.`,
  /* F, read 2026-11-06. Every `area` is the RERA carpet column of the
     carpet-area statement, converted at 10.7639 sq ft per sq m and rounded.
     The "total area" in each note is the plan's own sq ft column, which
     includes the balconies; it is printed so a buyer can match it against
     the figures listing sites quote as "carpet".

     The 4 BHK that used to be the third card (★) is gone: no published
     Phase 1 plan contains one. Per-type unit counts are deliberately absent:
     no source states them, and the plans do not reconcile with R's Wing A3
     total (167) on their own. */
  items: [
    {
      id: '2bhk',
      type: '2 BHK',
      /* F: A2 65.57 / 65.65 / 66.77 / 67.08 sq m; A3 66.86 / 66.93 / 67.25 /
         67.35 sq m. Total area 789 to 805 (A2), 802 to 808 (A3). */
      area: '706 to 725 sq ft',
      price: null,
      note: 'Wings A2 and A3. RERA carpet 65.57 to 67.35 sq m. The plan’s total area, with balconies, is 789 to 808 sq ft.',
    },
    {
      id: '3bhk',
      type: '3 BHK',
      /* F: A3 94.85 / 95.12 sq m. Total area 1,123 / 1,126 sq ft. */
      area: '1,021 to 1,024 sq ft',
      price: null,
      note: 'Wing A3. RERA carpet 94.85 to 95.12 sq m. The plan’s total area, with balconies, is 1,123 to 1,126 sq ft.',
    },
    {
      id: '2-5bhk',
      type: '2.5 BHK',
      /* F: A2 refuge floors, Series 2, 83.62 sq m; total 983 sq ft. */
      area: '900 sq ft',
      price: null,
      note: 'Wing A2, on the refuge floors only. RERA carpet 83.62 sq m. The plan’s total area, with balconies, is 983 sq ft.',
    },
    {
      id: '1bhk',
      type: '1 BHK',
      /* F: A3 refuge floors, Series 5, 48.98 sq m; total 582 sq ft. */
      area: '527 sq ft',
      price: null,
      note: 'Wing A3, on the refuge floors only. RERA carpet 48.98 sq m. The plan’s total area, with the balcony, is 582 sq ft.',
    },
  ] satisfies Configuration[],
  cta: 'Register for Areas & Pricing',
}

/**
 * The developer's amenity list, verbatim in substance, from D's project page
 * (modified 2026-11-05). D: "20+ amenities"; "40,000 Sq. Ft. of Grand Indoor
 * & Outdoor Amenities". The podium amenity plan image on D numbers 23 keys
 * but carries no legend, so this list is the authority, not the image.
 *
 * Not yet rendered as its own section; /amenities (Task 6) should read it.
 */
export const amenities = {
  summary: 'More than 20 amenities across 40,000 sq ft, indoor and outdoor',
  ground: [
    'Pet park',
    'Bird-attracting trees',
    'Herbal garden',
    'Sculpture herbal garden',
    'Cove seat',
    'Dense plantation',
    'Mini amphitheatre',
    'Festival lawn',
    'Flag pole',
  ],
  podium: [
    'Swimming pool with a vanishing edge',
    'Kids’ pool',
    'Gym and multifit gym',
    'Indoor games',
    'Multipurpose court',
    'Box cricket',
    'Yoga and meditation lawn',
    'Aerobics and zumba',
    'Pergola',
    'Floating seat',
    'Creche',
    'Toddlers’ play area',
    'Co-working lounge',
    'Reading lounge',
    'Chit-chat plaza and cove seating',
    '1.5 m jogging track',
  ],
}

/**
 * The developer's specifications, from D's project page (modified
 * 2026-11-05). Brand names are the developer's, with its own "or
 * equivalent" where it gave one.
 *
 * ⚠ The water line is the developer's own wording and matters to buyers:
 * supply is PMC water, borewell AND chargeable tankers. Do not soften it.
 * Power backup is for common areas only, not the flats.
 */
export const specifications = [
  {
    id: 'structure',
    label: 'Structure',
    items: ['Earthquake-resistant RCC frame', 'Aluform walls', '150 mm AAC blocks'],
  },
  {
    id: 'lifts',
    label: 'Lifts',
    items: ['Kone, Otis, Schindler or equivalent, with generator backup'],
  },
  {
    id: 'safety',
    label: 'Safety',
    items: ['Firefighting system as per PMC norms', 'Video door phone'],
  },
  {
    id: 'power',
    label: 'Power',
    items: [
      '100% DG backup for common areas',
      'AC points in the living room and all bedrooms',
      'Inverter provision',
    ],
  },
  {
    id: 'finishes',
    label: 'Flooring & kitchen',
    items: ['600 x 1200 or 800 x 800 floor tiles', 'Artificial granite kitchen platform'],
  },
  {
    id: 'bathrooms',
    label: 'Bathrooms',
    items: ['Jaquar or Kohler CP fittings', 'CPVC plumbing', 'Grid false ceiling'],
  },
  {
    id: 'water',
    label: 'Water',
    items: ['PMC water supply, borewell and water tankers (chargeable)'],
  },
]

export const location = {
  heading: 'Location & Connectivity',
  /* Page metadata for /location. D for the distances. Was "... Kothrud and
     Baner 5 to 7 km, Hinjawadi about 14 km" (L). */
  metaDescription:
    'Bavdhan, Pune West, near Chandani Chowk. Vanaz Metro under 4 km, Kothrud and Baner 2 to 5 km, and Hinjawadi IT Park 8 to 12 km, by the developer’s own figures.',
  paragraphs: [
    'Bavdhan occupies Pune’s western edge, a short run from the Chandani Chowk junction where Paud Road meets National Highway 48 and the Mumbai to Pune Expressway. Very few Pune suburbs put Kothrud, Baner, Aundh and Hinjawadi within reach without a drive through the centre. This one does.',
    /* N, replacing "The flyover at Chandani Chowk ... has taken much of the
       sting out ... Metro Phase 2 has been approved to extend into the area"
       (L, Aug 2026), which was out of date on both counts:
         • Interchange inaugurated 12 Aug 2023 (Punekar News, 12 Aug 2023,
           https://www.punekarnews.in/pune-chandni-chowk-flyover-inaugurated-gadkari-asks-ajit-pawar-and-chandrakant-patil-to-recommend-name-for-the-flyover/).
         • Vanaz to Chandani Chowk metro works under way from April 2026
           (Punekar News, 23 Apr 2026, https://www.punekarnews.in/vanaz-chandni-chowk-pune-metro-extension-work-starts-boost-for-kothrud-connectivity/).
         • Heavy vehicles and buses barred from Chandani Chowk towards
           Kothrud Depot during the works (Punekar News, 28 Oct 2026,
           https://www.punekarnews.in/?p=247961).
         • Metro Line 3 open to passengers 4 Nov 2026; Baner Gaon,
           Baner-Pashan Link Road and Balewadi Phata among the six stations
           not yet open (Free Press Journal, updated 31 Oct 2026,
           https://www.freepressjournal.in/pune/pune-metro-line-3-hinjawadi-shivajinagar-route-to-open-on-nov-4-timings-ticket-fares-special-features-and-more).
       Re-check the station status before quoting it after January 2027. */
    'The Chandani Chowk interchange opened in August 2023 and untangled the old junction, but the roads around it are busy again. Metro works extending the Aqua Line from Vanaz to Chandani Chowk have been under way since April 2026, and since 28 October 2026 heavy vehicles and buses have been kept off the Chandani Chowk to Kothrud Depot stretch while they continue. Vanaz station sits under 4 km away, and Metro Line 3 to Hinjawadi opened on 4 November 2026, though its Baner and Balewadi stations are not yet open.',
  ],
  /* ⚠ A LOCALITY map, not a plot pin. The plot is now on record (R:
     phase1.plot, Survey No. 34, Hissa No. 1/1/1, Bavdhan Khurd), but no
     coordinates have been published by anyone, so the frame is still centred
     on Bavdhan rather than on a point we would be guessing at. The on-page
     caption saying so was removed at the client's request, so this comment
     is the only record of it. Replace the query with coordinates once the
     developer or the client supplies them. */
  mapEmbed: 'https://maps.google.com/maps?q=Bavdhan%2C%20Pune%2C%20Maharashtra&z=14&output=embed',
  mapTitle: 'Bavdhan, Pune locality map',

  connectivityHeading: 'Distances from Bavdhan',
  /* Every one of these is a DISTANCE, not a drive time. Real-estate
     microsites publish invented drive times as a matter of course; this site
     does not, and the two times L used to supply are gone with the distances
     they came with.
     D = the developer's distance bands on its project page (2026-11-05),
     measured from the project. L = locality research, August 2026, measured
     from the suburb, kept only where D gives nothing for the same place. */
  pois: [
    /* D: "within 2 KMs". New. */
    { name: 'Ryan International School', value: 'within 2 km' },
    /* D: "within 2 KMs". New. */
    { name: 'Chellaram Hospital', value: 'within 2 km' },
    /* L; consistent with D, which puts Vanaz Metro in its 2 to 5 km band. */
    { name: 'Vanaz Metro Station (Aqua Line)', value: 'under 4 km' },
    /* D: Kothrud, City Pride Kothrud and Baner in the 2 to 5 km band. Was
       "5 to 7 km" (L). */
    { name: 'Kothrud & Baner', value: '2 to 5 km' },
    /* L, not re-verified. CONFLICT: D lists a "Sahyadri Hospital" within
       2 km without naming the branch. Kept as L until the branch is known. */
    { name: 'Sahyadri Hospital, Kothrud', value: 'about 4 km' },
    /* L, not re-verified; not on D's list. */
    { name: 'Jupiter Hospital, Baner', value: 'about 6 km' },
    /* D: 5 to 8 km band. New. */
    { name: 'Mumbai to Pune Expressway', value: '5 to 8 km' },
    /* D: 8 to 12 km band. Was "14 km, about 30 min" (L). */
    { name: 'Hinjawadi IT Park', value: '8 to 12 km' },
    /* D: "12 KM & Above" in its list. Was "about 30 min" (L).
       CONFLICT: the same page's headline tile says "10 km Airport"; the list
       band is used because it is the more conservative of the two. */
    { name: 'Pune International Airport', value: 'over 12 km' },
  ],
  /**
   * D's distance bands in full, as printed on the project page (2026-11-05),
   * for articles that discuss them. Names are D's own spelling.
   * ⚠ D's headline tiles on the same page are inconsistent with this list
   * (airport "10 km", train station "2 km") and are NOT used.
   */
  developerBands: [
    {
      band: 'Within 2 km',
      places: ['SNBP Bavdhan', 'Suryadatta College', 'Ryan International School', 'Sahyadri Hospital', 'Bavdhan Medicare Centre', 'Chellaram Hospital'],
    },
    {
      band: '2 to 5 km',
      places: ['Kothrud', 'City Pride Kothrud', 'Chandani Chowk ST bus terminal', 'Vanaz Metro', 'GG International School', 'MIT College Kothrud', 'Paud/NDA Road', 'Baner'],
    },
    {
      band: '5 to 8 km',
      places: ['Mumbai to Pune Expressway', 'Reliance Market', 'Balewadi Stadium', 'Deenanath Mangeshkar Hospital', 'Flames University', 'Central Mall', 'Pavilion Mall'],
    },
    {
      band: '8 to 12 km',
      places: ['DMart', 'Pawar Public School', 'Hinjawadi IT Park', 'E-Square', 'Phoenix Mall of the Millennium', 'Seasons Mall'],
    },
    { band: '12 km and above', places: ['Pune Airport', 'Spot 18 Mall'] },
  ],
  groupsHeading: 'In the neighbourhood',
  /* Named without distances, because the sources name them without distances.
     Inventing a "3 minutes" for each is precisely the habit this file exists
     to avoid. */
  groups: [
    {
      id: 'schools',
      label: 'Schools & colleges',
      items: [
        /* D, within 2 km. */
        'Ryan International School',
        /* D, within 2 km. New. */
        'SNBP, Bavdhan',
        /* D, within 2 km. New. */
        'Suryadatta College',
        /* D, 2 to 5 km. New. */
        'GG International School',
        /* L, not re-verified. */
        'The Orchid School',
        /* L, not re-verified. */
        'Mercedes-Benz International School',
        /* L. Its address is 576 Bhukum, Tal. Mulshi (uniapply, LOW), so the
           suburb is now named. Was "Indus International School". */
        'Indus International School, Bhukum',
        /* REMOVED: "Vibgyor High, Bavdhan". VIBGYOR's own Pune campus list
           has no Bavdhan campus (https://vibgyorhigh.com/schools/pune,
           fetched 2026-11-06). */
      ],
    },
    {
      id: 'healthcare',
      label: 'Healthcare',
      items: [
        /* D, within 2 km. */
        'Chellaram Hospital',
        /* D, within 2 km. New. */
        'Bavdhan Medicare Centre',
        /* L. See the CONFLICT note on the matching distance above. */
        'Sahyadri Hospital, Kothrud',
        /* L, not re-verified. */
        'Jupiter Hospital, Baner',
        /* Was "Manipal Hospital, Pashan". The hospital is Manipal Hospital
           Baner, Veerbhadra Nagar, Baner to Mhalunge Road, 411045 (Punekar
           News, https://www.punekarnews.in/?p=117406, read 2026-11-06). */
        'Manipal Hospital, Baner',
        /* D, 5 to 8 km. New. */
        'Deenanath Mangeshkar Hospital',
      ],
    },
    {
      id: 'retail',
      label: 'Everyday & retail',
      /* L for the first three, not re-verified. City Pride: D, 2 to 5 km.
         REMOVED: "D-Mart". D puts DMart in its 8 to 12 km band, which is not
         the neighbourhood. */
      items: ['Aditya Shagun Mall', 'Vishal Shopping Complex', 'Bandal Dhankude Plaza', 'City Pride, Kothrud'],
    },
    {
      id: 'transit',
      label: 'Roads & transit',
      items: [
        'Chandani Chowk junction & flyover',
        /* D, 2 to 5 km. New. */
        'Chandani Chowk ST bus terminal',
        'National Highway 48',
        'Paud Road',
        'Mumbai to Pune Expressway',
        'Vanaz Metro Station (Aqua Line)',
      ],
    },
  ],
  cta: 'Book a Site Visit',
}

/**
 * The developer.
 *
 * Everything here is from D — the developer's own website — and is therefore
 * first-party and safe.
 *
 * ⚠ Note what is still NOT here: no "50+ projects", no "20+ cities", no
 * "10,000+ happy families". Those appear on a developer corporate-profile card
 * carried by one of the two REJECTED reference sites. D's own figures also
 * disagree with each other (6,000+ or 6.5K+ families; 7M or 10M+ sq ft
 * delivered, depending on the page, as of 2026-11-06), so none of them is
 * published. The single figure below is the one D states consistently.
 */
export const developer = {
  heading: 'About the developer',
  tagline: 'Not just a home. Adding values to life.',
  body: [
    /* D: the listing now includes Serenique (Bavdhan, ongoing, card dated
       27 Aug 2026). "Celebrating 26 years" on D's banner, 2026-11-06. */
    'Venkatesh Buildcon has been building in Pune for 26 years. The portfolio runs from Shivajinagar and Prabhat Road out through Baner, Kharadi and Sinhagad Road, and now Bavdhan, where Serenique is listed among its ongoing projects. The firm is registered as Shree Venkatesh Buildcon Pvt. Ltd., an Ankush Asabe venture.',
    'Its corporate office is at Vikram Monarch on Ganeshkhind Road, Shivajinagar.',
  ],
  /* Only the figure the developer's own site states in plain text. */
  /* The portfolio itself lives in content/developer-projects.ts — the
     developer's own listing, with its own status taxonomy and imagery. */
  stats: [{ id: 'years', value: '26', label: 'Years building in Pune' }],
  cta: 'Talk to Us About Serenique',
}

export const siteVisit = {
  /* Was "Register for first access" / "Pre-launch allocations ... go to
     registered buyers before they reach the portals". The project has
     launched; what a visitor gets now is the price list and the plans. */
  heading: 'Get the price list and plans',
  body: 'Leave your number and we will send the current price list, the floor plan for the home you are considering and the brochure, and arrange a site visit.',
  namePlaceholder: 'Name',
  phonePlaceholder: 'Mobile Number',
  cta: 'Register Now',
}

/**
 * The post-submission page.
 *
 * ⚠ Reached almost entirely from the CHAT WIDGET, which redirects here. The
 * form dialog confirms inline and never navigates, which is the right
 * behaviour for a modal — so do not "fix" that by routing the form here too.
 *
 * What the visitor gets is the price list and the plans, sent by the team.
 * The brochure download appears here too once `brochure` below is set; while
 * it is null, the team sends the brochure with everything else.
 *
 * `steps[].when` are commitments the sales team has to keep. Soften them here
 * rather than letting the page write a cheque the client cannot cash.
 */
export const thankYou = {
  eyebrow: 'Enquiry received',
  heading: 'Thank you, you’re on the list',
  lede: 'Your details have reached our team. Here is exactly what happens next.',

  stepsHeading: 'What happens now',
  steps: [
    {
      id: 'call',
      when: 'Usually the same day',
      title: 'We call you back',
      body: 'A real person from our team, not an automated message. Ask them anything, from carpet areas to the payment plan.',
    },
    {
      id: 'list',
      when: 'Already done',
      title: 'Your request is logged',
      body: 'The developer has not published a price list, so the current price comes to you directly from us, for the home you asked about.',
    },
    {
      id: 'send',
      when: 'With the call',
      title: 'You get the documents',
      body: 'The current price list, the floor plan for the home you are considering and the brochure. No drip campaign and no newsletter.',
    },
  ],

  awaitingHeading: 'What you will be sent',
  awaitingLede:
    'The developer has published the plans, the amenity list and the specifications. The price list is the one thing it has not, and we send it on request.',

  callHeading: 'Would rather talk now?',
  callBody:
    'Skip the queue and call us directly. We will tell you what is documented and what is still being finalised.',

  exploreHeading: 'While you wait',
  exploreLede: 'The parts of this project you can already look into.',
  explore: [
    {
      id: 'updates',
      href: '/updates',
      label: 'Project updates',
      body: 'What the developer has released, and what to ignore.',
    },
    {
      id: 'location',
      href: '/location',
      label: 'The Bavdhan address',
      body: 'What the location connects to, with distances.',
    },
    {
      id: 'developer',
      href: '/about-developer',
      label: 'The developer',
      /* Was "33 projects across Pune in 26 years". D now lists 34; the count
         lives in developer-projects.ts and is not retyped here. */
      body: 'Every project on the developer’s own site, and 26 years of track record.',
    },
  ],

  wrongDetails: 'Entered the wrong number? Call us and we will correct it.',
}

export const contact = {
  heading: 'Talk to us',
  lede: 'One call, no queue. We will tell you what has actually been released and what has not.',
  formHeading: 'Send an enquiry',
  formBody: 'Leave your number and we will call you back the same day.',
}

export const legal = {
  reraHeading: 'MahaRERA',
  /* R. Was "registered project name Shree Venkatesh Serenique Phase 1" (H). */
  reraIntro: `${phase1.label} is registered with MahaRERA as ${phase1.registeredName}, with ${phase1.promoter} as promoter. Verify the registration yourself on the Maharashtra Government’s RERA portal before making any payment.`,
  /* CONFIRMED 2026-11-06 on the MahaRERA portal (search result and public
     record) and on Form C dated 31/08/2026. The August note here called
     "PM" a likely transcription slip of "PR"; that was wrong and is retired.
     No QR is shown: the QR is printed on Form C, but no standalone image of
     it has been taken from an official source and checked, and a QR that
     resolves to the wrong registration is worse than none. (D's page also
     has a QR image named "codename.jpg"; it was not decoded and is NOT this
     one until someone checks where it points.) */
  reraRegistrations: [
    {
      id: phase1.reraId,
      phase: phase1.label,
      /* R: Form C annexure. */
      wings: 'Building A: Wings A1, A2, A3 and shops',
      qr: null,
    },
  ] as ReadonlyArray<{
    id: string
    phase: string
    wings: string | null
    qr: string | null
  }>,
  reraPortal: 'https://maharera.maharashtra.gov.in/',

  /* The advertiser is Blackstone Realty, Pune — the client operating this
     site. The previous Home Bazaar Services line and its registration number
     were carried over from another project by mistake and have been removed.
     ⚠ Blackstone Realty's own MahaRERA agent registration is not published
     here because it has not been supplied. Add it to this string when the
     client provides it — a marketing site for a registered project is
     expected to carry the agent's registration. */
  advertiser: 'Marketed by Blackstone Realty, Pune.',
  /* D: site footer, re-checked 2026-11-06. */
  officeAddress:
    'Developer’s corporate office: Off 701/702, 7th Floor, Vikram Monarch, Ganeshkhind Rd, opp. Modibaug, Shivajinagar, Pune, Maharashtra 411016',

  /* Was "The project is pre-launch. Carpet areas, pricing, amenities,
     layouts and the possession date have not been finalised or published". */
  disclaimer:
    'We are an authorised marketing partner for this project. Content is provided by the respective owners and this website is published for information only. Nothing here is an offer, and no service is being sold through it. The registration details, the plot, the number of homes and the completion date are as filed with MahaRERA for Phase 1. Configurations, carpet areas, amenities and specifications are as published by the developer. The developer has not published a price list. Every figure on this site is attributed to its source and remains subject to change without notice. No home referred to here is guaranteed to be available. We may share your data with MahaRERA-registered entities where that is necessary to process your enquiry. You can expect a call, SMS or email on the details you register with us.',
  copyright: 'Venkatesh Serenique, Bavdhan. All rights reserved.',
  links: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-conditions', label: 'Terms & Conditions' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  disclaimerShort:
    'We are an authorised marketing partner for this project. This site is published for information only and is not an offer. Figures are as filed with MahaRERA for Phase 1 or as published by the developer, prices are on request, and every figure shown is subject to change.',
}

/**
 * Questions the site answers, rendered visibly on the home page AND marked up
 * as FAQPage JSON-LD from this same array.
 *
 * ⚠ They must stay in both places. Google requires FAQ markup to correspond to
 * content the visitor can actually see; markup for questions that appear
 * nowhere on the page is grounds for a manual action. Deleting the visible
 * section means deleting the markup too.
 *
 * Rewritten 2026-11-06 for the launched project. Three answers used to be
 * "we don't know yet"; only the price still is, and it says so.
 */
export const faqs = [
  {
    q: 'Where is Venkatesh Serenique located?',
    /* R: plot. Was "The developer has not yet published a street address". */
    a: `At Bavdhan Khurd, near the Chandani Chowk junction where Paud Road meets National Highway 48. The MahaRERA certificate for Phase 1 records the plot as ${phase1.plot}.`,
  },
  {
    q: 'What configurations are available?',
    /* D and F. Was "planned as 2, 3 and 4 BHK homes across eleven towers on
       14 acres" (★). */
    a: 'Phase 1 is mostly 2 and 3 BHK homes. Wing A2 has 2 BHK homes and Wing A3 has 2 and 3 BHK homes, and the refuge floors add a 2.5 BHK in Wing A2 and a 1 BHK in Wing A3. RERA carpet areas run from 706 to 725 sq ft for a 2 BHK and 1,021 to 1,024 sq ft for a 3 BHK. No 4 BHK appears in any plan the developer has published for Phase 1.',
  },
  {
    q: 'What is the price of a flat at Venkatesh Serenique?',
    a: 'The developer has not published a price list for Serenique, and the prices quoted on listing sites do not come from the developer. Ask us and we will send the current price for the home you are considering, with its floor plan.',
  },
  {
    q: 'Is Venkatesh Serenique RERA registered?',
    /* R. Was "registered ... under the project name Shree Venkatesh
       Serenique Phase 1" (H). */
    a: `Yes. Phase 1 is registered with MahaRERA as ${phase1.registeredName}, registration number ${phase1.reraId}, with ${phase1.promoter} as promoter. It was registered on ${phase1.registeredOn}, and the certificate was reissued after a correction on ${phase1.correctedOn}. Search “Serenique” at maharera.maharashtra.gov.in to check it yourself.`,
  },
  {
    q: 'When is possession?',
    /* R. Was "December 2031, as published by the project’s listing partner"
       (P). A broker's "developer commitment Dec 2030" (propstar, LOW) is on
       no first-party page and is not repeated. */
    a: `The completion date declared to MahaRERA for Phase 1 is ${phase1.completion}, and that is the date the developer is bound to. Other dates quoted by third-party sites are not on the MahaRERA record.`,
  },
  {
    q: 'How many towers and floors are there?',
    /* R for the building, wings, floors and units; F for homes per floor and
       lifts; D for the acreage. Was "Eleven towers on 14 acres. Each runs
       three basement levels, ground, a podium and 27 floors" (★). */
    a: `Phase 1 is a single building with three residential wings, A1, A2 and A3, above a parking podium, plus ${phase1.shops} shops at street level. Wing A2 has 27 habitable floors, with 8 homes on a typical floor served by 4 passenger lifts and a fire lift. Wing A3 has 28, with 6 homes on a typical floor served by 3 passenger lifts and a fire lift. Phase 1 registers ${phase1.homes} homes in all. The developer gives the whole parcel as ${phase1.parcelAcres} acres, of which Phase 1 takes ${phase1.landAcres} and ${phase1.futureAcres} acres are marked for future development.`,
  },
  {
    q: 'What are the amenities?',
    /* D. Was "No amenity schedule has been published for this project". */
    a: 'The developer lists more than 20. On the podium: a swimming pool with a vanishing edge, a kids’ pool, a gym, indoor games, a multipurpose court, box cricket, a co-working lounge, a reading lounge, a creche, a toddlers’ play area, a yoga and meditation lawn and a 1.5 m jogging track. At ground level: a pet park, a herbal garden, a festival lawn and a mini amphitheatre.',
  },
  {
    q: 'Has Venkatesh Serenique launched?',
    /* D: "Now launched"; listed as ongoing since 27 Aug 2026. Replaces "Why
       is there so little information on this project?" */
    a: 'Yes. The developer lists Serenique among its ongoing projects and describes it as launched. It has published renders, a master layout, floor plans with RERA carpet areas, the amenity list, the specifications and a brochure. The one thing it has not published is a price list, which we send on request.',
  },
] as const

/**
 * The developer's official brochure, handed over on /thank-you after an
 * enquiry (components/brochure-download.tsx). `null` until one is issued, and
 * while it is null the thank-you page is unchanged.
 *
 * To switch it on: put the PDF in public/brochure/, then set the export below.
 * `npm run audit` fails if `href` points at a file that is missing or empty.
 *
 * ⚠ 2026-11-06: an official brochure EXISTS (D:
 * https://venkateshbuildcon.com/wp-content/uploads/2026/10/Serenique_Main-Brochure-12X11_08-Oct-2_compressed-1.pdf,
 * 41.8 MB, filename dated 8 Oct), but it is still null here because nobody
 * has yet been able to open it and check it. It is image-only, and the
 * tooling available could not render it. Before switching it on, someone has
 * to read every page and confirm: it is Serenique's; it carries no broker's
 * mark or contact details; and it prints no price (D's project page carries a
 * "2.9 to 5 CR" template string copied from another project, which must not
 * reach visitors through the brochure either) and no figure that contradicts
 * MahaRERA (552 flats, a 4 BHK, a possession date other than 30 Sep 2031).
 */
export type Brochure = {
  /**
   * Must start with /brochure/ (the type enforces it, and `npm run audit` checks it):
   * the noindex header in next.config.ts covers only that path. The file lives
   * in public/brochure/.
   */
  href: `/brochure/${string}`
  /** The link text, e.g. "Download the project brochure". */
  title: string
  /** Shown beside the title, e.g. "PDF, 12 MB". */
  sizeLabel: string
  /** Who issued it and when. Provenance for editors; not rendered. */
  source: string
}

export const brochure: Brochure | null = null
