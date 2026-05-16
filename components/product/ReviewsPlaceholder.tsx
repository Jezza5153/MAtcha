export function ReviewsPlaceholder() {
  return (
    <section
      aria-label="Reviews"
      className="bg-cream-50 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
          Reviews
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-matcha-950 md:text-4xl">
          Coming with the first batch.
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
          We&rsquo;ll publish honest reviews from the first thirty bowls
          shipped. No incentivized scores, no fake five stars — when reviews
          land here, they will be real.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              aria-hidden
              className="rounded-2xl border border-stone-soft/60 bg-cream-100 p-6 opacity-60"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="h-3 w-3 rounded-full border border-matcha-900/15 bg-cream-50"
                  />
                ))}
              </div>
              <div className="mt-4 h-3 w-3/4 rounded bg-matcha-900/10" />
              <div className="mt-2 h-3 w-1/2 rounded bg-matcha-900/10" />
              <div className="mt-6 h-2.5 w-24 rounded bg-matcha-900/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
