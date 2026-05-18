"use client"

import { motion } from "framer-motion"

export function FloatingBlob({
  className = "",
  delay = 0,
  breathDuration = 10,
  driftDuration = 20,
  driftX = 30,
  driftY = 20,
}: {
  className?: string
  delay?: number
  breathDuration?: number
  driftDuration?: number
  driftX?: number
  driftY?: number
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute pointer-events-none rounded-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.55, 1, 0.55],
        scale: [1, 1.10, 1],
        x: [0, driftX, 0],
        y: [0, driftY, 0],
      }}
      transition={{
        opacity: { duration: breathDuration * 1.5, delay, repeat: Infinity, ease: "easeInOut" },
        scale:   { duration: breathDuration, delay, repeat: Infinity, ease: "easeInOut" },
        x:       { duration: driftDuration, delay, repeat: Infinity, ease: "easeInOut" },
        y:       { duration: driftDuration * 0.82, delay: delay + 2, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  )
}
