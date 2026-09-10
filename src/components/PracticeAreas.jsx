const AREAS = [
  {
    title: 'Direito Civil',
    desc: 'Contratos, indenizações, responsabilidade civil e disputas patrimoniais.',
    icon: 'M4 21h16M6 21V9l6-5 6 5v12M9 21v-6h6v6',
  },
  {
    title: 'Direito Trabalhista',
    desc: 'Rescisões, verbas, assédio e ações trabalhistas para empregados e empresas.',
    icon: 'M3 7h18M3 7l2 13h14l2-13M8 7V4h8v3',
  },
  {
    title: 'Direito de Família',
    desc: 'Divórcio, pensão alimentícia, guarda de filhos e inventários.',
    icon: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6',
  },
  {
    title: 'Direito Empresarial',
    desc: 'Constituição de empresas, contratos societários e compliance.',
    icon: 'M4 21V9l8-5 8 5v12M9 21v-5h6v5M4 21h16',
  },
  {
    title: 'Direito Previdenciário',
    desc: 'Aposentadorias, revisões de benefício e auxílios junto ao INSS.',
    icon: 'M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z',
  },
  {
    title: 'Direito Criminal',
    desc: 'Defesa em inquéritos, processos criminais e audiências.',
    icon: 'M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z',
  },
]

export default function PracticeAreas() {
  return (
    <section id="areas" className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
            Áreas de Atuação
          </span>
          <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-navy-900">
            Soluções jurídicas completas, do primeiro contato à resolução
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((a) => (
            <div
              key={a.title}
              className="group rounded-2xl border border-navy-900/10 bg-white p-7 transition-all hover:border-gold-500/50 hover:shadow-lg hover:shadow-navy-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d={a.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 font-serif text-lg text-navy-900">{a.title}</h3>
              <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
