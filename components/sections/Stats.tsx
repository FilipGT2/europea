"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { FloatingBlob } from "@/components/ui/floating-blob"
import { useTranslation } from "react-i18next"

interface StatProps {
  value: number
  suffix: string
  label: string
  index: number
}

function StatItem({ value, suffix, label, index }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.5, ease: "easeOut" })
      return controls.stop
    }
  }, [isInView, count, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center px-8 py-10"
    >
      <motion.span className="font-display text-display-lg bg-clip-text text-transparent bg-gradient-to-r dark:from-blue-600 dark:via-blue-DEFAULT dark:to-sky-300 from-blue-700 via-blue-DEFAULT to-blue-500 leading-none mb-3">
        {rounded}
      </motion.span>
      <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-blue-label leading-snug max-w-[140px]">
        {label}
      </span>
    </motion.div>
  )
}

export default function Stats() {
  const { t } = useTranslation()

  const stats = [
    { value: 25, suffix: '+', label: t('stats.years_label') },
    { value: 50, suffix: '+', label: t('stats.engineers_label') },
    { value: 90, suffix: 'M', label: t('stats.europeans_label') },
  ]

  return (
    <section className="relative overflow-hidden border-y border-blue-border bg-bg-surface">

      {/* Atmospheric blobs — very subtle on surface background */}
      <FloatingBlob
        className="top-0 right-0 w-[300px] h-[200px] bg-gradient-to-bl from-blue-500/10 to-indigo-500/6 blur-[90px]"
        delay={0} breathDuration={10} driftDuration={18} driftX={-22} driftY={18}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[260px] h-[260px] bg-gradient-to-tr from-sky-400/8 to-blue-500/6 blur-[80px]"
        delay={2.2} breathDuration={13} driftDuration={22} driftX={20} driftY={-14}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-blue-border">
          {stats.map((s, i) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
