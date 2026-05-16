# Freddo Matcha — Graphic Design Specification

> **For:** the graphic / visual designer enhancing the site's imagery and visual identity.
> **From:** product / engineering. Everything here is grounded in the current build (Next.js 16, App Router, Tailwind v4, GSAP, Lenis).
> **Companion doc:** [`product-and-commerce-spec.md`](product-and-commerce-spec.md) — covers brand identity, proof system, commerce stack, conversion, mobile strategy, and PR roadmap. Read that first if you're new to the project.
> **Status:** Slice 1 build live. All hero imagery is **placeholder**. This document is the brief for replacing placeholders with final brand-grade work, and for filling visual gaps.

---

## 0. TL;DR for the designer

1. We are building **Freddo Matcha** — a calm, premium, scroll-storytelling site for a single-origin matcha powder brand. **Italian-Japanese fusion** — European-styled house, Japanese sourcing (supplier and region locking before launch — see §2). Think editorial magazine + Apple product film, not "wellness blog."
2. **Brand name styling:** "Freddo Matcha" (two words, title case) for body display; "FREDDOMATCHA" (single-word all caps) for compact / OG / packaging lockups.
3. The whole site is **one pinned cinematic narrative**: leaf → stone-mill → whisk → bowl → buy. Your imagery has to support an animated reveal, not stand alone.
4. **Palette is locked** (10 matcha greens, 3 creams, 2 stone neutrals, 2 inks). **Typography is locked** (Fraunces display, Inter body). Do not redesign these — design *into* them.
5. **Motion grammar is locked** (rise / settle / drift / carve / lift). Imagery must be choreographable: subjects centered, generous negative space, no rigid edges that fight motion masks.
6. Deliver master assets in **3000px long edge minimum, sRGB, PNG-24 (transparency) or JPG quality 90 (photo)**. We optimize via Next.js Image at build time.
7. **Veto list at the bottom** — read it before drawing anything.

---

## 1. Vision

> **"Leaf to ritual."**
> Freddo Matcha is a single-origin Japanese matcha powder served the way you want it — whisked solo with hot water, shaken with ice, poured into oat milk. The site is a slow inhale — every section a deliberate pause, every motion earned.

We are selling a **ritual**, not a drink. The visual world has to feel like the moment *before* the first sip: light is soft, surfaces are matte, edges are warm, time is slower than the user expects.

**On the "Freddo" tension:** The brand name is Italian for *cold* but the product is matcha powder, not a cold-RTD bottle. The name is a **positioning signal** — modern European house with Japanese sourcing — not a product descriptor. Imagery should respect this dual lineage: Italian restraint (composition, light, restraint) + Japanese material truth (ceramic, leaf, stone). Never fake either culture. Never let the brand read as appropriation.

**Three adjectives the work must hit:**
- **Ceremonial** — composed, intentional, no wasted detail
- **Sensory** — you can almost smell the powder, feel the bamboo
- **Quiet** — restraint is the brand; if a graphic shouts, redo it

**Three adjectives the work must avoid:**
- Wellness-stock (silhouettes of yoga women, lotus flowers, sunrise gradients)
- Tech-corporate (sterile gradients, glassmorphism, neon)
- Folk-craft kitsch (hand-painted kanji, fake ink wash, dragon motifs)

---

## ⚠ Claims guardrail — read before producing any asset

> **Brand can be locked now. Product proof cannot be invented yet.**

The supplier relationship is being built. Until paperwork is in hand, the visual work **must not embed claims we cannot verify**. Premium dies the moment a buyer suspects you're guessing.

### What you MAY say in finished assets

- **"Single-origin Japanese matcha"**
- **"Japan"** (country only)
- **"Italian-Japanese house"** (brand positioning, not a sourcing claim)
- **"Ceremonial"** / **"Everyday"** — these are the brand's own grade categories
- **"Pre-orders opening soon"** / **"Launching"** (state of the brand)
- **"Packed in the European Union"** (operations fact)

### What you may NOT say (in copy, packaging, badges, captions, OG, ads) until verified by supplier docs

- ❌ **"Uji"** — region/city is unverified
- ❌ **"Kyoto"** / any specific prefecture
- ❌ **A named farm or grower** (e.g. "Yamashita farm")
- ❌ **"Stone-ground"** — until the supplier's grinding method is confirmed in writing
- ❌ **"First harvest"** / **"shincha"** / harvest season — until lot paperwork lands
- ❌ **A specific cultivar** (Okumidori, Samidori, Yabukita)
- ❌ **"JAS organic"** / **"organic"** — only with a real cert number on file
- ❌ **"Lab tested"** / heavy-metal / pesticide claims — only with the lab PDF on file
- ❌ **A specific harvest year** — until the lot is locked
- ❌ **"Hand-thrown ceramic"** — only with the maker's name on file
- ❌ **Caffeine / health claims** — never (EU food regulation)

### How this applies to your work

| Surface | Today (pre-launch) | After supplier locks |
|---|---|---|
| Wordmark / monogram | Lock now | unchanged |
| Packaging label — brand zone | Lock now | unchanged |
| Packaging label — provenance zone | Reserve space, do not fill | Fill with verified region / cultivar / harvest / lot |
| Origin map | Generic Japan + single pin | Add prefecture + farm dot |
| Provenance crest | "Single-Origin · Japan" only | Add region variant |
| Certification crest | **Do not produce** | Produce only for certifications actually held |
| Hero / lifestyle photography | Composition can lock | Avoid props or scene-setting that imply a specific region |
| Copy in caption blocks | Use the "MAY say" list | Switch to verified claims |

