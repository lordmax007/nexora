import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const resources = [
  {
    title: 'Guia de Produtividade Semanal',
    desc: 'Template de planejamento semanal com blocos de foco e revisão diária.',
    type: 'PDF',
    icon: '📋',
    href: '#',
  },
  {
    title: 'Planilha de Hábitos',
    desc: 'Folha de cálculo para rastrear seus hábitos diários e medir progresso.',
    type: 'XLSX',
    icon: '📊',
    href: '#',
  },
  {
    title: 'Checklist de Marca Digital',
    desc: '50 pontos essenciais para construir e auditar sua presença digital.',
    type: 'PDF',
    icon: '✅',
    href: '#',
  },
  {
    title: 'Guia de Psicologia do Consumidor',
    desc: 'Introdução aos principais vieses cognitivos aplicados ao marketing.',
    type: 'PDF',
    icon: '🧠',
    href: '#',
  },
]

export default function FreeResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Recursos{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Gratuitos
            </span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Ferramentas educativas gratuitas para o seu desenvolvimento pessoal contínuo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resources.map(r => (
            <div key={r.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{r.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold">{r.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/20">
                      {r.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{r.desc}</p>
                  <a href={r.href}
                    className="inline-flex items-center gap-1 text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors">
                    Download gratuito →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Quer mais conteúdo aprofundado?</p>
          <Link href="/store"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity">
            Ver e-books completos →
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
