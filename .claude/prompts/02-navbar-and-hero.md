# Prompt 02 — Navbar Fix + Hero Refinement

Read `.claude/context/01`, `02`, `03` (Hero section), `04`, `05`. Phase 01 done.

## Goal

Fix the duplicate contact control in the header, and rebuild the hero typography and
stat cluster on the new scale.

## Tasks

### Navbar (`components/nav/Navbar.tsx`)

1. Remove the `{ label: t("nav.contact"), href: "#kontakt" }` entry from the `links`
   array. Desktop nav becomes 5 links + the filled "Kontakta oss" CTA button.
2. The mobile menu uses the same `links` array plus its own CTA button — confirm the
   "Kontakt" link disappears from the mobile list and the mobile CTA remains prominent.
3. Optionally restore slightly more generous link spacing now there's room
   (`gap-6 xl:gap-8`). Keep logo, theme toggle, language switcher, scroll opacity,
   hamburger, and focus behavior intact.
4. Confirm no header element links to `#kontakt` twice.

### Hero (`components/sections/Hero.tsx`)

5. H1 → `font-display text-display-xl`; keep three-part title and the italic-gradient
   emphasis on `titleEm`.
6. Since-card: REMOVE hardcoded `text-[4.5rem] md:text-[5.5rem]`. Big year uses
   `font-display text-display-xl` (or `display-lg` if it overpowers the H1 — pick the
   one that looks balanced). Card = Feature card on `bg-brand-gradient`, white text,
   `rounded-2xl`, `p-7 md:p-8`.
7. Stat tiles → Utility cards per context/02: `p-6`, number `font-display text-display-sm`,
   label `text-eyebrow uppercase`. 2x2 grid; align cluster height to the since-card on
   desktop.
8. CTAs → primary gradient + secondary outline per button standard; hrefs `#varumarken`
   and `#kontakt`.
9. Hero stat cluster wrapper padding `py-12 md:py-16` (not the full section padding).

## Constraints

- Apply the design tokens/standards exactly; no per-element improvisation.
- a11y intact (44px targets, focus rings, aria-hidden on decorative bits).
- Do not touch locales or i18n. Tailwind v3. `pnpm build` passes.

## Definition of done

- Exactly one contact control in the header (the CTA button), desktop + mobile.
- Hero reads balanced: H1 ≤ 4.5rem, stat tiles consistent, since-card on the card
  standard. Verified visually in light + dark at 375 / 768 / 1280px.

Produce a PLAN first and wait for approval before editing.
