import { ArticleCard } from '@/components/article-card'
import { CtaButton, RegisterForm } from '@/components/lead'
import { Reveal } from '@/components/reveal'
import { FaqStructuredData } from '@/components/structured-data'
import { Button, Container, Eyebrow, Section, SectionHead, Stat } from '@/components/ui'
import { articleMetas } from '@/content/articles'
import { completedProjects, portfolio } from '@/content/developer-projects'
import {
  configurations,
  developer,
  faqs,
  featureStrip,
  highlights,
  hero,
  location,
  overview,
  releaseStatus,
  reveals,
  site,
  siteVisit,
} from '@/content/project'

export const dynamic = 'error'

export default function LandingPage() {
  const latestArticles = articleMetas.slice(0, 3)

  return (
    <>
      <FaqStructuredData />

      {/* ── Hero ───────────────────────────────────────────────────────────
          No banner image, because none exists. The right column carries the
          release ledger instead of a render — which is more useful to a buyer
          at this stage than an artist's impression would be, and is the one
          thing no competing page for this query offers. */}
      <section className="relative overflow-hidden bg-twilight">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 -left-40 h-[40rem] w-[40rem] rounded-full bg-brand/30 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-40 h-[26rem] w-[26rem] rounded-full bg-copper/10 blur-[120px]"
        />

        <Container className="relative py-14 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <Eyebrow tone="dark">{hero.badge}</Eyebrow>

              <h1 className="mt-6 text-4xl text-white md:text-5xl">{hero.title}</h1>

              {/* The developer's own strapline, verbatim. It is the only line
                  of copy on this site the developer wrote. */}
              <p className="mt-4 font-display text-xl text-white/80 italic md:text-2xl">
                {hero.strapline}
              </p>

              <p className="mt-6 font-display text-2xl text-copper">{hero.tagline}</p>
              <p className="mt-2 text-sm tracking-[0.08em] text-white/55 uppercase">
                {hero.taglineSub} · {hero.subtitle}
              </p>

              <dl className="mt-10 grid max-w-[34rem] grid-cols-2 gap-x-6 gap-y-5 border-t border-white/12 pt-8 sm:grid-cols-4">
                {hero.facts.map((fact) => (
                  <Stat key={fact.label} label={fact.label} value={fact.value} tone="dark" />
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <CtaButton intent="Register Your Interest" variant="copper" size="lg">
                  {hero.cta}
                </CtaButton>
                <CtaButton intent="Request the Price List" variant="ghost-light" size="lg">
                  {hero.ctaSecondary}
                </CtaButton>
              </div>

              <p className="mt-8 text-sm text-white/50">
                {hero.priceLabel}{' '}
                <span className="font-display text-lg text-white">{hero.price}</span> ·{' '}
                {hero.priceNote}
              </p>
            </div>

            {/* The release ledger. */}
            <div className="rounded-lg border border-white/15 bg-white/[0.04] p-6 md:p-8">
              <h2 className="font-display text-xl text-white">{releaseStatus.heading}</h2>

              <dl className="mt-6">
                {releaseStatus.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-baseline justify-between gap-4 border-b border-white/10 py-2.5 last:border-b-0"
                  >
                    <dt className="text-sm text-white/60">{item.label}</dt>
                    <dd
                      className={
                        item.released
                          ? 'shrink-0 text-sm font-medium text-white'
                          : 'shrink-0 text-sm text-white/35'
                      }
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>

        {/* The developer's own five-point strip, in its original order and
            wording. Sits under the fold line the way it sits along the foot of
            the creative it came from. */}
        <div className="relative border-t border-white/10 bg-twilight-deep">
          <Container>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 sm:grid-cols-3 lg:grid-cols-5">
              {featureStrip.map((feature) => (
                <li key={feature.id} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper"
                  />
                  <span className="text-xs leading-snug text-white/65">{feature.label}</span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* ── Overview & at a glance ─────────────────────────────────────── */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <SectionHead
              eyebrow={overview.eyebrow}
              title={overview.heading}
              lede={overview.body[0]}
            />

            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:pt-4">
              {highlights.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-body">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 max-w-[62rem] text-base text-body">{overview.body[1]}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton intent="Get the Full Project Details">{highlights.cta}</CtaButton>
            <Button href="/location" variant="secondary">
              Explore the location
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Configurations ─────────────────────────────────────────────── */}
      <Section id="configurations" tone="surface">
        <Container>
          <SectionHead
            eyebrow="Homes"
            title={configurations.heading}
            lede={configurations.intro}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {configurations.items.map((config) => (
              <article
                key={config.id}
                className="flex flex-col rounded-lg border border-line bg-card p-6"
              >
                <p className="font-display text-3xl text-ink">{config.type}</p>
                <p className="mt-3 text-sm text-muted">{config.note}</p>

                <dl className="mt-6 border-t border-line pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Carpet area</dt>
                    <dd className="text-ink">{config.area ?? 'To be announced'}</dd>
                  </div>
                  <div className="mt-2 flex justify-between gap-4">
                    <dt className="text-muted">Price</dt>
                    <dd className="text-ink">{config.price ?? 'On request'}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-7">
                  <CtaButton intent={`${config.type} areas and pricing`} full>
                    Get {config.type} Details
                  </CtaButton>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Reveal
              eyebrow={reveals.pricing.eyebrow}
              heading={reveals.pricing.heading}
              body={reveals.pricing.body}
              cta={reveals.pricing.cta}
              intent="Request the Price List"
            />
          </div>
        </Container>
      </Section>

      {/* ── Plans & amenities, both unreleased ─────────────────────────── */}
      <Section tone="white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal
              eyebrow={reveals.configurations.eyebrow}
              heading={reveals.configurations.heading}
              body={reveals.configurations.body}
              cta={reveals.configurations.cta}
              intent="Get Floor Plans First"
            />
            <Reveal
              eyebrow={reveals.amenities.eyebrow}
              heading={reveals.amenities.heading}
              body={reveals.amenities.body}
              cta={reveals.amenities.cta}
              intent="Get the Amenity Plan"
            />
          </div>
        </Container>
      </Section>

      {/* ── Location ───────────────────────────────────────────────────── */}
      <Section id="location" tone="surface">
        <Container>
          <SectionHead
            eyebrow="Address"
            title={location.heading}
            lede={location.paragraphs[0]}
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div>
              <div className="overflow-hidden rounded-xl border border-line">
                <iframe
                  src={location.mapEmbed}
                  title={location.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[380px] w-full border-0"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl">{location.connectivityHeading}</h3>
              <ul className="mt-6">
                {location.pois.map((poi) => (
                  <li
                    key={poi.name}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-3 text-sm"
                  >
                    <span className="text-body">{poi.name}</span>
                    <span className="shrink-0 font-medium text-brand">{poi.value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/location" variant="secondary">
                  Full location guide
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Imagery, unreleased ────────────────────────────────────────── */}
      <Section tone="dark">
        <Container>
          <Reveal
            eyebrow={reveals.gallery.eyebrow}
            heading={reveals.gallery.heading}
            body={reveals.gallery.body}
            cta={reveals.gallery.cta}
            intent="Get the Brochure"
            tone="dark"
          />
        </Container>
      </Section>

      {/* ── Developer ──────────────────────────────────────────────────── */}
      <Section tone="white">
        <Container>
          <SectionHead
            eyebrow="The Developer"
            title={developer.heading}
            lede={developer.tagline}
          />
          <p className="mt-6 max-w-[62rem] text-base text-body">{developer.body[0]}</p>

          <dl className="mt-10 grid max-w-[46rem] grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-3">
            <Stat label="Years building in Pune" value="26" />
            <Stat label="Projects across Pune" value={String(portfolio.total)} />
            <Stat label="Delivered" value={String(completedProjects.length)} />
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/about-developer" variant="secondary">
              See all {portfolio.total} projects
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Latest updates ─────────────────────────────────────────────────
          Renders nothing until an article exists, so the home page never shows
          an empty band. Add a file to src/content/articles and it appears. */}
      {latestArticles.length > 0 && (
        <Section tone="surface">
          <Container>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <SectionHead
                eyebrow="Updates"
                title="Latest from the project"
                lede="What the developer has released, what has changed on site, and what is worth knowing about Bavdhan."
              />
              <Button href="/updates" variant="secondary">
                All updates
              </Button>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((meta) => (
                <ArticleCard key={meta.slug} meta={meta} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── FAQ ────────────────────────────────────────────────────────────
          Rendered from the same `faqs` array as the FAQPage JSON-LD above.
          Google requires the markup to match visible content, so this section
          is not optional decoration — deleting it means deleting
          <FaqStructuredData /> too. */}
      <Section tone="surface">
        <Container>
          <SectionHead
            eyebrow="Questions"
            title="Frequently asked"
            lede={`What buyers ask us most about ${site.name}, including the three questions nobody can answer yet.`}
          />
          <dl className="mt-12 max-w-[52rem]">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-line py-7 first:border-t">
                <dt className="font-display text-lg text-ink">{faq.q}</dt>
                <dd className="mt-3 text-base text-body">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* ── Register ───────────────────────────────────────────────────── */}
      <Section tone="white">
        <Container>
          <div className="mx-auto max-w-[46rem] text-center">
            <Eyebrow>Get In Touch</Eyebrow>
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
