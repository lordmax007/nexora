import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email().max(254).trim(),
  message: z.string().min(1).max(2000).trim(),
})

// ponytail: naive rate-limit by IP, resets on cold start. Use Upstash Redis if traffic scales.
const rateMap = new Map<string, { count: number; reset: number }>()

function checkRate(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || entry.reset < now) {
    rateMap.set(ip, { count: 1, reset: now + 60_000 })
    return true
  }
  if (entry.count >= 5) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (!checkRate(ip)) {
    return NextResponse.json({ error: 'Muitas requisições' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
  }

  const { name, email, message } = result.data

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@nexora.com',
      to: 'hello@nexora.com',
      subject: `[Nexora] Mensagem de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erro ao enviar' }, { status: 500 })
  }
}
