"use client";

import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";
import { MobileNav } from "./MobileNav";

export function SiteChrome() {
  const cart = useCart();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 z-40"
      style={{ top: "calc(env(safe-area-inset-top) + 2.75rem)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-10 md:py-3">
        <div className="pointer-events-auto flex items-center gap-2">
          <MobileNav />
          <Link
            href="/"
            aria-label="Freddo Matcha — naar de homepage"
            className="inline-flex min-h-[44px] items-center gap-1.5 font-display text-base text-matcha-950 transition-opacity hover:opacity-70 sm:text-lg"
            style={{ letterSpacing: "-0.012em", fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
          >
            <span>Freddo Matcha</span>
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-matcha-500"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={cart.open}
          aria-label={`Open winkelmand, ${cart.itemCount} ${cart.itemCount === 1 ? "product" : "producten"}`}
          className="pointer-events-auto inline-flex min-h-[44px] items-center gap-2 rounded-full bg-cream-50/85 px-5 py-3 font-body text-xs uppercase tracking-[0.2em] text-matcha-950 backdrop-blur-sm shadow-sm transition-colors hover:bg-cream-50"
        >
          Winkelmand
          <span
            aria-hidden
            className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-matcha-950 px-1.5 text-[0.7rem] text-cream-50"
          >
            {cart.itemCount}
          </span>
        </button>
      </div>
    </div>
  );
}
