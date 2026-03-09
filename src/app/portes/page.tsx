"use client";

import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { Lock, Shield, Sparkles, DollarSign, Volume2, LockKeyhole, Palette } from "lucide-react";

const portesServiceData = {
  title: "Pourquoi choisir nos Portes d'Entrée ?",
  sections: [
    {
      id: "01",
      title: "La Sécurité Infaillible",
      text: "Dormez sur vos deux oreilles. La technologie anti-effraction Schüco veille sur ce que vous avez de plus cher. Serrure 5 points certifiée A2P niveau 3, renforts métalliques et verrous anti-perçage. Cette porte résiste aux tentatives d'effraction les plus sophistiquées. Votre foyer est protégé, votre famille en sécurité.",
      img: "/images/services/portes/1.jpg",
      alt: "Porte d'entrée renforcée avec serrure multipoints",
    },
    {
      id: "02",
      title: "L'Isolation Parfaite",
      text: "Coefficient Uw ≤ 1,0 W/(m².K) pour une isolation thermique et phonique exceptionnelle. Le bruit de la rue, des voisins ou de la circulation disparaît dès que vous fermez la porte. Réduisez vos dépenses énergétiques tout en préservant votre confort. Votre havre de paix commence à la porte d'entrée.",
      img: "/images/services/portes/2.jpg",
      alt: "Porte d'entrée isolante installée sur une façade moderne",
    },
    {
      id: "03",
      title: "La Première Impression",
      text: "Portes anthracite avec tirants en inox, finitions premium personnalisables. Créez une première impression mémorable pour vos visiteurs. Votre porte d'entrée reflète votre style et votre personnalité. Elle dit qui vous êtes avant même qu'on sonne. L'élégance commence ici.",
      img: "/images/services/portes/3.jpg",
      alt: "Porte d'entrée design avec tirant inox et finitions premium",
    },
  ],
};

export default function PortesPage() {
  const data = {
    heroTitle: "L’EXCELLENCE DÈS LE PREMIER REGARD",
    heroSubtitle:
      "Votre porte d'entrée est la signature de votre foyer. Entre sécurité blindée et finitions haute couture, créez une première impression mémorable.",
    serviceCategory: "portes" as const, // Mapping automatique vers /images/services/hero-portes.jpg
    breadcrumbPath: [
      { label: "Accueil", href: "/" },
      { label: "Nos Services", href: "/#services" },
      { label: "Portes d'Entrée", href: "/portes" },
    ],
    
    whyChooseTitle: portesServiceData.title,
    editorialBlocks: portesServiceData.sections.map((section, index) => ({
      image: section.img,
      imageAlt: section.alt,
      title: section.title,
      text: section.text,
      number: section.id,
      imagePosition: index % 2 === 0 ? "left" : "right",
      serviceName: "Portes d'entrée",
    })),

    excellenceTitle: "L'Excellence Technique au service de votre confort",
    excellenceSubtitle: "Une porte d'entrée qui vous accueille chaque jour. Chaque détail technique est pensé pour votre sécurité et votre confort.",
    keyBenefits: [
      {
        icon: LockKeyhole,
        title: "Sécurité Renforcée",
        description: "Serrure 5 points certifiée A2P niveau 3 avec renforts métalliques et verrous anti-perçage. Protégez votre foyer avec une porte qui résiste aux tentatives d'effraction les plus sophistiquées. Dormez sur vos deux oreilles.",
      },
      {
        icon: DollarSign,
        title: "Économies d'Énergie",
        description: "Grâce à un coefficient Uw ≤ 1,0 W/(m².K), la chaleur reste à l'intérieur de votre maison. Réduisez vos factures de chauffage tout en préservant votre confort thermique. Une porte qui travaille pour vous.",
      },
      {
        icon: Volume2,
        title: "Sérénité Acoustique",
        description: "Isolation phonique jusqu'à 42 dB pour un silence absolu dans votre intérieur. Le bruit de la rue, des voisins ou de la circulation disparaît. Votre havre de paix commence à la porte d'entrée.",
      },
      {
        icon: Palette,
        title: "Design d'Entrée",
        description: "Portes anthracite avec tirants en inox, finitions premium personnalisables. Créez une première impression mémorable pour vos visiteurs. Votre porte d'entrée reflète votre style et votre personnalité.",
      },
    ],
    detailSection: {
      image: "/images/details/portes-detail.jpg",
      imageAlt: "Détail de poignée et finition porte d'entrée",
      title: "Le sens du détail",
      text: "Chaque élément compte. Nos portes d'entrée sont conçues avec une attention méticuleuse aux finitions. Les poignées ergonomiques, les tirants en inox brossé, les joints d'étanchéité invisibles et les cadres parfaitement alignés témoignent de notre savoir-faire artisanal. C'est cette précision qui fait la différence entre une simple porte et une porte Châssis One.",
      imagePosition: "left" as const,
    },

    galleryTitle: "Nos Réalisations Portes d'Entrée",
    galleryImages: [],
    galleryFilterTag: "portes",

    ctaTitle: "Prêt pour votre transformation ?",
    ctaSubtitle: "Contactez nos experts à Wavre pour un devis personnalisé et gratuit.",
  };

  return <ServicePageTemplate data={data} />;
}
