import Hero from "@/components/landing/hero"
import Services from "@/components/landing/services"
import About from "@/components/landing/about"
import Testimonials from "@/components/landing/testimonials"
import Contact from "@/components/landing/contact"

export default function Page() {
  return (
    <main className="min-h-dvh relative text-white">
      {/* Background gradient (sky blue → navy) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-br from-sky-300 via-sky-500 to-indigo-900"
      />
      {/* Subtle noise/overlay for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.15),transparent_60%)]"
      />
      {/* Content */}
      <header className="sr-only">
        <h1>Body Soul Wellness Center</h1>
      </header>

      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <footer className="py-8 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Body Soul Wellness Center · All rights reserved.
      </footer>
    </main>
  )
}
