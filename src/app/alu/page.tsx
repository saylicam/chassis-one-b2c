"use client";

import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { Zap, Shield, Sparkles, DollarSign, Volume2, LockKeyhole, Palette } from "lucide-react";

export default function ALUPage() {
  const data = {
    heroTitle: "L'Excellence de l'Aluminium",
    heroSubtitle: "Grandes dimensions, rigidité exceptionnelle, design architectural. Des baies vitrées panoramiques qui redéfinissent l'espace.",
    serviceCategory: "alu" as const, // Mapping automatique vers /images/services/hero-alu.jpg
    breadcrumbPath: [
      { label: "Accueil", href: "/" },
      { label: "Nos Services", href: "/#services" },
      { label: "Châssis Aluminium", href: "/alu" },
    ],
    
    whyChooseTitle: "Pourquoi choisir l'Aluminium ?",
    editorialBlocks: [
      {
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Baie vitrée panoramique aluminium XXL",
        title: "L'Espace Sans Limite",
        titleHighlight: "Limite",
        text: "Coulissants XXL jusqu'à 6 mètres de largeur. Créez des ouvertures panoramiques spectaculaires qui redéfinissent votre relation avec l'extérieur. Votre salon se fond dans le jardin, votre terrasse devient une extension naturelle de votre intérieur. L'espace respire, la lumière inonde chaque recoin. C'est ça, vivre dans une villa d'architecte.",
        number: "01",
        imagePosition: "left",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Détail de profilé aluminium renforcé",
        title: "La Force Invisible",
        titleHighlight: "Force",
        text: "Profils renforcés de 45mm à 75mm pour des structures imposantes sans déformation. Résistance maximale aux charges et aux intempéries les plus sévères, même en bord de mer. Ces baies vitrées ne plient pas, ne se déforment pas. Elles défient le temps et les éléments avec une élégance silencieuse.",
        number: "02",
        imagePosition: "right",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Villa moderne avec baies vitrées aluminium",
        title: "Le Design Architectural",
        titleHighlight: "Architectural",
        text: "Profils fins jusqu'à 45mm pour des cadres minimalistes. Esthétique contemporaine parfaite pour les villas d'architecte et projets premium. Finitions RAL personnalisables pour s'intégrer parfaitement à votre projet. Du noir anthracite au blanc laqué, créez une harmonie architecturale unique.",
        number: "03",
        imagePosition: "left",
      },
    ],

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
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&auto=format&q=90",
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

    ctaTitle: "Prêt pour votre transformation ?",
    ctaSubtitle: "Contactez nos experts à Wavre pour un devis personnalisé et gratuit.",
  };

  return <ServicePageTemplate data={data} />;
}
