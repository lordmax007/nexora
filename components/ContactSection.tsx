'use client'
import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'error')
      if (res.ok) setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Entre em{' '}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Contato
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1.5">Nome</label>
            <input
              type="text" required maxLength={100}
              value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1.5">E-mail</label>
            <input
              type="email" required maxLength={254}
              value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1.5">Mensagem</label>
            <textarea
              required maxLength={2000} rows={5}
              value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <button type="submit" disabled={status === 'sending'}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50">
            {status === 'sending' ? 'Enviando...' : 'Enviar formulário'}
          </button>
          {status === 'ok' && <p className="text-green-400 text-sm text-center">Mensagem enviada! Em breve entraremos em contato.</p>}
          {status === 'error' && <p className="text-red-400 text-sm text-center">Algo correu mal. Tente novamente.</p>}
        </form>

        {/* Contact info */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-semibold text-xl mb-6">Nexora</h3>
            <div className="space-y-4">
              {[
                { icon: '📍', label: 'Localização', value: 'Lisboa, Portugal' },
                { icon: '✉️', label: 'E-mail', value: 'hello@nexora.com' },
                { icon: '📞', label: 'Telefone', value: '+351 900 000 000' },
                { icon: '🕒', label: 'Horário', value: 'Seg–Sex, 9h–18h' },
              ].map(info => (
                <div key={info.label} className="flex items-start gap-3">
                  <span className="text-xl">{info.icon}</span>
                  <div>
                    <p className="text-gray-400 text-xs">{info.label}</p>
                    <p className="text-white text-sm font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-900/30 to-blue-900/20 border border-violet-500/20 rounded-2xl p-6 text-center">
            <p className="text-violet-300 text-sm font-medium mb-1">Resposta rápida</p>
            <p className="text-gray-400 text-xs">Respondemos em até 24 horas nos dias úteis.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
