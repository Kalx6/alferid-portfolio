import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Placeholder from '../ui/Placeholder'
import { site } from '../../data/site'

export default function Hero() {
  const { hero } = site

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="pb-16 pt-12 md:pt-16 lg:pb-32 lg:pt-20"
    >
      <Container className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2.5 border border-line bg-surface px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {hero.availability}
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-serif text-[2.75rem] leading-[1.02] tracking-[-0.02em] sm:text-6xl xl:text-[5rem]"
          >
            {site.name} <span className="text-accent">&mdash;</span> {hero.headline}
          </h1>

          <div className="mt-12 grid max-w-2xl gap-8 sm:grid-cols-[11rem_1fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-label">
                Core Disciplines
              </p>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {hero.disciplines.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">{hero.intro}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Button to="/#work" variant="solid">
              Explore Selected Work
            </Button>
            <Button to="/#contact" variant="link">
              Initiate Dialogue <ArrowRight size={14} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <aside className="lg:col-span-5">
          {/* TODO: point this at /work/aura-botanic-lab once case-study routes exist */}
          <Link
            to="/#work"
            className="group block border border-line bg-surface p-2 transition-colors duration-200 hover:border-highlight/40"
          >
            <Placeholder label="Case study cover" className="aspect-[4/5]" />
            <div className="flex items-center justify-between gap-4 px-3 py-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-foreground">
                  {hero.featured.label}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">
                  {hero.featured.subtitle}
                </p>
              </div>
              <span className="grid size-8 shrink-0 place-items-center border border-line text-muted transition-colors group-hover:text-foreground">
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </aside>
      </Container>
    </section>
  )
}

