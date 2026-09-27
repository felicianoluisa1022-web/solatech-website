import { ArrowRight, Sun } from 'lucide-react'

function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-20 lg:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center sm:px-12 lg:py-20">
          <Sun
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 size-64 text-white/10"
          />
          <h2 id="cta-title" className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Get a free consultation for your home or small business in Nueva Ecija.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-secondary">
              Get a Free Consultation
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a href="#services" className="btn-outline-light">
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
