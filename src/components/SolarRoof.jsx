import { ArrowRight } from 'lucide-react'
import { roofFactors } from '../data/businessData.js'
import { getIcon } from '../data/icons.js'

function SolarRoof() {
  return (
    <section aria-labelledby="roof-title" className="section bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-6 bg-brand" />
            Site Assessment
          </p>
          <h2 id="roof-title" className="section-title">
            Is Your Roof Ready for Solar?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty">
            Before installation, we check the key factors that affect whether a rooftop solar system
            is a good fit for your property.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {roofFactors.map((factor) => {
              const Icon = getIcon(factor.icon)
              return (
                <li
                  key={factor.id}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-leaf text-brand-dark">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-navy">{factor.label}</span>
                </li>
              )
            })}
          </ul>

          <a href="#contact" className="btn-primary mt-10">
            Request a Site Assessment
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src="/images/roof-assessment.png"
            alt="A technician with a tablet assessing a metal roof before solar installation"
            className="aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-square"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default SolarRoof
