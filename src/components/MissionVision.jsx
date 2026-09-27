import { missionVision } from '../data/businessData.js'
import { getIcon } from '../data/icons.js'
import SectionHeading from './SectionHeading.jsx'

function MissionVision() {
  return (
    <section aria-labelledby="mission-title" className="section bg-navy">
      <div className="container-page">
        <SectionHeading
          id="mission-title"
          eyebrow="Our Purpose"
          title="Mission and Vision"
          light
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {missionVision.map((item) => {
            const Icon = getIcon(item.icon)
            return (
              <article
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-emerald-300/40 lg:p-10"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-white">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-300 text-pretty">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MissionVision
