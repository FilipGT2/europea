# 04 — Constraints (Hard Rules)

These are non-negotiable. Violating any of them fails the engagement.

## Preserve the existing product

1. This is a **content remaster, not a redesign**. Keep all existing UX/UI, layout
   patterns, design tokens, fonts, colors, spacing rhythm, Framer Motion animations,
   floating blobs, hover states, dark/light theming, and accessibility features.
2. New sections MUST visually match the existing design language. A new section should
   look like it was part of the original build. Reuse existing components and patterns
   (FloatingBlob, reveal animations, card styles, eyebrow labels).

## Internationalisation boundaries

3. Edit ONLY `public/locales/sv/common.json` and `public/locales/en/common.json`.
   Do NOT create, edit, delete, or reorder any other language folder
   (mk, de, fr, ar, ... — 31 others). A separate program translates from the English
   file, so English must be clean, correct, idiomatic, and structurally identical to
   Swedish.
4. `sv` and `en` must have **identical key trees**. Copy the provided
   `context/locale-sv.json` and `context/locale-en.json` verbatim into the project.
5. Swedish is the new default language. Keep all 33 languages selectable. Do not remove
   any language from `LANGUAGES`.

## Code & config rules

6. Tailwind stays on **v3** (no v4 upgrade). Minor v3 patches are fine.
7. Never put size limits or server-side config in `next.config.js`; handle such things
   in route handlers if ever needed (not expected in this engagement).
8. Do not hardcode user-facing strings in components — everything goes through `t()`.
9. Default Claude Code model for this work: `claude-sonnet-4-6`.
10. `next build` MUST pass before a phase is considered done.

## Content-fidelity rules

11. Use the provided locale text verbatim. Do not paraphrase, "improve", or invent
    copy. If something seems missing, flag it — do not fabricate.
12. Follow the new factual details exactly:
    - Address: `Amiralsgatan 20, 211 55 Malmö` (no "Plan 3").
    - Do NOT display the org number anywhere; the "Org.nr" field shows the company
      name `Europea i Malmö AB` (as in the how-to).
    - Phone: `+46 (0)40 661 41 80`. Email: `info@europea.se`.
    - Footer: `© 2026 Europea i Malmö AB`.
    - Three brands: T-Meeting, EaseAccess24, Infiniuum.
13. Leave the unused `Partnership` section OUT of the page (do not wire it in).

## Images

14. New sections that reference imagery (e.g. the History "innovation journey" photo)
    must render a graceful, styled **placeholder slot** with proper alt-text
    scaffolding — never a broken image and never a layout that collapses without the
    image. Real images will be supplied later.
