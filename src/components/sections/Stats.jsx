import Container from '../ui/Container'
import { site } from '../../data/site'

export default function Stats() {
  return (
    <section aria-label="Studio at a glance">
      <Container>
        <dl className="grid border-y border-line md:grid-cols-3">
          {site.stats.map(({ label, value }) => (
            <div
              key={label}
              className="border-t border-line py-6 first:border-t-0 md:border-l md:border-t-0 md:px-6 md:first:border-l-0 md:first:pl-0"
            >
              <dt className="text-[10px] uppercase tracking-[0.18em] text-label">{label}</dt>
              <dd className="mt-2 font-serif text-xl md:text-2xl">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
