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

export type TasteNote = { key: string; note: string };
export type PreparationStep = { step: number; title: string; body: string };
export type FaqItem = { q: string; a: string };
export type UsePreparation = "straight" | "latte" | "iced" | "baking";

export type Product = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  priceCents: number;
  stripePriceId: string | null;
  provenance: Provenance | null;
  weightGrams: number | null;
  tasteNotes: TasteNote[];
  bestFor: UsePreparation[];
  preparation: PreparationStep[];
  faq: FaqItem[];
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
    longDescription:
      "The top of the Freddo range. Designed to be whisked solo with hot water — no milk, no sugar — so the leaf does the talking. Targeting soft umami, low bitterness, and a clean green finish. Specific tasting notes are published per harvest lot once supplier and grade are locked.",
    priceCents: 4800,
    stripePriceId: null,
    provenance: unknownProvenance,
    weightGrams: 30,
    tasteNotes: [
      { key: "Umami", note: "Deep, savoury — what you're paying for" },
      { key: "Bitterness", note: "Targeted soft, never sharp" },
      { key: "Sweetness", note: "Subtle, vegetal" },
      { key: "Finish", note: "Clean green, no lingering astringency" },
    ],
    bestFor: ["straight"],
    preparation: [
      {
        step: 1,
        title: "Sift",
        body: "2g matcha (one chashaku scoop) into a warm bowl. Sifting prevents clumps.",
      },
      {
        step: 2,
        title: "Pour",
        body: "60ml of 75°C water. Boiling water draws out bitterness — don't.",
      },
      {
        step: 3,
        title: "Whisk",
        body: "Fast W-shaped strokes with a chasen for ~20 seconds, until a fine layer of foam settles on top.",
      },
    ],
    faq: [
      {
        q: "Why does ceremonial cost more?",
        a: "First-harvest leaves, longer shading, slower stone-grinding — when our supplier is locked, we'll publish the specific lot details on every tin.",
      },
      {
        q: "Can I use this in a latte?",
        a: "You can, but you're paying for nuance milk will mostly hide. For lattes and iced, Freddo Quotidiano is the right choice.",
      },
      {
        q: "It tastes bitter. What did I do wrong?",
        a: "Most likely water too hot. Drop to 70°C and re-whisk. Bitterness in ceremonial-grade should never be the dominant note.",
      },
      {
        q: "When does it ship?",
        a: "Pre-orders open with the locked supplier lot. Drop your email in the cart slide-over to be first in line.",
      },
    ],
  },
  {
    slug: "everyday-matcha",
    name: "Freddo Quotidiano",
    tagline: "For the daily latte that becomes a habit.",
    description:
      "Fuller-bodied, made for oat milk and iced preparation. Supplier and harvest lot locking before launch.",
    longDescription:
      "The everyday version of the Freddo range. Designed to hold its character in oat milk, in ice, in a hurry. Drink it solo and it runs deeper than ceremonial — earthier, fuller, less delicate. Per-lot tasting notes published with each harvest.",
    priceCents: 2800,
    stripePriceId: null,
    provenance: unknownProvenance,
    weightGrams: 50,
    tasteNotes: [
      { key: "Umami", note: "Pronounced, savory" },
      { key: "Bitterness", note: "Balanced — designed to survive milk" },
      { key: "Sweetness", note: "Earthy, oat-friendly" },
      { key: "Body", note: "Full, holds against ice and dairy/oat" },
    ],
    bestFor: ["latte", "iced", "baking", "straight"],
    preparation: [
      {
        step: 1,
        title: "Paste",
        body: "3g matcha + 30ml warm water, whisk hard until a smooth paste forms with no lumps.",
      },
      {
        step: 2,
        title: "Pour",
        body: "Add ice and 150ml of oat or whole milk over the paste. Stir.",
      },
      {
        step: 3,
        title: "Finish",
        body: "Optional: a pinch of flaky sea salt for contrast, or a single drop of honey if you like it sweeter.",
      },
    ],
    faq: [
      {
        q: "Is this lower quality than Ceremoniale?",
        a: "Different grade for different use. Ceremoniale is engineered for nuance; Quotidiano is engineered to survive milk and ice without losing character.",
      },
      {
        q: "Iced or hot?",
        a: "Both. Quotidiano was built for either preparation — its body holds.",
      },
      {
        q: "How much caffeine?",
        a: "Matcha is typically a lower peak with a longer plateau than coffee. Specific mg-per-serving will be published once lab data is in.",
      },
      {
        q: "Can I bake with it?",
        a: "Yes. Quotidiano is the right grade for matcha cakes, ice cream, and the croissant variant we'd never officially recommend.",
      },
    ],
  },
  {
    slug: "starter-kit",
    name: "Il Rito Starter Kit",
    tagline: "Bowl, chasen, scoop, 30g of Quotidiano.",
    description:
      "Everything to start the practice at home. Ceramic bowl, bamboo whisk, bamboo scoop, one tin of Freddo Quotidiano.",
    longDescription:
      "The kit to start. A ceramic bowl, a 100-prong bamboo whisk (chasen), a bamboo scoop (chashaku), and a 30g tin of Freddo Quotidiano to learn on. Drink the first ten bowls with this kit. When the technique settles, graduate to Freddo Ceremoniale.",
    priceCents: 7800,
    stripePriceId: null,
    provenance: null,
    weightGrams: null,
    tasteNotes: [],
    bestFor: ["straight", "latte", "iced"],
    preparation: [
      {
        step: 1,
        title: "Warm the bowl",
        body: "Rinse the chawan with hot water, dry it. A warm bowl keeps the matcha from cooling too fast.",
      },
      {
        step: 2,
        title: "Sift and pour",
        body: "2g of Quotidiano into the bowl. 60ml of 75°C water. No boiling.",
      },
      {
        step: 3,
        title: "Whisk in W",
        body: "Hold the chasen lightly. Whisk in fast W-strokes for 20 seconds. A thin foam settles on top — that's the marker.",
      },
    ],
    faq: [
      {
        q: "Why Quotidiano and not Ceremoniale?",
        a: "Ceremonial-grade matcha should be your tenth bowl, not your first. Learn the technique on Quotidiano — when you stop wasting it, upgrade.",
      },
      {
        q: "Is the bowl hand-thrown?",
        a: "We won't claim that until we can prove it. Specific maker details land with the launch batch.",
      },
      {
        q: "Can I gift this?",
        a: "Yes. Optional gift note at checkout once pre-orders open.",
      },
    ],
  },
];

export const getProduct = (slug: ProductSlug): Product | undefined =>
  products.find((p) => p.slug === slug);

export const productSlugs = (): ProductSlug[] => products.map((p) => p.slug);

export const formatPrice = (cents: number): string =>
  `€${(cents / 100).toFixed(2)}`;

export const formatPreparationLabel = (use: UsePreparation): string => {
  switch (use) {
    case "straight":
      return "Whisked solo";
    case "latte":
      return "Latte";
    case "iced":
      return "Iced";
    case "baking":
      return "Baking";
  }
};

export const packImageFor = (slug: ProductSlug): string => {
  switch (slug) {
    case "ceremonial-matcha":
      return "/brand/pack-ceremoniale.svg";
    case "everyday-matcha":
      return "/brand/pack-quotidiano.svg";
    case "starter-kit":
      return "/brand/pack-rito.svg";
  }
};
