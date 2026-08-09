import { ImageResponse } from 'next/og'

/**
 * Favicon, generated rather than shipped as a .ico — there is no brand asset
 * for this project to derive one from. A single "S" on the twilight ground
 * survives at tab size, which is the only size this is ever seen at.
 */
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#152430',
          color: '#c08654',
          fontSize: 22,
          fontFamily: 'serif',
          borderRadius: 6,
        }}
      >
        S
      </div>
    ),
    size,
  )
}
