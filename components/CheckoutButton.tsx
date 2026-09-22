'use client'
import { useState } from 'react'

interface Props {
  slug: string
  price: number
  title: string
}

export default function CheckoutButton({ slug, price, title }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleBuy() {
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      if (!res.ok) throw new Error('checkout failed')
      const { url } = await res.json()
      window.location.href = url
    } catch {
      alert('Não foi possível iniciar o checkout. Tente novamente.')
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="w-full py-4 rounded-lg bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-500 transition-colors disabled:opacity-50"
    >
      {loading ? 'Redirecionando...' : `Comprar por R$ ${price.toFixed(2).replace('.', ',')}`}
    </button>
  )
}
