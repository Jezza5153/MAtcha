import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Freddo Matcha — Italian-Japanese house, single-origin Japanese matcha. The story behind the brand.",
};

export default function StoryPage() {
  return (
    <main className="bg-cream-50">
      <section className="px-6 pt-40 pb-20 md:px-10 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Our story
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-tight text-matcha-950 md:text-7xl">
            Italian restraint.
            <br />
            <em className="not-italic text-matcha-800">Japanese sourcing.</em>
          </h1>
          <p className="mt-10 max-w-2xl font-body text-lg leading-relaxed text-ink-soft md:text-xl">
            Freddo Matcha is what happens when a European house — with the
            patience for a slow product and the discipline for restrained
            design — sources single-origin Japanese matcha and lets the leaf
            do the talking.
          </p>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              01 · Origin
            </p>
            <p className="mt-3 font-display text-3xl leading-snug text-matcha-950">
              Where the leaf comes from.
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-body text-base leading-relaxed text-ink-soft md:text-lg">
              The leaves we source are grown in Japan. The specific farm and
              region will be named on every tin once our supplier relationship
              is locked. Until then we won&rsquo;t name a place we
              can&rsquo;t prove, even if it&rsquo;s the place we want.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              Premium dies the moment a buyer suspects the brand is guessing.
              So we wait, and we publish the paperwork.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
              02 · Slow
            </p>
            <p className="mt-3 font-display text-3xl leading-snug text-matcha-950">
              How the powder is made.
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-body text-base leading-relaxed text-ink-soft md:text-lg">
              The path from harvested leaf to finished powder takes time. Tea
              is shaded, picked, steamed, dried, sorted, and ground. Done well
              and slowly, the result is a low-bitterness, soft-umami powder
              that holds its character whether you whisk it solo or pour it
              over ice.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
              Whether ours is specifically stone-ground will appear on the
              tin and on our product page once supplier confirms the method.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-matcha-950 px-6 py-20 text-cream-50 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-300">
              03 · Ritual
            </p>
            <p className="mt-3 font-display text-3xl leading-snug">
              How you drink it.
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-body text-base leading-relaxed text-cream-100/80 md:text-lg">
              The brand isn&rsquo;t a religion. Drink it whisked solo at
              dawn, shaken iced at noon, poured into oat milk after lunch.
              The Italian half of the brand is that you don&rsquo;t need to
              choose a side. The Japanese half is that whichever side you
              choose, the leaf does the work.
            </p>
            <p className="mt-5 font-body text-base leading-relaxed text-cream-100/80 md:text-lg">
              Three SKUs at launch: <em className="not-italic text-cream-50">Freddo Ceremoniale</em> for the ritual,
              {" "}<em className="not-italic text-cream-50">Freddo Quotidiano</em> for the habit,
              {" "}<em className="not-italic text-cream-50">Il Rito Starter Kit</em> for the first ten bowls.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            What we won&rsquo;t claim
          </p>
          <p className="mt-4 font-display text-3xl leading-snug text-matcha-950 md:text-4xl">
            Restraint, not noise.
          </p>
          <ul className="mt-8 space-y-3 font-body text-base leading-relaxed text-ink-soft md:text-lg">
            <li>No fake Japanese phrases as decoration.</li>
            <li>No fake Italian flourishes as decoration.</li>
            <li>No "ancient ritual" copy. The product is the ritual.</li>
            <li>No region, cultivar, harvest year, or lab claim without the paperwork.</li>
            <li>No five-star reviews until we have thirty real customers.</li>
            <li>
              No caffeine or health claims. The leaf is the leaf.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-8">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Ready?
          </p>
          <p className="font-display text-4xl leading-tight tracking-tight text-matcha-950 md:text-5xl">
            See the lineup.
          </p>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 rounded-full bg-matcha-950 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.2em] text-cream-50 transition-colors hover:bg-matcha-900"
          >
            The three tins
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
