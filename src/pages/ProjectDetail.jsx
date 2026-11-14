import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../components/ui/Container'
import NotFound from './NotFound'
import { projects } from '../data/projects'

// Basic version: previous/next navigation and extra images come in the next phase.
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <NotFound />

  const { cover, deliverables } = project

  return (
    <main className="py-16 lg:py-24">
      <Container>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted hover:text-foreground"
        >
          <ArrowLeft size={14} aria-hidden="true" /> Back to work
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
              Index {project.id}
              {project.year ? ` \u00b7 ${project.year}` : ''}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight lg:text-5xl">{project.title}</h1>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-label">
              {project.category}
            </p>
            <p className="mt-6 leading-relaxed text-muted">{project.description}</p>

            {deliverables?.length > 0 && (
              <div className="mt-10 border-t border-line pt-6">
                <h2 className="text-[10px] font-normal uppercase tracking-[0.18em] text-label">
                  Key Deliverables
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span aria-hidden="true" className="size-1.5 shrink-0 bg-label" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-8">
            <div className={cover.tone === 'light' ? 'bg-white' : 'bg-surface-raised'}>
              <img
                src={cover.src}
                alt={cover.alt}
                style={{ aspectRatio: cover.ratio }}
                className="mx-auto max-h-[85vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
