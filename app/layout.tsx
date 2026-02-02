import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlobeHaven Consulting",
  description: "Stratégiai adó- és pénzügyi tanácsadás KKV-knak – Segítünk tisztán látni."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}

