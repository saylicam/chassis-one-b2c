"use client";

import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { Thermometer, Shield, Sparkles, DollarSign, Volume2, LockKeyhole, Palette } from "lucide-react";

export default function PVCPage() {
  const data = {
    heroTitle: "L'Équilibre Parfait du PVC",
    heroSubtitle: "Isolation exceptionnelle, confort optimal, rapport qualité-prix inégalé. Des fenêtres qui transforment votre quotidien.",
    serviceCategory: "pvc" as const, // Mapping automatique vers /images/services/hero-pvc.jpg
    breadcrumbPath: [
      { label: "Accueil", href: "/" },
      { label: "Nos Services", href: "/#services" },
      { label: "Châssis PVC", href: "/pvc" },
    ],
    
    whyChooseTitle: "Pourquoi choisir le PVC ?",
    editorialBlocks: [
      {
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Détail de soudure invisible de châssis PVC",
        title: "L'Isolation Absolue",
        titleHighlight: "Absolue",
        text: "Oubliez le vent et le froid. Nos châssis créent une bulle de sérénité thermique dans votre foyer. Le profilé Schüco Living 82 transforme chaque fenêtre en barrière invisible contre les intempéries. Vous ne sentirez plus jamais ce courant d'air furtif qui glisse sous la porte. Votre maison devient un sanctuaire de chaleur, été comme hiver.",
        number: "01",
        imagePosition: "left",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Intérieur lumineux avec fenêtres PVC",
        title: "Le Silence Sans Compromis",
        titleHighlight: "Silence",
        text: "Le bruit de la rue disparaît. Avec une isolation acoustique jusqu'à 45 dB, profitez d'un calme absolu dans votre intérieur, même dans les zones les plus bruyantes. Les conversations de la terrasse du voisin, le ronronnement des voitures, les aboiements lointains... Tout s'efface. Votre havre de paix vous attend derrière ces fenêtres.",
        number: "02",
        imagePosition: "right",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&auto=format&q=90",
        imageAlt: "Détail de poignée et finition PVC",
        title: "La Simplicité Élégante",
        titleHighlight: "Élégante",
        text: "Un simple nettoyage à l'eau savonneuse suffit. Résistance naturelle aux intempéries et aux UV sans traitement particulier. Pas de peinture à refaire, pas de traitement à appliquer. Vos fenêtres restent impeccables année après année, sans effort. Le luxe, c'est aussi la simplicité.",
        number: "03",
        imagePosition: "left",
      },
    ],

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
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format&q=90",
      imageAlt: "Détail de finition et poignée PVC",
      title: "Le sens du détail",
      text: "Chaque élément compte. Nos fenêtres PVC sont conçues avec une attention méticuleuse aux finitions. Les poignées ergonomiques, les joints d'étanchéité invisibles et les cadres parfaitement alignés témoignent de notre savoir-faire artisanal. C'est cette précision qui fait la différence entre une simple fenêtre et une fenêtre Châssis One.",
      imagePosition: "left" as const,
    },

    galleryTitle: "Nos Réalisations PVC",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607688364-9e7b8b5e5e5e?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format&q=90",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&auto=format&q=90",
    ],

    ctaTitle: "Prêt pour votre transformation ?",
    ctaSubtitle: "Contactez nos experts à Wavre pour un devis personnalisé et gratuit.",
  };

  return <ServicePageTemplate data={data} />;
}
