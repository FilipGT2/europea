# 03 — Section-by-Section Adjustments

Most sections just need the tokens (context/01) and component standards (context/02)
applied. This file calls out the specific known issues per section. Section order and
content do NOT change.

Page order (unchanged): Hero → CoreCompetence → Evolution → Brands → History →
Company → Vision → Europe → Founders → Industry → Contact → Footer.

## Hero

- H1: `font-display text-display-xl` (now max 4.5rem, not 8rem). Keep the three-part
  title (title1 + emphasised titleEm + title2) and the italic-gradient emphasis on
  `titleEm`.
- Since-card: remove hardcoded `text-[4.5rem] md:text-[5.5rem]`; the big year uses
  `font-display text-display-xl` (or `display-lg` if xl feels too large beside the H1 —
  verify visually). The card itself is a Feature card on `bg-brand-gradient`
  (white text), `rounded-2xl`, `p-7 md:p-8`.
- Stat tiles (30+, 3, SE & NO, WCAG): Utility cards, `p-6`, number `text-display-sm`,
  label `text-eyebrow`. Ensure the 2x2 grid aligns to the since-card height on desktop.
- CTAs: primary gradient + secondary outline per button standard; hrefs `#varumarken`
  / `#kontakt`.
- Reduce vertical heaviness: the hero stat cluster section padding should be
  `py-12 md:py-16` (it sits right under the fold), not the full `py-20 md:py-28`.

## CoreCompetence (om-oss)

- 3 Feature cards, equal height (`items-stretch` / `h-full`). Apply card standard.
  Card title `display-sm`, body `body-sm`, tag pill standard. `gap-8`.

## Evolution (utveckling)

- Narrative section, `max-w-4xl`. The two-paragraph card uses Feature card shell,
  `p-7 md:p-8`. Body paragraphs `text-body` with comfortable `mb-4` between them.

## Brands (varumarken)

- Three brand Feature cards. These are the richest cards; keep the two-column
  (content + logo panel) layout but normalize padding to the card standard and radius
  to `rounded-2xl`. Logo panel and content panel share consistent internal padding.
- T-Meeting RTT callout: a nested highlighted block — `bg-blue-subtle border-l-2
  border-blue-DEFAULT rounded-lg p-4`, title `text-caption uppercase text-blue-label`,
  body `text-body-sm`. Keep it visually subordinate to the card body.
- Infiniuum wordmark placeholder: centered `font-display text-display-md` with
  `brand-gradient` clip — clean, intentional, not broken.
- Equalize card widths; the three cards should read as a set.

## History (historia)

- Apply the timeline standard from context/02. The image-note placeholder is a
  Feature-card-styled block with `aspect-[16/9]`. Years use `display-sm text-blue-label`.
  Tighten item rhythm to `py-6`.

## Company (foretaget)

- 3 lighter Feature cards (no logos/links). Title `display-sm`, body `body-sm`.
  Same `gap-8`, equal height.

## Vision (vision)

- The big vision statement uses `font-display text-display-lg` (not display-xl — it is
  not the hero). Conviction paragraphs `text-body`. The "Komplett Kommunikation"
  practice callout is a highlighted block (same style as the RTT callout) with the term
  in `<strong>`.

## Europe (europa)

- Narrative, `max-w-4xl`. Two-paragraph Feature card, `p-7 md:p-8`.

## Founders (grundarna)

- Keep the tinted band (bracketed by base-toned neighbors). Body card `p-7 md:p-8`.
- The blockquote: `font-display text-display-sm italic`, left accent border
  (`border-l-2 border-blue-DEFAULT pl-5`), with typographic quotes in markup.

## Industry (forankring)

- Single membership Feature card, full-width within `max-w-6xl`, `p-7 md:p-8`.

## Contact (kontakt)

- The address/phone/email/org block: use `<dl>` with consistent label/value rhythm.
  Labels `text-eyebrow uppercase text-text-secondary`, values `text-body`.
  `tel:`/`mailto:` links keep 44px targets and underline-on-hover.
- Keep the decorative coordinates/map-pin visual but ensure it doesn't dwarf the
  content column — balance the two columns.

## Footer

- `text-caption text-text-tertiary`. Keep it minimal. Optional brand quick-links row
  using brand names, styled as small inline links.

## Cross-cutting

- Every section heading: `display-md`. Every eyebrow: `text-eyebrow`. Every lead:
  `text-body-lg`. Every card: the two-type standard. No exceptions without a reason.
