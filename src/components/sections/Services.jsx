import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'
import { services, servicesIntro } from '../../data/services'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 lg:py-40">
      <Container>
        <div className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-label">
              {servicesIntro.label}
            </p>
            <h2
              id="services-heading"
              className="mt-2 font-serif text-5xl tracking-[-0.02em] lg:text-6xl"
            >
              {servicesIntro.title}
            </h2>
          </div>
          <p className="max-w-[16rem] text-[10px] uppercase leading-relaxed tracking-[0.14em] text-foreground/80 md:text-left">
            {servicesIntro.note}
          </p>
        </div>

        <ul>
          {services.map(({ id, number, tag, title, description, deliverables }) => (
            <li
              key={id}
              className="grid gap-5 border-b border-line py-10 first:border-t-0 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-12"
            >
              <div className="flex items-start justify-between lg:col-span-2 lg:block">
                <p className="text-[11px] uppercase tracking-[0.14em] text-label">
                  {number} // {tag}
                </p>
                <Link
                  to="/#contact"
                  aria-label={`Enquire about ${title}`}
                  className="text-muted transition-colors hover:text-foreground lg:hidden"
                >
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>

              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl lg:text-[1.75rem]">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{description}</p>
              </div>

              <ul className="space-y-1.5 lg:col-span-4 lg:pt-1.5">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] text-foreground/85"
                  >
                    <span aria-hidden="true" className="size-1 shrink-0 bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="hidden justify-end lg:col-span-1 lg:flex lg:pt-1">
                <Link
                  to="/#contact"
                  aria-label={`Enquire about ${title}`}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
