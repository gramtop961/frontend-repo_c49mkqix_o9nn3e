const projects = [
  {
    title: 'Immersive Product Launch',
    tag: '3D / WebGL',
    img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Brand Motion System',
    tag: 'Motion / Identity',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Interactive Microsite',
    tag: 'Web / Campaign',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1400&auto=format&fit=crop'
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="mt-3 text-slate-300/90 max-w-xl">A snapshot of recent projects blending design, code, and motion.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full border border-white/20 text-white px-5 py-2.5 font-medium hover:bg-white/10">Work with us</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-xs text-slate-300/80">{p.tag}</p>
                <h3 className="mt-1 text-white font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
