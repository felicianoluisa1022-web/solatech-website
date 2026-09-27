import { ArrowDown, ArrowRight } from 'lucide-react'
import { solarComponents, solarFlow } from '../data/businessData.js'
import { getIcon } from '../data/icons.js'
import SectionHeading from './SectionHeading.jsx'

function SolarFlowDiagram() {
  return (
    <figure className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
      <figcaption className="sr-only">
        Energy flow: sunlight reaches the solar panels, the inverter converts the electricity, and it
        passes through the electrical system to power the home or business.
      </figcaption>
      <ol className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-2">
        {solarFlow.map((step, index) => {
          const Icon = getIcon(step.icon)
          const isLast = index === solarFlow.length - 1
          const isFirst = index === 0
          return (
            <li key={step.id} className="flex flex-col items-center gap-3 md:flex-1 md:flex-row md:gap-2">
              <div className="flex flex-col items-center gap-3 text-center">
                <span
                  className={`flex size-16 items-center justify-center rounded-2xl sm:size-20 ${
                    isFirst ? 'bg-amber-100 text-amber-600' : isLast ? 'bg-navy text-emerald-300' : 'bg-leaf text-brand-dark'
                  }`}
                >
                  <Icon className="size-8 sm:size-9" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy">{step.label}</span>
              </div>
              {!isLast && (
                <span aria-hidden="true" className="flex flex-1 items-center justify-center text-brand md:pb-8">
                  <ArrowDown className="size-6 md:hidden" />
                  <span className="hidden w-full items-center md:flex">
                    <span className="h-0.5 flex-1 border-t-2 border-dashed border-brand/40" />
                    <ArrowRight className="-ml-1 size-5" />
                  </span>
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </figure>
  )
}

function SolarSolutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="section bg-mist">
      <div className="container-page">
        <SectionHeading
          id="solutions-title"
          eyebrow="Solar Solutions"
          title="How a Rooftop Solar System Works"
          description="A rooftop solar system uses solar panels to capture energy from sunlight. The inverter converts the electricity produced by the panels so it can be used in the property's electrical system."
        />

        <SolarFlowDiagram />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solarComponents.map((component) => {
            const Icon = getIcon(component.icon)
            return (
              <li key={component.id} className="card card-hover">
                <span className="icon-badge">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{component.title}</h3>
                <p className="mt-2 leading-relaxed">{component.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default SolarSolutions
