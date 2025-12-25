export default function ContactPage() {
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
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">Contact Us</h1>
        <p className="mt-3 text-white/80">We’d love to hear from you. Send us a message anytime.</p>
        <form className="mt-8 grid gap-4 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur">
          <label className="grid gap-2">
            <span className="text-sm text-white/80">Name</span>
            <input
              className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-white/80">Email</span>
            <input
              type="email"
              className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-white/80">Message</span>
            <textarea
              rows={5}
              className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60"
              placeholder="How can we help?"
            />
          </label>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-white/90 px-4 py-2 text-indigo-900 font-medium hover:bg-white"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  )
}
