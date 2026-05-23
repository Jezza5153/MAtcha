import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ons verhaal",
  description:
    "Freddo Matcha — een Italiaans-Japans huis met single-origin Japanse matcha. Het verhaal achter het merk en waarom we keuzes maken, geen claims.",
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
      name: "Ons verhaal",
      item: "https://freddomatcha.nl/verhaal",
    },
  ],
};

export default function StoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main id="main" className="bg-cream-50">
      <section className="px-6 pt-40 pb-20 md:px-10 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Ons verhaal
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-tight text-matcha-950 md:text-7xl">
            Italiaanse rust.
            <br />
            <em className="not-italic text-matcha-800">Japanse herkomst.</em>
          </h1>
          <p className="mt-10 max-w-2xl font-body text-lg leading-relaxed text-ink-soft md:text-xl">
            Freddo Matcha is wat er ontstaat als een Europees huis &mdash; met
            geduld voor een langzaam product en discipline voor terughoudend
            ontwerp &mdash; single-origin Japanse matcha selecteert en het blad
            het woord laat doen.
          </p>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              01 · Herkomst
            </p>
            <p className="mt-3 font-display text-3xl leading-snug text-matcha-950">
              Waar het blad vandaan komt.
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-body text-base leading-relaxed text-ink-soft md:text-lg">
              Het blad dat we selecteren wordt gekweekt in Japan. De specifieke
              boerderij en regio komen op elk blik te staan zodra onze
              leveranciersrelatie is vastgelegd. Tot die tijd noemen we geen
              plek die we niet kunnen bewijzen, ook al is het de plek die we
              willen.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              Premium valt om op het moment dat een koper merkt dat het merk zit
              te raden. Dus wachten we, en publiceren we de papieren.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              02 · Langzaam
            </p>
            <p className="mt-3 font-display text-3xl leading-snug text-matcha-950">
              Hoe het poeder wordt gemaakt.
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-body text-base leading-relaxed text-ink-soft md:text-lg">
              De route van geoogst blad naar afgewerkt poeder kost tijd. De thee
              wordt geschaduwd, geplukt, gestoomd, gedroogd, gesorteerd en
              gemalen. Goed en langzaam gedaan ontstaat er een poeder met weinig
              bitterheid en zachte umami, dat zijn karakter houdt of je het nu
              puur opklopt of over ijs schenkt.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              Of de onze specifiek tussen steen wordt gemalen verschijnt op het
              blik en op de productpagina zodra de leverancier de methode
              bevestigt.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-matcha-950 px-6 py-20 text-cream-50 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-300">
              03 · Ritueel
            </p>
            <p className="mt-3 font-display text-3xl leading-snug">
              Hoe je het drinkt.
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-body text-base leading-relaxed text-cream-100/80 md:text-lg">
              Het merk is geen religie. Drink het puur opgeklopt bij zonsopgang,
              iced rond het middaguur, geschonken in havermelk na de lunch. De
              Italiaanse helft van het merk is dat je geen kant hoeft te kiezen.
              De Japanse helft is dat welke kant je ook kiest, het blad het werk
              doet.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-cream-100/80 md:text-lg">
              Drie producten bij de launch:{" "}
              <em className="not-italic text-cream-50">Freddo Ceremoniale</em>{" "}
              voor het ritueel,{" "}
              <em className="not-italic text-cream-50">Freddo Quotidiano</em>{" "}
              voor de gewoonte,{" "}
              <em className="not-italic text-cream-50">Il Rito Starter Kit</em>{" "}
              voor de eerste tien kommen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Wat we niet beweren
          </p>
          <p className="mt-4 font-display text-3xl leading-snug text-matcha-950 md:text-4xl">
            Rust, geen ruis.
          </p>
          <ul className="mt-8 space-y-3 font-body text-base leading-relaxed text-ink-soft md:text-lg">
            <li>Geen Japanse termen als decoratie.</li>
            <li>Geen Italiaanse krullen als decoratie.</li>
            <li>Geen &ldquo;oeroud ritueel&rdquo;-praat. Het product is het ritueel.</li>
            <li>
              Geen regio, cultivar, oogstjaar of labclaim zonder de papieren.
            </li>
            <li>
              Geen vijfsterrenreviews tot we dertig echte klanten hebben.
            </li>
            <li>
              Geen cafe&iuml;ne- of gezondheidsclaims. Het blad is het blad.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-8">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Klaar?
          </p>
          <p className="font-display text-4xl leading-tight tracking-tight text-matcha-950 md:text-5xl">
            Bekijk de selectie.
          </p>
          <Link
            href="/#producten"
            className="inline-flex items-center gap-2 rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 transition-colors hover:bg-matcha-900"
          >
            De drie blikken
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}
