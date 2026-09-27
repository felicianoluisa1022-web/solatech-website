import { Globe, Mail, MapPin, Phone, Sun } from 'lucide-react'
import { business, contactInfo, navLinks, services } from '../data/businessData.js'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-slate-300">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2.5" aria-label="SOLATECH Energy Solutions home">
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white">
              <Sun className="size-6" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-extrabold text-white">SOLATECH</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            {business.name} provides rooftop solar panel services for homes and small businesses in{' '}
            {business.location}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="text-sm hover:text-emerald-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {services.map((service) => (
              <li key={service.id}>
                <a href="#services" className="text-sm hover:text-emerald-300">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
              {business.location}
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
              {contactInfo.phone}
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
              {contactInfo.email}
            </li>
            <li className="flex items-start gap-2.5">
              <Globe className="mt-0.5 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
              <a href={contactInfo.facebookUrl} className="hover:text-emerald-300">
                {contactInfo.facebook}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p className="text-slate-400">{business.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
