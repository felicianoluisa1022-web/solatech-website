import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import BusinessOverview from './components/BusinessOverview.jsx'
import Benefits from './components/Benefits.jsx'
import Services from './components/Services.jsx'
import MissionVision from './components/MissionVision.jsx'
import BusinessObjectives from './components/BusinessObjectives.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import SolarSolutions from './components/SolarSolutions.jsx'
import SolarRoof from './components/SolarRoof.jsx'
import Projects from './components/Projects.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import CTASection from './components/CTASection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <BusinessOverview />
        <Benefits />
        <Services />
        <MissionVision />
        <BusinessObjectives />
        <HowItWorks />
        <SolarSolutions />
        <SolarRoof />
        <Projects />
        <FAQ />
        <Contact />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
