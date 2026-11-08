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
 *   K  THE DEVELOPER'S PRICE LIST, supplied by the client on 2026-11-08: the
 *      one-page cost sheet dated 13 Oct 2026 for Wings A2 and A3 (see
 *      `priceList` below for the file and what is not published from it).
 *      First-party, and the only source of prices on this site. Where its
 *      areas disagree with F, each line is published as the sheet states it
 *      (the price is tied to it) with a CONFLICT note and a visitor note.
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
 *      Serenique price (spec decision 11). Prices come from K only.
 *
 * ─── Standing rule ─────────────────────────────────────────────────────────
 *
 * The project launched in 2026 and the developer has now published plans,
 * carpet areas, amenities, specifications, renders and a brochure, and the
 * client has supplied its price list (K). That list is a dated quotation that
 * has lapsed, so every price on the site carries its date and a line telling
 * the buyer to confirm today's price. Nothing on this page is invented to
 * fill a gap. If you are adding a figure here, it needs a source comment
 * beside it.
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

/* Phase 1's tallest wing, for the "up to N floors" lines. R. */
const maxFloors = Math.max(...phase1.wings.map((wing) => wing.habitableFloors))

/* "30 September 2031" → "30 Sep 2031", so the short form of a date is read
   from the one written out in full rather than retyped. */
const shortDate = (date: string) => date.replace(/^(\d+) (\w{3})\w* (\d{4})$/, '$1 $2 $3')

/* A Phase 1 wing that has a published floor plan (A2, A3). Throws rather than
   letting a missing figure print as "undefined". */
function plannedWing(id: string) {
  const wing = phase1.wings.find((w) => w.id === id)
  if (!wing?.homesPerTypicalFloor || !wing.lifts) {
    throw new Error(`project.ts: no floor-plan figures for Wing ${id}`)
  }
  return { ...wing, homesPerTypicalFloor: wing.homesPerTypicalFloor, lifts: wing.lifts }
}

/* ─── Money and area formatting, shared by every page that prints a price ─── */

const SQFT_PER_SQM = 10.7639
const inrGrouping = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 })
const toSqft = (sqm: number) => Math.round(sqm * SQFT_PER_SQM)
const range = (low: string, high: string) => (low === high ? low : `${low} to ${high}`)

/** ₹95,90,000: the exact figure, Indian digit grouping, as the price list prints it. */
export const rupees = (amount: number) => `₹${inrGrouping.format(amount)}`
/** ₹95.90 L or ₹1.08 Cr, rounded to two decimals, for headlines and cards. */
export const rupeesShort = (amount: number) =>
  amount >= 1e7 ? `₹${(amount / 1e7).toFixed(2)} Cr` : `₹${(amount / 1e5).toFixed(2)} L`
/** 1,021: whole numbers with digit grouping. */
export const grouped = (n: number) => inrGrouping.format(n)

/**
 * One line of the developer's price list, as the sheet prints it.
 */
export type PriceLine = {
  id: string
  /** The sheet's FLAT TYPE column. "2 BHK (REFUGE)" on the sheet is written here in title case. */
  type: '2 BHK' | '3 BHK' | '2 BHK (Refuge)'
  /** The sheet's WING column. null where the sheet does not give a wing. */
  wing: 'A2' | 'A3' | null
  /** The sheet's SERIEL NO. column, as printed. */
  serials: string
  /** The sheet's RERA CARPET AREA. The sale is on this figure (sheet term 4). */
  reraCarpet: { sqm: number; sqft: number }
  balcony: { sqm: number; sqft: number }
  /** null where the sheet leaves the cell blank. */
  dryBalcony: { sqm: number; sqft: number } | null
  /** The sheet's TOTAL CARPET AREA: RERA carpet + balcony + dry balcony. Not RERA carpet. */
  totalCarpet: { sqm: number; sqft: number }
  /** The sheet's LUMP SUM AGREEMENT COST. */
  agreementValue: number
  /** STAMP DUTY 7% (7% of the agreement value, rounded up to the next ₹100). */
  stampDuty: number
  registration: number
  /** C.G.S.T. @2.50% + S.G.S.T. @2.50%, printed on the sheet as two equal columns. */
  gst: number
  /** The sheet's TOTAL COST: agreement value + stamp duty + registration + GST. */
  allIn: number
  /** Shown to visitors under the line where it disagrees with the developer's plans. */
  note?: string
}

