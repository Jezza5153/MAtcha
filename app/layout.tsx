import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

export const metadata: Metadata = {
  title: {
    default: "Matcha — Stone-ground in Uji",
    template: "%s · Matcha",
  },
  description:
    "Single-origin ceremonial-grade matcha, stone-ground in Uji, Japan. From shaded leaf to morning ritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-cream-50 text-ink">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
