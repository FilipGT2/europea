"use client"

import { motion } from "framer-motion"
import { FloatingBlob } from "@/components/ui/floating-blob"
import { useTranslation } from "react-i18next"

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="relative overflow-hidden bg-bg-base border-t border-blue-border py-28 md:py-36">

      {/* Atmospheric blobs */}
      <FloatingBlob
        className="top-0 right-0 w-[520px] h-[460px] bg-gradient-to-bl from-blue-500/14 to-indigo-700/10 blur-[125px]"
        delay={0} breathDuration={12} driftDuration={24} driftX={-40} driftY={32}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[420px] h-[320px] bg-gradient-to-tr from-sky-400/12 to-blue-600/8 blur-[105px]"
        delay={2.2} breathDuration={15} driftDuration={28} driftX={36} driftY={-26}
      />
      <FloatingBlob
        className="top-[35%] left-[35%] w-[260px] h-[260px] bg-gradient-to-br from-indigo-400/8 to-blue-400/6 blur-[85px]"
        delay={4} breathDuration={10} driftDuration={20} driftX={22} driftY={22}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label mb-5">{t('contact.label')}</p>
            <h2 className="font-display text-display-md text-text-primary leading-tight mb-8">
              {t('contact.heading')}
            </h2>
            <address className="not-italic font-sans text-text-secondary leading-loose text-sm mb-6">
              <p className="text-text-primary font-medium mb-1">{t('contact.company')}</p>
              <p>{t('contact.address1')}</p>
              <p>{t('contact.address2')}</p>
              <p className="mt-3">
                <a href="tel:+46406614180" className="hover:text-text-primary transition-colors underline underline-offset-2">
                  +46 (0)40 661 41 80
                </a>
              </p>
              <p>
                <a href="mailto:mail@tmeeting.se" className="hover:text-text-primary transition-colors underline underline-offset-2">
                  mail@tmeeting.se
                </a>
              </p>
            </address>
            <p className="font-sans text-text-tertiary text-xs mb-8">{t('contact.org')}</p>

            <div className="flex flex-col gap-3 mb-8">
              <a
                href="https://tmeeting.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-border bg-blue-subtle rounded-lg px-4 py-2.5 font-sans text-xs text-text-secondary hover:border-blue-DEFAULT hover:text-text-primary transition-all duration-200 w-fit min-h-[44px]"
              >
                <span aria-hidden="true">→</span> {t('contact.link_tmeeting')}
              </a>
              <a
                href="https://easeaccess24.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-border bg-blue-subtle rounded-lg px-4 py-2.5 font-sans text-xs text-text-secondary hover:border-blue-DEFAULT hover:text-text-primary transition-all duration-200 w-fit min-h-[44px]"
              >
                <span aria-hidden="true">→</span> {t('contact.link_ease')}
              </a>
            </div>

            <p className="font-sans text-text-tertiary text-xs leading-relaxed max-w-xs">
              {t('contact.noProduct')}
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
              <div className="opacity-25 font-display text-[clamp(2rem,5vw,4.5rem)] leading-tight select-none text-right text-text-primary">
                <div>55°36&apos;N</div>
                <div>13°00&apos;E</div>
                <div className="text-[clamp(1.25rem,3.5vw,3rem)] tracking-widest">MALMÖ</div>
              </div>

              {/* Map pin pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="absolute w-10 h-10 rounded-full bg-blue-DEFAULT/20"
                    animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  />
                  <div className="w-2 h-2 rounded-full bg-blue-DEFAULT/50" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
