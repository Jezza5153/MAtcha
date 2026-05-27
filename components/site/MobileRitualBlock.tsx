type Step = { n: string; title: string; body: string };

const steps: Step[] = [
  {
    n: "01",
    title: "Zeven",
    body: "Zeef twee gram matcha in een schone kom. Geen klontjes.",
  },
  {
    n: "02",
    title: "Schenken",
    body: "Voeg 60–70 ml water toe van 75–80°C. Niet kokend.",
  },
  {
    n: "03",
    title: "Kloppen",
    body: "Klop in een rustige W-beweging tot een fijne schuimlaag ontstaat.",
  },
];

export function MobileRitualBlock() {
  return (
    <section
      id="ritueel"
      aria-label="Het ritueel"
      className="bg-matcha-950 px-6 py-16 text-cream-100"
    >
      <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-200">
        Het ritueel
      </p>
      <h2

        className="mt-3 max-w-sm font-display text-3xl leading-[1.1] tracking-tight text-cream-50"
      >
        Drie rustige stappen, één goede kom.
      </h2>
      <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream-100/80">
        Geen gepoch op snelheid. Een paar minuten aandacht volstaat — daarna
        drink je iets dat de moeite van het opklopen waard is.
      </p>

      <ol className="mt-10 space-y-6">
        {steps.map((s) => (
          <li
            key={s.n}

            className="flex gap-4 border-t border-cream-50/10 pt-6 first:border-t-0 first:pt-0"
          >
            <span
              aria-hidden
              className="font-display text-2xl leading-none text-matcha-300"
            >
              {s.n}
            </span>
            <div>
              <p className="font-display text-xl leading-tight text-cream-50">
                {s.title}
              </p>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-cream-100/85">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
