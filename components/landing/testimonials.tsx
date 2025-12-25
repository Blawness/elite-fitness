"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TESTIMONIALS = [
  {
    name: "Rini K.",
    text: "HBOT membantu pemulihan saya jauh lebih cepat. Energi terasa kembali dan tidur lebih nyenyak.",
  },
  {
    name: "Andi P.",
    text: "Fisioterapisnya sangat teliti. Nyeri lutut saya berkurang signifikan setelah beberapa sesi.",
  },
  {
    name: "Michelle S.",
    text: "Gym privatnya nyaman dan terarah. Program latihan membuat mobilitas saya meningkat pesat!",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-labelledby="testimonials-title" className="px-6 py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="testimonials-title" className="text-2xl md:text-3xl font-semibold">
          Apa Kata Klien Kami
        </h2>

        <div className="relative mt-8">
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 shadow-[0_8px_30px_rgba(0,0,0,0.2)] min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="text-white/90"
              >
                <p className="text-balance text-lg">{"“" + TESTIMONIALS[index].text + "”"}</p>
                <footer className="mt-4 text-sm text-white/70">— {TESTIMONIALS[index].name}</footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-white/40 transition-colors ${i === index ? "bg-white/80" : "bg-white/20 hover:bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