/**
 * THE DEVELOPER'S PRICE LIST.
 *
 * K  Source: the one-page cost sheet "UPDETED COST SHEET PDF 13.10.2026.pdf",
 *    headed VENKATESH SERENIQUE and RERA REGISTRATION No. PM1261012601412,
 *    dated 13 Oct 2026 (file name and PDF creation date; the sheet itself
 *    prints no date), issued by the developer for Wings A2 and A3. Supplied
 *    by the client (Blackstone Realty) on 8 Nov 2026 in its client kit. Every
 *    line below is the sheet's line, transcribed via
 *    research_notes/Pune projects content refresh/client-kit-2026-11-08/price-sheets.csv
 *    and re-checked against a render of the sheet. The sheet has 10 lines: 9
 *    in Wings A2 and A3 and one "2 BHK (REFUGE)" line with no wing.
 *
 * Published in full by the user's decision of 8 Nov 2026 (spec decision 12),
 * with the sheet's date and its own conditions. NOT published, by the same
 * decision and the client-kit digest: the sheet itself as an image or PDF,
 * the booking payee's name (Ruling R18), and anything from the channel-partner
 * docket (token scheme, "indicative" price ranges, area tables).
 *
 * ⚠ No price goes into JSON-LD (Ruling R17): the sheet is a dated quotation
 * that has already lapsed, and structured data cannot say "as of".
 *
 * ⚠ The sheet was "valid for 15 Days only" from 13 Oct 2026, so it lapsed on
 * about 28 Oct 2026. The site says so wherever it prints a price. When the
 * client sends a newer sheet, replace `issued` and every line together.
 */
const priceLines: PriceLine[] = [
  {
    id: 'refuge-6-7',
    type: '2 BHK (Refuge)',
    /* CONFLICT: the sheet's WING cell reads "2 BHK (REFUGE)", so no wing is
       given. Its areas differ from both other sources for what is evidently
       the same refuge-floor home (total 975 sq ft in the sheet and the
       docket): the developer's Oct 2026 Wing A2 plan (F) shows it as a
       2-bedroom-plus-study, Series 2, RERA carpet 83.62 sq m, balcony 5.11,
       dry balcony 2.58, total 983 sq ft, and this site's configurations call
       it the 2.5 BHK; the channel-partner docket (2 Sep 2026) calls it a
       "3 BHK" of 83.03 sq m. The sheet also numbers it "6 & 7" where the plan
       has Series 2. Published as the sheet states it, because the price is
       tied to the sheet's figures. On the client list. */
    wing: null,
    serials: '6 & 7',
    reraCarpet: { sqm: 81.4, sqft: 876.19 },
    balcony: { sqm: 9.18, sqft: 98.81 },
    /* The sheet leaves the dry-balcony cells blank on this line. */
    dryBalcony: null,
    totalCarpet: { sqm: 90.58, sqft: 975 },
    agreementValue: 13258000,
    stampDuty: 928100,
    registration: 30000,
    gst: 331450 + 331450,
    allIn: 14879000,
    note: 'The price list names this home “2 BHK (Refuge)” and gives no wing. The developer’s Wing A2 floor plan shows a two-bedroom home with a study on the refuge floors at 83.62 sq m RERA carpet, listed on this site as the 2.5 BHK. Confirm the configuration, wing and area with the sales team.',
  },
  {
    id: 'a2-2-3-6-7',
    type: '2 BHK',
    wing: 'A2',
    serials: '2, 3, 6, 7',
    reraCarpet: { sqm: 65.65, sqft: 706.66 },
    balcony: { sqm: 5.11, sqft: 55 },
    dryBalcony: { sqm: 2.58, sqft: 27.77 },
    totalCarpet: { sqm: 73.34, sqft: 789 },
    agreementValue: 9590000,
    stampDuty: 671300,
    registration: 30000,
    gst: 239750 + 239750,
    allIn: 10770800,
  },
  {
    id: 'a2-1-8',
    type: '2 BHK',
    wing: 'A2',
    serials: '1 & 8',
    reraCarpet: { sqm: 66.77, sqft: 718.71 },
    balcony: { sqm: 5.11, sqft: 55 },
    dryBalcony: { sqm: 2.58, sqft: 27.77 },
    totalCarpet: { sqm: 74.46, sqft: 801 },
    agreementValue: 9718000,
    stampDuty: 680300,
    registration: 30000,
    gst: 242950 + 242950,
    allIn: 10914200,
  },
  {
    id: 'a2-4-5',
    type: '2 BHK',
    wing: 'A2',
    serials: '4 & 5',
    reraCarpet: { sqm: 67.08, sqft: 722.05 },
    balcony: { sqm: 5.11, sqft: 55 },
    dryBalcony: { sqm: 2.58, sqft: 27.77 },
    totalCarpet: { sqm: 74.77, sqft: 805 },
    agreementValue: 9766000,
    stampDuty: 683700,
    registration: 30000,
    gst: 244150 + 244150,
    allIn: 10968000,
  },
  {
    id: 'a3-1',
    type: '2 BHK',
    wing: 'A3',
    serials: '1',
    reraCarpet: { sqm: 67.25, sqft: 723.88 },
    balcony: { sqm: 5.11, sqft: 55 },
    dryBalcony: { sqm: 2.58, sqft: 27.77 },
    totalCarpet: { sqm: 74.94, sqft: 807 },
    agreementValue: 9782000,
    stampDuty: 684800,
    registration: 30000,
    gst: 244550 + 244550,
    allIn: 10985900,
  },
  {
    id: 'a3-2',
    type: '2 BHK',
    wing: 'A3',
    serials: '2',
    reraCarpet: { sqm: 66.86, sqft: 719.68 },
    balcony: { sqm: 5.11, sqft: 55 },
    dryBalcony: { sqm: 2.58, sqft: 27.77 },
    totalCarpet: { sqm: 74.55, sqft: 802 },
    agreementValue: 9734000,
    stampDuty: 681400,
    registration: 30000,
    gst: 243350 + 243350,
    allIn: 10932100,
  },
  {
    id: 'a3-3',
    type: '3 BHK',
    wing: 'A3',
    serials: '3',
    reraCarpet: { sqm: 95.12, sqft: 1023.87 },
    balcony: { sqm: 6.7, sqft: 72.12 },
    dryBalcony: { sqm: 2.78, sqft: 29.92 },
    totalCarpet: { sqm: 104.6, sqft: 1126 },
    agreementValue: 14108000,
    stampDuty: 987600,
    registration: 30000,
    gst: 352700 + 352700,
    allIn: 15831000,
  },
  {
    id: 'a3-4',
    type: '3 BHK',
    wing: 'A3',
    serials: '4',
    reraCarpet: { sqm: 94.85, sqft: 1020.97 },
    balcony: { sqm: 6.7, sqft: 72.12 },
    dryBalcony: { sqm: 2.78, sqft: 29.92 },
    totalCarpet: { sqm: 104.33, sqft: 1123 },
    agreementValue: 14076000,
    stampDuty: 985400,
    registration: 30000,
    gst: 351900 + 351900,
    allIn: 15795200,
  },
  {
    id: 'a3-5',
    type: '2 BHK',
    wing: 'A3',
    serials: '5',
    reraCarpet: { sqm: 67.35, sqft: 724.96 },
    balcony: { sqm: 5.11, sqft: 55 },
    dryBalcony: { sqm: 2.58, sqft: 27.77 },
    totalCarpet: { sqm: 75.04, sqft: 808 },
    agreementValue: 9798000,
    stampDuty: 685900,
    registration: 30000,
    gst: 244950 + 244950,
    allIn: 11003800,
  },
  {
    id: 'a3-6',
    type: '2 BHK',
    wing: 'A3',
    serials: '6',
    /* CONFLICT: the developer's Oct 2026 Wing A3 floor plan (F) gives Series 6
       as 66.93 sq m RERA carpet, total 803 sq ft. The sheet's 67.85 / 813 is
       priced at the same rate per sq m as its neighbours (about ₹1.452 lakh),
       so the price follows the sheet's area. Published as the sheet states it.
       On the client list. */
    reraCarpet: { sqm: 67.85, sqft: 730.34 },
    balcony: { sqm: 5.11, sqft: 55 },
    dryBalcony: { sqm: 2.58, sqft: 27.77 },
    totalCarpet: { sqm: 75.54, sqft: 813 },
    agreementValue: 9854000,
    stampDuty: 689800,
    registration: 30000,
    gst: 246350 + 246350,
    allIn: 11066500,
    note: 'The developer’s Wing A3 floor plan gives this home 66.93 sq m RERA carpet. Confirm the area with the sales team.',
  },
]

