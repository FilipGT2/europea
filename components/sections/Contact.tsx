"use client"

import { motion } from "framer-motion"
import { FloatingBlob } from "@/components/ui/floating-blob"
import { useTranslation } from "react-i18next"

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="kontakt" className="relative overflow-hidden bg-bg-surface border-t border-blue-border py-20 md:py-28">

      <FloatingBlob
        className="top-0 right-0 w-[520px] h-[460px] bg-gradient-to-bl from-blue-500/14 to-indigo-700/10 blur-[125px]"
        delay={0} breathDuration={12} driftDuration={24} driftX={-40} driftY={32}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[420px] h-[320px] bg-gradient-to-tr from-sky-400/12 to-blue-600/8 blur-[105px]"
        delay={2.2} breathDuration={15} driftDuration={28} driftX={36} driftY={-26}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-eyebrow uppercase text-blue-label mb-4">
              {t('contact.label')}
            </p>
            <h2 className="font-display text-display-md text-text-primary mb-5">
              {t('contact.heading')}
            </h2>
            <p className="font-sans text-body-lg text-text-secondary mb-8 max-w-2xl">
              {t('contact.lead')}
            </p>

            <address className="not-italic font-sans text-text-secondary">
              <dl className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="font-sans text-eyebrow uppercase text-text-secondary min-w-[80px] pt-0.5">
                    {t('contact.address_label')}
                  </dt>
                  <dd className="text-body">{t('contact.address_value')}</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="font-sans text-eyebrow uppercase text-text-secondary min-w-[80px] pt-0.5">
                    {t('contact.phone_label')}
                  </dt>
                  <dd>
                    <a
                      href={`tel:${t('contact.phone_value').replace(/[\s()]/g, '')}`}
                      className="text-body hover:text-text-primary transition-colors underline underline-offset-2 min-h-[44px] inline-flex items-center"
                    >
                      {t('contact.phone_value')}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="font-sans text-eyebrow uppercase text-text-secondary min-w-[80px] pt-0.5">
                    {t('contact.email_label')}
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${t('contact.email_value')}`}
                      className="text-body hover:text-text-primary transition-colors underline underline-offset-2 min-h-[44px] inline-flex items-center"
                    >
                      {t('contact.email_value')}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <dt className="font-sans text-eyebrow uppercase text-text-secondary min-w-[80px] pt-0.5">
                    {t('contact.org_label')}
                  </dt>
                  <dd className="text-body">{t('contact.org_value')}</dd>
                </div>
              </dl>
            </address>
          </motion.div>

          {/* Right — decorative coordinates (aria-hidden) */}
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
