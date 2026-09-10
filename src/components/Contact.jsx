import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="bg-navy-950 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <Reveal direction="right">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Contato
          </span>
          <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-cream-50">
            Vamos conversar sobre o seu caso
          </h2>
          <p className="mt-5 text-cream-100/70 leading-relaxed max-w-md">
            Preencha o formulário ou fale direto pelo WhatsApp. A primeira
            conversa é sem compromisso.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            {[
              ['📍', 'Av. Paulista, 1000 — São Paulo, SP'],
              ['✉️', 'contato@andrademartins.adv.br'],
              ['📞', '(11) 4000-0000'],
            ].map(([icon, text], i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 text-cream-100/80"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gold-400">
                  {icon}
                </span>
                {text}
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[280px] flex-col items-center justify-center text-center gap-3"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
                    className="text-4xl"
                  >
                    ✅
                  </motion.span>
                  <p className="font-serif text-xl text-cream-50">Mensagem enviada!</p>
                  <p className="text-sm text-cream-100/60 max-w-xs">
                    Em um site real, isso chegaria por e-mail ou WhatsApp ao escritório.
                    Aqui é só uma demonstração do fluxo.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Nome" name="nome" placeholder="Seu nome completo" />
                    <Field label="Telefone" name="telefone" placeholder="(11) 90000-0000" />
                  </div>
                  <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" />
                  <div>
                    <label className="text-xs font-medium text-cream-100/70">
                      Área de interesse
                    </label>
                    <select className="mt-2 w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-sm text-cream-50 outline-none focus:border-gold-500 transition-colors">
                      <option>Direito Civil</option>
                      <option>Direito Trabalhista</option>
                      <option>Direito de Família</option>
                      <option>Direito Empresarial</option>
                      <option>Direito Previdenciário</option>
                      <option>Direito Criminal</option>
                      <option>Outro assunto</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-cream-100/70">
                      Conte um pouco do seu caso
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Descreva brevemente sua situação..."
                      className="mt-2 w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-sm text-cream-50 outline-none placeholder:text-cream-100/30 focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 hover:bg-gold-400 transition-colors"
                  >
                    Enviar Mensagem
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium text-cream-100/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-sm text-cream-50 outline-none placeholder:text-cream-100/30 focus:border-gold-500 transition-colors"
      />
    </div>
  )
}
