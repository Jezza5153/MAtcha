"use client";

import { useEffect, useState, type ComponentType } from "react";

/**
 * Loads CinematicScroll *only* when the viewport is (min-width: 768px). The
 * dynamic `import()` is deferred behind the matchMedia check so the chunk is
 * never fetched on mobile — verifiable in Network: no CinematicScroll chunk
 * requested at 360px.
 */
export function DesktopCinematic() {
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");

    let cancelled = false;
    const load = () => {
      if (cancelled || !mq.matches) return;
      void import("@/components/scroll/CinematicScroll").then((m) => {
        if (!cancelled) setComp(() => m.CinematicScroll);
      });
    };

    load();
    mq.addEventListener("change", load);
    return () => {
      cancelled = true;
      mq.removeEventListener("change", load);
    };
  }, []);

  if (!Comp) return null;
  return <Comp />;
}
