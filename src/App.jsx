import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} nri vfx — All rights reserved.</p>
          <div className="text-slate-400 text-sm">Built with love, motion, and code.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
