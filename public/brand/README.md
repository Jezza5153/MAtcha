# `/public/brand/` — identity asset slots

Designer-owned. Drop final files here using the exact filenames below so engineering doesn't have to rewire metadata.

| Slot | Filename | Spec | Currently |
|---|---|---|---|
| Favicon | `favicon.svg` | SVG, viewBox `0 0 64 64`, ≤2KB, single color or 2-color, no gradients | **Placeholder** — temporary "FM" mark in matcha-900 on cream-50. Replace with monogram. |
| Apple touch icon | `apple-touch-icon.png` | PNG 180×180, full bleed, no rounded corners (iOS rounds them) | Missing — wire into [`app/layout.tsx`](../../app/layout.tsx) `icons.apple` once delivered |
| Wordmark | `wordmark.svg` | SVG, "Freddo Matcha" two-word lockup, viewBox tight to glyphs | Missing |
| Compact wordmark | `wordmark-compact.svg` | SVG, "FREDDOMATCHA" single-word all-caps lockup | Missing |
| Monogram | `monogram.svg` | SVG, single mark / ligature for avatar + favicon use | Missing |
| OG default | `og-default.jpg` | JPG 1200×630, sRGB q90, text-safe inside inner 1080×510 | Missing — wire into `app/layout.tsx` `openGraph.images` once delivered |
| OG square | `og-square.jpg` | JPG 1200×1200 — for Instagram / iMessage previews | Missing (optional) |

## Rules

1. **Lowercase, hyphenated filenames.** No version suffixes (`v2`, `-final`).
2. **SVGs:** include `viewBox`, no embedded raster, no XML stylesheets, no inline `width`/`height` on the root.
3. **Color tokens:** stick to the palette defined in [`app/globals.css`](../../app/globals.css). Matcha-950 (`#0d1f15`) and cream-50 (`#fbf7ec`) are the safe defaults.
4. **Accessibility:** Add `role="img"` and an `aria-label` to standalone SVGs.

See [`docs/design-spec-graphics.md`](../../docs/design-spec-graphics.md) for the full brief.
