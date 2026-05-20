'use client'

import { useTranslation } from 'react-i18next'

export function SkipLink() {
  const { t } = useTranslation()
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-navy focus:border focus:border-blue-DEFAULT focus:rounded focus:text-sm focus:font-medium focus:shadow-lg"
    >
      {t('a11y.skipToMain')}
    </a>
  )
}
