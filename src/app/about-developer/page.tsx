import type { Metadata } from 'next'
import Image from 'next/image'

import { CtaButton } from '@/components/lead'
import { PageCta, PageHero } from '@/components/page-shell'
import { ProjectCard } from '@/components/project-card'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { Button, Container, Section, SectionHead } from '@/components/ui'
import { completedProjects, launchProjects, ongoingProjects, portfolio } from '@/content/developer-projects'
import { developer, site } from '@/content/project'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/about-developer',
  title: 'About the Developer',
  description: `Venkatesh Buildcon has built ${portfolio.total} projects across Pune in 26 years, from Kothrud and Mundhwa to Shivajinagar, Baner and Kharadi. The portfolio behind Serenique.`,
})

export default function AboutDeveloperPage() {
  return (
    <>
      <BreadcrumbStructuredData name="About the Developer" path="/about-developer" />
      <PageHero eyebrow="The Developer" title="About the developer" lede={developer.tagline} />

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              {/* The developer's mark, full colour, as confirmed by the client. */}
              <Image
                src={site.developerLogo}
                alt={site.developerLegalName}
                width={2000}
                height={719}
                priority
                className="h-14 w-auto sm:h-16"
              />

              {developer.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-5 text-base text-body">
                  {paragraph}
                </p>
              ))}

            </div>

            <dl className="grid h-fit gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {developer.stats.map((stat) => (
                <div key={stat.id} className="rounded-lg border border-line bg-card p-6">
                  <dd className="font-display text-4xl text-brand">{stat.value}</dd>
                  <dt className="eyebrow mt-2 text-muted">{stat.label}</dt>
                </div>
              ))}
              <div className="rounded-lg border border-line bg-card p-6">
                <dd className="font-display text-4xl text-brand">{portfolio.total}</dd>
                <dt className="eyebrow mt-2 text-muted">Projects across Pune</dt>
              </div>
              <div className="rounded-lg border border-line bg-card p-6">
                <dd className="font-display text-4xl text-brand">{completedProjects.length}</dd>
                <dt className="eyebrow mt-2 text-muted">Delivered</dt>
              </div>
            </dl>
          </div>
        </Container>
      </Section>

      {/* ── Current launches ───────────────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <SectionHead
            eyebrow="Track Record"
            title={portfolio.heading}
            lede={portfolio.lede}
          />

          <div className="mt-14">
            <GroupHead
              label={portfolio.groups[0].label}
              note={portfolio.groups[0].note}
              count={launchProjects.length}
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {launchProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  variant="feature"
                  /* Next identifies this first tile as the page's LCP element.
                     Only this one is eager — see the note in project-card.tsx. */
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Ongoing ────────────────────────────────────────────────────── */}
      <Section tone="white">
        <Container>
          <GroupHead
            label={portfolio.groups[1].label}
            note={portfolio.groups[1].note}
            count={ongoingProjects.length}
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Completed ──────────────────────────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <GroupHead
            label={portfolio.groups[2].label}
            note={portfolio.groups[2].note}
            count={completedProjects.length}
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {completedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-12">
            <Button href={site.developerSite} variant="secondary">
              Visit venkateshbuildcon.com
            </Button>
          </div>
        </Container>
      </Section>

      <PageCta
        title="Questions about the builder?"
        body="Ask us anything about the developer, the registration or the delivery record. We will tell you what is documented and what is not."
      >
        <CtaButton intent="Talk to Us About Serenique" variant="copper" size="lg">
          {developer.cta}
        </CtaButton>
      </PageCta>
    </>
  )
}

/** Group heading for a portfolio band, with its own count. */
function GroupHead({ label, note, count }: { label: string; note: string; count: number }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line pb-4">
      <div className="flex items-baseline gap-3">
        <h2 className="text-2xl">{label}</h2>
        <span className="font-display text-lg text-brand">{count}</span>
      </div>
      <p className="text-sm text-muted">{note}</p>
    </div>
  )
}
