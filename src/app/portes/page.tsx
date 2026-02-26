"use client";

import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { Lock, Shield, Sparkles, DollarSign, Volume2, LockKeyhole, Palette } from "lucide-react";

export default function PortesPage() {
  const data = {
    heroTitle: "Portes d'Entrée Signature",
    heroSubtitle: "Sécurité renforcée, design d'exception, isolation parfaite. L'entrée de votre maison mérite le meilleur.",
    serviceCategory: "portes" as const, // Mapping automatique vers /images/services/hero-portes.jpg
    breadcrumbPath: [
      { label: "Accueil", href: "/" },
      { label: "Nos Services", href: "/#services" },
      { label: "Portes d'Entrée", href: "/portes" },
    ],
    
    whyChooseTitle: "Pourquoi choisir nos Portes d'Entrée ?",
    editorialBlocks: [
      {
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Détail de serrure 5 points et renforts métalliques",
        title: "La Sécurité Infaillible",
        titleHighlight: "Sécurité",
        text: "Dormez sur vos deux oreilles. La technologie anti-effraction Schüco veille sur ce que vous avez de plus cher. Serrure 5 points certifiée A2P niveau 3, renforts métalliques et verrous anti-perçage. Cette porte résiste aux tentatives d'effraction les plus sophistiquées. Votre foyer est protégé, votre famille en sécurité.",
        number: "01",
        imagePosition: "left",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Porte d'entrée anthracite avec tirants inox",
        title: "L'Isolation Parfaite",
        titleHighlight: "Parfaite",
        text: "Coefficient Uw ≤ 1,0 W/(m².K) pour une isolation thermique et phonique exceptionnelle. Le bruit de la rue, des voisins ou de la circulation disparaît dès que vous fermez la porte. Réduisez vos dépenses énergétiques tout en préservant votre confort. Votre havre de paix commence à la porte d'entrée.",
        number: "02",
        imagePosition: "right",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Porte d'entrée design avec finitions premium",
        title: "La Première Impression",
        titleHighlight: "Première",
        text: "Portes anthracite avec tirants en inox, finitions premium personnalisables. Créez une première impression mémorable pour vos visiteurs. Votre porte d'entrée reflète votre style et votre personnalité. Elle dit qui vous êtes avant même qu'on sonne. L'élégance commence ici.",
        number: "03",
        imagePosition: "left",
      },
    ],

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
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format&q=90",
      imageAlt: "Détail de poignée et finition porte d'entrée",
      title: "Le sens du détail",
      text: "Chaque élément compte. Nos portes d'entrée sont conçues avec une attention méticuleuse aux finitions. Les poignées ergonomiques, les tirants en inox brossé, les joints d'étanchéité invisibles et les cadres parfaitement alignés témoignent de notre savoir-faire artisanal. C'est cette précision qui fait la différence entre une simple porte et une porte Châssis One.",
      imagePosition: "left" as const,
    },

    galleryTitle: "Nos Réalisations Portes d'Entrée",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607688364-9e7b8b5e5e5e?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&auto=format&q=90",
    ],

    ctaTitle: "Prêt pour votre transformation ?",
    ctaSubtitle: "Contactez nos experts à Wavre pour un devis personnalisé et gratuit.",
  };

  return <ServicePageTemplate data={data} />;
}
