import type { Metadata } from "next";
import { PolicyHeading, PolicyPage } from "@/components/site/PolicyPage";

export const metadata: Metadata = {
  title: "Retour",
  description:
    "Retourbeleid voor Freddo Matcha: ongeopende blikken binnen 14 dagen, voedselveiligheid voor geopende verpakkingen.",
};

export default function ReturnsPage() {
  return (
    <PolicyPage
      eyebrow="Hulp"
      title="Retour en herroeping."
      intro="Hieronder lees je hoe retour werkt bij Freddo Matcha. We houden het kort en eerlijk: ongeopend mag terug, geopend niet, met een goede reden."
    >
      <section className="space-y-4">
        <PolicyHeading>Bedenktijd van 14 dagen</PolicyHeading>
        <p>
          Volgens het Europese consumentenrecht heb je 14 dagen bedenktijd vanaf
          de dag dat je je bestelling ontvangt. Binnen die termijn mag je
          ongeopende blikken zonder opgaaf van reden retourneren.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Geopende blikken</PolicyHeading>
        <p>
          Eenmaal geopend kunnen we matcha niet meer terugnemen. Dat is geen
          regel die wij verzinnen — het is voedselveiligheid. Verzegelde
          producten met gebroken zegel vallen onder dezelfde regel.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Hoe meld je een retour aan?</PolicyHeading>
        <p>
          Stuur een mail naar{" "}
          <a
            href="mailto:hello@freddomatcha.nl"
            className="text-matcha-800 underline decoration-matcha-300 underline-offset-4 hover:text-matcha-950"
          >
            hello@freddomatcha.nl
          </a>{" "}
          met je bestelnummer en wat je wilt retourneren. Je krijgt een
          retourlabel en een korte instructie voor het versturen.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Terugbetaling</PolicyHeading>
        <p>
          Zodra we je retour ontvangen en gecontroleerd hebben, betalen we
          binnen 14 dagen het volledige bedrag terug via dezelfde betaalmethode
          waarmee je hebt afgerekend.
        </p>
      </section>
    </PolicyPage>
  );
}
