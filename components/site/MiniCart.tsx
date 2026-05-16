"use client";

import { useEffect } from "react";
import { useCart, type CartLine } from "@/components/providers/CartProvider";
import { formatPrice } from "@/lib/products";

export function MiniCart() {
  const cart = useCart();

  useEffect(() => {
    if (!cart.isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cart.close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cart.isOpen, cart]);

  return (
    <>
      <div
        aria-hidden={!cart.isOpen}
        onClick={cart.close}
        className={`fixed inset-0 z-50 bg-matcha-950/50 backdrop-blur-sm transition-opacity duration-300 ${cart.isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        aria-hidden={!cart.isOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream-50 shadow-2xl transition-transform duration-500 ease-out ${cart.isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between border-b border-matcha-900/10 px-6 py-5">
          <h2 className="font-display text-2xl text-matcha-950">Your cart</h2>
          <button
            type="button"
            onClick={cart.close}
            aria-label="Close cart"
            className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft hover:text-matcha-950"
          >
            Close
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.lines.length === 0 ? <EmptyCart /> : <CartLines lines={cart.lines} />}
        </div>

        <footer className="border-t border-matcha-900/10 px-6 py-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
            Checkout
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-matcha-950">
            Checkout opens when supplier and lot are locked. Pre-orders coming
            soon. Drop your email below to be first in line.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Email capture lands in PR-7. Thanks for testing.");
            }}
          >
            <input
              type="email"
              required
              placeholder="you@somewhere"
              className="flex-1 rounded-full border border-matcha-900/15 bg-cream-100 px-4 py-2.5 font-body text-sm text-matcha-950 placeholder:text-ink-soft/60 focus:outline-2 focus:outline-offset-2 focus:outline-matcha-700"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded-full bg-matcha-950 px-5 py-2.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 hover:bg-matcha-900"
            >
              Notify me
            </button>
          </form>
        </footer>
      </aside>
    </>
  );
}

function EmptyCart() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <p className="font-body text-xs uppercase tracking-[0.32em] text-matcha-700">
        Empty
      </p>
      <p className="mt-4 max-w-xs font-display text-2xl leading-snug text-matcha-950">
        Nothing here yet.
      </p>
      <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-ink-soft">
        Browse the tins below and add what you&rsquo;re curious about. Checkout
        opens with the launch.
      </p>
    </div>
  );
}

function CartLines({ lines }: { lines: CartLine[] }) {
  return (
    <ul className="space-y-5">
      {lines.map((l) => (
        <li
          key={l.slug}
          className="flex items-start justify-between gap-4 border-b border-matcha-900/5 pb-5"
        >
          <div>
            <p className="font-display text-lg text-matcha-950">{l.name}</p>
            <p className="font-body text-xs text-ink-soft">
              Quantity {l.quantity}
            </p>
          </div>
          <p className="font-body text-sm text-matcha-950">
            {formatPrice(l.priceCents * l.quantity)}
          </p>
        </li>
      ))}
    </ul>
  );
}
