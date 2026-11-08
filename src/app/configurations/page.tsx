import type { Metadata } from 'next'

import { CtaButton } from '@/components/lead'
import { PageCta, PageHero } from '@/components/page-shell'
import { Reveal } from '@/components/reveal'
import { BreadcrumbStructuredData } from '@/components/structured-data'
import { Container, Section, SectionHead, Stat } from '@/components/ui'
import {
  configurations,
  hero,
  priceConditions,
  priceCopy,
  priceList,
  priceTypes,
  releaseStatus,
  reveals,
  rupees,
  sqftText,
  sqmText,
  startingPrice,
  type PriceLine,
} from '@/content/project'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/configurations',
  /* Kept under 60 characters INCLUDING the "| Venkatesh Serenique" the root
     layout appends. The longer "Homes: Areas, Plans & Price" version came to
     62 and was being cut mid-phrase in results. Both strings live in
     content/project.ts, next to the figures they quote. */
  title: configurations.metaTitle,
  description: configurations.metaDescription,
})

export default function ConfigurationsPage() {
  return (
    <>
      <BreadcrumbStructuredData name="Configurations" path="/configurations" />
      <PageHero
        eyebrow="Homes"
        title="Configurations"
        lede={configurations.intro}
      >
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/12 pt-8 sm:grid-cols-4">
          {hero.facts.map((fact) => (
            <Stat key={fact.label} label={fact.label} value={fact.value} tone="dark" />
          ))}
        </dl>
      </PageHero>

      <Section tone="white">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
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
                    <dd className="text-ink">{config.area}</dd>
                  </div>
                  {config.agreement && config.price ? (
                    <>
                      <div className="mt-2 flex justify-between gap-4">
                        <dt className="text-muted">Agreement value</dt>
                        <dd className="text-ink">{config.agreement}</dd>
                      </div>
                      <div className="mt-2 flex justify-between gap-4">
                        <dt className="text-muted">All-in</dt>
                        <dd className="text-ink">{config.price}</dd>
                      </div>
                    </>
                  ) : (
                    <div className="mt-2 flex justify-between gap-4">
                      <dt className="text-muted">Price</dt>
                      <dd className="text-ink">Not on the price list</dd>
                    </div>
                  )}
                  <div className="mt-2 flex justify-between gap-4">
                    <dt className="text-muted">Floor plan</dt>
                    <dd className="text-ink">{configurations.planStatus}</dd>
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

        </Container>
      </Section>

      {/* ── The developer's price list ─────────────────────────────────────
          Every line of the sheet, read from `priceList` in content/project.ts.
          Below md the lines stack as cards; from md up they are a table that
          scrolls inside its own box if the screen is narrower than the table,
          so the page itself never scrolls sideways. */}
      <Section id="price-list" tone="surface">
        <Container>
          <SectionHead eyebrow={priceCopy.eyebrow} title={priceCopy.heading} lede={priceCopy.lede} />

          <h3 className="mt-10 text-xl">{priceCopy.startingHeading}</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {priceTypes.map((type) => {
              const start = startingPrice(type)
              const from = start.from ? 'from ' : ''
              return (
                <div key={type} className="rounded-lg border border-line bg-card p-5">
                  <p className="font-display text-xl text-ink">{type}</p>
                  <dl className="mt-4 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Agreement value</dt>
                      <dd className="text-right text-ink">
                        {from}
                        {rupees(start.agreement)}
                      </dd>
                    </div>
                    <div className="mt-2 flex justify-between gap-4">
                      <dt className="text-muted">All-in</dt>
                      <dd className="text-right font-medium text-ink">
                        {from}
                        {rupees(start.allIn)}
                      </dd>
                    </div>
                  </dl>
                </div>
              )
            })}
          </div>

          {/* Below md: one card per line. */}
          <ol className="mt-10 grid gap-4 md:hidden" aria-label={priceCopy.caption}>
            {priceList.lines.map((line) => (
              <li key={line.id} className="rounded-lg border border-line bg-card p-5">
                <p className="font-display text-lg text-ink">{line.type}</p>
                <p className="mt-1 text-xs text-muted">{lineWhere(line)}</p>
                <dl className="mt-4 border-t border-line pt-4 text-sm">
                  {lineRows(line).map(([label, value, strong]) => (
                    <div key={label} className="mt-2 flex justify-between gap-4 first:mt-0">
                      <dt className="text-muted">{label}</dt>
                      <dd className={strong ? 'text-right font-medium text-ink' : 'text-right text-ink'}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {line.note && <p className="mt-4 text-xs text-muted">Note: {line.note}</p>}
              </li>
            ))}
          </ol>

          {/* md and up: the table. */}
          <div className="mt-10 hidden overflow-x-auto rounded-lg border border-line bg-card md:block">
            <table className="w-full min-w-[64rem] text-left text-sm">
              <caption className="sr-only">{priceCopy.caption}</caption>
              <thead>
                <tr className="border-b border-line text-xs text-muted">
                  <th scope="col" className="px-2.5 py-3 font-medium">Home</th>
                  <th scope="col" className="px-2.5 py-3 font-medium">RERA carpet</th>
                  <th scope="col" className="px-2.5 py-3 font-medium">Balcony</th>
                  <th scope="col" className="px-2.5 py-3 font-medium">Dry balcony</th>
                  <th scope="col" className="px-2.5 py-3 font-medium">Total carpet area</th>
                  <th scope="col" className="px-2.5 py-3 text-right font-medium">Agreement value</th>
                  <th scope="col" className="px-2.5 py-3 text-right font-medium">Stamp duty</th>
                  <th scope="col" className="px-2.5 py-3 text-right font-medium">Registration</th>
                  <th scope="col" className="px-2.5 py-3 text-right font-medium">GST</th>
                  <th scope="col" className="px-2.5 py-3 text-right font-medium text-ink">All-in</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {priceList.lines.flatMap((line) => {
                  const rows = [
                    <tr key={line.id} className={line.note ? 'align-top' : 'border-b border-line align-top last:border-b-0'}>
                      <th scope="row" className="px-2.5 py-3 text-left font-normal">
                        <span className="block font-display text-base whitespace-nowrap text-ink">
                          {line.type}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted">
                          {line.wing ? `Wing ${line.wing}` : 'Wing not stated'}
                        </span>
                        <span className="block text-xs text-muted">Serial {line.serials}</span>
                      </th>
                      <td className="px-2.5 py-3 text-ink">
                        <Area sqm={line.reraCarpet.sqm} sqft={line.reraCarpet.sqft} />
                      </td>
                      <td className="px-2.5 py-3 text-body">
                        <Area sqm={line.balcony.sqm} sqft={line.balcony.sqft} />
                      </td>
                      <td className="px-2.5 py-3 text-body">
                        {line.dryBalcony ? (
                          <Area sqm={line.dryBalcony.sqm} sqft={line.dryBalcony.sqft} />
                        ) : (
                          'Not stated'
                        )}
                      </td>
                      <td className="px-2.5 py-3 text-body">
                        <Area sqm={line.totalCarpet.sqm} sqft={line.totalCarpet.sqft} />
                      </td>
                      <td className="px-2.5 py-3 text-right text-ink">{rupees(line.agreementValue)}</td>
                      <td className="px-2.5 py-3 text-right text-body">{rupees(line.stampDuty)}</td>
                      <td className="px-2.5 py-3 text-right text-body">{rupees(line.registration)}</td>
                      <td className="px-2.5 py-3 text-right text-body">{rupees(line.gst)}</td>
                      <td className="px-2.5 py-3 text-right font-medium text-ink">{rupees(line.allIn)}</td>
                    </tr>,
                  ]
                  if (line.note) {
                    rows.push(
                      <tr key={`${line.id}-note`} className="border-b border-line last:border-b-0">
                        <td colSpan={10} className="px-2.5 pb-4 text-xs text-muted">
                          Note: {line.note}
                        </td>
                      </tr>,
                    )
                  }
                  return rows
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 max-w-[52rem] space-y-1.5 text-xs text-muted">
            <p>{priceCopy.allInNote}</p>
            <p>{priceCopy.totalCarpetNote}</p>
          </div>

          <div className="mt-10 rounded-lg border border-line bg-card p-6 md:p-8">
            <h3 className="text-xl">{priceCopy.conditionsHeading}</h3>
            <ul className="mt-5 max-w-[52rem] space-y-3 text-sm text-body">
              {priceConditions.map((condition) => (
                <li key={condition} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton intent="Register for Areas & Pricing">{configurations.cta}</CtaButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHead
            eyebrow="Scale"
            /* The lede is the Phase 1 scale as MahaRERA and the developer
               state it, read from content/project.ts. It used to be typed
               here as "Eleven towers ... on 14 acres", figures the launch
               has since superseded. */
            title="The scale of the project"
            lede={configurations.scaleLede}
          />

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {releaseStatus.items.map((item) => (
              <div key={item.id} className="border-t border-line pt-4">
                <dt className="eyebrow text-muted">{item.label}</dt>
                <dd
                  className={
                    item.released
                      ? 'mt-1.5 font-display text-lg text-ink'
                      : 'mt-1.5 font-display text-lg text-muted'
                  }
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="surface">
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
              eyebrow={reveals.pricing.eyebrow}
              heading={reveals.pricing.heading}
              body={reveals.pricing.body}
              cta={reveals.pricing.cta}
              intent="Request the Price List"
            />
          </div>
        </Container>
      </Section>

      <PageCta title={priceCopy.ctaTitle} body={priceCopy.ctaBody}>
        <CtaButton intent="Register for Areas & Pricing" variant="copper" size="lg">
          {configurations.cta}
        </CtaButton>
      </PageCta>
    </>
  )
}

/** "Wing A2 · Serial 2, 3, 6, 7", or "Wing not stated" where the sheet gives none. */
function lineWhere(line: PriceLine) {
  return `${line.wing ? `Wing ${line.wing}` : 'Wing not stated'} · Serial ${line.serials}`
}

/** The label/value pairs a price line shows as a stacked card. */
function lineRows(line: PriceLine): Array<[string, string, boolean?]> {
  const area = (a: { sqm: number; sqft: number }) => `${sqmText(a.sqm)} (${sqftText(a.sqft)})`
  return [
    ['RERA carpet', area(line.reraCarpet)],
    ['Balcony', area(line.balcony)],
    ['Dry balcony', line.dryBalcony ? area(line.dryBalcony) : 'Not stated'],
    ['Total carpet area', area(line.totalCarpet)],
    ['Agreement value', rupees(line.agreementValue)],
    ['Stamp duty', rupees(line.stampDuty)],
    ['Registration', rupees(line.registration)],
    ['GST', rupees(line.gst)],
    ['All-in', rupees(line.allIn), true],
  ]
}

function Area({ sqm, sqft }: { sqm: number; sqft: number }) {
  return (
    <>
      <span className="block whitespace-nowrap">{sqmText(sqm)}</span>
      <span className="block text-xs whitespace-nowrap text-muted">{sqftText(sqft)}</span>
    </>
  )
}
