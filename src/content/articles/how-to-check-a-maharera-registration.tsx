import { Figure } from '@/components/article-figure'

import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'how-to-check-a-maharera-registration',
  title: 'How to check a MahaRERA registration before you pay anything',
  excerpt:
    'Any project can print a registration number on a website. Checking it takes about two minutes on the government portal, and it tells you things the brochure will not.',
  category: 'Buying Guide',
  publishedAt: '2026-08-09',
  author: 'Blackstone Realty',
  readingMinutes: 5,
  cover: {
    src: '/illustrations/maharera-lookup.svg',
    alt: 'What to read on a MahaRERA project record and which name to search under',
  },
  sources: [
    { label: 'MahaRERA portal', href: 'https://maharera.maharashtra.gov.in/' },
    {
      label: 'Real Estate (Regulation and Development) Act, 2016',
      href: 'https://www.indiacode.nic.in/handle/123456789/2158',
    },
  ],
}

export default function Body() {
  return (
    <>
      <p>
        A registration number on a marketing website is a claim, not proof. It is text on a page,
        and whoever typed it may have copied it from another site that copied it from somewhere
        else. The number itself is not the protection. Looking it up is.
      </p>
      <p>
        The lookup is free, public and takes about two minutes. Here is what to do and, more useful,
        what to actually read once the page loads.
      </p>

      <h2>The two-minute check</h2>
      <ol>
        <li>
          Go to <strong>maharera.maharashtra.gov.in</strong> and open the registered projects
          search.
        </li>
        <li>
          Search by the registration number if you have one. If you only have a project name, search
          by that instead, then by the promoter&rsquo;s name. Marketing names and registered names
          are often different, so a name search that returns nothing does not mean the project is
          unregistered.
        </li>
        <li>Open the project record and read the certificate, not just the header.</li>
      </ol>

      <h2>What to read once you are there</h2>

      <h3>The registered name, not the marketing name</h3>
      <p>
        Projects are advertised under one name and registered under another. This one is marketed as
        Venkatesh Serenique and registered as <strong>Shree Venkatesh Serenique Phase 1</strong>. A
        mismatch is normal. What matters is that the record you are reading is unmistakably the
        project you are being sold, at the same address, by the same promoter.
      </p>

      <h3>Which phase you are actually buying in</h3>
      <p>
        This is the one most people miss. A large development is registered in phases, and each
        phase is a separate registration with its own completion date and its own approved plans. A
        site advertising eleven towers may hold a registration covering rather fewer of them.
      </p>
      <p>
        Ask which phase your flat sits in and check that phase&rsquo;s registration. A neighbouring
        phase being registered tells you nothing about yours.
      </p>

      <h3>The completion date on the certificate</h3>
      <p>
        The portal shows the date the promoter committed to. Compare it with the date you have been
        given verbally. If the brochure says one year and the registration says another, the
        registration is the one with legal weight behind it, and the gap is worth asking about
        before you pay rather than after.
      </p>

      <h3>The approved plans and the land title</h3>
      <p>
        Registered projects upload their sanctioned layout, building plans and title report. These
        are the documents that tell you whether the amenity you were shown is approved or merely
        drawn. Download them. They are also the version a court would look at.
      </p>

      <h3>Complaints against the promoter</h3>
      <p>
        The portal lists orders and complaints. A large builder having some is not automatically
        alarming, given the volume they handle. A pattern of the same complaint across several
        projects is a different signal, and it is public.
      </p>

      <h2>On this project&rsquo;s number</h2>
      <p>
        The registration number for Serenique is printed in the footer of every page on this site.
        We reproduce it exactly as the project&rsquo;s listing partner published it, and we have not
        yet confirmed it against the portal ourselves.
      </p>
      <p>
        We would rather say that than imply a check we have not done. Look it up yourself before any
        payment. If what you find differs from what is printed here, the portal is right and we want
        to know.
      </p>

      <Figure
        src="/illustrations/phase-one.svg"
        alt="Diagram showing that a phase registration covers only part of a multi-tower scheme"
        width={1200}
        height={675}
        caption="A phase registration covers a phase. On an eleven-tower scheme that is a distinction worth holding on to."
        credit="Illustration"
      />

      <h2>Two things registration does not mean</h2>
      <p>
        <strong>It is not a quality guarantee.</strong> RERA regulates disclosure, timelines and the
        handling of your money. It does not inspect the concrete or vet the amenity list.
      </p>
      <p>
        <strong>It is not a promise the project will finish on time.</strong> It gives you a
        documented date and a route to recourse if that date is missed. That is genuinely valuable
        and it is not the same as certainty.
      </p>

      <h2>Before you transfer money</h2>
      <p>
        Confirm the registration covers your phase. Confirm the promoter named on the certificate is
        the party you are paying. Get the payment schedule in writing against construction stages
        rather than dates. And keep in mind that under the Act, no more than ten per cent of the
        cost can be taken before a written agreement for sale is signed and registered.
      </p>
      <p>
        None of this is difficult. It is just rarely done, because the paperwork arrives when
        everyone is already excited about the flat.
      </p>
    </>
  )
}
