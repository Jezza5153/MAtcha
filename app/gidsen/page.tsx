import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Matcha gidsen",
  description:
    "Heldere gidsen over matcha kopen, matcha latte maken, ceremoniële matcha en Japanse matchapoeder. Geschreven vanuit Freddo Matcha in Amersfoort.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://freddomatcha.nl/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gidsen",
      item: "https://freddomatcha.nl/gidsen",
    },
  ],
};

export default function GidsenIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="bg-cream-50">
        <section className="px-6 pt-40 pb-12 md:px-10 md:pt-48">
          <div className="mx-auto max-w-3xl">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              Matcha gidsen
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-tight text-matcha-950 md:text-7xl">
              Gidsen voor betere matcha thuis.
            </h1>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink-soft">
              Geen eindeloze wellnessclaims. Geen vage poeders. Alleen
              duidelijke gidsen over matcha, smaak, herkomst en bereiding,
              zodat je thuis betere keuzes maakt.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10 md:pb-32">
          <ul className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {guides.map((g) => (
              <li
                key={g.slug}
                className="group rounded-3xl border border-stone-soft/60 bg-cream-100 p-8 transition-shadow hover:shadow-lg"
              >
                <Link href={`/gidsen/${g.slug}`} className="flex h-full flex-col">
                  <p className="font-body text-[0.65rem] uppercase tracking-[0.28em] text-matcha-700">
                    Gids
                  </p>
                  <h2 className="mt-3 font-display text-2xl leading-snug text-matcha-950 md:text-3xl">
                    {g.title}
                  </h2>
                  <p className="mt-4 font-body text-sm leading-relaxed text-ink-soft">
                    {g.intro.slice(0, 180)}…
                  </p>
                  <span className="mt-auto pt-6 font-body text-xs uppercase tracking-[0.18em] text-matcha-700">
                    Lees de gids →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
