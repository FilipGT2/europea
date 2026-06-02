import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Script from 'next/script'
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
  title: 'Europea i Malmö AB — En stark aktör inom tillgänglighet sedan 1993',
  description:
    'Europea i Malmö AB utvecklar och driver verksamheter inom tillgänglig kommunikation, digital tillgänglighet och användarnära tekniklösningar. Grundat 1993. Tre varumärken: T-Meeting, EaseAccess24 och Infiniuum.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" suppressHydrationWarning>
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
        <Script src="https://widget.easeaccess24.com/sdk.js?key=vfSYfCsUTp" strategy="afterInteractive" />
      </body>
    </html>
  )
}
