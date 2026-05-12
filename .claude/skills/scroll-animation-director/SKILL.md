---
name: scroll-animation-director
description: Use when building scroll-driven animations, pinned sections, scrubbed timelines, parallax, GSAP ScrollTrigger setups, Lenis smooth scroll, reveal sequences, and product storytelling for the matcha site.
---

# Scroll Animation Director

Use this skill when creating scroll-based animations, pinned sections, parallax scenes, reveal sequences, product storytelling, or GSAP ScrollTrigger timelines.

## Animation principles
- Motion must feel premium, slow, controlled, and intentional.
- Prefer fewer strong animations over many small random animations.
- Use pinned product storytelling for hero/origin/ritual sections.
- Use scrubbed timelines for product movement, powder particles, image reveals, and text transitions.
- Avoid bouncy easing, cheap fade spam, and chaotic movement.
- Every animation must have a static fallback.
- Respect prefers-reduced-motion.

## Technical rules
- Use GSAP ScrollTrigger for pinned and scrubbed scroll scenes.
- Use Lenis only for smooth scroll behavior.
- Keep animations transform-based: translate, scale, rotate, opacity.
- Avoid animating layout properties like width, height, top, left where possible.
- Kill ScrollTriggers on component unmount.
- Make mobile animations simpler.
- Test performance on mobile.

## Project-specific conventions
- This project uses `@gsap/react`'s `useGSAP()` hook to scope animations to a `gsap.context()` and auto-revert on unmount (Strict Mode safe).
- Use `gsap.matchMedia()` for responsive + reduced-motion branches — not `ScrollTrigger.matchMedia()`.
- The Lenis provider lives at `components/providers/LenisProvider.tsx` and runs a single RAF loop driven by `gsap.ticker`. Do not start a second `requestAnimationFrame` loop anywhere.
- ScrollTrigger is registered once via `lib/gsap.ts` — import `gsap` and `ScrollTrigger` from there, not from `gsap` directly.
