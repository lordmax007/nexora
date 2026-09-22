import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexora — Eleve seu Conhecimento',
  description: 'Desbloqueie crescimento contínuo com e-books educativos acessíveis sobre desenvolvimento pessoal, psicologia, produtividade e tecnologia.',
  keywords: ['e-books', 'desenvolvimento pessoal', 'produtividade', 'psicologia', 'tecnologia'],
  authors: [{ name: 'Nexora' }],
  creator: 'Nexora',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://nexora.netlify.app'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Nexora',
    title: 'Nexora — Eleve seu Conhecimento',
    description: 'Desbloqueie crescimento contínuo com e-books educativos acessíveis.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Nexora' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora — Eleve seu Conhecimento',
    description: 'E-books educativos para desenvolvimento pessoal e profissional.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
