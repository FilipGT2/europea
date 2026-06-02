"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FloatingBlob } from "@/components/ui/floating-blob"

export default function CoreCompetence() {
  const { t } = useTranslation()

  const cards = [
    {
      tag: t("coreCompetence.card1_tag"),
      name: t("coreCompetence.card1_name"),
      desc: t("coreCompetence.card1_desc"),
      accent: "from-blue-500/30 to-blue-700/20",
    },
    {
      tag: t("coreCompetence.card2_tag"),
      name: t("coreCompetence.card2_name"),
      desc: t("coreCompetence.card2_desc"),
      accent: "from-sky-400/30 to-blue-500/20",
    },
    {
      tag: t("coreCompetence.card3_tag"),
      name: t("coreCompetence.card3_name"),
      desc: t("coreCompetence.card3_desc"),
      accent: "from-indigo-500/30 to-blue-600/20",
    },
  ]

  return (
    <section
      id="om-oss"
      className="relative overflow-hidden bg-bg-surface border-t border-blue-border py-28 md:py-36"
    >
      <FloatingBlob
        className="top-0 left-0 w-[390px] h-[310px] bg-gradient-to-br from-blue-500/10 to-indigo-600/7 blur-[105px]"
        delay={0} breathDuration={11} driftDuration={22} driftX={30} driftY={25}
      />
      <FloatingBlob
        className="bottom-0 right-0 w-[330px] h-[330px] bg-gradient-to-tl from-sky-400/10 to-blue-500/7 blur-[95px]"
        delay={2} breathDuration={13} driftDuration={25} driftX={-24} driftY={-20}
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
            {t("coreCompetence.label")}
          </p>
          <h2 className="font-display text-display-md text-text-primary leading-tight">
            {t("coreCompetence.heading")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-text-secondary leading-relaxed max-w-2xl mb-16"
        >
          {t("coreCompetence.lead")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-bg-card border border-blue-border rounded-xl overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${card.accent}`} aria-hidden="true" />
              <div className="p-7 md:p-8">
                <span className="inline-flex items-center px-2.5 py-1 rounded border border-blue-border font-sans text-[10px] uppercase tracking-[0.18em] text-blue-label mb-5 bg-blue-subtle">
                  {card.tag}
                </span>
                <h3 className="font-sans font-medium text-text-primary mb-3 leading-snug text-base">
                  {card.name}
                </h3>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
