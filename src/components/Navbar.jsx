import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
          <span className="font-semibold text-white tracking-tight text-lg">nri vfx</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 font-medium hover:bg-blue-50 transition-colors">
            Start a Project
          </a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/70 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200/90 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 font-medium">
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
