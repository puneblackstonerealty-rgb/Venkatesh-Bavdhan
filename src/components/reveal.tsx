import { CtaButton } from './lead'
import { cn, Eyebrow } from './ui'

/**
 * The reveal block — the honest form of an unreleased section.
 *
 * ⚠ This is NOT a placeholder, an empty state or a fallback. It is the design
 * for a genuinely pre-launch project: the developer has published no carpet
 * areas, no price list, no amenity schedule, no plans and no renders, and
 * every competing site currently ranking for this project fills those gaps
 * with figures it cannot source. This component is what we show instead, and
 * each instance is a lead capture — "we'll send it to you the day it's
 * issued" converts better on a pre-launch page than a borrowed floor plan.
 *
 * When the client supplies material, delete the corresponding entry from
 * `reveals` in content/project.ts and build the real section. Nothing else
 * has to change.
 *
 * The hatched rule is drawn in CSS rather than shipped as an image, for the
 * same reason the wordmark is type: this site has no artwork and does not
 * pretend to.
 */
export function Reveal({
  eyebrow,
  heading,
  body,
  cta,
  intent,
  tone = 'light',
  className,
}: {
  eyebrow: string
  heading: string
  body: string
  cta: string
  intent: string
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <div
      className={cn(
        'rounded-lg border border-dashed px-6 py-10 text-center md:px-12 md:py-14',
        dark ? 'border-white/20 bg-white/[0.03]' : 'border-line-strong bg-surface',
        className,
      )}
    >
      <Eyebrow tone={dark ? 'dark' : 'light'}>{eyebrow}</Eyebrow>

      <h3 className={cn('mx-auto mt-5 max-w-[34rem] text-xl md:text-2xl', dark && 'text-white')}>
        {heading}
      </h3>

      <p
        className={cn(
          'mx-auto mt-4 max-w-[38rem] text-sm',
          dark ? 'text-white/60' : 'text-body',
        )}
      >
        {body}
      </p>

      <div className="mt-8">
        <CtaButton intent={intent} variant={dark ? 'copper' : 'primary'}>
          {cta}
        </CtaButton>
      </div>
    </div>
  )
}
