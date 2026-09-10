import { motion, useMotionValue, useSpring } from 'framer-motion'
import CountUp from './CountUp'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const STATS = [
  { n: 15, suffix: '+', label: 'anos de atuação' },
  { n: 400, suffix: '+', label: 'casos conduzidos' },
  { n: 4.9, suffix: '/5', label: 'avaliação de clientes', decimals: 1 },
]

export default function Hero() {
  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)
  const rotateX = useSpring(cardY, { stiffness: 150, damping: 18 })
  const rotateY = useSpring(cardX, { stiffness: 150, damping: 18 })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    cardX.set(px * 10)
    cardY.set(py * -10)
  }

  function handleMouseLeave() {
    cardX.set(0)
    cardY.set(0)
  }

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-navy-950 pt-40 pb-28 lg:pt-48 lg:pb-36"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 16, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy-600/40 blur-3xl"
        />
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center"
      >
        <div>
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-400 uppercase"
          >
            OAB/SP · Desde 2009
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-cream-50"
          >
            Assessoria jurídica que defende seus direitos com{' '}
            <span className="text-gold-400">clareza e resultado</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg text-cream-100/75 max-w-xl leading-relaxed"
          >
            Atendimento próximo, linguagem sem juridiquês e estratégia sob medida
            para pessoas físicas e empresas. Marque uma conversa inicial gratuita
            e entenda o seu caso.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.04, boxShadow: '0 10px 30px -8px rgba(200,164,93,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors"
            >
              Falar com um Advogado
            </motion.a>
            <motion.a
              href="#areas"
              whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-cream-50 transition-colors"
            >
              Ver Áreas de Atuação
            </motion.a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-white/10 pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-2xl text-gold-400">
                  <CountUp value={s.n} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </dt>
                <dd className="mt-1 text-xs text-cream-100/60">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          variants={item}
          className="relative hidden lg:block"
          style={{ perspective: 800 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 border border-white/10 shadow-2xl shadow-black/40 flex items-center justify-center"
          >
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold-500/50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M12 3v18M4 8l4-3 4 3M4 8l-2 6a3 3 0 006 0l-2-6zM16 8l4-3 4 3m-8 0l-2 6a3 3 0 006 0l-2-6z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 rounded-xl bg-cream-50 px-6 py-4 shadow-xl"
          >
            <p className="font-serif text-lg text-navy-900">"Resposta rápida e conduta impecável."</p>
            <p className="mt-1 text-xs text-navy-700/70">— Cliente atendido em 2025</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
