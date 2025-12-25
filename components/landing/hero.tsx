"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex items-center justify-center px-6 py-24 md:py-28">
      {/* Glass container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl w-full mx-auto rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.2)] p-8 md:p-12 text-center"
      >
        <h2 id="hero-title" className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
          Body Soul Wellness Center
        </h2>
        <p className="mt-4 text-white/80 text-pretty md:text-lg">{"“Terapi Oksigen, Gerakan, dan Pemulihan Total”"}</p>

        <div className="mt-8 flex items-center justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 text-white px-6 py-3 border border-white/30 transition-colors"
          >
            <span className="font-medium">Konsultasi Gratis Sekarang</span>
          </motion.a>
        </div>

        {/* Soft gradient ring accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1 -z-10 rounded-[1.75rem] bg-gradient-to-r from-white/20 via-transparent to-white/10 blur-2xl"
        />
      </motion.div>
    </section>
  )
}
