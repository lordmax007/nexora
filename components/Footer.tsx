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
    <footer className="border-t border-white/10 bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-bold text-xl">Nexora</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              E-books educativos para o seu crescimento contínuo em desenvolvimento pessoal, psicologia e tecnologia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {[
                { label: 'Instagram', icon: '📸', href: '#' },
                { label: 'Twitter/X', icon: '🐦', href: '#' },
                { label: 'LinkedIn', icon: '💼', href: '#' },
                { label: 'YouTube', icon: '▶️', href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-violet-500/40 transition-all text-lg">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nexora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
