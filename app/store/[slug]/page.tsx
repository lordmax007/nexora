import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CheckoutButton from '@/components/CheckoutButton'
import { notFound } from 'next/navigation'

// Same sample data — replace with Supabase query
const PRODUCTS: Record<string, {
  title: string; description: string; price: number; coverUrl: string; category: string;
  longDescription: string; preview: string;
}> = {
  'maestria-produtividade': {
    title: 'Maestria em Produtividade',
    description: 'Técnicas avançadas de gestão de tempo e foco para atingir mais em menos horas.',
    longDescription: `Este e-book reúne as melhores técnicas de produtividade validadas pela neurociência e pela psicologia cognitiva. Aprenda a estruturar sua rotina, eliminar distrações e criar sistemas de trabalho profundo que multiplicam seus resultados.

Você vai descobrir como implementar o método Pomodoro avançado, criar blocos de foco intenso, gerir energia (não só tempo), e construir um sistema de revisão semanal que mantém você sempre alinhado com seus objetivos.`,
    price: 29.90,
    coverUrl: '',
    category: 'Produtividade',
    preview: `Capítulo 1 — O Mito da Multitarefa

Ao contrário do que muitos acreditam, o cérebro humano não é capaz de executar duas tarefas cognitivas simultaneamente. O que chamamos de "multitarefa" é, na verdade, uma alternância rápida entre tarefas — e cada transição tem um custo.

Estudos da Universidade de Michigan mostram que alternar entre tarefas pode reduzir a produtividade em até 40%. Neste capítulo, vamos entender por que isso acontece e, mais importante, o que fazer em vez disso.`,
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS[params.slug]
  if (!product) notFound()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Cover */}
          <div className="bg-gradient-to-br from-violet-900/50 to-blue-900/40 rounded-3xl h-80 md:h-[480px] flex items-center justify-center border border-white/10">
            <span className="text-[120px]">📚</span>
          </div>

          {/* Info */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-medium mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{product.title}</h1>
            <p className="text-gray-300 leading-relaxed mb-6">{product.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-gray-400 text-sm ml-2">entrega digital imediata</span>
            </div>

            <CheckoutButton slug={params.slug} price={product.price} title={product.title} />

            <div className="mt-6 flex gap-4 text-sm text-gray-400">
              <span>✅ PDF + EPUB</span>
              <span>✅ Acesso vitalício</span>
              <span>✅ Garantia 7 dias</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Sobre o e-book</h2>
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">{product.longDescription}</div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Prévia — Primeiro Capítulo</h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line line-clamp-[10]">
                {product.preview}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <span className="text-gray-500 text-xs">Compre para acessar o conteúdo completo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ratings placeholder */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Avaliações</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-gray-400">Seja o primeiro a avaliar este e-book após a compra.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
