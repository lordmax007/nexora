'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/store', label: 'E-book Store' },
  { href: '/#services', label: 'Services' },
  { href: '/free-resources', label: 'Free Resources' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Nexora</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/store"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
              Get started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-300">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 space-y-2 border-t border-white/10">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block px-2 py-2 text-gray-300 hover:text-white text-sm font-medium">
                {l.label}
              </Link>
            ))}
            <Link href="/store" onClick={() => setOpen(false)}
              className="block mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white text-sm font-semibold text-center">
              Get started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
