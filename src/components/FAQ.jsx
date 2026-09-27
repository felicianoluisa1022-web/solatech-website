import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/businessData.js'
import SectionHeading from './SectionHeading.jsx'

function FAQItem({ faq, isOpen, onToggle }) {
  const buttonId = `faq-button-${faq.id}`
  const panelId = `faq-panel-${faq.id}`

  return (
    <li className={`rounded-2xl border bg-white transition-colors ${isOpen ? 'border-brand/50' : 'border-slate-200'}`}>
      <h3 className="text-base">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display font-bold text-navy"
        >
          {faq.question}
          <ChevronDown
            className={`size-5 shrink-0 text-brand-dark transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="px-6 pb-6 leading-relaxed"
      >
        {faq.answer}
      </div>
    </li>
  )
}

function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <section id="faqs" aria-labelledby="faq-title" className="section bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            description="Answers to common questions about rooftop solar and our services. Still have a question? Send us a message."
            align="left"
          />
          <a href="#contact" className="btn-primary mt-8">
            Ask Us a Question
          </a>
        </div>

        <ul className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId((current) => (current === faq.id ? null : faq.id))}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