### Rule of thumb

> If you'd be embarrassed to be asked "show me the paperwork that proves this," don't put it in the asset.

When in doubt, ask engineering or the founder before producing. Cheaper than reprinting packaging.

---

## 2. Goals

| # | Goal | How a graphic contributes |
|---|------|---------------------------|
| 1 | **Convey single-origin authenticity** in <5 seconds | Real-feeling field, real ceramic, real human hands — no stock |
| 2 | **Make the user slow down** | Compositions with deep negative space; subjects sit low, not centered hot |
| 3 | **Sell premium without saying "premium"** | Texture, light, restraint. No gold foils, no "limited edition" badges |
| 4 | **Survive the cinematic scroll** | Subjects must read at multiple scales (0.86×–1.18×), inside circular and elliptical masks, with text overlaying lower third |
| 5 | **Respect accessibility** | Contrast ratios for any text-bearing imagery ≥ 4.5:1. Decorative SVGs must have neutral semantics |
| 6 | **Render fast** | Total imagery budget ≤ 4 MB per page after Next.js optimization. Source files can be larger; we compress |

---

## 3. Brand system (locked tokens — design *into* these)

### 3.1 Color palette

Defined in [`app/globals.css`](../app/globals.css) under `@theme`. Use only these — no off-palette swatches in finished work.

**Matcha greens (primary)**

| Token | Hex | Role |
|---|---|---|
| `matcha-950` | `#0d1f15` | Deepest — overlays, dark backgrounds, body ink |
| `matcha-900` | `#14301f` | Button hover, dark accents |
| `matcha-800` | `#1d4329` | Emphasized text |
| `matcha-700` | `#2c5a36` | Eyebrow labels, step numerals |
| `matcha-600` | `#3f7242` | Gradient stops |
| `matcha-500` | `#6f9342` | Mid-light glow |
| `matcha-400` | `#95b067` | Light accent |
| `matcha-300` | `#b9cc91` | Borders, secondary text on dark |
| `matcha-200` | `#d6e3b8` | Soft text on dark |
| `matcha-100` | `#ecf0d8` | Lightest tint |

**Cream / paper**

| Token | Hex | Role |
|---|---|---|
| `cream-50` | `#fbf7ec` | Body background, CTA fill |
| `cream-100` | `#f4eddb` | Product / whisking section background |
| `cream-200` | `#ebe1c5` | Reserved warm accent |

**Stone / ceramic**

| Token | Hex | Role |
|---|---|---|
| `stone-soft` | `#d8d0bf` | Card borders |
| `stone-mid` | `#a89e89` | Reserved accent |

**Inks**

| Token | Hex | Role |
|---|---|---|
| `ink` | `#15201a` | Primary text |
| `ink-soft` | `#4a5247` | Secondary text |

> If you need an accent we don't have (e.g. a "first harvest" badge color), propose one as a new token in matcha-XXX or cream-XXX. Do not introduce blues, magentas, oranges, or pure black/white.

### 3.2 Typography

- **Display:** `Fraunces` — serif, optical-size aware. For all h1/h2 and editorial numerals (the `40g` counter).
- **Body:** `Inter` — sans-serif. For paragraphs, labels, buttons, metadata.
- **Eyebrow labels:** Inter, weight 500–600, all caps, letter-spacing `0.2em–0.32em`, in `matcha-700`.
- **Feature settings on display:** `"kern", "ss01"`.

Any custom lettering you create (logo lockups, packaging, badges) should harmonize with Fraunces' warmth — high contrast strokes, slight optical sharpness, no geometric sans.

### 3.3 Motion vocabulary (defined in [`lib/motion.ts`](../lib/motion.ts))

You're not animating anything — but your compositions must accommodate these moves. Read this before designing any hero asset.

| Curve | Feel | Where used |
|---|---|---|
| `rise` | Slow start, very long tail | Hero pack reveal, bowl, counter |
| `settle` | Quick lift, gentle land | Headlines, sublines |
| `drift` | Symmetric, ambient | Parallax, clouds, background zooms |
| `carve` | Sharp middle, soft edges | Mask reveals, step numerals |
| `lift` | Subtle overshoot | CTA hover only — never on scroll |

**Implications for imagery:**
- The hero pack scales `0.86 → 1.02` and splits along a horizontal midline. **Do not put critical detail on the dead-center horizontal axis** — it'll disappear during the split.
- The bowl is revealed by a circular mask growing from `circle(0% at 50% 55%)` to `circle(85%)`. **Center the bowl's hot spot at ~50% / 55%**, not dead center.
- The field photo scales `1.18 → 0.98` and crossfades. **Compose for crop tolerance** — important detail should sit within the inner 70% of the frame.
- Powder cloud uses `mix-blend-multiply` and scales to 2×. **Edges must be soft / wispy / transparent** — no hard cutouts.

### 3.4 Layout grammar

- Max content width: `6xl` (≈ 72rem / 1152px). Imagery can full-bleed; copy lives within `6xl`.
- Vertical rhythm: every major section ≥ 100vh on desktop. Hero sections are 220–500% scroll-pinned.
- Padding: `px-6` (mobile) / `px-10` (desktop). Hero subjects should have ≥ 8% bleed on all sides to survive parallax scale moves.

