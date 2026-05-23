import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-cream-50 px-6 pt-40 pb-24 md:px-10 md:pt-48">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
          Product niet gevonden
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-matcha-950 md:text-6xl">
          Deze matcha staat niet meer op de plank.
        </h1>
        <p className="mt-6 font-body text-base leading-relaxed text-ink-soft">
          Het product dat je zoekt bestaat niet, is verplaatst of komt later
          terug.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#producten"
            className="inline-flex items-center gap-2 rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50"
          >
            Terug naar de collectie
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-matcha-950/20 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950"
          >
            Naar de homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
