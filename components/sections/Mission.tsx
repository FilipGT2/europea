"use client"

import { motion } from "framer-motion"
import { FloatingBlob } from "@/components/ui/floating-blob"
import { useTranslation } from "react-i18next"

const revealLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}
const revealRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
}

export default function Mission() {
  const { t } = useTranslation()
  return (
    <section id="mission" className="relative overflow-hidden border-t border-blue-border bg-bg-base py-28 md:py-36">

      {/* Atmospheric blobs */}
      <FloatingBlob
        className="top-0 right-0 w-[420px] h-[380px] bg-gradient-to-bl from-blue-500/12 to-indigo-600/8 blur-[110px]"
        delay={0} breathDuration={11} driftDuration={22} driftX={-30} driftY={35}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[360px] h-[310px] bg-gradient-to-tr from-sky-400/10 to-blue-500/7 blur-[95px]"
        delay={1.8} breathDuration={14} driftDuration={26} driftX={28} driftY={-22}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label mb-6">
              {t('mission.label')}
            </p>
            <h2 className="font-display text-display-md text-text-primary mb-6 leading-tight">
              {t('mission.heading')}
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              {t('mission.body1')}
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-10">
              {t('mission.body2')}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans font-medium text-sm text-text-secondary">
              <span className="text-text-primary">{t('mission.tag1')}</span>
              <span aria-hidden="true" className="text-text-secondary">·</span>
              <span className="text-text-primary">{t('mission.tag2')}</span>
              <span aria-hidden="true" className="text-text-secondary">·</span>
              <span className="text-text-primary">{t('mission.tag3')}</span>
            </div>
          </motion.div>

          {/* Right — Quote card */}
          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="bg-brand-gradient rounded-2xl p-8 md:p-10 shadow-cta transition-transform duration-500 hover:scale-[1.02]">
              <blockquote className="font-display text-display-lg text-white italic leading-tight mb-6">
                {t('mission.quoteText')}
              </blockquote>
              <p className="font-sans text-white/[0.85] text-sm leading-relaxed mb-6">
                {t('mission.quoteBody')}
              </p>
              <p className="font-sans text-white/80 text-sm">{t('mission.quoteAttribution')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
