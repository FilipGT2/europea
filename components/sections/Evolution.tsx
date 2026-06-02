"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FloatingBlob } from "@/components/ui/floating-blob"

export default function Evolution() {
  const { t } = useTranslation()

  return (
    <section
      id="utveckling"
      className="relative overflow-hidden bg-bg-base border-t border-blue-border py-20 md:py-28"
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
          className="mb-12 md:mb-16"
        >
          <p className="font-sans text-eyebrow uppercase text-blue-label mb-4">
            {t("evolution.label")}
          </p>
          <h2 className="font-display text-display-md text-text-primary mb-5">
            {t("evolution.heading")}
          </h2>
          <p className="font-sans text-body-lg text-text-secondary max-w-2xl">
            {t("evolution.lead")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-bg-card border border-blue-border rounded-2xl p-7 md:p-8 flex flex-col gap-4"
        >
          <p className="font-sans text-body text-text-secondary">
            {t("evolution.body1")}
          </p>
          <p className="font-sans text-body text-text-secondary">
            {t("evolution.body2")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
