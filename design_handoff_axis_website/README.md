# Handoff — Axis Brands Group Website

Design reference package for Claude Code (or any developer).
Target stack: **Next.js + Tailwind on Vercel** (recommended). Any React framework works.

---

## 1. What's in this bundle

```
design_handoff_axis_website/
├── README.md                     ← this file
├── SKILL.md                      ← drop into .claude/skills/ for recurring use
├── BRAND.md                      ← positioning, voice, rules of thumb
├── design_system/
│   ├── colors_and_type.css       ← all design tokens as CSS vars
│   └── copy.txt                  ← full approved website copy
├── reference_prototype/
│   ├── homepage.html             ← interactive HTML mockup
│   ├── components.jsx            ← React components (reference only)
│   └── styles.css                ← component styles (reference only)
└── assets/
    ├── axis-logo.svg             ← master monochrome logo
    ├── team/                     ← founder photos
    ├── testimonials/             ← testimonial photos
    ├── clients/                  ← client + marketplace logos
    └── icons/                    ← 22 Lucide icons
```

> **Important:** the files in `reference_prototype/` are **design references, not production code.** They use inline Babel and global scripts to prototype quickly. Your job is to **recreate the design in the real stack** — Next.js App Router + Tailwind + TypeScript is the recommended target — using the tokens, copy, and assets provided. Match the look pixel-for-pixel; don't copy the prototype architecture.

## 2. Fidelity

**High-fidelity.** Colors, typography, spacing, and interaction patterns are final. The reference prototype (`reference_prototype/homepage.html`) is what the production site should look like.

## 3. Recommended stack

- **Next.js 15 (App Router) + TypeScript**
- **Tailwind CSS** with tokens from `design_system/colors_and_type.css` mirrored in `tailwind.config.ts`
- **shadcn/ui** for base primitives (Button, Dialog, Input) — then re-skin to match the prototype
- **Framer Motion** for the scroll / fade-in reveals
- **Calendly or HubSpot Meetings** embed for "Book a Call"
- **Vercel** for hosting (analytics + image optimization on)
- **Resend + simple API route** for contact form if needed
- No CMS needed v1 — copy is static in `content/` TypeScript files. Add Sanity later if the team wants to self-edit.

## 4. Screens / views

The v1 site is a **single-page homepage** with anchored sections + a booking modal. All copy lives in `design_system/copy.txt`.

### Nav (sticky)
- Transparent over hero; gets a translucent navy background + border once scrolled > 24px
- Left: Axis logo (white, 22px tall)
- Center: "How We Work", "Results", "Team" — smooth-scroll to anchors
- Right: primary button **"Book a 15-Minute Call"** → opens booking modal

### Hero
- Full-viewport navy (`--ink-800`) with a subtle cool-blue radial glow behind the H1
- H1: *"Turn Amazon Into Your #1 Growth Channel"* (64–72px, Plus Jakarta Sans 700, tracking −0.02em)
- Sub: single paragraph, 18px slate-300, max 620px wide
- Two CTAs: primary azure + secondary ghost-on-dark
- Below the CTAs: small trust strip (e.g. "Trusted by Whoosh!, HairClub, Sleep Country…")

### Stats bar
- Cream band (`--surface-100`), 3-up grid, 160px tall
- Each stat: giant number (Plus Jakarta 72px, ink-800), 14px monospace label under
- Stats: **40%** avg revenue lift · **30%** TACoS reduction · **$50M+** managed on Amazon

### Why Axis Is Different
- White background, 4-column grid on desktop, 2 on tablet, 1 on mobile
- Each pillar: 28px icon (azure-600), H3 (20px/700), body (15px slate-500)
- Pillars: No Percentage of Ad Spend · No Lock-In Contracts · Operators, Not Account Managers · Founder-Level Access

### Client logos (two rows)
- White band between cream sections, tinted slate-400 monochrome, hover → ink-800
- **Brands we operate:** Whoosh!, HairClub, Sleep Country, Endy
- **Marketplaces we sell on:** Amazon, Walmart, Shopify
- Use single monochrome SVGs + `fill: currentColor` (see implementation note §9)

### Services
- 3-card grid on white, each card gets a 1px border, 16px radius, 28px padding
- Cards: Amazon & Walmart Management · International Expansion · Brand Acquisition & Investment

### TACoS calculator
- Interactive widget: inputs for Ad Spend + Revenue → outputs current TACoS, projected after 30% reduction, and additional free cash flow
- Cream background card inside a white section
- Inputs use the token system — focus state is 2px azure-500 ring

### Testimonials
- 3 cards on white, each a quote block with a 44px circular avatar
- Quotes from Mitch Krakower (Whoosh!), John Chalson (HairClub), Phil Besner (Hush / Sleep Country Canada)
- Photos in `assets/testimonials/`

### Team
- Cream band, 3-card grid, each card has a square photo (aspect 1:1, rounded, slight desaturation), name, role (azure-600), short bio
- Members: Adam Levinter · Anshuman Chhabra · Jeffrey Talajic
- Photos in `assets/team/`

### Final CTA
- Full-bleed navy band with the same cool radial glow as the hero
- H2 + single azure button: **"Book a 15-Minute Call"**

### Footer
- Dark (navy), 4-col: brand blurb · Company · Contact · legal strip
- Same logo + tag "Your Amazon Partner. Not Your Amazon Agency."

### Booking modal
- Triggered by every "Book a Call" CTA
- Renders Calendly inline-embed in a centered dialog (600×700, 12px radius, navy header, close button)
- **TODO:** replace the mock URL with the real Calendly link — see §10

