import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-gradient-to-br from-violet-900/50 to-blue-900/30 border border-violet-500/30 rounded-3xl p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-violet-700/20 to-transparent" />
          <div className="relative">
            <span className="text-5xl mb-6 block">🚀</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Comece hoje a sua{' '}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                jornada
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              Acesse e-books educativos e recursos que vão impulsionar seu crescimento pessoal e profissional.
            </p>
            <Link href="/store"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-violet-900/60">
              Get started →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
