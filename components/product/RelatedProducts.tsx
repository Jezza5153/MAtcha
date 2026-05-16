import Link from "next/link";
import Image from "next/image";
import { products, formatPrice } from "@/lib/products";
import type { ProductSlug } from "@/lib/products";

export function RelatedProducts({ currentSlug }: { currentSlug: ProductSlug }) {
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 2);
  if (related.length === 0) return null;

  return (
    <section
      aria-label="Also from Freddo"
      className="bg-cream-100 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
          Also from Freddo
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-matcha-950 md:text-4xl">
          Stay in the range.
        </h2>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {related.map((p) => (
            <li
              key={p.slug}
              className="group rounded-3xl border border-stone-soft/60 bg-cream-50"
            >
              <Link
                href={`/products/${p.slug}`}
                className="flex flex-col md:flex-row md:items-center"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-t-3xl bg-matcha-100 md:w-44 md:rounded-t-none md:rounded-l-3xl">
                  <Image
                    src="/images/matcha-pack.png"
                    alt={p.name}
                    fill
                    sizes="(min-width: 768px) 200px, 100vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:-translate-y-1"
                  />
                </div>
                <div className="flex-1 p-6">
                  <p className="font-display text-2xl text-matcha-950">
                    {p.name}
                  </p>
                  <p className="mt-2 font-body text-sm text-ink-soft">
                    {p.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg text-matcha-950">
                      {formatPrice(p.priceCents)}
                    </span>
                    <span className="font-body text-xs uppercase tracking-[0.18em] text-matcha-700">
                      Details →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
