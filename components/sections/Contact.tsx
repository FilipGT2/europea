"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-DEFAULT mb-5">Contact</p>
            <h2 className="font-display text-display-md text-navy leading-tight mb-8">
              We&apos;re in Malmö.
            </h2>
            <address className="not-italic font-sans text-slate-700 leading-loose text-sm mb-6">
              <p className="text-navy font-medium mb-1">Europea i Malmö AB</p>
              <p>Amiralsgatan 20, Plan 3</p>
              <p>211 55 Malmö, Sweden</p>
              <p className="mt-3">
                <a href="tel:+46406614180" className="hover:text-navy transition-colors underline underline-offset-2">
                  +46 (0)40 661 41 80
                </a>
              </p>
              <p>
                <a href="mailto:mail@tmeeting.se" className="hover:text-navy transition-colors underline underline-offset-2">
                  mail@tmeeting.se
                </a>
              </p>
            </address>
            <p className="font-sans text-slate-600 text-xs mb-8">Org. 556464-0323</p>

            <div className="flex flex-col gap-3 mb-8">
              <a
                href="https://tmeeting.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 rounded-lg px-4 py-2.5 font-sans text-xs text-navy hover:border-blue-DEFAULT hover:bg-blue-100 transition-all duration-200 w-fit min-h-[44px]"
              >
                <span aria-hidden="true">→</span> T-Meeting Global AB · tmeeting.se
              </a>
              <a
                href="https://easeaccess24.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 rounded-lg px-4 py-2.5 font-sans text-xs text-navy hover:border-blue-DEFAULT hover:bg-blue-100 transition-all duration-200 w-fit min-h-[44px]"
              >
                <span aria-hidden="true">→</span> EaseAccess24 · easeaccess24.com
              </a>
            </div>

            <p className="font-sans text-slate-600 text-xs leading-relaxed max-w-xs">
              Europea does not have a public-facing product. For accessibility enquiries, visit EaseAccess24.com.
            </p>
          </motion.div>

          {/* Right — decorative coordinates */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center py-12 lg:py-20"
            aria-hidden="true"
          >
            <div className="relative">
              <div className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-tight text-navy/[0.5] select-none text-right">
                <div>55°36&apos;N</div>
                <div>13°00&apos;E</div>
                <div className="text-[clamp(1.25rem,3.5vw,3rem)] tracking-widest">MALMÖ</div>
              </div>

              {/* Map pin pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="absolute w-10 h-10 rounded-full bg-blue-DEFAULT/20"
                    animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
