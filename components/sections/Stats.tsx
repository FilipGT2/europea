"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"

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
      className="flex flex-col items-center text-center px-8 py-10"
    >
      <motion.span className="font-display text-display-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-sky-300 leading-none mb-3">
        {rounded}
      </motion.span>
      <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-blue-300 leading-snug max-w-[140px]">
        {label}
      </span>
    </motion.div>
  )
}

const stats = [
  { value: 25, suffix: "+", label: "Years building accessible technology" },
  { value: 50, suffix: "+", label: "Engineers & developers" },
  { value: 90, suffix: "M", label: "Europeans living with a disability" },
]

export default function Stats() {
  return (
    <section className="border-y border-blue-border bg-bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-blue-border">
          {stats.map((s, i) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
