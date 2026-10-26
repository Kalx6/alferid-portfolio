import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import Container from '../ui/Container'
import { footer } from '../../data/footer'
import { site } from '../../data/site'

const linkClasses = 'text-sm text-muted transition-colors hover:text-foreground'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black/25 pt-20 lg:pt-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2.5 border border-line bg-surface px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-foreground/90">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-label" />
              {footer.availability}
            </p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
              {footer.description}
            </p>
            <p className="mt-10 text-[10px] uppercase tracking-[0.14em] text-muted">
              {footer.locationLabel}
            </p>
            <p className="mt-1 text-sm">{footer.location}</p>
          </div>

          <nav aria-label="Disciplines" className="lg:col-span-3">
            <h2 className="text-[10px] font-normal uppercase tracking-[0.18em] text-label">
              Disciplines Index
            </h2>
            <ul className="mt-6 space-y-3">
              {footer.disciplines.map((item) => (
                <li key={item}>
                  <Link to="/#services" className={linkClasses}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Network" className="lg:col-span-3">
            <h2 className="text-[10px] font-normal uppercase tracking-[0.18em] text-label">
              Network Index
            </h2>
            <ul className="mt-6 space-y-3">
              {footer.network.map(({ name, note, url }) => (
                <li key={name}>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClasses}
                    >
                      <span className="underline decoration-foreground/30 underline-offset-4">
                        {name}
                      </span>{' '}
                      [{note}]
                    </a>
                  ) : (
                    <span className="text-sm text-muted/70">
                      {name} [{note}]
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-20 border-t border-line pt-10 lg:mt-28">
          <p
            aria-hidden="true"
            className="select-none overflow-hidden whitespace-nowrap font-serif text-[clamp(2.75rem,10.5vw,9rem)] uppercase leading-none tracking-[-0.01em] text-foreground/[0.07]"
          >
            {site.name}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line py-6 text-[11px] uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-foreground/80">
            &copy; {new Date().getFullYear()} {site.name} Studio. All archival rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 self-start text-foreground/80 transition-colors hover:text-foreground sm:self-auto"
          >
            <ArrowUp size={13} aria-hidden="true" /> Back to top
          </button>
        </div>
      </Container>
    </footer>
  )
}
