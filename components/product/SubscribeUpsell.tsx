"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/components/providers/CartProvider";

type Cadence = "monthly" | "bi-monthly";

const DISCOUNT = 0.1;

export function SubscribeUpsell({
  basePriceCents,
  productName,
}: {
  basePriceCents: number;
  productName: string;
}) {
  const [cadence, setCadence] = useState<Cadence>("monthly");
  const cart = useCart();

  const discounted = Math.round(basePriceCents * (1 - DISCOUNT));

  return (
    <section
      aria-label="Abonneren en besparen"
      className="bg-matcha-100 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-matcha-900/15 bg-cream-50 p-8 md:p-12">
        <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
          Abonneren &amp; besparen
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-matcha-950 md:text-4xl">
          Maak van {productName} een gewoonte. Bespaar 10%.
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-soft">
          Ontvang een vers blik in jouw ritme. Pauzeer, wijzig of zeg op
          wanneer je wilt. De abonnementsprijs ligt vast zodra pre-orders
          openen.
        </p>

        <fieldset className="mt-8">
          <legend className="sr-only">Kies je ritme</legend>
          <div className="flex flex-wrap gap-3">
            {(
              [
                { value: "monthly" as const, label: "Maandelijks" },
                {
                  value: "bi-monthly" as const,
                  label: "Elke twee maanden",
                },
              ]
            ).map((opt) => {
              const selected = cadence === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-full border px-5 py-3 font-body text-sm transition-colors ${
                    selected
                      ? "border-matcha-950 bg-matcha-950 text-cream-50"
                      : "border-matcha-900/15 bg-cream-100 text-matcha-950 hover:border-matcha-900/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="cadence"
                    value={opt.value}
                    checked={selected}
                    onChange={() => setCadence(opt.value)}
                    className="sr-only"
                  />
                  <span>{opt.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8 flex flex-wrap items-baseline gap-4">
          <span className="font-display text-3xl text-matcha-950">
            {formatPrice(discounted)}
          </span>
          <span className="font-body text-sm text-ink-soft line-through">
            {formatPrice(basePriceCents)}
          </span>
          <span className="font-body text-xs uppercase tracking-[0.2em] text-matcha-700">
            per blik
          </span>
        </div>

        <button
          type="button"
          onClick={cart.open}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 transition-colors hover:bg-matcha-900"
        >
          Houd me op de hoogte van abonnementen
          <span aria-hidden>→</span>
        </button>

        <p className="mt-4 font-body text-xs text-ink-soft">
          Abonnementen worden geactiveerd met de commerce-fase. Laat je
          e-mailadres achter en we sturen de launchaankondiging.
        </p>
      </div>
    </section>
  );
}
