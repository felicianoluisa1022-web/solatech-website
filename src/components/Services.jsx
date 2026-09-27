import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { serviceCategories, services } from '../data/businessData.js'
import { getIcon } from '../data/icons.js'
import SectionHeading from './SectionHeading.jsx'

function Services() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleServices =
    activeCategory === 'All' ? services : services.filter((s) => s.category === activeCategory)

  return (
    <section id="services" aria-labelledby="services-title" className="section bg-white">
      <div className="container-page">
        <SectionHeading
          id="services-title"
          eyebrow="What We Do"
          title="Our Solar Panel Services"
          description="From new installations to ongoing care, we help keep rooftop solar systems working for your property."
        />

        <div
          role="group"
          aria-label="Filter services by category"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {serviceCategories.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-navy bg-navy text-white'
                    : 'border-slate-300 bg-white text-navy hover:border-brand hover:text-brand-dark'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
          {visibleServices.map((service) => {
            const Icon = getIcon(service.icon)
            return (
              <li key={service.id} className="card card-hover flex animate-fade-up flex-col">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-navy text-emerald-300">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-leaf px-3 py-1 text-xs font-semibold text-brand-dark">
                    {service.category}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:text-navy"
                >
                  Request this service
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Services