---

## 4. Asset inventory (what exists, what each is, what to do with it)

All paths relative to repo root. Sizes are current placeholder sizes — final assets should land at the **target spec** in the right-most column.

### 4.1 Photographic assets (placeholder → final)

| # | Current file | Used in | What it depicts | Composition notes | **Target spec for final** |
|---|---|---|---|---|---|
| 1 | `public/images/matcha-pack.png` (1122×1402, 1.4 MB) | Hero, cinematic, product grid | Branded pack canister, front-facing | Subject ~75% frame height, masked with elliptical vignette | **PNG-24, ≥3000px tall, transparent background, soft natural shadow baked in below subject only. Subject centered horizontally, vertical center at 52% from top. Avoid critical detail on horizontal midline (split mask)** |
| 2 | `public/images/matcha-powder-cloud.png` (1254×1254, 1.6 MB) | Hero, cinematic | Loose powder mid-air, dispersed | Multiplies into background — needs to read as light, not solid | **PNG-24, ≥3000px square, transparent background, edges feathered to 0% opacity at frame edge. No hard silhouette. Provide 2 variants: dense ("bloom") and sparse ("drift")** |
| 3 | `public/images/matcha-powder.jpg` (1536×1024, 2.2 MB) | Stone Mill section | Macro of fine matcha powder texture | Camera-flat, fills frame, no horizon line | **JPG q90, ≥3000px wide, 3:2 ratio, subject runs to edges, no vignette, color graded to `matcha-700`–`matcha-500` tonal range** |
| 4 | `public/images/matcha-bowl.jpg` (1254×1254, 2.5 MB) | Whisking section, cinematic bowl reveal | Whisked matcha in ceramic chawan, foam visible | Bowl center at ~50% / 55%; revealed via circular mask | **JPG q90, ≥3000px square. Bowl rim contained within inner 70% of frame. Foam highlight on bowl center. Background: cream-100 surface, no clutter. Shot from ~30° above** |
| 5 | `public/images/matcha-field.jpg` (1672×941, 1.7 MB) | Origin section, cinematic background | Japanese shade-grown tea field (specific region/farm credited only once supplier is locked) | Horizon at ~55% from top; rows lead to vanishing point | **JPG q90, ≥3840px wide, 16:9. Soft morning light, low contrast, no harsh sun. Mist preferred. Horizon flat (no rolling hills). Color should harmonize with matcha-800/700** |
| 6 | `public/images/matcha-lifestyle-hero.jpg` (1672×941, 1.8 MB) | Buy / close section | Ritual moment — hands, bowl, ambient table | Subject low and right; ambient negative space top-left for headline | **JPG q90, ≥3840px wide, 16:9. Real hands, natural skin, no model overproduction. Bowl off-center. Window light. Surface: pale wood or cream linen. Final headline sits top-center over darker zone** |

### 4.2 Generative / illustrative SVGs (concept pack — needs upgrade)

These were placeholder concept art committed during exploration. They're not part of the final spec.

| # | File | Currently shown as | **Decision needed** |
|---|---|---|---|
| 1 | `public/images/freddo-neon-garden.svg` | Section 07 art card | Replace, remove, or reframe? Current execution is closer to "neon" than the calm brand. Recommend: **remove from production; keep as designer reference for moodboard only.** |
| 2 | `public/images/freddo-origin-grid.svg` | Section 07 art card | Same — recommend remove or replace with an editorial origin map (Japan, with the farm dot added once region is confirmed). |
| 3 | `public/images/freddo-lab-disk.svg` | Section 07 art card | Same — replace with a certification crest **only if** the matching certification is real and verifiable (see §2 and §5.2). |

### 4.3 Inline / generic SVG icons (low priority)

These came from Next.js scaffold. Either replace with brand-equivalent line icons or remove entirely if no UI requires them.

| File | Action |
|---|---|
| `public/file.svg` | Remove if unused (currently unreferenced) |
| `public/globe.svg` | Remove if unused |
| `public/window.svg` | Remove if unused |
| `public/next.svg` | Remove from production |
| `public/vercel.svg` | Remove from production |

---

## 5. Per-section graphic requirements

Each section's graphics must be designed in awareness of the animations they sit inside. The user **never sees these images statically** — they're always entering, scaling, masking, or exiting.

### 5.1 Section 01 · Hero / Cinematic ([components/scroll/CinematicScroll.tsx](../components/scroll/CinematicScroll.tsx))

**Job:** Open the film. 5 stages, 500% scroll pin on desktop.

**Required assets:**
1. **Pack hero shot** — see §4.1 #1. Critical: usable in a **split-along-horizontal-midline** animation. The top and bottom halves drift apart, rotate ±3.2°, and dissolve into the powder cloud. Design implication: the pack's label artwork must be readable when sliced. Avoid wordmarks that span the midline.
2. **Powder cloud — bloom variant** — see §4.1 #2 (dense). Used as primary cloud layer.
3. **Powder cloud — drift variant** — see §4.1 #2 (sparse). Used as second depth layer at lower opacity.
4. **Field shot** — see §4.1 #5. Reveals from behind the powder; scales from 1.18× down to 0.98×.
5. **Bowl shot** — see §4.1 #4. Revealed via circular clip-path, lands the sequence.
6. **(Optional new asset)** Subtle **steam plume** PNG, transparent, to rise from the bowl during stage 4. Treat as a third powder-cloud-style asset but vertical and translucent.

