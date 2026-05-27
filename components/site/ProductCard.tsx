"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice, packImageFor } from "@/lib/products";
import { useCart } from "@/components/providers/CartProvider";

/**
 * Buy-first product card. Primary CTA opens the cart drawer directly; the
 * "Bekijk product →" link is the secondary affordance for users who want
 * details (taste, prep, provenance) before buying.
 */
export function ProductCard({ product }: { product: Product }) {
  const cart = useCart();

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-stone-soft/60 bg-cream-50 p-5 transition-shadow hover:shadow-lg">
      <Link
        href={`/producten/${product.slug}`}
        className="flex flex-1 flex-col"
        aria-label={`Bekijk ${product.name}`}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-cream-100">
          <Image
            src={packImageFor(product.slug)}
            alt={`${product.name} — illustratie van het blik`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-8 transition-transform duration-500 group-hover:-translate-y-1"
          />
        </div>
        <h3 className="mt-5 font-display text-xl text-matcha-950 sm:text-2xl">
          {product.name}
        </h3>
        <p className="mt-1.5 font-body text-sm leading-snug text-ink-soft">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-baseline gap-3">
          <span className="font-display text-xl text-ink">
            {formatPrice(product.priceCents)}
          </span>
          {product.weightGrams && (
            <span className="font-body text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
              {product.weightGrams}g blik
            </span>
          )}
        </div>
      </Link>

      <button
        type="button"
        onClick={cart.open}
        aria-label={`Bestel ${product.name}`}
        className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-matcha-950 px-5 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 shadow-md shadow-matcha-950/15 transition-colors hover:bg-matcha-900"
      >
        Bestel
        <span aria-hidden>→</span>
      </button>
      <Link
        href={`/producten/${product.slug}`}
        className="mt-2 inline-flex min-h-[36px] items-center justify-center font-body text-[0.7rem] uppercase tracking-[0.22em] text-matcha-700 underline-offset-4 hover:underline"
      >
        Bekijk product →
      </Link>
    </article>
  );
}
