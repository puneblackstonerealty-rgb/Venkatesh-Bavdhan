import Image from 'next/image'
import Link from 'next/link'

import { ArticleCard } from '@/components/article-card'
import {
  GalleryFigure,
  HighlightIcon,
  ImageBand,
  MonogramRule,
  PauseHeadline,
} from '@/components/brochure'
import { CtaButton, RegisterForm } from '@/components/lead'
import { Reveal } from '@/components/reveal'
import { FaqStructuredData } from '@/components/structured-data'
import { Button, Container, Eyebrow, Section, SectionHead, Stat } from '@/components/ui'
import { articleMetas } from '@/content/articles'
import { completedProjects, portfolio } from '@/content/developer-projects'
import {
  amenities,
  brochureCopy,
  configurations,
  developer,
  faqs,
  featureStrip,
  galleryImage,
  hero,
  highlights,
  IMAGE_CREDIT,
  location,
  overview,
  phase1,
  projectHighlights,
  reveals,
  site,
  siteVisit,
  specifications,
} from '@/content/project'

export const dynamic = 'error'

/* The home page follows the developer's brochure, spread by spread (spec
   decision 16): cover, the "built to pause" opening, project highlights, a
   lifestyle spread, the elevations, the homes, the master layout, the
   amenities, a second lifestyle spread, specifications, location and the
   developer. FAQs, updates and the visit form close it, because this is a
   site people enquire from and the brochure is not. */
