# Prompt 01 — Locale Schema + Swedish/English Content + Default Language

You are working on the `europea` Next.js project. Before doing anything, read:
`.claude/README-FOR-CLAUDE.md`, `.claude/context/00`–`07`, and the two files
`.claude/context/locale-sv.json` and `.claude/context/locale-en.json`.

## Goal of this phase

Install the new translation key schema and final copy for Swedish (default) and English
(translation source of truth), and switch the site's default language to Swedish.

## Tasks

1. Replace `public/locales/sv/common.json` **verbatim** with the contents of
   `.claude/context/locale-sv.json`.
2. Replace `public/locales/en/common.json` **verbatim** with the contents of
   `.claude/context/locale-en.json`.
3. Do NOT touch any other language folder under `public/locales/`.
4. In `lib/i18n.ts`, make Swedish the default language:
   - In `getInitialLanguage()`, change the final fallback `return "en"` to `return "sv"`.
   - Make the SSR branch return `"sv"` as well, for consistent first paint.
   - Keep `localStorage` override and browser-language detection intact.
   - Keep `fallbackLng: "en"`.
   - Do NOT remove or reorder any entry in `LANGUAGES`.
5. Confirm the `sv` and `en` JSON files have identical key trees (they should, since
   both come from the provided files). Report any mismatch instead of "fixing" silently.

## Constraints

- This phase touches ONLY: `public/locales/sv/common.json`,
  `public/locales/en/common.json`, and `lib/i18n.ts`.
- Do not modify components yet (the renamed keys will break some components' rendered
  text until phases 02–03 — that is expected; do not pre-emptively patch components in
  this phase unless a key rename causes a hard crash, in which case report it first).
- Tailwind stays on v3. Default model `claude-sonnet-4-6`.

## Definition of done

- Both locale files match the provided sources exactly and parse as valid JSON.
- `lib/i18n.ts` defaults to `sv`, falls back to `en`, all 33 languages still listed.
- A short note listing any component that references now-removed keys
  (`mission.*`, `values.*`, `stats.*`, `partnership.*`) so phase 03 can address them.

Produce a PLAN first and wait for approval before editing.
