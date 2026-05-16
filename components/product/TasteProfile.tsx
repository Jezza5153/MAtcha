import type { TasteNote, UsePreparation } from "@/lib/products";
import { formatPreparationLabel } from "@/lib/products";

export function TasteProfile({
  tasteNotes,
  bestFor,
}: {
  tasteNotes: TasteNote[];
  bestFor: UsePreparation[];
}) {
  if (tasteNotes.length === 0 && bestFor.length === 0) return null;

  return (
    <section
      aria-label="Taste profile"
      className="bg-cream-50 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        {tasteNotes.length > 0 && (
          <div>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              Taste profile
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-matcha-950 md:text-4xl">
              What to expect in the bowl.
            </h2>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink-soft">
              Brand-design target for this grade. Per-lot tasting notes are
              published with each harvest.
            </p>

            <dl className="mt-8 space-y-4">
              {tasteNotes.map((t) => (
                <div
                  key={t.key}
                  className="grid grid-cols-3 gap-4 border-b border-matcha-900/10 pb-3"
                >
                  <dt className="col-span-1 font-body text-[0.7rem] uppercase tracking-[0.22em] text-matcha-700">
                    {t.key}
                  </dt>
                  <dd className="col-span-2 font-body text-sm text-matcha-950">
                    {t.note}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {bestFor.length > 0 && (
          <div>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              Best for
            </p>
            <h3 className="mt-3 font-display text-2xl leading-snug text-matcha-950 md:text-3xl">
              Designed to be drunk this way.
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {bestFor.map((use) => (
                <li
                  key={use}
                  className="rounded-full border border-matcha-900/15 bg-cream-100 px-4 py-2 font-body text-xs uppercase tracking-[0.18em] text-matcha-950"
                >
                  {formatPreparationLabel(use)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
