export function MobilePreLaunchNote() {
  return (
    <section
      aria-label="Notitie vóór de launch"
      className="bg-cream-50 px-6 py-12"
    >
      <div
        data-mobile-reveal="note"
        className="rounded-3xl border border-matcha-900/10 bg-cream-100 p-7"
      >
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
          Notitie vóór de launch
        </p>
        <p className="mt-4 font-display text-xl leading-snug text-matcha-950">
          We bouwen Freddo Matcha rustig en in het openbaar.
        </p>
        <p className="mt-4 font-body text-sm leading-relaxed text-ink-soft">
          Sourcing, lab-checks en verpakking worden vastgelegd vóórdat we
          orders openen. Geen verzonnen awards. Geen overdreven matcha-claims.
          Alleen een kleine, single-origin matchawinkel die in het openbaar
          wordt opgebouwd.
        </p>
        <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
          Wat we vastleggen vóór de launch: definitieve regio en producent,
          oogst en lotnummer, lab-resultaten en verzendvoorwaarden.
        </p>
      </div>
    </section>
  );
}
