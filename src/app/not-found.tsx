import type { Metadata } from 'next'

import { Button, Container, Eyebrow, Section } from '@/components/ui'

/**
 * The 404 inherits the root layout's metadata unless it sets its own, which
 * meant it was serving the HOME page's title and a canonical pointing at the
 * home page. A canonical from a 404 to a real page is a soft-404 signal: it
 * tells Google this URL is a duplicate of the home page rather than a dead
 * one, and Google can respond by indexing junk URLs as the home page.
 *
 * `alternates.canonical: null` removes the inherited tag rather than
 * overriding it with another URL. The page still returns a real 404 status,
 * which is what actually matters; this stops the markup contradicting it.
 */
export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'That page does not exist on this site.',
  alternates: { canonical: null },
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <Section tone="white" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[38rem] text-center">
          <Eyebrow>404</Eyebrow>
          <h1 className="mt-5 text-3xl md:text-4xl">Page not found</h1>
          <p className="mt-5 text-base text-body">
            That page does not exist. The project pages are all reachable from the menu.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/">Back to the project</Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
