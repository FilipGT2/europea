# Europea — Design Refinement Pass (Master Brief for Claude Code)

Read this first, then read every file in `context/` before doing anything.

## What this engagement is

The `europea` Next.js 14 site already has its final content (Swedish default, three
brands — T-Meeting, EaseAccess24, Infiniuum — and all new sections). That work is done
and committed. This engagement is a **design-system refinement pass**: make the UI
look more modern, fix the typography scale (some text reads too big, some too small),
and standardize card/component sizing, spacing, and hierarchy. Plus one specific
navbar fix.

This is a **refinement, not a redesign**. Decisions already locked with the client:

- KEEP the blue brand identity (adjust tones/contrast only, no new color direction).
- KEEP the font pairing: Cormorant Garamond (display) + DM Sans (body). Fix sizes and
  weights, do not swap fonts.
- KEEP all content, copy, section order, and all 33 languages. Do NOT touch locale files.
- KEEP all accessibility features (focus rings, skip link, 44px targets, contrast,
  HtmlLangSync, semantic structure).
- Target aesthetic: clean and modern. Calmer type scale, consistent cards, more
  generous and consistent spacing, clearer hierarchy.

## The two headline problems to solve

1. **Type scale is too extreme.** `display-xl` clamps up to 8rem and the hero "since"
   number is hardcoded at 4.5–5.5rem, while labels sit at 11px. The gap between
   biggest and smallest is too wide, which is what "some too big, some too small"
   means. Fix: a recalibrated, modern type scale (see context/01).
2. **Cards/components are inconsistently sized.** Padding, radius, min-heights, and
   internal spacing vary section to section. Fix: a single set of card/button/section
   standards (see context/02) applied everywhere.

## Plus one specific bug

3. **The header has two contact controls** both pointing to `#kontakt`: a plain nav
   text link "Kontakt" AND a filled CTA button "Kontakta oss". Remove the redundancy:
   keep the filled CTA button, remove the plain "Kontakt" link from the desktop nav
   (and from the mobile menu link list, since the mobile menu also has the CTA button).
   See context/04.

## Work order (fresh session + /compact per phase, commit after each)

1. `prompts/01-design-tokens.md` — install the new type scale, spacing, and radius
   tokens in `tailwind.config.ts` + `globals.css`. Foundation for everything else.
2. `prompts/02-navbar-and-hero.md` — fix the navbar duplicate control; rebuild the
   hero type + stat cluster on the new scale.
3. `prompts/03-cards-and-sections.md` — apply the component standards across all
   sections (cards, headings, eyebrows, spacing rhythm).
4. `prompts/04-qa-and-polish.md` — responsive + dark-mode + a11y QA, final polish,
   `pnpm build`.

## Definition of done

- A calmer, modern, consistent type scale; no single element feels oversized or tiny.
- All cards share consistent padding, radius, and internal rhythm.
- Exactly ONE contact control in the header.
- Blue identity and font pairing unchanged; content unchanged; a11y intact.
- `pnpm build` passes; verified in light + dark at mobile/tablet/desktop widths.
