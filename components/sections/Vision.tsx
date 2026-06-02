"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FloatingBlob } from "@/components/ui/floating-blob"

export default function Vision() {
  const { t } = useTranslation()

  const practiceBody = t("vision.practice_body")
  const practiceTerm = t("vision.practice_term")
  const parts = practiceBody.split(practiceTerm)

  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-bg-base border-t border-blue-border py-28 md:py-36"
    >
      <FloatingBlob
        className="top-0 right-0 w-[420px] h-[380px] bg-gradient-to-bl from-blue-500/12 to-indigo-600/8 blur-[110px]"
        delay={0} breathDuration={11} driftDuration={22} driftX={-30} driftY={35}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[360px] h-[310px] bg-gradient-to-tr from-sky-400/10 to-blue-500/7 blur-[95px]"
        delay={1.8} breathDuration={14} driftDuration={26} driftX={28} driftY={-22}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label mb-4">
            {t("vision.label")}
          </p>
          <h2 className="font-display text-display-md text-text-primary leading-tight">
            {t("vision.heading")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-text-secondary leading-relaxed mb-12"
        >
          {t("vision.lead")}
        </motion.p>

        {/* Vision + Conviction card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-gradient rounded-2xl p-8 md:p-10 shadow-cta mb-6"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/70 mb-3">
            {t("vision.vision_label")}
          </p>
          <p className="font-display text-display-lg text-white italic leading-tight mb-8">
            {t("vision.vision_body")}
          </p>

          <div className="border-t border-white/20 pt-7">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/70 mb-3">
              {t("vision.belief_label")}
            </p>
            <p className="font-sans text-white/90 leading-relaxed mb-3">
              {t("vision.belief_body1")}
            </p>
            <p className="font-sans text-white/90 leading-relaxed">
              {t("vision.belief_body2")}
            </p>
          </div>
        </motion.div>

        {/* Practice callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-bg-card border border-blue-border rounded-xl px-8 py-7"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label mb-3">
            {t("vision.practice_label")}
          </p>
          <p className="font-sans text-text-secondary leading-relaxed">
            {parts.length === 2 ? (
              <>
                {parts[0]}
                <strong className="text-text-primary font-medium">{practiceTerm}</strong>
                {parts[1]}
              </>
            ) : (
              practiceBody
            )}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
