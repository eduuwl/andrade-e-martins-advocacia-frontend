export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg text-cream-50">
          Andrade <span className="text-gold-400">&amp;</span> Martins Advocacia
        </p>
        <p className="text-xs text-cream-100/40 text-center">
          © {new Date().getFullYear()} Andrade &amp; Martins Advocacia. Protótipo de site
          desenvolvido para fins de demonstração — conteúdo fictício.
        </p>
      </div>
    </footer>
  )
}
