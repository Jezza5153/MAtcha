import Image from "next/image";

type Card = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
};

const cards: Card[] = [
  {
    eyebrow: "01 · Origin",
    title: "Single-origin Japan",
    body: "Shade-grown leaves from a partner farm we're locking before launch.",
    image: "/brand/field.svg",
  },
  {
    eyebrow: "02 · Slow",
    title: "Stone-fine powder",
    body: "Patient grinding for a low-bitterness, soft umami cup.",
    image: "/brand/powder-cloud.svg",
  },
  {
    eyebrow: "03 · Ritual",
    title: "Whisk it your way",
    body: "Whisked solo with water, shaken iced, or poured into oat milk.",
    image: "/brand/bowl.svg",
  },
];

export function MobileStoryCards() {
  return (
    <section
      id="story"
      className="bg-cream-50 px-6 py-16"
      aria-label="The story"
    >
      <p className="font-body text-[0.65rem] uppercase tracking-[0.32em] text-matcha-700">
        Leaf to ritual
      </p>
      <h2 className="mt-3 max-w-md font-display text-3xl leading-[1.1] tracking-tight text-matcha-950">
        Three steps. One bowl.
      </h2>

      <ul className="mt-10 space-y-6">
        {cards.map((c) => (
          <li
            key={c.eyebrow}
            className="overflow-hidden rounded-3xl border border-stone-soft/60 bg-cream-50"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={c.image}
                alt=""
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
