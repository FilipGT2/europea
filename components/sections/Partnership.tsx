"use client"

import { motion } from "framer-motion"
import { HoverButton } from "@/components/ui/hover-button"

const formats = [
  {
    title: "Research & Development",
    body: "We have partnered with PTS (Sweden's Post and Telecom Authority) on multiple innovation projects including TERA Next Generation and Fritt Fram.",
  },
  {
    title: "Public Sector",
    body: "Municipalities, regions, and welfare-tech organisations. If you have a digital service, we can help make it fully accessible — end to end.",
  },
  {
    title: "Events & Education",
    body: "We arrange annual conferences and product demonstrations. Since 2018, in partnership with Lidol, we co-sponsor an open conference on Komplett Kommunikation.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Partnership() {
  return (
    <section id="partnership" className="border-y border-blue-border bg-bg-surface py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-blue-DEFAULT mb-5">Partnership</p>
          <h2 className="font-display text-display-md text-text-primary leading-tight mb-6">
            We are stronger together.
          </h2>
          <p className="font-sans text-text-secondary leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            With a comprehensive product family built over twenty-five years, Europea and its companies are
            proud to partner on larger projects driving accessible digitalisation. We hold product demonstrations,
            deliver conference talks, and co-develop solutions with public and private organisations across
            Scandinavia and Europe.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {formats.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="border border-blue-border bg-bg-card rounded-xl p-6 text-left"
            >
              <h3 className="font-sans font-medium text-text-primary mb-3 text-sm">{f.title}</h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HoverButton href="mailto:mail@tmeeting.se" className="text-white">
            Interested in collaborating?
          </HoverButton>
        </motion.div>
      </div>
    </section>
  )
}
