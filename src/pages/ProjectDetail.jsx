import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../components/ui/Container'
import NotFound from './NotFound'
import { projects } from '../data/projects'

// TEMPORARY: replaced by the full case-study layout in a later phase.
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <NotFound />

  return (
    <main className="py-24">
      <Container>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted hover:text-foreground"
        >
          <ArrowLeft size={14} aria-hidden="true" /> Back to work
        </Link>
        <p className="mt-10 text-[11px] uppercase tracking-[0.14em] text-muted">
          Index {project.id} &middot; {project.year}
        </p>
        <h1 className="mt-3 font-serif text-5xl lg:text-7xl">{project.title}</h1>
        <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-label">
          {project.category}
        </p>
        <p className="mt-8 max-w-xl leading-relaxed text-muted">{project.shortDescription}</p>
        <p className="mt-10 text-sm text-muted">Full case study coming soon (placeholder).</p>
      </Container>
    </main>
  )
}