**Lower-third text beats** ("01 · The leaf", "02 · The shade", etc.) sit over imagery — ensure no asset has busy detail in its bottom 25%.

### 5.2 Section 02 · Origin ([components/scroll/OriginPinned.tsx](../components/scroll/OriginPinned.tsx))

**Job:** Convey provenance honestly — Japan, single-origin intent. The specific region, farm, and growing method are claims that only land in finished assets after they're verified (see §2).

**Required assets:**
1. **Hero field shot** (same as cinematic) — but also consider a **second variant** for this section's parallax: tighter crop, single tarp/shade-cloth visible. Adds story texture vs the wide cinematic shot.
2. **(New) Provenance crest / mark** — a small monogrammed badge ("Single-Origin · Japan") in matcha-100 on transparent, for use as eyebrow ornament. Stroke weight ~1.5px, ≤120px wide at 1× display. A region/prefecture variant lands once the supplier farm is confirmed.
3. **(New) Optional inline diagram** — a hand-feel SVG line illustration of the shade-tarp method (`oishita`). Strict 1px stroke, matcha-700, no fills. Reference: William Morris botanical line plates, *not* iconography.

### 5.3 Section 03 · Stone Mill ([components/scroll/GrindingScene.tsx](../components/scroll/GrindingScene.tsx))

**Job:** Slow craftsmanship. The 40g/hour counter is the hero numeral.

**Required assets:**
1. **Powder macro** — see §4.1 #3. Existing texture works but needs color regrade.
2. **(New) Stone mill close-up shot** — granite millstone in motion or static. Tight crop, low light, top-down or side-three-quarter. Will sit alongside the macro powder.
3. **(Optional)** A small **cross-section diagram** of the mill (top stone, bottom stone, grain flow) — same line-art treatment as §5.2 #3.

### 5.4 Section 04 · Whisk ([components/scroll/WhiskingScene.tsx](../components/scroll/WhiskingScene.tsx))

**Job:** Three numbered steps + bowl reveal.

**Required assets:**
1. **Bowl + whisk in motion** — see §4.1 #4 (same bowl asset, or a sibling shot mid-whisk). Bowl is animated with `scale 0.96 → 1`, `y +20 → 0`, and lands gently.
2. **(New) Chasen (whisk) standalone shot** — 100-prong bamboo whisk on cream-100 surface, top-down. Used possibly as a product-card asset.
3. **(New) Chashaku (scoop) standalone shot** — bamboo scoop, same treatment.

The numbered step badges (`01`, `02`, `03`) are rendered in Fraunces by code — no graphics needed, but if you want to propose hand-numbered alternatives as SVG, do it as a contained set (matcha-700, ≤80px tall).

### 5.5 Section 06 · The Shop (product grid in [app/page.tsx](../app/page.tsx))

**Job:** Sell 3 SKUs. Currently shows pack image for each — needs differentiated product photography.

**SKUs (from [lib/products.ts](../lib/products.ts)):**

| SKU | Price | Tagline (honest copy) | **Graphics needed** |
|---|---|---|---|
| **Freddo Ceremoniale** | €48.00 | Single-origin ceremonial matcha | Hero pack shot — 1:1 framing, on cream-100, soft single-light shadow. Same canister as Hero, slightly tighter crop. **Darkest label** in the lineup. |
| **Freddo Quotidiano** | €28.00 | Daily matcha — built for milk and ice | Second pack shot. **Visibly different label band / colorway** so it reads as a different SKU at a glance. Same lighting/staging. |
| **Il Rito Starter Kit** | €78.00 | Bowl · chasen · scoop · 30g of Quotidiano | Flat-lay or three-quarter shot of all components arranged. Cream-100 surface, soft shadow, components touching/overlapping naturally. |

**Format spec:** 1:1 (square), ≥1500px, JPG q90 or PNG-24 if transparency needed. Each variant should have a **hover state** (currently a 4px lift) — if you want to deliver an alternate "lifted" shot for hover, do so.

### 5.6 Section 08 · Buy Close ([components/scroll/BuyClose.tsx](../components/scroll/BuyClose.tsx))

**Job:** Final emotional close. Lifestyle image with overlay.

**Required asset:** see §4.1 #6.

The image is overlaid with a dark gradient (`from-matcha-950/60`). **Shoot/select with this overlay in mind** — the image will look ~40% darker than the raw file in production. Don't grade it dark; let the overlay do the work.

---

## 6. New visual additions to consider (designer recommendation requested)

None of these exist yet. The first two — Logo and Packaging — are the load-bearing pieces; everything downstream (photography, OG, packaging shots, ads) depends on them.

### 6.1 Logo direction

> **The wordmark is the contract.** Once locked it cascades into packaging, favicon, OG, social, email, ad creative, and physical print. Don't experiment past round 2.

| Deliverable | Hard spec |
|---|---|
| **Primary wordmark** | "Freddo Matcha" — two words, title case. Custom serif letterforms, **Fraunces-aware** (same family of optical sharpness and warmth), with slight refinement (e.g. ligatures, balanced descenders on the M / d). Editorial fashion-house energy. Tracking tight but never cramped. |
| **Compact lockup** | "FREDDOMATCHA" — single word, all caps, tight tracking. For favicons, OG, packaging label fronts, social avatars, app icons. |
| **Monogram** | Single mark — preferred direction: **F + M ligature** with the same letterform DNA as the wordmark. Acceptable alternative: an abstract cold/leaf mark (e.g. a tilted leaf inside a soft circle). |
| **Color variants** | (1) matcha-950 on cream-50; (2) cream-50 on matcha-950; (3) single-color matcha-950; (4) single-color cream-50. No three-color logos. No gradients. |
| **Sizing** | Wordmark must read at 24px high. Monogram must read at 16px (favicon). Test both before approving. |

