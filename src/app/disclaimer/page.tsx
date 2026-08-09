import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal-page'
import { legalPages } from '@/content/legal'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/disclaimer',
  title: 'Disclaimer',
  description:
    'What this website is, where each figure came from, and what you should verify on the MahaRERA portal before acting on it.',
})

export default function DisclaimerPage() {
  return <LegalPage doc={legalPages.disclaimer} />
}
