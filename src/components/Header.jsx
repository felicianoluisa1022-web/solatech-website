import { useEffect, useState } from 'react'
import { Menu, Sun, X } from 'lucide-react'
import { navLinks } from '../data/businessData.js'

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="SOLATECH Energy Solutions home">
      <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white">
        <Sun className="size-6" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-navy">SOLATECH</span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          Energy Solutions
        </span>
      </span>
    </a>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        isScrolled ? 'border-slate-200 shadow-sm' : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-brand-dark' : 'text-ink hover:text-navy'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden min-h-11 px-5 text-sm sm:inline-flex">
            Get a Free Consultation
          </a>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-lg text-navy hover:bg-mist lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="animate-fade-in border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
                    activeId === link.id ? 'bg-leaf text-brand-dark' : 'text-navy hover:bg-mist'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={closeMenu} className="btn-primary w-full">
                Get a Free Consultation
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
