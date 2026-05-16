import Image from "next/image";

export function MobileHero() {
  return (
    <section
      id="mobile-hero"
      className="relative isolate overflow-hidden px-6 pt-32 pb-20"
      aria-label="Freddo Matcha"
    >
      <p className="font-body text-[0.65rem] uppercase tracking-[0.32em] text-matcha-700">
        Single-origin · Japan
      </p>
      <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-tight text-matcha-950">
        Ceremonial-grade matcha,
        <br />
        <em className="not-italic text-matcha-800">served slowly.</em>
      </h1>
      <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-soft">
        A single-origin Japanese matcha powder, dressed in European restraint.
        Italian-Japanese house. Pre-orders opening soon.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#products"
          className="inline-flex items-center gap-2 rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 shadow-lg shadow-matcha-950/20"
        >
          Shop the tins
          <span aria-hidden>→</span>
        </a>
        <a
          href="#story"
          className="inline-flex items-center gap-2 rounded-full border border-matcha-950/20 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950"
        >
          Our story
        </a>
      </div>

      <div className="relative mt-12 aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream-100">
        <Image
          src="/brand/pack-ceremoniale.svg"
          alt="Freddo Ceremoniale tin — illustrated mockup"
          fill
          priority
          sizes="100vw"
          className="object-contain p-8"
        />
      </div>
    </section>
  );
}
