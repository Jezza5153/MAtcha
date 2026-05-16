# Freddo Matcha — Graphic Design Specification

> **For:** the graphic / visual designer enhancing the site's imagery and visual identity.
> **From:** product / engineering. Everything here is grounded in the current build (Next.js 16, App Router, Tailwind v4, GSAP, Lenis).
> **Companion doc:** [`product-and-commerce-spec.md`](product-and-commerce-spec.md) — covers brand identity, proof system, commerce stack, conversion, mobile strategy, and PR roadmap. Read that first if you're new to the project.
> **Status:** Slice 1 build live. All hero imagery is **placeholder**. This document is the brief for replacing placeholders with final brand-grade work, and for filling visual gaps.

---

## 0. TL;DR for the designer

1. We are building **Freddo Matcha** — a calm, premium, scroll-storytelling site for a single-origin matcha powder brand. **Italian-Japanese fusion** — European-styled house, Japanese sourcing (Uji). Think editorial magazine + Apple product film, not "wellness blog."
2. **Brand name styling:** "Freddo Matcha" (two words, title case) for body display; "FREDDOMATCHA" (single-word all caps) for compact / OG / packaging lockups.
3. The whole site is **one pinned cinematic narrative**: leaf → stone-mill → whisk → bowl → buy. Your imagery has to support an animated reveal, not stand alone.
4. **Palette is locked** (10 matcha greens, 3 creams, 2 stone neutrals, 2 inks). **Typography is locked** (Fraunces display, Inter body). Do not redesign these — design *into* them.
5. **Motion grammar is locked** (rise / settle / drift / carve / lift). Imagery must be choreographable: subjects centered, generous negative space, no rigid edges that fight motion masks.
6. Deliver master assets in **3000px long edge minimum, sRGB, PNG-24 (transparency) or JPG quality 90 (photo)**. We optimize via Next.js Image at build time.
7. **Veto list at the bottom** — read it before drawing anything.

---

## 1. Vision

> **"Leaf to ritual."**
> Freddo Matcha is a single-origin matcha powder from Uji, shade-grown, stone-ground, served the way you want it — whisked in a hand-thrown bowl, shaken with ice, poured into oat milk. The site is a slow inhale — every section a deliberate pause, every motion earned.

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
| 3 | `public/images/matcha-powder.jpg` (1536×1024, 2.2 MB) | Stone Mill section | Macro of stone-ground powder texture | Camera-flat, fills frame, no horizon line | **JPG q90, ≥3000px wide, 3:2 ratio, subject runs to edges, no vignette, color graded to `matcha-700`–`matcha-500` tonal range** |
| 4 | `public/images/matcha-bowl.jpg` (1254×1254, 2.5 MB) | Whisking section, cinematic bowl reveal | Whisked matcha in ceramic chawan, foam visible | Bowl center at ~50% / 55%; revealed via circular mask | **JPG q90, ≥3000px square. Bowl rim contained within inner 70% of frame. Foam highlight on bowl center. Background: cream-100 surface, no clutter. Shot from ~30° above** |
| 5 | `public/images/matcha-field.jpg` (1672×941, 1.7 MB) | Origin section, cinematic background | Shade-grown tea field in Uji | Horizon at ~55% from top; rows lead to vanishing point | **JPG q90, ≥3840px wide, 16:9. Soft morning light, low contrast, no harsh sun. Mist preferred. Horizon flat (no rolling hills). Color should harmonize with matcha-800/700** |
| 6 | `public/images/matcha-lifestyle-hero.jpg` (1672×941, 1.8 MB) | Buy / close section | Ritual moment — hands, bowl, ambient table | Subject low and right; ambient negative space top-left for headline | **JPG q90, ≥3840px wide, 16:9. Real hands, natural skin, no model overproduction. Bowl off-center. Window light. Surface: pale wood or cream linen. Final headline sits top-center over darker zone** |

### 4.2 Generative / illustrative SVGs (concept pack — needs upgrade)

