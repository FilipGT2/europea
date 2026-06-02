# 01 — Design Tokens (the new scale)

This is the heart of the refinement. Install these tokens, then apply them everywhere.
All values are concrete on purpose — do not improvise alternatives.

## Type scale (REPLACE the current fontSize block in tailwind.config.ts)

The current scale is too extreme (display-xl reaches 8rem). The new scale is calmer,
modern, and has a sensible ratio between largest and smallest. Use a tighter clamp
range so the hero is impactful but not overwhelming.

```ts
fontSize: {
  // Display (Cormorant Garamond) — headings only
  'display-xl': ['clamp(2.75rem, 5.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }], // hero H1
  'display-lg': ['clamp(2rem, 4vw, 3.25rem)',     { lineHeight: '1.1',  letterSpacing: '-0.015em' }], // big quote / vision
  'display-md': ['clamp(1.6rem, 2.6vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],  // section H2
  'display-sm': ['clamp(1.3rem, 2vw, 1.6rem)',    { lineHeight: '1.2',  letterSpacing: '-0.01em' }],  // card H3 / sub

  // Body (DM Sans) — explicit so usage is consistent
  'body-lg':  ['1.125rem', { lineHeight: '1.7' }],   // 18px — section lead paragraphs
  'body':     ['1rem',     { lineHeight: '1.7' }],   // 16px — default body
  'body-sm':  ['0.9375rem',{ lineHeight: '1.6' }],   // 15px — card body, secondary text
  'caption':  ['0.8125rem',{ lineHeight: '1.5' }],   // 13px — small print, meta

  // Eyebrow / label — the smallest tier (was 11px, now 12px min for legibility)
  'eyebrow':  ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.14em' }], // 12px uppercase labels
}
```

Key changes vs. current:
- Hero H1 max drops from 128px to 72px (`4.5rem`). This is the main "too big" fix.
- New `display-sm` for card titles (previously card titles borrowed `display-md` which
  was too large for a card).
- Body text formalized into `body-lg / body / body-sm / caption` so leads and card text
  stop drifting between `text-sm`, `text-base`, `text-lg` ad hoc.
- Smallest label tier raised from 11px to 12px (`eyebrow`) for legibility and a smaller
  big-to-small ratio.

## Usage rules for type

- Hero H1: `font-display text-display-xl`.
- Section H2 (every section heading): `font-display text-display-md`.
- Card / sub headings: `font-display text-display-sm` OR `font-sans font-semibold text-body-lg`
  (use the sans option for small utilitarian cards; display for feature cards — see
  context/02 for which card type uses which).
- Section lead paragraph: `font-sans text-body-lg text-text-secondary`.
- Card body: `font-sans text-body-sm text-text-secondary`.
- Eyebrow label: `font-sans text-eyebrow uppercase text-blue-label`.
- The hero "since" number: use `text-display-xl` (NOT a hardcoded 5.5rem). Remove the
  hardcoded `text-[4.5rem] md:text-[5.5rem]`.
- Stat-card numbers: `font-display text-display-sm` (they are not hero-scale).

## Spacing scale (section + inner rhythm)

Standardize vertical rhythm. Define these as the canonical values and apply everywhere:

- **Section vertical padding:** `py-20 md:py-28` (was a mix of py-12 / py-28 / py-36).
  Use this for ALL content sections. Hero may keep its own min-height treatment.
- **Inner container:** `max-w-6xl mx-auto px-6 md:px-10` for most sections (was
  `max-w-7xl`; 6xl reads tighter and more modern for text-led content). Use `max-w-4xl`
  for centered narrative-only sections (Evolution, Europe, Vision intro).
- **Eyebrow → heading gap:** `mb-4`. **Heading → lead gap:** `mb-5`.
  **Lead → content gap:** `mb-12 md:mb-16`.
- **Grid gaps between cards:** `gap-6` (small/utility cards), `gap-8` (feature cards).

## Radius scale (standardize — pick TWO, not five)

Current code mixes `rounded`, `rounded-lg`, `rounded-xl`, `rounded-2xl`. Reduce to:

- **Cards / panels / images:** `rounded-2xl` (16px) — the single card radius.
- **Buttons / tags / small controls / inputs:** `rounded-lg` (8px).
- Nothing else. Replace every other radius with one of these two.

## Color tokens (keep palette; minor refinements only)

Keep all existing CSS variables in globals.css. The only optional refinements (apply
only if they improve contrast/modern feel, and keep both light + dark in sync):

- Card border can be very slightly softer in light mode if borders look heavy:
  `--blue-border` light may go from `rgba(37,99,235,0.18)` to `rgba(37,99,235,0.14)`.
  Optional — only if borders feel heavy after the spacing changes.
- Do NOT introduce new hues. Do NOT change the brand-gradient.

## Shadow scale (standardize)

- Cards rest with NO shadow or a very soft one; on hover use a soft blue-tinted lift.
  Define a reusable hover shadow and apply consistently:
  - rest: `border border-blue-border` (no shadow) — modern, flat-with-border look.
  - hover (interactive cards only): `hover:shadow-[0_8px_30px_rgba(37,99,235,0.10)]`
    + `hover:border-blue-DEFAULT/40` + `hover:-translate-y-0.5`, `transition-all duration-300`.
- Keep `shadow-cta` for the primary gradient button only.

## Motion (keep, don't amplify)

Keep the existing Framer Motion reveal pattern and FloatingBlobs. Modern = calmer, so
do not add new heavy animations. If anything, ensure reveals are consistent
(`duration: 0.6, ease: [0.16,1,0.3,1]`, `viewport once, margin -60px`).
