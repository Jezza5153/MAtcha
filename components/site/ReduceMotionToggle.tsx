"use client";

import { useEffect, useState } from "react";
import { EVENTS, track } from "@/lib/analytics";

const STORAGE_KEY = "freddo:reduce-motion";

export function ReduceMotionToggle({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) === "1";
    setEnabled(stored);
    document.documentElement.classList.toggle("force-reduce-motion", stored);
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    document.documentElement.classList.toggle("force-reduce-motion", next);
    track(EVENTS.ToggledReduceMotion, { enabled: next });
  };

  // tone="dark" = used on the matcha-950 dark footer, needs light text
  // tone="light" = used on the cream MobileNav drawer, needs dark text
  const textClass =
    tone === "dark"
      ? "text-cream-100 hover:text-cream-50"
      : "text-matcha-800 hover:text-matcha-950";

  const trackOnClass =
    tone === "dark" ? "bg-cream-50" : "bg-matcha-950";
  const trackOffClass =
    tone === "dark" ? "bg-cream-100/30" : "bg-stone-soft/70";
  const thumbClass = tone === "dark" ? "bg-matcha-950" : "bg-cream-50";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      className={`inline-flex min-h-[44px] items-center gap-3 font-body text-xs uppercase tracking-[0.22em] transition-colors ${textClass}`}
    >
      <span
        aria-hidden
        className={`inline-flex h-5 w-9 items-center rounded-full p-0.5 transition-colors ${enabled ? trackOnClass : trackOffClass}`}
      >
        <span
          className={`block h-4 w-4 rounded-full transition-transform ${thumbClass} ${enabled ? "translate-x-4" : "translate-x-0"}`}
        />
      </span>
      Minder beweging
    </button>
  );
}
