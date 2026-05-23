import Link from "next/link";

export function PolicyPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-cream-50">
      <section className="px-6 pt-40 pb-12 md:px-10 md:pt-48">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-matcha-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
          <p className="mt-4 max-w-2xl rounded-full bg-matcha-100 px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-matcha-800 inline-block">
            Voorlopige tekst · wordt vastgelegd vóór de launch
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-8 font-body text-base leading-relaxed text-ink md:text-lg">
          {children}
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-4">
          <p className="font-body text-sm text-ink-soft">
            Vragen over dit beleid?
          </p>
          <Link
            href="mailto:hello@freddomatcha.nl"
            className="inline-flex items-center gap-2 rounded-full border border-matcha-950/20 px-5 py-2.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950"
          >
            hello@freddomatcha.nl
          </Link>
        </div>
      </section>
    </main>
  );
}

export function PolicyHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl leading-snug text-matcha-950 md:text-3xl">
      {children}
    </h2>
  );
}
