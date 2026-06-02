"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FloatingBlob } from "@/components/ui/floating-blob"

export default function Industry() {
  const { t } = useTranslation()

  return (
    <section
      id="forankring"
      className="relative overflow-hidden bg-bg-base border-t border-blue-border py-20 md:py-28"
    >
      <FloatingBlob
        className="top-0 right-0 w-[400px] h-[340px] bg-gradient-to-bl from-blue-500/10 to-indigo-600/7 blur-[110px]"
        delay={0} breathDuration={12} driftDuration={23} driftX={-30} driftY={32}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[340px] h-[300px] bg-gradient-to-tr from-sky-400/9 to-blue-500/6 blur-[95px]"
        delay={2} breathDuration={14} driftDuration={26} driftX={26} driftY={-22}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="font-sans text-eyebrow uppercase text-blue-label mb-4">
            {t("industry.label")}
          </p>
          <h2 className="font-display text-display-md text-text-primary mb-5">
            {t("industry.heading")}
          </h2>
          <p className="font-sans text-body-lg text-text-secondary max-w-2xl">
            {t("industry.lead")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="border border-blue-border bg-bg-card rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr]">
            {/* Tag column */}
            <div className="relative md:border-r border-b md:border-b-0 border-blue-border bg-bg-surface flex items-center justify-center px-8 py-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-60" aria-hidden="true" />
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg border border-blue-border font-sans text-eyebrow uppercase text-blue-label bg-blue-subtle">
                {t("industry.membership_tag")}
              </span>
            </div>
            {/* Content column */}
            <div className="p-7 md:p-8">
              <h3 className="font-display text-display-sm text-text-primary mb-3">
                {t("industry.membership_name")}
              </h3>
              <p className="font-sans text-body-sm text-text-secondary">
                {t("industry.membership_body")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
