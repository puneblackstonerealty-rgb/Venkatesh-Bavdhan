import { Fragment } from 'react'

import { legalPages } from '@/content/legal'

import { PageHero, Prose } from './page-shell'
import { Container, Section } from './ui'

type Doc = (typeof legalPages)['terms' | 'privacy' | 'disclaimer']

/**
 * Renders any of the three policy documents from content. One renderer so they
 * cannot drift in typography or structure, and so adding a clause is a content
 * edit rather than a JSX edit.
 */
export function LegalPage({ doc }: { doc: Doc }) {
  return (
    <>
      <PageHero eyebrow={doc.eyebrow} title={doc.title} lede={doc.lede} />

      <Section tone="white">
        <Container>
          <p className="eyebrow text-muted">Last updated {legalPages.lastUpdated}</p>

          <Prose className="mt-10">
            {doc.sections.map((section) => (
              <Fragment key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {'list' in section && section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item.slice(0, 48)}>{item}</li>
                    ))}
                  </ul>
                )}
                {'after' in section &&
                  section.after?.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
              </Fragment>
            ))}
          </Prose>
        </Container>
      </Section>
    </>
  )
}
