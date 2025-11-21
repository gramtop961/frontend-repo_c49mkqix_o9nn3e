import { Sparkles, Layers, Rocket, Palette } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: '3D & Motion',
    desc: 'High-impact 3D animation, VFX, and motion design for brands and products.'
  },
  {
    icon: Layers,
    title: 'Web Experiences',
    desc: 'Interactive websites that blend performance, accessibility, and creative flair.'
  },
  {
    icon: Palette,
    title: 'Brand Design',
    desc: 'Visual identity systems, creative direction, and storytelling for modern teams.'
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    desc: 'Campaign assets, content systems, and continuous optimization to scale impact.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-300/90">End-to-end creative across 3D, web, and brand. Built with precision. Shipped with style.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
