# Matcha — premium ecommerce scroll site

Calm, premium "leaf to ritual" scroll-storytelling site for a single-origin matcha brand. Built on Next.js 16 (App Router), Tailwind v4, GSAP ScrollTrigger, and Lenis.

## Stack

- **Next.js (App Router) + TypeScript** — Turbopack on by default.
- **React 19.2** via App Router.
- **Tailwind CSS v4** — CSS-first; brand tokens declared with `@theme` in `app/globals.css`.
- **GSAP 3 + ScrollTrigger** — fully free since 2025.
- **`@gsap/react`** — `useGSAP()` hook handles cleanup under React Strict Mode.
- **Lenis** — smooth scroll, single RAF loop driven by `gsap.ticker`.

## Run

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project layout

```
app/                       # routes (App Router)
components/
  providers/LenisProvider  # smooth scroll + gsap.ticker
  scroll/HeroPinned        # pinned hero scrubbed timeline
lib/
  gsap.ts                  # ScrollTrigger registration
  products.ts              # typed catalog (3 SKUs, no Stripe yet)
public/                    # placeholders, real assets land later
.claude/skills/            # 5 project-local skills (brand, motion, UX, perf, Stitch)
docs/                      # owner asset checklist + Stitch/Claude prompts
```

## Slice 1 (current)

- Scaffold + Tailwind v4 brand tokens
- Lenis + GSAP wired with single RAF
- Pinned Hero with scrubbed powder/pack/headline timeline
- Section stubs for Origin / Grinding / Ritual / Taste / Trust / Buy
- Product placeholders (no Stripe wiring)

## Slice 2 (next)

- Stripe Checkout — `lib/stripe.ts`, `app/api/checkout/route.ts`, `@stripe/stripe-js` redirect
- Real product cards with working CTAs
- Success / cancel pages

## Slice 3+

- Origin / Grinding / Whisking / Taste sections built out
- Real product photography + video
- Reviews / trust strip
- SEO + structured data
- Email capture

## Animation direction

See `.claude/skills/scroll-animation-director/SKILL.md` and `.claude/skills/premium-matcha-brand-director/SKILL.md` — these auto-load when relevant work is being done. Two rules to never break:

1. Single RAF loop. The Lenis provider already wires `gsap.ticker` → `lenis.raf`. Never start a second `requestAnimationFrame` loop.
2. Use `@gsap/react`'s `useGSAP()` and `gsap.matchMedia()` — never `ScrollTrigger.matchMedia()` or bare `useEffect` with manual `ctx.revert()`.

## Owner assets

`docs/owner-asset-checklist.md` lists everything we need from the brand owner. Send it before iterating on real photography.
