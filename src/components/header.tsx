'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { cn, Container } from './ui'
import { Wordmark } from './wordmark'

/**
 * ⚠ NO backdrop-filter / transform / filter on <header>.
 *
 * The mobile menu below is position:fixed and is a descendant of this element.
 * Any of those properties makes the header a containing block for it, so
 * inset-0 resolves against the header box instead of the viewport and the
 * panel collapses to a sliver. The rule binds every ancestor of a fixed
 * element, not just html/body.
 */
export function Header({
  nav,
  phone,
  phoneDisplay,
}: {
  nav: ReadonlyArray<{ href: string; label: string }>
  phone: string
  phoneDisplay: string
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const [barHeight, setBarHeight] = useState(65)

  // The drawer is fixed, so it cannot inherit the header's height — it has to
  // be told. Measured rather than hardcoded: the bar's height moves whenever
  // the wordmark or nav copy changes, and a stale magic number leaves a gap or
  // hides the top row of links.
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const observer = new ResizeObserver(() => setBarHeight(bar.offsetHeight))
    observer.observe(bar)
    setBarHeight(bar.offsetHeight)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Move focus into the panel on open and hand it back to the toggle on close,
  // so keyboard and screen-reader users are not left behind on the page
  // underneath. Skipped on first render — nothing has opened yet, and stealing
  // focus on load would be its own bug.
  const openedOnce = useRef(false)
  useEffect(() => {
    if (open) {
      openedOnce.current = true
      drawerRef.current?.querySelector('button')?.focus()
    } else if (openedOnce.current) {
      toggleRef.current?.focus()
    }
  }, [open])

  // A route change keeps this component mounted, since the header lives in the
  // root layout. Without this the panel would stay open behind the new page
  // after any navigation that did not come from tapping a link — the browser
  // back button, for instance.
  //
  // Adjusted during render rather than in an effect: React re-runs this
  // component before committing, so the panel is never painted open on the new
  // route. An effect would let one open frame through, and would trip
  // react-hooks/set-state-in-effect besides.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-card">
      <div ref={barRef}>
        <Container className="flex items-center justify-between gap-6 py-3">
          <Link href="/" aria-label="Venkatesh Serenique home">
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={cn(
                  'text-sm whitespace-nowrap transition-colors hover:text-brand',
                  pathname === item.href ? 'text-brand' : 'text-body',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${phone}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-brand px-4 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-brand-hover"
            >
              <PhoneIcon />
              <span className="hidden sm:inline md:hidden lg:inline">{phoneDisplay}</span>
              <span className="sm:hidden md:inline lg:hidden">Call</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line md:hidden"
            >
              {/* Strokes are 2px, not a hairline: at 1px the open-state cross
                  reads as decoration rather than a control. */}
              <span className="relative block h-3.5 w-5">
                {[0, 1, 2].map((line) => (
                  <span
                    key={line}
                    className={cn(
                      'absolute left-0 block h-0.5 w-5 rounded-full bg-ink transition-transform duration-200',
                      line === 0 && (open ? 'top-1/2 rotate-45' : 'top-0'),
                      line === 1 && (open ? 'opacity-0' : 'top-1/2'),
                      line === 2 && (open ? 'top-1/2 -rotate-45' : 'bottom-0'),
                    )}
                  />
                ))}
              </span>
            </button>
          </div>
        </Container>
      </div>

      <div
        id="mobile-menu"
        ref={drawerRef}
        style={{ top: barHeight }}
        className={cn(
          'fixed inset-x-0 bottom-0 z-50 flex flex-col bg-card transition-transform duration-300 md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        /* `inert`, not just aria-hidden. The panel stays mounted when closed so
           it can slide, and without inert its links remain in the tab order —
           a keyboard user tabs straight into an invisible menu. inert removes
           them from focus and from the a11y tree at once. */
        inert={!open}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <span className="eyebrow text-muted">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center gap-2 rounded-md border border-line px-3 text-sm text-ink transition-colors active:bg-surface"
          >
            Close
            <span aria-hidden="true" className="text-base leading-none">
              ✕
            </span>
          </button>
        </div>

        {/* No call button down here, deliberately. This panel sits inside the
            header's stacking context (sticky + z-40), so its own z-50 is
            scoped to that context and can never paint above the sticky mobile
            CTA bar, which is a later sibling at the same level. Anything
            placed at the foot of the drawer renders underneath that bar. The
            bar already carries Call, so the clearance below is left empty on
            purpose. */}
        <nav className="flex-1 overflow-y-auto px-5 py-2 pb-24">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line py-4 font-display text-xl text-ink"
            >
              {item.label}
              <span aria-hidden="true" className="text-base text-muted">
                ›
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 1.5a1.3 1.3 0 0 0-1.8.2L1 2.7C.4 3.4.3 4.4.8 5.2a19.6 19.6 0 0 0 10 10c.8.5 1.8.4 2.5-.2l1-.8a1.3 1.3 0 0 0 .2-1.8l-1.6-2a1.3 1.3 0 0 0-1.7-.3l-1.3.8a13.8 13.8 0 0 1-4.6-4.6l.8-1.3a1.3 1.3 0 0 0-.3-1.7l-2-1.6Z" />
    </svg>
  )
}
