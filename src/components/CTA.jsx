export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-blue-600 to-cyan-500 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_100%,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Have an idea? Let’s make it move.</h2>
        <p className="mt-3 text-blue-50/90">Tell us about your project and timelines — we’ll come back with a plan in 24 hours.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-2xl mx-auto">
          <input required type="email" placeholder="your@email.com" className="w-full rounded-full px-5 py-3.5 text-slate-900 placeholder:text-slate-500 outline-none" />
          <button className="rounded-full bg-slate-900 text-white px-6 py-3.5 font-semibold hover:bg-slate-800">Get proposal</button>
        </form>
        <p className="mt-4 text-sm text-blue-50/80">Or email us: hello@nrivfx.com</p>
      </div>
    </section>
  )
}
