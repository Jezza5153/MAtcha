"use client";

import { useEffect } from "react";
import { EVENTS, track } from "@/lib/analytics";

export function ProductTracker({
  slug,
  name,
  priceCents,
}: {
  slug: string;
  name: string;
  priceCents: number;
}) {
  useEffect(() => {
    track(EVENTS.ViewedProduct, {
      slug,
      name,
      value: priceCents / 100,
      currency: "EUR",
    });
  }, [slug, name, priceCents]);

  return null;
}
