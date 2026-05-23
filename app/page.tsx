import Image from "next/image";
import Link from "next/link";
import { BuyClose } from "@/components/scroll/BuyClose";
import { DesktopCinematic } from "@/components/scroll/DesktopCinematic";
import { MobileCinematic } from "@/components/scroll/MobileCinematic";
import { SkipStoryLink } from "@/components/site/SkipStoryLink";
import { MobileHero } from "@/components/site/MobileHero";
import { MobileStarProduct } from "@/components/site/MobileStarProduct";
import { MobileStoryCards } from "@/components/site/MobileStoryCards";
import { MobileTrustBlock } from "@/components/site/MobileTrustBlock";
import { MobileRitualBlock } from "@/components/site/MobileRitualBlock";
import { MobilePreLaunchNote } from "@/components/site/MobilePreLaunchNote";
import { MobileFAQTeaser } from "@/components/site/MobileFAQTeaser";
import { MobileEmailSection } from "@/components/site/MobileEmailSection";
import { products, formatPrice, packImageFor } from "@/lib/products";

export default function Home() {
  return (
    <main id="main" className="freddo-ambient">
      {/* Desktop: pinned cinematic hero (dynamic + viewport-gated; not loaded on mobile) */}
      <div className="hidden md:block">
        <SkipStoryLink />
        <DesktopCinematic />
      </div>

      {/* Mobile-only hero */}
      <div className="md:hidden">
        <MobileHero />
      </div>

      {/* Products anchor — exists at every viewport so #producten anchor + IntersectionObserver work.
          Mobile shows the star product; desktop shows the 3-up grid. */}
      <section id="producten" aria-label="Shop" className="bg-cream-100">
        <div className="md:hidden">
          <MobileStarProduct />
        </div>
        <div className="hidden px-6 py-24 sm:py-32 md:block md:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              De eerste selectie
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.1] tracking-tight text-matcha-950 sm:text-5xl">
              Kies je dagelijkse ritueel.
            </h2>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
              Of je matcha puur opklopt, als latte drinkt of rustig wilt beginnen
              met een complete set: Freddo Matcha houdt de keuze overzichtelijk.
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <li
                  key={p.slug}
                  className="group flex flex-col rounded-2xl border border-stone-soft/60 bg-cream-50 p-6 transition-shadow hover:shadow-lg"
                >
                  <Link
                    href={`/producten/${p.slug}`}
                    className="flex flex-1 flex-col"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-cream-50">
                      <Image
                        src={packImageFor(p.slug)}
                        alt={`${p.name} — illustratie van het blik`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-8 transition-transform duration-500 group-hover:-translate-y-1"
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
                    <div className="mt-auto flex items-baseline justify-between pt-6">
                      <span className="font-display text-xl text-ink">
                        {formatPrice(p.priceCents)}
                      </span>
                    </div>
                    <span
                      aria-hidden
                      className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-matcha-950 px-5 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 transition-colors group-hover:bg-matcha-900"
                    >
                      Bekijk product
                      <span aria-hidden>→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mobile: rest of the locked selling journey (after the star product) */}
      <div className="md:hidden">
        <MobileStoryCards />
        <MobileTrustBlock />
        <MobileRitualBlock />
        <MobilePreLaunchNote />
        <MobileFAQTeaser />
        <MobileEmailSection />
      </div>

      {/* Desktop-only herkomst section (mobile equivalents live in MobileTrustBlock + MobilePreLaunchNote) */}
      <section
        id="herkomst"
        className="hidden bg-cream-50 px-6 py-24 sm:py-32 md:block md:px-10"
        aria-label="Herkomst"
      >
        <div className="mx-auto max-w-5xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Herkomst
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-matcha-950 sm:text-5xl">
            Niet elke groene poeder verdient de naam matcha.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
            Goede matcha begint bij herkomst, verwerking en versheid. Daarom
            bouwen we Freddo Matcha rond duidelijke keuzes: Japanse sourcing,
            kleine batches en producten die eerlijk uitleggen waar ze voor
            bedoeld zijn.
          </p>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-matcha-700">
            Ontstaan in Amersfoort, gemaakt voor een rustiger matcha-ritueel
            thuis.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-matcha-300/40 bg-cream-100 p-8">
              <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
                Wat we al weten
              </p>
              <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-matcha-950">
                <li>Japanse matchapoeder</li>
                <li>Geselecteerd voor thuisgebruik</li>
                <li>Ontworpen voor puur opkloppen en latte</li>
                <li>Eerste batch in beperkte oplage</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-matcha-900/15 bg-matcha-950 p-8 text-cream-50">
              <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-200">
                Wordt vastgelegd vóór de launch
              </p>
              <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-cream-100/95">
                <li>Definitieve regio en producent</li>
                <li>Batchdatum en maalmoment</li>
                <li>Volledige smaaknotities</li>
                <li>Verzending en retourvoorwaarden</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop-only BuyClose (mobile equivalent is MobileEmailSection above) */}
      <div className="hidden md:block">
        <BuyClose />
      </div>

      {/* Mobile cinematic — short scroll-triggered reveals using the locked
          motion vocabulary. No pinning, no Lenis. Gated to (max-width: 767px)
          via gsap.matchMedia. Mounts once on the home page. */}
      <MobileCinematic />
    </main>
  );
}
