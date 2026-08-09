import { ImageResponse } from 'next/og'

/**
 * The share card.
 *
 * Generated rather than pointed at a project render, because there is no
 * project render — and because a generated card renders at exactly 1200×630 in
 * PNG, which is what WhatsApp, Facebook and LinkedIn all want. A WebP at some
 * other aspect gets letterboxed or cropped differently by each of them.
 *
 * It carries only figures that are actually published. No price appears here,
 * for the same reason no price appears anywhere else on the site.
 */
export const alt = 'Venkatesh Serenique, 2, 3 & 4 BHK pre-launch at Bavdhan, Pune'
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
            Pre-Launch · Registrations Open
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
            2, 3 &amp; 4 BHK Homes
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
          {/* Four slots, and the old fourth was "380 Homes" — a figure that
              no longer exists. Possession takes the slot rather than leaving a
              gap, because it is the other thing a buyer scans a share card
              for. Do not put a unit count back here until one is published. */}
          {[
            ['14 Acres', 'Land Parcel'],
            ['11', 'Towers'],
            ['G + 27', 'Floors'],
            ['Dec 2031', 'Possession'],
          ].map(([value, label]) => (
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
