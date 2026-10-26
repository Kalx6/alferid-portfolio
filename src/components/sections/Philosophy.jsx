import Container from '../ui/Container'
import { site } from '../../data/site'

export default function Philosophy() {
  const { philosophy } = site

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-y border-line bg-black/20 py-24 lg:py-40"
    >
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <h2
            id="about-heading"
            className="text-[10px] font-normal uppercase tracking-[0.18em] text-label"
          >
            {philosophy.label}
          </h2>

          <figure className="mt-8">
            <blockquote className="font-serif text-4xl leading-[1.08] tracking-[-0.02em] sm:text-5xl xl:text-[3.5rem]">
              &ldquo;{philosophy.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-10">
              <span aria-hidden="true" className="block h-px w-14 bg-line" />
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">
                {philosophy.author} &mdash; {philosophy.authorRole}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-6 lg:pt-10 xl:pl-6">
          <p className="text-lg leading-relaxed text-foreground/90">{philosophy.intro}</p>
          <p className="mt-8 text-[15px] leading-relaxed text-muted">{philosophy.body}</p>

          <div className="mt-10 border-t border-line pt-8">
            <h3 className="text-[10px] font-normal uppercase tracking-[0.18em] text-label">
              {philosophy.capabilitiesLabel}
            </h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm text-foreground/90 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3">
              {philosophy.capabilities.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span aria-hidden="true" className="size-1.5 shrink-0 bg-label" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
