---
name: axis-design
description: Use this skill to generate well-branded interfaces and assets for Axis Brands Group, either for production or throwaway prototypes/mocks/slides/etc. Contains essential design guidelines, colors, type, fonts, logo variants, iconography, and a React UI kit for the Axis marketing site.
user-invocable: true
---

# Axis Brands — Design Skill

Axis Brands Group is an operator-led Amazon & Walmart growth partner — premium B2B, operator-to-operator voice, navy-anchored with an electric-blue accent. Think Linear meets Stripe.

## Getting started

1. Read `README.md` for the full brand system: positioning, voice, visual foundations, and iconography.
2. Pull tokens from `colors_and_type.css`. Every color, type size, spacing unit, radius, shadow, and motion easing lives there as a CSS var.
3. Copy assets from `assets/` (logos in 4 variants, 22 Lucide icons already local).
4. Reference `ui_kits/website/` for a full interactive homepage recreation — components and styles you can lift or adapt.
5. Preview cards in `preview/` are 1:1 specimens of each token + component state.

## Rules of thumb

- **Navy is earned.** Use `--ink-800` for hero, nav, footer, final-CTA bands. Everything else is white or `--surface-100`.
- **Azure is the conversion color.** One primary CTA per section. Never use it as a large surface.
- **No emoji. No gradients (except the subtle navy hero glow). No warm imagery.**
- **Stats carry the brag; body copy stays level.**
- **Primary CTA label everywhere:** "Book a 15-Minute Call".
- **Em dash is the signature punctuation.** Use `−` (minus) on negative KPIs, not `-` (hyphen).
- Em-dash is signature punctuation; body copy uses "we/you", never "I" or "they".

## If invoked without other guidance

Ask the user what they want to build (landing-page section, pitch slide, internal tool mock, email template, etc). Ask a few tight questions about audience and length. Then produce a self-contained HTML artifact that pulls `colors_and_type.css` and `assets/`, or — for production — hand back component code that matches the UI kit patterns.

## Working with this skill as a Claude Code skill

All files are standalone. Copy this folder wholesale into a project's `.claude/skills/axis-design/` and invoke by name.
