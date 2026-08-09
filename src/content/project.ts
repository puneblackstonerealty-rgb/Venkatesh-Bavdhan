/**
 * ALL COPY FOR THE SITE LIVES HERE.
 *
 * ─── Sources, in order of authority ────────────────────────────────────────
 *
 *   ★  THE CLIENT, relaying the developer. Received 2026-08-09 via Sumeet,
 *      who is the channel partner in direct contact with Venkatesh Buildcon.
 *      This is the closest thing to a first-party statement of the project's
 *      scale that exists, and it OUTRANKS EVERYTHING BELOW.
 *
 *        • 14 acres
 *        • 11 towers
 *        • 3 basements + ground + podium + 27 floors
 *        • 2, 3 and 4 BHK
 *
 *      ⚠ This did not refine P's figures, it demolished them. P said 2.5
 *      acres and 3 towers; the real project is 5.6x the land and nearly 4x
 *      the towers. Anything else that came from P alone is now suspect by
 *      association and is marked as such at the value it affects. In
 *      particular P's "380 homes" has been REMOVED rather than kept: 380
 *      units across 11 towers of 27 floors is not a plausible number, and a
 *      wrong unit count sitting beside correct tower and acreage figures
 *      reads as authoritative in a way an absent one does not.
 *
 *      Note also that the two REJECTED sites below both claimed a 4 BHK and
 *      both turned out to be right about it. That does not rehabilitate
 *      them: they published it without a carpet area and alongside figures
 *      that are still wrong. It is recorded here because the reasoning that
 *      excluded the 4 BHK was sound on the evidence available and still
 *      reached the wrong answer, which is worth knowing next time.
 *
 *   C  THE DEVELOPER'S OWN LAUNCH CREATIVE. Recovered 2026-08-07 from P's
 *      media library, where it is the page's only Serenique-specific image.
 *      First-party artwork — it wins any conflict. It supplies the project
 *      wordmark and its sprig device, the strapline, the product line and the
 *      five-point feature strip, all reproduced verbatim below.
 *      ⚠ The file itself is NOT shipped: P has stamped a "PROPSTAR REALTY"
 *      watermark across the centre of it, and publishing a competing broker's
 *      mark on this client's lead-generation site would be self-defeating
 *      quite apart from the rights question. Ask the developer for the clean
 *      original — see the asset checklist in the README.
 *
 *   P  https://propstarrealty.com/property/venkatesh-serenique-bavdhan/
 *      Fetched 2026-08-07. Was the only source carrying hard project numbers,
 *      and supplied every structural figure on this site until 2026-08-09.
 *      ⚠ DEMOTED. ★ contradicted its acreage, tower count and configuration
 *      mix outright, so it is no longer used for anything structural. What
 *      still rests on it alone is the MahaRERA number and the December 2031
 *      possession date, both marked CONFIRM where they appear. Do not
 *      reinstate a figure from this source because it "fills a gap".
 *
 *   H  https://housing.com/in/buy/projects/page/370170-shree-venkatesh-
 *      serenique-phase-1-by-shree-venkatesh-buildcon-in-bavdhan
 *      Blocks automated fetching (HTTP 406). Only its URL slug could be read,
 *      which is still evidence: it establishes the REGISTERED name
 *      ("Shree Venkatesh Serenique Phase 1") and the builder as Housing.com
 *      records it ("Shree Venkatesh Buildcon").
 *
 *   D  https://www.venkateshbuildcon.com/  — the developer's own site.
 *      First-party, and therefore authoritative on the DEVELOPER (years,
 *      portfolio, corporate office). It does NOT list Serenique at all.
 *
 *   L  Locality research for Bavdhan (99acres / NoBroker / SquareYards /
 *      Dwello locality pages, fetched 2026-08-07). Used only for the
 *      location page, and only for figures at least two of them agree on.
 *
 *   ✗  REJECTED: venkateshprelaunch.com and puneupcomingprojects.com. Both
 *      rank for this query and both are recycled boilerplate — one publishes
 *      the KHARADI project's developer statistics verbatim on a Bavdhan page,
 *      the other says "Update Soon" for every field that matters. Nothing
 *      from either is used. They are listed here so nobody re-adds them
 *      thinking they were missed.
 *
 * ─── Standing rule ─────────────────────────────────────────────────────────
 *
 * This project is genuinely pre-launch. No carpet areas, no price list, no
 * amenity schedule, no floor plans and no renders have been published by
 * anyone. Where that is the case the site SAYS SO and captures the enquiry.
 * Nothing on this page is invented to fill a gap. If you are adding a figure
 * here, it needs a source comment beside it.
 *
 * ⚠ Three things must be confirmed with the client before launch. Each is
 * marked CONFIRM at the value it affects, and they are listed in the README.
 */