/* The sheet's own arithmetic, checked at build time: the all-in total is the
   sum of its parts on every line. A typo in the figures above fails the build
   here rather than reaching a buyer. */
for (const line of priceLines) {
  const sum = line.agreementValue + line.stampDuty + line.registration + line.gst
  if (sum !== line.allIn) {
    throw new Error(`project.ts: price line ${line.id} adds up to ${sum}, not ${line.allIn}`)
  }
}

const PRICE_LIST_ISSUED = '13 October 2026'

export const priceList = {
  /* K: file name and PDF creation date (see the source note above). */
  issued: PRICE_LIST_ISSUED,
  issuedShort: shortDate(PRICE_LIST_ISSUED),
  /* K, term 7: "This quotation/offer is valid for 15 Days only". */
  validDays: 15,
  wings: 'Wings A2 and A3',
  lines: priceLines,
  /* K, terms and notes. Amounts only: the payee named in term 1 is NOT
     published (Ruling R18). PLC is not on this sheet (the docket's
     "PLC + Floor Rise Applicable*" is channel-partner material), so no PLC
     line is printed; on the client list. */
  terms: {
    bookingPercent: 5,
    floorRiseFrom: 5,
    tdsPercent: 1,
    stampDutyPercent: 7,
    gstPercent: 2.5,
    agreementWithinDays: 15,
    maintenanceFund: [
      { type: '1 BHK', amount: 200000 },
      { type: '2 BHK', amount: 300000 },
      { type: '3 BHK', amount: 400000 },
    ],
    advanceMaintenance: {
      months: 30,
      perMonth: [
        { type: '1 BHK', amount: 7000 },
        { type: '2 BHK', amount: 8000 },
        { type: '3 BHK', amount: 9000 },
      ],
    },
  },
}

/** The lines for one FLAT TYPE, cheapest first. */
export function priceLinesFor(type: PriceLine['type']) {
  return priceList.lines.filter((line) => line.type === type).sort((a, b) => a.allIn - b.allIn)
}

/**
 * The starting price for one FLAT TYPE, derived from the lines: the lowest
 * agreement value and the lowest all-in total (not necessarily the same line).
 * `from` is false when every line of that type has the same price.
 */
