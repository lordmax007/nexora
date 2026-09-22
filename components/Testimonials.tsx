const testimonials = [
  {
    name: 'Mariana Silva',
    role: 'Estudante de Psicologia',
    text: 'Os e-books da Nexora transformaram completamente a minha rotina de estudos. A abordagem prática ajudou-me a dobrar a eficiência em menos de um mês.',
  },
  {
    name: 'Lucas Ferreira',
    role: 'Empreendedor Digital',
    text: 'O serviço de gestão de redes sociais trouxe clareza total para a minha estratégia. Em três meses o engajamento cresceu 180% e finalmente tenho uma marca consistente.',
  },
  {
    name: 'Beatriz Costa',
    role: 'Designer & Criadora de Conteúdo',
    text: 'Os guias gratuitos foram o ponto de partida que precisava. Aprendi mais em uma semana do que em meses de pesquisa espalhada.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          O que dizem os nossos leitores
        </h2>
        <p className="text-gray-400 text-base">Feedback real de quem já passou pela Nexora.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map(t => (
          <div key={t.name}
            className="bg-surface border border-white/[0.07] rounded-xl p-7">
            {/* Stars */}
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#4F46E5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed text-sm mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-600/20 border border-indigo-600/30 flex items-center justify-center text-indigo-300 font-semibold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
