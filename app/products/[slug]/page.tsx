import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, productSlugs, formatPrice } from "@/lib/products";
import type { ProductSlug } from "@/lib/products";
import { ProductHero } from "@/components/product/ProductHero";
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "Freddo Matcha" },
    image: ["/images/matcha-pack.png"],
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: (product.priceCents / 100).toFixed(2),
      availability: "https://schema.org/PreOrder",
      url: `https://freddomatcha.com/products/${product.slug}`,
    },
  };

  return (
    <>
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

      <section
        aria-label="About"
        className="bg-cream-50 px-6 pb-16 md:px-10 md:pb-24"
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-[0.7rem] uppercase tracking-[0.32em] text-matcha-700">
            About this tin
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

      {product.slug === "everyday-matcha" && (
        <SubscribeUpsell
          basePriceCents={product.priceCents}
          productName={product.name}
        />
      )}

      <ReviewsPlaceholder />

      <ProductFAQ items={product.faq} />

      <RelatedProducts currentSlug={product.slug} />
    </>
  );
}

function ShippingReturnsCard() {
  return (
    <section
      aria-label="Shipping & returns"
      className="bg-cream-50 px-6 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-matcha-900/10 bg-cream-100 p-8">
        <details className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-xl text-matcha-950 list-none">
            <span>Shipping &amp; returns</span>
            <span
              aria-hidden
              className="font-body text-2xl text-matcha-700 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-ink-soft">
            <p>
              <strong className="text-matcha-950">Shipping:</strong> Full
              shipping policy and EU rates land with the pre-order launch. Free
              shipping over &euro;60.
            </p>
            <p>
              <strong className="text-matcha-950">Returns:</strong> Sealed tins
              within 14 days. Once opened, matcha is non-returnable for food
              safety reasons.
            </p>
            <p>
              <strong className="text-matcha-950">Storage:</strong> Sealed tin
              at room temperature. After opening: refrigerate, consume within 30
              days.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
