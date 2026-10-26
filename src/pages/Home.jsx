import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import SelectedWork from '../components/sections/SelectedWork'
import Philosophy from '../components/sections/Philosophy'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <SelectedWork />
      <Philosophy />
      <Services />
      <Process />

      {/* TEMPORARY: replaced by the real Contact section next */}
      <section id="contact" className="grid min-h-screen place-items-center border-b border-line">
        <h2 className="font-serif text-5xl">Contact</h2>
      </section>
    </main>
  )
}
