import Image from "next/image";

type Card = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const cards: Card[] = [
  {
    eyebrow: "01 · Herkomst",
    title: "Single-origin Japan",
    body: "Schaduwgekweekte bladeren van een partnerboerderij die we vóór de launch vastleggen.",
    image: "/images/matcha-field.jpg",
    alt: "Schaduwgekweekt matchaveld in Japan",
  },
  {
    eyebrow: "02 · Langzaam",
    title: "Steenfijn poeder",
    body: "Geduldig malen voor een kom met weinig bitterheid en zachte umami.",
    image: "/images/matcha-powder.jpg",
    alt: "Fijngemalen matchapoeder",
  },
  {
    eyebrow: "03 · Ritueel",
    title: "Maak hem zoals jij wilt",
    body: "Puur opgeklopt met water, geshaket op ijs of geschonken in havermelk.",
    image: "/images/matcha-bowl.jpg",
    alt: "Kom matcha rustig opgeklopt met een chasen",
  },
];

export function MobileStoryCards() {
  return (
    <section
      id="verhaal"
      className="bg-cream-50 px-6 py-16"
      aria-label="Het verhaal"
    >
      <p className="font-body text-[0.65rem] uppercase tracking-[0.32em] text-matcha-700">
        Van blad tot ritueel
      </p>
      <h2
        data-mobile-reveal="section-headline"
        className="mt-3 max-w-md font-display text-3xl leading-[1.1] tracking-tight text-matcha-950"
      >
        Drie stappen. Eén kom.
      </h2>

      <ul className="mt-10 space-y-6">
        {cards.map((c) => (
          <li
            key={c.eyebrow}
            data-mobile-reveal="story-card"
            className="overflow-hidden rounded-3xl border border-stone-soft/60 bg-cream-50"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="font-body text-[0.65rem] uppercase tracking-[0.32em] text-matcha-700">
                {c.eyebrow}
              </p>
              <p className="mt-2 font-display text-2xl leading-snug text-matcha-950">
                {c.title}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
