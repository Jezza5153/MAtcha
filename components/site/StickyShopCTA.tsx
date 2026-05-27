"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/providers/CartProvider";

/**
 * Sticky BUY CTA. Appears once the products section enters view and stays
 * until the mobile email section (or footer) is reached. Clicks open the cart
 * drawer directly — same primary buy intent as the hero CTA.
 */
export function StickyShopCTA() {
  const cart = useCart();
  const [productsReached, setProductsReached] = useState(false);
  const [closerInView, setCloserInView] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const products = document.getElementById("producten");
    if (!products) return;

    const productsObs = new IntersectionObserver(
      ([entry]) => setProductsReached(entry.isIntersecting),
      { rootMargin: "0px 0px -30% 0px", threshold: 0 },
    );
    productsObs.observe(products);
    return () => productsObs.disconnect();
  }, []);

  useEffect(() => {
    // Hide when the page's email section or the site footer is in view.
    const footers = document.querySelectorAll("footer");
    const siteFooter = footers[footers.length - 1] ?? null;
    const targets = [
      siteFooter,
      document.querySelector("[aria-label='Blijf op de hoogte']"),
    ].filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => setCloserInView(entries.some((e) => e.isIntersecting)),
      { threshold: 0 },
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onFocusIn = () => {
      const el = document.activeElement as HTMLElement | null;
      if (!el) return setInputFocused(false);
      const tag = el.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || el.isContentEditable) {
        setInputFocused(true);
      }
    };
    const onFocusOut = () => setInputFocused(false);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setNavOpen(root.getAttribute("data-mobile-nav-open") === "true");
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(root, { attributes: true, attributeFilter: ["data-mobile-nav-open"] });
    return () => obs.disconnect();
  }, []);

  const visible =
    productsReached && !closerInView && !inputFocused && !navOpen && !cart.isOpen;

  return (
    <>
      {/* Mobile: full-width bottom bar */}
      <div
        aria-hidden={!visible}
        className="pointer-events-none fixed inset-x-0 bottom-0 z-30 md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div
          className={`mx-3 mb-3 transition-all duration-400 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={cart.open}
            aria-label="Bestel Freddo Matcha"
            tabIndex={visible ? 0 : -1}
            className="pointer-events-auto flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-matcha-950 px-6 py-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/30"
          >
            Bestel Freddo Matcha
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      {/* Desktop: floating pill */}
      <button
        type="button"
        onClick={cart.open}
        aria-label="Bestel Freddo Matcha"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        className={`pointer-events-auto fixed bottom-8 right-8 z-30 hidden items-center gap-2 rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/30 transition-all duration-500 hover:bg-matcha-900 md:inline-flex ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        Bestel Freddo Matcha
        <span aria-hidden>→</span>
      </button>
    </>
  );
}
