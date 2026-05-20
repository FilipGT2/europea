'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative">
      <HeroGeometric
        badge={t('hero.badge')}
        title1={t('hero.title1')}
        title2={t('hero.title2')}
        subtitle={t('hero.subtitle')}
        ctaPrimary={t('hero.cta_primary')}
        ctaSecondary={t('hero.cta_secondary')}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="relative w-px h-10 dark:bg-white/20 bg-blue-border overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-full bg-blue-DEFAULT rounded-full"
            style={{ height: "40%" }}
            animate={{ y: [0, 24, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  )
}
