import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'

// Temporary stubs: each gets replaced by its real section as we build.
const stubs = [
  { id: 'work', title: 'Selected Work' },
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Services' },
  { id: 'approach', title: 'Approach' },
  { id: 'contact', title: 'Contact' },
]

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      {stubs.map(({ id, title }) => (
        <section key={id} id={id} className="grid min-h-screen place-items-center border-b border-line">
          <h2 className="font-serif text-5xl">{title}</h2>
        </section>
      ))}
    </main>
  )
}
