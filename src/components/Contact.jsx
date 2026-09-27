import { Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, contactInfo } from '../data/businessData.js'
import SectionHeading from './SectionHeading.jsx'
import ContactForm from './ContactForm.jsx'

const contactItems = [
  { icon: MapPin, label: 'Location', value: business.location },
  { icon: Phone, label: 'Phone', value: contactInfo.phone },
  { icon: Mail, label: 'Email', value: contactInfo.email },
  { icon: Globe, label: 'Facebook', value: contactInfo.facebook },
]

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section bg-navy">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Get in Touch"
            title="Let's Talk About Your Solar Needs"
            description="Send us your property details and the service you need. Our team will get back to you to discuss the next steps."
            align="left"
            light
          />

          <ul className="mt-10 flex flex-col gap-4">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                  <p className="font-medium text-white">{value}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href={contactInfo.messengerUrl} className="btn-outline-light mt-8">
            <MessageCircle className="size-5" aria-hidden="true" />
            Message Us on Messenger
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
