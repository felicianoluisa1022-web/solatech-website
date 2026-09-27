import { benefits } from '../data/businessData.js'
import { getIcon } from '../data/icons.js'
import SectionHeading from './SectionHeading.jsx'

function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="section bg-mist">
      <div className="container-page">
        <SectionHeading
          id="benefits-title"
          eyebrow="Why Solar"
          title="Why Choose Solar Energy?"
          description="Rooftop solar lets homes and businesses put unused roof space to work with a renewable source of energy."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = getIcon(benefit.icon)
            return (
              <li key={benefit.id} className="card card-hover">
                <span className="icon-badge">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{benefit.title}</h3>
                <p className="mt-2 leading-relaxed">{benefit.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Benefits
