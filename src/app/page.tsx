import ClientEffects from '@/components/ClientEffects'
import AuroraBackground from '@/components/ui/AuroraBackground'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import TechStack from '@/components/sections/TechStack'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <ClientEffects>
      <AuroraBackground />
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />

        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.15), transparent)' }}
          aria-hidden
        />

        <About />

        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.12), transparent)' }}
          aria-hidden
        />

        <Skills />

        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.12), transparent)' }}
          aria-hidden
        />

        <Experience />

        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.12), transparent)' }}
          aria-hidden
        />

        <Projects />

        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.12), transparent)' }}
          aria-hidden
        />

        <Certifications />

        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.12), transparent)' }}
          aria-hidden
        />

        <TechStack />

        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.15), transparent)' }}
          aria-hidden
        />

        <Contact />
      </main>

      <Footer />
    </ClientEffects>
  )
}
