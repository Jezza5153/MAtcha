"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import {
  motionDistance,
  motionDuration,
  motionEase,
  motionOpacity,
} from "@/lib/motion";

/**
 * Mobile cinematic vocabulary — short scroll-triggered reveals using the
 * locked easing (rise / settle / lift / drift) and durations (beat / turn).
 *
 * NO pinning. NO Lenis. NO 500% scrolls. Each reveal fires once on enter and
 * forgets itself. Gated to (max-width: 767px) and prefers-reduced-motion:
 * no-preference via gsap.matchMedia. The desktop cinematic is untouched and
 * still gated to (min-width: 768px) inside DesktopCinematic.
 *
 * To add motion to a mobile section, set `data-mobile-reveal="<kind>"` on the
 * element. Multi-element kinds (story-card / trust-stat / ritual-step) get a
 * tiny stagger so consecutive items don't all fire at once.
 */

type Kind =
  | "hero-pack"
  | "hero-headline"
  | "hero-tagline"
  | "hero-cta"
  | "star-image"
  | "star-meta"
  | "star-cta"
  | "story-card"
  | "trust-stat"
  | "ritual-step"
  | "note"
  | "faq"
  | "email-section"
  | "section-headline";

const REVEALS: Record<
  Kind,
  {
    from: gsap.TweenVars;
    to: gsap.TweenVars;
    start?: string;
    stagger?: number;
  }
> = {
  "hero-pack": {
    from: { opacity: 0, scale: 0.94 },
    to: {
      opacity: 1,
      scale: 1,
      duration: motionDuration.turn,
      ease: motionEase.rise,
    },
    start: "top 95%",
  },
  "hero-headline": {
    from: { opacity: motionOpacity.ghost, y: motionDistance.step },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.turn,
      ease: motionEase.settle,
    },
    start: "top 95%",
  },
  "hero-tagline": {
    from: { opacity: motionOpacity.ghost, y: motionDistance.step },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.turn,
      ease: motionEase.settle,
      delay: 0.08,
    },
    start: "top 95%",
  },
  "hero-cta": {
    from: { opacity: 0, y: motionDistance.nudge },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.beat,
      ease: motionEase.lift,
      delay: 0.18,
    },
    start: "top 95%",
  },
  "star-image": {
    from: { opacity: 0, scale: 0.96 },
    to: {
      opacity: 1,
      scale: 1,
      duration: motionDuration.turn,
      ease: motionEase.rise,
    },
    start: "top 85%",
  },
  "star-meta": {
    from: { opacity: motionOpacity.ghost, y: motionDistance.step },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.turn,
      ease: motionEase.settle,
      delay: 0.06,
    },
    start: "top 85%",
  },
  "star-cta": {
    from: { opacity: 0, y: motionDistance.nudge },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.beat,
      ease: motionEase.lift,
      delay: 0.16,
    },
    start: "top 85%",
  },
  "story-card": {
    from: { opacity: 0, y: motionDistance.arrive, scale: 0.98 },
    to: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: motionDuration.turn,
      ease: motionEase.settle,
    },
    start: "top 88%",
    stagger: 0.08,
  },
  "trust-stat": {
    from: { opacity: 0, y: motionDistance.step, scale: 0.96 },
    to: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: motionDuration.beat,
      ease: motionEase.lift,
    },
    start: "top 88%",
    stagger: 0.06,
  },
  "ritual-step": {
    from: { opacity: 0, y: motionDistance.step },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.turn,
      ease: motionEase.settle,
    },
    start: "top 88%",
    stagger: 0.1,
  },
  note: {
    from: { opacity: 0, y: motionDistance.step },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.turn,
      ease: motionEase.settle,
    },
    start: "top 88%",
  },
  faq: {
    from: { opacity: 0, y: motionDistance.step },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.turn,
      ease: motionEase.settle,
    },
    start: "top 88%",
  },
  "email-section": {
    from: { opacity: 0, y: motionDistance.step },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.turn,
      ease: motionEase.settle,
    },
    start: "top 88%",
  },
  "section-headline": {
    from: { opacity: motionOpacity.ghost, y: motionDistance.nudge },
    to: {
      opacity: 1,
      y: 0,
      duration: motionDuration.turn,
      ease: motionEase.settle,
    },
    start: "top 90%",
  },
};

export function MobileCinematic() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Mobile only, motion allowed
    mm.add(
      "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
      () => {
        (Object.keys(REVEALS) as Kind[]).forEach((kind) => {
          const cfg = REVEALS[kind];
          const els = document.querySelectorAll<HTMLElement>(
            `[data-mobile-reveal="${kind}"]`,
          );
          els.forEach((el, i) => {
            gsap.set(el, { ...cfg.from, willChange: "transform, opacity" });
            const baseDelay =
              (cfg.to.delay as number | undefined) ?? 0;
            const indexDelay = cfg.stagger ? i * cfg.stagger : 0;
            gsap.to(el, {
              ...cfg.to,
              delay: baseDelay + indexDelay,
              onComplete: () => {
                // Release will-change once the reveal is done to free GPU
                // memory on subsequent paints.
                gsap.set(el, { clearProps: "willChange" });
              },
              scrollTrigger: {
                trigger: el,
                start: cfg.start ?? "top 88%",
                once: true,
              },
            });
          });
        });
      },
    );

    // Reduced motion: ensure everything is visible (no animation, no hidden
    // start state). gsap.matchMedia will not run the desktop branch on mobile,
    // so we explicitly normalize state here.
    mm.add(
      "(max-width: 767px) and (prefers-reduced-motion: reduce)",
      () => {
        const all = document.querySelectorAll<HTMLElement>(
          "[data-mobile-reveal]",
        );
        all.forEach((el) =>
          gsap.set(el, { opacity: 1, y: 0, scale: 1, clearProps: "willChange" }),
        );
      },
    );

    // Desktop: do nothing. The data-mobile-reveal elements are inside the
    // mobile-only container (md:hidden), so they're display:none and don't
    // need motion attention.
  }, { scope: rootRef });

  return <div ref={rootRef} aria-hidden hidden />;
}
