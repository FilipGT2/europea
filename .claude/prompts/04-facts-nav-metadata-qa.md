# Prompt 04 — Navbar, Facts, Metadata, Final QA

Read `.claude/README-FOR-CLAUDE.md` and `.claude/context/03`, `04`, `06`. Phases 01–03
must be complete.

## Goal

Expand the navigation to mirror the new section set, finalise factual details and
metadata, and run a full accessibility + build QA pass.

## Tasks

1. **Navbar** (`components/nav/Navbar.tsx`): expand the link set from 3 to 6, matching
   the how-to. Keep existing styling, mobile menu, theme toggle, and LanguageSwitcher.
   Links (label key → anchor):
   - `nav.about` → `#om-oss`
   - `nav.brands` → `#varumarken`
   - `nav.evolution` → `#utveckling`
   - `nav.vision` → `#vision`
   - `nav.europe` → `#europa`
   - `nav.contact` → `#kontakt`
   Also wire the header CTA to `t('nav.cta')` → `#kontakt`.
   Verify all six anchors exist as section ids in the page. On mobile, ensure six links
   fit the menu and remain keyboard-accessible.

2. **Contact facts** (confirm from phase 03): address `Amiralsgatan 20, 211 55 Malmö`
   (no "Plan 3"); phone `+46 (0)40 661 41 80` with `tel:` link; email `info@europea.se`
   with `mailto:` link; the Org.nr field displays the company name
   `Europea i Malmö AB` (do NOT display any numeric org number anywhere).

3. **Footer**: `© 2026 Europea i Malmö AB`. Optional brand quick-links row may use the
   brand names from `brands.*`; keep existing footer styling if added.

4. **Metadata** (`app/layout.tsx`): update `title`/`description` to reflect the new
   positioning ("a strong force in accessibility since 1993", three brands). Keep it
   single-language for now (per roadmap). Ensure `<html lang>` still syncs via
   `HtmlLangSync` and the initial `lang` is consistent with the sv default.

5. **Cleanup**: remove any now-unused imports, dead keys references, or leftover files
   from earlier phases. Confirm no component references removed keys
   (`mission.*`, `values.*`, `stats.*`, `partnership.*`).

## QA checklist (must all pass)

- `next build` completes with no errors.
- Site loads in **Swedish** by default; switching languages works; `<html lang>` updates.
- All six nav links scroll to the correct sections (desktop + mobile).
- Light and dark themes both render correctly across every section.
- Keyboard-only navigation works; skip link works; focus states visible.
- No broken images; placeholder slots render cleanly.
- No hardcoded user-facing English remains anywhere in components.
- `sv` and `en` locale key trees are identical; no other locale folder was modified.

## Constraints

- Tailwind v3. No new colors/fonts. Model `claude-sonnet-4-6`.

Produce a PLAN first and wait for approval before editing. After approval and
implementation, report the QA checklist results item by item.
