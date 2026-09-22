import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-surface border border-white/[0.07] rounded-2xl px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-snug">
            Comece hoje a sua jornada
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
            Acesse e-books educativos e recursos que vão impulsionar o seu crescimento pessoal e profissional.
          </p>
          <Link href="/store"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors">
            Ver e-books disponíveis →
          </Link>
        </div>
      </div>
    </section>
  )
}
