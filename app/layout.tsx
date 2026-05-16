import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { CartProvider } from "@/components/providers/CartProvider";
import { SiteChrome } from "@/components/site/SiteChrome";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MiniCart } from "@/components/site/MiniCart";
import { StickyShopCTA } from "@/components/site/StickyShopCTA";
import { AnalyticsScripts } from "@/components/site/AnalyticsScripts";

const siteUrl = "https://freddomatcha.com";
const description =
  "Single-origin Japanese matcha powder. Italian restraint, Japanese sourcing. Supplier details and harvest lot locking before launch.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Freddo Matcha — Single-origin Japanese matcha",
    template: "%s · Freddo Matcha",
  },
  description,
  applicationName: "Freddo Matcha",
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: "Freddo Matcha",
    title: "Freddo Matcha — Single-origin Japanese matcha",
    description,
    url: siteUrl,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freddo Matcha — Single-origin Japanese matcha",
    description,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-cream-50 text-ink">
        <LenisProvider>
          <CartProvider>
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
