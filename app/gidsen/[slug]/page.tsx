import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guideSlugs, guides } from "@/lib/guides";
import type { GuideSlug } from "@/lib/guides";

type Params = { slug: GuideSlug };

export function generateStaticParams(): Params[] {
  return guideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const guideUrl = `https://freddomatcha.nl/gidsen/${guide.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${guideUrl}#article`,
        headline: guide.title,
        description: guide.description,
        inLanguage: "nl-NL",
        datePublished: guide.publishedAt,
        dateModified: guide.publishedAt,
        author: {
          "@type": "Organization",
          name: "Freddo Matcha",
          "@id": "https://freddomatcha.nl#organization",
        },
        publisher: { "@id": "https://freddomatcha.nl#organization" },
        mainEntityOfPage: guideUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://freddomatcha.nl/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gidsen",
            item: "https://freddomatcha.nl/gidsen",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: guideUrl,
          },
        ],
      },
    ],
  };

  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-cream-50">
        <article className="px-6 pt-40 pb-12 md:px-10 md:pt-48">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/gidsen"
              className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700 hover:text-matcha-950"
            >
              ← Alle gidsen
            </Link>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-matcha-950 md:text-6xl">
              {guide.title}
            </h1>
            <p className="mt-6 font-body text-sm uppercase tracking-[0.2em] text-ink-soft">
              <span>Geschreven door Freddo Matcha</span>
              <span aria-hidden className="px-2">·</span>
              <time dateTime={guide.publishedAt}>
                {new Date(guide.publishedAt).toLocaleDateString("nl-NL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </p>
            <p className="mt-10 max-w-2xl font-body text-xl leading-relaxed text-matcha-950">
              {guide.intro}
            </p>
            <p className="mt-6 max-w-2xl inline-block rounded-full bg-matcha-100 px-4 py-2 font-body text-xs uppercase tracking-[0.2em] text-matcha-800">
              Volledige gids verschijnt binnenkort
            </p>
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-cream-100 px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-5xl">
              <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
                Lees verder
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-matcha-950 md:text-4xl">
                Andere gidsen.
              </h2>
              <ul className="mt-10 grid gap-6 md:grid-cols-2">
                {related.map((g) => (
                  <li
                    key={g.slug}
                    className="group rounded-3xl border border-stone-soft/60 bg-cream-50 p-6"
                  >
                    <Link href={`/gidsen/${g.slug}`} className="flex h-full flex-col">
                      <h3 className="font-display text-xl leading-snug text-matcha-950">
                        {g.title}
                      </h3>
                      <span className="mt-auto pt-6 font-body text-xs uppercase tracking-[0.18em] text-matcha-700">
                        Lees de gids →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
