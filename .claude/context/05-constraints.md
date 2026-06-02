# 05 — Constraints (Hard Rules)

1. **Refinement, not redesign.** Keep the blue brand identity, the Cormorant Garamond +
   DM Sans pairing, all content, all section order, and all 33 languages.
2. **Do NOT touch any locale file** (`public/locales/**`). Content is frozen. This pass
   is purely visual/structural CSS + component markup.
3. **Do NOT change copy** rendered by components. If a string is hardcoded somewhere it
   shouldn't be, leave it (a separate content pass owns that) unless it is purely
   presentational (e.g. a decorative symbol).
4. **Preserve all accessibility:** focus-visible rings, skip link, 44px touch targets,
   semantic elements (`section`, `h2/h3`, `address`/`dl`, `blockquote`, `nav`
   aria-labels), HtmlLangSync, contrast (the new `eyebrow` 12px tier and `blue-label`
   keep AA contrast — verify after color tweaks).
5. **Tailwind stays on v3.** Token changes go in `tailwind.config.ts` and
   `app/globals.css`. No v4 upgrade.
6. **Apply tokens globally; do not hand-tune per section.** The inconsistency being
   fixed came from per-section ad hoc sizing. Define once (context/01, 02), apply
   everywhere (context/03).
7. **Two radii only** (`rounded-2xl` cards, `rounded-lg` controls). **One card padding
   per card type** (`p-7 md:p-8` feature, `p-6` utility). **One section padding**
   (`py-20 md:py-28`, hero cluster `py-12 md:py-16`).
8. **Calmer, not busier.** Modern here means restraint: fewer competing sizes, more
   whitespace, modest motion. Do not add heavy new animations or decorative clutter.
9. **Exactly one contact control in the header** after the navbar fix.
10. **`pnpm build` must pass** before each phase is considered done, AND the result
    must be verified visually with `pnpm dev` in light + dark at mobile (~375px),
    tablet (~768px), and desktop (~1280px) widths. The build passing does not prove the
    design looks right.
11. **Default model:** `claude-sonnet-4-6`. Commit after each phase.
12. **Don't regress the i18n default.** Swedish remains the default language; do not
    touch `lib/i18n.ts` unless a phase explicitly requires it (none should).
