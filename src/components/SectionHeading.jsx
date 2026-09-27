function SectionHeading({ eyebrow, title, description, align = 'center', id, light = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className={`eyebrow ${light ? 'text-emerald-300' : ''}`}>
          <span aria-hidden="true" className={`h-px w-6 ${light ? 'bg-emerald-300' : 'bg-brand'}`} />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`section-title ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed text-pretty ${light ? 'text-slate-300' : 'text-ink'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