export function startingPrice(type: PriceLine['type']) {
  const lines = priceLinesFor(type)
  if (lines.length === 0) throw new Error(`project.ts: no price line of type ${type}`)
  const agreement = Math.min(...lines.map((line) => line.agreementValue))
  const allIn = Math.min(...lines.map((line) => line.allIn))
  const from = new Set(lines.map((line) => line.allIn)).size > 1
  return { type, agreement, allIn, from, count: lines.length }
}

/** Every FLAT TYPE on the sheet, in the order the site lists configurations. */
export const priceTypes: PriceLine['type'][] = ['2 BHK', '3 BHK', '2 BHK (Refuge)']

/* The lowest all-in total on the whole sheet. */
const lowestAllIn = Math.min(...priceList.lines.map((line) => line.allIn))

const fund = priceList.terms.maintenanceFund
const advance = priceList.terms.advanceMaintenance
/* "₹2,00,000 (1 BHK), ..., or ₹4,00,000 (3 BHK)". The no-break spaces keep
   "₹2,00,000 (1 BHK)" on one line. */
const joinTypes = (rows: { type: string; amount: number }[]) =>
  rows
    .map((row, i) => `${i === rows.length - 1 ? 'or ' : ''}${rupees(row.amount)} (${row.type.replace(' ', ' ')})`)
    .join(', ')

/**
 * The sheet's conditions, as sentences, for the price-list block, the legal
 * pages and /llms.txt. Each is read from `priceList`.
 */
export const priceConditions = [
  `Prices are as per the developer’s price list dated ${priceList.issued}. It was valid for ${priceList.validDays} days from that date, so confirm the current price with the sales team before you decide.`,
  'The sale is on the RERA carpet area registered with MahaRERA, in sq m.',
  `Floor rise is charged extra from the ${priceList.terms.floorRiseFrom}th residential floor. The price list does not state the rate.`,
  `Booking amount: ${priceList.terms.bookingPercent}% of the agreement value.`,
  `The agreement is registered within ${priceList.terms.agreementWithinDays} days of booking. If you are taking a home loan, the bank’s sanction letter is needed before the agreement.`,
  `Stamp duty (${priceList.terms.stampDutyPercent}%), registration and GST (${priceList.terms.gstPercent}% CGST and ${priceList.terms.gstPercent}% SGST) are at government rates and subject to change. TDS of ${priceList.terms.tdsPercent}% is payable on the agreement value.`,
  `Payable at possession and not in the all-in total: a maintenance contingency fund of ${joinTypes(fund)}, and advance maintenance of ${joinTypes(advance.perMonth)} a month for ${advance.months} months, plus GST.`,
]

/* Areas as the price list prints them: sq m to two places, RERA carpet and
   balcony sq ft to two places, total sq ft whole. */
const twoPlaces = new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
export const sqmText = (sqm: number) => `${twoPlaces.format(sqm)} sq m`
export const sqftText = (sqft: number) =>
  `${Number.isInteger(sqft) ? grouped(sqft) : twoPlaces.format(sqft)} sq ft`

