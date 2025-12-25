export default function TestimonialsPage() {
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
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">What Clients Say</h1>
        <ul className="mt-8 grid gap-6">
          <li className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <blockquote className="text-white/90">“I feel renewed—both physically and mentally.”</blockquote>
            <cite className="block mt-3 text-white/70 text-sm">— A. Patel</cite>
          </li>
          <li className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <blockquote className="text-white/90">“Thoughtful guidance and real, lasting results.”</blockquote>
            <cite className="block mt-3 text-white/70 text-sm">— J. Nguyen</cite>
          </li>
        </ul>
      </section>
    </main>
  )
}
