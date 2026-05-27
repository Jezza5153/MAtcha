type QA = { q: string; a: string };

const items: QA[] = [
  {
    q: "Waar verzenden jullie vanuit?",
    a: "Vanuit Nederland naar de EU. Gratis verzending vanaf €60. Definitieve voorwaarden volgen bij het openen van de pre-orders.",
  },
  {
    q: "Hoe maak ik matcha thuis?",
    a: "Zeef 2 gram, schenk 60–70 ml water van 75–80°C, klop in een W-beweging met een chasen tot er een fijne schuimlaag ontstaat. Drink direct.",
  },
  {
    q: "Wat wordt vóór de launch nog vastgelegd?",
    a: "Definitieve regio en producent, oogstmoment, lotnummer per blik, lab-resultaten en de verzendvoorwaarden. Alleen wat we kunnen bewijzen.",
  },
];

export function MobileFAQTeaser() {
  return (
    <section
      aria-label="Veelgestelde vragen"
      className="bg-cream-50 px-6 py-12"
    >
      <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
        Veelgestelde vragen
      </p>
      <h2

        className="mt-3 font-display text-3xl leading-[1.1] tracking-tight text-matcha-950"
      >
        Wat mensen ons vaak vragen.
      </h2>

      <ul

        className="mt-8 divide-y divide-matcha-900/10 border-y border-matcha-900/10"
      >
        {items.map((it) => (
          <li key={it.q}>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base leading-snug text-matcha-950">
                <span>{it.q}</span>
                <span
                  aria-hidden
                  className="font-body text-2xl leading-none text-matcha-700 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 font-body text-sm leading-relaxed text-ink-soft">
                {it.a}
              </p>
            </details>
          </li>
        ))}
      </ul>

      <p className="mt-6 font-body text-xs uppercase tracking-[0.22em] text-matcha-700">
        Meer vragen? Bekijk per blik op de productpagina →
      </p>
    </section>
  );
}
