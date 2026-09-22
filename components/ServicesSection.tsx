import Link from 'next/link'

const cards = [
  {
    icon: '📚',
    title: 'E-book Store',
    desc: 'Explore e-books informativos sobre psicologia, técnicas de estudo, produtividade e estratégia digital.',
    cta: 'Browse store',
    href: '/store',
  },
  {
    icon: '📱',
    title: 'Social Management',
    desc: 'Gestão profissional de redes sociais personalizada para aumentar a notoriedade da sua marca e envolver o público.',
    cta: 'Our services',
    href: '/#contact',
  },
  {
    icon: '🎁',
    title: 'Free Resources',
    desc: 'Acesse gratuitamente guias, folhas de cálculo e ferramentas educativas para o seu desenvolvimento pessoal contínuo.',
    cta: 'Download free',
    href: '/free-resources',
  },
  {
    icon: '✍️',
    title: 'Insights Blog',
    desc: 'Leia artigos sobre crescimento pessoal, produtividade e estratégia digital.',
    cta: 'Read articles',
    href: '/blog',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Conhecimento &{' '}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Serviço
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Descubra nossa coleção de conteúdos educativos e soluções estratégicas personalizadas para
          impulsionar seu desenvolvimento pessoal, sua produtividade e seu alcance nas redes sociais.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(c => (
          <div key={c.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-violet-500/40 transition-all hover:bg-white/8 group">
            <div className="text-4xl mb-4">{c.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{c.desc}</p>
            <Link href={c.href}
              className="inline-flex items-center gap-1 text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors group-hover:gap-2">
              {c.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
