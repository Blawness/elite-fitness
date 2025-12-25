export default function AboutPage() {
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
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">About Body Soul Wellness</h1>
        <p className="mt-4 text-white/80">
          We combine holistic practices with modern techniques to support your health journey.
        </p>
        <div className="mt-8 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur">
          <p className="text-white/80">
            Our team believes in whole-person care—mind, body, and soul—through compassionate guidance and
            evidence-informed methods.
          </p>
        </div>
      </section>
    </main>
  )
}
