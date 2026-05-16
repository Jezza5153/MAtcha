"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { motionEase, motionScrub } from "@/lib/motion";

const beats = [
  {
    eyebrow: "02 · Origin",
    title: "Tencha leaves rest under shade.",
    body: "Three weeks before harvest, the canopy darkens. The plant slows. Theanine builds. Bitterness recedes.",
  },
  {
    eyebrow: "02 · Origin",
    title: "First cut. By hand.",
    body: "Only the youngest leaves go forward — bright, soft, and barely thumbnail-sized.",
  },
  {
    eyebrow: "02 · Origin",
    title: "Steamed within the hour.",
    body: "Heat locks in colour and grassy sweetness before the leaf has time to oxidise.",
  },
];

export function OriginPinned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const els = beatRefs.current.filter(
        (el): el is HTMLDivElement => el !== null,
      );

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(els, { opacity: 1, y: 0 });
      });

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          // Initial state: beat 0 visible at full opacity, others hidden
          gsap.set(els[0], { opacity: 1, y: 0 });
          gsap.set(els.slice(1), { opacity: 0, y: 10 });

          // Pinned-entry settle pulse — see motion-audit.md
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

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=280%",
              scrub: motionScrub.story,
              pin: true,
              anticipatePin: 1,
            },
          });

          // Hold beat 0 for an opening breath, then exit
          tl.to(
            els[0],
            { opacity: 0, y: -10, ease: motionEase.drift, duration: 0.7 },
            0.6,
          );

          // Sequential transitions: exit → 0.35 gap → enter
          for (let i = 1; i < els.length; i++) {
            tl.fromTo(
              els[i],
              { opacity: 0.15, y: 10 },
              {
                opacity: 1,
                y: 0,
                ease: motionEase.rise,
                duration: 0.9,
              },
              "+=0.35",
            );

            // Exit (except last beat — it stays)
            if (i < els.length - 1) {
              tl.to(
                els[i],
                { opacity: 0, y: -10, ease: motionEase.drift, duration: 0.7 },
                "+=0.7",
              );
            }
          }

          // Subtle background drift — quiet presence, not breathing photo
          gsap.fromTo(
            imageRef.current,
            { scale: 1, yPercent: 0 },
            {
              scale: 1.08,
              yPercent: -3,
              ease: motionEase.drift,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=280%",
                scrub: motionScrub.image,
              },
            },
          );
        },
      );

      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          els.forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0.15, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
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
      className="relative w-full overflow-hidden bg-matcha-950 text-cream-50 md:h-screen"
      aria-label="Origin"
    >
      <div ref={imageRef} className="origin-image absolute inset-0">
        <Image
          src="/images/matcha-field.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={75}
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-matcha-950/55 via-matcha-950/40 to-matcha-950/85"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:flex md:h-full md:items-center md:px-10 md:py-0">
        <div className="space-y-20 md:relative md:h-[28rem] md:w-full md:space-y-0">
          {beats.map((b, i) => (
            <div
              key={i}
              ref={(el) => {
                beatRefs.current[i] = el;
              }}
              className="md:absolute md:inset-0 md:flex md:flex-col md:justify-center"
            >
              <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-200">
                {b.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.75rem]">
                {b.title}
              </h2>
              <p className="mt-6 max-w-xl font-body text-base text-cream-100/85 sm:text-lg">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
