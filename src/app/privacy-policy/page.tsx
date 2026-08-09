import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal-page'
import { legalPages } from '@/content/legal'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/privacy-policy',
  title: 'Privacy Policy',
  description:
    'What this site collects when you submit an enquiry, who it is shared with, how long it is kept, and how to have it removed.',
})

export default function PrivacyPolicyPage() {
  return <LegalPage doc={legalPages.privacy} />
}
