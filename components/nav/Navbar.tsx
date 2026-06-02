"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/nav/LanguageSwitcher";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" aria-hidden="true" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-blue-border text-text-secondary hover:text-text-primary hover:border-blue-DEFAULT hover:bg-blue-subtle transition-all duration-200"
      aria-label={isDark ? t("nav.switchLight") : t("nav.switchDark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={15} strokeWidth={1.75} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -30, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={15} strokeWidth={1.75} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const links = [
    { label: t("nav.about"), href: "#om-oss" },
    { label: t("nav.brands"), href: "#varumarken" },
    { label: t("nav.evolution"), href: "#utveckling" },
    { label: t("nav.vision"), href: "#vision" },
    { label: t("nav.europe"), href: "#europa" },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const borderOpacity = useTransform(scrollY, [60, 90], [0, 1]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4"
      >
        <motion.div
          className="absolute inset-0 bg-bg-base/90 backdrop-blur-md"
          style={{ opacity: bgOpacity }}
        />
        <motion.div
          className="absolute inset-0 border-b border-blue-border"
          style={{ opacity: borderOpacity }}
        />

        <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto">
          <a href="#" aria-label={t("nav.home")}>
            {/* Light theme logo */}
            <Image
              src="/europea-logo.png"
              alt="Europea i Malmö AB"
              width={1080}
              height={360}
              priority
              className="h-6 sm:h-10 md:h-12 w-auto dark:hidden"
            />
            {/* Dark theme logo */}
            <Image
              src="/europea-logo-white.png"
              alt="Europea i Malmö AB"
              width={1080}
              height={360}
              priority
              className="h-6 sm:h-10 md:h-12 w-auto hidden dark:block"
            />
          </a>

          <div className="flex items-center gap-3">
            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center gap-6 xl:gap-8"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-sans text-body-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide rounded"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#kontakt"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-sans text-body-sm font-medium text-white bg-brand-gradient shadow-cta hover:shadow-[0_4px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-DEFAULT"
            >
              {t("nav.cta")}
            </a>

            <ThemeToggle />
            <LanguageSwitcher />

            <button
              className="lg:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center rounded"
              onClick={() => setMobileOpen(true)}
              aria-label={t("nav.openMenu")}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span
                aria-hidden="true"
                className="block w-6 h-px bg-text-primary"
              />
              <span
                aria-hidden="true"
                className="block w-4 h-px bg-text-primary"
              />
              <span
                aria-hidden="true"
                className="block w-6 h-px bg-text-primary"
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-bg-base flex flex-col px-8 pt-20 pb-12 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors rounded"
              aria-label={t("nav.closeMenu")}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <nav aria-label="Mobile primary" className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-display-md text-text-primary hover:text-blue-label transition-colors rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <motion.a
              href="#kontakt"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-sans font-medium text-white text-body-sm bg-brand-gradient shadow-cta min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-DEFAULT"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.cta")}
            </motion.a>

            <div className="mt-8">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