/** Copy for the price-list block on /configurations. */
export const priceCopy = {
  eyebrow: 'Price List',
  heading: `The developer’s price list, dated ${priceList.issued}`,
  lede: `Every line of the developer’s cost sheet for ${priceList.wings}, as the sheet prints it. Quotations on it were valid for ${priceList.validDays} days, so confirm today’s price with our sales team before you decide.`,
  startingHeading: 'Starting prices',
  caption: `The developer’s price list for Venkatesh Serenique ${phase1.label}, dated ${priceList.issued}, one row per line of the sheet.`,
  allInNote:
    'All-in is the price list’s total cost: agreement value, stamp duty, registration and GST. It does not include floor rise, the maintenance contingency fund or advance maintenance.',
  totalCarpetNote:
    'Total carpet area is the price list’s own label: RERA carpet plus balcony and dry balcony. The sale is on the RERA carpet.',
  conditionsHeading: 'Conditions on the price list',
  /* The closing band on /configurations. Was "Get the current price list" /
     "The developer has not published a price list. ...". */
  ctaTitle: 'Get today’s price for your home',
  ctaBody: `The list above is dated ${priceList.issued}. Tell us which home you are considering and we will send today’s price, the full cost sheet and its floor plan.`,
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
     Was "PRE-LAUNCH · REGISTRATIONS OPEN". The registration is Phase 1's,
     so the badge says so (spec decision 9). */
  badge: `NOW LAUNCHED · ${phase1.label.toUpperCase()} MAHARERA REGISTERED`,
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
    { label: `${phase1.label} Floors`, value: `Up to ${maxFloors}` },
    /* R: completion 30/09/2031. Was "Possession: Dec 2031" (P). */
    { label: `${phase1.label} RERA Completion`, value: phase1.completionShort },
  ],
  /* K: the lowest all-in total on the developer's price list, with its date.
     Was "Price: On Request · Ask for the current price list". D's "Starting
     from 2.9 to 5 CR" is a template string shared with its Skydale page and
     is still NOT used (spec decision 11); broker figures are not used either. */
  priceLabel: 'From',
  price: `${rupeesShort(lowestAllIn)} all-in`,
  priceNote: `per the developer’s price list dated ${priceList.issuedShort}. Confirm today’s price with us.`,
  cta: 'Register Your Interest',
  ctaSecondary: 'Get Today’s Price',
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
  { id: 'storeys', label: `Up to ${maxFloors} Habitable Floors` },
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
    `${phase1.label}: one building, three residential wings, up to ${maxFloors} habitable floors`,
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
 * launched and everything is out, including (since 8 Nov 2026) the
 * developer's price list. The one row left unreleased is today's price,
 * because the list is a dated quotation that has lapsed. The ledger stays
 * because it is still the fastest honest answer to "what is actually known",
 * and because the thank-you page reads its unreleased rows as the list of
 * what we will send.
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
    { id: 'scale', label: `${phase1.label} wings`, value: 'A1, A2 & A3', released: true },
    /* R: Wings A2 and A3 (A1 is a single floor). Was "Floors per tower:
       3B + G + P + 27" (★). */
    { id: 'structure', label: `${phase1.label} floors`, value: '27 and 28', released: true },
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
    {
      id: 'completion',
      label: `${phase1.label} completion`,
      value: shortDate(phase1.completion),
      released: true,
    },
    /* K: the developer's price list, published on /configurations. Was
       "Price list: On request". Broker figures and D's template string are
       still not used (see the source header). */
    { id: 'price', label: 'Price list', value: `Dated ${priceList.issuedShort}`, released: true },
    /* The list lapsed 15 days after its date, so today's price still comes
       from the sales team. This is the row the thank-you page lists as what
       we will send. */
    { id: 'currentPrice', label: 'Today’s price', value: 'From our team', released: false },
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
    /* K. Was "The price list is shared on request" / "The developer has not
       published a price list". The list is now on /configurations; what we
       still send is today's price, because the list has lapsed. */
    heading: 'Get today’s price and cost sheet',
    body: `The prices on this site are from the developer’s price list dated ${priceList.issued}, which was valid for ${priceList.validDays} days. Tell us the home you are considering and we will send today’s price and the full cost sheet, including floor rise for your floor.`,
    cta: 'Get Today’s Cost Sheet',
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
  /** RERA carpet range from the developer's floor plans (F), sq m. */
  carpetSqm: readonly [number, number]
  /** The floor plan's own "total area" column, with balconies, sq ft. */
  totalSqft: readonly [number, number]
  /** RERA carpet, in sq ft, derived from `carpetSqm`. */
  area: string
  note: string
  /** The price list's FLAT TYPE that prices this home; null if it is not on the list. */
  priceType: PriceLine['type'] | null
  /** Lowest agreement value on the price list, e.g. "From ₹95.90 L". null if not on the list. */
  agreement: string | null
  /** Lowest all-in total on the price list, e.g. "From ₹1.08 Cr". null if not on the list. */
  price: string | null
}

/* Builds a configuration card from the floor-plan figures, so the sq ft, the
   note and the starting prices are all derived, never retyped. */
function configuration(c: {
  id: string
  type: string
  where: string
  carpetSqm: readonly [number, number]
  totalSqft: readonly [number, number]
  balconies: string
  priceType: PriceLine['type'] | null
  priceNote?: string
}): Configuration {
  const start = c.priceType ? startingPrice(c.priceType) : null
  const from = start?.from ? 'From ' : ''
  const sqm = range(c.carpetSqm[0].toFixed(2), c.carpetSqm[1].toFixed(2))
  const total = range(grouped(c.totalSqft[0]), grouped(c.totalSqft[1]))
  return {
    id: c.id,
    type: c.type,
    carpetSqm: c.carpetSqm,
    totalSqft: c.totalSqft,
    area: `${range(grouped(toSqft(c.carpetSqm[0])), grouped(toSqft(c.carpetSqm[1])))} sq ft`,
    note: `${c.where}. RERA carpet ${sqm} sq m. The plan’s total area, ${c.balconies}, is ${total} sq ft.${c.priceNote ? ` ${c.priceNote}` : ''}`,
    priceType: c.priceType,
    agreement: start ? `${from}${rupeesShort(start.agreement)}` : null,
    price: start ? `${from}${rupeesShort(start.allIn)}` : null,
  }
}

const refugeLine = priceLinesFor('2 BHK (Refuge)')[0]

/* F, read 2026-11-06. Every `area` is the RERA carpet column of the
   carpet-area statement, converted at 10.7639 sq ft per sq m and rounded.
   The "total area" in each note is the plan's own sq ft column, which
   includes the balconies; it is printed so a buyer can match it against
   the figures listing sites quote as "carpet".

   The prices are K, the price list, read by `priceType`. The price list's
   own areas agree with F except for two lines (see the CONFLICT notes in
   `priceLines`), so the cards keep F's areas and the price table shows the
   sheet's.

   The 4 BHK that used to be the third card (★) is gone: no published
   Phase 1 plan contains one. Per-type unit counts are deliberately absent:
   no source states them, and the plans do not reconcile with R's Wing A3
   total (167) on their own. */
