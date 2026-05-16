import Image from "next/image";
import { CinematicScroll } from "@/components/scroll/CinematicScroll";
import { BuyClose } from "@/components/scroll/BuyClose";
import { SkipStoryLink } from "@/components/site/SkipStoryLink";
import { MobileHero } from "@/components/site/MobileHero";
import { MobileStoryCards } from "@/components/site/MobileStoryCards";
import { products, formatPrice } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="freddo-ambient">
      {/* Desktop: pinned cinematic hero */}
      <div className="hidden md:block">
        <SkipStoryLink />
        <CinematicScroll />
      </div>

      {/* Mobile: editorial flow — different IA, same brand DNA */}
      <div className="md:hidden">
        <MobileHero />
        <MobileStoryCards />
      </div>

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
            The first Freddo Matcha tins.
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <li
                key={p.slug}
                className="group flex flex-col rounded-2xl border border-stone-soft/60 bg-cream-50 p-6 transition-shadow hover:shadow-lg"
              >
                <Link
                  href={`/products/${p.slug}`}
                  className="flex flex-1 flex-col"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-matcha-100">
                    <Image
                      src="/images/matcha-pack.png"
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-6 transition-transform duration-500 group-hover:-translate-y-1"
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
                    <span className="font-body text-xs uppercase tracking-[0.18em] text-matcha-700">
                      Details →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="sourcing"
        className="bg-cream-50 px-6 py-24 sm:py-32 md:px-10"
        aria-label="Sourcing"
      >
        <div className="mx-auto max-w-5xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Sourcing
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-matcha-950 sm:text-5xl">
            Single-origin Japanese matcha. Honest about what we can prove today.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
            We&rsquo;re a new brand. The supplier relationship is being built.
            Until it&rsquo;s locked, we won&rsquo;t claim what we can&rsquo;t
            verify.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-matcha-300/40 bg-cream-100 p-8">
              <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
                Known now
              </p>
              <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-matcha-950">
                <li>Japanese matcha powder</li>
                <li>Single-origin target</li>
                <li>Premium sourcing in progress</li>
                <li>Packed in the European Union</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-matcha-900/15 bg-matcha-950 p-8 text-cream-50">
              <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-200">
                Locked before launch
              </p>
              <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-cream-100/95">
                <li>Supplier name</li>
                <li>Origin region &amp; farm</li>
                <li>Cultivar</li>
                <li>Harvest season &amp; year</li>
                <li>Lab testing &amp; certifications</li>
                <li>Lot number on every tin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BuyClose />
    </main>
  );
}
