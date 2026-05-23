import type { Metadata } from "next";
import { PolicyHeading, PolicyPage } from "@/components/site/PolicyPage";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "Algemene voorwaarden van Freddo Matcha: bestellen, betalen, levering, garantie en geschillen.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Voorwaarden"
      title="Algemene voorwaarden."
      intro="Hier vind je de afspraken tussen jou en Freddo Matcha als je via de webshop een product bestelt. Geschreven om te lezen, niet om te verbergen."
    >
      <section className="space-y-4">
        <PolicyHeading>Wie zijn wij?</PolicyHeading>
        <p>
          Freddo Matcha is een Nederlands premium matcha-merk. Volledige
          bedrijfsgegevens (KvK, BTW, vestigingsadres) worden gepubliceerd
          zodra de juridische entiteit definitief is geregistreerd.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Bestellen en betalen</PolicyHeading>
        <p>
          Een bestelling komt tot stand zodra je via de webshop afrekent en wij
          de betaling hebben ontvangen. Geaccepteerde betaalmethoden komen bij
          de launch beschikbaar (iDEAL, creditcard en PayPal als basisset).
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Levering</PolicyHeading>
        <p>
          Levertijden en tarieven staan op de pagina{" "}
          <a
            href="/verzending"
            className="text-matcha-800 underline decoration-matcha-300 underline-offset-4 hover:text-matcha-950"
          >
            Verzending
          </a>
          . We doen ons best ze te halen, maar kunnen vertragingen door
          verzendpartners niet altijd voorkomen.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Herroeping en retour</PolicyHeading>
        <p>
          Je hebt 14 dagen bedenktijd voor ongeopende blikken. Volledige
          retourvoorwaarden staan op{" "}
          <a
            href="/retour"
            className="text-matcha-800 underline decoration-matcha-300 underline-offset-4 hover:text-matcha-950"
          >
            Retour
          </a>
          .
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Productinformatie</PolicyHeading>
        <p>
          We doen ons best om productinformatie zo accuraat mogelijk te
          beschrijven. Kleine verschillen tussen oogstloten kunnen voorkomen —
          dat is bij echte matcha eerder een teken van eerlijkheid dan een
          fout.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Aansprakelijkheid</PolicyHeading>
        <p>
          Onze aansprakelijkheid is beperkt tot het bedrag van je bestelling.
          Voor indirecte of gevolgschade zijn wij niet aansprakelijk, behalve
          waar de wet anders bepaalt.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Toepasselijk recht</PolicyHeading>
        <p>
          Op deze voorwaarden is Nederlands recht van toepassing. Geschillen
          worden voorgelegd aan de bevoegde rechter in het arrondissement waar
          Freddo Matcha gevestigd is.
        </p>
      </section>
    </PolicyPage>
  );
}
