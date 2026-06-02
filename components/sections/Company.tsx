"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FloatingBlob } from "@/components/ui/floating-blob"

export default function Company() {
  const { t } = useTranslation()

  const cards = [
    {
      tag: t("company.tmeeting_tag"),
      name: t("company.tmeeting_name"),
      desc: t("company.tmeeting_desc"),
    },
    {
      tag: t("company.ease_tag"),
      name: t("company.ease_name"),
      desc: t("company.ease_desc"),
    },
    {
      tag: t("company.infiniuum_tag"),
      name: t("company.infiniuum_name"),
      desc: t("company.infiniuum_desc"),
    },
  ]

  return (
    <section
      id="foretaget"
      className="relative overflow-hidden bg-bg-surface border-t border-blue-border py-28 md:py-36"
    >
      <FloatingBlob
        className="top-0 right-0 w-[400px] h-[320px] bg-gradient-to-bl from-blue-500/10 to-indigo-600/7 blur-[110px]"
        delay={0} breathDuration={11} driftDuration={22} driftX={-28} driftY={32}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[340px] h-[310px] bg-gradient-to-tr from-sky-400/9 to-blue-500/6 blur-[95px]"
        delay={2} breathDuration={13} driftDuration={25} driftX={26} driftY={-20}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label mb-4">
            {t("company.label")}
          </p>
          <h2 className="font-display text-display-md text-text-primary leading-tight">
            {t("company.heading")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-text-secondary leading-relaxed max-w-2xl mb-16"
        >
          {t("company.lead")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pt-8 border-t border-blue-border group"
            >
              <span className="inline-flex items-center px-2.5 py-1 rounded border border-blue-border font-sans text-[10px] uppercase tracking-[0.18em] text-blue-label mb-4 bg-blue-subtle">
                {card.tag}
              </span>
              <h3 className="font-sans font-medium text-text-primary mb-3 leading-snug text-base">
                {card.name}
              </h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
