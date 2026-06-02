"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FloatingBlob } from "@/components/ui/floating-blob"

export default function Evolution() {
  const { t } = useTranslation()

  return (
    <section
      id="utveckling"
      className="relative overflow-hidden bg-bg-base border-t border-blue-border py-28 md:py-36"
    >
      <FloatingBlob
        className="top-0 right-0 w-[420px] h-[360px] bg-gradient-to-bl from-blue-500/11 to-indigo-600/7 blur-[115px]"
        delay={0} breathDuration={12} driftDuration={23} driftX={-32} driftY={36}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[360px] h-[300px] bg-gradient-to-tr from-sky-400/9 to-blue-500/6 blur-[95px]"
        delay={2} breathDuration={14} driftDuration={26} driftX={28} driftY={-24}
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
            {t("evolution.label")}
          </p>
          <h2 className="font-display text-display-md text-text-primary leading-tight">
            {t("evolution.heading")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-text-secondary leading-relaxed mb-10"
        >
          {t("evolution.lead")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-bg-card border border-blue-border rounded-xl px-8 py-8 md:px-10 md:py-10 flex flex-col gap-5"
        >
          <p className="font-sans text-text-secondary leading-relaxed">
            {t("evolution.body1")}
          </p>
          <p className="font-sans text-text-secondary leading-relaxed">
            {t("evolution.body2")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
