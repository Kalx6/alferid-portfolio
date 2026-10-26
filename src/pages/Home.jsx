import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import SelectedWork from '../components/sections/SelectedWork'
import Philosophy from '../components/sections/Philosophy'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <SelectedWork />
      <Philosophy />
      <Services />
      <Process />
      <Contact />
    </main>
  )
}
