import { processSteps } from '../data/businessData.js'
import { getIcon } from '../data/icons.js'
import SectionHeading from './SectionHeading.jsx'

function HowItWorks() {
  return (
    <section aria-labelledby="process-title" className="section bg-leaf">
      <div className="container-page">
        <SectionHeading
          id="process-title"
          eyebrow="Our Process"
          title="How It Works"
          description="A clear, step-by-step process from your first message to after-service support."
        />

        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-0.5 bg-brand/25 lg:block"
          />
          {processSteps.map((step) => {
            const Icon = getIcon(step.icon)
            return (
              <li key={step.id} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex size-16 items-center justify-center rounded-full border-4 border-leaf bg-brand text-white shadow-md shadow-brand/20">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <div className="mt-6 w-full flex-1 rounded-2xl bg-white p-6">
                  <p className="font-display text-sm font-bold tracking-wider text-brand-dark">
                    <span className="sr-only">Step </span>
                    {step.number}
                  </p>
                  <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed">{step.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
