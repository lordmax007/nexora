import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(
  _req: NextRequest,
  { params }: { params: { token: string } }
) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const { token } = params

  // Validate token length to avoid DB query with garbage input
  if (!/^[a-f0-9]{64}$/.test(token)) {
    return NextResponse.json({ error: 'Token inválido' }, { status: 400 })
  }

  const { data: order } = await supabase
    .from('orders')
    .select('product_slug, download_expires_at, download_used')
    .eq('download_token', token)
    .eq('status', 'paid')
    .single()

  if (!order) return NextResponse.json({ error: 'Token inválido' }, { status: 400 })
  if (order.download_used) return NextResponse.json({ error: 'Link já utilizado' }, { status: 410 })
  if (new Date(order.download_expires_at) < new Date()) {
    return NextResponse.json({ error: 'Link expirado' }, { status: 410 })
  }

  // Mark token as used
  await supabase.from('orders').update({ download_used: true }).eq('download_token', token)

  // Generate a short-lived signed URL from Supabase Storage
  const { data } = await supabase.storage
    .from('ebooks') // private bucket
    .createSignedUrl(`${order.product_slug}.pdf`, 60) // 60 seconds to start download

  if (!data?.signedUrl) {
    return NextResponse.json({ error: 'Arquivo não disponível' }, { status: 500 })
  }

  return NextResponse.redirect(data.signedUrl)
}
