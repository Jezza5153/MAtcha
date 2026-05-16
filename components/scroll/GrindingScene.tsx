"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { motionEase, motionScrub } from "@/lib/motion";

export function GrindingScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const statRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Image parallax — quiet drift, not breathing photo
        gsap.fromTo(
          imageRef.current,
          { scale: 1, yPercent: 0 },
          {
            scale: 1.05,
            yPercent: -3,
            ease: motionEase.drift,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: motionScrub.image,
            },
          },
        );

        // Staggered text reveal — eyebrow → title → body
        gsap.fromTo(
          eyebrowRef.current,
          { opacity: 0.15, y: 6 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.05,
            ease: motionEase.settle,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          },
        );

        gsap.fromTo(
          titleRef.current,
          { opacity: 0.18, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.15,
            ease: motionEase.rise,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          },
        );

        gsap.fromTo(
          bodyRef.current,
          { opacity: 0.2, y: 6 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.3,
            ease: motionEase.settle,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          },
        );

        // Counter — scrub-linked, decimals during scrub, snap at end
        if (statRef.current) {
          const counter = { value: 0 };
          gsap.to(counter, {
            value: 40,
            ease: motionEase.settle,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "center 50%",
              scrub: motionScrub.micro,
            },
            onUpdate: () => {
              const v = counter.value;
              if (statRef.current) {
                statRef.current.textContent =
                  v >= 39.5 ? "40g" : `${v.toFixed(1)}g`;
              }
            },
          });
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-cream-50 py-24 sm:py-32"
      aria-label="Stone-grinding"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-7 md:order-2">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl">
            <div ref={imageRef} className="motion-layer absolute inset-0">
              <Image
                src="/images/matcha-powder.jpg"
                alt="Macro view of fine matcha powder"
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-5 md:order-1 md:flex md:flex-col md:justify-center">
          <p
            ref={eyebrowRef}
            className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700"
          >
            03 · Stone mill
          </p>
          <h2
            ref={titleRef}
            className="mt-3 font-display text-4xl leading-[1.08] tracking-tight text-matcha-950 sm:text-5xl md:text-6xl"
          >
            Slow enough to keep the colour.
          </h2>

          <div className="mt-10 flex items-baseline gap-4">
            <span
              ref={statRef}
              className="font-display text-7xl tracking-tight text-matcha-800 tabular-nums sm:text-8xl"
              aria-label="40 grams per hour"
            >
              0.0g
            </span>
            <span className="font-body text-sm uppercase tracking-[0.2em] text-ink-soft">
              per hour, per mill
            </span>
          </div>

          <p
            ref={bodyRef}
            className="mt-8 max-w-md font-body text-base text-ink-soft sm:text-lg"
          >
            Granite stones turning at the pace the leaf can tolerate. Faster
            grinding heats the powder and dulls the green.
          </p>
        </div>
      </div>
    </section>
  );
}
