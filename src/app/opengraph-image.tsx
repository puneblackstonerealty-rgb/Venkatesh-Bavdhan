import { ImageResponse } from 'next/og'

import { hero, siteMeta } from '@/content/project'

/**
 * The share card.
 *
 * Generated rather than pointed at a project render, because there is no
 * project render — and because a generated card renders at exactly 1200×630 in
 * PNG, which is what WhatsApp, Facebook and LinkedIn all want. A WebP at some
 * other aspect gets letterboxed or cropped differently by each of them.
 *
 * It carries only figures that are actually published, and reads every one of
 * them from content/project.ts (the hero facts), so it cannot drift from the
 * page. No price appears here: the site's prices come from a dated price
 * list that has lapsed, and a share card, like structured data, travels
 * without the date beside it.
 */
export const alt = siteMeta.ogAlt
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #152430 0%, #0d1820 58%, #17303a 100%)',
          padding: '68px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#c08654',
              display: 'flex',
            }}
          >
            {hero.badge}
          </div>

          <div
            style={{
              marginTop: 30,
              fontSize: 86,
              lineHeight: 1.02,
              color: '#ffffff',
              display: 'flex',
            }}
          >
            Venkatesh Serenique
          </div>

          <div style={{ marginTop: 26, fontSize: 34, color: '#c08654', display: 'flex' }}>
            {hero.tagline}
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 26,
              color: 'rgba(255,255,255,0.62)',
              display: 'flex',
            }}
          >
            Bavdhan, Pune
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid rgba(255,255,255,0.16)',
            paddingTop: 26,
          }}
        >
          {/* The hero's four facts: Phase 1 land, Phase 1 homes (MahaRERA),
              floors and the MahaRERA completion date. Until November 2026
              these were hard-coded here as 14 acres, 11 towers, G + 27 and
              Dec 2031, all since superseded. */}
          {hero.facts.map(({ value, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 36, color: '#ffffff' }}>{value}</span>
              <span
                style={{
                  fontSize: 18,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginTop: 6,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
