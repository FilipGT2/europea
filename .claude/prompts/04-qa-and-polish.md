# Prompt 04 — Responsive / Dark-Mode / A11y QA + Final Polish

Read `.claude/context/01`, `02`, `05`. Phases 01–03 done.

## Goal

Final consistency, responsive, dark-mode, and accessibility pass. Catch anything the
per-phase work missed and polish the whole page into a coherent, modern result.

## Tasks

1. **Scale audit:** grep the codebase for leftover ad hoc sizes that bypass the new
   scale and fix them:
   - `text-\[` arbitrary font sizes (should be gone except intentional non-font uses).
   - `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl` etc. on user-facing text —
     replace with `text-eyebrow / caption / body-sm / body / body-lg` per role.
   - Radii other than `rounded-2xl` / `rounded-lg` (and `rounded-full` where genuinely a
     circle, e.g. pulse dot) — normalize.
   - Card paddings other than `p-7 md:p-8` / `p-6` — normalize.
2. **Spacing rhythm:** confirm every section uses `py-20 md:py-28` (hero cluster
   `py-12 md:py-16`) and the header rhythm (eyebrow mb-4 / heading mb-5 / lead
   mb-12 md:mb-16). Confirm card grid gaps are `gap-6` / `gap-8`.
3. **Responsive:** at ~375px, ~768px, ~1280px verify no overflow, no cramped cards,
   readable line lengths (`max-w-2xl` on leads, `max-w-prose`-ish on long body),
   hero cluster stacks cleanly, nav collapses to hamburger correctly with 5 links + CTA.
4. **Dark mode:** toggle and scroll every section. Check contrast of `eyebrow`/labels,
   card borders, gradient text legibility, blob intensity (shouldn't wash out text).
5. **Accessibility:**
   - Focus-visible rings present and visible on all links/buttons in both themes.
   - Skip link works; tab order logical; 44px targets on all controls.
   - Headings form a sane outline (one H1 in hero, H2 per section, H3 in cards).
   - `eyebrow` 12px tier + `blue-label` still meet AA contrast; fix if a tweak dropped it.
6. **Navbar:** confirm exactly one contact control; CTA → `#kontakt`; all 5 nav links
   scroll to correct ids.
7. **Polish:** equal-height card rows, aligned baselines, consistent hover behavior
   (only interactive cards lift). Remove any now-dead CSS/classes.

## QA checklist (report each item)

- [ ] No arbitrary `text-[...]` font sizes remain on user-facing text.
- [ ] Only `text-eyebrow/caption/body-sm/body/body-lg` + display tokens used for text.
- [ ] Only `rounded-2xl` (cards) and `rounded-lg` (controls/tags) used (plus genuine circles).
- [ ] Card padding is `p-7 md:p-8` (feature) or `p-6` (utility) everywhere.
- [ ] Section padding `py-20 md:py-28`; hero cluster `py-12 md:py-16`.
- [ ] One contact control in header; 5 nav links scroll correctly.
- [ ] Light + dark both clean at 375 / 768 / 1280px; no overflow.
- [ ] Focus rings, skip link, 44px targets, heading outline all good.
- [ ] AA contrast holds for labels/eyebrows in both themes.
- [ ] Swedish still the default language (no i18n regression).
- [ ] No locale file changed.
- [ ] `pnpm build` passes.

## Constraints

- No content/locale/i18n changes. Tailwind v3. Model `claude-sonnet-4-6`.

Produce a PLAN first and wait for approval. After implementation, report the QA
checklist item by item.
