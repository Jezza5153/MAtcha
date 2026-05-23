"use client";

import { useEffect, useState } from "react";

export function StickyShopCTA() {
  const [productsReached, setProductsReached] = useState(false);
  const [buyReached, setBuyReached] = useState(false);

  useEffect(() => {
    const products = document.getElementById("producten");
    const buy = document.getElementById("bestellen");
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
    <>
      {/* Mobile: full-width bottom bar, safe-area-padded */}
      <div
        aria-hidden={!visible}
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-30 md:hidden ${visible ? "" : ""}`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div
          className={`mx-3 mb-3 transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
        >
          <a
            href="#producten"
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
            className="pointer-events-auto flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-matcha-950 px-6 py-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/30"
          >
            Shop matcha
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Desktop: floating pill, bottom-right */}
      <a
        href="#producten"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        className={`pointer-events-auto fixed bottom-8 right-8 z-30 hidden items-center gap-2 rounded-full bg-matcha-950 px-5 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/30 transition-all duration-500 hover:bg-matcha-900 md:inline-flex ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        Shop matcha
        <span aria-hidden>→</span>
      </a>
    </>
  );
}
