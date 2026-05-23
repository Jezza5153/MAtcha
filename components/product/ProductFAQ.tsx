import type { FaqItem } from "@/lib/products";

export function ProductFAQ({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <section
      aria-label="Veelgestelde vragen"
      className="bg-cream-50 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
          Veelgestelde vragen
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-matcha-950 md:text-4xl">
          Vaak gevraagd.
        </h2>

        <ul className="mt-10 divide-y divide-matcha-900/10 border-y border-matcha-900/10">
          {items.map((item) => (
            <li key={item.q}>
              <details className="group">
                <summary className="flex cursor-pointer items-start justify-between gap-4 py-5 font-display text-lg leading-snug text-matcha-950 list-none">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 font-body text-2xl text-matcha-700 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-10 font-body text-sm leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
