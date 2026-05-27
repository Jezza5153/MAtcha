"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";

/**
 * Universal home hero. Mobile-first single column; lg+ becomes a 2-column
 * editorial split with the pack image on the right. Primary CTA opens the
 * cart drawer directly (strongest pre-launch buy signal — the drawer carries
 * the email-capture and the "pre-orders opening soon" confidence copy).
 *
 * (Filename kept as MobileHero.tsx during the strip-the-cinematic pass; rename
 * to Hero.tsx in a follow-up.)
 */
export function MobileHero() {
  const cart = useCart();

  return (
    <section
      id="mobile-hero"
      className="relative isolate overflow-hidden px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-24 lg:px-16"
      aria-label="Freddo Matcha"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Single-origin Japanse matchapoeder
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-tight text-matcha-950 sm:text-6xl lg:text-7xl">
            Matcha met Japanse herkomst
            <br />
            <em className="not-italic text-matcha-800">en Italiaanse rust.</em>
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-soft lg:text-lg">
            Freddo Matcha is gemaakt voor mensen die thuis betere matcha willen
            drinken: helder van smaak, zacht in de afdronk en zonder overdreven
            claims.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={cart.open}
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-matcha-950 px-7 py-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/20 transition-colors hover:bg-matcha-900"
            >
              Bestel Freddo Matcha
              <span aria-hidden>→</span>
            </button>
            <Link
              href="/verhaal"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-matcha-950/20 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950 transition-colors hover:bg-matcha-950/5"
            >
              Lees het verhaal
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream-100 lg:aspect-[3/4]">
          <Image
            src="/brand/pack-ceremoniale.svg"
            alt="Freddo Ceremoniale blik — illustratie"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-8 lg:p-12"
          />
        </div>
      </div>
    </section>
  );
}
