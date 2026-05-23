import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { CartProvider } from "@/components/providers/CartProvider";
import { SiteChrome } from "@/components/site/SiteChrome";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MiniCart } from "@/components/site/MiniCart";
import { StickyShopCTA } from "@/components/site/StickyShopCTA";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { TrustStrip } from "@/components/site/TrustStrip";
import { AnalyticsScripts } from "@/components/site/AnalyticsScripts";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://freddomatcha.com";
const description =
  "Premium single-origin Japanse matchapoeder voor thuis. Rustig ontworpen, zorgvuldig geselecteerd en gemaakt voor heldere matcha, romige latte en dagelijkse rituelen zonder poespas.";
const ogDescription =
  "Single-origin Japanse matchapoeder met Italiaanse rust. Voor heldere matcha, romige latte en een dagelijks ritueel zonder poespas.";
const twitterDescription =
  "Premium Japanse matchapoeder voor thuis. Rustig, helder en zonder poespas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Freddo Matcha | Premium Japanse matcha voor thuis",
    template: "%s | Freddo Matcha",
  },
  description,
  applicationName: "Freddo Matcha",
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: "Freddo Matcha",
    title: "Freddo Matcha | Premium Japanse matcha voor thuis",
    description: ogDescription,
    url: siteUrl,
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freddo Matcha | Premium Japanse matcha voor thuis",
    description: twitterDescription,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1f15" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

const brandUrl = "https://freddomatcha.nl";

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${brandUrl}#organization`,
      name: "Freddo Matcha",
      url: brandUrl,
      foundingLocation: {
        "@type": "Place",
        name: "Amersfoort, Nederland",
      },
      areaServed: ["Nederland", "België", "EU"],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${brandUrl}#website`,
      url: brandUrl,
      name: "Freddo Matcha",
      inLanguage: "nl-NL",
      publisher: { "@id": `${brandUrl}#organization` },
    },
    {
      "@type": "OnlineStore",
      "@id": `${brandUrl}#store`,
      name: "Freddo Matcha",
      url: brandUrl,
      parentOrganization: { "@id": `${brandUrl}#organization` },
      currenciesAccepted: "EUR",
      paymentAccepted: ["iDEAL", "Visa", "Mastercard", "Bancontact", "PayPal"],
      areaServed: ["Nederland", "België", "EU"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl-NL"
      className={`${fraunces.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream-50 text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        <TrustStrip />
        <LenisProvider>
          <CartProvider>
            <ScrollProgress />
            <SiteChrome />
            {children}
            <StickyShopCTA />
            <MiniCart />
            <SiteFooter />
          </CartProvider>
        </LenisProvider>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
