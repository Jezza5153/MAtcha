# Mobile flagship audit — Freddo Matcha

> **Status:** Authored 2026-05-23. This is the canonical reference for the mobile rebuild. Future PRs check themselves against this doc; do not let it drift.

This doc captures the locked direction for the Freddo Matcha mobile experience, the audit findings on the current build, and the 5-PR rebuild plan that closes them.

---

## 0. Locked principle

> **Desktop = cinematic brand experience. Mobile = premium conversion experience.**
>
> "I land, I instantly understand the product, I trust the sourcing, I feel the premium vibe, and I always know where to tap."

Mobile is **not** a smaller desktop. It is its own product with its own information architecture, motion budget, and conversion rhythm. The cinematic scroll movie stays on desktop. Mobile uses native scroll and a fast, calm selling journey.

This also closes **PR-4 "Mobile scroll redesign"** in `product-and-commerce-spec.md` §7.

---

## 1. Locked rules (non-negotiable)

1. **Mobile is its own product.** No compressed cinematic. No 500% pinned scrolls. No bottom-right floating UI.
2. **Desktop is locked.** Cinematic scenes (`HeroPinned`, `OriginPinned`, `CinematicScroll`, `GrindingScene`, `WhiskingScene`, `BuyClose`) are spec-compliant and already gated `(min-width: 768px)` via `gsap.matchMedia`. We touch them **only** for `h-screen → h-[100dvh]` and bundle gating.
3. **Native scroll on mobile.** Disable Lenis on `pointer: coarse`. Keep it on desktop.
4. **Every primary tap target ≥ 44 px.** Apple HIG baseline; WCAG 2.5.5 floor is 24 px but premium feel needs 44.
5. **Safe-area always respected.** Notch top, home-indicator bottom. Nothing floats into them.
6. **Honesty over fake proof.** No "press coverage incoming" placeholder. Pre-launch note in the brand's "we don't claim what we can't prove" voice.
7. **Commerce backend is out of scope.** That's PR-5 of the master roadmap. We don't touch `CartProvider`, `lib/products.ts`, or invent a checkout.

---

## 2. Visual direction (the design rule)

```txt
Cream background.
Big quiet typography.
One strong CTA per screen.
Rounded product surfaces.
No cramped labels.
No tiny uppercase text unless decorative.
No floating objects near the iOS home indicator.
No desktop cinematic tricks forced onto mobile.
```

---

## 3. Section spacing + type rules

Enforced in every new mobile component and during PDP / homepage restructure.

- Every mobile section uses horizontal padding `px-5` or `px-6`.
- Vertical rhythm: `py-12` for normal sections, `py-16` for major story / trust / ritual sections.
- No section may start with tiny uppercase eyebrow text *only*. Each section needs a clear heading **or** an obvious product / action above the section fold.
- No mobile text below **13 px** except legal / meta copy.
- No CTA may rely only on an arrow glyph — every CTA carries a word (`View product`, `Notify me`, `How to brew`). Arrows are decoration, not affordance.
- Every section must visibly answer one of:
  - **What is this?** — hero, star product, ritual
  - **Why trust it?** — trust block, pre-launch note, FAQ teaser
  - **What do I do next?** — CTAs, sticky bar, email capture

---

## 4. Locked homepage order

```txt
1.  TrustStrip                  top bar, brand signals
2.  SiteChrome (mobile)         logo · menu · cart
3.  Hero                        product-first, not cinematic
4.  Primary CTA                 Shop · Notify me
5.  Star product card           Freddo Ceremoniale (lead SKU)
6.  Mobile story cards          Origin · Slow · Ritual
7.  Mobile trust block          Origin · Lab · Harvest · Shipping
8.  Mobile ritual block         How to prepare Freddo Matcha
9.  Pre-launch / sourcing note  honest, founder-voiced
10. FAQ teaser                  3 questions, link to full
11. Email capture               its own pre-footer section
12. Footer                      minimal, dense
13. Sticky bottom CTA           full-width bar, safe-area
```

