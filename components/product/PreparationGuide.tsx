import type { PreparationStep } from "@/lib/products";

export function PreparationGuide({
  steps,
  productName,
}: {
  steps: PreparationStep[];
  productName: string;
}) {
  if (steps.length === 0) return null;

  return (
    <section
      id="preparation"
      aria-label="Preparation"
      className="bg-matcha-950 px-6 py-16 text-cream-50 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-200">
          How to brew
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight tracking-tight md:text-4xl">
          {productName} — three steps.
        </h2>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.step}
              className="rounded-2xl border border-cream-50/10 bg-matcha-900/40 p-6"
            >
              <p className="font-display text-5xl text-cream-50/90">
                {s.step.toString().padStart(2, "0")}
              </p>
              <p className="mt-4 font-display text-xl text-cream-50">
                {s.title}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-cream-100/80">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
