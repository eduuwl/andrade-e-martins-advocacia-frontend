import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="bg-navy-950 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
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
            <div className="flex items-center gap-3 text-cream-100/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gold-400">
                📍
              </span>
              Av. Paulista, 1000 — São Paulo, SP
            </div>
            <div className="flex items-center gap-3 text-cream-100/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gold-400">
                ✉️
              </span>
              contato@andrademartins.adv.br
            </div>
            <div className="flex items-center gap-3 text-cream-100/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gold-400">
                📞
              </span>
              (11) 4000-0000
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm"
        >
          {sent ? (
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center gap-3">
              <span className="text-4xl">✅</span>
              <p className="font-serif text-xl text-cream-50">Mensagem enviada!</p>
              <p className="text-sm text-cream-100/60 max-w-xs">
                Em um site real, isso chegaria por e-mail ou WhatsApp ao escritório.
                Aqui é só uma demonstração do fluxo.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nome" name="nome" placeholder="Seu nome completo" />
                <Field label="Telefone" name="telefone" placeholder="(11) 90000-0000" />
              </div>
              <Field label="E-mail" name="email" type="email" placeholder="voce@email.com" />
              <div>
                <label className="text-xs font-medium text-cream-100/70">
                  Área de interesse
                </label>
                <select className="mt-2 w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-sm text-cream-50 outline-none focus:border-gold-500">
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
                  className="mt-2 w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-sm text-cream-50 outline-none placeholder:text-cream-100/30 focus:border-gold-500"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 hover:bg-gold-400 transition-colors"
              >
                Enviar Mensagem
              </button>
            </div>
          )}
        </form>
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
        className="mt-2 w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-sm text-cream-50 outline-none placeholder:text-cream-100/30 focus:border-gold-500"
      />
    </div>
  )
}
