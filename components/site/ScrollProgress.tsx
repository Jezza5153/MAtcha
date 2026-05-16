"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let last = -1;

    const tick = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const ratio = Math.min(1, Math.max(0, window.scrollY / max));
      if (Math.abs(ratio - last) > 0.001 && barRef.current) {
        last = ratio;
        barRef.current.style.transform = `scaleX(${ratio})`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

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