export const site = {
  name: 'Venkatesh Serenique',
  shortName: 'Serenique',
  /* H's URL slug. The marketing name is "Venkatesh Serenique"; the MahaRERA
     registration is under the longer form, which is what a buyer verifying on
     the portal will need to search for. */
  registeredName: 'Shree Venkatesh Serenique Phase 1',

  /* RESOLVED 2026-08-07 — developer identity.
     This was open, because D lists eleven projects and Serenique is not among
     them, and a separate Pune builder trading as "Shree Venkatesh Group" also
     has a Bavdhan project (Celestine).
     Settled by the developer's own logo artwork, recovered from the reference
     sites: it reads "SHREE VENKATESH BUILDCON PVT. LTD. — ANKUSH ASABE
     VENTURE". "Ankush Asabe" is the same byline the Kharadi developer prints
     on its own campaign creatives, so the listing sites' "Shree Venkatesh
     Buildcon" and the Kharadi project's "Venkatesh Buildcon by Ankush Asabe"
     are one firm. A logo asserting its own registered name is first-party
     evidence in a way a listing site's prose is not.
     The trading name below is the short form the developer uses on its own
     site and creatives; `developerLegalName` carries the registered form. */
  developer: 'Venkatesh Buildcon',
  developerLegalName: 'Shree Venkatesh Buildcon Pvt. Ltd.',
  developerByline: 'An Ankush Asabe venture',
  developerSite: 'https://www.venkateshbuildcon.com',
  /* The developer's mark, full colour, confirmed by the client as the correct
     current logo. A greyscale vector of the same mark is kept alongside at
     /brand/venkatesh-buildcon.svg for any future single-colour use. */
  developerLogo: '/brand/venkatesh-buildcon.png',

  locality: 'Bavdhan, Pune',
  /* P locates it no more precisely than the suburb, and no street address has
     been published by anyone. Deliberately not guessed — see `location`. */
  address: 'Bavdhan, Pune, Maharashtra',
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
 * Real routes, not anchors.
 *
 * ⚠ There is deliberately no /amenities and no /gallery. No amenity schedule
 * and no renders exist for this project, and a route whose whole body reads
 * "coming soon" is thin content — it competes with the home page for the same
 * query and loses to the aggregator listings this site is meant to outrank.
 * Both sections live as reveal blocks on the home page instead. Promote them
 * to routes on the day the client supplies the material, and add them to
 * sitemap.ts at the same time.
 */
export const nav = [
  { href: '/configurations', label: 'Homes' },
  { href: '/location', label: 'Location' },
  { href: '/about-developer', label: 'Developer' },
  { href: '/updates', label: 'Updates' },
  { href: '/contact', label: 'Contact' },
] as const

export const hero = {
  badge: 'PRE-LAUNCH · REGISTRATIONS OPEN',
  title: 'Venkatesh Serenique',
  subtitle: 'BAVDHAN, PUNE',
  /* The strapline is C, the developer's own launch creative, verbatim.
     ⚠ The product line is NOT verbatim any more. C reads "PREMIUM 2 & 3 BHK
     HOMES", but ★ confirms a 4 BHK, so the creative is out of date rather
     than authoritative here. That creative was recovered from a competitor's
     media library and is undated; it most likely predates the current mix.
     Reproducing it verbatim would now mean printing a configuration list the
     client has told us is wrong, so the line is extended and this note
     records the change. */
  tagline: 'Premium 2, 3 & 4 BHK Homes',
  strapline: 'A life of serenity. A home that defines you.',
  taglineSub: '14 acres · 11 towers · 3B + G + P + 27 floors',
  /* ★ for the first three. See the note on P for why the fourth is weaker. */
  facts: [
    { label: 'Land Parcel', value: '14 Acres' },
    { label: 'Towers', value: '11' },
    /* ★ gives the full structure as 3 basements + ground + podium + 27
       floors. The hero prints the habitable part, because "G + 27" is what a
       buyer is actually asking; the full stack is spelled out in the release
       ledger and the overview where there is room for it. */
    { label: 'Floors', value: 'G + 27' },
    /* CONFIRM — P alone, and P has since been shown wrong on every structural
       figure it published. The date is retained because it is the only one
       anyone has published and it is attributed on the page, but it should be
       checked against the MahaRERA entry before launch. The old note here
       argued 2031 was credible BECAUSE a 28-storey tower cannot hand over by
       2028; that reasoning survives the update, since the towers are still 27
       floors, and an 11-tower scheme is if anything a longer build. */
    { label: 'Possession', value: 'Dec 2031' },
  ],
  /* No price is published by the developer or by any listing. The hero says
     so rather than borrowing the Bavdhan market rate and presenting it as
     this project's. */
  priceLabel: 'Pre-launch pricing',
  price: 'On Request',
  priceNote: 'Register for the first price list',
  cta: 'Register Your Interest',
  ctaSecondary: 'Request the Price List',
}

/**
 * The five-point strip printed along the foot of the developer's own launch
 * creative (source C), verbatim and in its original order.
 *
 * Worth having as the developer's words rather than ours: "premium amenities
 * for all age groups" is the only thing the developer has said about the
 * amenity plan, and "thoughtfully planned lifestyle" is positioning we would
 * otherwise have had to invent or omit.
 */
export const featureStrip = [
  /* ⚠ The first two lines are no longer C's. C says "3 PREMIUM RESIDENTIAL
     TOWERS" and "2 & 3 BHK HOMES"; ★ says 11 towers and a 2/3/4 mix. The
     creative loses. The remaining three lines are still C verbatim and are
     the only amenity and positioning language the developer has issued. */
  { id: 'towers', label: '11 Premium Residential Towers' },
  { id: 'homes', label: '2, 3 & 4 BHK Homes' },
  { id: 'lifestyle', label: 'Thoughtfully Planned Lifestyle' },
  { id: 'amenities', label: 'Premium Amenities for All Age Groups' },
  { id: 'where', label: 'Bavdhan, Pune' },
]

/* Scale is ★. The locality paragraph is unchanged and is source L. */
export const overview = {
  eyebrow: 'The Project',
  heading: 'A quiet address in Pune West',
  body: [
    'Venkatesh Serenique is a pre-launch residential development at Bavdhan. Eleven towers stand on 14 acres, each rising through three basements, ground, a podium and 27 floors, in a mix of 2, 3 and 4 BHK homes.',
    'The Sahyadri foothills rise immediately west of the suburb. Bavdhan itself sits close enough to Kothrud, Baner and Hinjawadi that residents reach all three without driving through the middle of Pune.',
  ],
  /**
   * The full structure, written out. The hero prints "G + 27" because that is
   * the scannable form; this is the one to use wherever a sentence has room.
   */
  structure: 'three basements, ground, podium and 27 floors',
  /**
   * ⚠ There is deliberately no `homes` count here any more.
   *
   * It used to read "380 homes", from P. ★ then put the project at 14 acres
   * and 11 towers, which makes 380 units impossible, and no corrected total
   * has been issued. It is now a row on the release ledger marked Awaited.
   *
   * Do not reintroduce a unit count by multiplying floors by an assumed
   * number of flats per floor. That is exactly the kind of invented figure
   * the rest of this file exists to keep off the page.
   */
}

export const highlights = {
  badge: 'AT A GLANCE',
  /* Every line traceable to P or to the locality research in `location`.
     Nothing aspirational, because nothing aspirational has been published. */
  items: [
    '14 acres at Bavdhan, Pune West',
    'Eleven towers of three basements, ground, podium and 27 floors',
    '2, 3 and 4 BHK homes',
    'MahaRERA registered under Phase 1',
    'Chandani Chowk, NH-48 and Paud Road in the immediate catchment',
    'Vanaz metro station on the Aqua Line under 4 km away',
    'Hinjawadi IT Park roughly 14 km, Kothrud and Baner 5 to 7 km',
  ],
  cta: 'Get the Full Project Details',
}

/**
 * The release ledger — what the developer has actually issued, and what it
 * has not.
 *
 * This sits where a hero render would normally sit, and it is the whole idea
 * of the site: on a project this early, the most valuable thing a buyer can be
 * told is which numbers exist and which are still being invented by other
 * websites. Every competing page for this query presents a full spec sheet;
 * only some of it is real. This one shows its working.
 *
 * `released: false` rows are not failures. They are the reason to register.
 */
export const releaseStatus = {
  heading: 'What has been released',
  note: 'Updated as the developer issues material. Register and you will have each item the day it is published.',
  items: [
    { id: 'rera', label: 'MahaRERA registration', value: 'Registered', released: true },
    { id: 'config', label: 'Configurations', value: '2, 3 & 4 BHK', released: true },
    { id: 'scale', label: 'Towers', value: '11', released: true },
    { id: 'structure', label: 'Floors per tower', value: '3B + G + P + 27', released: true },
    { id: 'land', label: 'Land parcel', value: '14 acres', released: true },
    /* Was "380 homes, released", from P. ★ made that impossible and no
       replacement total has been issued, so it moves to the awaited side.
       This is the ledger doing its job: the row does not disappear, it
       changes state, and it is now a reason to register. */
    { id: 'homes', label: 'Total homes', value: 'Awaited', released: false },
    { id: 'areas', label: 'Carpet areas', value: 'Awaited', released: false },
    { id: 'price', label: 'Price list', value: 'Awaited', released: false },
    { id: 'plans', label: 'Floor & master plans', value: 'Awaited', released: false },
    { id: 'amenities', label: 'Amenity schedule', value: 'Awaited', released: false },
    { id: 'imagery', label: 'Renders & brochure', value: 'Awaited', released: false },
  ],
}

/* The map, the distance list and the configuration cards carry no footnote by
   client instruction. The provenance of every figure is still recorded in this
   file — it is simply not printed under the section any more. */

/**
 * The reveal blocks.
 *
 * These are not placeholders and they are not failure states — they are the
 * honest form of a pre-launch page, and each one is a lead capture. Every
 * field the developer has not published is represented by one of these rather
 * than by a borrowed figure or a stock photograph.
 *
 * When the client supplies material, delete the entry and build the real
 * section. Nothing else has to change.
 */
export const reveals = {
  configurations: {
    eyebrow: 'Carpet Areas',
    heading: 'Layouts and carpet areas are not yet released',
    body: 'Both configurations are registered with MahaRERA, but the developer has not published carpet areas or unit plans. We will send them across on the day they are issued.',
    cta: 'Get Floor Plans First',
  },
  pricing: {
    eyebrow: 'Pricing',
    heading: 'No price list has been announced',
    body: 'Pre-launch rates reach registered buyers well before the listing portals get them, and that window is where the pricing advantage sits. Register now and you will have the numbers ahead of the public launch.',
    cta: 'Request the Price List',
  },
  amenities: {
    eyebrow: 'Lifestyle',
    /* The developer has committed to exactly one phrase about amenities:
       "premium amenities for all age groups", on its own launch creative
       (source C). That is quoted rather than expanded into a list. */
    heading: 'Premium amenities for all age groups',
    body: 'That phrase is the developer’s own, and so far it is all they have said. No amenity schedule has been published. Other sites list a clubhouse, a pool and a dozen more for this project, none of it sourced from the builder. We will send you the real schedule once it exists.',
    cta: 'Get the Amenity Plan',
  },
  gallery: {
    eyebrow: 'Imagery',
    heading: 'Renders and the master plan are awaited',
    body: 'One launch creative exists. Beyond that the developer has issued no elevations, no master plan and no brochure. Any image added here later will be developer-issued and labelled as an artistic impression. You will not find stock photography on this site standing in for a building.',
    cta: 'Get the Brochure',
  },
}

export type Configuration = {
  id: string
  type: string
  /** null until the developer publishes it. Renders as a reveal, never a guess. */
  area: string | null
  price: string | null
  note: string
}

export const configurations = {
  heading: 'Configurations',
  intro:
    'Serenique is planned as 2, 3 and 4 BHK homes across eleven towers. The developer has not published carpet areas or pricing yet. Registered buyers get those figures first.',
  /* ★. The 4 BHK was previously excluded from this list, and that was wrong.
     P and H both said 2 & 3 only; the two sites that did claim a 4 BHK are
     the ones rejected as unreliable, and neither gave it a carpet area. The
     client has now confirmed the 4 BHK is real.

     Leaving the reasoning here on purpose. It was a defensible call on the
     evidence and it still produced a wrong page, which is the argument for
     asking the client early rather than adjudicating between listing sites. */
  items: [
    {
      id: '2bhk',
      type: '2 BHK',
      area: null,
      price: null,
      note: 'Confirmed configuration. Carpet area to be announced.',
    },
    {
      id: '3bhk',
      type: '3 BHK',
      area: null,
      price: null,
      note: 'Confirmed configuration. Carpet area to be announced.',
    },
    {
      id: '4bhk',
      type: '4 BHK',
      area: null,
      price: null,
      note: 'Confirmed configuration. Carpet area to be announced.',
    },
  ] satisfies Configuration[],
  cta: 'Register for Areas & Pricing',
}

export const location = {
  heading: 'Location & Connectivity',
  paragraphs: [
    'Bavdhan occupies Pune’s western edge, a short run from the Chandani Chowk junction where Paud Road meets National Highway 48 and the Mumbai to Pune Expressway. Very few Pune suburbs put Kothrud, Baner, Aundh and Hinjawadi within reach without a drive through the centre. This one does.',
    'The flyover at Chandani Chowk and the widened approach roads have taken much of the sting out of the old peak-hour queue. Metro Phase 2 has been approved to extend into the area, and Vanaz station on the running Aqua Line already sits under 4 km away.',
  ],
  /* ⚠ A LOCALITY map, not a plot pin. No street address has been published for
     Serenique by the developer or by any listing, so the frame is centred on
     Bavdhan rather than on a plot we would be guessing at. The on-page caption
     saying so was removed at the client's request, so this comment is now the
     only record of it — do not let anyone read this embed as the site
     boundary. Replace the query with the surveyed address once supplied. */
  mapEmbed: 'https://maps.google.com/maps?q=Bavdhan%2C%20Pune%2C%20Maharashtra&z=14&output=embed',
  mapTitle: 'Bavdhan, Pune locality map',

  connectivityHeading: 'Distances from Bavdhan',
  /* Source L. Every one of these is a DISTANCE, not a drive time, except the
     two where a source actually stated a time. Real-estate microsites publish
     invented drive times as a matter of course; this site does not. */
  pois: [
    { name: 'Vanaz Metro Station (Aqua Line)', value: 'under 4 km' },
    { name: 'Sahyadri Hospital, Kothrud', value: 'about 4 km' },
    { name: 'Kothrud & Baner commercial hubs', value: '5 to 7 km' },
    { name: 'Jupiter Hospital, Baner', value: 'about 6 km' },
    { name: 'Hinjawadi IT Park', value: '14 km, about 30 min' },
    { name: 'Pune International Airport', value: 'about 30 min' },
  ],
  groupsHeading: 'In the neighbourhood',
  /* Named without distances, because the sources name them without distances.
     Inventing a "3 minutes" for each is precisely the habit this file exists
     to avoid. */
  groups: [
    {
      id: 'schools',
      label: 'Schools',
      items: [
        'Vibgyor High, Bavdhan',
        'Indus International School',
        'The Orchid School',
        'Mercedes-Benz International School',
        'Ryan International School',
      ],
    },
    {
      id: 'healthcare',
      label: 'Healthcare',
      items: [
        'Sahyadri Hospital, Kothrud',
        'Jupiter Hospital, Baner',
        'Manipal Hospital, Pashan',
        'Chellaram Hospital',
      ],
    },
    {
      id: 'retail',
      label: 'Everyday & retail',
      items: ['Aditya Shagun Mall', 'Vishal Shopping Complex', 'Bandal Dhankude Plaza', 'D-Mart'],
    },
    {
      id: 'transit',
      label: 'Roads & transit',
      items: [
        'Chandani Chowk junction & flyover',
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
 * ⚠ Note what is still NOT here, now that the identity is settled: no "50+
 * projects", no "20+ cities", no "10,000+ happy families". Those appear on a
 * developer corporate-profile card carried by one of the two REJECTED
 * reference sites, and they contradict both D (which says 26 years) and the
 * Kharadi project's own first-party creatives (6,000+ families). Two
 * incompatible sets of numbers means at least one is wrong, so neither is
 * published. The single figure below is the one D states in plain text.
 */
export const developer = {
  heading: 'About the developer',
  tagline: 'Not just a home. Adding values to life.',
  body: [
    'Venkatesh Buildcon has been building in Pune for 26 years. The portfolio runs from Shivajinagar and Prabhat Road out through Baner, Kharadi and Sinhagad Road. The firm is registered as Shree Venkatesh Buildcon Pvt. Ltd., an Ankush Asabe venture.',
    'Its corporate office is at Vikram Monarch on Ganeshkhind Road, Shivajinagar.',
  ],
  /* Only the figure the developer's own site states in plain text. Their
     statistics counters render as "0 +" without JavaScript, so the families
     and square-footage numbers could not be read first-party and are not
     reproduced from elsewhere. */
  /* The portfolio itself lives in content/developer-projects.ts — 33 projects
     crawled from the developer's own site, with their own status taxonomy and
     their own imagery. */
  stats: [{ id: 'years', value: '26', label: 'Years building in Pune' }],
  cta: 'Talk to Us About Serenique',
}

export const siteVisit = {
  heading: 'Register for first access',
  body: 'Pre-launch allocations, the first price list and the floor plans go to registered buyers before they reach the portals.',
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
 * The hard part of a thank-you page on a pre-launch project is that there is
 * nothing to deliver. No brochure to attach, no price list to link. Saying
 * "check your inbox" would be a lie. So the page does the only honest thing
 * that is also useful: it states what happens next, names what is coming, and
 * gives them a phone number if they would rather not wait.
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
      body: 'A real person from our team, not an automated message. Ask them anything, including what has not been released yet.',
    },
    {
      id: 'list',
      when: 'Already done',
      title: 'You are on the release list',
      body: 'Registered buyers hear about pre-launch pricing before the listing portals do. That window is the whole advantage of enquiring this early.',
    },
    {
      id: 'send',
      when: 'The day it is issued',
      title: 'You get each document first',
      body: 'No drip campaign and no newsletter. You hear from us when the developer releases something real.',
    },
  ],

  awaitingHeading: 'What you will be sent',
  awaitingLede:
    'None of this has been published yet, which is what pre-launch means. Each item reaches you on the day the developer issues it.',

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
      body: '33 projects across Pune in 26 years. The track record behind it.',
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
  reraIntro:
    'The project is registered with MahaRERA under the registered project name Shree Venkatesh Serenique Phase 1. Verify the registration yourself on the Maharashtra Government’s RERA portal before making any payment.',
  /* ⚠ CONFIRM — the registration number.
     P prints "PM1261012601412". MahaRERA numbers for Pune projects take the
     form P52100… or PR126101… — the "PM" prefix does not match either, and
     "PM1261012601412" reads like a transcription slip of "PR1261012601412".
     It is reproduced here EXACTLY as the source prints it rather than
     silently corrected, because a corrected-but-wrong number is worse than an
     odd-looking accurate one. It MUST be checked against the portal before
     launch — the on-page caveat that used to sit under it in the footer was
     removed at the client's request, so nothing now warns the visitor. No QR
     code is shown: none has been published, and a QR that resolves to the
     wrong registration is worse than no QR at all. */
  reraRegistrations: [
    {
      id: 'PM1261012601412',
      phase: 'Phase 1',
      wings: null,
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
  officeAddress:
    'Developer’s corporate office: Off 701/702, 7th Floor, Vikram Monarch, Ganeshkhind Rd, opp. Modibaug, Shivajinagar, Pune, Maharashtra 411016',

  disclaimer:
    'We are an authorised marketing partner for this project. Content is provided by the respective owners and this website is published for information only. Nothing here is an offer, and no service is being sold through it. The project is pre-launch. Carpet areas, pricing, amenities, layouts and the possession date have not been finalised or published by the developer. Every figure on this site is attributed to its source and remains subject to change without notice. No home referred to here is guaranteed to be available. We may share your data with MahaRERA-registered entities where that is necessary to process your enquiry. You can expect a call, SMS or email on the details you register with us.',
  copyright: 'Venkatesh Serenique, Bavdhan. All rights reserved.',
  links: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-conditions', label: 'Terms & Conditions' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  disclaimerShort:
    'We are an authorised marketing partner for this project. This site is published for information only and is not an offer. The project is pre-launch, so areas, prices and amenities remain unpublished and every figure shown is subject to change.',
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
 * Note that three of these answer "we don't know yet". That is deliberate —
 * they are the highest-volume queries for a pre-launch project, and a straight
 * answer plus a capture beats a fabricated one.
 */
export const faqs = [
  {
    q: 'Where is Venkatesh Serenique located?',
    a: 'The project is at Bavdhan on Pune’s western edge, close to the Chandani Chowk junction where Paud Road meets National Highway 48. The developer has not yet published a street address. We will confirm the exact plot location once it is released.',
  },
  {
    q: 'What configurations are available?',
    /* "Planned as", not "registered for". The MahaRERA registration on record
       is Phase 1, and ★'s 14 acres and 11 towers describe the whole scheme.
       Which towers and which configurations fall inside Phase 1 has not been
       stated, so claiming the mix is registered would be asserting something
       nobody has told us. See the CONFIRM note in the README. */
    a: 'Venkatesh Serenique is planned as 2, 3 and 4 BHK homes across eleven towers on 14 acres. The total number of homes has not been published yet, and neither have carpet areas or pricing.',
  },
  {
    q: 'What is the price of a flat at Venkatesh Serenique?',
    a: 'No price list has been announced. The project is pre-launch and the developer has not published pricing or carpet areas. Pre-launch rates go to registered buyers before they reach the listing portals, so register on this page and we will send you the figures as soon as they are issued.',
  },
  {
    q: 'Is Venkatesh Serenique RERA registered?',
    a: 'Yes. It is registered with MahaRERA under the project name Shree Venkatesh Serenique Phase 1. The registration number appears in the footer of every page and should be verified directly at maharera.maharashtra.gov.in.',
  },
  {
    q: 'When is possession?',
    a: 'December 2031, as published by the project’s listing partner. Some third-party sites quote 2028. That figure is not supported by any reliable source and we do not repeat it. Rely on the registered completion date shown on the MahaRERA portal.',
  },
  {
    q: 'How many towers and floors are there?',
    a: 'Eleven towers on 14 acres. Each runs three basement levels, ground, a podium and 27 floors above it. The total number of homes has not been released.',
  },
  {
    q: 'What are the amenities?',
    a: 'No amenity schedule has been published for this project. Several sites list a generic set for it, none of which comes from the developer, so we do not reproduce them. We will send you the developer’s own schedule once it is released.',
  },
  {
    q: 'Why is there so little information on this project?',
    a: 'Because it is still pre-launch. Serenique is registered with MahaRERA, but the developer has not yet issued a brochure, price list, floor plans or renders. We publish what can be verified and say plainly what cannot, rather than filling the gaps with figures borrowed from elsewhere.',
  },
] as const
