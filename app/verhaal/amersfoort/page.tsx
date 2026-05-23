import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vanuit Amersfoort naar betere matcha thuis",
  description:
    "Het verhaal achter Freddo Matcha: een premium matcha-merk uit Amersfoort, gebouwd rond Japanse herkomst, Italiaanse rust en betere matcha voor thuis.",
};

const pageUrl = "https://freddomatcha.nl/verhaal/amersfoort";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}#aboutpage`,
      url: pageUrl,
      name: "Vanuit Amersfoort naar betere matcha thuis",
      inLanguage: "nl-NL",
      about: { "@id": "https://freddomatcha.nl#organization" },
    },
    {
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Vanuit Amersfoort",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function AmersfoortPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-cream-50">
        <section className="px-6 pt-40 pb-20 md:px-10 md:pt-48 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              Ontstaan in Amersfoort
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-tight text-matcha-950 md:text-7xl">
              Vanuit Amersfoort naar betere matcha thuis.
            </h1>
          </div>
        </section>

        <Section>
          <p>
            Freddo Matcha begon niet als groot merk of snelle trend. Het begon
            met een simpele frustratie: waarom is het in Nederland zo moeilijk
            om matcha te vinden die duidelijk, mooi en eerlijk voelt?
          </p>
          <p>
            Te vaak is matcha óf vaag wellness-poeder, óf een product met veel
            beloftes en weinig uitleg. Freddo Matcha is ontstaan in Amersfoort
            vanuit het idee dat dat rustiger kan. Beter gekozen. Beter
            uitgelegd. Mooier gemaakt.
          </p>
        </Section>

        <Section heading="Geen hype, maar een ritueel dat klopt.">
          <p>
            Matcha hoeft niet ingewikkeld te zijn. Maar het moet wel kloppen. De
            kleur, de geur, de maling, de herkomst en de manier waarop je het
            maakt bepalen samen of je een zachte kom matcha krijgt of een
            bittere groene teleurstelling.
          </p>
          <p>
            Daarom bouwen we Freddo Matcha niet rond claims, maar rond keuzes.
            Welke matcha is geschikt om puur te drinken? Welke werkt beter in
            een latte? Welke tools heb je echt nodig, en welke maken het alleen
            maar drukker?
          </p>
          <p>
            Het doel is niet om van iedereen een theemeester te maken. Het doel
            is om thuis een beter ritueel mogelijk te maken.
          </p>
        </Section>

        <Section heading="Japanse herkomst, Italiaanse rust." dark>
          <p>
            De matcha zelf begint bij Japan. Niet omdat dat mooi klinkt, maar
            omdat echte matcha daar zijn oorsprong, techniek en standaard heeft.
            Herkomst is geen decoratie. Het bepaalt de smaak.
          </p>
          <p>
            De vormgeving en het gevoel van Freddo Matcha komen uit een andere
            hoek: Italiaanse rust. Minder schreeuwen, meer balans. Geen
            overvolle verpakkingen, geen overdreven taal, geen product dat
            zichzelf groter maakt dan het is.
          </p>
          <p>
            Dat spanningsveld maakt Freddo Matcha: Japanse sourcing, Italiaanse
            soberheid, Nederlandse duidelijkheid.
          </p>
        </Section>

        <Section heading="Waarom Amersfoort?">
          <p>
            Amersfoort is geen marketingtruc in dit verhaal. Het is gewoon waar
            het begon. Vanuit hier bouwen we aan een Nederlands matcha-merk dat
            niet probeert om een Japanse traditie te bezitten, maar er met
            respect en helderheid mee omgaat.
          </p>
          <p>
            Dat betekent ook dat we voorzichtig zijn met wat we wel en niet
            zeggen. We claimen niet dat matcha je leven verandert. We doen niet
            alsof elk groen poeder bijzonder is. En we verkopen liever drie
            duidelijke keuzes dan tien verwarrende varianten.
          </p>
        </Section>

        <Section heading="Wat we wel willen maken.">
          <p>
            We willen matcha maken die je graag opnieuw pakt. Een blik dat mooi
            op je aanrecht mag staan. Een smaak die niet agressief is. Een
            ritueel dat kort kan zijn, maar niet gehaast voelt.
          </p>
          <p>
            Voor de één is dat een pure kom in de ochtend. Voor de ander een
            iced matcha latte in de middag. Allebei zijn goed, zolang de basis
            klopt.
          </p>
        </Section>

        <Section heading="Eerlijk voor de launch.">
          <p>
            Freddo Matcha is nog in opbouw. Dat zeggen we liever duidelijk dan
            dat we doen alsof alles al af is. De eerste selectie, definitieve
            batchinformatie, verzending en productdetails worden stap voor stap
            vastgelegd vóór de launch.
          </p>
          <p>
            Wat al vaststaat: Freddo Matcha wordt een premium matcha-merk uit
            Amersfoort, met Japanse herkomst en Italiaanse rust.
          </p>
        </Section>

        <section className="bg-cream-100 px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-6">
            <p className="font-display text-4xl leading-tight tracking-tight text-matcha-950 md:text-5xl">
              Begin met de eerste selectie.
            </p>
            <p className="max-w-2xl font-body text-base leading-relaxed text-ink-soft md:text-lg">
              Bekijk de blikken en kies de matcha die past bij jouw ritueel:
              puur, als latte of als complete start.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#producten"
                className="inline-flex items-center gap-2 rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 transition-colors hover:bg-matcha-900"
              >
                Shop de collectie
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/verhaal"
                className="inline-flex items-center gap-2 rounded-full border border-matcha-950/20 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-matcha-950"
              >
                Terug naar het verhaal
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Section({
  heading,
  dark,
  children,
}: {
  heading?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  const wrap = dark
    ? "bg-matcha-950 text-cream-50"
    : "bg-cream-50 text-matcha-950";
  const body = dark ? "text-cream-100/85" : "text-ink-soft";
  return (
    <section className={`${wrap} px-6 py-16 md:px-10 md:py-24`}>
      <div className="mx-auto max-w-3xl space-y-5">
        {heading && (
          <h2 className="font-display text-3xl leading-snug tracking-tight md:text-4xl">
            {heading}
          </h2>
        )}
        <div className={`space-y-5 font-body text-base leading-relaxed md:text-lg ${body}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
