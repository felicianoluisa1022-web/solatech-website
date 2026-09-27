import { useState } from 'react'
import { ArrowRight, Info, MapPin } from 'lucide-react'
import { projectFilters, projects } from '../data/businessData.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectModal from './ProjectModal.jsx'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.type === activeFilter)

  return (
    <section id="projects" aria-labelledby="projects-title" className="section bg-mist">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="projects-title"
            eyebrow="Our Work"
            title="Sample Solar Projects"
            description="Examples of the types of rooftop solar work we provide."
            align="left"
          />

          <div role="group" aria-label="Filter projects by property type" className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'border-navy bg-navy text-white'
                      : 'border-slate-300 bg-white text-navy hover:border-brand hover:text-brand-dark'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>

        <p className="mt-6 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          These are sample project cards. Replace them with actual client-approved project photos and
          details once available.
        </p>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visibleProjects.map((project) => (
            <li
              key={project.id}
              className="group flex animate-fade-up flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={`Sample project: ${project.title}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy">
                  {project.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold text-brand-dark">{project.service}</p>
                <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-600">
                  <MapPin className="size-4" aria-hidden="true" />
                  {project.location}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-navy hover:text-brand-dark"
                  aria-haspopup="dialog"
                >
                  View Project Details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
