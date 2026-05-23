"use client";

import { useEffect, useState } from "react";

export function SkipStoryLink() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const products = document.getElementById("producten");
    if (!products) return;

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "0px 0px -40% 0px", threshold: 0 },
    );

    obs.observe(products);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      href="#producten"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`pointer-events-auto fixed right-6 top-20 z-30 font-body text-[0.65rem] uppercase tracking-[0.22em] text-matcha-950/70 underline-offset-4 transition-opacity duration-500 hover:text-matcha-950 hover:underline md:right-10 md:top-24 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      Direct naar de shop →
    </a>
  );
}
