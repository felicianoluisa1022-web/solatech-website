import { useEffect, useRef } from 'react'
import { Building2, MapPin, Wrench, X } from 'lucide-react'

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="project-modal-title"
      className="m-auto w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-navy/70 backdrop:backdrop-blur-sm open:animate-fade-up"
    >
      {project && (
        <div>
          <div className="relative">
            <img
              src={project.image || '/placeholder.svg'}
              alt={`Sample project: ${project.title}`}
              className="aspect-[16/9] w-full object-cover"
            />
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white/95 text-navy shadow hover:bg-white"
              aria-label="Close project details"
              autoFocus
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Sample Project</p>
            <h3 id="project-modal-title" className="mt-1 text-2xl font-bold">
              {project.title}
            </h3>

            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-mist p-4">
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  Location
                </dt>
                <dd className="mt-1 text-sm font-semibold text-navy">{project.location}</dd>
              </div>
              <div className="rounded-xl bg-mist p-4">
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <Building2 className="size-3.5" aria-hidden="true" />
                  Property Type
                </dt>
                <dd className="mt-1 text-sm font-semibold text-navy">{project.type}</dd>
              </div>
              <div className="rounded-xl bg-mist p-4">
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <Wrench className="size-3.5" aria-hidden="true" />
                  Service
                </dt>
                <dd className="mt-1 text-sm font-semibold text-navy">{project.service}</dd>
              </div>
            </dl>

            <p className="mt-6 leading-relaxed">{project.description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" onClick={onClose} className="btn-primary">
                Request a Similar Service
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 px-6 font-semibold text-navy hover:bg-mist"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}

export default ProjectModal