**Email capture rule:** This is a pre-launch ecommerce site — email signup is the primary conversion. It gets its own moment above the footer, with brand-aligned spacing and copy. The footer's `<EmailCapture />` instance stays as a catch-all; the mobile home gets a dedicated section.

**Star + grid duplication rule:** Lead SKU (Freddo Ceremoniale) appears **once** dominantly via `MobileStarProduct`. The home `#products` grid is hidden on mobile when the star ships. If we surface the other two SKUs later, render them as a secondary 1-col stack with smaller imagery — never the full hero card again.

---

## 5. Locked PDP order

```txt
1.  Eyebrow (brand)
2.  Product name
3.  Short tagline
4.  Price + weight
5.  Primary CTA                 [Notify me at launch] · full-width on mobile
6.  Secondary link              How to brew →
7.  Product image               aspect-[4/5], not aspect-square
8.  About (longDescription)
9.  Taste profile               stacked rows, not 3-col cramped
10. Preparation guide
11. Provenance table            stacked rows, label above value
12. Shipping & returns
13. (Subscribe upsell for everyday)
14. Reviews placeholder
15. FAQ
16. Related products
17. Sticky bottom buy bar       full-width, safe-area, appears after hero CTA leaves view
```

---

## 6. Findings inventory

Each finding maps to one of the five rebuild PRs.

### P0 — Real-device foundation (PR-Mobile-1)

| # | Finding | Location |
|---|---|---|
| P0-1 | No `viewport` export → no `viewport-fit=cover`, no `themeColor`, no explicit width/initialScale | `app/layout.tsx:31` |
| P0-2 | Fixed header `top-7` clips notch; sticky CTA `bottom-6` collides with home indicator | `components/site/SiteChrome.tsx:10`, `components/site/StickyShopCTA.tsx:42` |
| P0-3 | Email input `text-sm` (~14 px) triggers iOS zoom-on-focus; missing `inputMode`, `autoComplete` | `components/site/EmailCapture.tsx:42-54` |
| P0-4 | Cart button ~32–34 px hit area, below 44 px | `components/site/SiteChrome.tsx:25-38` |
| P0-5 | TrustStrip `text-[0.62rem]` (~9.9 px), barely legible | `components/site/TrustStrip.tsx:7` |
| P0-6 | MiniCart header ignores safe-area | `components/site/MiniCart.tsx:39` |
| P0-7 | `mix-blend-multiply` on logo — slow on iOS Safari | `components/site/SiteChrome.tsx:15` |

### P1 — Mobile homepage IA (PR-Mobile-2)

| # | Finding | Notes |
|---|---|---|
| P1-1 | No mobile nav menu — only logo + cart visible | `components/site/SiteChrome.tsx` |
| P1-2 | No mobile trust block (4 stats per spec §5.1) | missing |
| P1-3 | No mobile ritual block (how to prepare) | missing |
| P1-4 | No FAQ teaser on home | missing |
| P1-5 | No honest pre-launch / sourcing note | missing |
| P1-6 | Product card "Details →" reads as decoration, not CTA | `app/page.tsx:69-71` |
| P1-7 | StickyShopCTA is bottom-right floating pill — desktop thinking; needs full-width bottom bar on mobile | `components/site/StickyShopCTA.tsx:42` |
| P1-8 | MobileStoryCards `alt=""` — images convey content (Origin / Slow / Ritual) | `components/site/MobileStoryCards.tsx:54` |
| P1-9 | Email capture buried in footer only — no dedicated pre-footer conversion moment on mobile | `components/site/SiteFooter.tsx` |

### P2 — PDP mobile conversion (PR-Mobile-3)

