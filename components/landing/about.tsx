"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section aria-labelledby="about-title" className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        >
          {/* Placeholder image with fixed query for consistency */}
          <img
            src="/clinic-team-photo-in-clean-minimal-interior.jpg"
            alt="Tim klinik mendampingi pasien dalam suasana klinik yang bersih dan modern"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        >
          <h2 id="about-title" className="text-2xl md:text-3xl font-semibold">
            Tentang Kami
          </h2>
          <p className="mt-3 text-white/80">
            Kami adalah fasilitas wellness terpadu yang memadukan Hyperbaric Oxygen Therapy (HBOT), fisioterapi, dan
            latihan privat. Fokus kami adalah pemulihan menyeluruh—tubuh dan jiwa—dengan pendekatan modern, aman, dan
            personal.
          </p>
          <p className="mt-3 text-white/80">
            Tim profesional kami membantu Anda bergerak bebas kembali, meningkatkan performa, dan menjaga kesehatan
            jangka panjang.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
