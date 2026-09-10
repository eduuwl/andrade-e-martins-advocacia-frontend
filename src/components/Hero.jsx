export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-navy-950 pt-40 pb-28 lg:pt-48 lg:pb-36"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy-600/40 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="#d9b872" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-400 uppercase">
            OAB/SP · Desde 2009
          </span>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-cream-50">
            Assessoria jurídica que defende seus direitos com{' '}
            <span className="text-gold-400">clareza e resultado</span>
          </h1>

          <p className="mt-6 text-lg text-cream-100/75 max-w-xl leading-relaxed">
            Atendimento próximo, linguagem sem juridiquês e estratégia sob medida
            para pessoas físicas e empresas. Marque uma conversa inicial gratuita
            e entenda o seu caso.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 hover:bg-gold-400 transition-colors"
            >
              Falar com um Advogado
            </a>
            <a
              href="#areas"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-cream-50 hover:border-white/40 transition-colors"
            >
              Ver Áreas de Atuação
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-white/10 pt-8">
            {[
              ['15+', 'anos de atuação'],
              ['400+', 'casos conduzidos'],
              ['4.9/5', 'avaliação de clientes'],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-2xl text-gold-400">{n}</dt>
                <dd className="mt-1 text-xs text-cream-100/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 border border-white/10 shadow-2xl shadow-black/40 flex items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-gold-500/50">
              <path
                d="M12 3v18M4 8l4-3 4 3M4 8l-2 6a3 3 0 006 0l-2-6zM16 8l4-3 4 3m-8 0l-2 6a3 3 0 006 0l-2-6z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-xl bg-cream-50 px-6 py-4 shadow-xl">
            <p className="font-serif text-lg text-navy-900">"Resposta rápida e conduta impecável."</p>
            <p className="mt-1 text-xs text-navy-700/70">— Cliente atendido em 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
