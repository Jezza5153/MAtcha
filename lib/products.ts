export type ProductSlug =
  | "ceremoniele-matcha"
  | "dagelijkse-matcha"
  | "starterkit";

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
  /**
   * Consumer-facing retail price in cents, *including* 9% Dutch BTW (the food
   * VAT rate matcha falls under). This is the number we render on the page.
   * For the matcha tins this is derived from `pricePerKgCentsExBtw × weight`;
   * for kits / bundles it's set directly.
   */
  priceCents: number;
  /**
   * Per-kilogram rate ex BTW. Used for the matcha tins (Ceremoniale and
   * Quotidiano are pure matcha by weight). Null for kits / bundles where the
   * per-kg model doesn't apply (the Starter Kit includes tools).
   */
  pricePerKgCentsExBtw: number | null;
  stripePriceId: string | null;
  provenance: Provenance | null;
  weightGrams: number | null;
  tasteNotes: TasteNote[];
  bestFor: UsePreparation[];
  preparation: PreparationStep[];
  faq: FaqItem[];
};

/** Dutch BTW rate for food (matcha = tea = food). */
export const BTW_RATE_FOOD = 0.09;

/** Compute consumer-facing tin price in cents incl BTW from a per-kg ex BTW rate. */
function tinPriceCentsInclBtw(
  perKgCentsExBtw: number,
  grams: number,
): number {
  // (cents/kg) × (kg) × (1 + btw) → rounded to whole cents
  return Math.round((perKgCentsExBtw * grams * (1 + BTW_RATE_FOOD)) / 1000);
}

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
    slug: "ceremoniele-matcha",
    name: "Freddo Ceremoniale",
    tagline: "Voor puur opkloppen, heldere smaak en een rustig ritueel.",
    description:
      "Een ceremoniële matcha voor wie matcha puur wil drinken: zacht, helder en zorgvuldig geselecteerd voor een elegante kom zonder bitter randje.",
    longDescription:
      "Freddo Ceremoniale is de meest verfijnde matcha in de eerste selectie. Gemaakt voor wie matcha puur opklopt met water en de smaak echt wil proeven. Denk aan een zachte body, heldere groene tonen en een schone afdronk. Geen overdreven beloftes, geen wellness-theater. Alleen een rustige, precieze matcha voor momenten waarop je iets beters wilt dan haast.",
    pricePerKgCentsExBtw: 25000, // €250 / kg ex BTW
    priceCents: tinPriceCentsInclBtw(25000, 30), // €8,18 incl btw voor blik van 30g
    stripePriceId: null,
    provenance: unknownProvenance,
    weightGrams: 30,
    tasteNotes: [
      { key: "Smaak", note: "Zacht groen" },
      { key: "Umami", note: "Licht aanwezig" },
      { key: "Afdronk", note: "Schoon, niet blijvend" },
      { key: "Bitterheid", note: "Weinig, in balans" },
    ],
    bestFor: ["straight"],
    preparation: [
      {
        step: 1,
        title: "Zeven",
        body: "Zeef 2 gram matcha in een kom.",
      },
      {
        step: 2,
        title: "Schenken",
        body: "Voeg 60–70 ml water toe van ongeveer 75–80°C.",
      },
      {
        step: 3,
        title: "Kloppen",
        body: "Klop met een chasen tot er een fijne schuimlaag ontstaat.",
      },
      {
        step: 4,
        title: "Drinken",
        body: "Drink direct, zonder suiker of melk, zodat je de herkomst proeft.",
      },
    ],
    faq: [
      {
        q: "Is Freddo Ceremoniale geschikt voor latte?",
        a: "Dat kan, maar deze matcha is vooral bedoeld om puur te drinken. Voor latte is Freddo Quotidiano waarschijnlijk logischer.",
      },
      {
        q: "Is deze matcha bitter?",
        a: "Goede matcha heeft karakter, maar hoort niet hard of schraal bitter te smaken. Freddo Ceremoniale wordt geselecteerd op zachtheid, helderheid en balans.",
      },
      {
        q: "Wanneer gebruik ik deze?",
        a: "Op momenten waarop je rustig matcha wilt maken en de smaak centraal staat. Minder haast, meer aandacht.",
      },
    ],
  },
  {
    slug: "dagelijkse-matcha",
    name: "Freddo Quotidiano",
    tagline: "Voor latte, iced matcha en dagelijks gebruik.",
    description:
      "Een toegankelijke Japanse matcha voor je dagelijkse latte, iced matcha of snelle ochtendroutine. Vol genoeg voor melk, zacht genoeg voor elke dag.",
    longDescription:
      "Freddo Quotidiano is gemaakt voor dagelijks gebruik. Niet te kostbaar om vaak te drinken, maar wel serieus genoeg om je matcha latte beter te maken dan de waterige, bittere versies die je te vaak tegenkomt. Deze matcha heeft genoeg body om door melk heen te komen en blijft rustig in smaak. Ideaal voor warme latte, iced matcha of een snelle kom op drukke dagen.",
    pricePerKgCentsExBtw: 19000, // €190 / kg ex BTW
    priceCents: tinPriceCentsInclBtw(19000, 30), // €6,21 incl btw voor blik van 30g
    stripePriceId: null,
    provenance: unknownProvenance,
    weightGrams: 30,
    tasteNotes: [
      { key: "Smaak", note: "Romig groen" },
      { key: "Karakter", note: "Licht grassig" },
      { key: "Body", note: "Zacht maar vol" },
      { key: "In melk", note: "Houdt zijn smaak goed" },
    ],
    bestFor: ["latte", "iced", "baking", "straight"],
    preparation: [
      {
        step: 1,
        title: "Zeven",
        body: "Zeef 2 gram matcha in een kom of shaker.",
      },
      {
        step: 2,
        title: "Schenken",
        body: "Voeg 40–60 ml water toe van ongeveer 75–80°C.",
      },
      {
        step: 3,
        title: "Kloppen",
        body: "Klop of shake tot de matcha glad is.",
      },
      {
        step: 4,
        title: "Serveren",
        body: "Giet over melk of ijs en roer kort door.",
      },
    ],
    faq: [
      {
        q: "Is Freddo Quotidiano minder goed dan Ceremoniale?",
        a: "Nee, het heeft een ander doel. Ceremoniale is bedoeld om puur te drinken. Quotidiano is gemaakt voor latte, iced matcha en dagelijks gebruik.",
      },
      {
        q: "Kan ik deze ook puur drinken?",
        a: "Ja, maar de smaak is voller en iets directer. Als je vooral puur drinkt, kies dan Freddo Ceremoniale.",
      },
      {
        q: "Welke melk werkt het best?",
        a: "Volle melk, havermelk en kokosdrank werken goed. Kies iets romigs, zodat de matcha mooi rond blijft.",
      },
    ],
  },
  {
    slug: "starterkit",
    name: "Il Rito Starter Kit",
    tagline: "Alles voor je eerste matcha-ritueel.",
    description:
      "Een rustige startset met matcha en de tools die je nodig hebt om thuis goed te beginnen. Geen overvolle kit, alleen wat echt helpt.",
    longDescription:
      "Il Rito Starter Kit is gemaakt voor iedereen die thuis matcha wil maken zonder meteen te verdwalen in tools, termen en tegenstrijdige adviezen. Je krijgt een duidelijke basis: goede matcha, de juiste beweging en genoeg begeleiding om het ritueel eigen te maken. Niet ingewikkeld. Wel beter dan roeren met een lepel en hopen dat het goed komt.",
    pricePerKgCentsExBtw: 22000, // €220 / kg ex BTW — matcha-portie tarief
    // Kit = 30g matcha (€7,19 incl btw) + chasen + maatlepel + zeefje.
    // Totaalprijs incl btw — verander hier als toolkit-kostprijs schuift.
    priceCents: 3799, // €37,99 incl btw
    stripePriceId: null,
    provenance: null,
    weightGrams: 30,
    tasteNotes: [
      { key: "Niveau", note: "Beginner-friendly" },
      { key: "Tempo", note: "Rustige start" },
      { key: "Set", note: "Compleet ritueel" },
      { key: "Voor", note: "Thuis" },
    ],
    bestFor: ["straight", "latte", "iced"],
    preparation: [
      {
        step: 1,
        title: "Zeven",
        body: "Zeef de matcha zodat je geen klontjes krijgt.",
      },
      {
        step: 2,
        title: "Schenken",
        body: "Voeg warm water toe, niet kokend.",
      },
      {
        step: 3,
        title: "Kloppen",
        body: "Klop snel in een W-beweging tot de matcha glad en luchtig is.",
      },
      {
        step: 4,
        title: "Drinken",
        body: "Drink puur of maak er een latte van.",
      },
    ],
    faq: [
      {
        q: "Is deze kit goed voor beginners?",
        a: "Ja. De kit is juist bedoeld om rustig te starten zonder onnodige spullen.",
      },
      {
        q: "Heb ik echt een chasen nodig?",
        a: "Voor de beste textuur wel. Een lepel mengt matcha vaak niet goed genoeg en laat sneller klontjes achter.",
      },
      {
        q: "Kan ik hiermee ook iced matcha maken?",
        a: "Ja. Klop de matcha eerst glad met een beetje warm water en giet daarna over ijs en melk.",
      },
    ],
  },
];

export const getProduct = (slug: ProductSlug): Product | undefined =>
  products.find((p) => p.slug === slug);

export const productSlugs = (): ProductSlug[] => products.map((p) => p.slug);

export const formatPrice = (cents: number): string =>
  `€${(cents / 100).toFixed(2).replace(".", ",")}`;

export const formatPreparationLabel = (use: UsePreparation): string => {
  switch (use) {
    case "straight":
      return "Puur opgeklopt";
    case "latte":
      return "Latte";
    case "iced":
      return "Iced matcha";
    case "baking":
      return "Bakken";
  }
};

export const packImageFor = (slug: ProductSlug): string => {
  switch (slug) {
    case "ceremoniele-matcha":
      return "/brand/pack-ceremoniale.svg";
    case "dagelijkse-matcha":
      return "/brand/pack-quotidiano.svg";
    case "starterkit":
      return "/brand/pack-rito.svg";
  }
};
