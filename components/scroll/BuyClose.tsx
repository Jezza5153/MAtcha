"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { motionEase, motionDuration } from "@/lib/motion";

export function BuyClose() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Headline — delayed reveal once section enters
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0.15, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: motionDuration.turn,
            delay: 0.2,
            ease: motionEase.settle,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          },
        );

        // CTA — settle in after headline
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0.2, scale: 0.97 },
          {
            opacity: 1,
            scale: 1,
            duration: motionDuration.beat,
            delay: 0.6,
            ease: motionEase.rise,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          },
        );

        // Ambient background zoom — desktop only, almost imperceptible
        mm.add("(min-width: 768px)", () => {
          gsap.to(bgRef.current, {
            scale: 1.04,
            duration: motionDuration.breathe,
            ease: "none",
            yoyo: true,
            repeat: -1,
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="bestellen"
      className="relative isolate overflow-hidden px-6 py-32 text-cream-50 sm:py-40 md:px-10"
      aria-label="Begin"
    >
      <div ref={bgRef} className="motion-layer absolute inset-0 -z-10">
        <Image
          src="/images/matcha-lifestyle-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={75}
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-matcha-950/60 via-matcha-950/55 to-matcha-950/85"
        aria-hidden
      />
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-300">
          08 · Begin
        </p>
        <h2
          ref={headlineRef}
          className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-[5rem]"
        >
          Eén kom.
          <br />
          <em className="not-italic">Morgenochtend.</em>
        </h2>
        <p className="mt-8 font-body text-base text-cream-100/85 sm:text-lg">
          Gratis verzending binnen de EU vanaf €60.
        </p>
        <a
          ref={ctaRef}
          href="#producten"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-cream-50 px-8 py-3.5 font-body text-sm font-medium uppercase tracking-[0.18em] text-matcha-950 transition-colors hover:bg-cream-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream-100"
        >
          Kies jouw matcha
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
