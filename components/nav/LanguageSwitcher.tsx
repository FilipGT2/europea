'use client'

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { LANGUAGES } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0]

  // Close on outside click
  React.useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [])

  // Close on Escape
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  function handleSelect(code: string) {
    i18n.changeLanguage(code)
    localStorage.setItem('europea_lang', code)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.languageSwitcher')}
        className="relative flex items-center gap-1.5 h-9 px-2.5 rounded-lg border border-blue-border text-text-secondary hover:text-text-primary hover:border-blue-DEFAULT hover:bg-blue-subtle transition-all duration-200 font-sans text-caption font-medium"
      >
        <span aria-hidden="true" className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg
          aria-hidden="true"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2 3.5 5 6.5 8 3.5" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t('nav.languageSwitcher')}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-2 w-52 max-h-72 overflow-y-auto rounded-2xl border border-blue-border bg-bg-base shadow-lg z-[200] py-1"
          >
            {LANGUAGES.map((lang) => (
              <li key={lang.code} role="option" aria-selected={lang.code === i18n.language}>
                <button
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-left font-sans text-body-sm transition-colors duration-150
                    ${lang.code === i18n.language
                      ? 'text-text-primary bg-blue-subtle font-medium'
                      : 'text-text-secondary hover:text-text-primary hover:bg-blue-subtle'
                    }`}
                >
                  <span aria-hidden="true" className="text-base leading-none">{lang.flag}</span>
                  <span>{lang.label}</span>
                  {lang.code === i18n.language && (
                    <svg
                      aria-hidden="true"
                      className="ml-auto w-3.5 h-3.5 text-blue-DEFAULT"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 7l3.5 3.5L12 3" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
