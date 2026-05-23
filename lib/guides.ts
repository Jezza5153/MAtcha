export type GuideSlug =
  | "matcha-kopen-nederland"
  | "ceremoniele-matcha-vs-dagelijkse-matcha"
  | "waarom-freddo-matcha-uit-amersfoort-is-begonnen"
  | "matcha-latte-maken-zonder-bittere-smaak"
  | "japanse-matcha-poeder-kopen";

export type Guide = {
  slug: GuideSlug;
  title: string;
  description: string;
  intro: string;
  publishedAt: string;
};

export const guides: Guide[] = [
  {
    slug: "matcha-kopen-nederland",
    title: "Matcha kopen in Nederland: waar let je écht op?",
    description:
      "Matcha kopen in Nederland? Leer waar je op moet letten: herkomst, kleur, maling, smaak, prijs en het verschil tussen ceremoniële matcha en latte-matcha.",
    intro:
      "Matcha kopen lijkt simpel tot je ziet hoeveel groene poeders hetzelfde beloven. Ceremonieel, premium, latte grade, biologisch, Japans, culinair: de woorden vliegen je om de oren. Maar de echte vraag is eenvoudiger: hoe herken je matcha die goed genoeg is voor wat jij ermee wilt maken?",
    publishedAt: "2026-05-23",
  },
  {
    slug: "ceremoniele-matcha-vs-dagelijkse-matcha",
    title:
      "Ceremoniële matcha vs dagelijkse matcha: het verschil zonder marketingpraat",
    description:
      "Wat is het verschil tussen ceremoniële matcha en dagelijkse matcha? Een heldere uitleg over smaak, gebruik, prijs en wanneer je welke kiest.",
    intro:
      "Niet elke matcha hoeft hetzelfde werk te doen. Een matcha die prachtig puur drinkt, is niet automatisch de beste keuze voor een latte. En een goede dagelijkse matcha is niet minderwaardig omdat hij anders wordt gebruikt. Het verschil zit niet alleen in kwaliteit, maar vooral in doel.",
    publishedAt: "2026-05-23",
  },
  {
    slug: "waarom-freddo-matcha-uit-amersfoort-is-begonnen",
    title: "Waarom Freddo Matcha vanuit Amersfoort is begonnen",
    description:
      "Het verhaal achter Freddo Matcha: waarom een premium matcha-merk uit Amersfoort kiest voor Japanse herkomst, Italiaanse rust en duidelijke productkeuzes.",
    intro:
      "Freddo Matcha begon niet met de wens om nog een groen product op de markt te zetten. Het begon met een vraag: waarom voelt goede matcha in Nederland vaak óf onnodig ingewikkeld, óf totaal onduidelijk? Vanuit Amersfoort bouwen we aan een merk dat daar rust in brengt.",
    publishedAt: "2026-05-23",
  },
  {
    slug: "matcha-latte-maken-zonder-bittere-smaak",
    title: "Matcha latte maken zonder bittere smaak",
    description:
      "Leer hoe je een zachte matcha latte maakt zonder bittere smaak. Met tips voor temperatuur, verhouding, melk, zeven en kloppen.",
    intro:
      "Een bittere matcha latte komt meestal niet door één fout, maar door een paar kleine dingen tegelijk: te heet water, klontjes, verkeerde verhouding of matcha die niet bedoeld is voor melk. Gelukkig is het makkelijk op te lossen als je weet waar je op moet letten.",
    publishedAt: "2026-05-23",
  },
  {
    slug: "japanse-matcha-poeder-kopen",
    title: "Japanse matcha poeder kopen: herkomst, kleur, maling en smaak",
    description:
      "Japanse matcha poeder kopen? Ontdek waarom herkomst, kleur, maling, versheid en smaak belangrijker zijn dan loze premiumclaims.",
    intro:
      "Japanse matcha poeder wordt vaak verkocht met grote woorden. Maar goede matcha herken je niet aan één label. Je kijkt naar herkomst, verwerking, kleur, geur, maling en vooral naar het doel: drink je het puur, als latte of gebruik je het in recepten?",
    publishedAt: "2026-05-23",
  },
];

export const getGuide = (slug: GuideSlug): Guide | undefined =>
  guides.find((g) => g.slug === slug);

export const guideSlugs = (): GuideSlug[] => guides.map((g) => g.slug);
