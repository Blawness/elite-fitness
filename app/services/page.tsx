export default function ServicesPage() {
  return (
    <main className="min-h-dvh relative text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-br from-sky-300 via-sky-500 to-indigo-900"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.15),transparent_60%)]"
      />
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">Our Services</h1>
        <p className="mt-3 text-white/80">Personalized wellness programs designed to help you feel your best.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <h2 className="font-medium">Massage Therapy</h2>
            <p className="text-white/80 text-sm mt-2">Relieve tension and restore balance.</p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <h2 className="font-medium">Nutrition Coaching</h2>
            <p className="text-white/80 text-sm mt-2">Build sustainable, healthy habits.</p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <h2 className="font-medium">Mindfulness Sessions</h2>
            <p className="text-white/80 text-sm mt-2">Calm your mind and improve focus.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
