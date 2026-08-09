import type { Metadata } from 'next'

import { CtaButton, RegisterForm } from '@/components/lead'
import { PageHero } from '@/components/page-shell'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { Container, Eyebrow, Section } from '@/components/ui'
import { contact, legal, site, siteVisit } from '@/content/project'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/contact',
  title: 'Contact & Enquiries',
  description: `Speak to the team about Venkatesh Serenique, Bavdhan. Call ${site.phoneDisplay} or leave your number for a same-day call back.`,
})

export default function ContactPage() {
  return (
    <>
      <BreadcrumbStructuredData name="Contact" path="/contact" />
      <PageHero eyebrow="Get In Touch" title="Contact" lede={contact.lede} />

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Call</Eyebrow>
              <a
                href={`tel:${site.phone}`}
                className="mt-4 block font-display text-3xl text-ink hover:text-brand md:text-4xl"
              >
                {site.phoneDisplay}
              </a>

              <p className="eyebrow mt-10 text-muted">Email</p>
              <a
                href={`mailto:${site.leadEmail}`}
                className="mt-2 block text-base text-brand underline underline-offset-4"
              >
                {site.leadEmail}
              </a>

              <p className="eyebrow mt-10 text-muted">Project</p>
              <p className="mt-2 text-base text-body">
                {site.name}, {site.locality}
              </p>
              <p className="mt-1 text-sm text-muted">
                Registered as {site.registeredName}. MahaRERA{' '}
                {legal.reraRegistrations[0]?.id}.
              </p>

              <p className="eyebrow mt-10 text-muted">Developer&rsquo;s corporate office</p>
              <p className="mt-2 text-sm text-body">{legal.officeAddress}</p>
            </div>

            <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
              <h2 className="text-xl">{contact.formHeading}</h2>
              <p className="mt-3 text-sm text-body">{contact.formBody}</p>

              <div className="mt-8 space-y-3">
                <CtaButton intent="Register your interest" full size="lg">
                  Register Your Interest
                </CtaButton>
                <CtaButton intent="Request the price list" variant="secondary" full>
                  Request the Price List
                </CtaButton>
                <CtaButton intent="Book a site visit" variant="secondary" full>
                  Book a Site Visit
                </CtaButton>
              </div>

              <p className="mt-8 text-xs leading-relaxed text-muted">
                By submitting an enquiry you consent to be contacted about this project, including
                on a number registered with the National Do Not Call Registry.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="mx-auto max-w-[46rem] text-center">
            <Eyebrow>Register</Eyebrow>
            <h2 className="mt-5 text-2xl md:text-3xl">{siteVisit.heading}</h2>
            <p className="mt-4 text-base text-body">{siteVisit.body}</p>
            <div className="mt-8">
              <RegisterForm
                namePlaceholder={siteVisit.namePlaceholder}
                phonePlaceholder={siteVisit.phonePlaceholder}
                cta={siteVisit.cta}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
