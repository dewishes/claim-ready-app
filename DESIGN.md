---
version: alpha
name: "Sorry Bravia: Emerald Editorial"
description: >-
  A light, editorial design system for one-cause websites: consumer campaigns, open letters,
  case files, petitions and explainers that must read as calm, factual and trustworthy.
  Taken from the live site sonybravia.com, which was designed and built with AI.
colors:
  primary: "#087A58"
  primary-strong: "#066748"
  primary-ink: "#065F43"
  primary-soft: "#EEFAF5"
  primary-soft-2: "#DCF3EA"
  primary-border: "#B9E6D6"
  on-primary: "#FFFFFF"
  primary-bright: "#34D399"
  secondary: "#0D1117"
  on-secondary: "#FFFFFF"
  neutral: "#FFFFFF"
  surface: "#FFFFFF"
  surface-2: "#FBFCFD"
  surface-muted: "#F7F8FA"
  surface-sunken: "#F2F4F7"
  on-surface: "#363C47"
  on-surface-strong: "#0D1117"
  on-surface-variant: "#5B6472"
  on-surface-muted: "#697382"
  outline: "#E7EAEF"
  outline-strong: "#D6DBE3"
  error: "#D61F26"
  on-error: "#FFFFFF"
typography:
  headline-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 47px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 29px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -0.035em
  stat-number:
    fontFamily: Plus Jakarta Sans
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1
    letterSpacing: -0.035em
    fontFeature: '"tnum" 1'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.72
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.72
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13.5px
    fontWeight: 500
    lineHeight: 1.5
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.16em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.16em
rounded:
  sm: 12px
  md: 18px
  lg: 26px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 148px
  section-min: 84px
  shell: 1180px
  shell-narrow: 880px
  gutter: 40px
  gutter-min: 20px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  text-selection:
    backgroundColor: "{colors.primary-soft-2}"
    textColor: "{colors.primary-ink}"
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
  divider-strong:
    backgroundColor: "{colors.outline-strong}"
    height: 1px
  divider-accent:
    backgroundColor: "{colors.primary-border}"
    height: 1px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  button-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  button-dark-hover:
    backgroundColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-ghost-hover:
    backgroundColor: "{colors.surface-muted}"
  pill-label:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 32px
  card-nested:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 20px
  card-callout:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.md}"
    padding: 28px
  stat-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.stat-number}"
    padding: 28px
  stat-cell-hot:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.stat-number}"
  section-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    padding: 148px
  headline-card:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary-bright}"
    rounded: "{rounded.lg}"
    padding: 48px
  ticker:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.label-sm}"
    padding: 12px
  header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    height: 72px
  input:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    height: 44px
    padding: 0px 14px
  footer:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    padding: 64px
---

# Sorry Bravia: Emerald Editorial

## Overview

A calm, factual, editorial look for websites built around one cause: a consumer campaign, an
open letter, a case file, a petition or a long explainer. It must feel trustworthy and serious
without being heavy, so the reader keeps scrolling and believes what they read.

White pages, near-black ink headlines in a heavy geometric sans, one emerald accent, small
uppercase monospace labels, soft rounded cards and a lot of air. Every section follows the same
stack: a mono pill label, a heavy headline, one lead paragraph, then evidence (numbers, dates,
documents) in cards. Sections alternate white, muted grey and dark ink to give a long read a
rhythm without adding colours. Light theme only.

## Colors

One accent, and ink and white do the rest.

