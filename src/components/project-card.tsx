import Image from 'next/image'

import { type DeveloperProject } from '@/content/developer-projects'

import { cn } from './ui'

/**
 * A card for one of the developer's own projects.
 *
 * Two sizes. `feature` is for the current launches, where there are only two
 * and the render deserves the room; `tile` is for the ongoing and completed
 * grids, where there are thirty-one and the job is scanability.
 *
 * ⚠ Every image here is the developer's own render of one of their OTHER
 * projects. None is Serenique. The alt text on each still says "artistic
 * impression", which is now the only place that is stated — the credit line
 * under the grid was removed at the client's request.
 *
 * `priority` is opt-in and belongs on exactly one card — the first launch
 * tile, which Next identifies as the LCP element on /about-developer. The
 * other thirty-two lazy-load; eagerly loading them would put several megabytes
 * in front of that LCP.
 */
export function ProjectCard({
  project,
  variant = 'tile',
  priority = false,
}: {
  project: DeveloperProject
  variant?: 'feature' | 'tile'
  priority?: boolean
}) {
  const feature = variant === 'feature'

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-lg border border-line bg-card',
        'transition-colors hover:border-brand/40',
        /* `relative` is load-bearing when the card links out: the stretched
           anchor below resolves its inset against this element. */
        project.href && 'relative focus-within:border-brand',
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-brand-soft',
          feature ? 'aspect-[16/10]' : 'aspect-[4/3]',
        )}
      >
        <Image
          src={project.image}
          alt={`${project.name}, ${project.where}. Artistic impression.`}
          fill
          priority={priority}
          sizes={
            feature
              ? '(min-width: 1024px) 540px, 100vw'
              : '(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw'
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {(project.luxe || project.commercial) && (
          <span
            className={cn(
              'absolute top-3 left-3 rounded-xs px-2 py-1',
              'text-[10px] font-semibold tracking-[0.14em] uppercase',
              project.luxe ? 'bg-copper text-twilight-deep' : 'bg-twilight/85 text-white',
            )}
          >
            {project.luxe ? 'Luxe' : 'Commercial'}
          </span>
        )}
      </div>

      <div className={cn('flex flex-1 flex-col', feature ? 'p-6' : 'p-5')}>
        <h3
          className={cn(
            'flex items-start gap-2 text-ink',
            feature ? 'text-xl' : 'font-display text-lg',
            project.href && 'transition-colors group-hover:text-brand',
          )}
        >
          {project.name}
          {project.href && <ExternalIcon />}
        </h3>
        <p className="mt-2 text-sm text-body">{project.config}</p>
        <p className="eyebrow mt-auto pt-3 text-brand">{project.where}</p>
      </div>

      {/* Stretched link: covers the whole card so the image and the copy are
          both clickable, without nesting the image inside an anchor. Opens in
          a new tab so this page — and the enquiry the visitor came for — stays
          open behind it. */}
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name}, ${project.where}. Visit the project website, opens in a new tab`}
          className="absolute inset-0 z-10 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        />
      )}
    </article>
  )
}

/** Marks a card that leaves the site. */
function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-1.5 shrink-0 opacity-55"
    >
      <path d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V10" />
      <path d="M9.5 2H14v4.5M14 2 7.5 8.5" />
    </svg>
  )
}
