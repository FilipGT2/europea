"use client"

import { motion } from "framer-motion"
import { FloatingBlob } from "@/components/ui/floating-blob"

const revealLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}
const revealRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
}

export default function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden border-t border-blue-border bg-bg-base py-28 md:py-36">

      {/* Atmospheric blobs */}
      <FloatingBlob
        className="top-0 right-0 w-[420px] h-[380px] bg-gradient-to-bl from-blue-500/12 to-indigo-600/8 blur-[110px]"
        delay={0} breathDuration={11} driftDuration={22} driftX={-30} driftY={35}
      />
      <FloatingBlob
        className="bottom-0 left-0 w-[360px] h-[310px] bg-gradient-to-tr from-sky-400/10 to-blue-500/7 blur-[95px]"
        delay={1.8} breathDuration={14} driftDuration={26} driftX={28} driftY={-22}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label mb-6">
              Our Mission
            </p>
            <h2 className="font-display text-display-md text-text-primary mb-6 leading-tight">
              Communication on equal terms — for every individual.
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              When we design with the most demanding needs in mind, we create products that benefit everyone.
              This is not only about justice and human rights — it is about inclusive, universal design.
              That is the thinking of the future.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-10">
              In Sweden alone, nearly two million people have hearing impairments. For many — including those
              who are deaf — it has historically been difficult to directly reach services like a bank,
              healthcare provider, or government office. We have spent over twenty-five years closing that gap.
              Today, our technology makes it possible for a deafblind person to work in customer service and
              assist every caller.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans font-medium text-sm text-text-secondary">
              <span className="text-text-primary">Customer Focus</span>
              <span aria-hidden="true" className="text-text-secondary">·</span>
              <span className="text-text-primary">Long-term Thinking</span>
              <span aria-hidden="true" className="text-text-secondary">·</span>
              <span className="text-text-primary">Innovation</span>
            </div>
          </motion.div>

          {/* Right — Quote card */}
          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="bg-brand-gradient rounded-2xl p-8 md:p-10 shadow-cta transition-transform duration-500 hover:scale-[1.02]">
              <blockquote className="font-display text-display-lg text-white italic leading-tight mb-6">
                &ldquo;Komplett<br />Kommunikation.&rdquo;
              </blockquote>
              <p className="font-sans text-white/[0.85] text-sm leading-relaxed mb-6">
                Complete Communication — the founding concept of Europea. Everyone should be able to reach
                and be reached by anyone, using the tools they have at hand.
              </p>
              <p className="font-sans text-white/80 text-sm">Max &amp; Faruk Tairi, founders</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
