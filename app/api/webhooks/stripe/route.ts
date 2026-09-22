import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { sendPurchaseEmail } from '@/lib/email'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Webhook inválido' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    if (session.payment_status !== 'paid') return NextResponse.json({ ok: true })

    const slug = session.metadata?.slug
    const email = session.customer_details?.email
    const name = session.customer_details?.name || 'Cliente'

    if (!slug || !email) return NextResponse.json({ ok: true })

    // Generate a single-use download token valid for 24h
    const token = crypto.randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()

    await supabase.from('orders').insert({
      product_slug: slug,
      customer_email: email,
      customer_name: name,
      stripe_session_id: session.id,
      download_token: token,
      download_expires_at: expiresAt,
      status: 'paid',
    })

    await sendPurchaseEmail({ to: email, name, slug, token })
  }

  return NextResponse.json({ ok: true })
}
