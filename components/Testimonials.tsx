const testimonials = [
  {
    name: 'Mariana Silva',
    role: 'Estudante de Psicologia',
    text: 'Os e-books da Nexora transformaram completamente minha rotina de estudos. A abordagem prática e os insights de produtividade me ajudaram a dobrar minha eficiência em menos de um mês.',
  },
  {
    name: 'Lucas Ferreira',
    role: 'Empreendedor Digital',
    text: 'O serviço de gestão de redes sociais trouxe clareza total para minha estratégia. Em três meses meu engajamento cresceu 180% e finalmente entendi como construir uma marca consistente.',
  },
  {
    name: 'Beatriz Costa',
    role: 'Designer & Criadora de Conteúdo',
    text: 'Os guias gratuitos da Nexora foram o ponto de partida que eu precisava. A qualidade é incrível — aprendi mais em uma semana do que em meses de pesquisa espalhada pela internet.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          O que dizem nossos{' '}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            leitores
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <div key={t.name}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-violet-500/30 transition-all">
            <div className="text-4xl text-violet-400 mb-4 font-serif">"</div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">{t.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
