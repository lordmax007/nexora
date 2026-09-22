import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-violet-900/30 to-blue-900/20 border border-white/10 rounded-3xl p-12 sm:p-16 relative overflow-hidden">
        {/* decorative blob */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-violet-600/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-3xl">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Sobre a Nexora
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Aprendizado que{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              transforma
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            A Nexora nasceu da crença de que o conhecimento acessível é o motor do crescimento. Combinamos
            conteúdo educativo de alta qualidade com ferramentas práticas para que cada leitor saia não
            apenas inspirado, mas equipado para agir.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Seja para desenvolver habilidades pessoais, impulsionar sua marca nas redes sociais ou dominar
            novas técnicas de produtividade — a Nexora é o seu parceiro de aprendizado contínuo. Porque
            crescer não é um destino, é uma prática diária.
          </p>
          <Link href="/#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 transition-all">
            Learn about us →
          </Link>
        </div>
      </div>
    </section>
  )
}
