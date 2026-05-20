"use client"

import { motion } from "framer-motion"
import { HoverButton } from "@/components/ui/hover-button"
import { useTranslation } from "react-i18next"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Partnership() {
  const { t } = useTranslation()

  const formats = [
    {
      title: t('partnership.item1_title'),
      body: t('partnership.item1_body'),
    },
    {
      title: t('partnership.item2_title'),
      body: t('partnership.item2_body'),
    },
    {
      title: t('partnership.item3_title'),
      body: t('partnership.item3_body'),
    },
  ]

  return (
    <section id="partnership" className="border-y border-blue-border bg-bg-surface py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-DEFAULT mb-5">{t('partnership.label')}</p>
          <h2 className="font-display text-display-md text-text-primary leading-tight mb-6">
            {t('partnership.heading')}
          </h2>
          <p className="font-sans text-text-secondary leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            {t('partnership.body')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {formats.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="border border-blue-border bg-bg-card rounded-xl p-6 text-left"
            >
              <h3 className="font-sans font-medium text-text-primary mb-3 text-sm">{f.title}</h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HoverButton href="mailto:mail@tmeeting.se" className="text-white">
            {t('partnership.cta')}
          </HoverButton>
        </motion.div>
      </div>
    </section>
  )
}
