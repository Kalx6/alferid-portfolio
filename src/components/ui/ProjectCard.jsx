import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Cover({ project }) {
  const { title, cover } = project
  const background = cover.tone === 'light' ? 'bg-white' : 'bg-surface-raised'

  return (
    <div className={`overflow-hidden ${background}`}>
      <img
        src={cover.src}
        alt={cover.alt}
        title={title}
        loading="lazy"
        decoding="async"
        style={{ aspectRatio: cover.ratio }}
        className="max-h-[44rem] w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
      />
    </div>
  )
}

function MetaRow({ id, year }) {
  return (
    <div className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.14em] text-muted">
      <span>Index {id}</span>
      {year && <span>{year}</span>}
    </div>
  )
}

export default function ProjectCard({ project, variant = 'standard', className = '' }) {
  const { id, slug, title, year, category, shortDescription, location } = project
  const featured = variant === 'featured'

  const titleLink = (
    <Link to={`/work/${slug}`} className="after:absolute after:inset-0">
      {title}
    </Link>
  )

  if (featured) {
    return (
      <article
        className={`group relative border border-line bg-surface/40 p-2 transition-colors duration-200 focus-within:border-highlight/40 hover:border-highlight/30 lg:grid lg:grid-cols-12 ${className}`}
      >
        <div className="lg:col-span-8">
          <Cover project={project} />
        </div>
        <div className="flex flex-col justify-center gap-5 p-6 lg:col-span-4 lg:p-10">
          <MetaRow id={id} year={year} />
          <h3 className="font-serif text-4xl leading-tight tracking-[-0.01em] lg:text-[2.75rem]">
            {titleLink}
          </h3>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-label">
            {category}
          </p>
          <p className="leading-relaxed text-muted">{shortDescription}</p>
          <div className="flex items-center justify-between gap-4 border-t border-line pt-5 text-[11px] uppercase tracking-[0.14em]">
            {location ? <span className="text-muted">{location}</span> : <span />}
            <span className="inline-flex items-center gap-2 text-foreground">
              View Project <ArrowRight size={13} aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      className={`group relative flex h-full flex-col border border-line bg-surface/40 p-2 transition-colors duration-200 focus-within:border-highlight/40 hover:border-highlight/30 ${className}`}
    >
      <Cover project={project} />
      <div className="mt-auto flex flex-col gap-3 px-4 pb-4 pt-8">
        <MetaRow id={id} year={year} />
        <h3 className="font-serif text-2xl leading-tight lg:text-3xl">{titleLink}</h3>
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-label">
          {category}
        </p>
        <p className="text-sm leading-relaxed text-muted">{shortDescription}</p>
      </div>
    </article>
  )
}
