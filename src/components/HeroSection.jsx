import { ArrowRight, Building2, House, MapPin } from 'lucide-react'

const heroPoints = [
  { icon: House, label: 'Homes' },
  { icon: Building2, label: 'Small Businesses' },
  { icon: MapPin, label: 'Nueva Ecija' },
]

function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy">
      <img
        src="/images/hero-rooftop-solar.png"
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30"
      />

      <div className="container-page flex min-h-[calc(100svh-5rem)] items-center py-20 lg:py-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
            Rooftop Solar Services in Nueva Ecija
          </p>

          <h1 id="hero-title" className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            The Future Starts with <span className="text-emerald-300">Solar</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200 text-pretty">
            SOLATECH Energy Solutions provides rooftop solar panel services for homes and small
            businesses in Nueva Ecija, Philippines.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Get a Free Consultation
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a href="#services" className="btn-outline-light">
              View Our Services
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-8">
            {heroPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <Icon className="size-5 text-emerald-300" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
