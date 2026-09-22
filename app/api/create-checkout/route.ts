import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { z } from 'zod'

const schema = z.object({ slug: z.string().min(1).max(100) })

// Allowlist of valid products (slug → Stripe price ID)
// Add your real Stripe Price IDs here after creating products in the Stripe dashboard
const PRODUCTS: Record<string, { priceId: string; name: string }> = {
  'maestria-produtividade': { priceId: 'price_placeholder_produtividade', name: 'Maestria em Produtividade' },
  'psicologia-influencia': { priceId: 'price_placeholder_psicologia', name: 'Psicologia da Influência' },
  'marca-digital-30-dias': { priceId: 'price_placeholder_marca', name: 'Marca Digital em 30 Dias' },
  'habitos-atomicos-pratica': { priceId: 'price_placeholder_habitos', name: 'Hábitos na Prática' },
  'inteligencia-emocional-lideranca': { priceId: 'price_placeholder_ie', name: 'IE para Líderes' },
  'escrita-digital-criativa': { priceId: 'price_placeholder_escrita', name: 'Escrita Digital Criativa' },
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { slug } = schema.parse(body)

    const product = PRODUCTS[slug]
    if (!product) {
      return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: product.priceId, quantity: 1 }],
      success_url: `${baseUrl}/obrigado?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/store/${slug}`,
      metadata: { slug },
      payment_intent_data: { metadata: { slug } },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
    }
    // Generic error — no internal details exposed
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
