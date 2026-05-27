"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/components/providers/CartProvider";

export function MobileStickyBuyBar({ product }: { product: Product }) {
  const cart = useCart();

  // Hide rule 1: appear only after hero CTA leaves view
  const [heroCtaOut, setHeroCtaOut] = useState(false);
  // Hide rule 2: hide when footer / email-section / pre-launch-note is in view
  const [closerInView, setCloserInView] = useState(false);
  // Hide rule 3: hide when a text input on the page has focus (proxy for mobile keyboard)
  const [inputFocused, setInputFocused] = useState(false);
  // Hide rule 4: hide when MobileNav is open (data-mobile-nav-open on <html>)
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector<HTMLElement>("[data-product-hero-cta]");
    if (!heroCta) return;

    const heroObs = new IntersectionObserver(
      ([entry]) => setHeroCtaOut(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    heroObs.observe(heroCta);

    return () => heroObs.disconnect();
  }, []);

  useEffect(() => {
    // Watch the site-level footer (last footer in DOM) and the optional
    // mobile email section. Skip drawer/cart inner footers and skip FAQ
    // (which appears mid-page on PDPs and would hide the bar too early).
    const footers = document.querySelectorAll("footer");
    const siteFooter = footers[footers.length - 1] ?? null;
    const targets = [
      siteFooter,
      document.querySelector("[aria-label='Blijf op de hoogte']"),
    ].filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const closeObs = new IntersectionObserver(
      (entries) => {
        const anyInView = entries.some((e) => e.isIntersecting);
        setCloserInView(anyInView);
      },
      { threshold: 0 },
    );
    targets.forEach((el) => closeObs.observe(el));

    return () => closeObs.disconnect();
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
    const sync = () => {
      setNavOpen(root.getAttribute("data-mobile-nav-open") === "true");
    };
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(root, { attributes: true, attributeFilter: ["data-mobile-nav-open"] });
    return () => obs.disconnect();
  }, []);

  const visible =
    heroCtaOut && !closerInView && !inputFocused && !navOpen && !cart.isOpen;

  return (
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
        <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-full bg-matcha-950 py-2.5 pl-5 pr-2 shadow-xl shadow-matcha-950/30">
          <div className="min-w-0">
            <p className="truncate font-display text-sm leading-tight text-cream-50">
              {product.name}
            </p>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-cream-100/70">
              {formatPrice(product.priceCents)} · incl. btw
            </p>
          </div>
          <button
            type="button"
            onClick={cart.open}
            aria-label={`Houd me op de hoogte over ${product.name}`}
            tabIndex={visible ? 0 : -1}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-cream-50 px-4 py-2 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950"
          >
            Houd me op de hoogte
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
