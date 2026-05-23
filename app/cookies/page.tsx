import type { Metadata } from "next";
import { PolicyHeading, PolicyPage } from "@/components/site/PolicyPage";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Cookiebeleid van Freddo Matcha: welke cookies we plaatsen, waarvoor, en hoe je je voorkeuren beheert.",
};

export default function CookiesPage() {
  return (
    <PolicyPage
      eyebrow="Cookies"
      title="Cookiebeleid."
      intro="Een cookie is een klein tekstbestand dat een website op je apparaat opslaat. Hieronder lees je welke we gebruiken en waarom."
    >
      <section className="space-y-4">
        <PolicyHeading>Functionele cookies</PolicyHeading>
        <p>
          Strikt noodzakelijk om de website te laten werken — onder andere voor
          de winkelmand en je voorkeur voor minder beweging. Deze cookies
          plaatsen we zonder toestemming, omdat de site er anders niet
          functioneert.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Analytische cookies</PolicyHeading>
        <p>
          Pas actief na de launch en alleen als je toestemming geeft. We
          gebruiken ze om te begrijpen welke pagina&apos;s aanslaan, zodat we
          de site beter kunnen maken. Geanonimiseerd waar mogelijk.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Marketingcookies</PolicyHeading>
        <p>
          Alleen na expliciete toestemming. Hiermee kunnen we je relevantere
          inhoud tonen via advertentienetwerken. Je kunt deze keuze later altijd
          intrekken.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Je voorkeuren beheren</PolicyHeading>
        <p>
          Bij de launch komt een cookiebanner waarin je je voorkeuren kunt
          aanpassen. Tot die tijd plaatst de site alleen functionele cookies.
          Je kunt cookies altijd zelf wissen via de instellingen van je
          browser.
        </p>
      </section>
    </PolicyPage>
  );
}
