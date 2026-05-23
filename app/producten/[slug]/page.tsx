import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, productSlugs, formatPrice } from "@/lib/products";
import type { ProductSlug } from "@/lib/products";
import { ProductHero } from "@/components/product/ProductHero";
import { MobileStickyBuyBar } from "@/components/product/MobileStickyBuyBar";
import { ProductTracker } from "@/components/product/ProductTracker";
import { TasteProfile } from "@/components/product/TasteProfile";
import { ProvenanceTable } from "@/components/product/ProvenanceTable";
import { PreparationGuide } from "@/components/product/PreparationGuide";
import { ProductFAQ } from "@/components/product/ProductFAQ";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { ReviewsPlaceholder } from "@/components/product/ReviewsPlaceholder";
import { SubscribeUpsell } from "@/components/product/SubscribeUpsell";

type Params = { slug: ProductSlug };

export function generateStaticParams(): Params[] {
  return productSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const title = `${product.name} — ${product.tagline}`;
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title,
      description: product.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productUrl = `https://freddomatcha.nl/producten/${product.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${productUrl}#product`,
        name: product.name,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: "Freddo Matcha",
          "@id": "https://freddomatcha.nl#organization",
        },
        image: ["/images/matcha-pack.png"],
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: (product.priceCents / 100).toFixed(2),
          availability: "https://schema.org/PreOrder",
          url: productUrl,
        },
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
            name: "Producten",
            item: "https://freddomatcha.nl/#producten",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: productUrl,
          },
        ],
      },
      ...(product.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${productUrl}#faq`,
              mainEntity: product.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ProductTracker
        slug={product.slug}
        name={product.name}
        priceCents={product.priceCents}
      />
      <ProductHero product={product} />
      <MobileStickyBuyBar product={product} />

      <section
        aria-label="Over dit blik"
        className="bg-cream-50 px-6 pb-16 md:px-10 md:pb-24"
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            Over dit blik
          </p>
          <p className="mt-4 font-display text-2xl leading-snug text-matcha-950 md:text-3xl">
            {product.longDescription}
          </p>
          <p className="mt-6 font-body text-sm text-ink-soft">
            {formatPrice(product.priceCents)}
            {product.weightGrams && ` · ${product.weightGrams}g`}
          </p>
        </div>
      </section>

      <TasteProfile
        tasteNotes={product.tasteNotes}
        bestFor={product.bestFor}
      />

      <PreparationGuide steps={product.preparation} productName={product.name} />

      {product.provenance && <ProvenanceTable provenance={product.provenance} />}

      <ShippingReturnsCard />

      {product.slug === "dagelijkse-matcha" && (
        <SubscribeUpsell
          basePriceCents={product.priceCents}
          productName={product.name}
        />
      )}

      <ReviewsPlaceholder />

      <ProductFAQ items={product.faq} />

      <RelatedProducts currentSlug={product.slug} />
    </main>
  );
}

function ShippingReturnsCard() {
  return (
    <section
      aria-label="Verzending en retour"
      className="bg-cream-50 px-6 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-matcha-900/10 bg-cream-100 p-8">
        <details className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-xl text-matcha-950 list-none">
            <span>Verzending &amp; retour</span>
            <span
              aria-hidden
              className="font-body text-2xl text-matcha-700 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-ink-soft">
            <p>
              <strong className="text-matcha-950">Verzending:</strong> Het
              volledige verzendbeleid en de EU-tarieven worden bekendgemaakt bij
              de pre-order launch. Gratis verzending vanaf &euro;60.
            </p>
            <p>
              <strong className="text-matcha-950">Retour:</strong> Ongeopende
              blikken binnen 14 dagen. Eenmaal geopend is matcha om
              voedselveiligheidsredenen niet retourneerbaar.
            </p>
            <p>
              <strong className="text-matcha-950">Bewaren:</strong> Ongeopend
              blik op kamertemperatuur. Na openen: koel bewaren en binnen 30
              dagen opmaken.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
