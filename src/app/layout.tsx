import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Châssis One - Expert en Pose de Châssis et Menuiserie à Wavre",
  description:
    "Châssis One, expert en pose de châssis PVC et aluminium, portes d'entrée, volets roulants et moustiquaires à Wavre. Fabrication 100% belge, garantie 10 ans. Demande de devis.",
  keywords: [
    "châssis Wavre",
    "menuiserie Wavre",
    "châssis PVC Wavre",
    "châssis aluminium Wavre",
    "pose de châssis Wavre",
    "portes d'entrée Wavre",
    "volets roulants Wavre",
    "moustiquaires Wavre",
    "menuiserie Brabant wallon",
    "châssis Brabant wallon",
    "Sofarau",
    "fabrication belge",
  ],
  authors: [{ name: "Châssis One" }],
  creator: "Châssis One",
  publisher: "Châssis One",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chassisone.be"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Châssis One - Expert en Pose de Châssis et Menuiserie à Wavre",
    description:
      "Châssis One, expert en pose de châssis PVC et aluminium, portes d'entrée, volets roulants et moustiquaires à Wavre. Fabrication 100% belge, garantie 10 ans.",
    url: "https://chassisone.be",
    siteName: "Châssis One",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Châssis One - Expert en Menuiserie à Wavre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Châssis One - Expert en Pose de Châssis et Menuiserie à Wavre",
    description:
      "Châssis One, expert en pose de châssis PVC et aluminium, portes d'entrée, volets roulants et moustiquaires à Wavre.",
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
  children: React.ReactNode;
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
