import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import ProjectPager from '../components/ui/ProjectPager'
import NotFound from './NotFound'
import { usePageTitle } from '../hooks/usePageTitle'
import { projects } from '../data/projects'

function Artwork({ image, eager = false }) {
  return (
    <figure className={image.tone === 'light' ? 'bg-white' : 'bg-surface-raised'}>
      <img
        src={image.src}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        style={{ aspectRatio: image.ratio }}
        className="mx-auto max-h-[85vh] w-full object-contain"
      />
    </figure>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  usePageTitle(
    project ? `${project.title} \u2014 Alferid Meded` : 'Project not found \u2014 Alferid Meded',
    project?.shortDescription,
  )

  if (!project) return <NotFound />

  const { cover, gallery = [], deliverables = [] } = project
  const facts = [
    ['Year', project.year],
    ['Client', project.client],
    ['Role', project.role],
  ].filter(([, value]) => value)

  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <main className="pt-16 lg:pt-24">
      <Container>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} aria-hidden="true" /> Back to work
        </Link>

        <header className="mt-10">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">Project {project.id}</p>
          <h1 className="mt-3 font-serif text-5xl leading-[1.02] tracking-[-0.02em] lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.14em] text-label">
            {project.category}
          </p>
        </header>

        <div className="mt-12">
          <Artwork image={cover} eager />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <section aria-labelledby="about-project" className="lg:col-span-7">
            <h2
              id="about-project"
              className="text-[10px] font-normal uppercase tracking-[0.18em] text-label"
            >
              About this project
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/90">
              {project.description}
            </p>
          </section>

          <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
            {deliverables.length > 0 && (
              <section aria-labelledby="deliverables">
                <h2
                  id="deliverables"
                  className="text-[10px] font-normal uppercase tracking-[0.18em] text-label"
                >
                  Key Deliverables
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-foreground/90">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span aria-hidden="true" className="size-1.5 shrink-0 bg-label" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {facts.length > 0 && (
              <dl className="space-y-4 border-t border-line pt-8">
                {facts.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[10px] uppercase tracking-[0.14em] text-muted">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </aside>
        </div>

        {gallery.length > 0 && (
          <section aria-label="More images" className="mt-20 grid gap-6 md:grid-cols-2">
            {gallery.map((image) => (
              <div key={image.src} className={gallery.length % 2 === 1 ? 'first:md:col-span-2' : ''}>
                <Artwork image={image} />
              </div>
            ))}
          </section>
        )}

        <div className="mt-24 lg:mt-32">
          <ProjectPager previous={previous} next={next} />
        </div>

        <section aria-labelledby="cta-heading" className="py-20 text-center lg:py-28">
          <h2 id="cta-heading" className="font-serif text-4xl tracking-[-0.02em] lg:text-5xl">
            Like what you see?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Tell me about your project and let&rsquo;s see how I can help.
          </p>
          <Button to="/#contact" variant="solid" className="mt-8">
            Start a project
          </Button>
        </section>
      </Container>
    </main>
  )
}