export default function LandingPage() {
  const latestArticles = articleMetas.slice(0, 3)
  const elevations = ['dusk', 'day', 'entrance'].map(galleryImage)
  const amenityImages = ['pool', 'kids', 'court', 'co-working', 'gym', 'yoga'].map(galleryImage)
  const cluster = galleryImage('cluster')
  const tallest = Math.max(...phase1.wings.map((wing) => wing.habitableFloors))

  return (
    <>
      <FaqStructuredData />

      {/* ── Hero ───────────────────────────────────────────────────────────
          The developer's sunset render, under a deep-olive wash that is
          heaviest where the copy sits. The headline is the brochure's own
          line, set the way the brochure sets it. The h1 is the project name:
          small on the page, because the line above it carries the mood, but
          it is the heading search engines and screen readers get. */}
      <section className="relative overflow-hidden bg-twilight">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_40%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,40,19,0.92)_0%,rgba(28,40,19,0.78)_38%,rgba(28,40,19,0.25)_72%,rgba(28,40,19,0.05)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(28,40,19,0.85),transparent)]"
        />

        <Container className="relative py-16 md:py-24 lg:py-28">
          <div className="max-w-[40rem]">
            <div>
              <span className="phase-tag">{hero.badge}</span>

              <h1 className="mt-7 font-sans text-xs font-semibold tracking-[0.32em] text-copper">
                {hero.title}
              </h1>

              <p className="mt-5 font-display uppercase">
                {hero.brochureLine.map((line) => (
                  <span key={line.verb} className="block">
                    <span className="block text-5xl leading-none tracking-[0.06em] text-surface md:text-6xl lg:text-7xl">
                      {line.verb}
                    </span>
                    <span className="mt-1 mb-4 block text-2xl tracking-[0.12em] text-copper md:text-3xl">
                      {line.rest}
                    </span>
                  </span>
                ))}
              </p>

              <span aria-hidden="true" className="rule-monogram rule-monogram-light mt-2">
                <span />
              </span>

              <p className="mt-6 text-lg font-light text-surface/90">
                {hero.tagline} near Chandani Chowk, {site.locality}
              </p>
              <p className="mt-1 text-sm text-surface/65">{hero.taglineSub}</p>

              <dl className="mt-9 grid max-w-[34rem] grid-cols-2 gap-x-6 gap-y-5 border-t border-surface/20 pt-7 sm:grid-cols-4">
                {hero.facts.map((fact) => (
                  <Stat key={fact.label} label={fact.label} value={fact.value} tone="dark" />
                ))}
              </dl>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <CtaButton intent="Register Your Interest" variant="copper" size="lg">
                  {hero.cta}
                </CtaButton>
                <CtaButton intent="Request the Price List" variant="ghost-light" size="lg">
                  {hero.ctaSecondary}
                </CtaButton>
              </div>

              <p className="mt-7 text-sm text-surface/70">
                {hero.priceLabel}{' '}
                <span className="font-display text-xl text-surface">{hero.price}</span>{' '}
                {hero.priceNote}
              </p>
            </div>
          </div>
        </Container>

        <p className="absolute top-3 right-4 z-10 text-[0.65rem] tracking-[0.08em] text-surface/70 lg:right-6">
          {IMAGE_CREDIT}
        </p>

        {/* The developer's own five-point strip, in its original order and
            wording. Sits under the fold line the way it sits along the foot of
            the creative it came from. */}
        <div className="relative border-t border-copper/25 bg-twilight-deep">
          <Container>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 sm:grid-cols-3 lg:grid-cols-5">
              {featureStrip.map((feature) => (
                <li key={feature.id} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper"
                  />
                  <span className="text-xs leading-snug text-surface/75">{feature.label}</span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* ── Built to pause. Designed to play. (brochure p7–8) ─────────── */}
      <Section tone="surface" ornament="right">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <Eyebrow className="text-gold-text">{overview.eyebrow}</Eyebrow>
              <PauseHeadline lines={brochureCopy.intro.lines} className="mt-5" />
              <MonogramRule className="mt-2" />
            </div>
            <div className="lg:pt-10">
              <p className="font-display text-xl leading-relaxed text-ink md:text-2xl">
                {brochureCopy.intro.body}
              </p>
              <p className="mt-6 text-base text-body">{overview.body[0]}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton intent="Get the Full Project Details">{highlights.cta}</CtaButton>
                <Button href="/gallery" variant="secondary">
                  See the gallery
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Project highlights (brochure p11) ──────────────────────────── */}
      <Section tone="white">
        <Container>
          <SectionHead title="Project highlights" align="center" />
          <ul className="mx-auto mt-14 grid max-w-[60rem] gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projectHighlights.map((item) => (
              <li key={item.id} className="text-center">
                <HighlightIcon id={item.id} className="mx-auto h-11 w-11 text-copper-deep" />
                <p className="mt-4 font-display text-lg tracking-[0.04em] text-brand uppercase">
                  {item.title}
                </p>
                <p className="mx-auto mt-2 max-w-[17rem] text-sm text-muted">{item.detail}</p>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-5 block h-px w-10 bg-copper-deep/60"
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Pause the world. Play your way. (brochure p6, p12) ────────── */}
      <ImageBand
        image={galleryImage('lounge')}
        lines={brochureCopy.world}
        body={overview.body[1]}
        align="right"
      />

      {/* ── The building (brochure p10, p13, p15) ──────────────────────── */}
      <Section tone="surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <PauseHeadline lines={brochureCopy.ordinary} size="md" />
              <MonogramRule className="mt-2" />
            </div>
            <p className="max-w-[26rem] text-base text-body">
              {phase1.label} is one building of three residential wings, rising to {tallest}{' '}
              habitable floors near Chandani Chowk.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
            <GalleryFigure
              image={elevations[0]}
              ratio="aspect-[6/5]"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
            <div className="grid gap-5">
              <GalleryFigure
                image={elevations[1]}
                ratio="aspect-[16/9]"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <GalleryFigure
                image={elevations[2]}
                ratio="aspect-[16/9]"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Homes and the price list ───────────────────────────────────── */}
      <Section id="configurations" tone="white">
        <Container>
          <SectionHead eyebrow="Homes" title={configurations.heading} lede={configurations.intro} />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {configurations.items.map((config) => (
              <article
                key={config.id}
                className="flex flex-col rounded-lg border border-t-2 border-line border-t-copper-deep bg-surface p-6 md:p-7"
              >
                <p className="font-display text-3xl tracking-[0.04em] text-brand uppercase">
                  {config.type}
                </p>
                <p className="mt-3 text-sm text-muted">{config.note}</p>

                <dl className="mt-6 border-t border-line pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Carpet area</dt>
                    <dd className="text-ink">{config.area}</dd>
                  </div>
                  {config.agreement && config.price ? (
                    <>
                      <div className="mt-2 flex justify-between gap-4">
                        <dt className="text-muted">Agreement value</dt>
                        <dd className="text-ink">{config.agreement}</dd>
                      </div>
                      <div className="mt-2 flex items-baseline justify-between gap-4">
                        <dt className="text-muted">All-in</dt>
                        <dd className="font-display text-lg text-brand">{config.price}</dd>
                      </div>
                    </>
                  ) : (
                    <div className="mt-2 flex justify-between gap-4">
                      <dt className="text-muted">Price</dt>
                      <dd className="text-ink">Not on the price list</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-auto pt-7">
                  <CtaButton intent={`${config.type} areas and pricing`} full>
                    Get {config.type} Details
                  </CtaButton>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted">
            {configurations.pricesNote}{' '}
            <Link
              href="/configurations#price-list"
              className="text-brand underline underline-offset-4"
            >
              See every line of the price list
            </Link>
          </p>

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

      {/* ── Master layout (brochure p16–18) ────────────────────────────── */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center">
            <div>
              <PauseHeadline lines={brochureCopy.expected} size="md" />
              <MonogramRule className="mt-2" />
              <p className="mt-6 text-base text-body">
                {phase1.label} sits on {phase1.landAcres} acres at {phase1.plotStreet}. The
                developer&rsquo;s layout puts the three residential wings and the shops on the road
                side, the pool on the podium, and the remaining {phase1.futureAcres} acres next door
                as future development.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton intent="Get the Master Plan">Get the Master Plan</CtaButton>
                <Button href="/gallery#plans" variant="secondary">
                  All plans
                </Button>
              </div>
            </div>
            <GalleryFigure
              image={cluster}
              ratio="aspect-[2400/1697]"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </Container>
      </Section>

      {/* ── Amenities (brochure p22–33) ────────────────────────────────── */}
      <Section tone="white" ornament="left">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <PauseHeadline lines={brochureCopy.noise} size="md" />
              <MonogramRule className="mt-2" />
              <p className="mt-6 text-base text-body">{brochureCopy.noiseBody}</p>
              <p className="mt-4 text-sm text-muted">{amenities.summary}.</p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              {[
                { title: 'On the podium', items: amenities.podium },
                { title: 'At ground level', items: amenities.ground },
              ].map((group) => (
                <div key={group.title}>
                  <h3 className="font-display text-lg tracking-[0.06em] text-brand uppercase">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-body">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper-deep"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenityImages.map((image) => (
              <GalleryFigure key={image.id} image={image} />
            ))}
          </div>

          <div className="mt-10">
            <Button href="/amenities" variant="secondary">
              All amenities
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Pause the hustle. Play with serenity. (brochure p23, p28) ──── */}
      <ImageBand image={galleryImage('garden')} lines={brochureCopy.hustle} tone="dark">
        <div className="mt-8">
          <CtaButton intent="Book a Site Visit" variant="copper" size="lg">
            Book a Site Visit
          </CtaButton>
        </div>
      </ImageBand>

      {/* ── Specifications (brochure p36–37) ───────────────────────────── */}
      <Section tone="surface">
        <Container>
          <SectionHead
            title="Specifications"
            lede="As listed in the developer’s brochure and specification sheet."
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {specifications.map((group) => (
              <div key={group.id}>
                <h3 className="font-display text-lg tracking-[0.06em] text-brand uppercase">
                  {group.label}
                </h3>
                <span aria-hidden="true" className="mt-3 block h-px w-10 bg-copper-deep/60" />
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-body">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Location (brochure p38–40) ─────────────────────────────────── */}
      <Section id="location" tone="white">
        <Container>
          <SectionHead eyebrow="Address" title={location.heading} lede={location.paragraphs[0]} />

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-xl border border-line">
              <iframe
                src={location.mapEmbed}
                title={location.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0"
              />
            </div>

            <div>
              <h3 className="font-display text-lg tracking-[0.06em] text-brand uppercase">
                {location.connectivityHeading}
              </h3>
              <ul className="mt-5">
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

      {/* ── The developer (brochure p3–5, p42–43) ──────────────────────── */}
      <Section tone="dark" ornament="right">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <figure>
              <Eyebrow tone="dark">The Developer</Eyebrow>
              <blockquote className="mt-6 font-display text-2xl leading-snug tracking-[0.04em] text-surface uppercase md:text-3xl">
                {brochureCopy.cmdQuote.text}
              </blockquote>
              <MonogramRule tone="dark" className="mt-6" />
              <figcaption className="mt-5 text-sm text-surface/70">
                <span className="tracking-[0.2em] text-copper uppercase">
                  {brochureCopy.cmdQuote.by}
                </span>
                <span className="mt-1 block">{brochureCopy.cmdQuote.role}</span>
              </figcaption>
            </figure>

            <div>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-7">
                {brochureCopy.legacy.map((stat) => (
                  <Stat key={stat.id} label={stat.label} value={stat.value} tone="dark" />
                ))}
                <Stat label="Projects across Pune" value={String(portfolio.total)} tone="dark" />
                {/* "Listed as completed", not "Delivered": the count is the
                    developer's own `completed` tag (ruling R20). */}
                <Stat
                  label="Listed as completed"
                  value={String(completedProjects.length)}
                  tone="dark"
                />
              </dl>
              <p className="mt-8 text-sm text-surface/70">{developer.body[0]}</p>
              <div className="mt-8">
                <Button href="/about-developer" variant="copper">
                  See the developer&rsquo;s portfolio
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Latest updates ───────────────────────────────────────────────── */}
      {latestArticles.length > 0 && (
        <Section tone="surface">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
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

      {/* ── FAQ ─────────────────────────────────────────────────────────────
          Rendered from the same `faqs` array as the FAQPage JSON-LD above.
          Google requires the markup to match visible content, so deleting this
          section means deleting <FaqStructuredData /> too. */}
      <Section tone="white">
        <Container>
          <SectionHead
            eyebrow="Questions"
            title="Frequently asked"
            lede={`What buyers ask us most about ${site.name}.`}
          />
          <dl className="mt-12 max-w-[52rem]">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-line py-7 first:border-t">
                <dt className="font-display text-lg text-brand">{faq.q}</dt>
                <dd className="mt-3 text-base text-body">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* ── Register ───────────────────────────────────────────────────── */}
      <Section tone="surface" ornament="left">
        <Container>
          <div className="mx-auto max-w-[46rem] text-center">
            <Eyebrow className="text-gold-text">Get In Touch</Eyebrow>
            <h2 className="mt-4 text-2xl md:text-3xl">{siteVisit.heading}</h2>
            <MonogramRule center className="mt-4" />
            <p className="mt-5 text-base text-body">{siteVisit.body}</p>
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
