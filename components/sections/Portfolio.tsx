"use client"

import { motion } from "framer-motion"

interface CompanyCardProps {
  tag: string
  headline: string
  description: string
  capabilities: string[]
  letter: string
  link: string
  linkLabel: string
  direction: "left" | "right"
  index: number
}

function CompanyCard({ tag, headline, description, capabilities, letter, link, linkLabel, direction, index }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.005 }}
      className="relative border border-blue-border bg-bg-card rounded-2xl px-8 md:px-10 py-10 md:py-12 overflow-hidden transition-colors duration-200 hover:border-blue-DEFAULT hover:bg-blue-subtle group"
    >
      <span aria-hidden="true" className="absolute right-6 top-1/2 -translate-y-1/2 font-display text-[8rem] md:text-[12rem] leading-none text-blue-DEFAULT/[0.04] select-none pointer-events-none">
        {letter}
      </span>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[60fr_40fr] gap-8 items-start">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-blue-border font-sans text-[10px] uppercase tracking-[0.18em] text-text-secondary mb-6">
            {tag}
          </span>
          <h3 className="font-display text-display-md text-text-primary mb-5 leading-tight">
            {headline}
          </h3>
          <p className="font-sans text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
            {description}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 font-sans font-medium text-xs text-blue-400 mb-8">
            {capabilities.map((c, i) => (
              <span key={c}>
                {c}{i < capabilities.length - 1 && <span aria-hidden="true" className="ml-3 text-text-secondary">·</span>}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-blue-300 hover:underline underline-offset-4 transition-all"
          >
            <span aria-hidden="true">→</span> {linkLabel}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-bg-base py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-400 mb-4">Portfolio</p>
          <h2 className="font-display text-display-md text-text-primary leading-tight">
            The companies we build.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          <CompanyCard
            tag="Communication Technology · Since 2000"
            headline="Giving everyone a voice."
            description="T-Meeting develops communication solutions for people with hearing, visual, and speech impairments — real-time AI transcription, video telephony, wearable technology, and assistive telephony. One of Scandinavia's largest accessibility technology companies, and an advisory partner at ETSI — helping shape international standards for accessible, secure communication."
            capabilities={["TERA (AI transcription)", "TM Video Phone", "TM-ALERT", "Ring Direkt", "TM-PC Flerpart"]}
            letter="T"
            link="https://tmeeting.se"
            linkLabel="tmeeting.se"
            direction="left"
            index={0}
          />
          <CompanyCard
            tag="Web Accessibility · Founded 2024"
            headline="The internet, for everyone."
            description="EaseAccess24 is Europea's new generation of accessibility technology — a SaaS platform combining an AI-powered accessibility widget, expert manual audits, and consulting. Built for mid-to-large European companies navigating the European Accessibility Act. Real compliance. No shortcuts."
            capabilities={["Accessibility Control Center", "Manual WCAG Audits", "VPAT Compliance", "EAA Consulting"]}
            letter="E"
            link="https://easeaccess24.com"
            linkLabel="easeaccess24.com"
            direction="right"
            index={1}
          />
        </div>
      </div>
    </section>
  )
}
