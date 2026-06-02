# 03 — Conventions

## Component conventions

- Section components live in `components/sections/`, are client components, and start
  with `"use client"`.
- Each section is a default-exported function component named after its concept
  (e.g. `export default function Vision()`).
- Wrap each section in a `<section>` with an `id` matching the nav anchor
  (e.g. `id="vision"`), plus the standard classes:
  `relative overflow-hidden bg-bg-base py-28 md:py-36` and a top border where the
  existing rhythm uses one (`border-t border-blue-border`). Alternate `bg-bg-base`
  and `bg-bg-surface` between sections the way the current page does.
- Inner container: `relative z-10 max-w-7xl mx-auto px-6 md:px-10` (use `max-w-4xl`
  for centered narrative blocks like Vision/Partnership-style sections).

## Text & i18n conventions

- NEVER hardcode user-facing text in a component. Always `t('section.key')`.
- Keys are namespaced by section: `vision.heading`, `history.item1_title`, etc.
- `sv` and `en` must have **identical key trees**. The provided locale files already
  guarantee this — copy them verbatim.
- For the hero title that mixes normal + emphasised words, the schema splits it into
  `hero.title1` + `hero.titleEm` (the italic/blue emphasised word) + `hero.title2`.
  Render `titleEm` inside the existing emphasis styling.

## Typography & color conventions

- Headings: `font-display` + `text-display-md` (section headings) / `text-display-lg`
  (hero/quote). Body: `font-sans`, `text-text-secondary`, `leading-relaxed`.
- Eyebrow/label: `font-sans text-[11px] uppercase tracking-[0.2em] text-blue-label`.
- Use ONLY existing tokens: `text-text-primary/secondary/tertiary`, `bg-bg-base/surface/card`,
  `blue-DEFAULT/muted/subtle/border/glow/label`, `brand-gradient`, `shadow-cta`.
  Do not introduce new hex colors.

## Animation conventions

- Reuse the standard reveal: `initial={{opacity:0,y:20-24}}`, `whileInView`,
  `viewport={{once:true, margin:"-60px"}}`, `transition={{duration:0.7, ease:[0.16,1,0.3,1]}}`.
- Stagger lists with `delay: i * 0.1`–`0.12`.
- Decorate sections with 2–3 `<FloatingBlob>`s, mirroring the densities used by
  Portfolio/Contact/Values. Blobs are always `aria-hidden`.

## Accessibility conventions

- Every interactive element ≥ 44px touch target.
- Decorative glyphs/arrows get `aria-hidden="true"`.
- Use semantic elements: `<section>`, `<h2>/<h3>`, `<address>` for contact, `<nav>`
  with `aria-label`, `<blockquote>` for quotes.
- Maintain documented contrast (`blue-label` is the AA-safe label color in both themes).
- Keep `SkipLink`, `HtmlLangSync`, ARIA labels intact.

## Markdown / code style for this engagement

- Clean, copy-pasteable code. Inline comments only where logic is non-obvious.
- No decorative emoji in code, docs, or commit messages.
- Commit in logical phases matching the prompt files.
