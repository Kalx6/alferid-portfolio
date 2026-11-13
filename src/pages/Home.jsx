import Hero from '../components/sections/Hero'
import SelectedWork from '../components/sections/SelectedWork'
import Philosophy from '../components/sections/Philosophy'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Philosophy />
      <Services />
      <Process />
      <Contact />
    </main>
  )
}
