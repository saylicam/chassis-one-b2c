"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Thermometer, Shield, Sparkles } from "lucide-react";

// Services réorganisés en 4 catégories principales
const services = [
  {
    id: "fenetres-haute-performance",
    title: "Fenêtres Haute Performance",
    shortDescription: "Isolation exceptionnelle et confort optimal toute l'année",
    description:
      "Fenêtres haute performance alliant isolation thermique et phonique exceptionnelle. Disponibles en PVC et Aluminium pour s'adapter à tous les projets architecturaux.",
    // Image: Villa contemporaine avec fenêtres haute performance - style architectural
    image: "/images/hero-pvc.jpg",
    features: [
      { icon: Thermometer, label: "Isolation 45dB", color: "#1e40af" },
      { icon: Shield, label: "Sécurité RC2", color: "#1e40af" },
      { icon: Sparkles, label: "Design Premium", color: "#1e40af" },
    ],
    showMaterialBadge: true, // Badge "Disponible en PVC & Aluminium"
  },
  {
    id: "systemes-coulissants-panoramiques",
    title: "Systèmes Coulissants Panoramiques",
    shortDescription: "Ouvertures maximales vers l'extérieur, design épuré",
    description:
      "Systèmes coulissants panoramiques pour créer des espaces de vie exceptionnels. Profils fins et résistance maximale pour des baies vitrées spectaculaires.",
    // Image: Villa contemporaine avec baie vitrée panoramique - style architectural
    image: "/images/hero-coulissants.jpg",
    features: [
      { icon: Thermometer, label: "Profils 45mm", color: "#1e40af" },
      { icon: Shield, label: "Résistance A4", color: "#1e40af" },
      { icon: Sparkles, label: "Architecture", color: "#1e40af" },
    ],
    showMaterialBadge: false,
  },
  {
    id: "portes-entree-signature",
    title: "Portes d'Entrée Signature",
    shortDescription: "Sécurité renforcée et isolation parfaite",
    description:
      "Portes d'entrée signature alliant sécurité renforcée et isolation parfaite pour protéger votre foyer en toute élégance. Certification A2P, serrures multi-points.",
    // Image: Villa contemporaine avec porte d'entrée signature - style architectural
    image: "/images/hero-portes.jpg",
    features: [
      { icon: Thermometer, label: "Uw ≤ 1,0", color: "#1e40af" },
      { icon: Shield, label: "A2P Niveau 3", color: "#1e40af" },
      { icon: Sparkles, label: "Multi-points", color: "#1e40af" },
    ],
    showMaterialBadge: false,
  },
  {
    id: "solutions-occultation",
    title: "Solutions d'Occultation",
    shortDescription: "Protection solaire, sécurité et intimité",
    description:
      "Solutions d'occultation complètes pour un confort de vie amélioré. Protection solaire, sécurité et intimité avec motorisation domotique disponible.",
    // Image: Villa contemporaine avec solutions d'occultation - style architectural
    image: "/images/hero-occultation.jpg",
    features: [
      { icon: Thermometer, label: "Isolation", color: "#1e40af" },
      { icon: Shield, label: "Protection 95%", color: "#1e40af" },
      { icon: Sparkles, label: "Domotique", color: "#1e40af" },
    ],
    showMaterialBadge: false,
  },
];

// Fonction pour mapper les IDs de services vers les nouvelles pages
function getServiceLink(serviceId: string): string {
  const linkMap: Record<string, string> = {
    "fenetres-haute-performance": "/pvc",
    "systemes-coulissants-panoramiques": "/alu",
    "portes-entree-signature": "/portes",
    "solutions-occultation": "/volets",
  };
  return linkMap[serviceId] || `/solutions/${serviceId}`;
}

