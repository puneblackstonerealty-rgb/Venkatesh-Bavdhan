/**
 * Copy for the policy pages.
 *
 * ⚠ These are drafted to match how THIS site actually behaves — what the lead
 * form collects, where it is sent, who the advertiser is, and what the RERA
 * position is — rather than pasted from a generic template. They are still not
 * legal advice and should be reviewed by the client's own counsel before the
 * site goes live.
 *
 * Until November 2026 these pages stated the pre-launch position bluntly,
 * because nothing had been published. Rewritten 2026-11-06 for the launched
 * project: Phase 1 is on the MahaRERA record and the developer has published
 * plans, carpet areas, amenities, specifications, renders and a brochure.
 * Updated 2026-11-08: the site now also publishes the developer's price list
 * (dated, lapsed), so the price sections say what that list is and is not.
 * A policy page that contradicted the site it governs would be worse than
 * none.
 *
 * Figures are not retyped here: the registration details are read from
 * `phase1` and the price-list date and conditions from `priceList` in
 * project.ts.
 */

import { phase1, priceList } from './project'

export const legalPages = {
  lastUpdated: '8 November 2026',

  terms: {
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    lede: 'The terms on which this website is made available. By using the site you accept them.',
    sections: [
      {
        heading: 'Who operates this website',
        paragraphs: [
          'This website is operated by Blackstone Realty, Pune, an authorised marketing partner for Venkatesh Serenique, Bavdhan. It is not operated by the developer and it is not the developer’s official website.',
        ],
      },
      {
        heading: 'What has been published',
        paragraphs: [
          `Venkatesh Serenique has been launched by the developer, and ${phase1.label} is registered with MahaRERA under number ${phase1.reraId}. At the date this page was last updated, the developer had published floor plans with RERA carpet areas, an amenity list, specifications, renders and a brochure, and this site also showed the developer’s price list dated ${priceList.issued}.`,
          'Where this site states a figure, it states where the figure came from: the MahaRERA record for Phase 1, or the developer’s own published material. Where nothing has been published, this site says so rather than substituting a figure from a comparable project or a market average. Where this site summarises the developer’s material, the developer’s own documents and the MahaRERA record govern.',
        ],
      },
      {
        heading: 'The information here is not an offer',
        paragraphs: [
          'Nothing on this website constitutes an offer, an invitation to offer, or a contract of any kind. No booking, allotment or reservation arises from anything published here or from any enquiry you submit.',
          'Any transaction will be governed solely by the agreement for sale and the allotment letter executed between you and the developer, and by the MahaRERA registration applicable to the phase you buy in. Where anything on this site differs from those documents, those documents govern.',
        ],
      },
      {
        heading: 'Prices, areas and availability',
        paragraphs: [
          `Prices on this site are taken from the developer’s price list dated ${priceList.issued}, for ${priceList.wings}. That list was a quotation valid for ${priceList.validDays} days from its date, so the price you are offered may differ from it. Its agreement values exclude floor rise, which applies from the ${priceList.terms.floorRiseFrom}th residential floor, the maintenance contingency fund and advance maintenance. Its all-in totals add stamp duty, registration and GST at government rates, which are subject to change.`,
          'Any price quoted to you in the course of an enquiry is indicative, is exclusive of stamp duty, registration, GST, maintenance and every other statutory charge unless expressly stated, and may change at any time without notice. The price in your allotment letter and agreement for sale is the one that applies.',
          'Areas stated on this site are carpet areas as defined under the Real Estate (Regulation and Development) Act, 2016, taken from the RERA carpet-area statements on the developer’s floor plans. They are subject to the tolerances and final measurements recorded in the agreement for sale.',
          'Inventory and offers may change at any time. Availability is not guaranteed at the price or on the terms discussed.',
        ],
      },
      {
        heading: 'Images and plans',
        paragraphs: [
          'Any render, elevation, layout, floor plan or master plan of this project shown on this site is the developer’s own. It is an artistic impression, is labelled as one, and is indicative only, subject to change and to approval by the sanctioning authorities.',
        ],
      },
      {
        heading: 'Enquiries and contact',
        paragraphs: [
          'When you submit an enquiry you consent to being contacted about this project by phone, SMS, WhatsApp and email, including on a number registered with the National Do Not Call Registry or DND list. You may withdraw that consent at any time by writing to us at the address on the contact page.',
        ],
      },
      {
        heading: 'Third-party content',
        paragraphs: [
          'The location page embeds a Google Maps frame showing the Bavdhan locality. That service is operated by Google and is subject to Google’s own terms and privacy policy. We do not control it.',
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'Project names, marks and logos belong to their respective owners and are used here for the marketing of this project. The rest of the site’s content and design may not be copied or reused without written consent.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'The site is provided on an “as is” basis. To the extent permitted by law, we exclude liability for any loss arising from reliance on information published here. Nothing in these terms limits any right you have under the Real Estate (Regulation and Development) Act, 2016 or the Consumer Protection Act, 2019.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: [
          'These terms are governed by the laws of India, and the courts at Pune, Maharashtra have jurisdiction.',
        ],
      },
    ],
  },

  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    lede: 'What this site collects when you enquire, where it goes, and how to have it removed.',
    sections: [
      {
        heading: 'What we collect',
        paragraphs: [
          'We only collect what you send us through an enquiry form or the chat window. That is:',
        ],
        list: [
          'Your name.',
          'Your mobile number, and the country code you select in the chat window.',
          'Your email address, if you choose to give one. The field is optional and the chat window does not ask for it.',
          'Which enquiry you submitted (for example “Request the Price List”), and in the chat window the configuration you selected.',
          'The page you were on when you submitted.',
          'Your IP address and browser user-agent, recorded with the enquiry as a basic anti-abuse measure.',
        ],
        after: [
          'We do not set cookies of our own. This site does load Google Tag Manager, which is covered in its own section below.',
        ],
      },
      {
        heading: 'How we use it',
        paragraphs: [
          'To contact you about Venkatesh Serenique. That means answering your question, sending you the price list, floor plans, brochure or amenity schedule, and arranging a site visit. That is the only purpose.',
          'We do not sell your data, and we do not use it for unrelated marketing.',
        ],
      },
      {
        heading: 'Who it is shared with',
        paragraphs: ['Your enquiry is sent to:'],
        list: [
          'Our own sales team, by email, and to a Google Sheet we control.',
          'The developer and its MahaRERA-registered entities, where that is necessary to process your enquiry or your booking.',
        ],
        after: [
          'Enquiries are stored in Google Sheets and notified by Google’s mail service, both under Google’s own terms. Beyond that, your details are not passed to anyone else.',
        ],
      },
      {
        heading: 'The chat window',
        paragraphs: [
          'The chat window runs entirely from this website and sends what you enter in it to the same place as the forms. It is not a third-party chat service, it does not load anything from another company, and nothing you type reaches anyone until you submit your mobile number.',
        ],
      },
      {
        heading: 'Analytics and tag management',
        paragraphs: [
          'This site loads Google Analytics and Google Tag Manager. Together they record which pages you visit, roughly where you are, which site or advertisement you arrived from, and what kind of device and browser you use.',
          'This is measurement of how the site is used, not identification of you. We do not send your name, phone number or email address to Google, and we do not use analytics to build a profile of you or to match you to an enquiry you submitted.',
          'These tools set cookies in your browser and your IP address is processed by Google, under Google’s own privacy policy rather than this one. You can stop them entirely with Google’s official browser opt-out add-on, with your browser’s cookie controls, or with any standard tracker blocker. Nothing on this site stops working if you do, including the enquiry forms.',
        ],
      },
      {
        heading: 'Third-party embeds',
        paragraphs: [
          'The location page embeds a Google Maps frame, which loads with the page. Once it loads, Google may set cookies and receive your IP address under its own privacy policy. Blocking it does not affect anything else on the site.',
        ],
      },
      {
        heading: 'How long we keep it',
        paragraphs: [
          'Enquiries are kept for as long as needed to follow up and to meet any record-keeping obligation, then deleted. If you ask us to delete your details sooner, we will.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'You can ask us for a copy of what we hold about you, ask us to correct it, ask us to delete it, or withdraw your consent to being contacted. Write to us at the address on the contact page and we will act on it.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about this policy, or a request about your data, should go to the contact details on our contact page.',
        ],
      },
    ],
  },

  disclaimer: {
    eyebrow: 'Legal',
    title: 'Disclaimer',
    lede: 'What this website is, what it is not, and what you should rely on instead.',
    sections: [
      {
        heading: 'This is a marketing website',
        paragraphs: [
          'We are an authorised marketing partner for Venkatesh Serenique, Bavdhan. This is not the developer’s official website. The content here is published for information only.',
        ],
      },
      {
        heading: 'What has been published, and what has not',
        paragraphs: [
          `The developer has launched this project and has published floor plans with RERA carpet areas, an amenity list, specifications, renders, a master layout and a brochure. This site also shows the developer’s price list dated ${priceList.issued}. That list was valid for ${priceList.validDays} days from its date, so confirm the current price with our sales team before you rely on it.`,
          'Several websites publish prices and other figures for this project that do not come from the developer or from MahaRERA, and in August 2026 one of them reproduced a different Venkatesh project’s statistics on a Bavdhan page. We do not repeat them. Where this site shows nothing, it is because nothing verifiable exists, not because it has been left out.',
        ],
      },
      {
        heading: 'It is not an offer',
        paragraphs: [
          'Nothing on this site constitutes an offer or a contract. Any purchase is governed solely by the agreement for sale and allotment letter signed between you and the developer, together with the applicable MahaRERA registration.',
        ],
      },
      {
        heading: 'Where our figures come from',
        paragraphs: [
          `The registration number, the registered name, the plot, the building and its wings, the number of homes and shops, the floor counts and the completion date of ${phase1.completion} are taken from the MahaRERA record for ${phase1.label}. They describe Phase 1 only, not the whole land parcel.`,
          'The land area, the configurations, the carpet areas, the amenities and the specifications are taken from the developer’s own website and floor plans. Where they differ from figures this site published before the launch, the published figures replace the earlier ones.',
          `Prices are taken from the developer’s price list dated ${priceList.issued}, line by line as it prints them. Where a line’s area differs from the developer’s floor plans, the line is shown as the price list states it, with a note.`,
          'Some locality distances on the location page are the developer’s own distance bands, measured from the project; the rest are compiled from public locality data and measured from the suburb. Confirm every figure against the developer’s own documentation and the MahaRERA portal before you act on it.',
        ],
      },
      {
        heading: 'Verify on the MahaRERA portal',
        paragraphs: [
          `${phase1.label} is registered under the name ${phase1.registeredName}, registration number ${phase1.reraId}, which is also printed in the footer of every page. We checked it against the MahaRERA portal on 6 November 2026. Check it yourself at maharera.maharashtra.gov.in before making any payment.`,
        ],
      },
      {
        heading: 'Contact and consent',
        paragraphs: [
          'By submitting an enquiry you agree to be contacted about this project by phone, SMS, WhatsApp or email, including on a number registered with the National Do Not Call Registry.',
        ],
      },
    ],
  },
} as const
