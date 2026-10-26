import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { contact } from '../../data/contact'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const controlClasses =
  'w-full border bg-surface-raised/40 px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-highlight/60'

function Field({ id, label, required, error, className = '', children }) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-[0.14em] text-foreground/80"
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState(false)

  const control = (name) => ({
    id: `contact-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: `${controlClasses} ${errors[name] ? 'border-red-400/70' : 'border-line'}`,
  })

  function handleChange(event) {
    const { name } = event.target
    setNotice(false)
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const next = {}

    if (!data.name.trim()) next.name = 'Please enter your name.'
    if (!data.email.trim()) next.email = 'Please enter your email address.'
    else if (!emailPattern.test(data.email.trim())) next.email = 'Please enter a valid email address.'
    if (!data.scope.trim()) next.scope = 'Please describe your project.'

    setErrors(next)
    const firstInvalid = Object.keys(next)[0]
    if (firstInvalid) {
      setNotice(false)
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    // Prototype: no sending service is connected yet, so nothing is submitted anywhere.
    setNotice(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 lg:py-40">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-label">{contact.label}</p>
          <h2
            id="contact-heading"
            className="mt-2 max-w-sm font-serif text-5xl leading-[1.05] tracking-[-0.02em] lg:text-6xl"
          >
            {contact.title}
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-muted">{contact.intro}</p>

          <div className="mt-10 border-t border-line pt-6">
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted">Electronic Mail</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 inline-block font-serif text-2xl underline decoration-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {contact.email}
            </a>

            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-muted">Primary Studio</dt>
                <dd className="mt-1 text-sm">{contact.studio}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.14em] text-muted">Timezone</dt>
                <dd className="mt-1 text-sm">{contact.timezone}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 border border-line bg-surface/60 p-5">
            <p className="text-[10px] uppercase tracking-[0.14em] text-label">
              {contact.response.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{contact.response.text}</p>
          </div>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          onChange={handleChange}
          aria-label="Project inquiry"
          className="border border-line bg-surface/60 p-6 sm:p-8 lg:col-span-7 lg:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="contact-name" label="Your Name / Title" required error={errors.name}>
              <input
                type="text"
                autoComplete="name"
                placeholder="e.g. Elena Rostova"
                aria-required="true"
                {...control('name')}
              />
            </Field>
            <Field id="contact-email" label="Email Address" required error={errors.email}>
              <input
                type="email"
                autoComplete="email"
                placeholder="name@organization.com"
                aria-required="true"
                {...control('email')}
              />
            </Field>

            <Field id="contact-discipline" label="Discipline Focus" required>
              <div className="relative">
                <select
                  defaultValue={contact.disciplines[0]}
                  {...control('discipline')}
                  className={`${control('discipline').className} appearance-none pr-10`}
                >
                  {contact.disciplines.map((option) => (
                    <option key={option} value={option} className="bg-surface">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                />
              </div>
            </Field>
            <Field id="contact-delivery" label="Target Delivery">
              <input type="text" placeholder="e.g. Q3 2027 (August)" {...control('delivery')} />
            </Field>

            <Field
              id="contact-scope"
              label="Project Scope & Ambitions"
              required
              error={errors.scope}
              className="sm:col-span-2"
            >
              <textarea
                rows={5}
                placeholder="Tell me about your brand, context, scope requirements, and what you aim to achieve together..."
                aria-required="true"
                {...control('scope')}
                className={`${control('scope').className} resize-y`}
              />
            </Field>
          </div>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[16rem] text-[10px] uppercase leading-relaxed tracking-[0.1em] text-muted">
              {contact.confidentiality}
            </p>
            <Button type="submit" variant="solid" className="px-8 py-4">
              Transmit Inquiry
            </Button>
          </div>

          {notice && (
            <p
              role="status"
              className="mt-8 border border-accent/60 bg-accent/10 p-4 text-sm leading-relaxed text-foreground"
            >
              This form isn&rsquo;t connected to a sending service yet, so nothing was sent. For now,
              please email{' '}
              <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
                {contact.email}
              </a>
              .
            </p>
          )}
        </form>
      </Container>
    </section>
  )
}
