import { Resend } from 'resend'

export async function sendPurchaseEmail({
  to,
  name,
  slug,
  token,
}: {
  to: string
  name: string
  slug: string
  token: string
}) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://nexora.netlify.app'
  const downloadUrl = `${baseUrl}/api/download/${token}`

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'noreply@nexora.com',
    to,
    subject: '🚀 Seu e-book está pronto — Nexora',
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; background: #0B0718; color: white; padding: 40px; border-radius: 16px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #7C3AED, #3B82F6); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 12px;">
            <span style="color: white; font-weight: bold; font-size: 20px;">N</span>
          </div>
          <h1 style="color: white; font-size: 24px; margin: 0;">Nexora</h1>
        </div>

        <h2 style="color: white; font-size: 22px; margin-bottom: 8px;">Obrigado pela sua compra, ${name}! 🎉</h2>
        <p style="color: #9CA3AF; line-height: 1.6; margin-bottom: 24px;">
          Seu e-book já está pronto para download. Clique no botão abaixo para fazer o download.
          <br><strong style="color: #C4B5FD;">Este link expira em 24 horas.</strong>
        </p>

        <div style="text-align: center; margin: 32px 0;">
          <a href="${downloadUrl}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #7C3AED, #3B82F6); color: white; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 16px;">
            Baixar e-book →
          </a>
        </div>

        <p style="color: #6B7280; font-size: 13px; text-align: center;">
          Se tiver algum problema, responda este e-mail ou contacte hello@nexora.com
        </p>
      </div>
    `,
  })
}
