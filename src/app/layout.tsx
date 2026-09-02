import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Châssis One | Châssis PVC & Alu, Portes et Volets à Wavre",
  description:
    "Fabricant et installateur de châssis PVC et aluminium, portes d'entrée et volets à Wavre et en Brabant Wallon. Pose certifiée, fabrication belge et devis gratuit en ligne sous 48h.",
  keywords: [
    "châssis Wavre",
    "châssis PVC Brabant Wallon",
    "châssis aluminium Wavre",
    "portes et fenêtres Wavre",
    "portes d'entrée Brabant Wallon",
    "volets roulants Wavre",
    "baies vitrées Wavre",
    "rénovation châssis Brabant Wallon",
    "installateur châssis Wavre",
    "devis châssis gratuit",
    "menuiserie Wavre",
    "Châssis One",
    "Sofarau",
    "fabrication belge châssis",
  ],
  authors: [{ name: "Châssis One" }],
  creator: "Châssis One",
  publisher: "Châssis One",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.chassisone.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Châssis One | Châssis PVC & Alu, Portes et Volets à Wavre",
    description:
      "Fabricant et installateur de châssis PVC et aluminium, portes d'entrée et volets à Wavre et en Brabant Wallon. Devis gratuit en ligne.",
    url: "https://www.chassisone.com",
    siteName: "Châssis One",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Châssis One — Châssis, portes et volets à Wavre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Châssis One | Châssis PVC & Alu, Portes et Volets à Wavre",
    description:
      "Fabricant et installateur de châssis, portes et volets à Wavre et en Brabant Wallon. Devis gratuit en ligne.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // À compléter avec les codes de vérification Google Search Console, Bing, etc.
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
