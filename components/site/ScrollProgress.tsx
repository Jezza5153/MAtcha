"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@/components/providers/LenisProvider";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      // Fallback for reduced-motion (Lenis is disabled): rAF poll once on mount
      const update = () => {
        const max =
          document.documentElement.scrollHeight - window.innerHeight || 1;
        const ratio = Math.min(1, Math.max(0, window.scrollY / max));
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${ratio})`;
        }
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      return () => window.removeEventListener("scroll", update);
    }

    let last = -1;

    const onScroll = ({
      scroll,
      limit,
    }: {
      scroll: number;
      limit: number;
    }) => {
      const ratio = limit > 0 ? Math.min(1, Math.max(0, scroll / limit)) : 0;
      if (Math.abs(ratio - last) > 0.001 && barRef.current) {
        last = ratio;
        barRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-matcha-950/5"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-matcha-700"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
