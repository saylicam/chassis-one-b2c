"use client";

import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { Sun, Shield, Sparkles, DollarSign, Volume2, LockKeyhole, Palette } from "lucide-react";

export default function VoletsPage() {
  const data = {
    heroTitle: "Solutions d'Occultation Premium",
    heroSubtitle: "Confort thermique, intimité totale, protection solaire optimale. Des volets qui améliorent votre qualité de vie au quotidien.",
    serviceCategory: "volets" as const, // Mapping automatique vers /images/services/hero-volets.jpg
    breadcrumbPath: [
      { label: "Accueil", href: "/" },
      { label: "Nos Services", href: "/#services" },
      { label: "Solutions d'Occultation", href: "/volets" },
    ],
    
    whyChooseTitle: "Pourquoi choisir nos Solutions d'Occultation ?",
    editorialBlocks: [
      {
        image: "https://images.unsplash.com/photo-1600607688364-9e7b8b5e5e5e?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Volet roulant motorisé sur façade moderne",
        title: "Le Confort Intelligent",
        titleHighlight: "Intelligent",
        text: "Isolation supplémentaire jusqu'à -15% d'énergie. Régulation naturelle de la température pour un confort optimal été comme hiver. Vos volets travaillent pour vous, créant une barrière thermique invisible qui préserve votre intérieur des variations extérieures. L'été, la fraîcheur reste. L'hiver, la chaleur se conserve. C'est ça, le confort intelligent.",
        number: "01",
        imagePosition: "left",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Intérieur avec volets fermés, intimité totale",
        title: "L'Intimité Absolue",
        titleHighlight: "Intimité",
        text: "Occultation complète pour préserver votre intimité. Protection solaire efficace jusqu'à 95% pour un confort visuel optimal. Derrière ces volets, vous êtes chez vous, vraiment. Le regard des voisins, la lumière agressive du matin, tout disparaît. Votre espace privé devient un sanctuaire où vous contrôlez chaque rayon de lumière.",
        number: "02",
        imagePosition: "right",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Contrôle domotique de volets roulants",
        title: "La Domotique Élégante",
        titleHighlight: "Élégante",
        text: "Contrôle total via smartphone ou tablette. Automatisation intelligente pour une gestion optimale de votre confort et de votre sécurité. Ouvrez vos volets depuis votre lit, programmez-les selon vos habitudes, créez des scénarios d'éclairage naturels. La technologie au service de votre bien-être, sans complexité.",
        number: "03",
        imagePosition: "left",
      },
    ],

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
      image: "https://images.unsplash.com/photo-1600607688364-9e7b8b5e5e5e?w=800&h=600&fit=crop&auto=format&q=90",
      imageAlt: "Détail de volet roulant et motorisation",
      title: "Le sens du détail",
      text: "Chaque élément compte. Nos volets roulants sont conçus avec une attention méticuleuse aux finitions. Les lames parfaitement alignées, les mécanismes silencieux, les finitions RAL personnalisables et l'intégration discrète de la motorisation témoignent de notre savoir-faire artisanal. C'est cette précision qui fait la différence entre un simple volet et un volet Châssis One.",
      imagePosition: "right" as const,
    },

    galleryTitle: "Nos Réalisations Volets",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607688364-9e7b8b5e5e5e?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607688364-9e7b8b5e5e5e?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format&q=90",
    ],

    ctaTitle: "Prêt pour votre transformation ?",
    ctaSubtitle: "Contactez nos experts à Wavre pour un devis personnalisé et gratuit.",
  };

  return <ServicePageTemplate data={data} />;
}
