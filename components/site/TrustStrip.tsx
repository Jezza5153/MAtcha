export function TrustStrip() {
  return (
    <div
      className="relative z-10 bg-matcha-950 text-cream-100"
      aria-label="Vertrouwenssignalen van het merk"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-4 px-6 py-2 font-body text-[0.7rem] uppercase tracking-[0.18em] md:gap-x-5 md:px-10 md:tracking-[0.2em]">
        {/* Mobile: short, single-line, two signals */}
        <span className="sm:hidden">Single-origin · Japan</span>
        <span aria-hidden className="opacity-40 sm:hidden">·</span>
        <span className="sm:hidden">Gratis EU-verzending</span>

        {/* Desktop: full three signals */}
        <span className="hidden sm:inline">Single-origin Japanse matchapoeder</span>
        <span aria-hidden className="hidden opacity-40 sm:inline">·</span>
        <span className="hidden sm:inline">Gratis EU-verzending vanaf €60</span>
        <span aria-hidden className="hidden opacity-40 sm:inline">·</span>
        <span className="hidden sm:inline">Pre-order opent binnenkort</span>
      </div>
    </div>
  );
}
