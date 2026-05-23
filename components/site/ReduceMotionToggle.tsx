"use client";

import { useEffect, useState } from "react";
import { EVENTS, track } from "@/lib/analytics";

const STORAGE_KEY = "freddo:reduce-motion";

export function ReduceMotionToggle() {
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

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.22em] text-ink-soft transition-colors hover:text-matcha-950"
    >
      <span
        aria-hidden
        className={`inline-flex h-5 w-9 items-center rounded-full p-0.5 transition-colors ${enabled ? "bg-matcha-950" : "bg-stone-soft/70"}`}
      >
        <span
          className={`block h-4 w-4 rounded-full bg-cream-50 transition-transform ${enabled ? "translate-x-4" : "translate-x-0"}`}
        />
      </span>
      Minder beweging
    </button>
  );
}
