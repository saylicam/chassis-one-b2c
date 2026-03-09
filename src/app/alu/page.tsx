"use client";

import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { Zap, Shield, Sparkles, DollarSign, Volume2, LockKeyhole, Palette } from "lucide-react";

const coulissantsServiceData = {
  title: "Pourquoi choisir l'Aluminium ?",
  sections: [
    {
      id: "01",
      title: "L'Espace Sans Limite",
      text: "Coulissants XXL jusqu'à 6 mètres de largeur. Créez des ouvertures panoramiques spectaculaires qui redéfinissent votre relation avec l'extérieur. Votre salon se fond dans le jardin, votre terrasse devient une extension naturelle de votre intérieur. L'espace respire, la lumière inonde chaque recoin. C'est ça, vivre dans une villa d'architecte.",
      img: "/images/services/alu/1.jpg",
      alt: "Baie vitrée coulissante en aluminium ouvrant sur le jardin",
    },
    {
      id: "02",
      title: "La Force Invisible",
      text: "Profils renforcés de 45mm à 75mm pour des structures imposantes sans déformation. Résistance maximale aux charges et aux intempéries les plus sévères, même en bord de mer. Ces baies vitrées ne plient pas, ne se déforment pas. Elles défient le temps et les éléments avec une élégance silencieuse.",
      img: "/images/services/alu/2.jpg",
      alt: "Détail de profilé aluminium renforcé pour baie vitrée",
    },
    {
      id: "03",
      title: "Le Design Architectural",
      text: "Profils fins jusqu'à 45mm pour des cadres minimalistes. Esthétique contemporaine parfaite pour les villas d'architecte et projets premium. Finitions RAL personnalisables pour s'intégrer parfaitement à votre projet. Du noir anthracite au blanc laqué, créez une harmonie architecturale unique.",
      img: "/images/services/alu/3.jpg",
      alt: "Façade contemporaine avec grandes baies vitrées aluminium",
    },
  ],
};

export default function ALUPage() {
  const data = {
    heroTitle: "LA PUISSANCE DU DESIGN, LA CLARTÉ ABSOLUE",
    heroSubtitle:
      "Repoussez les limites de l'architecture avec la finesse de l'aluminium. Maximisez vos surfaces vitrées pour une luminosité sans égale.",
    serviceCategory: "alu" as const, // Mapping automatique vers /images/services/hero-alu.jpg
    breadcrumbPath: [
      { label: "Accueil", href: "/" },
      { label: "Nos Services", href: "/#services" },
      { label: "Châssis Aluminium", href: "/alu" },
    ],
    
    whyChooseTitle: coulissantsServiceData.title,
    editorialBlocks: coulissantsServiceData.sections.map((section, index) => ({
      image: section.img,
      imageAlt: section.alt,
      title: section.title,
      text: section.text,
      number: section.id,
      imagePosition: index % 2 === 0 ? "left" : "right",
      serviceName: "Systèmes coulissants aluminium",
    })),

    excellenceTitle: "L'Excellence Technique au service de votre confort",
    excellenceSubtitle: "Une baie vitrée qui transforme votre espace de vie. Chaque dimension, chaque détail technique est pensé pour créer l'ouverture parfaite.",
    keyBenefits: [
      {
        icon: Zap,
        title: "Ouvertures XXL",
        description: "Coulissants jusqu'à 6 mètres de largeur pour créer des espaces de vie exceptionnels. Le système Schüco AWS 75.SI+ permet des baies vitrées panoramiques qui redéfinissent votre relation avec l'extérieur.",
      },
      {
        icon: Shield,
        title: "Résistance Exceptionnelle",
        description: "Profils renforcés de 45mm à 75mm pour des structures imposantes sans déformation. Résistance maximale aux intempéries les plus sévères, même en bord de mer (certification A4).",
      },
      {
        icon: LockKeyhole,
        title: "Sécurité Renforcée",
        description: "Multi-points de fermeture et résistance à l'effraction certifiée. Protégez votre foyer avec des baies vitrées qui allient transparence maximale et sécurité optimale.",
      },
      {
        icon: Palette,
        title: "Design Architectural",
        description: "Finitions RAL personnalisables pour s'intégrer parfaitement à votre projet. Du noir anthracite au blanc laqué, créez une harmonie architecturale unique.",
      },
    ],
    detailSection: {
      image: "/images/details/alu-detail.jpg",
      imageAlt: "Détail de finition aluminium et poignée",
      title: "Le sens du détail",
      text: "L'excellence se cache dans les détails. Nos baies vitrées aluminium sont conçues avec une précision chirurgicale. Les profils ultra-fins, les joints d'étanchéité invisibles et les mécanismes de coulissement silencieux témoignent de notre savoir-faire. Chaque élément est pensé pour offrir une expérience d'ouverture fluide et élégante.",
      imagePosition: "right" as const,
    },

    galleryTitle: "Nos Réalisations Aluminium",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607688364-9e7b8b5e5e5e?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format&q=90",
    ],
    galleryFilterTag: "alu" as const,

    ctaTitle: "Prêt pour votre transformation ?",
    ctaSubtitle: "Contactez nos experts à Wavre pour un devis personnalisé et gratuit.",
  };

  return <ServicePageTemplate data={data} />;
}
