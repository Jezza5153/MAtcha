type Stat = { eyebrow: string; value: string; note: string };

const stats: Stat[] = [
  {
    eyebrow: "Herkomst",
    value: "Japan",
    note: "Single-origin sourcing",
  },
  {
    eyebrow: "Oogst",
    value: "Wordt vastgelegd",
    note: "Per batch op het blik",
  },
  {
    eyebrow: "Lab-check",
    value: "Vóór launch",
    note: "Eerlijk over wat we kunnen bewijzen",
  },
  {
    eyebrow: "Verzending",
    value: "Gratis vanaf €60",
    note: "Binnen Nederland en EU",
  },
];

export function MobileTrustBlock() {
  return (
    <section
      aria-label="Waar Freddo Matcha voor staat"
      className="bg-cream-100 px-6 py-12"
    >
      <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
        Wat we beloven
      </p>
      <h2 className="mt-3 max-w-sm font-display text-3xl leading-[1.1] tracking-tight text-matcha-950">
        Vier dingen die je van ons mag verwachten.
      </h2>

      <ul className="mt-8 grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <li
            key={s.eyebrow}
            className="rounded-2xl border border-matcha-900/10 bg-cream-50 p-4"
          >
            <p className="font-body text-[0.7rem] uppercase tracking-[0.22em] text-matcha-700">
              {s.eyebrow}
            </p>
            <p className="mt-2 font-display text-lg leading-tight text-matcha-950">
              {s.value}
            </p>
            <p className="mt-1.5 font-body text-[0.78rem] leading-snug text-ink-soft">
              {s.note}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
