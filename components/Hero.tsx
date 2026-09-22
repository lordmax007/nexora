import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      {/* Subtle top glow — very restrained */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Faint grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium tracking-wide uppercase mb-8">
          Plataforma de e-books educativos
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Eleve seu conhecimento<br />
          <span className="text-indigo-400">com a Nexora</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          E-books educativos sobre desenvolvimento pessoal, psicologia, produtividade e tecnologia.
          Conhecimento prático, entrega imediata.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/store"
            className="px-7 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-500 transition-colors">
            Ver e-books →
          </Link>
          <Link href="/free-resources"
            className="px-7 py-3.5 rounded-lg border border-white/10 text-gray-300 font-semibold text-base hover:border-white/20 hover:text-white transition-colors">
            Recursos gratuitos
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 flex justify-center gap-12">
          {[
            { value: '50+', label: 'E-books' },
            { value: '2 000+', label: 'Leitores' },
            { value: '4.9 / 5', label: 'Avaliação média' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-white tabular-nums">{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
