"use client";

import { useEffect } from "react";
import { useCart, type CartLine } from "@/components/providers/CartProvider";
import { formatPrice } from "@/lib/products";
import { EmailCapture } from "./EmailCapture";

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

  const subtotalCents = cart.lines.reduce(
    (sum, l) => sum + l.priceCents * l.quantity,
    0,
  );

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
        aria-label="Winkelmand"
        aria-hidden={!cart.isOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream-50 shadow-2xl transition-transform duration-500 ease-out ${cart.isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header
          className="flex items-center justify-between border-b border-matcha-900/10 px-6 py-5"
          style={{ paddingTop: "calc(env(safe-area-inset-top) + 1.25rem)" }}
        >
          <h2 className="font-display text-2xl text-matcha-950">Winkelmand</h2>
          <button
            type="button"
            onClick={cart.close}
            aria-label="Sluit winkelmand"
            className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft hover:text-matcha-950"
          >
            Sluiten
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.lines.length === 0 ? (
            <EmptyCart onClose={cart.close} />
          ) : (
            <CartLines lines={cart.lines} />
          )}
        </div>

        {cart.lines.length > 0 && (
          <div className="border-t border-matcha-900/10 px-6 py-4">
            <div className="flex items-baseline justify-between font-body text-sm">
              <span className="uppercase tracking-[0.2em] text-ink-soft">
                Subtotaal
              </span>
              <span className="font-display text-lg text-matcha-950">
                {formatPrice(subtotalCents)}
              </span>
            </div>
            <button
              type="button"
              onClick={cart.close}
              className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-matcha-700 hover:text-matcha-950"
            >
              Verder winkelen
            </button>
          </div>
        )}

        <footer
          className="border-t border-matcha-900/10 px-6 py-6"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1.5rem)" }}
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
            Afrekenen
          </p>
          <p className="mt-2 mb-4 font-body text-sm leading-relaxed text-matcha-950">
            Afrekenen opent zodra leverancier en lot zijn vastgelegd. Pre-orders
            komen binnenkort. Laat hieronder je e-mail achter om als eerste op
            de hoogte te zijn.
          </p>
          <EmailCapture source="mini-cart" variant="light" />
        </footer>
      </aside>
    </>
  );
}

function EmptyCart({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <p className="font-body text-xs uppercase tracking-[0.32em] text-matcha-700">
        Leeg
      </p>
      <p className="mt-4 max-w-xs font-display text-2xl leading-snug text-matcha-950">
        Je winkelmand is nog leeg.
      </p>
      <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-ink-soft">
        Kies een blik of starter kit om je ritueel te beginnen.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-matcha-950 px-5 py-2.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 hover:bg-matcha-900"
      >
        Shop de collectie
        <span aria-hidden>→</span>
      </button>
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
              Aantal {l.quantity}
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
