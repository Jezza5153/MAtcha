import Image from "next/image";
import Link from "next/link";
import { getProduct, formatPrice, packImageFor } from "@/lib/products";

export function MobileStarProduct() {
  const star = getProduct("ceremoniele-matcha");
  if (!star) return null;

  return (
    <section
      aria-label="Uitgelicht product"
      className="bg-cream-50 px-6 py-12"
    >
      <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
        Uitgelicht
      </p>
      <h2

        className="mt-3 font-display text-3xl leading-[1.08] tracking-tight text-matcha-950"
      >
        Begin met onze ceremoniële matcha.
      </h2>

      <article className="mt-8 overflow-hidden rounded-3xl border border-stone-soft/60 bg-cream-100">
        <div

          className="relative aspect-[4/5] w-full bg-cream-100"
        >
          <Image
            src={packImageFor(star.slug)}
            alt={`${star.name} — illustratie van het blik`}
            fill
            sizes="100vw"
            className="object-contain p-10"
          />
        </div>
        <div className="px-6 pt-6 pb-7">
          <div>
            <p className="font-display text-2xl leading-snug text-matcha-950">
              {star.name}
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
              {star.tagline}
            </p>
            <div className="mt-5">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl text-matcha-950">
                  {formatPrice(star.priceCents)}
                </span>
                {star.weightGrams && (
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
                    {star.weightGrams}g blik
                  </span>
                )}
              </div>
              <p className="mt-1 font-body text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft/75">
                Incl. 9% btw
              </p>
            </div>
          </div>
          <Link

            href={`/producten/${star.slug}`}
            className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-matcha-950 px-6 py-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/20"
          >
            Bekijk product
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="#producten"
            className="mt-3 block text-center font-body text-xs uppercase tracking-[0.22em] text-matcha-700 underline-offset-4 hover:underline"
          >
            Bekijk alle drie de blikken →
          </Link>
        </div>
      </article>
    </section>
  );
}
