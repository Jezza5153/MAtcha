---
name: matcha-motion-director
description: Use this when creating, reviewing, or refactoring motion for the premium matcha ecommerce site, especially GSAP ScrollTrigger, Lenis, pinned scenes, scroll storytelling, reveal choreography, easing curves, parallax, counters, and animation performance.
---

# Matcha Motion Director

The matcha site must not feel like a generic GSAP tutorial. Motion should feel calm, premium, natural, and ritualistic.

## Core motion vibe

Motion should feel like:

- slow tea ceremony
- powder settling in air
- morning light moving across paper
- a hand-crafted editorial product film

It should not feel like:

- SaaS landing page animation
- bouncy startup UI
- template scroll effects
- random parallax
- scroll-jacking

## Banned motion

Do not use:

- `power2.out`
- `power3.out`
- `back.out`
- `bounce.out`
- `elastic`
- generic x-slide reveals
- opacity 0 to 1 pop-ins for entrance animations
- spinning product elements
- aggressive parallax
- hard crossfades

## Easing system

Use GSAP CustomEase and create these named curves:

- rise: `M0,0 C0.16,1 0.3,1 1,1`
- settle: `M0,0 C0.22,1 0.36,1 1,1`
- drift: `M0,0 C0.4,0 0.6,1 1,1`
- carve: `M0,0 C0.65,0 0.35,1 1,1`
- lift: `M0,0 C0.34,1.56 0.64,1 1,1`

Use:
- rise for product pack, bowl, counter
- settle for text reveals
- drift for powder cloud, backgrounds, image movement
- carve for mask reveals and page-turn effects
- lift only for hover states, not scroll animations

## Timing scale

- flick: 0.2s
- beat: 0.6s
- turn: 0.9s
- pour: 1.6s
- breathe: 8s+

## Distance scale

- nudge: 6px
- step: 14px
- arrive: 24px
- drift: 3%
- swell: 8%

## Opacity grammar

For entrance animations:
- Start opacity between 0.12 and 0.25.
- Never use entrance opacity 0 unless the object is masked.
- End at opacity 1.

For exit animations:
- Opacity 0 is allowed.

For text transitions:
- Do not fully crossfade two text blocks over each other.
- Exit first, leave a small 200–300ms visual gap, then enter the next beat.

## Choreography rules

Every reveal should be sequenced:

1. Eyebrow / small label
2. Headline
3. Body
4. CTA

Use overlapping offsets, not simultaneous starts.

Example:
- Eyebrow starts at 0.10
- Headline starts at 0.18
- Body starts at 0.30
- CTA starts at 0.42

## Lenis rules

Use:

```ts
new Lenis({
  autoRaf: false,
  lerp: 0.07,
  duration: 1.4,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  wheelMultiplier: 0.9,
  syncTouch: true,
});
```

Use one RAF strategy only:

- GSAP ticker drives Lenis.
- Do not create a separate requestAnimationFrame loop.

## ScrollTrigger rules

Default scrub values:

- Hero pinned scene: `scrub: 1.15`
- Story pinned scenes: `scrub: 1.0`
- Image parallax: `scrub: 0.8`
- Small reveals: `scrub: 0.4` or normal timeline trigger

Use `anticipatePin: 1` on pinned sections.
Do not pin complex sections on mobile unless tested. Mobile should use simplified flow.

## Hero rules

Hero is the most important motion section.

Pack:

- Starts visible, not invisible.
- Initial: opacity 0.25, scale 0.94, slight blur.
- Final: opacity 1, scale 1, blur 0.
- Use rise curve.
- Do not use drop-shadow filter on the animated pack element.

Cloud:

- Moves upward and outward.
- Scale 1.0 to 1.25.
- Opacity 0.95 to 0.4.
- Use drift curve.
- Avoid falling/downward movement.

Text:

- Headline gets subtle y movement only.
- Subline and CTA are staggered.
- CTA must remain visible early.

Pin:

- Hero pin range should feel spacious, around 220vh.

## Origin rules

Text beats must not hard-crossfade.

Use:

1. Beat exits.
2. Small visual gap.
3. Next beat enters.

Background movement:

- Scale 1.0 to 1.08 max.
- Y movement max 3%.
- Quiet presence, not breathing photo.

## Performance rules

Avoid:

- animated `drop-shadow()`
- long animated blur
- unnecessary `mix-blend-mode`
- orphan SVG filters
- animating layout properties

Prefer:

- transform
- opacity
- clip-path or mask only when needed
- compositor layers on animated assets

Required CSS for heavy animated elements:

```css
.hero-cloud,
.hero-pack,
.origin-image {
  will-change: transform, opacity;
  transform: translateZ(0);
}
```

Respect `prefers-reduced-motion`.
