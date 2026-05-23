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
      aria-label="Smaakprofiel"
      className="bg-cream-50 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        {tasteNotes.length > 0 && (
          <div>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              Smaakprofiel
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-matcha-950 md:text-4xl">
              Wat je in de kom kunt verwachten.
            </h2>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink-soft">
              Het merkprofiel voor deze kwaliteit. Per-lot smaaknotities worden
              bij elke oogst gepubliceerd.
            </p>

            <dl className="mt-8 space-y-4">
              {tasteNotes.map((t) => (
                <div
                  key={t.key}
                  className="flex flex-col gap-1 border-b border-matcha-900/10 pb-3 sm:grid sm:grid-cols-3 sm:gap-4"
                >
                  <dt className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-matcha-700 sm:col-span-1">
                    {t.key}
                  </dt>
                  <dd className="font-body text-sm text-matcha-950 sm:col-span-2">
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
              Geschikt voor
            </p>
            <h3 className="mt-3 font-display text-2xl leading-snug text-matcha-950 md:text-3xl">
              Zo drink je deze matcha het best.
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
