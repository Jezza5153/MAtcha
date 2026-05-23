"use client";

import Image from "next/image";
import type { Product } from "@/lib/products";
import { formatPrice, packImageFor } from "@/lib/products";
import { useCart } from "@/components/providers/CartProvider";

export function ProductHero({ product }: { product: Product }) {
  const cart = useCart();

  return (
    <section
      aria-label={product.name}
      className="bg-cream-50 px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-cream-100">
          <Image
            src={packImageFor(product.slug)}
            alt={`${product.name} — illustratie van het blik`}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-12"
          />
        </div>

        <div>
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Freddo Matcha
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-matcha-950 md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 font-body text-base text-ink-soft md:text-lg">
            {product.tagline}
          </p>

          <div className="mt-8 flex items-baseline gap-4">
            <span className="font-display text-3xl text-matcha-950">
              {formatPrice(product.priceCents)}
            </span>
            {product.weightGrams && (
              <span className="font-body text-sm text-ink-soft">
                Blik van {product.weightGrams}g
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={cart.open}
              className="inline-flex items-center gap-2 rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/20 transition-colors hover:bg-matcha-900"
            >
              Houd me op de hoogte
              <span aria-hidden>→</span>
            </button>
            <a
              href="#bereiding"
              className="inline-flex items-center gap-2 rounded-full border border-matcha-950/20 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950"
            >
              Hoe bereid je het
            </a>
          </div>

          <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-ink-soft">
            Pre-orders openen zodra de leverancier en het oogstlot zijn
            vastgelegd. Laat je e-mailadres achter en we sturen één bericht
            zodra je kunt bestellen.
          </p>
        </div>
      </div>
    </section>
  );
}
