# Prompt 03 — Apply Component Standards Across All Sections

Read `.claude/context/01`, `02`, `03`, `05`. Phases 01–02 done.

## Goal

Bring every remaining section onto the type scale, card standards, spacing rhythm, and
two-radius rule. This is the bulk of the "cards and components sizing" fix.

## Tasks

Apply the section shell + card standards (context/02) and the per-section notes
(context/03) to each of these, in order:

1. `CoreCompetence.tsx` — 3 equal-height Feature cards, `gap-8`.
2. `Evolution.tsx` — `max-w-4xl`, two-paragraph Feature card.
3. `Brands.tsx` — three brand Feature cards normalized to `rounded-2xl` + `p-7 md:p-8`;
   RTT callout as the standard highlighted block; Infiniuum wordmark clean; equalize
   card widths.
4. `History.tsx` — timeline standard; image-note placeholder as `aspect-[16/9]` Feature
   block; years `display-sm text-blue-label`; item rhythm `py-6`.
5. `Company.tsx` — 3 lighter Feature cards, equal height.
6. `Vision.tsx` — big statement `display-lg`; conviction `body`; practice callout as
   highlighted block with `<strong>` term.
7. `Europe.tsx` — `max-w-4xl`, two-paragraph Feature card.
8. `Founders.tsx` — keep tinted band; body card `p-7 md:p-8`; blockquote `display-sm
   italic` with left accent border + typographic quotes.
9. `Industry.tsx` — single membership Feature card.
10. `Contact.tsx` — `<dl>` label/value rhythm (labels `text-eyebrow`, values `text-body`);
    balance the two columns so the decorative coordinates don't dwarf the content.
11. `Footer.tsx` — `text-caption`, minimal.

For EVERY section also:
- Section shell: `py-20 md:py-28`, `max-w-6xl` (or `max-w-4xl` for narrative-only),
  header rhythm (eyebrow `mb-4`, heading `display-md mb-5`, lead `body-lg mb-12 md:mb-16`).
- Replace all radii with `rounded-2xl` (cards) / `rounded-lg` (controls/tags).
- Replace ad hoc paddings with the card standard.
- Keep alternating `bg-bg-base` / `bg-bg-surface` and the Founders band bracketing.
- Keep 1–2 FloatingBlobs per section; don't add more.

## Constraints

- No content/copy edits. No locale/i18n changes. Tailwind v3.
- Apply tokens globally; do not reintroduce per-section bespoke sizes.
- a11y intact throughout.
- `pnpm build` passes.

## Definition of done

- All sections share one type scale, two radii, consistent card padding + rhythm.
- No element feels oversized or tiny; cards read as coherent sets.
- Verified visually in light + dark at 375 / 768 / 1280px.

Produce a PLAN first and wait for approval before editing. Given the breadth, the plan
should list each file and the specific classes being normalized so the chat reviewer
can spot-check.
