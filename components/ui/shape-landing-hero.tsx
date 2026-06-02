"use client";

import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.4 + i * 0.18,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

function HeroBlob({
  className = "",
  delay = 0,
  breathDuration = 9,
  fadeDuration = 16,
  driftDuration = 20,
  driftX = 55,
  driftY = 40,
}: {
  className?: string;
  delay?: number;
  breathDuration?: number;
  fadeDuration?: number;
  driftDuration?: number;
  driftX?: number;
  driftY?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute pointer-events-none rounded-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        // times[1]=0.04 → reaches full opacity in 4% of cycle (~0.6s for a 16s fade)
        // so all blobs are visible within ~1s of page load regardless of fadeDuration
        opacity: [0, 1, 0.32, 1, 0],
        scale: [1, 1.13, 0.94, 1.07, 1],
        x: [0, driftX, driftX * 0.15, -driftX * 0.4, 0],
        y: [0, -driftY * 0.3, driftY, driftY * 0.2, 0],
      }}
      transition={{
        opacity: {
          duration: fadeDuration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.04, 0.5, 0.74, 1],
        },
        scale: {
          duration: breathDuration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        x: {
          duration: driftDuration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: driftDuration * 0.78,
          delay: delay + 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
}

interface HeroGeometricProps {
  badge?: string;
  titleNode?: React.ReactNode;
  title1?: string;
  title2?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
}

export function HeroGeometric({
  badge = "MALMÖ, SWEDEN · EST. 1993",
  titleNode,
  title1 = "Technology that brings people",
  title2 = "closer.",
  subtitle = "",
  ctaPrimary = "Discover Our Companies",
  ctaSecondary = "Contact Us",
  ctaPrimaryHref = "#varumarken",
  ctaSecondaryHref = "#kontakt",
}: HeroGeometricProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-bg-base">
      {/* ═══ 10 blobs spread across the whole hero ═══════════════════════════ */}

      {/* TOP ROW ─────────────────────────────────────── */}

      {/* 1 · Top-left */}
      <HeroBlob
        className="top-0 left-0 w-[560px] h-[460px] bg-gradient-to-br from-blue-600/55 to-indigo-700/38 blur-[130px]"
        delay={0}
        breathDuration={10}
        fadeDuration={18}
        driftDuration={22}
        driftX={65}
        driftY={55}
      />

      {/* 2 · Top-center, wide pill */}
      <HeroBlob
        className="top-0 left-[18%] w-[520px] h-[280px] bg-gradient-to-r from-sky-400/48 to-blue-600/32 blur-[120px]"
        delay={0.05}
        breathDuration={13}
        fadeDuration={22}
        driftDuration={26}
        driftX={45}
        driftY={60}
      />

      {/* 3 · Top-right */}
      <HeroBlob
        className="top-0 right-0 w-[580px] h-[500px] bg-gradient-to-bl from-indigo-500/50 to-blue-600/34 blur-[130px]"
        delay={0.1}
        breathDuration={9}
        fadeDuration={16}
        driftDuration={20}
        driftX={-72}
        driftY={58}
      />

      {/* MIDDLE ROW ───────────────────────────────────── */}

      {/* 4 · Left-center, tall pill */}
      <HeroBlob
        className="top-[28%] left-0 w-[260px] h-[560px] bg-gradient-to-b from-blue-500/42 to-violet-500/28 blur-[110px]"
        delay={0.15}
        breathDuration={8}
        fadeDuration={15}
        driftDuration={18}
        driftX={68}
        driftY={-58}
      />

      {/* 5 · CENTER — large, sits right behind the headline */}
      <HeroBlob
        className="top-[12%] left-[18%] w-[650px] h-[580px] bg-gradient-to-br from-blue-500/36 to-indigo-600/24 blur-[145px]"
        delay={0.2}
        breathDuration={12}
        fadeDuration={20}
        driftDuration={25}
        driftX={55}
        driftY={48}
      />

      {/* 6 · Center-right */}
      <HeroBlob
        className="top-[18%] right-[8%] w-[500px] h-[480px] bg-gradient-to-tl from-indigo-400/44 to-sky-500/28 blur-[120px]"
        delay={0.25}
        breathDuration={7}
        fadeDuration={14}
        driftDuration={19}
        driftX={-58}
        driftY={50}
      />

      {/* BOTTOM ROW ───────────────────────────────────── */}

      {/* 7 · Bottom-left */}
      <HeroBlob
        className="bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-blue-600/52 to-indigo-600/35 blur-[125px]"
        delay={0.3}
        breathDuration={10}
        fadeDuration={18}
        driftDuration={21}
        driftX={68}
        driftY={-48}
      />

      {/* 8 · Bottom-center, wide */}
      <HeroBlob
        className="bottom-0 left-[22%] w-[520px] h-[310px] bg-gradient-to-t from-sky-400/44 to-blue-500/28 blur-[115px]"
        delay={0.35}
        breathDuration={14}
        fadeDuration={24}
        driftDuration={28}
        driftX={-42}
        driftY={-52}
      />

      {/* 9 · Bottom-right */}
      <HeroBlob
        className="bottom-0 right-0 w-[540px] h-[440px] bg-gradient-to-tl from-blue-500/48 to-indigo-600/32 blur-[125px]"
        delay={0.4}
        breathDuration={8}
        fadeDuration={16}
        driftDuration={20}
        driftX={-62}
        driftY={-42}
      />

      {/* 10 · Small wandering accent — center stage */}
      <HeroBlob
        className="top-[38%] left-[35%] w-[320px] h-[320px] bg-gradient-to-br from-sky-300/38 to-blue-400/22 blur-[100px]"
        delay={0.08}
        breathDuration={6}
        fadeDuration={12}
        driftDuration={15}
        driftX={38}
        driftY={35}
      />

      {/* ═══════════════════════════════════════════════════════════════════════ */}

      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.09] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-base to-transparent pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded text-[11px] sm:text-xs tracking-[0.1em] uppercase font-sans font-medium text-text-secondary border border-blue-border bg-blue-subtle mb-8 whitespace-nowrap">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-display text-display-xl leading-[1.0] mb-6 break-words">
              {titleNode ?? (
                <>
                  <span className="text-text-primary">{title1} </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-blue-DEFAULT dark:via-blue-400 dark:to-sky-400 from-blue-700 via-blue-DEFAULT to-blue-600 italic">
                    {title2}
                  </span>
                </>
              )}
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="font-sans text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={ctaPrimaryHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-sans font-medium text-white text-sm transition-all duration-200 bg-brand-gradient shadow-cta hover:shadow-[0_6px_28px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-DEFAULT min-h-[44px]"
            >
              {ctaPrimary}
            </a>
            <a
              href={ctaSecondaryHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-sans font-medium text-text-secondary text-sm border border-blue-border transition-all duration-200 hover:border-blue-DEFAULT hover:text-text-primary hover:bg-blue-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-DEFAULT min-h-[44px]"
            >
              {ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
