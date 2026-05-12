export type ProductSlug = "ceremonial" | "everyday" | "starter-kit";

export type Product = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  priceCents: number;
  stripePriceId: string | null;
};

export const products: Product[] = [
  {
    slug: "ceremonial",
    name: "Ceremonial Matcha",
    tagline: "Stone-ground from first-harvest leaves.",
    description:
      "A bright, vegetal grade meant to be whisked with water and tasted on its own. Single origin, shaded for three weeks before harvest.",
    priceCents: 4800,
    stripePriceId: null,
  },
  {
    slug: "everyday",
    name: "Everyday Matcha",
    tagline: "For the morning latte that becomes a habit.",
    description:
      "Smoother, slightly fuller-bodied. Holds up to oat milk and sits well at the bottom of an iced glass.",
    priceCents: 2800,
    stripePriceId: null,
  },
  {
    slug: "starter-kit",
    name: "Starter Kit",
    tagline: "Bowl, chasen, scoop, 30g of Everyday.",
    description:
      "Everything you need to make matcha properly at home. Hand-thrown ceramic bowl, 100-prong bamboo whisk, traditional bamboo scoop.",
    priceCents: 7800,
    stripePriceId: null,
  },
];

export const getProduct = (slug: ProductSlug): Product | undefined =>
  products.find((p) => p.slug === slug);

export const formatPrice = (cents: number): string =>
  `€${(cents / 100).toFixed(2)}`;
