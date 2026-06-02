# Europea — Content Remaster (Master Brief for Claude Code)

Read this file first, then read every file in `context/` before doing anything.

## What this project is

`europea` is an existing, finished **Next.js 14 (App Router)** marketing site for
**Europea i Malmö AB**, a Malmö-based accessibility group. The site is fully built:
design system, animations, dark/light mode, and accessibility are all done and must
be preserved exactly.

## What we are doing

This is a **content remaster**, not a redesign.

1. The site's current copy describes Europea as a "holding group with no public
   product" and lists two brands. The new positioning is **"a strong force in
   accessibility since 1993"** with **three brands** (T-Meeting, EaseAccess24,
   **Infiniuum** — new) and several new narrative sections.
2. The authoritative new copy is captured in `context/locale-sv.json` (Swedish) and
   `context/locale-en.json` (English). These are FINAL. Use them verbatim.
3. Swedish becomes the site's default language. English is the **source of truth**
   that a separate program will translate into the other 32 languages.

## The single most important architectural fact

**All visible text lives in `public/locales/{lang}/common.json`.** Components never
hardcode user-facing strings; they call `t('section.key')` via `react-i18next`.
So "changing the text" mostly means **rewriting the locale JSON and the key schema**,
then making components consume the new keys. The exception is `Portfolio.tsx`, which
currently has hardcoded English strings that must be moved into locale keys.

## Hard rules (see context/04-constraints.md for the full list)

- Preserve all existing UX/UI, design tokens, Framer Motion animations, dark/light
  theming, and accessibility features. New sections must match the existing visual
  language (fonts, colors, blobs, reveal animations, spacing rhythm).
- Only touch the **sv** and **en** locale files. Never edit other language folders.
- New sections need new components in the SAME style as the existing ones.
- Keep WCAG-level accessibility: skip link, ARIA, 44px targets, documented contrast,
  `HtmlLangSync` updating `<html lang>`.
- Never put size limits or server config in `next.config.js`; handle in route handlers.
- Default Claude Code model: `claude-sonnet-4-6`.

## Work order (one fresh session + /compact per phase)

1. `prompts/01-locale-schema-and-sv.md` — install the new key schema; write sv + en
   locale files; switch default language to sv.
2. `prompts/02-portfolio-dehardcode-and-infiniuum.md` — move Portfolio strings into
   locales; add the third brand (Infiniuum).
3. `prompts/03-new-sections.md` — build the new sections (Core competence, Evolution,
   History/timeline, Company, Vision, European presence, Founders, Industry) and
   reorder the page.
4. `prompts/04-facts-nav-metadata-qa.md` — expand the navbar to 6 links, update
   contact facts / footer / metadata, then QA + `next build`.

## Definition of done

- Site loads in Swedish by default; all 33 languages still selectable.
- Every section from the how-to is present, in order, in the existing design language.
- Three brand cards render (T-Meeting, EaseAccess24, Infiniuum).
- No hardcoded user-facing English remains in components.
- `next build` passes; light + dark + keyboard nav all verified.
