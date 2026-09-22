import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/store', label: 'Loja' },
  { href: '/free-resources', label: 'Recursos Grátis' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-semibold text-base">Nexora</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              E-books educativos para o crescimento contínuo em desenvolvimento pessoal, psicologia e tecnologia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gray-300 font-medium text-sm mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gray-300 font-medium text-sm mb-4">Redes Sociais</h4>
            <div className="flex gap-2">
              {[
                { label: 'Instagram', href: '#', initial: 'In' },
                { label: 'Twitter', href: '#', initial: 'Tw' },
                { label: 'LinkedIn', href: '#', initial: 'Li' },
                { label: 'YouTube', href: '#', initial: 'YT' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/15 transition-all text-xs font-medium">
                  {s.initial}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Nexora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
