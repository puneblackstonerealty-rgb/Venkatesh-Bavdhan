'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const CSS_ID = 'serenique-chatbot-css'
const JS_ID = 'serenique-chatbot-js'

/**
 * Vendored chat widget.
 *
 * The widget is vanilla JS that injects its own DOM and reads
 * window.SERENIQUE_CHATBOT_CONFIG at execute time. Config is therefore
 * assigned before the <script> is appended — two <Script> tags would race, and
 * the widget would silently fall back to its defaults (a teal theme, no lead
 * endpoint and a /thanks redirect this site does not have).
 *
 * It posts to /api/lead rather than its own Apps Script deployment, so chatbot
 * enquiries land in the same sheet and the same notification email as the
 * forms. A second script writing to a second sheet would split the leads in
 * half.
 *
 * ⚠ public/chatbot/ is third-party code, excluded from ESLint. It was
 * retinted to the Serenique palette and its conversation rewritten for a
 * pre-launch project — see the comments in chatbot.js and chatbot.css before
 * re-copying it from the sibling project, which would undo both.
 */
type ChatbotConfig = {
  leadEndpoint: string
  redirectUrl: string
  imagePath: string
  agentName: string
  autoOpenDelay: number
  openOnScroll: boolean
  teaserText?: string
  ipLookupUrl: string | null
}

declare global {
  interface Window {
    SERENIQUE_CHATBOT_CONFIG?: ChatbotConfig
  }
}

/** Routes the widget stays off. Someone who has just submitted should not be
 *  asked for the same number again by a bot. */
const SUPPRESSED = ['/thank-you']

export function ChatWidget({ agentName }: { agentName: string }) {
  const pathname = usePathname()

  useEffect(() => {
    if (SUPPRESSED.includes(pathname)) return

    // Mounted from the root layout, so it survives navigation. Injecting twice
    // would give the visitor two launchers.
    if (document.getElementById(JS_ID)) return

    window.SERENIQUE_CHATBOT_CONFIG = {
      leadEndpoint: '/api/lead',
      redirectUrl: '/thank-you',
      imagePath: '/chatbot/img/',
      agentName,
      autoOpenDelay: 20000,
      openOnScroll: true,
      /* Skipped deliberately. The widget's default calls api.ipify.org from
         the browser on every page load to fetch the visitor's public IP — a
         third-party request the privacy policy does not declare, for a value
         /api/lead already reads from x-forwarded-for. */
      ipLookupUrl: null,
    }

    if (!document.getElementById(CSS_ID)) {
      const link = document.createElement('link')
      link.id = CSS_ID
      link.rel = 'stylesheet'
      link.href = '/chatbot/chatbot.css'
      document.head.appendChild(link)
    }

    const script = document.createElement('script')
    script.id = JS_ID
    script.src = '/chatbot/chatbot.js'
    script.defer = true
    document.body.appendChild(script)
  }, [agentName, pathname])

  return null
}
