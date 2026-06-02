# 07 — Future Roadmap

Out of scope for THIS engagement, but useful context so decisions don't block later work.

## Images (coming later)

- The client will supply real images for:
  - The History "innovation journey" photo (digital/mobile video phones, 1993–2010).
  - Possibly founders, brand visuals, and an Infiniuum logo/wordmark.
- Build all image slots as graceful, styled placeholders now with correct alt-text
  scaffolding and stable layout, so dropping in real assets later is trivial. When
  alt text is needed, prefer descriptive Swedish/English from the relevant locale keys
  or add new `*_alt` keys to both sv and en if necessary (keep trees identical).

## Translation pipeline (handled externally)

- English (`public/locales/en/common.json`) is the source of truth. A separate program
  translates it into the other 31 languages. Therefore:
  - Keep English idiomatic, correct, and structurally identical to Swedish.
  - Whenever a key is added/renamed, update BOTH sv and en, and avoid embedding markup
    inside translatable strings where possible (prefer split keys or component-side
    emphasis, as done for the hero title and the "Komplett Kommunikation" term).

## Possible later sections / features

- The unused `Partnership.tsx` (R&D / PTS / events) may be revived if that content
  returns to the brief. Left out for now per the agreed scope.
- A dedicated Infiniuum logo asset and brand card refinements once branding lands.
- SEO/metadata per-language (`app/layout.tsx` metadata is currently single-language).

## Things intentionally NOT changed now

- Build/deploy pipeline, hosting, analytics.
- Color system, fonts, animation library.
- Any non-sv/non-en locale file.
