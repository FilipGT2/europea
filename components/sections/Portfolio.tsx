"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FloatingBlob } from "@/components/ui/floating-blob"

interface CompanyCardProps {
  tag: string
  headline: string
  description: string
  capabilities: string[]
  logo: string
  logoAlt: string
  logoClass?: string
  founded: string
  link: string
  linkLabel: string
  index: number
}

function CompanyCard({ tag, headline, description, capabilities, logo, logoAlt, logoClass, founded, link, linkLabel, index }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative border border-blue-border bg-bg-card rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-DEFAULT/70 hover:shadow-[0_8px_40px_rgba(37,99,235,0.12)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]">

        {/* Main content */}
        <div className="px-8 md:px-10 py-10 md:py-12">
          <span className="inline-flex items-center px-2.5 py-1 rounded border border-blue-border font-sans text-[10px] uppercase tracking-[0.18em] text-text-secondary mb-6 bg-blue-subtle">
            {tag}
          </span>
          <h3 className="font-display text-display-md text-text-primary mb-5 leading-tight">
            {headline}
          </h3>
          <p className="font-sans text-text-secondary leading-relaxed mb-7 text-sm md:text-base max-w-xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {capabilities.map((c) => (
              <span
                key={c}
                className="inline-flex items-center px-2.5 py-1 rounded bg-blue-subtle border border-blue-border font-sans text-[10px] tracking-wide text-blue-label"
              >
                {c}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary border border-blue-border hover:border-blue-DEFAULT rounded-lg px-4 py-2.5 transition-all duration-200 min-h-[44px] group/link"
          >
            <span className="transition-transform duration-200 group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
            {linkLabel}
          </a>
        </div>

        {/* Right panel — logo + meta */}
        <div className="relative md:border-l border-t md:border-t-0 border-blue-border bg-bg-surface flex flex-col items-center justify-between px-8 py-10 overflow-hidden">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-60" />

          {/* Logo */}
          <div className="flex items-center justify-center w-full flex-1">
            <div className="relative w-full max-w-[180px] flex items-center justify-center">
              <Image
                src={logo}
                alt={logoAlt}
                width={180}
                height={80}
                className={`w-full h-auto object-contain ${logoClass ?? ""}`}
              />
            </div>
          </div>

          {/* Founded year + group label */}
          <div className="w-full border-t border-blue-border pt-5 text-center">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-tertiary mb-1">Est.</p>
            <p className="font-display text-display-md leading-none opacity-40 text-text-secondary">{founded}</p>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-text-tertiary mt-3">
              Part of Europea Group
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-bg-base py-28 md:py-36">

      {/* Atmospheric blobs */}
      <FloatingBlob
        className="top-0 right-0 w-[520px] h-[380px] bg-gradient-to-bl from-blue-500/12 to-indigo-600/8 blur-[120px]"
        delay={0} breathDuration={12} driftDuration={24} driftX={-38} driftY={40}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[420px] h-[380px] bg-gradient-to-tr from-sky-400/10 to-blue-600/7 blur-[110px]"
        delay={2.5} breathDuration={15} driftDuration={28} driftX={32} driftY={-28}
      />
      <FloatingBlob
        className="top-[45%] left-[30%] w-[300px] h-[300px] bg-gradient-to-br from-indigo-400/7 to-blue-500/5 blur-[90px]"
        delay={4.5} breathDuration={9} driftDuration={20} driftX={-25} driftY={30}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label mb-4">Portfolio</p>
          <h2 className="font-display text-display-md text-text-primary leading-tight">
            The companies we build.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          <CompanyCard
            tag="Communication Technology · Since 2000"
            headline="Giving everyone a voice."
            description="T-Meeting develops communication solutions for people with hearing, visual, and speech impairments — real-time AI transcription, video telephony, wearable technology, and assistive telephony. One of Scandinavia's largest accessibility technology companies, and an advisory partner at ETSI — helping shape international standards for accessible, secure communication."
            capabilities={["TERA (AI transcription)", "TM Video Phone", "TM-ALERT", "Ring Direkt", "TM-PC Flerpart"]}
            logo="/tmeeting.jpg"
            logoAlt="T-Meeting Global AB"
            logoClass="rounded dark:brightness-90"
            founded="2000"
            link="https://tmeeting.se"
            linkLabel="tmeeting.se"
            index={0}
          />
          <CompanyCard
            tag="Web Accessibility · Founded 2024"
            headline="The internet, for everyone."
            description="EaseAccess24 is Europea's new generation of accessibility technology — a SaaS platform combining an AI-powered accessibility widget, expert manual audits, and consulting. Built for mid-to-large European companies navigating the European Accessibility Act. Real compliance. No shortcuts."
            capabilities={["Accessibility Control Center", "Manual WCAG Audits", "VPAT Compliance", "EAA Consulting"]}
            logo="/easeaccess24.svg"
            logoAlt="EaseAccess24"
            logoClass="dark:brightness-0 dark:invert"
            founded="2024"
            link="https://easeaccess24.com"
            linkLabel="easeaccess24.com"
            index={1}
          />
        </div>
      </div>
    </section>
  )
}
