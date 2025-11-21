import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-100/80">
            Creative Agency • Tech • Interactive
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            nri vfx
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200/90">
            We craft playful, modern experiences across 3D, motion, and web. From concept to production, we turn ideas into immersive stories.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex rounded-full bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-blue-50 transition-colors">
              Start a Project
            </a>
            <a href="#work" className="inline-flex rounded-full border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
              See Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900" />
    </section>
  )
}