- **Emerald (#087A58), `primary`:** the only brand colour. Primary buttons, links, pill labels,
  the focus ring and the single number that matters. It clears 4.5:1 on white and on the muted
  grey, so even 10px labels stay readable. Hover darkens it to `primary-strong` (#066748).
- **Mint wash (#EEFAF5) with Deep Emerald text (#065F43):** pill labels, callout cards and the
  ticker strip. `primary-border` (#B9E6D6) outlines them; `primary-soft-2` (#DCF3EA) is the
  text selection colour.
- **Bright Emerald (#34D399), `primary-bright`:** the accent used ON dark ink sections only.
  The normal emerald is too dark there (about 3.5:1).
- **Ink (#0D1117), `secondary`:** headlines, the dark sections, the dark header button.
- **Body text (#363C47), captions (#5B6472), meta (#697382):** a three-step grey ramp.
- **White (#FFFFFF), Mist (#F7F8FA), Sunken (#F2F4F7):** page, alternate section and input
  backgrounds. Hairlines are #E7EAEF, stronger borders #D6DBE3.
- **Signal Red (#D61F26), `error`:** small live badges and warnings only, never large areas.

On dark sections, body text is white at 70 to 80% opacity and captions at 60%.

## Typography

**Plus Jakarta Sans** carries everything a person reads; **JetBrains Mono** carries labels,
dates and sources, so facts look like data.

- **Headlines:** Plus Jakarta Sans ExtraBold (800), tight tracking (-0.035em) and leading 1.06.
  Sizes are fluid: display 36 to 60px, section headline 31 to 47px, card headline 23 to 29px
  (CSS clamp between those values). Balance headline wrapping.
- **Lead paragraph:** 17.5 to 20px, line height 1.72, in the caption grey.
- **Body:** 17px, line height 1.72, in body grey. Paragraph wrapping set to pretty.
- **Mono labels:** JetBrains Mono 500, 11px (10px inside pills), uppercase, 0.16em tracking.
- **Big numbers:** 800 weight with tabular figures, 44 to 56px, in ink or emerald.

Never synthesise bold, and never use more than two weights in one block.

## Layout

A centred **fixed-max-width** layout: a 1180px shell for most sections and an 880px narrow shell
for long reading, with side padding of 20 to 40px depending on the viewport.

- **Vertical rhythm:** every section has 84 to 148px of padding top and bottom.
- **Spacing scale:** 4, 8, 16, 24, 32, 48, 64px.
- **Section header stack:** label, 16px, headline, 20px, lead (about 62 characters wide), 48 to
  64px, then content.
- **Grids:** 2 columns from 640px, 4 from 1024px. Card grids sit on an outline-coloured
  background with a 1px gap, so the gaps read as hairline dividers inside one rounded card.
- **Hero:** two columns on desktop, copy left (about 55%) and a visual right (a 9:16 video or a
  document card); on mobile the visual stacks below the headline.

## Elevation & Depth

Depth comes from **soft, ink-tinted shadows** on white cards, plus the alternating section
backgrounds. Shadows are never coloured.

- **Card (resting):** 0 1px 3px rgba(13,17,23,.05) and 0 6px 16px -10px rgba(13,17,23,.14).
- **Raised (primary buttons, hovered cards, dark panels):** 0 2px 6px rgba(13,17,23,.04) and
  0 18px 44px -22px rgba(13,17,23,.22).
- **Float (sticky badges, dialogs):** 0 4px 10px rgba(13,17,23,.05) and
  0 34px 70px -30px rgba(13,17,23,.28).
- **Inputs:** 0 1px 2px rgba(13,17,23,.04).

Interactive cards and buttons lift 2px on hover and step up one shadow level.

## Shapes

**Soft and friendly, never sharp.** Inputs and small cards use a 12px radius, standard cards and
panels 18px, hero panels and large media 26px. Every button, label and badge is a full pill.
Do not mix sharp corners into this system.

## Components

- **Primary button:** emerald pill, white 15px semibold text, 14px by 28px padding, raised
  shadow, optional trailing arrow. Hover: deeper emerald and a 2px lift.
- **Dark button:** ink pill, white 13.5px text, 10px by 20px padding. Hover turns it emerald.
  Used in the header.
- **Ghost button:** white pill with a 1px hairline border and ink text. Hover: mist fill.
- **Pill label (eyebrow):** mint pill with an emerald border, deep emerald 10px mono uppercase
  text, optional 6px emerald dot. Sits above every section headline.
- **Header:** sticky, white at 92% opacity with a 1px bottom hairline; logo left (mark plus
  ink wordmark), nav links in body grey, a dark pill button on the right.
- **Ticker:** a thin mint strip above the header with an emerald bottom border, 10px mono
  uppercase labels 40px apart, scrolling right to left once every 46 seconds.
- **Card:** white, 1px hairline border, 18px radius, 28 to 32px padding, card shadow.
- **Callout card:** mint fill with emerald border, for the one key message of a section.
- **Stat grid:** 2 or 4 cells joined by 1px hairline gaps inside one rounded card; each cell
  is a big tabular number over a 13.5px caption. One "hot" cell may use emerald for the number.
- **Document card:** a white card with a quoted line, a mono date and source label, and a
  "view source" text link, used to show evidence.
- **Dark section:** ink background, white headlines, bright emerald labels and key number;
  inner panels in white at 10% opacity. One or two per page at most.
- **Headline card:** a dark ink panel with a 26px radius holding one short sentence in large
  mono type with a faint horizontal scanline texture. Used once, at the top of a page.
- **Timeline:** a 2px hairline rail on the left, 10px emerald dots, a mono date label and a
  card per event, oldest first.
- **Input:** sunken grey fill, 1px strong border, 12px radius, 44px tall, 15px text, a 13.5px
  semibold label above. Focus: 2px emerald outline at 3px offset.
- **Footer:** mist background, 1px top hairline, three columns (about, pages, contact) in
  caption grey, a 13px legal line at the bottom.

**Motion:** one easing curve, cubic-bezier(0.22, 1, 0.36, 1). Elements fade in and rise 18px
over 0.75s once, as they scroll into view; the page must read fully without JavaScript. Respect
reduced-motion settings by turning off reveals, the ticker and loops.

## Do's and Don'ts

- Do keep emerald as the only accent; let ink and white do the rest.
- Do put a mono pill label above every section headline.
- Do show numbers, dates and sources in cards, not buried in paragraphs.
- Do use bright emerald, never the normal emerald, on dark ink sections.
- Do keep every text colour at WCAG AA 4.5:1 or better, with a visible focus ring everywhere.
- Do keep touch targets at least 40px tall.
- Don't add gradients behind text, glows or coloured shadows.
- Don't stack two dark sections in a row.
- Don't centre long paragraphs; centre only short hero lines.
- Don't bake headlines or numbers into images; keep them as real text.
