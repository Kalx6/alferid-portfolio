import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Placeholder from '../ui/Placeholder'

function MetaRow({ id, year }) {
  return (
    <div className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.14em] text-muted">
      <span>Index {id}</span>
      <span>{year}</span>
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

  const imageClasses =
    'transition-transform duration-500 motion-safe:group-hover:scale-[1.03] ' +
    (featured ? 'aspect-[16/10]' : 'aspect-[4/3]')

  if (featured) {
    return (
      <article
        className={`group relative border border-line bg-surface/40 p-2 transition-colors duration-200 focus-within:border-highlight/40 hover:border-highlight/30 lg:grid lg:grid-cols-12 ${className}`}
      >
        <div className="overflow-hidden lg:col-span-8">
          <Placeholder label={`${title} cover`} className={imageClasses} />
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
            <span className="text-muted">{location}</span>
            <span className="inline-flex items-center gap-2 text-foreground">
              View Case Study <ArrowRight size={13} aria-hidden="true" />
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
      <div className="overflow-hidden">
        <Placeholder label={`${title} cover`} className={imageClasses} />
      </div>
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
