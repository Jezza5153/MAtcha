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
      className="bg-cream-50 px-6 pb-16 md:px-10 md:pt-40 md:pb-24"
      style={{ paddingTop: "calc(env(safe-area-inset-top) + 7rem)" }}
      data-product-hero
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-16">
        {/* Text block — first in DOM on mobile (above image), second column on desktop */}
        <div className="order-1 md:order-2">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Freddo Matcha
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-matcha-950 md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 font-body text-base text-ink-soft md:text-lg">
            {product.tagline}
          </p>

          <div className="mt-6 md:mt-8">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-3xl text-matcha-950">
                {formatPrice(product.priceCents)}
              </span>
              {product.weightGrams && (
                <span className="font-body text-sm text-ink-soft">
                  Blik van {product.weightGrams}g
                </span>
              )}
            </div>
            <p className="mt-1.5 font-body text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/75">
              Incl. 9% btw
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 md:mt-8 md:flex-row md:flex-wrap md:items-center">
            <button
              type="button"
              onClick={cart.open}
              data-product-hero-cta
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-matcha-950 px-6 py-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/20 transition-colors hover:bg-matcha-900 md:w-auto md:py-3 md:text-xs"
            >
              Houd me op de hoogte
              <span aria-hidden>→</span>
            </button>
            <a
              href="#bereiding"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-matcha-950/20 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950 md:w-auto"
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

        {/* Image — second in DOM on mobile (below CTA), first column on desktop */}
        <div className="order-2 relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream-100 md:order-1 md:aspect-square">
          <Image
            src={packImageFor(product.slug)}
            alt={`${product.name} — illustratie van het blik`}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-10 md:p-12"
          />
        </div>
      </div>
    </section>
  );
}
