import { overviewHighlights } from '../data/businessData.js'
import { getIcon } from '../data/icons.js'

function BusinessOverview() {
  return (
    <section id="about" aria-labelledby="about-title" className="section bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <img
            src="/images/technician-installing.png"
            alt="A SOLATECH technician installing a solar panel on a metal roof"
            className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            loading="lazy"
          />
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-navy p-5 text-white shadow-xl sm:left-auto sm:right-8 sm:max-w-xs">
            <p className="font-display text-lg font-bold">Local, solar-focused team</p>
            <p className="mt-1 text-sm text-slate-300">
              Rooftop solar support for property owners in Nueva Ecija.
            </p>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-6 bg-brand" />
            About SOLATECH
          </p>
          <h2 id="about-title" className="section-title">
            Rooftop Solar Services for Homes and Small Businesses
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty">
            SOLATECH Energy Solutions is a solar panel service business located in Nueva Ecija,
            Philippines. We provide solar panel installation, cleaning, inspection, and repair
            services for residential properties and small businesses.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {overviewHighlights.map((item) => {
              const Icon = getIcon(item.icon)
              return (
                <li key={item.id} className="flex gap-4">
                  <span className="icon-badge">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BusinessOverview