## 5. Interactions & behavior

- **Nav scroll state:** add `.nav--scrolled` class when `scrollY > 24`
- **Section reveals:** fade-up 12px with 400ms `cubic-bezier(0.4, 0, 0.2, 1)` when entering viewport (IntersectionObserver; trigger once)
- **Buttons:**
  - Primary azure: hover → darken ~8%, 120ms
  - Secondary ghost: hover → border fades to ink, bg stays transparent
  - Focus-visible: 2px azure-500 ring + 2px offset (never remove)
- **TACoS calculator:** recompute on every keystroke; debounce not needed at this scale
- **Modal:** trap focus, close on Esc + backdrop click, restore scroll position on close
- **Smooth scroll:** `scroll-behavior: smooth` on `html`, but respect `prefers-reduced-motion`

## 6. Responsive

- Breakpoints: `sm 520`, `md 760`, `lg 900`, `xl 1200`
- Hero H1 scales down to 40px on mobile
- All grids collapse to 1 column below `md`
- Nav gets a hamburger below `lg`; menu slides down full-width, navy, 16px links

## 7. Design tokens

Every token is defined in `design_system/colors_and_type.css`. Mirror the essentials into Tailwind:

```ts
// tailwind.config.ts (excerpt)
export default {
  theme: {
    extend: {
      colors: {
        ink: { 800: '#0F172A', 700: '#1E293B', 600: '#334155' },
        azure: { 600: '#1D4ED8', 500: '#2563EB', 400: '#3B82F6' },
        slate: { 500: '#64748B', 400: '#94A3B8', 300: '#CBD5E1', 200: '#E2E8F0' },
        surface: { 100: '#F8FAFC', 50: '#FCFCFD' },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        xs: '0 1px 2px rgba(15,23,42,0.05)',
        sm: '0 2px 6px rgba(15,23,42,0.06)',
        md: '0 8px 24px rgba(15,23,42,0.08)',
        accent: '0 4px 16px rgba(29,78,216,0.24)',
      },
      borderRadius: { sm: '6px', md: '10px', lg: '14px', xl: '20px' },
    },
  },
};
```

Full token set in `design_system/colors_and_type.css`.

## 8. Copy

**Do not rewrite.** Use the exact copy from `design_system/copy.txt`. The tone is operator-to-operator, em-dash is the signature punctuation, "we/you" (never "I" or "they"), and negative KPIs use a true minus character (−), not a hyphen.

Primary CTA label everywhere: **"Book a 15-Minute Call"**.

## 9. Implementation notes — the one gotcha

The logo and client SVGs are single **monochrome** files designed to tint via `currentColor`. Two options:

**Option A (recommended for Next.js):** import them as React components via `@svgr/webpack` and set `fill="currentColor"` on every shape. Then tint with `className="text-white"` or any color class.

**Option B (quick):** inline-fetch the SVG at runtime and stamp `fill` on every `<path>/<polygon>/...` node. This is what the reference prototype does — see `reference_prototype/components.jsx` → `Logo` component. Not recommended for production (FOUC).

The reference prototype paths inside `reference_prototype/homepage.html` assume the asset folders live *one level up* (`../../assets/...`). In this bundle the assets are at `../assets/...` — either fix the paths or just use `homepage.html` strictly for visual reference, not runtime.

The source logo file (`assets/axis-logo.svg`) has no default fill on its shapes — you *must* set one or the mark renders black on dark backgrounds.

## 10. TODOs for the developer

1. **Replace the Calendly placeholder** — the reference modal uses a mock URL. Wire the real booking link.
2. **Add a real favicon + apple-touch-icon** from the Axis logo.
3. **Meta tags** — title, description, OG image (the OG image doesn't exist yet; design one using the hero lockup + navy bg).
4. **Analytics** — Vercel Analytics + Plausible or GA4.
5. **Form backend** — if you add a contact form, route through Resend or HubSpot.
6. **Fonts** — Plus Jakarta Sans + Inter + JetBrains Mono via `next/font/google` (don't hotlink).
7. **Image optimization** — use `next/image` for the team + testimonial photos.
8. **a11y pass** — contrast, focus rings, alt text, skip-to-content link, keyboard nav on modal.

## 11. Deployment

1. Push to GitHub
2. Import the repo in Vercel
3. Set project name `axis-brands-group`, framework `Next.js`
4. Environment variables: `NEXT_PUBLIC_CALENDLY_URL` (and any analytics keys)
5. Add the production domain under Project → Domains
6. Vercel Analytics on, Speed Insights on

## 12. How to use this with Claude Code

From your project root:

```bash
unzip axis_website_handoff.zip
mv axis_website_handoff/SKILL.md .claude/skills/axis-design/SKILL.md
mv axis_website_handoff/design_system .claude/skills/axis-design/
mv axis_website_handoff/assets .claude/skills/axis-design/
mv axis_website_handoff/BRAND.md .claude/skills/axis-design/
# Keep reference_prototype/ at the repo root for visual reference
```

Then in Claude Code:

> Use the axis-design skill. Build the Axis Brands homepage as a Next.js 15 + Tailwind + TypeScript project. Follow `reference_prototype/homepage.html` for layout and behavior, use the real copy from `design_system/copy.txt`, and mirror the tokens from `colors_and_type.css` into Tailwind. Scaffold the project, install deps, and deploy-ready build me a PR branch called `feat/homepage-v1`.

Claude Code will use the skill files as persistent reference across every follow-up prompt in that project.