| # | Finding | Location |
|---|---|---|
| P2-1 | PDP hero: huge `aspect-square` image renders before name/price/CTA on mobile (DOM order = image first, text second) | `components/product/ProductHero.tsx:16-26` |
| P2-2 | PDP `pt-32` ignores safe-area top under fixed header | `components/product/ProductHero.tsx:14` |
| P2-3 | No sticky bottom buy bar on PDP (spec §4.1) | missing |
| P2-4 | ProvenanceTable `grid-cols-3` cramped at 320–360 px | `components/product/ProvenanceTable.tsx:82` |
| P2-5 | TasteProfile `grid-cols-3` cramped at 320 px | `components/product/TasteProfile.tsx:36` |

### P3 — Motion + performance (PR-Mobile-4)

| # | Finding | Location |
|---|---|---|
| P3-1 | Lenis `syncTouch: true` — iOS scroll-fight risk | `components/providers/LenisProvider.tsx:33` |
| P3-2 | `h-screen` (100vh) in cinematic wrappers → iOS address-bar layout shift | `components/scroll/CinematicScroll.tsx:372`, `components/scroll/HeroPinned.tsx:166`, `components/scroll/OriginPinned.tsx:154` |
| P3-3 | `freddo-ambient::before` 16 s drift runs on mobile (wasted GPU) | `app/globals.css:46-59` |
| P3-4 | Cinematic timeline JS ships to mobile even when `hidden md:block` | `app/page.tsx:14-17` |

### P4 — Accessibility + polish (PR-Mobile-5)

| # | Finding | Location |
|---|---|---|
| P4-1 | No skip-to-content link | missing |
| P4-2 | Footer text at `/40` and `/50` opacity — likely fails WCAG AA on `#0d1f15` | `components/site/SiteFooter.tsx:67, 87, 91` |
| P4-3 | No focus trap in MiniCart or future MobileNav | `components/site/MiniCart.tsx` |

---

## 7. Rebuild PRs

### PR-Mobile-1 — Real-device foundation

Platform basics. No mobile UX can ride on top until this lands.

- [ ] `app/layout.tsx` — `export const viewport: Viewport` with `viewportFit: "cover"`, themeColor light/dark, width/initialScale.
- [ ] `app/globals.css` `@theme` — safe-area spacing tokens (`--spacing-safe-top`, `-bottom`, `-left`, `-right`).
- [ ] `SiteChrome` — safe-area top, cart button ≥ 44 px, drop `mix-blend-multiply`.
- [ ] `StickyShopCTA` — full-width bottom bar on mobile with safe-area padding; floating pill on desktop.
- [ ] `TrustStrip` — bump to `text-[0.7rem]`; show all three signals on every viewport.
- [ ] `EmailCapture` — `text-base`, `inputMode`, `autoComplete`, `py-3`.
- [ ] `MiniCart` — header `pt-safe-top`, footer `pb-safe-bottom`.

**Acceptance:** No iOS input zoom · no CTA hidden behind home indicator · no primary tap target under 44 px · no horizontal overflow at 320 / 360 / 390 / 430 px · no `mix-blend-multiply` in fixed-position chrome.

### PR-Mobile-2 — Mobile homepage rebuild

The locked homepage order, each section a stop on the selling journey.

- [ ] `components/site/MobileNav.tsx` — hamburger + left-slide drawer (Shop · Our Matcha · Ritual · Sourcing · Contact · Reduce motion).
- [ ] `components/site/MobileStarProduct.tsx` — lead-SKU hero card with full-width `[View product]` CTA.
- [ ] `components/site/MobileTrustBlock.tsx` — 2×2 stat grid (Origin · Harvest · Lab · Shipping).
- [ ] `components/site/MobileRitualBlock.tsx` — Whisk · Pour · Drink.
- [ ] `components/site/MobilePreLaunchNote.tsx` — honest founder-voiced copy.
- [ ] `components/site/MobileFAQTeaser.tsx` — 3 `<details>` Qs + link to full FAQ.
- [ ] `components/site/MobileEmailSection.tsx` — dedicated pre-footer section wrapping `<EmailCapture>`.
- [ ] `app/page.tsx` — render locked order under `md:hidden`; hide `#products` grid on mobile when star ships.
- [ ] Product-card CTA promoted to full-width `View product` pill.
- [ ] `MobileStoryCards` — real alt text per card.
- [ ] `SiteChrome` — mount `<MobileNav />`.

