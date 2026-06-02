# 04 — Navbar Contact-Control Fix

## The problem

The desktop header currently renders TWO controls that both link to `#kontakt`:

1. A plain nav text link "Kontakt" — the 6th item in the `links` array in
   `components/nav/Navbar.tsx` (`{ label: t("nav.contact"), href: "#kontakt" }`).
2. A filled gradient CTA button "Kontakta oss" (`t("nav.cta")`, href `#kontakt`).

Two controls, same destination = redundant and visually noisy.

## The fix (decided with client)

KEEP the filled CTA button. REMOVE the plain "Kontakt" text link.

### Desktop nav

- Remove the `{ label: t("nav.contact"), href: "#kontakt" }` entry from the `links`
  array. The desktop nav becomes 5 text links (Om oss, Varumärken, Utveckling, Vision,
  Europa) + the filled "Kontakta oss" CTA button. This also gives the remaining links
  more breathing room.

### Mobile menu

- The mobile menu renders the same `links` array AND has its own CTA button at the
  bottom. Removing the entry from `links` automatically drops "Kontakt" from the mobile
  link list, leaving the mobile CTA button as the single contact control there too.
  Verify the mobile CTA button is present and prominent after the change.

## Constraints

- Keep `nav.contact` in the locale files (do not edit locales). It simply stops being
  referenced by the navbar. Other code/tests may still reference the key; leaving it in
  place is harmless.
- Keep all other navbar behavior: logo, theme toggle, language switcher, scroll-driven
  background/border opacity, hamburger open/close, focus management.
- The CTA button keeps `min-h-[44px]` and its focus-visible ring.
- After the change, confirm no remaining element links to `#kontakt` twice in the
  header.

## Optional polish (only if it looks better)

- With 5 links + 1 button, you may slightly increase nav link spacing back toward the
  original generous gap now that there's room (e.g. `gap-6 xl:gap-8`). Keep tokens
  consistent with the rest of the design pass.
