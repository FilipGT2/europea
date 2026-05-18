"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ElegantShapeProps {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}

export function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-blue-300/[0.35]",
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-blue-200/[0.50]",
            "shadow-[0_8px_32px_0_rgba(37,99,235,0.08)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(147,197,253,0.25),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  )
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

interface HeroGeometricProps {
  badge?: string
  title1?: string
  title2?: string
}

export function HeroGeometric({
  badge = "MALMÖ, SWEDEN · EST. 2000",
  title1 = "Technology that brings people",
  title2 = "closer.",
}: HeroGeometricProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#f5f7ff]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-transparent to-sky-50/40 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-300/[0.35]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-sky-300/[0.30]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-blue-200/[0.40]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-sky-200/[0.35]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-blue-100/[0.50]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f5f7ff] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl ml-0 mr-auto text-left">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs tracking-[0.1em] uppercase font-sans font-medium text-navy border border-blue-200/60 bg-blue-50 mb-8">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-display text-display-xl leading-[1.2] mb-6 max-w-3xl break-words">
              <span className="text-navy">Technology that brings people </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 italic">closer.</span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="font-sans text-slate-500 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed mb-8">
              We believe in a socially sustainable society built on equality and diversity.
              Europea&apos;s companies give people the tools to participate fully — and to live richer lives.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-start justify-start gap-4 mt-2"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans font-medium text-white text-base transition-all duration-200 bg-brand-gradient shadow-cta hover:shadow-[0_6px_28px_rgba(37,99,235,0.55)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-DEFAULT"
            >
              Discover Our Companies
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans font-medium text-navy text-base border border-blue-200 transition-all duration-200 hover:border-blue-DEFAULT hover:bg-blue-50 hover:text-blue-DEFAULT focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-DEFAULT"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
