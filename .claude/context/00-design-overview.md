# 00 — Design Overview

## Goal

Modernize and harmonize the visual design of the existing `europea` site without
changing content, brand identity, or fonts. The client's feedback, verbatim:

- "I don't like the UX/UI. I want it improved." "I want modern design."
- "Some of the texts are too big, others too small."
- "The cards and components sizing I don't like."
- "In the header there are 2 contact buttons (one link, one button) — remove one."

## Approach: refinement, not redesign (locked with client)

- Keep the blue identity; adjust tones/contrast only.
- Keep Cormorant Garamond (display) + DM Sans (body); fix sizes/weights only.
- Keep all content, section order, languages, and accessibility.
- Aim: clean, modern, calm, consistent.

## Diagnosis of the current design

Three systemic issues (not one-off mistakes), so they are fixed at the system level:

1. **Type scale too extreme.** The clamp ranges are very wide:
   - `display-xl: clamp(3.5rem, 8vw, 8rem)` — the hero headline can reach 128px.
   - Hero "since" number hardcoded `text-[4.5rem] md:text-[5.5rem]`.
   - Labels/eyebrows at `text-[11px]` and `text-xs`.
   The ratio between the largest display and the smallest label is enormous, so the
   page feels unbalanced — exactly the "some too big, some too small" complaint.

2. **Inconsistent card/component sizing.** Padding (`p-5`, `p-6`, `p-8`, `p-10`),
   radius (`rounded-xl`, `rounded-2xl`, `rounded-lg`, `rounded`), and min-heights vary
   across sections. Cards don't share a common rhythm.

3. **Spacing rhythm uneven.** Section padding (`py-12`, `py-28`, `py-36`) and inner
   gaps vary widely, and the vertical rhythm between eyebrow → heading → lead → content
   is not standardized.

## Fix strategy

- context/01 defines a NEW, calmer type scale + spacing + radius tokens.
- context/02 defines ONE set of card/button/section standards.
- context/03 lists the per-section adjustments (mostly applying 01 + 02).
- context/04 is the standalone navbar contact-control fix.
- context/05 is the constraint list.

The single most important principle: **define the tokens once, then apply them
everywhere.** Do not hand-tune individual sizes per section — that is how the current
inconsistency happened.
