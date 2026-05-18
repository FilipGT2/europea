"use client"

import { motion } from "framer-motion"
import { FloatingBlob } from "@/components/ui/floating-blob"

const values = [
  {
    num: "01",
    heading: "We don't add accessibility after the fact.",
    body: "Every product begins with the question: who is being excluded? When we design with the most demanding needs in mind, we create solutions that benefit everyone.",
    title: "Inclusion by design",
  },
  {
    num: "02",
    heading: "Behind every line of code is a person.",
    body: "Our tools solve real human problems. All our code is developed in-house, by a team that includes doctoral researchers in systems development. We listen to our users and build what they actually need.",
    title: "Technology with humanity",
  },
  {
    num: "03",
    heading: "We take the harder path.",
    body: "Short-term fixes are not our business. When standards are missing, we set them. When a solution doesn't exist, we build it. Our products are cared for like our own children.",
    title: "Build to last",
  },
]

export default function Values() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-28 md:py-36 border-t border-blue-border">

      {/* Atmospheric blobs */}
      <FloatingBlob
        className="top-0 left-0 w-[390px] h-[310px] bg-gradient-to-br from-blue-500/10 to-indigo-600/7 blur-[105px]"
        delay={0} breathDuration={11} driftDuration={22} driftX={30} driftY={25}
      />
      <FloatingBlob
        className="bottom-0 right-0 w-[330px] h-[330px] bg-gradient-to-tl from-sky-400/10 to-blue-500/7 blur-[95px]"
        delay={2} breathDuration={13} driftDuration={25} driftX={-24} driftY={-20}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label mb-4">Values</p>
          <h2 className="font-display text-display-md text-text-primary leading-tight">
            How we think and build.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pt-8 border-t border-blue-border group"
            >
              <span aria-hidden="true" className="absolute top-4 right-0 font-display text-[3.5rem] leading-none dark:text-blue-DEFAULT/[0.10] text-blue-DEFAULT/[0.18] select-none transition-opacity duration-300 group-hover:opacity-60">
                {v.num}
              </span>
              <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-blue-label mb-3">{v.title}</p>
              <h3 className="font-sans font-medium text-text-primary mb-4 leading-snug text-base">
                {v.heading}
              </h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
