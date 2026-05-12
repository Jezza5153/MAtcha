# Motion audit — matcha site

For the designers. Brutal but specific. The site looks editorial in stills, but the motion is generic GSAP-tutorial. Below is what's wrong and what to spec.

---

## What you noticed (correctly)

> "Scroll animations feel fake. Not smooth."

You're right. The problem is **not** the technical stack — Lenis + GSAP can absolutely feel like Aesop or Cuyana. The problem is the **motion language**: every animation uses GSAP's stock easing curves, mid-range timing, and identical reveal grammar. There's no brand-specific motion vocabulary.

In stills it reads premium. In motion it reads "scroll-animations-template-2024."

---

## The five things making it feel fake

### 1. Every animation uses `power2.out` / `power3.out`
These are GSAP's default in-curves. Every freelance scroll-site uses them. They have a sharp arrival and a fast settle, which feels punchy but not crafted. Premium motion has a **long, almost-imperceptible tail** — the eye should never catch the moment it stops.

### 2. `scrub: 0.6` creates visible catch-up lag
Scrub means the animation "follows" the scrollbar with a 0.6s smoothing delay. At the desk it looks fine. On a trackpad it produces a **rubber-band feel** — you scroll, things move, you stop, things keep moving, then snap. Reads as "scroll-jacked" rather than driven.

### 3. Opacity 0 → 1 hard fades
Elements "appear from nothing." Premium reveals start at **opacity 0.15–0.3** so the element is a faint suggestion before resolving. The eye experiences "emergence," not "pop-in."

### 4. No choreography
Multiple things animate from progress=0 simultaneously. Cloud, pack, eyebrow, headline, sub-text — they all start at the same scroll moment. Premium reveals are **staggered with overlap** — the label arrives first (small move), headline second (bigger move), body third (smallest move), each with its own curve.

### 5. Pin entry snaps
When the Hero or Origin section pins, the section attaches to the viewport instantly. There's no settle-in. This is the single biggest "tell" that the animations are programmatic.

---

## What "smooth" actually requires

Three things, always, on premium scroll sites (think Aesop, Cuyana, Linear, Apple, Patek Philippe):

1. **Lenis tuned to feel like skim-reading silk paper.** lerp `0.06–0.08`, not `0.1`. Custom easing function, not `easeOutExpo`.
2. **Brand-specific easing curves.** 3–5 named curves, used consistently: a "rise" curve, a "settle" curve, a "drift" curve. Cubic-beziers with longer tails than `power2`.
3. **Choreography over fade-in.** Every reveal is a sequence — label → title → body → CTA — with overlapping but offset starts.

---

## Section-by-section critique

### Hero (worst offender) — priority **P0**

**What's there:**
- Cloud drift: `ease: "none"`, scale 1.05→1.18, opacity 0.85→0.45, y +8%
- Pack: `power2.out`, scale 0.86→1, y +4%→0, opacity 0→1
- Subline: `power2.out`, opacity 0→1, y +14→0, starts at progress 0.35
- Pin range: 180% (1.8× viewport)
- Scrub: 0.6

**What's wrong:**
- The pack going from `opacity 0` to `opacity 1` while scaling up looks like a flat reveal. There's no presence at scrollY=0 — the page is empty pack-shaped space.
- The cloud drifting downward feels like it's "falling," not "settling." Real powder doesn't move that way.
- Headline never animates. It's static while everything else moves. Either keep static intentionally or give it a subtle 1–2px y-drift.
- Pin range 1.8× viewport is too short for a hero this dense. Premium pins this kind of moment for 2.2–2.8× to let it breathe.

**Spec to hand to dev:**
- Pack starts at opacity 0.25 (faint), scale 0.94, blur(8px). Animates to opacity 1, scale 1, blur(0) on scrub. Pacing: slow start, normal middle, slow end. Custom curve.
- Cloud animates UP and outward, not down. Scale 1.0→1.25 (more dramatic). Opacity 0.95→0.4. Subtle hue shift to slightly cooler green at the end (filter: hue-rotate(-5deg)).
- Headline: subtle y -6 to 0 over the first 30% of pin. Ease: deep settle.
- Sub-text + CTA: stagger entrances. Sub-text at 0.30, CTA visible from 0 (correct already, just landed).
- Pin range: 220% instead of 180%.
- Scrub: 1.2 (slower follow, but with much smoother feel) — combined with reduced Lenis lerp, this stops feeling like rubber-band and starts feeling like deliberate cinema.

---

### Origin — priority **P1**

**What's there:**
- 3 text beats crossfade. Each fades in/out via `power2.in` + `power2.out`, y ±24
- Background field photo parallax 1.05→1.18 scale, y -2→+6
- Pin range: 240% (3 beats × 80%)

**What's wrong:**
- Hard crossfade between beats. At the moment of transition, both beats are at ~50% opacity which looks like a glitch.
- y movement of 24 is the GSAP-tutorial default. For text this size it's barely perceptible AND too snappy.
- Background parallax `ease: "none"` is correct, but the scale range (1.05–1.18) is too aggressive — it looks like the photo is breathing.

