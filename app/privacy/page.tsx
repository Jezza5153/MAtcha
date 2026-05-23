import type { Metadata } from "next";
import { PolicyHeading, PolicyPage } from "@/components/site/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacybeleid van Freddo Matcha: welke gegevens we verzamelen, waarvoor, en hoe je je rechten uitoefent.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy"
      title="Privacybeleid."
      intro="Freddo Matcha respecteert je privacy. Hieronder lees je welke gegevens we verzamelen, waarvoor, hoe lang en hoe je je rechten uitoefent."
    >
      <section className="space-y-4">
        <PolicyHeading>Welke gegevens verzamelen we?</PolicyHeading>
        <p>
          Voor pre-launch verzamelen we alleen je e-mailadres als je je aanmeldt
          voor de launchaankondiging. Na de launch komen daar de gegevens bij
          die nodig zijn om je bestelling te verwerken: naam, adres,
          betaalgegevens en orderhistorie.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Waarvoor gebruiken we ze?</PolicyHeading>
        <p>
          E-mailadressen gebruiken we uitsluitend om je één bericht te sturen
          als pre-orders openen. Daarna alleen voor service- of bestelmail die
          je redelijkerwijs verwacht. Geen verkoop aan derden, geen
          ongevraagde mailings.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Met wie delen we ze?</PolicyHeading>
        <p>
          Alleen met de partijen die nodig zijn om de bestelling uit te voeren
          — betaalprovider, verzendpartner, mailprovider — en alleen de
          gegevens die zij strikt nodig hebben.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Hoe lang bewaren we ze?</PolicyHeading>
        <p>
          Niet langer dan nodig. E-mails voor de mailinglijst tot je je
          uitschrijft. Orderdata zo lang als wettelijk verplicht voor
          administratie en garantie.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Jouw rechten</PolicyHeading>
        <p>
          Je hebt het recht op inzage, correctie, verwijdering, beperking en
          dataportabiliteit van je gegevens. Stuur een verzoek naar{" "}
          <a
            href="mailto:hello@freddomatcha.nl"
            className="text-matcha-800 underline decoration-matcha-300 underline-offset-4 hover:text-matcha-950"
          >
            hello@freddomatcha.nl
          </a>{" "}
          en we reageren binnen een maand.
        </p>
      </section>
    </PolicyPage>
  );
}
