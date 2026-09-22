import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Glow background */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-700/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Plataforma de e-books educativos
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Eleve seu{' '}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            conhecimento
          </span>{' '}
          com a Nexora
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Desbloqueie crescimento contínuo com e-books educativos acessíveis. Explore recursos sobre
          desenvolvimento pessoal, psicologia, produtividade e tecnologia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/store"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-violet-900/50">
            Get started →
          </Link>
          <Link href="/free-resources"
            className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all">
            Recursos Gratuitos
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '50+', label: 'E-books' },
            { value: '2k+', label: 'Leitores' },
            { value: '4.9★', label: 'Avaliação' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Illustration: floating rocket */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-blue-900/40 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🚀</div>
                <div className="flex gap-3 justify-center">
                  <span className="text-3xl">📚</span>
                  <span className="text-3xl">💡</span>
                  <span className="text-3xl">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
