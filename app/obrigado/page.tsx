import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 text-center">
        <div className="max-w-md">
          <div className="text-7xl mb-6">🎉</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Compra confirmada!</h1>
          <p className="text-gray-300 leading-relaxed mb-6">
            Obrigado pela sua compra! Acabámos de enviar um e-mail com o link de download do seu e-book.
            Verifique a caixa de entrada (e a pasta spam se necessário).
          </p>
          <p className="text-violet-300 text-sm mb-8">
            O link de download é válido por 24 horas.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/store"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity">
              Ver mais e-books
            </Link>
            <Link href="/"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
