import { EmailCapture } from "./EmailCapture";

export function MobileEmailSection() {
  return (
    <section
      aria-label="Blijf op de hoogte"
      className="bg-matcha-950 px-6 py-16 text-cream-100"
    >
      <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-200">
        Pre-launch
      </p>
      <h2

        className="mt-3 max-w-sm font-display text-3xl leading-[1.08] tracking-tight text-cream-50"
      >
        Wees de eerste die kan bestellen.
      </h2>
      <p

        className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream-100/80"
      >
        Eén bericht, geen spam. We sturen alleen de launchaankondiging zodra
        sourcing en lot zijn vastgelegd.
      </p>
      <div className="mt-7 max-w-md">
        <EmailCapture source="mobile-home" variant="dark" />
      </div>
    </section>
  );
}
