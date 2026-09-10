import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#topo" className="font-serif text-xl text-cream-50 tracking-tight">
          Andrade <span className="text-gold-400">&amp;</span> Martins
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-cream-100/90">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-full border border-gold-500 px-5 py-2 text-sm font-medium text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-colors"
        >
          Agende uma Consulta
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-cream-50 p-2"
          aria-label="Abrir menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-950 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream-100/90 hover:text-gold-400 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center rounded-full border border-gold-500 px-5 py-2 text-sm font-medium text-gold-400"
          >
            Agende uma Consulta
          </a>
        </div>
      )}
    </header>
  )
}