**Acceptance:** User understands what Freddo Matcha sells within 3 seconds · star CTA visible before deep story · trust + ritual proof appear before email capture / footer · mobile nav reachable with one thumb · pre-launch note reads honest.

### PR-Mobile-3 — PDP mobile conversion rebuild

A buyer on a phone sees name, price, and CTA **before** the image.

- [ ] `ProductHero` — text block first in DOM (`order-1 md:order-2`), image second (`order-2 md:order-1`), image `aspect-[4/5] md:aspect-square`, top padding safe-area-aware, primary CTA `w-full sm:w-auto`.
- [ ] `components/product/MobileStickyBuyBar.tsx` — `[ Name · €X · Notify me ]`. CTA carries a word. Four hide rules:
  - MiniCart open
  - MobileNav open
  - Footer / `MobileEmailSection` in view
  - Any text input focused (proxy for mobile keyboard)
- [ ] `ProvenanceTable` — `flex flex-col gap-1 sm:grid sm:grid-cols-3 sm:gap-4`.
- [ ] `TasteProfile` — same treatment.

**Acceptance:** Name + tagline + price + CTA visible above fold on iPhone 14 (390 × 844) · sticky bar appears after hero CTA scrolls out and respects all four hide rules · provenance + taste data readable at 320 px · desktop PDP visually unchanged.

### PR-Mobile-4 — Performance & motion

Mobile feels native, light, zero-jank. Desktop cinematic untouched.

- [ ] `LenisProvider` — `if (reduce || isTouch) return;` where `isTouch = matchMedia("(pointer: coarse)").matches`.
- [ ] `h-screen → h-[100dvh]` in `CinematicScroll`, `HeroPinned`, `OriginPinned`.
- [ ] Gate `.freddo-ambient::before` to `@media (min-width: 768px) and (hover: hover)`.
- [ ] Dynamic-import `CinematicScroll` on `app/page.tsx` via `next/dynamic` so the desktop timeline JS doesn't ship to mobile.

**Acceptance:** Native iOS / Android scroll, no Lenis fight · no address-bar layout shift on iOS hero · **at 360 × 740, DevTools Network panel shows no request for the CinematicScroll chunk** (rollback trigger) · `getAnimations()` shows no `freddoDrift` on mobile · desktop cinematic visually + behaviorally unchanged · desktop Lighthouse LCP regression ≤ 100 ms.

### PR-Mobile-5 — Accessibility & polish

Lighthouse a11y ≥ 95. Keyboard-complete.

- [ ] `components/site/SkipToContent.tsx` — visually hidden until focused; first child of `<body>`.
- [ ] `id="main"` on `<main>` in home, story, and PDP routes.
- [ ] `SiteFooter` — raise `/40 → /65` and `/50 → /70`; verify contrast ≥ 4.5:1 on `#0d1f15`.
- [ ] `lib/useFocusTrap.ts` — locked spec applied identically to `MobileNav` and `MiniCart`:
  ```txt
  On open:
    - save document.activeElement to "returnFocusTo" ref
    - focus the drawer's close button (or first nav link)
    - trap Tab: wrap from last → first, Shift+Tab from first → last
    - Escape closes
    - body scroll lock (overflow: hidden)
  On close:
    - restore focus to returnFocusTo
    - release body scroll lock
  ```
- [ ] `aria-label` sweep on icon-only + arrow-only buttons across new mobile components.

**Acceptance:** Lighthouse mobile a11y ≥ 95 · keyboard opens / closes nav + cart (`Tab`, `Enter`, `Escape`) · screen reader can skip past the fixed header · every meaningful image has meaningful alt text.

---

## 8. Verification

### Per-PR

