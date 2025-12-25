"use client"

import { motion } from "framer-motion"
import { Wind, Dumbbell, Stethoscope } from "lucide-react"

const services = [
  {
    icon: Wind,
    title: "Hyperbaric Oxygen Therapy (HBOT)",
    desc: "Tingkatkan oksigenasi jaringan untuk pemulihan, fokus, dan energi yang optimal.",
  },
  {
    icon: Stethoscope,
    title: "Physiotherapy Treatments",
    desc: "Perawatan nyeri dan rehabilitasi gerak dengan pendekatan evidence-based.",
  },
  {
    icon: Dumbbell,
    title: "Private Training Gym",
    desc: "Latihan privat dengan program personal untuk kekuatan, mobilitas, dan performa.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="services-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-center"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={item}
              className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/40 via-white/10 to-white/20"
            >
              <div className="rounded-2xl h-full w-full bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 border border-white/20">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/80">{desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex text-sm text-white/90 hover:text-white underline underline-offset-4"
                >
                  Learn More
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
