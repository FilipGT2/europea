# 01 — Tech Stack

## Framework & language

- **Next.js 14.2.29**, App Router (`app/` directory).
- **React 18**, **TypeScript 5**.
- Server/client split: section components are client components (`"use client"`)
  because they use hooks (`useTranslation`, Framer Motion).

## Styling

- **Tailwind CSS v3.4** (`tailwind.config.ts`, `postcss.config.js`).
  - Standing rule: stay on **v3** unless explicitly told v4. Do NOT upgrade to v4.
  - You MAY apply minor v3 updates/patches if needed; no major-version bump.
- Design tokens are defined as **CSS variables** in `app/globals.css` and mapped into
  Tailwind in `tailwind.config.ts` (colors `bg-*`, `blue-*`, `text-*`; fonts
  `font-display`, `font-sans`; sizes `display-xl/lg/md`; `brand-gradient`; `shadow-cta`).
- Fonts via `next/font/google`: **Cormorant Garamond** (display) + **DM Sans** (sans),
  exposed as `--font-cormorant` / `--font-dm-sans`.

## Animation

- **Framer Motion** (`framer-motion` / `motion`). Standard reveal pattern:
  `initial={{opacity:0, y:20-24}}` + `whileInView` + `viewport={{once:true, margin:"-60px"/"-80px"}}`
  + `transition={{duration:0.6-0.9, ease:[0.16,1,0.3,1]}}`.
- `components/ui/floating-blob.tsx` — atmospheric background blobs used in most sections.
- `components/ui/shape-landing-hero.tsx` — the hero's animated geometric background.

## Internationalisation

- **react-i18next** + **i18next** + **i18next-resources-to-backend**.
- Config in `lib/i18n.ts`. Translations loaded dynamically from
  `public/locales/{lang}/common.json` (single namespace: `common`).
- 33 languages defined in `LANGUAGES` (lib/i18n.ts). Default/fallback currently `en`.
- `components/providers/I18nProvider.tsx` wires it; `components/ui/HtmlLangSync.tsx`
  keeps `<html lang>` in sync; `components/nav/LanguageSwitcher.tsx` is the picker.
- Language preference persisted to `localStorage` under key `europea_lang`.

## Theming

- **next-themes** (`components/providers/ThemeProvider.tsx`), `attribute="class"`,
  `defaultTheme="light"`, `enableSystem={false}`. Dark mode = `.dark` class with its
  own CSS-variable values in `globals.css`.

## Tooling

- Package manager: pnpm (pnpm-lock.yaml present; package-lock.json also present).
  Prefer pnpm. Scripts: `dev`, `build`, `start`.
- Path alias `@/*` -> project root (see tsconfig.json).
