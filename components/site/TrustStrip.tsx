export function TrustStrip() {
  return (
    <div
      className="relative z-10 bg-matcha-950 text-cream-100"
      aria-label="Brand trust signals"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-6 py-1.5 font-body text-[0.62rem] uppercase tracking-[0.24em] md:px-10">
        <span>Single-origin Japan</span>
        <span aria-hidden className="opacity-40">
          ·
        </span>
        <span>Italian-Japanese house</span>
        <span aria-hidden className="hidden opacity-40 sm:inline">
          ·
        </span>
        <span className="hidden sm:inline">Pre-orders opening soon</span>
      </div>
    </div>
  );
}
