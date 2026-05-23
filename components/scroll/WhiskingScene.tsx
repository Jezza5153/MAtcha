"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { motionEase, motionDuration } from "@/lib/motion";

const steps = [
  { n: "01", text: "Twee gram. Door een fijne zeef." },
  { n: "02", text: "Zestig milliliter water van 75°C." },
  { n: "03", text: "Klop in een scherpe W. Vijftien seconden." },
];

export function WhiskingScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bowlRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Bowl — slow settle, no rotation
        gsap.fromTo(
          bowlRef.current,
          { scale: 0.96, y: 20, opacity: 0.15 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: motionDuration.pour,
            ease: motionEase.rise,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          },
        );

        // Numbered steps — clip-path digit reveal then body fade
        const stepEls = stepRefs.current.filter(
          (el): el is HTMLLIElement => el !== null,
        );
        stepEls.forEach((li, i) => {
          const num = li.querySelector<HTMLElement>("[data-step-number]");
          const body = li.querySelector<HTMLElement>("[data-step-body]");

          if (num) {
            gsap.fromTo(
              num,
              { clipPath: "inset(0% 0% 100% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.55,
                delay: i * 0.12,
                ease: motionEase.carve,
                scrollTrigger: { trigger: li, start: "top 88%" },
              },
            );
          }

          if (body) {
            gsap.fromTo(
              body,
              { opacity: 0.2, y: 6 },
              {
                opacity: 1,
                y: 0,
                duration: 0.55,
                delay: i * 0.12 + 0.35,
                ease: motionEase.settle,
                scrollTrigger: { trigger: li, start: "top 88%" },
              },
            );
          }
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-cream-100 py-24 sm:py-32"
      aria-label="Het ritueel van het opkloppen"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-6">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            04 · De chasen
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] tracking-tight text-matcha-950 sm:text-5xl md:text-6xl">
            De chasen doet het werk.
            <br />
            <em className="not-italic text-matcha-800">Jij begeleidt hem.</em>
          </h2>

          <ol className="mt-12 space-y-6">
            {steps.map((s, i) => (
              <li
                key={s.n}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="flex items-baseline gap-6 border-t border-stone-soft/60 pt-5"
              >
                <span
                  data-step-number
                  className="inline-block font-display text-2xl text-matcha-700 tabular-nums"
                  style={{ clipPath: "inset(0% 0% 100% 0%)" }}
                >
                  {s.n}
                </span>
                <p
                  data-step-body
                  className="font-body text-base text-ink sm:text-lg"
                  style={{ opacity: 0.2 }}
                >
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-6">
          <div
            ref={bowlRef}
            className="motion-layer relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full"
          >
            <Image
              src="/images/matcha-bowl.jpg"
              alt="Opgeklopte matcha in een handgedraaide keramische kom met bamboe chasen"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
