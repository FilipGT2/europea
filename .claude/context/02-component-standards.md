# 02 — Component Standards

One definition per component type, applied everywhere. This is what fixes the
"cards and components sizing" complaint. When a section currently does something
different, change the section to match these — not the other way around.

## Section shell (every content section)

```
<section id="..." class="relative overflow-hidden [bg] py-20 md:py-28 [border-t border-blue-border]">
  <FloatingBlob ... />              {/* 1–2 blobs, aria-hidden, subtle */}
  <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-10">   {/* max-w-4xl for narrative-only */}
    <div class="mb-12 md:mb-16">     {/* header block */}
      <p class="font-sans text-eyebrow uppercase text-blue-label mb-4">{eyebrow}</p>
      <h2 class="font-display text-display-md text-text-primary mb-5">{heading}</h2>
      <p class="font-sans text-body-lg text-text-secondary max-w-2xl">{lead}</p>
    </div>
    {content}
  </div>
</section>
```

- Alternate `bg-bg-base` / `bg-bg-surface` between sections (keep the existing rhythm,
  including the Founders band being bracketed by base-toned neighbors).
- Keep blob counts modest (1–2 per section). Modern = calmer.

## Card types — there are exactly TWO

### A. Feature card (brands, core-competence, company, vision callouts)

```
class="bg-bg-card border border-blue-border rounded-2xl p-7 md:p-8
       transition-all duration-300
       hover:border-blue-DEFAULT/40 hover:-translate-y-0.5
       hover:shadow-[0_8px_30px_rgba(37,99,235,0.10)]"
```

- Padding: `p-7 md:p-8` (28/32px). This is THE card padding. Do not use p-5/p-6/p-10.
- Radius: `rounded-2xl`. Title: `font-display text-display-sm`. Body: `text-body-sm`.
- Tag/eyebrow inside card: `text-eyebrow uppercase text-blue-label`.
- Use a consistent internal rhythm: tag `mb-4`, title `mb-3`, body (flush).

### B. Utility / stat card (hero stat tiles, simple info tiles)

```
class="bg-bg-card border border-blue-border rounded-2xl p-6 flex flex-col gap-1"
```

- Padding `p-6`. Number: `font-display text-display-sm`. Label: `text-eyebrow uppercase
  text-text-secondary`.
- No hover lift needed if non-interactive.

> If a card is wrapped in an `<a>` (clickable), it is a Feature card and gets the hover
> treatment + `min-h-[44px]` interactive target on its link affordance.

## Buttons

- **Primary (gradient CTA):** `bg-brand-gradient text-white rounded-lg px-5 py-3
  text-body-sm font-medium shadow-cta min-h-[44px] hover:scale-[1.02] active:scale-[0.98]
  transition-all duration-200` + focus-visible ring.
- **Secondary (outline):** `border border-blue-border rounded-lg px-5 py-3 text-body-sm
  font-medium text-text-secondary hover:text-text-primary hover:border-blue-DEFAULT
  hover:bg-blue-subtle min-h-[44px] transition-all duration-200` + focus ring.
- **Inline link with arrow:** keep arrow `aria-hidden`, ensure 44px target.
- One primary CTA style only. Don't invent variants.

## Tags / pills (the small uppercase labels on cards)

```
class="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-subtle border border-blue-border
       text-eyebrow uppercase text-blue-label"
```

## Timeline (History section)

- Item row: year column + content column, divider between items (`border-b border-blue-border`,
  last item no border). Year: `font-display text-display-sm text-blue-label`. Title:
  `font-sans font-semibold text-body`. Body: `text-body-sm text-text-secondary`.
- Item vertical padding: `py-6`. Keep the image-note placeholder as a Feature-card-styled
  block (no broken image).

## Image placeholders (History photo, Infiniuum wordmark)

- Styled slot using the Feature card shell, `aspect-[16/9]` (History) or centered
  wordmark (Infiniuum), `bg-bg-surface`, dashed or subtle border acceptable, with the
  explanatory caption text. Never an `<img>` without a real src. Stable layout.

## Consistency checklist (apply mentally to every card you touch)

- Radius is `rounded-2xl` (cards) or `rounded-lg` (buttons/tags) — nothing else.
- Card padding is `p-7 md:p-8` (feature) or `p-6` (utility) — nothing else.
- Title uses a display token, body uses `text-body-sm`, label uses `text-eyebrow`.
- Interactive cards have the standard hover treatment; static cards don't.
- Spacing rhythm inside the card matches (tag mb-4, title mb-3).
