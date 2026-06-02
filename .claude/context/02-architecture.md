# 02 — Architecture

## Directory map (relevant parts)

```
europea/
  app/
    layout.tsx        Root layout: fonts, providers, metadata, <html lang>
    page.tsx          Page composition: imports + orders the section components
    globals.css       CSS variables (light + .dark), Tailwind layers
  components/
    nav/
      Navbar.tsx            Fixed header, desktop + mobile nav, theme toggle, lang switcher
      LanguageSwitcher.tsx  Language picker (reads LANGUAGES from lib/i18n)
    sections/
      Hero.tsx        Uses HeroGeometric (shape-landing-hero)
      Mission.tsx     2-col: text + gradient quote card
      Stats.tsx       3 animated counters
      Portfolio.tsx   Brand cards (CURRENTLY HARDCODED STRINGS — must de-hardcode)
      Values.tsx      3 numbered value cards
      Partnership.tsx Built but NOT used in page.tsx — leave it out
      Contact.tsx     2-col: address block + decorative coordinates
      Footer.tsx      Copyright line
    ui/
      shape-landing-hero.tsx  Hero animated background + layout
      floating-blob.tsx       Reusable atmospheric blob
      hover-button.tsx        CTA button
      HtmlLangSync.tsx        Syncs <html lang> to active i18n language
      SkipLink.tsx            Accessibility skip-to-main link
    providers/
      I18nProvider.tsx
      ThemeProvider.tsx
  lib/
    i18n.ts           i18next init + LANGUAGES list + default-language logic
    utils.ts          cn() class merge helper
  public/
    locales/{lang}/common.json   All translation strings (33 languages)
    europea-logo.png / -white.png, favicon.ico, tmeeting.jpg, easeaccess24.svg
```

## How text flows

1. `lib/i18n.ts` initialises i18next and picks the initial language.
2. A component calls `const { t } = useTranslation()` then `t('section.key')`.
3. i18next resolves the key from `public/locales/{activeLang}/common.json`,
   falling back to the fallback language if a key is missing.

Implication: **adding/renaming content = editing the locale JSON key schema + the
components that reference those keys.** Keep keys identical across `sv` and `en`.

## Current page order (app/page.tsx)

Navbar → Hero → Mission → Stats → Portfolio → Values → Contact → Footer.
(Partnership exists but is not imported.)

## Target page order (after remaster)

Navbar → Hero (with since-card + 4 stat cards) → CoreCompetence → Evolution →
Brands (3 cards) → History (timeline) → Company → Vision → Europe → Founders →
Industry → Contact → Footer.

See `context/06-new-sections.md` for what each new section contains and which
existing component's pattern to base it on.

## Key-schema note

The new schema (already realised in `locale-sv.json` / `locale-en.json`) renames and
expands the old one. Notably:
- `mission.*` and `values.*` are no longer used by the new page (their content is not
  in the new copy). Remove their keys, OR keep the files clean by replacing the whole
  file with the provided locale JSON. Prefer: replace the whole sv/en file verbatim.
- New top-level keys: `coreCompetence`, `evolution`, `brands`, `history`, `company`,
  `vision`, `europe`, `founders`, `industry`. `hero`, `nav`, `contact`, `footer`,
  `a11y` are kept but restructured.
