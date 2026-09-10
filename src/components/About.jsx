import { motion } from 'framer-motion'
import Reveal from './Reveal'

const POINTS = [
  'Atendimento inicial sem custo, para entender seu caso antes de qualquer decisão.',
  'Comunicação direta com o advogado responsável — sem intermediários.',
  'Honorários claros, combinados antes do início de qualquer processo.',
  'Acompanhamento do processo em tempo real, sem enrolação.',
]

export default function About() {
  return (
    <section id="sobre" className="bg-navy-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal direction="right" className="order-2 lg:order-1 relative mt-6 lg:mt-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="aspect-square rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950 border border-white/10 overflow-hidden flex items-center justify-center"
          >
            <motion.svg
              width="96"
              height="96"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold-500/40"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.3" />
              <path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </motion.svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 rounded-xl bg-gold-500 px-4 py-2.5 sm:px-5 sm:py-3 shadow-xl"
          >
            <p className="text-xs font-semibold text-navy-950">Dra. Camila Martins</p>
            <p className="text-[11px] text-navy-950/70">OAB/SP 000.000</p>
          </motion.div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal direction="left">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Sobre o Escritório
            </span>
            <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-cream-50">
              Um escritório pensado para quem nunca precisou de um advogado antes
            </h2>
            <p className="mt-5 text-cream-100/70 leading-relaxed">
              Fundado em 2009, o Andrade &amp; Martins nasceu da ideia de que
              assessoria jurídica de qualidade não precisa ser distante nem
              complicada. Hoje reunimos uma equipe multidisciplinar para atender
              pessoas físicas e empresas em todo o estado.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {POINTS.map((p, i) => (
              <Reveal key={p} as="li" direction="left" delay={0.1 + i * 0.1} className="flex items-start gap-3">
                <svg
                  className="mt-1 shrink-0 text-gold-400"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-cream-100/80 leading-relaxed">{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
