"use client";

import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { Sun, Shield, Sparkles, DollarSign, Volume2, LockKeyhole, Palette } from "lucide-react";

const voletsServiceData = {
  title: "Pourquoi choisir nos Solutions d'Occultation ?",
  sections: [
    {
      id: "01",
      title: "Le Confort Intelligent",
      text: "Isolation supplémentaire jusqu'à -15% d'énergie. Régulation naturelle de la température pour un confort optimal été comme hiver. Vos volets travaillent pour vous, créant une barrière thermique invisible qui préserve votre intérieur des variations extérieures. L'été, la fraîcheur reste. L'hiver, la chaleur se conserve. C'est ça, le confort intelligent.",
      img: "/images/services/volets/1.jpg",
      alt: "Volet roulant motorisé sur façade moderne",
    },
    {
      id: "02",
      title: "L'Intimité Absolue",
      text: "Occultation complète pour préserver votre intimité. Protection solaire efficace jusqu'à 95% pour un confort visuel optimal. Derrière ces volets, vous êtes chez vous, vraiment. Le regard des voisins, la lumière agressive du matin, tout disparaît. Votre espace privé devient un sanctuaire où vous contrôlez chaque rayon de lumière.",
      img: "/images/services/volets/2.jpg",
      alt: "Intérieur avec volets fermés offrant une intimité totale",
    },
    {
      id: "03",
      title: "La Domotique Élégante",
      text: "Contrôle total via smartphone ou tablette. Automatisation intelligente pour une gestion optimale de votre confort et de votre sécurité. Ouvrez vos volets depuis votre lit, programmez-les selon vos habitudes, créez des scénarios d'éclairage naturels. La technologie au service de votre bien-être, sans complexité.",
      img: "/images/services/volets/3.jpg",
      alt: "Contrôle domotique de volets roulants motorisés",
    },
  ],
};

export default function VoletsPage() {
  const data = {
    heroTitle: "MAÎTRISEZ LA LUMIÈRE, PRÉSERVEZ VOTRE INTIMITÉ",
    heroSubtitle:
      "Transformez votre intérieur en un sanctuaire protégé. Nos solutions régulent la température et vous isolent des regards indiscrets.",
    serviceCategory: "volets" as const, // Mapping automatique vers /images/services/hero-volets.jpg
    breadcrumbPath: [
      { label: "Accueil", href: "/" },
      { label: "Nos Services", href: "/#services" },
      { label: "Solutions d'Occultation", href: "/volets" },
    ],
    
    whyChooseTitle: voletsServiceData.title,
    editorialBlocks: voletsServiceData.sections.map((section, index) => ({
      image: section.img,
      imageAlt: section.alt,
      title: section.title,
      text: section.text,
      number: section.id,
      imagePosition: index % 2 === 0 ? "left" : "right",
      serviceName: "Solutions d'Occultation",
    })),

    excellenceTitle: "L'Excellence Technique au service de votre confort",
    excellenceSubtitle: "Des volets qui améliorent votre qualité de vie. Chaque détail technique est pensé pour votre confort thermique, votre intimité et votre sécurité.",
    keyBenefits: [
      {
        icon: DollarSign,
        title: "Économies d'Énergie",
        description: "Isolation supplémentaire jusqu'à -15% d'énergie. Régulation naturelle de la température pour un confort optimal été comme hiver. Réduisez vos factures tout en préservant votre confort. Un investissement qui se rentabilise rapidement.",
      },
      {
        icon: Sun,
        title: "Protection Solaire",
        description: "Protection solaire efficace jusqu'à 95% pour un confort visuel optimal. Protégez vos meubles des rayons UV et régulez la température de votre intérieur. Profitez de la lumière naturelle sans les inconvénients.",
      },
      {
        icon: LockKeyhole,
        title: "Sécurité Renforcée",
        description: "Occultation complète et résistance à l'effraction. Protégez votre foyer avec des volets qui ajoutent une couche supplémentaire de sécurité. Dormez sur vos deux oreilles.",
      },
      {
        icon: Palette,
        title: "Motorisation Domotique",
        description: "Contrôle total via smartphone ou tablette. Automatisation intelligente pour une gestion optimale de votre confort et de votre sécurité. Finitions RAL personnalisables pour s'intégrer parfaitement à votre façade.",
      },
    ],
    detailSection: {
      image: "/images/details/volets-detail.jpg",
      imageAlt: "Détail de volet roulant et motorisation",
      title: "Le sens du détail",
      text: "Chaque élément compte. Nos volets roulants sont conçus avec une attention méticuleuse aux finitions. Les lames parfaitement alignées, les mécanismes silencieux, les finitions RAL personnalisables et l'intégration discrète de la motorisation témoignent de notre savoir-faire artisanal. C'est cette précision qui fait la différence entre un simple volet et un volet Châssis One.",
      imagePosition: "right" as const,
    },

    galleryTitle: "Nos Réalisations Volets",
    galleryImages: [],
    galleryFilterTag: "volets",

    ctaTitle: "Prêt pour votre transformation ?",
    ctaSubtitle: "Contactez nos experts à Wavre pour un devis personnalisé et gratuit.",
  };

  return <ServicePageTemplate data={data} />;
}
