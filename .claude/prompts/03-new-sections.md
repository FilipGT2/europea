# Prompt 03 — Build New Sections + Reorder Page

Read `.claude/README-FOR-CLAUDE.md` and `.claude/context/02`, `03`, `04`, `06` and the
locale files. Phases 01–02 must be complete.

## Goal

Build the new content sections in the existing design language and assemble the final
page order. Also retire the sections whose content no longer exists in the new copy.

## Tasks

Create these new client components in `components/sections/` (see
`.claude/context/06-new-sections.md` for exact content, keys, and which existing
pattern to base each on):

1. `CoreCompetence.tsx` — `id="om-oss"` — 3 concept cards (`coreCompetence.*`).
2. `Evolution.tsx` — `id="utveckling"` — narrative + card (`evolution.*`).
3. `History.tsx` — `id="historia"` — image-note placeholder + 5-item timeline
   (`history.*`).
4. `Company.tsx` — `id="foretaget"` — 3 brand-role cards (`company.*`).
5. `Vision.tsx` (REPLACE the old Values-era usage) — `id="vision"` — vision card +
   conviction + practice callout with bolded `vision.practice_term` (`vision.*`).
6. `Europe.tsx` — `id="europa"` — narrative + card (`europe.*`).
7. `Founders.tsx` — `id="grundarna"` — narrative + blockquote on a tinted band
   (`founders.*`).
8. `Industry.tsx` — `id="forankring"` — single membership card (`industry.*`).

Modify existing components:

9. `Hero.tsx` — add the since-card + 2x2 static stat cards cluster (`hero.since_*`,
   `hero.stat1..4_*`), split-title rendering (`hero.title1` + emphasised `hero.titleEm`
   + `hero.title2`), eyebrow `hero.eyebrow`, CTAs to `#varumarken` and `#kontakt`.
10. `Contact.tsx` — switch to the new label/value fields (`contact.address_*`,
    `phone_*`, `email_*`, `org_*`), email `info@europea.se`, `id="kontakt"`.
11. `Footer.tsx` — `footer.copy` (already "© 2026 …" via locale).

Remove / unwire obsolete sections:

12. Delete or stop importing `Mission.tsx`, `Values.tsx`, and `Stats.tsx` — their
    content (`mission.*`, `values.*`, `stats.*`) is not in the new copy. Prefer deleting
    the files and removing imports. Keep `Partnership.tsx` on disk but DO NOT import it.

Reorder `app/page.tsx` to:

```
Navbar
Hero
CoreCompetence
Evolution
Brands
History
Company
Vision
Europe
Founders
Industry
Contact
Footer
```

## Constraints

- Every new section must look native to the existing design: same tokens, fonts,
  FloatingBlob usage, reveal animations, eyebrow labels, spacing rhythm. Alternate
  `bg-bg-base` / `bg-bg-surface` and add `border-t border-blue-border` to preserve
  rhythm.
- No new hex colors; no new fonts; no hardcoded user-facing text.
- Image slots (History photo, Infiniuum mark) = graceful styled placeholders with
  alt-text scaffolding; never broken images, never collapsing layouts.
- Accessibility: semantic headings, `<address>`, `<blockquote>`, `aria-hidden` on
  decorative elements, 44px targets.
- Tailwind v3. Model `claude-sonnet-4-6`.

## Definition of done

- All sections present and ordered as above; site reads in Swedish by default.
- Obsolete sections removed; Partnership not imported.
- `next build` passes; verify light + dark + keyboard navigation.

Produce a PLAN first and wait for approval before editing.
