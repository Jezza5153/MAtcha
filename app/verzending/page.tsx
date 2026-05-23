import type { Metadata } from "next";
import { PolicyHeading, PolicyPage } from "@/components/site/PolicyPage";

export const metadata: Metadata = {
  title: "Verzending",
  description:
    "Verzendinformatie voor Freddo Matcha: gratis verzending binnen de EU vanaf €60, levertijden en verzendpartner.",
};

export default function ShippingPage() {
  return (
    <PolicyPage
      eyebrow="Hulp"
      title="Verzending."
      intro="Hieronder vind je hoe en wanneer we Freddo Matcha verzenden. Definitieve tarieven en verzendpartner worden vastgelegd bij de pre-order launch."
    >
      <section className="space-y-4">
        <PolicyHeading>Waar verzenden we naartoe?</PolicyHeading>
        <p>
          Bij de launch verzenden we binnen Nederland, België en de rest van de
          Europese Unie. Verzending buiten de EU volgt later, zodra douane- en
          BTW-flows volledig zijn ingericht.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Tarieven</PolicyHeading>
        <p>
          Gratis verzending binnen de EU bij bestellingen vanaf €60. Onder dat
          bedrag rekenen we een vaste bijdrage per zone. De exacte tarieven per
          land publiceren we vóór de eerste pre-order.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Levertijd</PolicyHeading>
        <p>
          Op werkdagen voor 15:00 besteld is meestal de volgende werkdag in
          Nederland in huis. België duurt 1–2 werkdagen, overige EU-landen 2–5
          werkdagen, afhankelijk van land en verzendpartner.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyHeading>Track &amp; trace</PolicyHeading>
        <p>
          Zodra je bestelling onderweg is, ontvang je een e-mail met een
          track-en-trace-link. Daarmee zie je live waar je matcha is.
        </p>
      </section>
    </PolicyPage>
  );
}
