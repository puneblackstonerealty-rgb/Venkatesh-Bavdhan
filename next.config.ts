import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* Pinned explicitly. Without it Turbopack walks up looking for a lockfile
     and picks the client folder as the root, which pulls the sibling projects
     into the module graph. */
  turbopack: { root: projectRoot },
  poweredByHeader: false,
  images: {
    /* The developer's renders and brochure pictures live in /public/gallery
       (brochure redesign, Nov 2026). */
    formats: ['image/avif', 'image/webp'],
  },
  /* Articles retired in the November 2026 refresh, after the launch made
     their premise wrong. Each points at the article that now carries its
     subject, permanently, so search results and old links land somewhere
     useful. */
  async redirects() {
    return [
      {
        source: '/updates/fourteen-acres-and-eleven-towers',
        destination: '/updates/phase-one-and-the-whole-site',
        permanent: true,
      },
      {
        source: '/updates/the-numbers-that-were-never-true',
        destination: '/updates/phase-one-and-the-whole-site',
        permanent: true,
      },
      {
        source: '/updates/buying-when-nothing-has-been-published',
        destination: '/updates/how-to-check-a-maharera-registration',
        permanent: true,
      },
      {
        source: '/updates/what-pre-launch-actually-means',
        destination: '/updates/what-has-actually-been-released',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        /* The brochure is handed over on /thank-you after an enquiry, so keep
           the PDF itself out of search results. It is a file, not a page, so
           an X-Robots-Tag header is the only place a noindex can go. */
        source: '/brochure/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

export default nextConfig
