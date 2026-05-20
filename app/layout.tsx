import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { HtmlLangSync } from '@/components/ui/HtmlLangSync'
import { SkipLink } from '@/components/ui/SkipLink'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Europea i Malmö AB — Technology that brings people closer',
  description:
    'Europea is a Malmö-based holding group building a more inclusive world through technology. Parent company of T-Meeting Global AB and EaseAccess24.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} bg-bg-base text-text-primary font-sans antialiased`}
      >
        <I18nProvider>
          <HtmlLangSync />
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <SkipLink />
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
