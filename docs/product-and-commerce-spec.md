# Freddo Matcha — Product & Commerce Specification

> **Companion to** [`design-spec-graphics.md`](design-spec-graphics.md).
> **Audience:** founder, PM, engineering, designer, future hires.
> **Purpose:** the strategic + technical brief for turning a beautiful scroll concept into a **premium, conversion-capable ecommerce site** that sells real matcha powder.
> **Status:** Slice 1 cinematic build exists. Brand identity, proof system, commerce backend, mobile strategy, and product pages are **not yet built**. This doc defines all of them.

---

## 0. The honest verdict

The current site is a **beautiful film idea**, not yet a premium webshop.

Premium ecommerce comes from six pillars, in this order:
1. **Brand** (name, mark, story, voice)
2. **Proof** (origin, cultivar, harvest, lab data, certifications)
3. **Photography** (authentic, restrained, on-brand)
4. **Product clarity** (every SKU has a real story and a real reason to exist)
5. **Conversion** (checkout trust, fast paths to buy, mobile-first)
6. **Restraint** (less, but louder — silence is premium)

Animation is the **eighth** thing that matters, not the first. The site nails motion grammar — but a buyer who can't reach the products or trust the origin will leave anyway. This document fixes that.

---

## 1. Brand foundation

### 1.1 Name

- **Display name:** Freddo Matcha
- **Compact / lockup style:** FREDDOMATCHA (all caps, single word — for OG, packaging, social avatars)
- **Voice when written in copy:** "Freddo Matcha" two words, title case
- **Domain candidates:** `freddomatcha.com` (primary), `.eu`, `.it`, `.shop` (fallbacks)
- **Social handles to lock:** `@freddomatcha` on Instagram, TikTok, X

### 1.2 What the name means

"Freddo" is Italian for *cold*. The name is **not** a product descriptor — Freddo Matcha sells matcha powder, not RTD bottles. The name is a **positioning signal**: a modern European matcha house, Italian-design sensibility, Japanese sourcing, an invitation to drink matcha **your way** (iced, latte, ceremonial, whisked, shaken).

> This deliberate tension — Italian name, Japanese product — is the brand. Lean into it. Don't apologize for it. Don't fake it (no fake Italian copy, no fake Japanese kanji). Two cultures, one product, one bowl.

### 1.3 Positioning statement

> **For** people who care about what they put in their body and how their morning feels,
> **Freddo Matcha** is a single-origin Japanese matcha powder dressed in European restraint —
> **unlike** wellness-stock matcha or supermarket bulk,
> **it earns its place** through provable origin, low-bitterness flavor, and a brand that respects both the leaf and the buyer.

### 1.4 Voice & tone

| Quality | Yes | No |
|---|---|---|
| **Direct** | "Whisked in 20 seconds. Steady before the day starts." | "Embark on a journey of mindful wellness." |
| **Sensory** | "Soft umami body, low bitterness, clean green finish." | "Smooth and delicious." |
| **Honest** | "We don't shade-grow our own leaves. We buy from a family farm in Uji that does." | "Crafted with ancient tradition." |
| **Restrained** | Three adjectives max per sentence. | Five-adjective paragraphs. |
| **Specific** | "Cultivar: Okumidori. Harvested April 2026." | "Premium ceremonial-grade." |
| **Cross-cultural** | "Italian restraint meets Japanese ceremony." | Either nationality's clichés. |

### 1.5 Veto list — voice & copy

Additions to the visual veto list in [`design-spec-graphics.md`](design-spec-graphics.md):

