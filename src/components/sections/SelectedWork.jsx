import { useState } from 'react'
import Container from '../ui/Container'
import { filters, projects } from '../../data/projects'

export default function SelectedWork() {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? projects : projects.filter((p) => p.filter === active)

  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 lg:py-40">
      <Container>
        <div className="flex flex-col gap-8 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-label">
              Curated Works [2022&ndash;2026]
            </p>
            <h2 id="work-heading" className="mt-2 font-serif text-5xl tracking-[-0.02em] lg:text-6xl">
              Selected Archives
            </h2>
          </div>

          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map(({ id, label }) => {
              const isActive = active === id
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(id)}
                  className={`border px-3 py-2 text-[11px] tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'border-accent bg-accent/75 text-foreground'
                      : 'border-line text-muted hover:border-foreground/30 hover:text-foreground'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* TEMPORARY: replaced by the real project grid next */}
        <ul aria-live="polite" className="mt-10 space-y-2 text-muted">
          {visible.map((p) => (
            <li key={p.id}>
              {p.id} &mdash; {p.title} ({p.year})
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
