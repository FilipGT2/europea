# 06 — New Sections Specification

For each new/changed section: what it contains, which existing pattern to base it on,
and the keys it uses. All sections are client components in `components/sections/`,
follow `context/03-conventions.md`, and decorate with 2–3 `<FloatingBlob>`s.

Alternate background tone between consecutive sections (`bg-bg-base` vs `bg-bg-surface`)
to preserve the existing visual rhythm. Add `border-t border-blue-border` where the
current page separates sections.

---

## 1. Hero (MODIFY existing Hero.tsx)

- Keep `HeroGeometric` background and scroll indicator.
- Eyebrow: `hero.eyebrow`. Title: `hero.title1` + emphasised `hero.titleEm` + `hero.title2`.
  Subtitle: `hero.subtitle`. CTAs: `hero.cta_primary` (-> `#brands`), `hero.cta_secondary`
  (-> `#contact`).
- Add the right-hand cluster from the how-to: a gradient **since-card**
  (`hero.since_year`, `hero.since_label`) and a 2x2 grid of **static stat cards**
  (`hero.stat1..4_number` + `_label`). Use `brand-gradient` for the since-card and
  `bg-bg-card border border-blue-border` for the stat cards. These are static text,
  not animated counters (values include "SE & NO" and "WCAG").
- If retrofitting into `HeroGeometric` is awkward, render the cluster as a sibling block
  within the Hero `<section>` in a responsive 2-col grid (stack on mobile).

## 2. CoreCompetence (NEW — base on Values.tsx 3-card grid)

- Eyebrow `coreCompetence.label`, heading `coreCompetence.heading`, lead `...lead`.
- Three cards, each with a tag, name, description:
  card1 (`card1_tag/name/desc`), card2, card3. Use the colored top-accent card style
  (the how-to uses teal/accent/coral accents). Since the design system is blue-centric,
  use the existing `brand-gradient` / `blue-*` accents rather than introducing new
  colors — keep visual variety via subtle differences, not new hues.
- `id="om-oss"`.

## 3. Evolution (NEW — base on a centered narrative + card)

- Eyebrow `evolution.label`, heading `evolution.heading`, lead `...lead`.
- A `bg-bg-card border border-blue-border rounded` block containing `evolution.body1`
  and `evolution.body2` as two paragraphs.
- `id="utveckling"`.

## 4. Brands (NEW — base on existing Portfolio.tsx CompanyCard)

- Eyebrow `brands.label`, heading `brands.heading`, lead `...lead`.
- THREE brand cards using the CompanyCard pattern (or a faithful adaptation):
  - **T-Meeting**: `brands.tmeeting_tag/name/desc`, plus the highlighted RTT callout
    (`brands.tmeeting_rtt_title` + `brands.tmeeting_rtt_body`), link to
    `https://www.tmeeting.se`, url label `brands.tmeeting_url`. Logo `/tmeeting.jpg`.
  - **EaseAccess24**: `brands.ease_*`, link `https://www.easeaccess24.com`,
    logo `/easeaccess24.svg`.
  - **Infiniuum** (NEW brand, no asset yet): `brands.infiniuum_*`, link
    `https://infiniuum.com`. Provide a styled text/wordmark placeholder for the logo
    slot (no broken image).
- This Brands section REPLACES the old Portfolio content. See prompt 02.
- `id="varumarken"`.

## 5. History (NEW — timeline)

- Eyebrow `history.label`, heading `history.heading`, lead `...lead`.
- An image-note placeholder card (`history.image_note_title` + `..._body`) representing
  the future historical photo — styled slot, alt-text scaffolding, no broken image.
- A vertical timeline with FIVE items, each a year + title + body:
  `history.item1..5_year/_title/_body`. Base the styling on the how-to's timeline
  (year column + text column, divider between items) but using existing tokens.
- `id="historia"`.

## 6. Company (NEW — base on Portfolio/Values card grid)

- Eyebrow `company.label`, heading `company.heading`, lead `...lead`.
- Three concise brand-role cards: `company.tmeeting_*`, `company.ease_*`,
  `company.infiniuum_*` (tag + name + desc each). Lighter weight than the Brands
  section (no links/logos needed) — these describe each brand's role in the group.
- `id="foretaget"`.

## 7. Vision (NEW — base on Mission.tsx gradient-card feel)

- Eyebrow `vision.label`, heading `vision.heading`, lead `...lead`.
- A primary card with `vision.vision_label` + `vision.vision_body` (display serif,
  larger), then a divider and `vision.belief_label` + `vision.belief_body1/2`.
- A separate highlighted callout: `vision.practice_label` + `vision.practice_body`,
  with `vision.practice_term` ("Komplett Kommunikation") emphasised in `<strong>`.
- `id="vision"`.

## 8. Europe (NEW — centered narrative + card)

- Eyebrow `europe.label`, heading `europe.heading`, lead `...lead`.
- A `bg-bg-card` block with `europe.body1` + `europe.body2`.
- `id="europa"`.

## 9. Founders (NEW — narrative + quote, on a surface-tinted band)

- Eyebrow `founders.label`, heading `founders.heading`, lead `...lead`.
- A card with `founders.body1/2/3`.
- A highlighted blockquote card with `founders.quote` (italic display styling, left
  accent border like the how-to). Add typographic quotes around the quote in markup.
- Place on a `bg-bg-surface` band (bordered top+bottom) to match the how-to's tinted
  founders band.
- `id="grundarna"`.

## 10. Industry (NEW — single membership card)

- Eyebrow `industry.label`, heading `industry.heading`, lead `...lead`.
- One card: tag `industry.membership_tag`, name `industry.membership_name`,
  body `industry.membership_body`. Base on the how-to's `subsidiary-card` layout.
- `id="forankring"`.

## 11. Contact (MODIFY existing Contact.tsx)

- Keep the decorative coordinates/map-pin visual.
- Heading `contact.heading`, lead `contact.lead`.
- Replace the address block fields with: `contact.address_label/value`,
  `phone_label/value`, `email_label/value`, `org_label/value`. Email is now
  `info@europea.se`; keep `mailto:` + `tel:` links. Use the label/value pairs like the
  how-to's contact list.
- Keep brand quick-links if desired, but they are not required by the new copy; if kept,
  point T-Meeting/EaseAccess24 links at their sites. Do not invent new link text beyond
  the locale keys.
- `id="kontakt"`.

## 12. Footer (MODIFY)

- `footer.copy` = "© 2026 Europea i Malmö AB". Keep the existing footer styling; the
  brand quick-links row from the how-to is optional and may be added using the brand
  names already in `brands.*` if desired.

---

## Page order in app/page.tsx (final)

Navbar → Hero → CoreCompetence → Evolution → Brands → History → Company → Vision →
Europe → Founders → Industry → Contact → Footer.
