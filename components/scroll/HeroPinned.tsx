"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { motionEase, motionScrub, motionOpacity } from "@/lib/motion";

export function HeroPinned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const packRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            cloudRef.current,
            packRef.current,
            headlineRef.current,
            sublineRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            clearProps: "transform",
          },
        );
      });

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=220%",
              scrub: motionScrub.hero,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
            },
          });

          tl.fromTo(
            cloudRef.current,
            { yPercent: 0, scale: 1, opacity: 0.95 },
            {
              yPercent: -10,
              scale: 1.25,
              opacity: 0.4,
              ease: motionEase.drift,
            },
            0,
          );

          tl.fromTo(
            packRef.current,
            {
              opacity: motionOpacity.present,
              scale: 0.94,
              yPercent: 2,
            },
            {
              opacity: motionOpacity.full,
              scale: 1,
              yPercent: 0,
              ease: motionEase.rise,
            },
            0,
          );

          tl.fromTo(
            packRef.current,
            { filter: "blur(8px)" },
            { filter: "blur(0px)", ease: motionEase.settle, duration: 0.6 },
            0,
          );

          tl.fromTo(
            headlineRef.current,
            { y: -6, opacity: 1 },
            { y: 0, opacity: 1, ease: motionEase.settle, duration: 0.3 },
            0,
          );

          tl.fromTo(
            sublineRef.current,
            { opacity: motionOpacity.ghost, y: 14 },
            {
              opacity: motionOpacity.full,
              y: 0,
              ease: motionEase.settle,
            },
            0.35,
          );
        },
      );

      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            packRef.current,
            { scale: 0.96, opacity: motionOpacity.present },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: motionEase.rise,
              scrollTrigger: {
                trigger: packRef.current,
                start: "top 88%",
              },
            },
          );
          gsap.fromTo(
            sublineRef.current,
            { opacity: motionOpacity.ghost, y: 8 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: motionEase.settle,
              scrollTrigger: {
                trigger: sublineRef.current,
                start: "top 92%",
              },
            },
          );
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-cream-50"
      aria-label="Hero"
    >
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
          className="scale-110 object-cover object-center opacity-90"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-between px-6 pt-20 pb-14 sm:pt-24 sm:pb-20 md:px-10">
        <div ref={headlineRef} className="text-center">
          <p className="mb-4 font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            FREDDOMATCHA · Single origin Uji
          </p>
          <h1 className="font-display text-[2.6rem] leading-[1.04] tracking-tight text-matcha-950 sm:text-6xl md:text-[5rem]">
            FREDDOMATCHA ceremonial,
            <br />
            <em className="not-italic text-matcha-800">future ritual in green.</em>
          </h1>
        </div>

        <div className="relative my-2 sm:my-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[58%] h-[60%] w-[78%] -translate-x-1/2 rounded-full bg-matcha-950/20 blur-2xl"
          />
          <div ref={packRef} className="hero-pack relative">
            <div className="relative aspect-[4/5] w-44 sm:w-56 md:w-64 lg:w-72">
              <Image
                src="/images/matcha-pack.png"
                alt="Ceremonial matcha pack"
                fill
                priority
                sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 224px, 176px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <p
            ref={sublineRef}
            className="max-w-md font-body text-base text-ink-soft sm:text-lg"
          >
            A high-end matcha experience blending Japanese restraint with editorial futurism.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-3 rounded-full bg-matcha-900 px-7 py-3 font-body text-sm font-medium uppercase tracking-[0.18em] text-cream-50 shadow-lg shadow-matcha-950/15 transition-colors hover:bg-matcha-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-matcha-700"
          >
            Choose your matcha
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
