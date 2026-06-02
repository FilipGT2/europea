'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'

export default function Hero() {
  const { t } = useTranslation()

  const titleNode = (
    <>
      <span className="text-text-primary">{t('hero.title1')}</span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-blue-DEFAULT dark:via-blue-400 dark:to-sky-400 from-blue-700 via-blue-DEFAULT to-blue-600 italic">
        {t('hero.titleEm')}
      </span>
      <span className="text-text-primary">{t('hero.title2')}</span>
    </>
  )

  const stats = [
    { number: t('hero.stat1_number'), label: t('hero.stat1_label') },
    { number: t('hero.stat2_number'), label: t('hero.stat2_label') },
    { number: t('hero.stat3_number'), label: t('hero.stat3_label') },
    { number: t('hero.stat4_number'), label: t('hero.stat4_label') },
  ]

  return (
    <section id="hero">
      {/* Scroll indicator wrapper — relative so the absolute child is scoped to HeroGeometric height */}
      <div className="relative">
        <HeroGeometric
          badge={t('hero.eyebrow')}
          titleNode={titleNode}
          subtitle={t('hero.subtitle')}
          ctaPrimary={t('hero.cta_primary')}
          ctaSecondary={t('hero.cta_secondary')}
          ctaPrimaryHref="#varumarken"
          ctaSecondaryHref="#kontakt"
        />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20" aria-hidden="true">
          <div className="relative w-px h-10 dark:bg-white/20 bg-blue-border overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-blue-DEFAULT rounded-full"
              style={{ height: "40%" }}
              animate={{ y: [0, 24, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Since-card + stat cards cluster */}
      <div className="relative bg-bg-base py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Since-card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl bg-brand-gradient shadow-cta p-7 md:p-8 flex flex-col justify-between"
            >
              <p className="font-display text-display-xl leading-none text-white/90 select-none">
                {t('hero.since_year')}
              </p>
              <p className="font-sans text-body-sm text-white/80 leading-relaxed mt-3">
                {t('hero.since_label')}
              </p>
            </motion.div>

            {/* 2×2 stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: 0.05 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-bg-card border border-blue-border rounded-2xl p-6 flex flex-col justify-between"
                >
                  <p className="font-display text-display-sm text-text-primary leading-none mb-2">
                    {s.number}
                  </p>
                  <p className="font-sans text-eyebrow uppercase text-text-secondary leading-snug">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