These were placeholder concept art committed during exploration. They're not part of the final spec.

| # | File | Currently shown as | **Decision needed** |
|---|---|---|---|
| 1 | `public/images/freddo-neon-garden.svg` | Section 07 art card | Replace, remove, or reframe? Current execution is closer to "neon" than the calm brand. Recommend: **remove from production; keep as designer reference for moodboard only.** |
| 2 | `public/images/freddo-origin-grid.svg` | Section 07 art card | Same — recommend remove or replace with an editorial origin map (Uji prefecture, single dot, type pairing). |
| 3 | `public/images/freddo-lab-disk.svg` | Section 07 art card | Same — replace with **JAS / lab-test certification crest** if real certifications exist (see §5.2). |

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

**Job:** Convey provenance (Uji, Japan, shade-grown).

**Required assets:**
1. **Hero field shot** (same as cinematic) — but also consider a **second variant** for this section's parallax: tighter crop, single tarp/shade-cloth visible. Adds story texture vs the wide cinematic shot.
2. **(New) Provenance crest / mark** — a small monogrammed badge ("Uji · 京都 · Single Origin") in matcha-100 on transparent, for use as eyebrow ornament. Stroke weight ~1.5px, ≤120px wide at 1× display.
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

| SKU | Price | Description | **Graphics needed** |
|---|---|---|---|
| **Ceremonial Matcha** | €48.00 | Stone-ground from first-harvest leaves | Hero pack shot — 1:1 framing, on cream-100, soft single-light shadow. Same canister as Hero, slightly tighter crop |
| **Everyday Matcha** | €28.00 | For the morning latte that becomes a habit | Second pack shot — distinct label or color band so it reads as a different SKU. Same lighting/staging |
| **Starter Kit** | €78.00 | Bowl, chasen, scoop, 30g of Everyday | Flat-lay or three-quarter shot of all components arranged. Cream-100 surface, soft shadow, components touching/overlapping naturally |

**Format spec:** 1:1 (square), ≥1500px, JPG q90 or PNG-24 if transparency needed. Each variant should have a **hover state** (currently a 4px lift) — if you want to deliver an alternate "lifted" shot for hover, do so.

### 5.6 Section 08 · Buy Close ([components/scroll/BuyClose.tsx](../components/scroll/BuyClose.tsx))

**Job:** Final emotional close. Lifestyle image with overlay.

**Required asset:** see §4.1 #6.

The image is overlaid with a dark gradient (`from-matcha-950/60`). **Shoot/select with this overlay in mind** — the image will look ~40% darker than the raw file in production. Don't grade it dark; let the overlay do the work.

---

## 6. New visual additions to consider (designer recommendation requested)

These don't exist yet. We're inviting the designer to propose direction.

| Proposed addition | Why | Sketch the brief in your reply |
|---|---|---|
| **Wordmark / logo** | The site references "Matcha" as text only — no lockup exists. Need a finalized wordmark + monogram. | Two weights, one wordmark + one stacked + a single-glyph favicon. Pair with Fraunces. |
| **Packaging label** | Photography hinges on a real label. Right now the placeholder pack is a stand-in. | Cylinder canister, matte finish. Single label, low ink. Front: wordmark + grade + weight. Back: origin, harvest date, brewing card. |
| **Favicon + app icons** | Currently Next.js default. | 32×32 favicon, 180×180 Apple touch icon, 512×512 PWA. Mark + cream background. |
| **OG / social share image** | None exists. | 1200×630px. Hero composition with wordmark + tagline ("Leaf to ritual"). |
| **Email header / newsletter banner** | Slice 3 will introduce email capture. | 1600×400px master, brand consistent with site hero. |
| **Origin map** | Replaces `freddo-origin-grid.svg`. | Minimal map of Kyoto prefecture, single dot for Uji, type pairing in Fraunces. SVG. |
| **Certification crest** | Replaces `freddo-lab-disk.svg` if certifications exist. | Small badge mark (JAS organic, lab-tested, single-origin). SVG. |

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