const configurationItems = [
  /* F: A2 65.57 / 65.65 / 66.77 / 67.08 sq m; A3 66.86 / 66.93 / 67.25 /
     67.35 sq m. Total area 789 to 805 (A2), 802 to 808 (A3). */
  configuration({
    id: '2bhk',
    type: '2 BHK',
    where: 'Wings A2 and A3',
    carpetSqm: [65.57, 67.35],
    totalSqft: [789, 808],
    balconies: 'with balconies',
    priceType: '2 BHK',
  }),
  /* F: A3 94.85 / 95.12 sq m. Total area 1,123 / 1,126 sq ft. */
  configuration({
    id: '3bhk',
    type: '3 BHK',
    where: 'Wing A3',
    carpetSqm: [94.85, 95.12],
    totalSqft: [1123, 1126],
    balconies: 'with balconies',
    priceType: '3 BHK',
  }),
  /* F: A2 refuge floors, Series 2, 83.62 sq m; total 983 sq ft.
     CONFLICT: priced from the sheet's "2 BHK (REFUGE)" line (81.40 sq m,
     no wing), which is evidently this home (both totals near 975 to 983
     sq ft, the only refuge-floor line). See the note on that line. */
  configuration({
    id: '2-5bhk',
    type: '2.5 BHK',
    where: 'Wing A2, on the refuge floors only',
    carpetSqm: [83.62, 83.62],
    totalSqft: [983, 983],
    balconies: 'with balconies',
    priceType: '2 BHK (Refuge)',
    priceNote: `The price list calls it “2 BHK (Refuge)” and gives ${refugeLine.reraCarpet.sqm.toFixed(2)} sq m; confirm the area with the sales team.`,
  }),
  /* F: A3 refuge floors, Series 5, 48.98 sq m; total 582 sq ft. Not on the
     price list, although the list's maintenance terms mention a 1 BHK. On
     the client list. */
  configuration({
    id: '1bhk',
    type: '1 BHK',
    where: 'Wing A3, on the refuge floors only',
    carpetSqm: [48.98, 48.98],
    totalSqft: [582, 582],
    balconies: 'with the balcony',
    priceType: null,
  }),
] satisfies Configuration[]

/* A configuration card by id. Throws rather than printing "undefined". */
function configItem(id: string) {
  const item = configurationItems.find((c) => c.id === id)
  if (!item) throw new Error(`project.ts: no configuration "${id}"`)
  return item
}

export const configurations = {
  heading: 'Configurations',
  /* D, F and K. Was "planned as 2, 3 and 4 BHK homes across eleven towers ...
     The developer has not published carpet areas or pricing yet" (★), then
     "... Prices are shared on request" (until 8 Nov 2026). */
  intro: `Phase 1 has 2 and 3 BHK homes across Wings A2 and A3, with a few 1 BHK and 2.5 BHK homes on the refuge floors. The carpet areas below are the RERA carpet areas printed on the developer’s floor plans, and the prices are from its price list dated ${priceList.issued}.`,
  /* Page metadata for /configurations. The title is kept under 60
     characters INCLUDING the "| Venkatesh Serenique" the layout appends. */
  metaTitle: '2 & 3 BHK: Price List & Carpet Areas',
  /* K and F. Was "... plus 1 BHK and 2.5 BHK. Prices on request." */
  metaDescription: `Phase 1, Bavdhan: 2 BHK of ${configItem('2bhk').area} and 3 BHK of ${configItem('3bhk').area} RERA carpet, from ${rupeesShort(startingPrice('2 BHK').allIn)} all-in on the price list of ${priceList.issuedShort}.`,
  /* What the card prints in its "Floor plan" row. F. Was "Awaited". */
  planStatus: 'On request',
  /* The lede over the scale ledger on /configurations. R and D. Was "Eleven
     towers of three basements, ground, podium and 27 floors, on 14 acres at
     Bavdhan" (★). */
  scaleLede: `${phase1.label} is one building of three residential wings, ${overview.structure}, on ${phase1.landAcres} acres of a ${phase1.parcelAcres}-acre parcel.`,
  items: configurationItems,
  /* Under the cards on the home page, beside a link to the full list. */
  pricesNote: `Prices are the starting lines of the developer’s price list dated ${priceList.issuedShort}, which has lapsed; confirm today’s price with us.`,
  /* Was "Register for Areas & Pricing". */
  cta: 'Get Today’s Price & Cost Sheet',
}

/**
 * The home page's <title> and meta description, the share-card alt text and
 * the project description in the JSON-LD. Kept here rather than in
 * layout.tsx / structured-data.tsx so the figures in them are read from the
 * same values as the page, not retyped.
 *
 * `title` must stay under 65 characters and `description` between 70 and 165
 * (`npm run audit` checks both).
 *
 * ⚠ No price in `schemaDescription`: it is JSON-LD (Ruling R17).
 */
