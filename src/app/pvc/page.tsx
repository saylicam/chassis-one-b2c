"use client";

import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { Thermometer, Shield, Sparkles, DollarSign, Volume2, LockKeyhole, Palette } from "lucide-react";

const pvcServiceData = {
  title: "Pourquoi choisir le PVC ?",
  sections: [
    {
      id: "01",
      title: "L'Isolation Absolue",
      text: "Oubliez le vent et le froid. Nos châssis créent une bulle de sérénité thermique dans votre foyer. Le profilé Schüco Living 82 transforme chaque fenêtre en barrière invisible contre les intempéries. Vous ne sentirez plus jamais ce courant d'air furtif qui glisse sous la porte. Votre maison devient un sanctuaire de chaleur, été comme hiver.",
      img: "/images/services/pvc/1.jpg",
      alt: "Châssis PVC haute performance installés sur une façade rénovée",
    },
    {
      id: "02",
      title: "Le Silence Sans Compromis",
      text: "Le bruit de la rue disparaît. Avec une isolation acoustique jusqu'à 45 dB, profitez d'un calme absolu dans votre intérieur, même dans les zones les plus bruyantes. Les conversations de la terrasse du voisin, le ronronnement des voitures, les aboiements lointains... Tout s'efface. Votre havre de paix vous attend derrière ces fenêtres.",
      img: "/images/services/pvc/2.jpg",
      alt: "Fenêtres PVC offrant une isolation acoustique renforcée",
    },
    {
      id: "03",
      title: "La Simplicité Élégante",
      text: "Un simple nettoyage à l'eau savonneuse suffit. Résistance naturelle aux intempéries et aux UV sans traitement particulier. Pas de peinture à refaire, pas de traitement à appliquer. Vos fenêtres restent impeccables année après année, sans effort. Le luxe, c'est aussi la simplicité.",
      img: "/images/services/pvc/3.jpg",
      alt: "Détail de finition élégante de châssis PVC",
    },
  ],
};

export default function PVCPage() {
  const data = {
    heroTitle: "LE CONFORT THERMIQUE, LE DESIGN EN PLUS",
    heroSubtitle:
      "Alliez haute performance isolante et esthétique moderne. Nos châssis PVC Signature vous offrent une barrière thermique exceptionnelle pour une maison chaleureuse.",
    serviceCategory: "pvc" as const, // Mapping automatique vers /images/services/hero-pvc.jpg
    breadcrumbPath: [
      { label: "Accueil", href: "/" },
      { label: "Nos Services", href: "/#services" },
      { label: "Châssis PVC", href: "/pvc" },
    ],
    
    whyChooseTitle: pvcServiceData.title,
    editorialBlocks: pvcServiceData.sections.map((section, index) => ({
      image: section.img,
      imageAlt: section.alt,
      title: section.title,
      text: section.text,
      number: section.id,
      imagePosition: index % 2 === 0 ? "left" : "right",
      serviceName: "Fenêtres PVC",
    })),

    excellenceTitle: "L'Excellence Technique au service de votre confort",
    excellenceSubtitle: "Une fenêtre qui change votre regard sur l'extérieur. Chaque détail technique est pensé pour améliorer votre quotidien.",
    keyBenefits: [
      {
        icon: DollarSign,
        title: "Économies d'Énergie",
        description: "Grâce au profilé Schüco Living 82, la chaleur reste à l'intérieur de votre maison. Réduisez vos factures de chauffage jusqu'à 30% tout en préservant l'environnement. Un investissement qui se rentabilise rapidement.",
      },
      {
        icon: Volume2,
        title: "Sérénité Acoustique",
        description: "Le bruit de la rue disparaît. Avec une isolation acoustique jusqu'à 45 dB, profitez d'un silence absolu dans votre intérieur, même dans les zones les plus bruyantes. Votre havre de paix vous attend.",
      },
      {
        icon: LockKeyhole,
        title: "Sécurité Renforcée",
        description: "Multi-points de fermeture et résistance à l'effraction certifiée RC2. Protégez votre foyer avec des fenêtres qui résistent aux tentatives d'intrusion. Dormez sur vos deux oreilles.",
      },
      {
        icon: Palette,
        title: "Design Personnalisé",
        description: "Finitons et couleurs sur mesure pour s'adapter à votre style. Du blanc classique aux teintes anthracite, créez une harmonie parfaite entre votre intérieur et votre extérieur.",
      },
    ],
    detailSection: {
      image: "/images/details/pvc-detail.jpg",
      imageAlt: "Détail de finition et poignée PVC",
      title: "Le sens du détail",
      text: "Chaque élément compte. Nos fenêtres PVC sont conçues avec une attention méticuleuse aux finitions. Les poignées ergonomiques, les joints d'étanchéité invisibles et les cadres parfaitement alignés témoignent de notre savoir-faire artisanal. C'est cette précision qui fait la différence entre une simple fenêtre et une fenêtre Châssis One.",
      imagePosition: "left" as const,
    },

    galleryTitle: "Nos Réalisations PVC",
    galleryImages: [],
    galleryFilterTag: "pvc",

    ctaTitle: "Prêt pour votre transformation ?",
    ctaSubtitle: "Contactez nos experts à Wavre pour un devis personnalisé et gratuit.",
  };

  return <ServicePageTemplate data={data} />;
}