- **Viewport sweep:** `preview_resize` to 360 × 740, 390 × 844, 430 × 932 → `preview_screenshot` of `/`, `/story`, `/products/ceremonial-matcha` → console clean → network no surprises.
- **Interaction smoke:** open MobileNav, navigate, close · open MiniCart, submit email, close · tap product card → PDP → sticky buy bar.
- **Reduced-motion:** force `prefers-reduced-motion: reduce` + the `force-reduce-motion` toggle. Nothing animates.
- **Desktop regression:** `preview_resize` to 1440 × 900, screenshot home + PDP. Diff against pre-PR baseline. Cinematic must be visually identical.

### Final Lighthouse mobile

Chrome Lighthouse (mobile preset, slow 4G, 4× CPU throttle) against `next build && next start` on `/`, `/story`, `/products/ceremonial-matcha`. Targets:

- Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 90
- LCP ≤ 2.0 s
- CLS < 0.05
- INP ≤ 200 ms

---

## 9. Final Lighthouse measurements

Production build (`next build && next start`), viewport 360 × 740 (mobile preset, simulate throttling, headless Chrome):

| Page | Performance | Accessibility | Best Practices | SEO | LCP | FCP | CLS | TBT |
|------|------------:|--------------:|---------------:|----:|----:|----:|----:|----:|
| Home (`/`) | **91** | **100** | **100** | 66 | 3.5 s | 0.9 s | **0** | 20 ms |
| PDP (`/producten/ceremoniele-matcha`) | 88 | **96** | **100** | 66 | 3.9 s | 0.9 s | **0** | 10 ms |

**Targets met:**
- ✅ Accessibility ≥ 95 (home 100, PDP 96)
- ✅ Best Practices ≥ 95 (both 100)
- ✅ CLS < 0.05 (both 0)
- ✅ INP / TBT ≤ 200 ms (both ≤ 20 ms)
- ✅ Performance ≥ 90 on the home (91); PDP at 88 — 2 points shy. Improving PDP LCP further means optimizing the priority hero image (next round: WebP/AVIF assets when the real photography lands replacing the SVG mockups).

**SEO capped at 66 by design:** the intentional pre-launch `robots: { index: false, follow: false }` in `app/layout.tsx` fails Lighthouse's "is-crawlable" check. At launch, flip to `index: true` and SEO jumps to ≥ 95. This is the only audit failing for SEO.

For reference, the same audits in `next dev` reported Performance 75 / LCP 7.8 s — `next dev` ships unminified JS, no image optimization, no compression, so dev numbers are not ship-bar. Always Lighthouse against `next start` for shippable scores.

## 10. Do not regress

These are the things that must remain true after this rebuild:

- Desktop cinematic visually + behaviorally identical (`HeroPinned`, `OriginPinned`, `CinematicScroll`, `GrindingScene`, `WhiskingScene`, `BuyClose`).
- All `gsap.matchMedia` reduced-motion + breakpoint gates intact.
- `prefers-reduced-motion: reduce` kills all motion via both the system pref path and the `force-reduce-motion` toggle.
- `next/image` `sizes` + `priority` hints on hero images unchanged.
- `next/font` `display: "swap"` on Fraunces + Inter unchanged.
- No new client component pushed above the existing root-layout boundary (`LenisProvider` + `CartProvider` only).
- `lib/products.ts`, `lib/motion.ts`, `lib/gsap.ts`, `lib/analytics.ts` untouched.

---

## 11. Open after rebuild

These are deliberately not in scope here; they belong to later PRs in `product-and-commerce-spec.md` §7:

- PR-5 — Commerce backend (Shopify Storefront API, real cart, checkout).
- PR-6 — Final brand asset replacement (real packaging photos, lab cert PDFs, press logos).
- PR-7 — Klaviyo flows wired to email capture.
- PR-8 — Editorial / journal in Sanity.

When `MobilePreLaunchNote` flips to a real press/reviews block, it gets renamed in code — until then, "honest > placeholder."
