# 00 — Project Overview

## The client

Europea i Malmö AB — a Malmö-based group operating within accessibility:
accessible communication, digital accessibility, and user-centred technology.
Founded 1993 by Faruk and Max Tairi (former language interpreters).

## The repository

An existing, completed Next.js 14 marketing website (`europea`). It is NOT a
greenfield build. Everything visual is already designed and implemented and must be
preserved. Our job is a content remaster.

## Goal of this engagement

Replace the site's copy and information architecture to match a new content
specification (an HTML "how-to" reference document, already distilled into the final
locale files in this folder). The remaster:

- Re-positions Europea from "holding group, no public product" to **"a strong force
  in accessibility since 1993."**
- Introduces a **third brand, Infiniuum** (alongside T-Meeting and EaseAccess24).
- Adds several new narrative sections (evolution, history timeline, vision, European
  presence, founders, industry affiliation).
- Makes **Swedish** the default language and produces a polished **English** source
  text for downstream machine/human translation into the other languages.

## Non-goals

- No redesign. No new color system, no new fonts, no layout overhaul.
- No changes to the build/deploy pipeline beyond what the content requires.
- No translation into languages other than Swedish + English (a separate program
  handles the rest from the English file).

## Source of truth for copy

- `context/locale-sv.json` — final Swedish text.
- `context/locale-en.json` — final English text (idiomatic; the translation source).

These two files already reflect the agreed key schema. Treat them as canonical.
