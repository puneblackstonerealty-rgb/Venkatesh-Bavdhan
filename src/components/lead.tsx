'use client'

import { useEffect, useRef, useState } from 'react'

import { Button, cn } from './ui'

/**
 * Every CTA on every route opens the same enquiry form. Rather than lifting
 * state into a provider and threading it through server components, the
 * buttons dispatch a window event and one dialog in the root layout listens.
 * Keeps every page a server component and the client bundle to this file.
 */
const OPEN_EVENT = 'serenique:open-lead'

export function openLead(intent: string) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { intent } }))
}

export function CtaButton({
  intent,
  children,
  full,
  className,
  variant,
  size,
}: {
  intent: string
  children: React.ReactNode
  full?: boolean
  className?: string
  variant?: React.ComponentProps<typeof Button>['variant']
  size?: React.ComponentProps<typeof Button>['size']
}) {
  return (
    <Button
      onClick={() => openLead(intent)}
      full={full}
      className={className}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  )
}

type Status = 'idle' | 'sending' | 'done' | 'error'

export function LeadDialog() {
  const ref = useRef<HTMLDialogElement>(null)
  const [intent, setIntent] = useState('Enquiry')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const onOpen = (event: Event) => {
      const detail = (event as CustomEvent<{ intent?: string }>).detail
      setIntent(detail?.intent ?? 'Enquiry')
      setStatus('idle')
      setError(null)
      ref.current?.showModal()
    }
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const phone = String(form.get('phone') ?? '').replace(/\D/g, '')

    if (!String(form.get('name') ?? '').trim()) {
      setError('Please enter your name.')
      return
    }
    // Indian mobile numbers are 10 digits and never start below 6. This also
    // rejects the all-zeros placeholder that marketing templates ship with.
    const local = phone.startsWith('91') && phone.length === 12 ? phone.slice(2) : phone
    if (local.length !== 10 || !/^[6-9]/.test(local)) {
      setError('Please enter a valid 10-digit Indian mobile number.')
      return
    }

    setError(null)
    setStatus('sending')
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          phone: `+91${local}`,
          intent,
          pagePath: window.location.pathname,
        }),
      })
      setStatus(response.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <dialog
      ref={ref}
      onClick={(event) => {
        if (event.target === ref.current) ref.current?.close()
      }}
      /* `m-auto` is load-bearing. A modal <dialog> is centred by the UA
         stylesheet's `margin: auto`, and Tailwind's preflight resets margin to
         0 on every element — which drops the dialog into the top-left corner.
         Restoring it here re-centres on both axes. `max-h` plus overflow keeps
         a tall form usable on a short viewport. */
      className={cn(
        'fixed inset-0 m-auto h-fit max-h-[calc(100dvh-2rem)] w-[min(26rem,calc(100vw-2rem))]',
        'overflow-y-auto rounded-xl p-0 backdrop:bg-ink/70',
      )}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-lg text-ink">{intent}</h2>
            <p className="mt-2 text-sm text-muted">
              Share your details and our team will get back to you.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => ref.current?.close()}
            className="-mt-1 min-h-11 min-w-11 text-xl leading-none text-muted"
          >
            ×
          </button>
        </div>

        {status === 'done' ? (
          <div className="py-8 text-center">
            <p className="font-display text-base text-ink">Thank you.</p>
            <p className="mt-3 text-sm text-muted">
              We&rsquo;ve registered your details and will be in touch shortly.
            </p>
            <Button className="mt-7" onClick={() => ref.current?.close()}>
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="mt-5 space-y-3">
            {/* showModal() focuses the first focusable node, which is the close
                button — so the dialog would open with "dismiss" selected.
                Focusing the first field instead means typing works
                immediately. */}
            <Field name="name" placeholder="Name" autoComplete="name" autoFocus />
            <Field name="email" type="email" placeholder="Email (optional)" autoComplete="email" />
            <Field
              name="phone"
              type="tel"
              inputMode="numeric"
              placeholder="Mobile Number"
              autoComplete="tel"
            />
            {error && (
              <p role="alert" className="text-xs text-[#b3261e]">
                {error}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-xs text-[#b3261e]">
                Something went wrong. Please try again.
              </p>
            )}
            <Button type="submit" full size="lg" className="mt-1">
              {status === 'sending' ? 'Sending…' : 'Submit'}
            </Button>
            <p className="pt-2 text-xs leading-snug text-muted">
              By submitting you consent to be contacted about this project, including on a number
              registered with the National Do Not Call Registry.
            </p>
          </form>
        )}
      </div>
    </dialog>
  )
}

function Field({
  name,
  placeholder,
  type = 'text',
  ...rest
}: {
  name: string
  placeholder: string
  type?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      className={cn(
        'h-12 w-full rounded-md border border-line bg-white px-4 text-base text-ink',
        'placeholder:text-muted focus:border-brand focus:outline-none',
      )}
      {...rest}
    />
  )
}

/** The inline register form: name + mobile side by side. */
export function RegisterForm({
  namePlaceholder,
  phonePlaceholder,
  cta,
}: {
  namePlaceholder: string
  phonePlaceholder: string
  cta: string
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        openLead('Register for First Access')
      }}
      className="mx-auto flex w-full max-w-[720px] flex-col gap-2.5 sm:flex-row"
    >
      <input
        name="name"
        placeholder={namePlaceholder}
        aria-label={namePlaceholder}
        className="h-12 flex-1 rounded-md border border-line bg-card px-5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none"
      />
      <input
        name="phone"
        type="tel"
        inputMode="numeric"
        placeholder={phonePlaceholder}
        aria-label={phonePlaceholder}
        className="h-12 flex-1 rounded-md border border-line bg-card px-5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none"
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-md bg-brand px-8 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
      >
        {cta}
      </button>
    </form>
  )
}
