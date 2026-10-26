import Container from '../ui/Container'
import { site } from '../../data/site'

export default function Stats() {
  return (
    <section aria-label="Studio at a glance" className="border-y border-line">
      <Container>
        <dl className="grid gap-8 py-10 md:grid-cols-3">
          {site.stats.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-highlight">{label}</dt>
              <dd className="mt-2 font-serif text-xl md:text-2xl">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
