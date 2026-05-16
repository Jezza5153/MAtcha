"use client";

import { useEffect, useState } from "react";

export function StickyShopCTA() {
  const [productsReached, setProductsReached] = useState(false);
  const [buyReached, setBuyReached] = useState(false);

  useEffect(() => {
    const products = document.getElementById("products");
    const buy = document.getElementById("buy");
    if (!products) return;

    const productsObs = new IntersectionObserver(
      ([entry]) => setProductsReached(entry.isIntersecting),
      { rootMargin: "0px 0px -40% 0px", threshold: 0 },
    );
    productsObs.observe(products);

    let buyObs: IntersectionObserver | null = null;
    if (buy) {
      buyObs = new IntersectionObserver(
        ([entry]) => setBuyReached(entry.isIntersecting),
        { rootMargin: "0px 0px -25% 0px", threshold: 0 },
      );
      buyObs.observe(buy);
    }

    return () => {
      productsObs.disconnect();
      buyObs?.disconnect();
    };
  }, []);

  const visible = productsReached && !buyReached;

  return (
    <a
      href="#products"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`pointer-events-auto fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full bg-matcha-950 px-5 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/30 transition-all duration-500 hover:bg-matcha-900 md:bottom-8 md:right-8 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      Shop matcha
      <span aria-hidden>→</span>
    </a>
  );
}
