"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { motionEase, motionScrub } from "@/lib/motion";

const beats = [
  {
    eyebrow: "Single-origin · Japan",
    title: "Ceremonial-grade matcha,",
    em: "served slowly.",
  },
  {
    eyebrow: "02 · Origin",
    title: "Three weeks",
    em: "under shade.",
  },
  {
    eyebrow: "03 · Stone mill",
    title: "Forty grams",
    em: "an hour, by stone.",
  },
  {
    eyebrow: "04 · The whisk",
    title: "Two grams. Sixty millilitres.",
    em: "Bamboo, in W shapes.",
  },
  {
    eyebrow: "",
    title: "Tomorrow morning.",
    em: "",
  },
];

// Soft elliptical mask that fades the rectangular margins of the pack PNG
const packMaskStyle = {
  WebkitMaskImage:
    "radial-gradient(ellipse 56% 80% at center, #000 65%, transparent 96%)",
  maskImage:
    "radial-gradient(ellipse 56% 80% at center, #000 65%, transparent 96%)",
} as const;

export function CinematicScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const packRef = useRef<HTMLDivElement>(null);
  const packTopRef = useRef<HTMLDivElement>(null);
  const packBottomRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const cloud2Ref = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const bowlRef = useRef<HTMLDivElement>(null);
  const tintRef = useRef<HTMLDivElement>(null);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([packRef.current, cloudRef.current], { opacity: 1 });
        gsap.set([fieldRef.current, bowlRef.current], { opacity: 0 });
        gsap.set(beatRefs.current[0], { opacity: 1, y: 0 });
        gsap.set(beatRefs.current.slice(1), { opacity: 0 });
      });

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          // Initial state
          gsap.set(packRef.current, { opacity: 1, scale: 1, yPercent: 0 });
          gsap.set(packTopRef.current, { y: 0, rotate: 0 });
          gsap.set(packBottomRef.current, { y: 0, rotate: 0 });
          gsap.set(cloudRef.current, {
            opacity: 0.18,
            scale: 0.5,
            yPercent: 0,
          });
          gsap.set(cloud2Ref.current, {
            opacity: 0,
            scale: 0.4,
            yPercent: 10,
            xPercent: -8,
          });
          gsap.set(fieldRef.current, { opacity: 0, scale: 1.18 });
          gsap.set(bowlRef.current, {
            opacity: 0,
            scale: 1.14,
            rotate: -2,
            clipPath: "circle(0% at 50% 55%)",
          });
          gsap.set(tintRef.current, { opacity: 0 });

          beatRefs.current.forEach((el, i) => {
            if (el)
              gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 14 });
          });

          // Pinned-entry settle — a 120ms scale pulse the moment the pin
          // engages. Below conscious perception but the eye reads it as
          // "we've arrived." Fires once per enter, not on every scrub tick.
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            onEnter: () => {
              gsap.fromTo(
                sectionRef.current,
                { scale: 0.995 },
                {
                  scale: 1,
                  duration: 0.12,
                  ease: motionEase.settle,
                  overwrite: "auto",
                },
              );
            },
          });

          // Master scrubbed timeline — 5 units = 5 stages
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=500%",
              scrub: motionScrub.story,
              pin: true,
              anticipatePin: 1,
            },
          });

          // — Pack lifecycle: lift, split open, dissolve into the cloud —
          tl.to(
            packRef.current,
            {
              yPercent: -3,
              scale: 1.02,
              ease: motionEase.drift,
              duration: 1,
            },
            0,
          );

          // Split: top half drifts up + tilts left, bottom half drifts down + tilts right
          tl.to(
            packTopRef.current,
            {
              y: -42,
              rotate: -3.2,
              ease: motionEase.rise,
              duration: 1.2,
            },
            0.85,
          );
          tl.to(
            packBottomRef.current,
            {
              y: 42,
              rotate: 3.2,
              ease: motionEase.rise,
              duration: 1.2,
            },
            0.85,
          );

          // Whole pack dissolves
          tl.to(
            packRef.current,
            {
              opacity: 0,
              scale: 0.86,
              filter: "blur(10px)",
              ease: motionEase.drift,
              duration: 1.1,
            },
            1.1,
          );

          // — Cloud bloom: emerges from the split, swells, holds, drifts —
          tl.to(
            cloudRef.current,
            {
              opacity: 1,
              scale: 1.5,
              ease: motionEase.rise,
              duration: 1.5,
            },
            0.6,
          );
          // Second cloud layer for depth (offset, smaller, slower)
          tl.to(
            cloud2Ref.current,
            {
              opacity: 0.7,
              scale: 1.1,
              yPercent: -4,
              xPercent: 4,
              ease: motionEase.drift,
              duration: 1.6,
            },
            0.95,
          );
          // Hold both at peak
          tl.to(
            cloudRef.current,
            { scale: 1.7, ease: motionEase.drift, duration: 0.6 },
            2.1,
          );
          // Drift away
          tl.to(
            cloudRef.current,
            {
              opacity: 0,
              scale: 2.05,
              yPercent: -28,
              ease: motionEase.drift,
              duration: 1.4,
            },
            2.6,
          );
          tl.to(
            cloud2Ref.current,
            {
              opacity: 0,
              scale: 1.5,
              yPercent: -36,
              xPercent: -2,
              ease: motionEase.drift,
              duration: 1.2,
            },
            2.8,
          );

          // — Field: cinematic zoom-in from 1.18 → 1.0, then settles —
          tl.to(
            fieldRef.current,
            {
              opacity: 0.9,
              scale: 1,
              ease: motionEase.rise,
              duration: 1.3,
            },
            1.7,
          );
          tl.to(
            fieldRef.current,
            {
              scale: 0.98,
              ease: motionEase.drift,
              duration: 0.8,
            },
            3.0,
          );
          tl.to(
            fieldRef.current,
            {
              opacity: 0,
              scale: 0.93,
              ease: motionEase.drift,
              duration: 0.6,
            },
            3.55,
          );

          // — Bowl: circular reveal + gentle rotation as it lands —
          tl.to(
            bowlRef.current,
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              clipPath: "circle(85% at 50% 55%)",
              ease: motionEase.carve,
              duration: 1.1,
            },
            3.3,
          );
          // Calm settle
          tl.to(
            bowlRef.current,
            { scale: 1.025, ease: motionEase.drift, duration: 0.9 },
            4.4,
          );

          // Cream tint warms across the dispersal moments
          tl.to(
            tintRef.current,
            { opacity: 0.32, ease: motionEase.drift, duration: 1.6 },
            1.4,
          );
          tl.to(
            tintRef.current,
            { opacity: 0, ease: motionEase.drift, duration: 0.9 },
            3.4,
          );

          // — Text beats — sequenced, no hard overlap —
          beatRefs.current.forEach((el, i) => {
            if (!el) return;
            const start = i;
            if (i > 0) {
              tl.fromTo(
                el,
                { opacity: 0, y: 18 },
                {
                  opacity: 1,
                  y: 0,
                  ease: motionEase.rise,
                  duration: 0.4,
                },
                start - 0.18,
              );
            }
            // Subtle drift while held (calm)
            tl.to(
              el,
              { y: -2, ease: motionEase.drift, duration: 0.4 },
              start + 0.15,
            );
            if (i < beatRefs.current.length - 1) {
              tl.to(
                el,
                {
                  opacity: 0,
                  y: -16,
                  ease: motionEase.drift,
                  duration: 0.35,
                },
                start + 0.6,
              );
            }
          });
        },
      );

      // Mobile fallback — no pin
      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(packRef.current, { opacity: 1, scale: 1 });
          gsap.set(cloudRef.current, { opacity: 0.4, scale: 1 });
          gsap.set(fieldRef.current, { opacity: 0 });
          gsap.set(bowlRef.current, {
            opacity: 0,
            clipPath: "circle(0% at 50% 50%)",
          });

          beatRefs.current.forEach((el) => {
            if (!el) return;
            gsap.fromTo(
              el,
              { opacity: 0, y: 12 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: motionEase.rise,
                scrollTrigger: { trigger: el, start: "top 85%" },
              },
            );
          });
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="cinematic"
      className="relative h-screen w-full overflow-hidden bg-cream-50"
      aria-label="Freddo Matcha — leaf to ritual"
    >
      {/* Field photo (deepest) */}
      <div ref={fieldRef} className="motion-layer absolute inset-0">
        <Image
          src="/images/matcha-field.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-matcha-950/35 via-transparent to-cream-50/35"
          aria-hidden
        />
      </div>

      {/* Bowl photo (revealed via circular mask) */}
      <div
        ref={bowlRef}
        className="motion-layer absolute inset-0"
        style={{ clipPath: "circle(0% at 50% 55%)" }}
      >
        <Image
          src="/images/matcha-bowl.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-cream-50/15 via-transparent to-cream-50/35"
          aria-hidden
        />
      </div>

      {/* Cream tint overlay */}
      <div
        ref={tintRef}
        className="pointer-events-none absolute inset-0 bg-cream-50"
        aria-hidden
      />

      {/* Powder cloud — primary layer */}
      <div
        ref={cloudRef}
        className="hero-cloud pointer-events-none absolute inset-0 mix-blend-multiply"
        aria-hidden
      >
        <Image
          src="/images/matcha-powder-cloud.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />
      </div>

      {/* Powder cloud — second offset layer for depth */}
      <div
        ref={cloud2Ref}
        className="motion-layer pointer-events-none absolute inset-0 mix-blend-multiply"
        aria-hidden
      >
        <Image
          src="/images/matcha-powder-cloud.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain object-center opacity-80"
        />
      </div>

      {/* Pack — split into two halves so it can deconstruct.
          Shadow lives on a sibling div, not via `filter: drop-shadow()` on
          the animated node, so the cinematic doesn't repaint a filter every
          frame. Frees ~5–10% of frame budget on mid-tier devices. */}
      <div
        ref={packRef}
        className="hero-pack pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="relative aspect-[4/5] w-40 sm:w-52 md:w-60 lg:w-64">
          {/* Soft footprint shadow — not animated */}
          <div
            aria-hidden
            className="absolute inset-x-6 bottom-2 h-6 rounded-full bg-matcha-950/22 blur-2xl"
          />
          <div
            ref={packTopRef}
            className="absolute inset-0"
            style={{ clipPath: "inset(0% 0% 50% 0%)" }}
          >
            <Image
              src="/images/matcha-pack.png"
              alt="Ceremonial matcha pack"
              fill
              priority
              sizes="(min-width: 1024px) 256px, (min-width: 768px) 240px, 208px"
              className="object-contain"
              style={packMaskStyle}
            />
          </div>
          <div
            ref={packBottomRef}
            className="absolute inset-0"
            style={{ clipPath: "inset(50% 0% 0% 0%)" }}
          >
            <Image
              src="/images/matcha-pack.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 256px, (min-width: 768px) 240px, 208px"
              className="object-contain"
              style={packMaskStyle}
            />
          </div>
        </div>
      </div>

      {/* Text beats — anchored to lower third */}
      <div className="pointer-events-none absolute inset-x-0 bottom-24 z-30 px-6 sm:bottom-28 md:bottom-32 md:px-10">
        <div className="relative mx-auto h-40 max-w-2xl text-center sm:h-44 md:h-52 lg:max-w-3xl">
          {beats.map((b, i) => (
            <div
              key={i}
              ref={(el) => {
                beatRefs.current[i] = el;
              }}
              className="absolute inset-0 flex flex-col items-center justify-end"
            >
              {b.eyebrow && (
                <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700 [text-shadow:0_1px_2px_rgb(251_247_236_/_0.6)]">
                  {b.eyebrow}
                </p>
              )}
              <h2
                className="mt-3 font-display text-3xl leading-[1.04] tracking-tight text-matcha-950 [text-shadow:0_2px_10px_rgb(251_247_236_/_0.45)] sm:text-4xl md:text-5xl"
                style={{ textWrap: "balance" }}
              >
                {b.title}
                {b.em && (
                  <>
                    <br />
                    <em className="not-italic text-matcha-800">{b.em}</em>
                  </>
                )}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed CTA — present throughout */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-40 flex justify-center sm:bottom-8 md:bottom-10 md:justify-end md:pr-10">
        <a
          href="#products"
          className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-matcha-950/90 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.18em] text-cream-50 shadow-lg shadow-matcha-950/20 backdrop-blur-md transition-colors hover:bg-matcha-900"
        >
          Choose your matcha
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
