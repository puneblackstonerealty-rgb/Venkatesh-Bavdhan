'use client'

import { useSyncExternalStore } from 'react'

import { brochure } from '@/content/project'
import { hasSubmittedLead } from '@/lib/lead-session'

import { Button } from './ui'

/* sessionStorage cannot change while this is on screen, so there is nothing to
   subscribe to. useSyncExternalStore is used for its server snapshot: the
   server render and the hydrating client render both see `false`, so the
   markup matches, and the real value is read once the client has hydrated. */
const subscribe = () => () => {}

/**
 * The brochure link: shown only when project.ts has a brochure AND this tab
 * has submitted an enquiry (lib/lead-session.ts). Renders nothing otherwise,
 * so with `brochure = null` the page is unchanged.
 *
 * `download` makes it a save, in the same tab. The file is public, so this is
 * a courtesy gate and not access control.
 *
 * This site has no conversion-tracking helper (no lib/analytics.ts), so no
 * brochure_download event is fired. If one is added, fire it from the link's
 * onClick.
 */
export function BrochureDownload() {
  const unlocked = useSyncExternalStore(subscribe, hasSubmittedLead, () => false)
  if (!brochure || !unlocked) return null

  return (
    <Button href={brochure.href} download variant="copper" size="lg">
      <DownloadIcon />
      {/* One span, so a long title wraps as text instead of splitting into flex
          columns on a narrow screen. The size label stays on one line. */}
      <span className="text-center">
        {brochure.title} <span className="font-normal whitespace-nowrap">({brochure.sizeLabel})</span>
      </span>
    </Button>
  )
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
    </svg>
  )
}
