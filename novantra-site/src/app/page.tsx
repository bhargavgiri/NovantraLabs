import Hero from '@/components/sections/Hero'
import TechMarquee from '@/components/sections/TechMarquee'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import WhyUs from '@/components/sections/WhyUs'
import Contact from '@/components/sections/Contact'

const Divider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
)

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <Divider />
      <Services />
      <Divider />
      <Portfolio />
      {/* Between Portfolio and About */}
      <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <About />
      <Divider />
      <WhyUs />
      <Divider />
      <Contact />
    </main>
  )
}
