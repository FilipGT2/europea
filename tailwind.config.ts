import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base:    '#080e24',
          surface: '#0d1535',
          card:    '#111c42',
        },
        blue: {
          DEFAULT: '#2563EB',
          muted:   '#1E40AF',
          subtle:  'rgba(37,99,235,0.12)',
          border:  'rgba(37,99,235,0.2)',
          glow:    'rgba(37,99,235,0.35)',
        },
        navy: {
          DEFAULT: '#0F1D6E',
          deep:    '#080e24',
        },
        text: {
          primary:   '#f0ede6',
          secondary: '#8fa8d4',
          tertiary:  '#4a6080',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)',   'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 8rem)',  { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 5rem)',  { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3vw, 3rem)', { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #0F1D6E 100%)',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'line-grow': 'lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        fadeUp:   { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        lineGrow: { from: { scaleX: '0' }, to: { scaleX: '1' } },
      },
      boxShadow: {
        'cta': '0 4px 20px rgba(37,99,235,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
