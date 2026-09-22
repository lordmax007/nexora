import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4 block">
            Sobre a Nexora
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-snug">
            Aprendizado que transforma — e que se aplica amanhã
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            A Nexora nasceu da crença de que o conhecimento acessível é o motor do crescimento. Combinamos
            conteúdo educativo de alta qualidade com ferramentas práticas para que cada leitor saia não
            apenas inspirado, mas equipado para agir.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Seja para desenvolver habilidades pessoais, impulsionar a sua marca ou dominar novas técnicas
            de produtividade — a Nexora é o seu parceiro de aprendizado contínuo.
          </p>
          <Link href="/#services"
            className="inline-flex items-center gap-2 text-white font-medium border-b border-indigo-500/60 pb-0.5 hover:border-indigo-400 transition-colors text-sm">
            Conhecer os serviços →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { value: '50+', label: 'E-books publicados' },
            { value: '2 000+', label: 'Leitores ativos' },
            { value: '4.9', label: 'Avaliação média' },
            { value: '100%', label: 'Entrega digital imediata' },
          ].map(s => (
            <div key={s.label} className="bg-surface border border-white/[0.07] rounded-xl p-5">
              <p className="text-2xl font-bold text-white tabular-nums mb-1">{s.value}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
