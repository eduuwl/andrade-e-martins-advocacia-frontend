import { motion } from 'framer-motion'
import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    name: 'Renata F.',
    role: 'Caso Trabalhista',
    quote:
      'Fui muito bem orientada desde a primeira conversa. Expliquei uma vez só e já entenderam tudo.',
  },
  {
    name: 'Marcos P.',
    role: 'Direito Empresarial',
    quote:
      'Time atento aos prazos e sempre disponível pra tirar dúvida. Recomendo pra qualquer empresário.',
  },
  {
    name: 'Juliana A.',
    role: 'Direito de Família',
    quote:
      'Processo delicado conduzido com muito respeito e transparência sobre cada etapa.',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
            Depoimentos
          </span>
          <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-navy-900">
            O que dizem os clientes atendidos
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.figure
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="h-full rounded-2xl bg-white border border-navy-900/10 p-7 flex flex-col"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold-500/60">
                  <path
                    d="M7 10c-1.7 0-3 1.3-3 3v6h6v-6H7c0-1.7 1.3-3 3-3V7c-3.3 0-6 2.7-6 6zm10 0c-1.7 0-3 1.3-3 3v6h6v-6h-3c0-1.7 1.3-3 3-3V7c-3.3 0-6 2.7-6 6z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="mt-4 text-sm text-navy-900/75 leading-relaxed grow">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-navy-900/10">
                  <p className="text-sm font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs text-navy-900/50">{t.role}</p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-navy-900/40">
          * Depoimentos ilustrativos para fins de demonstração deste protótipo.
        </p>
      </div>
    </section>
  )
}
