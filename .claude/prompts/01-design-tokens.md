# Prompt 01 — Install the New Design Tokens

Read `.claude/README-FOR-CLAUDE.md` and `.claude/context/00`, `01`, `05` before
starting.

## Goal

Install the new type scale, spacing conventions, radius, and shadow standards as
Tailwind tokens / CSS. This is the foundation; later phases apply them. Do not yet
restyle sections beyond what installing tokens requires.

## Tasks

1. In `tailwind.config.ts`, REPLACE the `fontSize` block with the new scale from
   `.claude/context/01-design-tokens.md` (display-xl/lg/md/sm + body-lg/body/body-sm/
   caption + eyebrow). Keep all other theme tokens (colors, fontFamily, backgroundImage,
   keyframes) intact.
2. Add the standardized hover shadow as a named token if helpful (optional), e.g. a
   `boxShadow` entry `card-hover: '0 8px 30px rgba(37,99,235,0.10)'`, and keep
   `shadow-cta`.
3. In `app/globals.css`, apply only the OPTIONAL color refinement from context/01 IF
   borders look heavy — softening `--blue-border` light to `rgba(37,99,235,0.14)`
   (keep dark in sync). If unsure, leave colors unchanged in this phase and revisit in
   QA. Do not introduce new hues.
4. Do NOT restyle components yet. However, if changing the `fontSize` scale removes a
   class name that components reference (e.g. nothing references display tokens by a
   removed name — display-xl/lg/md still exist, we only added sm + body tiers), confirm
   no build break. If any component used a fontSize key you are removing, report it
   before proceeding.

## Constraints

- Tailwind v3. Touch only `tailwind.config.ts` and (optionally) `app/globals.css`.
- Do not touch locale files or `lib/i18n.ts`.
- `pnpm build` must pass.

## Definition of done

- New type scale present; display-xl now maxes at 4.5rem; body + eyebrow tiers exist.
- `pnpm build` passes.
- A short note confirming no component referenced a removed token name.

Produce a PLAN first and wait for approval before editing.
