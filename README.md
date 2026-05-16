# Freddo Matcha

A premium ecommerce site for **Freddo Matcha** — single-origin Japanese matcha powder, dressed in European restraint. Italian-Japanese fusion: modern European house, Japanese sourcing.

Built on Next.js 16 (App Router), Tailwind v4, GSAP ScrollTrigger, and Lenis.

> **Pre-launch status.** Brand identity is locked. Supplier sourcing is in progress — we don't claim what we can't prove. See [`docs/product-and-commerce-spec.md`](docs/product-and-commerce-spec.md).

## Stack

- **Next.js 16 (App Router) + TypeScript** — Turbopack on by default
- **React 19.2**
- **Tailwind CSS v4** — CSS-first; brand tokens declared with `@theme` in `app/globals.css`
- **GSAP 3 + ScrollTrigger** — fully free since 2025
- **`@gsap/react`** — `useGSAP()` hook handles cleanup under React Strict Mode
- **Lenis** — smooth scroll, single RAF loop driven by `gsap.ticker`

## Run

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project layout

```
app/                       routes (App Router)
components/
  providers/LenisProvider  smooth scroll + gsap.ticker
  scroll/                  pinned + scrubbed timelines
lib/
  gsap.ts                  ScrollTrigger registration
  motion.ts                brand easing curves + motion tokens
  products.ts              typed catalog (3 SKUs, provenance schema)
public/
  brand/                   logo / favicon / OG (designer slots)
  images/                  hero + product imagery
docs/                      specs, audits, asset checklists
```

## Specifications

- [`docs/design-spec-graphics.md`](docs/design-spec-graphics.md) — graphic / visual brief for the designer
- [`docs/product-and-commerce-spec.md`](docs/product-and-commerce-spec.md) — strategic + technical brief: brand, proof, conversion, commerce stack, PR roadmap
- [`docs/motion-audit.md`](docs/motion-audit.md) — locked motion vocabulary

## PR roadmap

- **PR-1** ← *current* — Brand foundation. Lock name across codebase, strip scaffold, add brand asset slots, schema for provenance fields (all null until proven).
- **PR-2** — Replace every placeholder image with final brand-grade work.
- **PR-3** — Conversion layer (sticky CTA, skip-story, mini-cart, trust strip, reduce-motion toggle).
- **PR-4** — Mobile redesign (kill the 500% pin on phones).
- **PR-5** — Shopify Storefront API integration.
- **PR-6** — Product pages with full proof block.
- **PR-7** — Analytics + Klaviyo email flows.
- **PR-8** — Reviews + subscriptions.

See the commerce spec for acceptance criteria per PR.

## Animation rules (do not break)

1. **Single RAF loop.** The Lenis provider already wires `gsap.ticker` → `lenis.raf`. Never start a second `requestAnimationFrame`.
2. **Use `@gsap/react`'s `useGSAP()` and `gsap.matchMedia()`** — never `ScrollTrigger.matchMedia()` or bare `useEffect` with manual `ctx.revert()`.
3. **No banned easing.** `power2.out`, `power3.out`, `back.out`, `bounce.out`, `elastic` are off-limits. Use the named brand curves from [`lib/motion.ts`](lib/motion.ts) (`rise`, `settle`, `drift`, `carve`, `lift`).

## Provenance rule

> Brand can be locked now, product proof cannot be invented yet.

[`lib/products.ts`](lib/products.ts) carries a typed `Provenance` schema. Every claim-bearing field (`originRegion`, `cultivar`, `harvestSeason`, `harvestYear`, `organicCertified`, `labTested`, `supplierName`, `lotNumber`) is `null` until verified by supplier docs. UI must not display claims that aren't backed.
