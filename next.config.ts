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
    /* No project photography exists yet — see README. This block is configured
       ahead of the asset drop so that adding renders to /public is a content
       change and not a config change. */
    formats: ['image/avif', 'image/webp'],
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
    ]
  },
}

export default nextConfig
