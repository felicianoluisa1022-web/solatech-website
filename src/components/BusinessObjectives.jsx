import { CircleCheck } from 'lucide-react'
import { objectives } from '../data/businessData.js'
import SectionHeading from './SectionHeading.jsx'

function BusinessObjectives() {
  return (
    <section aria-labelledby="objectives-title" className="section bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <SectionHeading
          id="objectives-title"
          eyebrow="Our Commitments"
          title="Business Objectives"
          description="The goals that guide how we work with every home and business we serve."
          align="left"
        />

        <ol className="grid gap-4">
          {objectives.map((objective) => (
            <li
              key={objective.id}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-mist p-5 transition-colors hover:border-brand/40 hover:bg-leaf"
            >
              <CircleCheck className="size-6 shrink-0 text-brand-dark" aria-hidden="true" />
              <span className="text-base font-medium text-navy">{objective.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default BusinessObjectives