export const siteMeta = {
  /* D: "Premium 2 & 3 BHK Residences". Was "2, 3 & 4 BHK Pre-Launch" (★). */
  title: 'Venkatesh Serenique Bavdhan | 2 & 3 BHK Homes, Pune',
  /* F for the carpet area, R for the rest. */
  description: `${phase1.label} near Chandani Chowk, Bavdhan: 2 & 3 BHK from ${grouped(toSqft(configItem('2bhk').carpetSqm[0]))} sq ft RERA carpet, ${phase1.homes} homes, MahaRERA ${phase1.reraId}, completion ${phase1.completionShort}.`,
  ogAlt: 'Venkatesh Serenique, 2 & 3 BHK homes near Chandani Chowk, Bavdhan, Pune',
  /* Was "... Prices are on request." No figure: see the ⚠ above. */
  schemaDescription: `Residential development by Venkatesh Buildcon near Chandani Chowk, Bavdhan, Pune. ${phase1.label}, MahaRERA ${phase1.reraId}, is one building of three residential wings with ${phase1.homes} homes and ${phase1.shops} shops, in 1, 2, 2.5 and 3 BHK configurations, with a declared completion date of ${phase1.completion}. The developer’s dated price list is shown on the site’s configurations page.`,
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

  /* Was "Distances from Bavdhan", but most of the values below are the
     developer's bands, measured from the project, not from the suburb. */
  connectivityHeading: 'Key distances',
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
  heading: 'Get today’s price and the plans',
  body: 'Leave your number and we will send today’s price and cost sheet, the floor plan for the home you are considering and the brochure, and arrange a site visit.',
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
 * What the visitor gets is today's price and the plans, sent by the team.
 * The brochure download appears here too, because `brochure` below is set
 * (it renders only after an enquiry from this tab).
 *
 * `steps[].when` are commitments the sales team has to keep. Soften them here
 * rather than letting the page write a cheque the client cannot cash. Do not
 * add a new one without the client's say-so.
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
      /* K. Was "The developer has not published a price list, so ...". */
      body: `The price list on this site is dated ${priceList.issued}. Today’s price for the home you asked about, with floor rise for its floor, comes to you directly from us.`,
    },
    {
      id: 'send',
      /* Reverted to the wording before November 2026: Task 3 had changed it
         to "With the call", a timing the client never committed to. */
      when: 'The day it is issued',
      title: 'You get the documents',
      body: 'Today’s cost sheet, the floor plan for the home you are considering and the brochure. No drip campaign and no newsletter.',
    },
  ],

  awaitingHeading: 'What you will be sent',
  /* K. Was "... The price list is the one thing it has not, and we send it
     on request." */
  awaitingLede: `The plans, the amenity list, the specifications and the developer’s price list dated ${priceList.issued} are all on this site. That list was valid for ${priceList.validDays} days, so today’s price comes from us.`,

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
     layouts and the possession date have not been finalised or published",
     then (until 8 Nov 2026) "The developer has not published a price list." */
  disclaimer: `We are an authorised marketing partner for this project. Content is provided by the respective owners and this website is published for information only. Nothing here is an offer, and no service is being sold through it. The registration details, the plot, the number of homes and the completion date are as filed with MahaRERA for Phase 1. Configurations, carpet areas, amenities and specifications are as published by the developer. Prices are as per the developer’s price list dated ${priceList.issued}, which was valid for ${priceList.validDays} days from that date; confirm the current price with our sales team. Taxes and duties are at government rates and subject to change. Every figure on this site is attributed to its source and remains subject to change without notice. No home referred to here is guaranteed to be available. We may share your data with MahaRERA-registered entities where that is necessary to process your enquiry. You can expect a call, SMS or email on the details you register with us.`,
  copyright: 'Venkatesh Serenique, Bavdhan. All rights reserved.',
  links: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-conditions', label: 'Terms & Conditions' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  /* Was "..., prices are on request, and ...". */
  disclaimerShort: `We are an authorised marketing partner for this project. This site is published for information only and is not an offer. Figures are as filed with MahaRERA for Phase 1 or as published by the developer, prices are from the developer’s price list dated ${priceList.issuedShort} and must be confirmed with our sales team, and every figure shown is subject to change.`,
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
 * "we don't know yet"; since 8 Nov 2026 none is, because the price list is
 * published too.
 *
 * ⚠ `inSchema: false` keeps a question out of the FAQPage JSON-LD while it
 * stays visible (markup may cover a subset of the visible questions, never
 * more). The price answer carries ₹ figures from a dated, lapsed quotation,
 * and no price goes into structured data (Ruling R17).
 */
export type Faq = { q: string; a: string; inSchema?: false }

const plannedA2 = plannedWing('A2')
const plannedA3 = plannedWing('A3')
const start2 = startingPrice('2 BHK')
const start3 = startingPrice('3 BHK')

