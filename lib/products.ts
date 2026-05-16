export type ProductSlug =
  | "ceremonial-matcha"
  | "everyday-matcha"
  | "starter-kit";

export type GrindingMethod = "stone_ground" | "unknown";

export type Provenance = {
  country: "Japan";
  originRegion: string | null;
  cultivar: string | null;
  harvestSeason: string | null;
  harvestYear: number | null;
  grindingMethod: GrindingMethod;
  organicCertified: boolean | null;
  labTested: boolean | null;
  supplierName: string | null;
  lotNumber: string | null;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  priceCents: number;
  stripePriceId: string | null;
  provenance: Provenance | null;
};

const unknownProvenance: Provenance = {
  country: "Japan",
  originRegion: null,
  cultivar: null,
  harvestSeason: null,
  harvestYear: null,
  grindingMethod: "unknown",
  organicCertified: null,
  labTested: null,
  supplierName: null,
  lotNumber: null,
};

export const products: Product[] = [
  {
    slug: "ceremonial-matcha",
    name: "Freddo Ceremoniale",
    tagline: "Single-origin ceremonial matcha.",
    description:
      "Bright, vegetal, whisked solo with hot water. Supplier and harvest lot locking before launch.",
    priceCents: 4800,
    stripePriceId: null,
    provenance: unknownProvenance,
  },
  {
    slug: "everyday-matcha",
    name: "Freddo Quotidiano",
    tagline: "For the daily latte that becomes a habit.",
    description:
      "Fuller-bodied, made for oat milk and iced preparation. Supplier and harvest lot locking before launch.",
    priceCents: 2800,
    stripePriceId: null,
    provenance: unknownProvenance,
  },
  {
    slug: "starter-kit",
    name: "Il Rito Starter Kit",
    tagline: "Bowl, chasen, scoop, 30g of Quotidiano.",
    description:
      "Everything to start the practice at home. Ceramic bowl, bamboo whisk, bamboo scoop, one tin of Freddo Quotidiano.",
    priceCents: 7800,
    stripePriceId: null,
    provenance: null,
  },
];

export const getProduct = (slug: ProductSlug): Product | undefined =>
  products.find((p) => p.slug === slug);

export const formatPrice = (cents: number): string =>
  `€${(cents / 100).toFixed(2)}`;
