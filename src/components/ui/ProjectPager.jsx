import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ProjectPager({ previous, next }) {
  return (
    <nav aria-label="More projects" className="grid border-y border-line sm:grid-cols-2">
      <Link
        to={`/work/${previous.slug}`}
        className="group flex flex-col gap-3 border-b border-line py-8 transition-colors hover:bg-surface/40 sm:border-b-0 sm:border-r sm:pr-8"
      >
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
          <ArrowLeft size={14} aria-hidden="true" /> Previous project
        </span>
        <span className="font-serif text-2xl transition-colors group-hover:text-highlight lg:text-3xl">
          {previous.title}
        </span>
      </Link>

      <Link
        to={`/work/${next.slug}`}
        className="group flex flex-col gap-3 py-8 transition-colors hover:bg-surface/40 sm:items-end sm:pl-8 sm:text-right"
      >
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
          Next project <ArrowRight size={14} aria-hidden="true" />
        </span>
        <span className="font-serif text-2xl transition-colors group-hover:text-highlight lg:text-3xl">
          {next.title}
        </span>
      </Link>
    </nav>
  )
}