**Spec to hand to dev:**
- Beats: when transitioning from beat N to N+1, **don't run them simultaneously**. Run them in sequence: beat N exits over 0.6s (opacity → 0, y → -8), THEN beat N+1 enters over 0.7s (opacity 0.15→1, y +12→0). Crossfade with a 50% gap, not 100% overlap.
- Distances: y±24 → y±10 (subtle) for headlines, y±6 for body.
- Background parallax: 1.0→1.08 (much subtler), y 0 → -3%. Let the field be a quiet presence.
- Add a **gradient wipe** between beats — a subtle vertical gradient that sweeps across as the beat transitions. Reads as a "page turn" rather than a fade.
- Pin range: 280% (3 beats × ~93%) so each beat has more breathing room.

---

### Grinding — priority **P2**

**What's there:**
- Image parallax (passive, scrub 0.8): scale 1.08→1, y -4%→+4%
- Text reveal: `power2.out`, opacity 0→1, y 24→0
- "0g → 40g" counter: snaps to integers, runs once on scroll into view

**What's wrong:**
- Counter snapping to integers makes it feel like a binary digit display. Should tick fluidly.
- Counter runs on `power2.out` for 1.2s — too fast for a hero number. Premium counters take 1.8–2.5s.
- Text reveal uses identical curve and timing to the Hero subline. No section-level personality.
- The image parallax is doing two motions (scale + y) that arrive at the same moment. Looks templated.

**Spec to hand to dev:**
- Counter: drop integer snapping. Let it tick to one decimal during animation, then snap to whole at the end. Duration 2.0s. Easing: very long tail (cubic-bezier(0.16, 1, 0.3, 1)).
- Counter trigger should not be "scroll into view 80%" (binary). Use scrub linked to scroll, so the counter ticks UP as the user scrolls past — gives a feeling of "earning" the number.
- Text reveal: stagger eyebrow (50ms), title (150ms), body (300ms). Different curves: eyebrow snappy, title weighty, body soft.
- Image: scale 1→1.05 (smaller range), y +0%→+3% (less). Decouple the curves — scale uses linear, y uses gentle ease-in-out, so the motion never "arrives."

---

### Whisking — priority **P2**

**What's there:**
- Bowl: `power3.out`, scale 0.94→1, rotate -2deg→0, opacity 0→1, duration 1.2s
- Steps (1/2/3): `power2.out`, opacity 0→1, x -20→0, staggered 0.08s

**What's wrong:**
- Bowl rotation of -2deg is the only place rotation appears on the entire site. Reads as random rather than intentional.
- Steps slide in from the left with x:-20. This is the most clichéd reveal grammar in scroll animation. Hard "no" for premium.
- The bowl is the most beautiful asset on the site. It deserves a more deliberate reveal than 1.2s scale + fade.

**Spec to hand to dev:**
- Bowl: lose the rotation. Replace with a slow scale (0.96→1) over 1.6s + a vertical y +20→0. Use a "settle" curve (long tail, slight overshoot to 1.005 then back). Add a soft radial-gradient mask that pulls in from the edges (mask-image with an animated radial-gradient).
- Steps: drop the x-slide entirely. Replace with: number (01/02/03) appears at full opacity but mask-clipped, the mask reveals top-to-bottom over 0.4s — so the digit "draws in." Body text fades in at the end with a subtle y +6→0.
- Number font weight could go from 100 → 400 during reveal (variable font) — only works if Fraunces has a weight axis (it does).

---

### Buy / lifestyle close — priority **P3**

**What's there:**
- Lifestyle image is full-bleed background with a matcha-950 gradient overlay
- No animation; just a static section

**What's wrong:**
- After all the motion above, ending in a static section feels anticlimactic. The eye expects a final moment.

**Spec to hand to dev:**
- Headline `One bowl. Tomorrow morning.` reveals with a delay of 200ms after entering view, with the same "settle" curve as the Hero pack.
- Background image gets a slow zoom-in: scale 1.0→1.04 over 8s, infinite alternating. Almost imperceptible. Adds life without animation grammar.
- CTA pill scales 0.97→1 with a 400ms delay after the headline lands.

---

## Global motion language to spec

Hand the dev one file with these tokens. Once they're in place, every animation pulls from them.

### Easing curves (CSS / GSAP CustomEase)

| Name | cubic-bezier | When to use |
|---|---|---|
| **rise** | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero pack, counter, whisking bowl. Slow approach, very gentle settle. |
| **settle** | `cubic-bezier(0.22, 1, 0.36, 1)` | Text reveals (subline, body). Quick start, long tail. |
| **drift** | `cubic-bezier(0.4, 0, 0.6, 1)` | Background parallax, cloud, image zooms. Symmetric, never punctuated. |
| **carve** | `cubic-bezier(0.65, 0, 0.35, 1)` | Mask reveals (steps, page-turns). Sharp middle, soft edges. |
| **lift** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | One-off, brand moments only (CTA hover, NOT scroll animations). Has overshoot. |

