# Prompt 02 — De-hardcode Portfolio → Brands Section (3 brands incl. Infiniuum)

Read `.claude/README-FOR-CLAUDE.md` and `.claude/context/02`, `03`, `04`, `06` and the
locale files before starting. Phase 01 must be complete (locales installed, default = sv).

## Goal

Convert the existing hardcoded `components/sections/Portfolio.tsx` into a fully
i18n-driven **Brands** section with THREE brand cards (T-Meeting, EaseAccess24, and the
new Infiniuum), keeping the existing CompanyCard design language.

## Tasks

1. Remove ALL hardcoded user-facing English from `Portfolio.tsx`:
   - Section label "Portfolio" → `t('brands.label')`.
   - Heading "The companies we build." → `t('brands.heading')`.
   - Add a lead paragraph → `t('brands.lead')`.
   - The two existing cards' `tag`/`headline`/`description`/`capabilities`/`linkLabel`
     → corresponding `brands.*` keys.
   - "Est." / "Part of Europea Group" labels: either move to new `brands.est_label` /
     `brands.group_label` keys (add to BOTH sv and en, identical trees) or remove if the
     new card design drops them. If you add keys, update locale-sv.json and
     locale-en.json equivalents in the project files and report the additions.
2. Add the **third brand card, Infiniuum**, using `brands.infiniuum_*`, link
   `https://infiniuum.com`. There is no Infiniuum logo asset; render a styled wordmark/
   text placeholder in the logo slot (no broken image, stable layout).
3. Add the **T-Meeting RTT callout** inside the T-Meeting card:
   `brands.tmeeting_rtt_title` + `brands.tmeeting_rtt_body`, styled as a highlighted
   note (left accent border, `blue-subtle` background) consistent with the design tokens.
4. Update brand links/labels:
   - T-Meeting → `https://www.tmeeting.se`, label `t('brands.tmeeting_url')`,
     logo `/tmeeting.jpg`.
   - EaseAccess24 → `https://www.easeaccess24.com`, label `t('brands.ease_url')`,
     logo `/easeaccess24.svg`.
   - Infiniuum → `https://infiniuum.com`, label `t('brands.infiniuum_url')`.
5. Give the section `id="varumarken"` (used by the nav and hero CTA).
6. Rename the component/file to `Brands.tsx` (export `Brands`) OR keep `Portfolio.tsx`
   but ensure `app/page.tsx` imports remain consistent. Prefer renaming to `Brands.tsx`
   for clarity; update the import in `page.tsx` accordingly.

## Constraints

- Preserve the CompanyCard visual design, hover states, animations, and accessibility.
- Use only existing design tokens; no new hex colors.
- The "Est." founded-year meta may be kept per-card if it fits the new copy
  (T-Meeting 1993, EaseAccess24 2025, Infiniuum — no year; hide the year row when a
  brand has no founded year rather than showing an empty value).
- 44px targets, `aria-hidden` on decorative glyphs, `target="_blank" rel="noopener noreferrer"`.

## Definition of done

- Brands section renders three cards, fully from locale keys, in Swedish by default.
- No hardcoded user-facing English remains in the section.
- T-Meeting card shows the RTT callout. Infiniuum card has a clean logo placeholder.
- `next build` passes.

Produce a PLAN first and wait for approval before editing.
