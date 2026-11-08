import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal-page'
import { legalPages } from '@/content/legal'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  path: '/terms-conditions',
  title: 'Terms & Conditions',
  description:
    'The terms on which this website is made available, including how it states prices, carpet areas and availability for the project.',
})

export default function TermsConditionsPage() {
  return <LegalPage doc={legalPages.terms} />
}