- ❌ "Ancient ritual" / "centuries-old tradition" / "the way of tea"
- ❌ Fake Japanese phrases as decoration ("おいしい matcha for you")
- ❌ Fake Italian phrases as decoration ("la dolce matcha")
- ❌ Wellness language: *zen, mindful, balance, holistic, superfood, detox, glow, energy boost*
- ❌ "Premium" or "luxury" used as adjectives (show, don't say)
- ❌ "Limited edition" without an actual limit (no fake scarcity)
- ❌ Exclamation marks in product copy
- ❌ Caffeine claims unless lab-verified
- ❌ Medical / health claims of any kind (EU regs anyway)

### 1.6 Required identity deliverables (PR-1)

| # | Asset | Spec | Notes |
|---|---|---|---|
| 1 | Wordmark — primary | SVG, "Freddo Matcha", Fraunces-aware custom letterforms | Two words, title case |
| 2 | Wordmark — compact | SVG, "FREDDOMATCHA", single word, all caps | For square placements |
| 3 | Monogram | SVG, single glyph (F&M ligature, or 飛 / 二 ideogram pairing, or single calligraphic mark) | For favicon, social avatar |
| 4 | Favicon | `favicon.ico` 32×32 + Apple touch icon 180×180 + PWA 192/512 | In `/public/` |
| 5 | Packaging label system | AI + PDF + dieline. Tin/canister + pouch variants | See §2.4 |
| 6 | OG default image | 1200×630 JPG, wordmark + tagline + hero composition | One per language eventually |
| 7 | Email header | 1600×400 master, simplifiable to 600×200 | For Klaviyo flows |
| 8 | Color tokens | Already locked in [`app/globals.css`](../app/globals.css) | Designer adds 0–2 accents if needed |

---

## 2. Product system

### 2.1 SKUs at launch

Source of truth: [`lib/products.ts`](../lib/products.ts). Current SKU set (verified):

| Slug | Name | Price | Description |
|---|---|---|---|
| `ceremonial` | Ceremonial Matcha | €48.00 | Stone-ground from first-harvest leaves |
| `everyday` | Everyday Matcha | €28.00 | For the morning latte that becomes a habit |
| `starter-kit` | Starter Kit | €78.00 | Bowl, chasen, scoop, 30g of Everyday |

**Recommendation:** rename for brand voice once locked:

| Old slug | Old name | Proposed new name | Why |
|---|---|---|---|
| `ceremonial` | Ceremonial Matcha | **Freddo Ceremonial** | Brand-led, signals top of line |
| `everyday` | Everyday Matcha | **Freddo Quotidiano** | Italian word for "everyday" — leans into the brand tension |
| `starter-kit` | Starter Kit | **Il Rito** ("the ritual") | Italian for ritual — frames the kit as the gateway |

> Naming is owner's call. The argument for Italian sub-naming: it differentiates from every other matcha brand on the shelf and earns the "Freddo" name. The argument against: complicates SEO and may feel forced. **Decision needed before PR-2.**

### 2.2 Trust / proof block (required per SKU, displayed on product page + summarized on home)

This is the **single most important upgrade** to make the site feel real. Every SKU must publish:

| Field | Example | Source / how we know |
|---|---|---|
| **Origin** | Uji, Kyoto, Japan | Supplier contract |
| **Farm** | "Yamashita family farm" or "anonymized partner farm" | Supplier (anonymize if needed) |
| **Cultivar** | Okumidori / Samidori / Yabukita / blend | Supplier spec sheet |
| **Harvest** | First flush, April 2026 | Supplier batch tag |
| **Grade** | Ceremonial / Everyday | Brand grading |
| **Stone-ground** | Yes — granite mill, 40g/hour | Supplier confirmation |
| **Lab tested** | Heavy metals, pesticides, radioactivity | Independent lab cert (PDF available on request) |
| **Certifications** | JAS Organic (if applicable) | Cert number + issuing body |
| **Packed in** | Netherlands / EU | Brand operations |
| **Net weight** | 30g / 50g / 100g | Per SKU |
| **Best before** | 12 months from packing date | Brand operations |
| **Storage** | Refrigerate after opening. Sealed pouch ≤25°C. | Supplier spec |

**UI pattern:** dense, table-like, no flourish. Set in Inter, `text-sm`, `ink-soft`. Lab cert downloads as PDF (link). This is the "show, don't say" version of premium.

### 2.3 Pricing strategy

Current: €28 / €48 / €78 — sensible mid-tier premium. Two notes:

1. **VAT-inclusive prices** on the EU storefront (legally required for B2C). Code in [`lib/products.ts`](../lib/products.ts) stores prices in cents; confirm whether `priceCents` is gross or net before launch.
2. **Free shipping threshold** at €60 (encourages bundle into starter kit or 2× pack). Show in header strip.
3. **Subscribe & save** (post-launch): −10% on recurring monthly Everyday. Locks LTV.

### 2.4 Packaging

The site's photography depends on the packaging existing first. Order of operations is non-negotiable:

1. Lock SKU names
2. Lock packaging substrate (tin? pouch? both?)
3. Designer delivers label system (front, back, dieline)
4. Producer creates physical samples
5. Photography shoots the real product
6. Site replaces placeholders

Skipping any step produces fake-looking imagery.

**Substrate recommendation:** matte tin canister (Freddo Ceremonial), resealable matte pouch (Everyday / Quotidiano), wood-shaving + bamboo whisk box (Starter Kit / Il Rito). All in cream-100 / matcha-900 colorway, single-color label print, no foil unless real foil.

### 2.5 Future SKUs (roadmap, do not build yet)

- **Cold-brew sachets** (would finally earn the "Freddo" name literally)
- **Single-serve travel tin** (10× 2g doses)
- **Whisk + scoop refill kit**
- **Limited "harvest drop"** (first flush only, numbered, sold once a year)
- **Gift set** (canister + ceramic bowl from a named maker)

These are explicitly **not** PR-1 through PR-5 scope. Logged for the long-term plan.

---

## 3. Product page specification

Each SKU needs its own URL: `/products/[slug]` (Next.js App Router dynamic route, not yet built).

### 3.1 Layout (top to bottom)

1. **Hero** — primary product shot left (desktop) / top (mobile), name + price + buy CTA right.
2. **Quick spec strip** — origin · cultivar · harvest · grade · weight (one row, dense).
3. **Taste notes** — 3–5 short descriptors with intensity markers (umami ▮▮▮▮▯, bitterness ▮▮▯▯▯, sweetness ▮▮▮▯▯).
4. **Best for** — chips: straight / latte / iced / baking. Each links to a one-line preparation card.
5. **Long description** — editorial, 80–120 words. Story of this specific lot.
6. **Preparation card** — 3-step "how to brew" (ceremonial) or "how to whisk for latte" (everyday). Imagery from §5.4 of the graphics spec.
7. **Full trust block** — table from §2.2.
8. **Shipping & returns** — collapsible. EU shipping rates, transit times, return policy (perishable; opened pouches non-returnable; sealed within 14 days yes).
9. **FAQ** — 5–7 questions, brand-specific. (Caffeine? Vegan? Gluten-free? Shelf life after opening? Why is it greener/duller than another brand?)
10. **Reviews** — placeholder until 30+ reviews accumulate. Then enable.
11. **Related products** — 2 cards. Cross-sells.

### 3.2 Required photography per SKU (extends graphics spec §5.5)

| Shot | Purpose |
|---|---|
| Hero — pack on cream surface | Hero / OG / above-fold |
| Lifestyle — pack in use (hands, bowl, kitchen) | Below hero |
| Macro — powder texture (this lot's actual color) | Quick-spec strip / trust block |
| Detail — label / cultivar info close-up | Trust block |

That's **4 shots × 3 SKUs = 12 photos**, plus the home cinematic set. Budget photography accordingly.

### 3.3 Accessibility & SEO

- Product schema: `<script type="application/ld+json">` with `Product`, `Offer`, `AggregateRating` (once reviews exist), and `Brand`.
- Breadcrumbs: Home → Shop → [Product]. Schema breadcrumbs too.
- Alt text per shot, written by designer or copy.
- Open Graph per product (`og:image`, `og:title`, `og:description`).

---

## 4. Conversion layer

The cinematic scroll is great for first-time visitors. It is a **conversion blocker** for everyone else. Fix:

### 4.1 Sticky shop CTA

- Appears after 20% scroll on the home page.
- Top-right (desktop), bottom-bar (mobile).
- Label: "Shop matcha" → anchors to `#shop` or opens a slide-over cart-aware menu.
- Hides on product pages (already shopping).
- Reduced motion: appears immediately on scroll, no animated reveal.

### 4.2 Skip-story link

- Top-right of viewport on home, only when cinematic is pinned.
- Subtle, `text-xs`, `ink-soft`, underline on hover.
- Label: "Skip to shop →"
- Scrolls past the cinematic sequence to `#shop`.

### 4.3 Mini cart

- Header right side. Cart icon + count.
- Click → slide-over from right.
- Always accessible, every page.
- Shows: line items, subtotal, ship-to country selector, "Checkout" CTA, "View cart" link.

### 4.4 Trust strip in header

- One thin row above main nav: "Free EU shipping over €60 · Lab-tested · Stone-ground in small batches"
- Replaces empty space, adds proof above the fold immediately.

### 4.5 Reduced-motion path

- Site already respects `prefers-reduced-motion` for animation.
- Add a **manual toggle** in footer: "Reduce motion" — sets a `localStorage` flag, swaps CinematicScroll for a static editorial version (linear sections, no pin).
- Necessary for accessibility audit and for buyers who get motion-sick.

### 4.6 Checkout confidence

- Logos of payment methods accepted (iDEAL, Visa, Mastercard, Bancontact, PayPal) shown in footer.
- "Secure checkout" badge — only if real (Shopify provides this).
- Returns policy linked in footer.
- Contact email visible.

---

## 5. Mobile strategy

The 500% pinned hero is **broken on mobile**. The current build's mobile fallback (no pin, scroll-triggered reveals) is good. But the **overall page weight + scroll length** is still desktop-thinking.

### 5.1 Mobile information architecture

Rewrite home page mobile flow (do NOT try to compress the cinematic into mobile):

1. **Hero** — single image, headline, primary CTA "Shop" + secondary "Our story"
2. **Three story cards** — Origin · Stone-mill · Whisk. Tap-through to story page.
3. **Product grid** — 3 SKUs, full-width cards, easy thumb reach
4. **Trust strip** — 4 stats (origin / harvest / lab / shipping)
5. **Press / reviews snippet** (once reviews exist)
6. **FAQ teaser** — 3 questions, link to full FAQ
7. **Email capture** — single field, soft ask
8. **Footer** — minimal, dense

### 5.2 Mobile motion budget

- Hero: subtle fade-in, no pin.
- Story cards: parallax-ish on scroll into view (single property, transform only).
- Product cards: lift on tap-press.
- Trust block: appears.
- That's it. No 5-stage cinematic on mobile.

### 5.3 Mobile performance targets

- LCP ≤ 2.0s on 4G mid-tier device
- CLS < 0.05
- INP ≤ 200ms
- Total page weight ≤ 1.5MB before lazy-loaded imagery
- Test on iPhone SE 2020 + a real Android mid-tier (e.g. Pixel 6a) before launch

---

## 6. Commerce stack

### 6.1 Recommendation

| Layer | Choice | Why |
|---|---|---|
| **Framework** | Next.js 16 (current) | Already chosen. App Router, RSC, Server Actions — production-grade. |
| **Styling** | Tailwind v4 (current) | Already chosen. Tokens map to globals.css. |
| **Motion** | GSAP + ScrollTrigger + Lenis (current) | Already chosen. Best-in-class for scroll storytelling. |
| **3D / WebGL** | None at launch | Add React Three Fiber **only** if we want a rotating 3D canister moment, and only after PR-5. |
| **Image CDN** | Next/Image + (optional) Cloudinary | Next/Image covers MVP. Cloudinary if we need on-the-fly transformations for marketing surfaces. |
| **Commerce backend** | **Shopify Storefront API** via Next.js Commerce template | Battle-tested. Handles taxes, shipping, refunds, inventory, fraud, GDPR, EU VAT. We don't rebuild any of that. |
| **Checkout** | **Shopify Checkout** | Industry-leading conversion, secure, EU-compliant, supports iDEAL/Bancontact natively. |
| **CMS** | **Sanity** (recommended) or Payload | Editorial content (blog, origin stories, lookbook) lives in CMS. Product data lives in Shopify. |
| **Email** | **Klaviyo** | Best-in-class ecommerce email/SMS. Welcome flow, abandoned cart, post-purchase, win-back. |
| **Analytics** | PostHog (product) + GA4 (acquisition) + Meta Pixel (ads) | Three tools, three jobs. |
| **Auth** | Shopify customer accounts | No custom auth — Shopify handles it. |
| **Hosting** | Vercel | Native Next.js, edge functions, image optimization. |

### 6.2 Stack rule

> Do **not** build a custom commerce engine. We are a matcha brand, not a Shopify competitor.

We use Shopify for everything that's a solved problem (catalog, cart, checkout, payments, taxes, shipping, refunds, customer accounts, order admin). We use Next.js for everything that's our differentiation (cinematic homepage, editorial product pages, motion grammar).

### 6.3 Architecture

```
User
  │
  ▼
Vercel (Next.js 16 App Router)
  ├─ /                 (cinematic home)
  ├─ /products/[slug]  (product pages — RSC + Shopify Storefront API)
  ├─ /shop             (catalog grid)
  ├─ /story            (editorial — Sanity)
  └─ /cart             (Shopify-aware mini-cart)
  │
  ├──► Shopify Storefront API (products, inventory, cart, checkout URL)
  ├──► Sanity (editorial content, origin stories, lookbook)
  ├──► Klaviyo (email capture, flows)
  ├──► PostHog / GA4 / Meta Pixel (analytics)
  └──► Cloudinary (optional, transformations)
```

### 6.4 What we do not need yet

- Custom backend / database (Shopify handles it)
- Auth provider (Shopify handles it)
- Payment gateway integration (Shopify handles it)
- Email server (Klaviyo handles it)
- Search infrastructure (Shopify search is fine for <50 SKUs; Algolia later)
- Mobile app (web is the channel until proven otherwise)

---

## 7. PR roadmap

### PR-1 — Brand foundation
**Goal:** No more Next.js scaffold remnants. No more placeholder identity.

- [ ] Lock `Freddo Matcha` name across codebase ([app/layout.tsx](../app/layout.tsx) metadata, [package.json](../package.json), [README.md](../README.md), [lib/products.ts](../lib/products.ts) copy, all visible UI strings)
- [ ] Designer delivers wordmark, monogram, favicon, OG, packaging label system
- [ ] Wire favicon + OG into `app/layout.tsx` metadata
- [ ] Remove `public/file.svg`, `public/globe.svg`, `public/window.svg`, `public/next.svg`, `public/vercel.svg` (Next.js scaffold leftovers)
- [ ] Update `<title>` template to `%s · Freddo Matcha`
- [ ] Update meta description to brand-specific copy

**Acceptance:** open any page; nothing says "Matcha" generically, nothing references Next.js or Vercel.

### PR-2 — Premium asset replacement
**Goal:** Replace every placeholder image with final brand-grade work.

- [ ] All P0 deliverables from graphics spec §10 land in `public/images/`
- [ ] Component refs updated to new filenames
- [ ] Alt text per image
- [ ] Lighthouse pass: LCP ≤ 2.5s desktop, ≤ 2.0s mobile

**Acceptance:** every visible image is final brand work. No `freddo-neon-garden.svg` placeholder concept art in production.

### PR-3 — Conversion layer
**Goal:** A buyer can reach the products in one tap from any point in the page.

- [ ] Sticky shop CTA component (appears at 20% scroll)
- [ ] Skip-story link during cinematic pin
- [ ] Mini-cart slide-over (Shopify-aware once PR-5 lands; local-state placeholder for now)
- [ ] Header trust strip
- [ ] Manual reduce-motion toggle (footer)
- [ ] Footer with payment-method logos, policies, contact

**Acceptance:** user testing — 5 people can reach product detail page within 10 seconds of landing.

### PR-4 — Mobile scroll redesign
**Goal:** Mobile is not a compressed desktop. It's a different experience with the same brand DNA.

- [ ] Mobile-specific home flow per §5.1
- [ ] Motion budget enforced per §5.2
- [ ] Performance targets met per §5.3
- [ ] CinematicScroll on mobile = static editorial fallback (not pinned)

**Acceptance:** Lighthouse mobile score ≥ 90 performance, ≥ 95 accessibility. Real-device tests on iPhone SE + Pixel 6a pass without jank.

### PR-5 — Commerce integration
**Goal:** Real orders can be placed.

- [ ] Shopify store provisioned, products created (3 SKUs)
- [ ] Storefront API keys wired into Next.js env
- [ ] Next.js Commerce patterns adopted (or rolled bespoke) for cart, catalog, checkout redirect
- [ ] [`lib/products.ts`](../lib/products.ts) deprecated in favor of Shopify-sourced product data
- [ ] Cart persists across pages (cookie or Shopify cart ID)
- [ ] Checkout redirects to Shopify-hosted checkout
- [ ] Order confirmation email (Shopify default; Klaviyo styled in PR-7)

**Acceptance:** founder places a real test order; Shopify shows order; confirmation arrives; refund flow works.

### PR-6 — Product page depth
**Goal:** Every SKU has a real product page, not a card link.

- [ ] `/products/[slug]` dynamic route built
- [ ] Layout per §3.1
- [ ] Trust block per §2.2 (data sourced from Shopify metafields or Sanity)
- [ ] Preparation cards (3-step how-to)
- [ ] FAQ component
- [ ] SEO metadata + JSON-LD `Product` schema
- [ ] OG image per SKU

**Acceptance:** product pages rank for "Freddo Matcha [SKU name]" and convert ≥ 2% from home → product → add-to-cart.

### PR-7 — Analytics & email
**Goal:** We can measure what's working and re-engage buyers.

- [ ] PostHog SDK + GA4 + Meta Pixel installed
- [ ] Event taxonomy locked (`viewed_product`, `added_to_cart`, `started_checkout`, `purchased`)
- [ ] Klaviyo welcome flow (1 email after email capture)
- [ ] Klaviyo abandoned-cart flow (3 emails over 7 days)
- [ ] Klaviyo post-purchase flow (review request day 14, replenishment day 45)
- [ ] Email capture component on home + footer

**Acceptance:** every funnel event fires correctly; first email sent within 1 hour of test signup.

### PR-8 — Reviews + subscriptions (post-launch growth)
**Goal:** Social proof + recurring revenue.

- [ ] Reviews integration (Stamped, Judge.me, or Shopify Reviews)
- [ ] Subscribe & Save on Everyday SKU (Shopify subscription app, e.g. Recharge or native)
- [ ] Bundle builder (mix-and-match 2× pack for €60 free shipping threshold)

**Acceptance:** 30+ reviews collected within first 90 days post-launch. Subscription LTV measured.

---

## 8. Risk register

| Risk | Severity | Mitigation |
|---|---|---|
| **"Freddo" name expectation gap** (buyers expect cold-brew product) | Medium | Lead with brand explainer above the fold; produce one cold-brew preparation card as content; consider a cold-brew sachet SKU in 2027 to literally earn the name |
| **Cultural appropriation perception** (Italian name on Japanese product) | Medium | Be explicit about the fusion in brand voice; never use fake kanji or fake Italian; if asked, founder talks openly about the cross-cultural intent |
| **Sourcing not locked at launch** | High | Soft-launch with a clear "Pre-order — shipping June 2026" banner if needed; do not publish lab data or cultivar until verified |
| **Mobile cinematic performance** | Medium | PR-4 enforces a different mobile flow; do not try to make 500% scroll work on phones |
| **Conversion vs cinematic tension** | High | PR-3 conversion layer is non-negotiable; cinematic is the first-time-visitor experience, not the only path |
| **Real photography cost / timeline** | High | Budget €5–15k for a one-day shoot in studio + €2–5k for an origin trip to Uji if feasible; otherwise license editorial via a Japan-based photographer |
| **EU food labeling compliance** | Medium | Engage a food-law consultant before printing packaging; ingredients + allergens + best-before are legally required |
| **Shipping perishables across EU** | Medium | Sealed pouches/tins are shelf-stable; refrigeration only after opening; clarify in policy |
| **Counterfeit / sourcing transparency demands** | Low at launch, grows with brand | Publish supplier farm name + lab cert PDFs once relationship matures; do not lie about origin |

---

## 9. Launch criteria

Site is **ready for paid acquisition** when:

1. ✅ Brand identity complete (PR-1)
2. ✅ All P0 photography in place (PR-2)
3. ✅ Buyer can reach product page in ≤ 2 taps (PR-3)
4. ✅ Mobile Lighthouse ≥ 90 (PR-4)
5. ✅ Shopify checkout works end-to-end (PR-5)
6. ✅ Each SKU has full product page with proof (PR-6)
7. ✅ Analytics + welcome email fires (PR-7)
8. ✅ Cookie banner + GDPR-compliant privacy policy live
9. ✅ Terms of sale, refund policy, shipping policy live
10. ✅ Trademark search complete for "Freddo Matcha" in EU + US
11. ✅ Domain + email (`hello@freddomatcha.com`) provisioned
12. ✅ Founder has placed and received a real test order

Anything missing = not launching. The site can be **soft-published** (live, indexable) once PR-1 + PR-2 are done, marked as "Coming soon — pre-orders open [date]." Real paid traffic only after the full launch checklist.

---

## 10. Open decisions for founder

These are blockers I (engineering) cannot decide unilaterally. Please respond:

| # | Decision | Why it matters |
|---|---|---|
| 1 | **SKU naming** — keep English (Ceremonial / Everyday / Starter Kit) or shift to Italian sub-names (Ceremoniale / Quotidiano / Il Rito)? | Locks copy, packaging, product page URLs |
| 2 | **Sourcing timeline** — when will the actual supplier + lot be locked? | Blocks PR-2 photography and PR-6 product pages |
| 3 | **Shopify vs Vercel-only?** | Strong recommendation for Shopify (see §6). If you'd rather take on the complexity, say so before PR-5 |
| 4 | **Photography approach** — original shoot in-studio + Uji origin trip, or curated editorial license? | Budget envelope is wildly different (€15–25k vs €3–5k) |
| 5 | **Launch target date** | Defines whether we sequence PR-1 → PR-8 over 3 months or 9 |
| 6 | **Geographic launch** — EU only, EU + UK, or worldwide? | Affects tax setup, shipping config, language (English-only vs multilingual) |
| 7 | **Subscription at launch?** | Either we build PR-8 subscription early (locked into Recharge/Native) or defer 6 months |
| 8 | **Founder availability** for content (founder story, behind-the-scenes, sourcing trip photos) | Founder-led content converts 3–5× better than anonymous brand voice for emerging brands |

---

*Document owner: engineering, with strategic input. Last grounded in repo state on 2026-05-16. Update alongside [`design-spec-graphics.md`](design-spec-graphics.md) — they are companion docs and must stay aligned.*
