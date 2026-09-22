import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EbookCard from '@/components/EbookCard'

// Sample products — replace with Supabase query when DB is set up
const SAMPLE_PRODUCTS = [
  {
    slug: 'maestria-produtividade',
    title: 'Maestria em Produtividade',
    description: 'Técnicas avançadas de gestão de tempo e foco para atingir mais em menos horas.',
    price: 29.90,
    coverUrl: '',
    category: 'Produtividade',
  },
  {
    slug: 'psicologia-influencia',
    title: 'Psicologia da Influência',
    description: 'Os princípios psicológicos por trás da persuasão e como usá-los de forma ética.',
    price: 34.90,
    coverUrl: '',
    category: 'Psicologia',
  },
  {
    slug: 'marca-digital-30-dias',
    title: 'Marca Digital em 30 Dias',
    description: 'Um plano passo a passo para construir presença digital sólida e autêntica.',
    price: 39.90,
    coverUrl: '',
    category: 'Marketing',
  },
  {
    slug: 'habitos-atomicos-pratica',
    title: 'Hábitos na Prática',
    description: 'Como criar sistemas de hábitos que funcionam no longo prazo com ciência comportamental.',
    price: 24.90,
    coverUrl: '',
    category: 'Desenvolvimento Pessoal',
  },
  {
    slug: 'inteligencia-emocional-lideranca',
    title: 'IE para Líderes',
    description: 'Desenvolva inteligência emocional para liderar equipes com mais empatia e resultado.',
    price: 44.90,
    coverUrl: '',
    category: 'Liderança',
  },
  {
    slug: 'escrita-digital-criativa',
    title: 'Escrita Digital Criativa',
    description: 'Domine a arte de escrever para o digital — posts, e-mails e conteúdo que engaja.',
    price: 27.90,
    coverUrl: '',
    category: 'Comunicação',
  },
]

export default function StorePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            E-book{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Store
            </span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Conhecimento prático para quem quer crescer. Todos os e-books com entrega digital imediata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PRODUCTS.map(p => (
            <EbookCard key={p.slug} {...p} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
