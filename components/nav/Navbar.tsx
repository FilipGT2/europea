"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const links = [
  { label: "About", href: "#mission" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const borderOpacity = useTransform(scrollY, [60, 90], [0, 1])

  return (
    <>
      <motion.header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4">
        <motion.div
          className="absolute inset-0 bg-white/90 backdrop-blur-md shadow-sm"
          style={{ opacity: bgOpacity }}
        />
        <motion.div
          className="absolute inset-0 border-b border-blue-100"
          style={{ opacity: borderOpacity }}
        />

        <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto">
          <a href="#" aria-label="Europea home">
            <Image
              src="/europea-logo.svg"
              alt="Europea i Malmö AB"
              width={1080}
              height={360}
              priority
              className="h-24 sm:h-26 md:h-32 w-auto"
            />
          </a>

          <div className="flex items-center gap-6">
            <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-sans text-sm font-medium text-navy hover:text-blue-DEFAULT transition-colors duration-200 tracking-wide rounded"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center rounded"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span aria-hidden="true" className="block w-6 h-px bg-navy" />
              <span aria-hidden="true" className="block w-4 h-px bg-navy" />
              <span aria-hidden="true" className="block w-6 h-px bg-navy" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col px-8 pt-20 pb-12"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center text-navy hover:text-blue-DEFAULT rounded"
              aria-label="Close navigation menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <nav aria-label="Mobile primary" className="flex flex-col gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-display-md text-navy hover:text-blue-DEFAULT transition-colors rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
