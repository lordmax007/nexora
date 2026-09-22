import Link from 'next/link'

const BookIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

const ChartIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
)

const PencilIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
)

const cards = [
  {
    Icon: BookIcon,
    title: 'E-book Store',
    desc: 'E-books informativos sobre psicologia, técnicas de estudo, produtividade e estratégia digital.',
    cta: 'Ver loja',
    href: '/store',
  },
  {
    Icon: ChartIcon,
    title: 'Social Management',
    desc: 'Gestão profissional de redes sociais para aumentar a notoriedade da sua marca e envolver o público.',
    cta: 'Saber mais',
    href: '/#contact',
  },
  {
    Icon: DownloadIcon,
    title: 'Free Resources',
    desc: 'Guias, planilhas e ferramentas educativas gratuitas para o seu desenvolvimento pessoal contínuo.',
    cta: 'Download grátis',
    href: '/free-resources',
  },
  {
    Icon: PencilIcon,
    title: 'Insights Blog',
    desc: 'Artigos sobre crescimento pessoal, produtividade e estratégia digital.',
    cta: 'Ler artigos',
    href: '/blog',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Conhecimento & Serviço
        </h2>
        <p className="text-gray-400 max-w-2xl text-base leading-relaxed">
          Conteúdos educativos e soluções estratégicas para impulsionar o seu desenvolvimento pessoal,
          produtividade e alcance nas redes sociais.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(({ Icon, title, desc, cta, href }) => (
          <div key={title}
            className="bg-surface border border-white/[0.07] rounded-xl p-6 hover:border-white/15 transition-colors group">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center text-indigo-400 mb-5">
              <Icon />
            </div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>
            <Link href={href}
              className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors inline-flex items-center gap-1">
              {cta}
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
