import { useState } from 'react'
import Container from '../ui/Container'
import ProjectCard from '../ui/ProjectCard'
import { filters, projects } from '../../data/projects'

// After the featured card, rows alternate 7/5 then 5/7.
const rowSpans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7']

export default function SelectedWork() {
  const [active, setActive] = useState('all')
  const showAll = active === 'all'
  const visible = showAll ? projects : projects.filter((p) => p.filter === active)

  // An even count would leave one card alone in the last row, so it becomes full width.
  const lastIsFeatured = showAll && visible.length > 2 && visible.length % 2 === 0

  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 lg:py-40">
      <Container>
        <div className="flex flex-col gap-8 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-label">My Work</p>
            <h2 id="work-heading" className="mt-2 font-serif text-5xl tracking-[-0.02em] lg:text-6xl">
              Selected Work
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

        <div
          aria-live="polite"
          className={
            showAll
              ? 'mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8'
              : 'mt-10 grid gap-6 md:grid-cols-2 lg:gap-8'
          }
        >
          {visible.map((project, index) => {
            const isFeatured = showAll && (index === 0 || (lastIsFeatured && index === visible.length - 1))
            return (
              <ProjectCard
                key={project.id}
                project={project}
                variant={isFeatured ? 'featured' : 'standard'}
                className={showAll ? (isFeatured ? 'lg:col-span-12' : rowSpans[(index - 1) % 4]) : ''}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}
