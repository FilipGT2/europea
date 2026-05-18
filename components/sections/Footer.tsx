"use client"

import { FloatingBlob } from "@/components/ui/floating-blob"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bg-surface border-t border-blue-border py-10">
      <FloatingBlob
        className="top-0 left-[20%] w-[400px] h-[80px] bg-gradient-to-r from-blue-500/8 to-indigo-500/5 blur-[70px]"
        delay={0} breathDuration={12} driftDuration={22} driftX={25} driftY={8}
      />
      <p className="relative z-10 font-sans text-text-tertiary text-xs text-center">
        © 2025 Europea i Malmö AB · Org. 556464-0323 · Amiralsgatan 20, 211 55 Malmö
      </p>
    </footer>
  )
}