**Banned for this brand:** `power2.out`, `power3.out`, `back.out`, `bounce.out`, `elastic`. Anything stock. Anything with visible spring.

### Timing scale (ms)

| Name | Duration | When |
|---|---|---|
| flick | 200 | Eyebrow / metadata reveals |
| beat | 600 | Body text / subline reveals |
| turn | 900 | Headlines, section transitions |
| pour | 1600 | Hero pack, whisking bowl, counter |
| breathe | 8000+ | Ambient loops (background image zoom) |

### Distance scale (px or %)

| Name | Value | When |
|---|---|---|
| nudge | 6 | Body text, eyebrow |
| step | 14 | Headlines |
| arrive | 24 | Hero pack y, large blocks |
| drift | 3% | Background parallax |
| swell | 8% | Background scale |

### Opacity grammar

- **Never** start at 0. Start at 0.12–0.18.
- End values: 1.0 always.
- Exit values: 0 is fine.
- For crossfades, the outgoing element exits to 0 BEFORE the incoming element starts entering. Add a 200–300ms gap of black/cream/empty. The emptiness is what makes the next thing feel deliberate.

### Lenis tuning

```ts
new Lenis({
  autoRaf: false,
  lerp: 0.07,           // was 0.1 — smoother, longer follow-through
  duration: 1.4,        // for programmatic scrolls
  easing: (t) => 1 - Math.pow(1 - t, 4),  // quartOut, cleaner than current expo curve
  smoothWheel: true,
  wheelMultiplier: 0.9, // very slightly damp wheel input for premium feel
  syncTouch: true,      // critical for mobile feeling expensive
});
```

### ScrollTrigger tuning

- `scrub: 1.2` everywhere (was 0.6–0.8). Counter-intuitive but: combined with the lower Lenis lerp, this feels like deliberate cinema, not rubber-band.
- `anticipatePin: 1` always (it's already on Hero, missing on Origin).
- For pinned sections add a 100–150ms entry "settle" — a tiny scale pulse on the pinned content the moment pin engages, so the reader knows "we've arrived."

---

## Performance notes (real, not vibes)

The eval I ran timed out at 30s during a 3-second programmatic scroll. That means the page is doing enough work per frame that scripted automation can starve it. On a real trackpad it'll be smoother (60fps cap), but it tells us:

1. **`drop-shadow()` filters on animated elements force repaints every frame.** The Hero pack uses `filter: drop-shadow(...)`. Move the shadow to a separate, non-animated `::after` pseudo-element, OR bake into the PNG.
2. **`mix-blend-multiply` on the powder-cloud div composes per-pixel every frame.** This is fine but adds GPU cost. If we keep it, we need `will-change: transform` on the cloud div.
3. **`feTurbulence` SVG filter** in the older PowderCloud is now unused (replaced with the PNG) — confirm no orphan SVG filters are still in the DOM.
4. **`font-feature-settings: "kern", "ss01"`** on every text node is fine but unnecessary; pin to display-text only.

### Required CSS additions

```css
.hero-cloud, .hero-pack, .origin-image {
  will-change: transform, opacity;
  transform: translateZ(0);   /* force compositor layer */
}
```

---

## What I need from you (designers)

To do this properly, the dev needs three things from you:

1. **3 reference sites with timestamps.** "I want the Hero to feel like X at 0:08–0:14." Without this, we're guessing.
2. **One paragraph describing the brand's motion vibe.** Not visual — motion specifically. "Slow tea ceremony" vs "morning sunlight cutting through curtains" vs "ink dropping into water" — pick one and stick with it.
3. **Veto list.** Three things you absolutely don't want. (e.g., "no bouncing, no parallax that breaks the spell, no spinning anything.")

Without 1–3 above, even with all the spec changes here, the result will still feel "good but generic." With them, it can actually be brand-defining.

---

## Fix priority for the dev

1. **P0** — Lenis lerp 0.1→0.07, ScrollTrigger scrub 0.6→1.2, replace all `power*.out` with the brand curve set. (Half a day. ~80% of the perceived "smoothness" win comes from this.)
2. **P0** — Hero pack reveal (start opacity 0.25 not 0, blur-out, longer pin). (2 hours.)
3. **P1** — Origin beat sequencing (no overlap, gap-then-enter). (3 hours.)
4. **P2** — Grinding counter scrubbed not triggered, decimal ticking. Whisking bowl rotation removed, mask reveal added. (Half a day.)
5. **P3** — Buy section ambient zoom. (1 hour.)
6. **P3** — Performance pass (will-change, GPU layers, drop-shadow off animated nodes). (1 hour.)

**Total to "this no longer feels fake": about 1.5 dev days, plus ~1 hour of designer time gathering refs.**
