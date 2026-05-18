"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asChild?: boolean
  href?: string
}

export function HoverButton({ className, children, href, ...props }: HoverButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center gap-2",
    "px-8 py-3.5 rounded-full",
    "font-sans font-medium text-base",
    "transition-all duration-200",
    "bg-brand-gradient shadow-cta",
    "hover:shadow-[0_6px_28px_rgba(37,99,235,0.55)] hover:scale-[1.02]",
    "active:scale-[0.98]",
    "overflow-hidden group",
    className
  )

  const inner = (
    <>
      <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-200 rounded-full" />
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  )
}
