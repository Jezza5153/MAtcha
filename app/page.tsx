import Image from "next/image";
import Link from "next/link";
import { MobileHero } from "@/components/site/MobileHero";
import { MobileStarProduct } from "@/components/site/MobileStarProduct";
import { MobileStoryCards } from "@/components/site/MobileStoryCards";
import { MobileTrustBlock } from "@/components/site/MobileTrustBlock";
import { MobileRitualBlock } from "@/components/site/MobileRitualBlock";
import { MobilePreLaunchNote } from "@/components/site/MobilePreLaunchNote";
import { MobileFAQTeaser } from "@/components/site/MobileFAQTeaser";
import { MobileEmailSection } from "@/components/site/MobileEmailSection";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

/**
 * Home — buy-first single column on mobile, 2-col editorial on lg+.
 *
 * No scroll cinematic. No pinned scenes. No GSAP. The cinematic / pinned
 * components (CinematicScroll, HeroPinned, OriginPinned, GrindingScene,
 * WhiskingScene, BuyClose, DesktopCinematic, MobileCinematic) are no longer
 * mounted on this page — they stay on disk in components/scroll/ for now
 * (deletable in a follow-up once we're sure the new direction sticks).
 */
export default function Home() {
  return (
    <main id="main" className="freddo-ambient">
      {/* Universal hero — same component renders on mobile + desktop */}
      <MobileHero />

      {/* Star product (lead SKU). Visible on every viewport above the product grid. */}
      <MobileStarProduct />

      {/* Product grid — all three SKUs, with a BUY CTA on each card */}
      <section
        id="producten"
        aria-label="Shop"
        className="bg-cream-100 px-6 py-16 sm:py-20 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            De eerste selectie
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-[1.1] tracking-tight text-matcha-950 sm:text-4xl md:text-5xl">
            Kies je dagelijkse ritueel.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
            Of je matcha puur opklopt, als latte drinkt of rustig wilt beginnen
            met een complete set: Freddo Matcha houdt de keuze overzichtelijk.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust + ritual + note + FAQ stay as single-column content on every viewport.
          Each is already responsive-friendly; the IA is the same on mobile + desktop. */}
      <MobileStoryCards />
      <MobileTrustBlock />
      <MobileRitualBlock />
      <MobilePreLaunchNote />
      <MobileFAQTeaser />
      <MobileEmailSection />
    </main>
  );
}