**Inspirations to study:**
- **Aesop** wordmark — calm serif, perfect kerning, no flourish
- **The Row** wordmark — restraint, editorial weight
- **Massimo Vignelli** identity systems — typographic discipline
- **Acne Studios** compact lockup — fashion-house all-caps energy

**Never:**
- ❌ Script fonts / handwritten lettering
- ❌ Fake-Japanese brush strokes or simulated kanji glyphs
- ❌ Gold foil "premium" badges, embossed shields, ribbons
- ❌ Wellness-blog circle-with-leaf cliché
- ❌ Tea-cup pictogram, steam swirls, drop pictograms
- ❌ Sans-serif geometric (too tech-corporate)
- ❌ Three-or-more-color treatments
- ❌ Drop shadow on the logo

**Deliverable bundle:**
- `wordmark.svg` (primary)
- `wordmark-compact.svg` (FREDDOMATCHA all-caps)
- `monogram.svg`
- Each at PNG @1× / @2× / @3× (32, 64, 128, 256, 512px for the monogram)
- Single-PDF brand-mark sheet with usage rules (clear-space, minimum size, dos and don'ts)

### 6.2 Packaging mini-spec

> **The pack is the hero.** Site photography hinges on a real, producible label. Until packaging is locked we cannot shoot final assets.

**Substrate (founder decision pending — designer to recommend):**

| SKU | Recommended substrate | Why |
|---|---|---|
| **Freddo Ceremoniale** | Matte cylinder tin (steel or aluminium) | Top of range. Tin signals premium, protects against light. Reusable. |
| **Freddo Quotidiano** | Matte resealable stand-up pouch (foil-lined) | Daily use, larger volume, lower unit cost. Resealable for freshness. |
| **Il Rito Starter Kit** | Wood-shaving + matte board box | Gateway product. Box doubles as a gift surface. |

**Label hierarchy (every SKU's front label, top to bottom):**

1. **Brand zone** — wordmark or compact lockup. **Largest element.** No decoration.
2. **Grade zone** — "Ceremoniale" / "Quotidiano" set in Fraunces italic. Half the size of the brand zone.
3. **Proof zone** — ≤4 short lines of provenance data, set in Inter all-caps, very small. Examples below.
4. **Weight + lot** — bottom-right corner, smallest type.

**Proof zone copy (pre-launch, claim-safe — see Claims guardrail):**

```
SINGLE-ORIGIN
JAPAN
PACKED IN THE EU
LOT XX-YYYY
```

Once supplier locks, proof zone becomes:

```
SINGLE-ORIGIN — [REGION], JAPAN
[CULTIVAR]
[HARVEST SEASON YEAR]
LOT XX-YYYY
```

**SKU differentiation (so customers can tell them apart at a glance):**

| SKU | Label color band | Label finish | Wordmark color |
|---|---|---|---|
| **Freddo Ceremoniale** | matcha-950 (deepest) on cream-50 label | matte | cream-50 |
| **Freddo Quotidiano** | matcha-700 (mid) band across cream-100 | matte | matcha-950 |
| **Il Rito Starter Kit** | cream-100 (lightest) — wood-shaving box exterior | uncoated kraft | matcha-950 stamped |

Color band must be visible in a 200px-wide product card from across the page. Test this in-browser before sign-off.

**Required printed information (legal — EU food regulation):**

- Net weight
- Ingredients (matcha)
- Allergen statement (allergen-free notation)
- Best-before date
- Storage instructions
- Lot number
- Importer / packer name and EU address
- Country of origin: Japan

**Designer deliverables for packaging:**

- `packaging-ceremoniale-front.pdf` (with dieline)
- `packaging-ceremoniale-back.pdf` (with dieline)
- Same for Quotidiano + Il Rito (front, back, side as applicable)
- 3D mockup render of each SKU (PNG, transparent, 3000px high) — used for product grid until real photography lands
- Print spec sheet (color, finish, dieline, bleed, registration)

**Never on packaging:**
- ❌ Decorative kanji
- ❌ Gold foil unless real foil is being printed
- ❌ "Premium" or "luxury" as adjectives
- ❌ Caffeine or health claims
- ❌ Stock botanical illustrations
- ❌ Background imagery — labels are typographic, not pictorial

### 6.3 Favicon, OG, email, origin & cert assets

| Slot | Spec |
|---|---|
| **Favicon + app icons** | 32×32 favicon SVG, 180×180 Apple touch icon PNG, 512×512 PWA PNG. Monogram-driven. Solid matcha-950 background. No bevels or shadows. |
| **OG / social share image** | 1200×630 JPG q90, sRGB. Hero composition: wordmark left, lifestyle photo right (or canister centered with breathing room). Text-safe zone: inner 1080×510. |
| **OG square** | 1200×1200 JPG q90 — for Instagram / iMessage. |
| **Email header** | 1600×400 master PNG, simplifiable to 600×200. Brand-consistent. Reusable across Klaviyo welcome / abandoned-cart / launch flows. |
| **Origin map** | SVG. Minimal Japan outline, single dot pin, type pairing in Fraunces. Prefecture and farm dot appear **only after supplier locks** (see Claims guardrail). |
| **Certification crest** | SVG. **Produce only for certifications actually held.** No "JAS / organic / lab-tested" crest unless paperwork is in hand. |

---

## 7. Technical delivery spec

### 7.1 Formats

| Asset type | Master format | Delivery format | Notes |
|---|---|---|---|
| Product / pack on transparent | PSD layered | **PNG-24, ≥3000px** | Bake shadow into PNG if it's part of the subject; otherwise we composite |
| Lifestyle / field photo | RAW or TIFF | **JPG q90, ≥3840px long edge** | Color profile: sRGB IEC61966-2.1 |
| Powder cloud | PSD layered | **PNG-24, ≥3000px, transparent** | Soft edges, no hard alpha cutoff |
| Logo / wordmark | AI / SVG | **SVG (with viewBox) + PNG @1×/@2×/@3×** | No raster effects |
| Diagrams / line illustrations | AI / SVG | **SVG, single root group** | 1.5px stroke at intended display size |
| Icons | AI / SVG | **SVG, 24×24 viewBox** | Single color, currentColor friendly |
| Favicon | ICO + PNG | **`/public/favicon.ico` + 192/512 PNG** | We wire to `app/layout.tsx` metadata |
| OG image | PSD | **JPG 1200×630, q90, sRGB** | Text safe area inside inner 1080×510 |

### 7.2 Color management

- Work in **sRGB IEC61966-2.1** throughout. No Adobe RGB or P3 masters — we lose this in browser conversion.
- Snap final hero / brand greens to the tokens in §3.1. Pick the nearest token; do not freelance.
- For photography, calibrate so deepest shadows fall in `matcha-950 → matcha-900` range, mid-tones in `matcha-700 → matcha-500`, highlights in `cream-100 → cream-50`. We do not want bright primary green; we want **olive-shadow green**.

### 7.3 Naming

```
public/images/
  pack-ceremonial.png
  pack-everyday.png
  starter-kit.jpg
  powder-cloud-bloom.png
  powder-cloud-drift.png
  powder-macro.jpg
  field-uji-wide.jpg
  field-uji-tight.jpg
  bowl-whisked.jpg
  bowl-whisking.jpg
  chasen.png
  chashaku.png
  lifestyle-close.jpg
  steam-plume.png        (if produced)
  origin-map.svg
  cert-crest.svg
  wordmark.svg
  monogram.svg
  og-default.jpg
```

Lowercase, hyphenated, descriptive. No version suffixes (`v2`, `final-final`) — that's what git is for.

### 7.4 Accessibility

- Decorative imagery: provide a short alt-text suggestion per asset (will go into the `<Image alt="">` prop).
- Any text-bearing graphic: contrast ratio ≥ **4.5:1** for body text, ≥ **3:1** for headlines ≥ 24px.
- Do not encode information in color alone (e.g. don't use red/green to distinguish SKUs).

### 7.5 Motion-readiness checklist (per asset)

Before delivering a hero asset, designer confirms:
- [ ] Subject sits within inner 70% of frame (survives parallax scale)
- [ ] No critical detail on horizontal midline (survives split-pack mask) — applies to pack only
- [ ] Bottom 25% is calm (text overlays land here)
- [ ] Edges feather to transparent if intended for `mix-blend-multiply` (clouds, steam)
- [ ] Hot spot at 50% / 55% for circular-masked subjects (bowl)
- [ ] Color graded into the token range, not raw

### 7.6 Mobile image spec (separate from desktop — assets re-crop, do not just shrink)

> **Premium scroll dies on mobile when the desktop crop is force-shrunk.** Every hero asset needs explicit mobile crop variants. Phones are where 60–70% of buyers will land.

Mobile uses a separate flow ([components/site/MobileHero.tsx](../components/site/MobileHero.tsx), [components/site/MobileStoryCards.tsx](../components/site/MobileStoryCards.tsx)) — there's no 500% pinned cinematic. Imagery here is responsible for the whole story on its own.

**Crop variants required for each hero asset:**

| Aspect | Where it's used | Required behavior |
|---|---|---|
| **16:9** (desktop master) | Cinematic, OG, lifestyle close | The hero asset you'd shoot for desktop |
| **4:5** (portrait) | Mobile hero, mobile story cards, Instagram feed | Re-cropped so subject reads at portrait orientation. Not a center-cropped 16:9. |
| **9:16** (tall portrait) | Mobile cinematic fallback, Instagram / TikTok stories | Subject lower-third. Critical detail in inner 60% width × 70% height. |
| **1:1** (square) | Product grid card, Instagram square, OG square | Subject centered, with breathing room on all four sides |

For each `public/images/*` asset, the designer delivers **four files**:

```
matcha-bowl-16x9.jpg       (3840×2160 master)
matcha-bowl-4x5.jpg        (2400×3000)
matcha-bowl-9x16.jpg       (2160×3840)
matcha-bowl-1x1.jpg        (3000×3000)
```

Engineering wires the correct crop via Next/Image `sizes` and CSS `object-position`.

**Text-safe zones (mobile):**

The site renders headlines over imagery on the mobile hero. Text lives in:

- **Top-safe zone:** top 35% of the image, left-aligned, padded 24px from edges
- **Bottom-safe zone:** bottom 30% of the image, where CTAs sit on the mobile lifestyle close

Imagery must keep these zones **calm** — no busy patterns, no faces, no high-contrast detail. If the desktop crop has a critical subject in the bottom 30%, the mobile re-crop must shift the subject up.

**File budget per mobile section (after Next.js optimization):**

| Section | Max delivered weight on 3G mid-tier | Notes |
|---|---|---|
| Mobile hero | ≤ 180 KB | Largest single image on the page |
| Each story card | ≤ 120 KB | Three cards = ≤ 360 KB total |
| Each product card | ≤ 60 KB | Three cards = ≤ 180 KB total |
| Lifestyle close | ≤ 200 KB | |
| **Total mobile page imagery** | **≤ 1.2 MB** | Hard cap. Test on real Pixel 6a / iPhone SE 2020. |

If the master is over budget after Next.js squeezes it, the designer must regrade or simplify the composition — not just upload bigger.

**Reduced-motion fallback (per hero asset):**

When `prefers-reduced-motion: reduce` is set, or the user toggles the footer switch, motion stops. Animated reveals collapse to static. **Every animated hero asset needs a deliberate single still frame** that works without the reveal mechanic:

| Animated asset | Reduced-motion still |
|---|---|
| Pack split (top / bottom drift apart) | Whole pack, centered, no split |
| Powder cloud (bloom + drift) | Single dense cloud frame, slight transparency |
| Bowl circular reveal | Bowl fully visible from the start, no clip-path |
| Field zoom | Field at final zoom level (no parallax move) |
| Lifestyle ambient zoom | Single neutral frame at scale 1.0 |

These don't require separate files in most cases — engineering uses the same asset and disables the animation. But the designer must check that the asset **still reads as a hero composition when nothing is moving**. If the asset only works mid-animation, it fails reduced-motion.

**Mobile-specific veto list:**

- ❌ Reusing a desktop crop with `object-fit: cover` at 9:16 — subject gets decapitated or feet cut
- ❌ Critical type rendered into the image at desktop size (rasterized headline burns on retina mobile)
- ❌ Detail-heavy backgrounds behind any planned mobile text overlay
- ❌ JPEG q90+ exports past 250KB per image
- ❌ Animated GIFs (use video or sequenced PNG via CSS)

---

## 8. Reference direction (mood, not pastiche)

We do **not** want to copy these — we want to absorb their energy.

- **Aesop product photography** — quiet, ceramic, matte, single-light
- **Off-White / Tetsuya Mizuguchi cinematic typography moments** — restraint with confidence
- **Apple AirPods Max launch film** — pinned hero, slow reveal, premium without bombast
- **Kinfolk / Cereal magazines** — editorial spread sensibility
- **Postcard Teas (London) photography** — actual matcha brand reference; honest, plant-led
- **Aman Resorts press kits** — luxury via subtraction

For motion, see [`docs/motion-audit.md`](motion-audit.md) — the engineering note that locked the easing vocabulary. Designer should read sections "Five things currently making it feel generic" and "What 'smooth' requires."

---

## 9. Veto list (do not do these)

| ❌ Avoid | Why |
|---|---|
| Lotus / Zen / "om" / Buddha / dragon iconography | Caricature of the culture; brand is product-led not spiritual |
| Hand-painted kanji as decoration | Reads as souvenir-shop |
| Sunrise / sunset gradients (orange, pink) | Wellness-stock cliché |
| Yoga silhouettes, women in robes, "wellness" tableaus | Same |
| Pure black `#000` or pure white `#FFF` | We work in `matcha-950` and `cream-50` — never pure |
| Neon greens, lime, electric-mint | Off-brand; we're olive / forest / shadow |
| Drop shadows with > 30% opacity | Reads as 2010s web |
| Hard rectangular product cutouts | Brand is soft / feathered / masked |
| Glassmorphism, frosted overlays | Off-tone |
| Emoji decorations, sparkle icons | Off-tone |
| "Limited Edition" or "Premium" badges/banners | If we have to label it premium, it isn't |
| Faux ink-wash brush strokes | Pastiche |
| Stock matcha imagery from Unsplash / Pexels | Anyone can find it; defeats authenticity goal |

---

## 10. Deliverables checklist (priority ordered)

### P0 — Required for Slice 2 launch (replacing every placeholder)
- [ ] Pack hero shot (master + transparent, §4.1 #1)
- [ ] Powder cloud — bloom variant (§4.1 #2)
- [ ] Powder cloud — drift variant (§4.1 #2)
- [ ] Field shot — wide (§4.1 #5)
- [ ] Bowl shot — whisked (§4.1 #4)
- [ ] Lifestyle close shot (§4.1 #6)
- [ ] Powder macro (regraded, §4.1 #3)
- [ ] 3× product grid shots (§5.5)
- [ ] Wordmark + monogram (§6)
- [ ] Favicon + Apple touch icon + PWA 512 (§6)
- [ ] OG / social share image (§6)

### P1 — Strong-to-have for storytelling depth
- [ ] Origin field — tight variant (§5.2)
- [ ] Stone mill close-up (§5.3 #2)
- [ ] Chasen + chashaku product shots (§5.4 #2-3)
- [ ] Steam plume (§5.1 #6) — only if it elevates the cinematic close
- [ ] Provenance crest (§5.2 #2)

### P2 — Reach goals (Slice 3+)
- [ ] Shade-tarp diagram (§5.2 #3)
- [ ] Stone mill cross-section diagram (§5.3 #3)
- [ ] Origin map (§6)
- [ ] Certification crest (§6, if real certifications exist)
- [ ] Email header / newsletter banner (§6)

---

## 10.5 In-browser approval checklist (every asset, before sign-off)

> A spec is only as good as its QA gate. **No asset is "done" until it passes this checklist in the live build, not just in Figma.**

For every delivered asset, engineering wires it into the relevant component on a feature branch and the designer walks through this list. **One unchecked box = not approved.**

### A. Render correctness

- [ ] Renders sharp at **1440px desktop** (no pixelation, no banding)
- [ ] Renders sharp at **390px mobile** (Pixel / iPhone SE class — open Chrome devtools)
- [ ] Renders sharp at **768px tablet** (no awkward midpoint crop)
- [ ] Does not get cut off by safe-area insets on iOS notch devices
- [ ] If transparent: no white halo or fringing on cream-50 background

### B. Motion behavior

- [ ] Survives the cinematic scroll on desktop (run the full pinned sequence)
- [ ] Subject remains recognizable at every scale (0.86× → 1.18×)
- [ ] No critical detail clipped by the elliptical / circular mask
- [ ] Reduced-motion fallback works (toggle `Reduce motion` in footer; verify the still composition still reads)
- [ ] If part of an animation: holds visual weight at both start and end frames

### C. Accessibility

- [ ] Any embedded text has contrast ratio ≥ **4.5:1** against its background
- [ ] Any text overlay zone on the image has contrast ratio ≥ **4.5:1** for body text, ≥ **3:1** for ≥24px headlines
- [ ] Alt text is meaningful (not "image" or filename)
- [ ] Decorative assets carry `alt=""` (engineering handles this; designer flags which assets are decorative)

### D. Performance budget

- [ ] Delivered file under target weight (see §7.6 for mobile budgets)
- [ ] Master file is sRGB (not Adobe RGB / P3 / CMYK)
- [ ] No embedded color profile mismatch
- [ ] Next.js Image optimization passes (check the LCP warning in dev tools console — should be clean)
- [ ] Total page weight remains within Lighthouse mobile **performance ≥ 90**

### E. Brand correctness

- [ ] Does NOT look like stock (Unsplash / Pexels / generic matcha imagery)
- [ ] Does NOT violate the veto list (§9)
- [ ] Color graded into the matcha-XXX / cream-XX token range, not raw
- [ ] No unverified provenance claim embedded (see Claims guardrail)
- [ ] Reads as Freddo Matcha specifically, not "generic premium matcha brand"
- [ ] Italian-Japanese tension is felt, not stated

### F. Product recognition

- [ ] Pack remains recognizable during the split-animation
- [ ] Bowl remains recognizable through the circular reveal
- [ ] Powder cloud reads as powder (not smoke, not steam, not abstract texture)
- [ ] Field reads as Japanese tea field (composition cue), not "any green field"

### G. Cross-platform smell check

- [ ] Screenshot looks right when shared on Slack / iMessage (OG image specifically)
- [ ] Favicon legible on dark and light browser tabs
- [ ] Wordmark looks right at 24px (smallest live use)
- [ ] Packaging mockup renders correctly on white, cream-100, and dark backgrounds

### Sign-off ritual

Designer and engineering on a Loom or live call. Open the dev URL on:
1. A real laptop (desktop)
2. A real phone (mobile)
3. With reduce-motion forced on

Walk the page top to bottom. Check every box above. If any box fails, the asset goes back. **No "we'll fix it later"** — the launch checklist depends on a clean tree here.

---

## 11. Workflow

1. **Designer reads this doc + [`motion-audit.md`](motion-audit.md) + [`stitch-prompt.md`](stitch-prompt.md).**
2. **Kickoff call** — designer confirms understanding of motion implications and palette.
3. **Round 1: moodboard** — designer delivers a 6–9 image moodboard (mix of photography, type, color, motion references), one page PDF. We sign off direction.
4. **Round 2: P0 master shots (raw or low-res)** — for review on composition only. Final color/grade pass deferred.
5. **Round 3: P0 finals** — color-graded, sized to spec, named per §7.3, delivered as a single folder.
6. **Round 4: P1 + P2** — same workflow.

All assets land in `public/images/`. Engineering wires them into components and reviews in-browser with the cinematic scroll active. We will report back any asset that breaks the motion choreography and ask for an adjusted version.

---

## 12. Questions for the designer to answer back

So we don't iterate blindly:

1. Do you want to **shoot original photography**, or **license editorial** that we curate together? If shoot — what's the timeline and budget envelope?
2. Are there **3 reference sites** (with specific timestamps for scroll moments) that you'd point us to as north stars?
3. Is there a **logo / wordmark direction** you'd like to propose first, before everything else (since it cascades into packaging and OG image)?
4. Any **veto-list additions** you want to negotiate? (e.g. you might argue *for* a subtle steam plume even though it's an extra asset.)
5. Confirm: are you comfortable working **within** the locked palette and typography, or do you want a brief to challenge them? (We're open to a palette refinement round — but only if there's a real reason.)

---

*Document owner: engineering. Last grounded in repo state on 2026-05-16. Update this doc as the brand system evolves — do not let it drift from `app/globals.css` and `lib/motion.ts`.*
