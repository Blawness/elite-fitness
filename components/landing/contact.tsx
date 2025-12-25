"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Instagram } from "lucide-react"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    // Debug-only: in real app, send to API or service
    console.log("[v0] Contact form submitted:", {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    })
    setStatus("sent")
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        >
          <h2 id="contact-title" className="text-2xl md:text-3xl font-semibold">
            Hubungi Kami
          </h2>
          <p className="mt-2 text-white/80">Ada pertanyaan? Kirim pesan atau langsung chat via WhatsApp.</p>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <label className="grid gap-2">
              <span className="text-sm text-white/80">Name</span>
              <input
                required
                name="name"
                type="text"
                placeholder="Nama lengkap"
                className="rounded-xl bg-white/15 border border-white/25 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/80">Email</span>
              <input
                required
                name="email"
                type="email"
                placeholder="email@domain.com"
                className="rounded-xl bg-white/15 border border-white/25 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-white/80">Message</span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Ceritakan kebutuhan Anda…"
                className="rounded-xl bg-white/15 border border-white/25 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 px-5 py-2.5 border border-white/30"
              >
                {status === "sent" ? "Terkirim ✓" : "Kirim Pesan"}
              </motion.button>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 border border-white/25"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 border border-white/25"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>Instagram</span>
              </a>
            </div>
          </form>
        </motion.div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.2)] min-h-[360px]"
        >
          <iframe
            title="Lokasi Body Soul Wellness Center"
            className="w-full h-full min-h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={"https://www.google.com/maps?q=" + encodeURIComponent("Body Soul Wellness Center") + "&output=embed"}
          />
        </motion.div>
      </div>
    </section>
  )
}
