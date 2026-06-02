# 05 — Content & i18n Mapping

This file explains the new locale key schema and how each key maps to the page. The
final text already lives in `context/locale-sv.json` and `context/locale-en.json` —
copy those verbatim into `public/locales/sv/common.json` and
`public/locales/en/common.json`.

## Top-level key groups (new schema)

| Group            | Drives section / component                    |
|------------------|-----------------------------------------------|
| `nav`            | Navbar links + a11y labels + CTA              |
| `hero`           | Hero: eyebrow, split title, subtitle, CTAs, since-card, 4 stat cards |
| `coreCompetence` | "Tillgänglighet som kärnkompetens" (3 concept cards) |
| `evolution`      | "Vår utveckling" (lead + 2 body paragraphs in a card) |
| `brands`         | "Verksamheter inom Europea" (3 brand cards, incl. T-Meeting RTT note) |
| `history`        | "Historia" timeline (image-note + 5 timeline items) |
| `company`        | "Företaget bakom våra verksamheter" (3 brand-role cards) |
| `vision`         | "Vision" (vision card + conviction + practice/Komplett Kommunikation) |
| `europe`         | "Europeisk närvaro" (lead + 2 body paragraphs) |
| `founders`       | "Grundarna" (lead + 3 body paragraphs + quote) |
| `industry`       | "Bransch & förankring" (membership card)      |
| `contact`        | "Kontakt" (label/heading/lead + address/phone/email/org fields) |
| `footer`         | Footer copyright                              |
| `a11y`           | Skip-link text                                |

## Important key-shape notes

- **Hero split title:** `hero.title1` (plain) + `hero.titleEm` (emphasised word, render
  in italic/blue like the original hero emphasis) + `hero.title2` (plain). Example
  renders as: "A strong force in *accessibility* since 1993".
- **Hero numeric cards:** `hero.since_year`, `hero.since_label`, and
  `hero.stat1..4_number` / `hero.stat1..4_label`. These are display strings, not
  animated counters (values like "30+", "SE & NO", "WCAG" are not pure numbers, so
  render them as static cards — see context/06).
- **Brands RTT note:** `brands.tmeeting_rtt_title` + `brands.tmeeting_rtt_body` render
  as the highlighted callout inside the T-Meeting card.
- **Vision term:** `vision.practice_term` = "Komplett Kommunikation" should be rendered
  emphasised (bold) inside `vision.practice_body`. Use an interpolation or split so the
  term is visually emphasised without breaking translation. Recommended approach:
  keep `practice_body` as the full sentence and `practice_term` as the substring to
  bold; in the component, split on the term and wrap it in `<strong>`. (Acceptable
  fallback: render `practice_body` plain if the term is absent.)
- **Founders quote:** `founders.quote` rendered in a `<blockquote>` with the existing
  italic display styling. The provided text omits the surrounding quotation marks; add
  typographic quotes in the component if the original design used them.

## Keys removed from the old schema

`mission.*` and `values.*` and `partnership.*` and `stats.*` are not used by the new
page. The provided locale files already exclude them. When you replace sv/en, those
keys simply won't exist anymore — that is intended.

## Language default switch

In `lib/i18n.ts`, change the default so the site loads in Swedish:
- `getInitialLanguage()` should return `"sv"` when there is no stored preference and no
  matching browser language (i.e. replace the final `return "en"` default with `"sv"`,
  and consider returning `"sv"` for the SSR branch too for consistent first paint).
- Keep `fallbackLng` as `"en"` (English remains the safety net + translation source).
- Do not remove browser-language detection or the `localStorage` override.
