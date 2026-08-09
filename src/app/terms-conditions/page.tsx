import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal-page'
import { legalPages } from '@/content/legal'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/terms-conditions',
  title: 'Terms & Conditions',
  description:
    'The terms on which this website is made available, including the pre-launch position on prices, areas and availability.',
})

export default function TermsConditionsPage() {
  return <LegalPage doc={legalPages.terms} />
}