export const faqs: Faq[] = [
  {
    q: 'Where is Venkatesh Serenique located?',
    /* R: plot. Was "The developer has not yet published a street address". */
    a: `At Bavdhan Khurd, near the Chandani Chowk junction where Paud Road meets National Highway 48. The MahaRERA certificate for Phase 1 records the plot as ${phase1.plot}.`,
  },
  {
    q: 'What configurations are available?',
    /* D and F. Was "planned as 2, 3 and 4 BHK homes across eleven towers on
       14 acres" (★). */
    a: `Phase 1 is mostly 2 and 3 BHK homes. Wing A2 has 2 BHK homes and Wing A3 has 2 and 3 BHK homes, and the refuge floors add a 2.5 BHK in Wing A2 and a 1 BHK in Wing A3. RERA carpet areas run from ${configItem('2bhk').area} for a 2 BHK and ${configItem('3bhk').area} for a 3 BHK. No 4 BHK appears in any plan the developer has published for Phase 1.`,
  },
  {
    q: 'What is the price of a flat at Venkatesh Serenique?',
    /* K. Was "The developer has not published a price list for Serenique
       ... Ask us and we will send the current price". Kept out of the
       FAQPage JSON-LD (see ⚠ above). */
    a: `The developer’s price list dated ${priceList.issued} starts at ${rupees(start2.agreement)} agreement value for a 2 BHK, or ${rupees(start2.allIn)} all-in with stamp duty, registration and GST, and at ${rupees(start3.agreement)} for a 3 BHK, or ${rupees(start3.allIn)} all-in. Every line, including the refuge-floor home, is on the configurations page. Floor rise from the ${priceList.terms.floorRiseFrom}th residential floor, the maintenance contingency fund and advance maintenance are extra. The list was valid for ${priceList.validDays} days, so ask us for today’s price.`,
    inSchema: false,
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
    a: `Phase 1 is a single building with three residential wings, A1, A2 and A3, above a parking podium, plus ${phase1.shops} shops at street level. Wing ${plannedA2.id} has ${plannedA2.habitableFloors} habitable floors, with ${plannedA2.homesPerTypicalFloor} homes on a typical floor served by ${plannedA2.lifts}. Wing ${plannedA3.id} has ${plannedA3.habitableFloors}, with ${plannedA3.homesPerTypicalFloor} homes on a typical floor served by ${plannedA3.lifts}. Phase 1 registers ${phase1.homes} homes in all. The developer gives the whole parcel as ${phase1.parcelAcres} acres, of which Phase 1 takes ${phase1.landAcres} and ${phase1.futureAcres} acres are marked for future development.`,
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
    /* No figure here: this answer is in the JSON-LD. Was "... The one thing
       it has not published is a price list, which we send on request." */
    a: `Yes. The developer lists Serenique among its ongoing projects and describes it as launched. It has published renders, a master layout, floor plans with RERA carpet areas, the amenity list, the specifications and a brochure, and its price list dated ${priceList.issued} is on the configurations page.`,
  },
]

/**
 * The developer's official brochure, handed over on /thank-you after an
 * enquiry (components/brochure-download.tsx). Set it to `null` to switch the
 * download off; the thank-you page is then unchanged.
 *
 * `npm run audit` fails if `href` points at a file that is missing or empty.
 *
 * D: https://venkateshbuildcon.com/wp-content/uploads/2026/10/Serenique_Main-Brochure-12X11_08-Oct-2_compressed-1.pdf
 * (41.8 MB, 44 pages, InDesign export dated 8 Oct 2026). Offered by the
 * user's decision of 8 Nov 2026 (spec decision 13), even though it prints the
 * developer's own sales numbers. Every page was rendered and read on
 * 2026-11-08: it is Serenique Phase 1's (MahaRERA PM1261012601412 on the
 * cover, master plan and back cover); no broker, portal or third-party mark;
 * NO price anywhere (in particular not D's "2.9 to 5 CR" template string),
 * no floor plans and no carpet areas.
 *
 * What it prints that this site does not repeat (on the client list):
 *   • "552 Flats & 13 Showrooms" (p.11), against MahaRERA's 380 homes and
 *     13 shops for Phase 1. Not labelled as a phase figure.
 *   • "28-Storey Towers" and "6-Level Parking" (p.11). MahaRERA has 27
 *     habitable floors in A2 and 28 in A3; parking levels are not on record.
 *   • "3 & 2 BHK" only (cover); the floor plans also have a 1 BHK and a
 *     2.5 BHK on the refuge floors.
 *   • A "Key distances" table (pp.40 to 41) in exact km that differs from the
 *     developer's own website bands this site uses (e.g. Ryan International
 *     School 3.0 km and Chellaram Hospital 5.0 km, both "within 2 km" on the
 *     website; Jupiter Hospital, Baner 12.2 km against "about 6 km" here).
 *   • The developer's sales phone numbers (p.44) and its own statistics
 *     (p.5, "6500+ happy families", "CRISIL A-Stable rated for group").
 *   • Lifestyle images marked "AI-Generated Image" (pp.6, 9, 23).
 *
 * The file in public/brochure/ is a compressed copy made on 2026-11-08 with
 * PyMuPDF: text, QR and spec pages (1, 4, 36, 37, 40, 41, 44) kept as vectors,
 * the rest rendered at 108 dpi (page 42, the portfolio, at 150 dpi) as JPEG
 * q68, metadata reduced to a title. 41.8 MB to 7.8 MB; legibility re-checked.
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

export const brochure: Brochure | null = {
  href: '/brochure/venkatesh-serenique-brochure.pdf',
  title: 'Download the Venkatesh Serenique brochure',
  sizeLabel: 'PDF, 7.8 MB',
  source:
    'Developer website, Serenique_Main-Brochure-12X11_08-Oct-2_compressed-1.pdf (8 Oct 2026), compressed copy made 2026-11-08',
}
