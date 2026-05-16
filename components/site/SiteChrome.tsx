"use client";

import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";

export function SiteChrome() {
  const cart = useCart();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="pointer-events-auto font-display text-base tracking-tight text-matcha-950 mix-blend-multiply hover:opacity-70 transition-opacity sm:text-lg"
        >
          Freddo Matcha
        </Link>

        <button
          type="button"
          onClick={cart.open}
          aria-label={`Open cart, ${cart.itemCount} item${cart.itemCount === 1 ? "" : "s"}`}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-cream-50/85 px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-matcha-950 backdrop-blur-sm shadow-sm transition-colors hover:bg-cream-50"
        >
          Cart
          <span
            aria-hidden
            className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-matcha-950 px-1.5 text-[0.65rem] text-cream-50"
          >
            {cart.itemCount}
          </span>
        </button>
      </div>
    </div>
  );
}
