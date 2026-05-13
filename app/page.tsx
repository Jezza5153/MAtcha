import Image from "next/image";
import { CinematicScroll } from "@/components/scroll/CinematicScroll";
import { BuyClose } from "@/components/scroll/BuyClose";
import { products, formatPrice } from "@/lib/products";

export default function Home() {
  return (
    <main className="freddo-ambient">
      <CinematicScroll />

      <section
        id="products"
        className="bg-cream-100 px-6 py-24 sm:py-32 md:px-10"
        aria-label="Shop"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            06 · The shop
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.1] tracking-tight text-matcha-950 sm:text-5xl">
            The first FreddoMatcha blends.
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <li
                key={p.slug}
                className="flex flex-col rounded-2xl border border-stone-soft/60 bg-cream-50 p-6 transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-matcha-100">
                  <Image
                    src="/images/matcha-pack.png"
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-6"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl text-matcha-950">
                  {p.name}
                </h3>
                <p className="mt-1 font-body text-sm text-ink-soft">
                  {p.tagline}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft/85">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="font-display text-xl text-ink">
                    {formatPrice(p.priceCents)}
                  </span>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="cursor-not-allowed rounded-full border border-matcha-900/20 px-4 py-2 font-body text-xs uppercase tracking-[0.18em] text-matcha-900/60"
                    title="Stripe checkout lands in slice 2"
                  >
                    Coming soon
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="trust"
        className="bg-cream-50 px-6 py-24 sm:py-32 md:px-10"
        aria-label="Trust"
      >
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3">
          {[
            {
              k: "Origin",
              v: "Single-origin Uji, Japan. Named-farm ceremonial sourcing.",
            },
            {
              k: "Lab tested",
              v: "Third-party residue and heavy-metal testing every lot.",
            },
            {
              k: "Shipping",
              v: "Private client delivery concierge launches with checkout.",
            },
          ].map((t) => (
            <div key={t.k}>
              <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
                {t.k}
              </p>
              <p className="mt-3 font-display text-xl leading-snug text-matcha-950 sm:text-2xl">
                {t.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-matcha-950 px-6 py-24 text-cream-50 sm:py-32 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-300">
            07 · Visual concept pack
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
            Freshly generated art direction for a high-end launch.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["/images/freddo-neon-garden.svg", "Neon Garden Hero"],
              ["/images/freddo-origin-grid.svg", "Origin Grid Storyboard"],
              ["/images/freddo-lab-disk.svg", "Ceremonial Lab Emblem"],
            ].map(([src, label]) => (
              <figure key={src} className="freddo-card overflow-hidden rounded-2xl border border-matcha-300/30 bg-matcha-900/35 p-3">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-1 pt-3 font-body text-sm text-cream-100/90">{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <BuyClose />
    </main>
  );
}
