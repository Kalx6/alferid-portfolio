import Container from '../ui/Container'
import { processIntro, processSteps } from '../../data/process'

export default function Process() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="border-y border-line bg-surface/50 py-24 lg:py-36"
    >
      <Container>
        <p className="text-[10px] uppercase tracking-[0.18em] text-label">{processIntro.label}</p>
        <h2
          id="approach-heading"
          className="mt-2 max-w-3xl font-serif text-5xl leading-[1.05] tracking-[-0.02em] lg:text-6xl"
        >
          {processIntro.title}
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">{processIntro.description}</p>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ title, description }, index) => (
            <li key={title} className="border-t border-line pt-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-label">
                Phase {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 font-serif text-xl leading-snug lg:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