export default function ServiceGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white overflow-x-hidden">
      <div className="mx-auto max-w-full px-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 lg:mb-24 px-4 sm:px-6 md:px-8 lg:px-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 tracking-tight">
            Nos Services
          </h2>
          <p className="text-base sm:text-lg text-[#64748b] font-light max-w-2xl">
            Des solutions sur mesure pour chaque besoin, avec une qualité irréprochable et un savoir-faire belge reconnu.
          </p>
        </motion.div>

        {/* Desktop: Layout Panoramique avec Accordéon */}
        <div className="hidden lg:flex w-full h-[600px] relative">
          {services.map((service, index) => (
            <ServiceColumn
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Mobile & Tablet: Grille Verticale (Empilement Premium) */}
        <div className="lg:hidden">
          <div className="flex flex-col items-center space-y-8 px-4">
            {services.map((service, index) => (
              <MobileServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceColumn({
  service,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  service: typeof services[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative h-full flex-shrink-0 overflow-hidden group cursor-pointer"
      initial={{ flexGrow: 1 }}
      animate={{
        flexGrow: isHovered ? 2 : 1,
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{ flexBasis: 0 }}
    >
      {/* Séparateur vertical fin à gauche (sauf pour la première colonne) */}
      {index > 0 && (
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200 z-10" />
      )}

      {/* Image de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          sizes="(max-width: 768px) 100vw, 25vw"
          priority={index < 2}
        />
        {/* Dégradé linéaire du bas vers le haut */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 40%)"
          }}
        />
        {/* Overlay supplémentaire au hover */}
        <motion.div
          className="absolute inset-0 bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Contenu centré style galerie d'art */}
      <div className="relative h-full flex flex-col items-center justify-center p-8 z-20 text-center">
        
        {/* Contenu texte */}
        <div className="relative z-10 w-full max-w-md">
          {/* Badge matériaux - pour les fenêtres */}
          {service.showMaterialBadge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/40">
                Disponible en PVC & Aluminium
              </span>
            </motion.div>
          )}
          
          {/* Titre - Ultra-Bold, Blanc Pur, ombre discrète */}
          <motion.h3
            className="text-2xl lg:text-3xl xl:text-4xl font-black text-white uppercase tracking-wide mb-6 leading-tight"
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0.95 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ 
              color: "#FFFFFF",
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
              textShadow: "0 1px 2px rgba(0,0,0,0.3)"
            }}
          >
            {service.title}
          </motion.h3>

          {/* Contenu Reveal - Apparaît au hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0 }}
            className="overflow-hidden"
          >
            {/* Description courte - Blanc Pur, ombre discrète */}
            <p 
              className="text-white text-base font-normal leading-relaxed mb-8 mx-auto" 
              style={{ 
                color: "#FFFFFF",
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
                textShadow: "0 1px 2px rgba(0,0,0,0.3)"
              }}
            >
              {service.shortDescription}
            </p>

            {/* 3 Icônes minimalistes - Centrées */}
            <div className="flex items-center justify-center gap-6 mb-8">
              {service.features.map((feature, featureIndex) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.8,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isHovered ? 0.2 + featureIndex * 0.1 : 0,
                    }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <IconComponent className="h-5 w-5 text-white" style={{ color: "#FFFFFF" }} />
                    </div>
                    <span 
                      className="text-xs text-white font-medium uppercase tracking-wide" 
                      style={{ 
                        color: "#FFFFFF",
                        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
                        textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                      }}
                    >
                      {feature.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Bouton "Découvrir" - Bleu charte graphique */}
            <div className="flex justify-center">
              <Link href={getServiceLink(service.id)}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#004aad] text-white font-bold rounded-md shadow-lg hover:bg-[#003d8f] transition-all text-sm uppercase tracking-wide"
                >
                  <span>Découvrir</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileServiceCard({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="w-[92%] max-w-md relative rounded-2xl overflow-hidden shadow-xl"
    >
      {/* Image de fond avec hauteur fixe imposante */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 92vw, 50vw"
          priority={index < 2}
        />
        {/* Dégradé noir plus intense en bas pour lisibilité */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 60%, transparent 100%)"
          }}
        />
      </div>

      {/* Contenu positionné tout en bas de l'image */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
        <div className="relative z-10 w-full">
          {/* Badge matériaux - pour les fenêtres */}
          {service.showMaterialBadge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/40">
                Disponible en PVC & Aluminium
              </span>
            </motion.div>
          )}
          
          {/* Titre - Impact visuel fort */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-2xl font-black text-white uppercase tracking-wide mb-3 leading-tight" 
            style={{ 
              color: "#FFFFFF",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)"
            }}
          >
            {service.title}
          </motion.h3>

          {/* Description courte */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-base text-white font-normal leading-relaxed mb-6" 
            style={{ 
              color: "#FFFFFF",
              filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))",
              textShadow: "0 1px 3px rgba(0,0,0,0.4)"
            }}
          >
            {service.shortDescription}
          </motion.p>

          {/* Bouton "Découvrir" - Touch-friendly et premium */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex justify-center"
          >
            <Link href={getServiceLink(service.id)} className="w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[52px] bg-[#004aad] text-white font-bold rounded-lg shadow-lg hover:bg-[#003d8f] transition-all text-sm uppercase tracking-wide"
                style={{
                  boxShadow: "0 4px 12px rgba(0, 74, 173, 0.4)"
                }}
              >
                <span>Découvrir</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
