"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, type ElementType } from "react";
import { ArrowRight, CheckCircle, Thermometer, Shield, Sparkles, Zap, Lock, Sun, DollarSign, Volume2, LockKeyhole, Palette, Award, Users, Headphones, FileText, ChevronRight, Home } from "lucide-react";
import { realisationProjects } from "@/data/realisations";
import Button from "@/components/ui/Button";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { getHeroImage } from "@/lib/heroImages";

// Variants d'animation identiques à la page d'accueil
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface Benefit {
  icon: ElementType;
  title: string;
  description: string;
}

interface EditorialBlock {
  image?: string;
  imageAlt?: string;
  title: string;
  titleHighlight?: string; // Partie du titre à mettre en évidence (italique ou gras)
  text: string;
  number: string; // "01", "02", etc.
  imagePosition: "left" | "right";
  serviceName?: string;
}

interface KeyBenefit {
  icon: ElementType;
  title: string;
  description: string;
}

interface DetailSection {
  image: string;
  imageAlt: string;
  title: string;
  text: string;
  imagePosition: "left" | "right";
}

interface ServicePageData {
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string; // Optionnel : si non fourni, sera généré automatiquement
  serviceCategory?: 'pvc' | 'alu' | 'portes' | 'volets'; // Catégorie pour mapping automatique
  breadcrumbPath?: { label: string; href: string }[]; // Fil d'Ariane personnalisé
  whyChooseTitle: string;
  benefits?: Benefit[]; // Optionnel pour rétrocompatibilité
  editorialBlocks?: EditorialBlock[]; // Nouvelle structure éditoriale
  excellenceTitle: string;
  excellenceSubtitle: string;
  keyBenefits: KeyBenefit[];
  detailSection?: DetailSection;
  galleryTitle: string;
  galleryImages: string[];
  galleryFilterTag?: "pvc" | "alu" | "portes" | "volets";
  ctaTitle: string;
  ctaSubtitle: string;
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

// object-position par index pour cadrage "matière" (isolation / silence / sécurité)
const mobileImagePositions: Record<number, string> = {
  0: "center",      // Isolation : coupe profilé / triple vitrage
  1: "center 30%",  // Silence : joint d'étanchéité
  2: "center 60%",  // Sécurité : quincaillerie / cylindre
};

function SplitScreenBlock({
  block,
  index,
}: {
  block: EditorialBlock;
  index: number;
}) {
  const [hasError, setHasError] = useState(false);
  const isImageLeft = block.imagePosition === "left" || (block.imagePosition !== "right" && index % 2 === 0);
  const mobileObjectPosition = mobileImagePositions[index % 3] ?? "center";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 min-h-0 w-full lg:h-[80vh] bg-white">
      {/* Mobile : ordre 1 = Titre, 2 = Image, 3 = Texte. Desktop : image une colonne, titre+texte l'autre */}
      {/* Titre — mobile first, desktop en haut de la colonne texte */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`order-1 flex items-center px-4 pt-8 pb-4 lg:px-12 lg:pt-16 lg:pb-0 ${
          isImageLeft ? "lg:col-start-2 lg:row-start-1" : "lg:col-start-1 lg:row-start-1"
        }`}
      >
        <h3
          className="text-lg sm:text-2xl lg:text-4xl font-extralight text-[#1e40af] leading-tight uppercase tracking-[0.12em] max-w-xl"
          style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontWeight: 200,
          }}
        >
          {block.title}
        </h3>
      </motion.div>

      {/* Image — mobile : portrait 4/5, pleine largeur, arrondi 24px, marges verticales */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`order-2 relative w-full overflow-hidden rounded-[24px] lg:rounded-none my-4 lg:my-0 aspect-[4/5] lg:aspect-auto lg:h-full lg:row-span-2 ${
          isImageLeft ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-2 lg:row-start-1"
        }`}
      >
        <div className="absolute inset-0">
          {hasError || !block.image ? (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center rounded-[24px] lg:rounded-none">
              <p className="text-sm text-slate-400 font-light px-6 text-center max-w-md">
                {`En attente de visuel : ${block.serviceName ?? "Châssis One"} - Section ${block.number}`}
              </p>
            </div>
          ) : (
            <Image
              src={block.image}
              alt={block.imageAlt || block.title}
              fill
              className="object-cover rounded-[24px] lg:rounded-none"
              style={{
                objectPosition: mobileObjectPosition,
              }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setHasError(true)}
            />
          )}
        </div>
      </motion.div>

      {/* Texte explicatif — mobile après l'image, desktop sous le titre */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        className={`order-3 flex items-center px-4 pb-10 lg:px-12 lg:py-16 ${
          isImageLeft ? "lg:col-start-2 lg:row-start-2" : "lg:col-start-1 lg:row-start-2"
        }`}
      >
        <p
          className="text-base sm:text-lg lg:text-xl text-[#1f2937] font-light leading-[1.9] max-w-xl"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        >
          {block.text}
        </p>
      </motion.div>
    </div>
  );
}

function MobileBenefitCard({
  block,
  index,
}: {
  block: EditorialBlock;
  index: number;
}) {
  const [hasError, setHasError] = useState(false);
  const mobileObjectPosition = mobileImagePositions[index % 3] ?? "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {/* Image plein format, type magazine d'architecture */}
      <div className="relative w-full h-[260px] overflow-hidden rounded-lg bg-slate-100">
        {hasError || !block.image ? (
          <div className="flex h-full w-full items-center justify-center px-4">
            <span className="text-[11px] text-slate-400 text-center">
              {block.serviceName ?? "Châssis One"}
            </span>
          </div>
        ) : (
          <Image
            src={block.image}
            alt={block.imageAlt || block.title}
            fill
            className="object-cover"
            style={{ objectPosition: mobileObjectPosition }}
            sizes="100vw"
            onError={() => setHasError(true)}
          />
        )}
      </div>

      {/* Texte sur fond blanc pur, sous l'image */}
      <div className="pt-4 text-left">
        <h3
          className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-900 mb-2"
          style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontWeight: 500,
          }}
        >
          {block.title}
        </h3>
        <p
          className="text-sm text-slate-700 leading-[1.6]"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        >
          {block.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  // Déterminer l'image Hero : priorité à heroImage explicite, sinon mapping automatique
  const heroImageSrc = data.heroImage || (data.serviceCategory ? getHeroImage(data.serviceCategory) : '/images/services/hero-default.jpg');
  
  // Image macro "Excellence Technique" : /public/images/details/{service}-excellence.jpg
  const getMacroImage = () => {
    switch (data.serviceCategory) {
      case 'pvc':
        return "/images/details/pvc-excellence.jpg";
      case 'alu':
        return "/images/details/alu-excellence.jpg";
      case 'portes':
        return "/images/details/portes-excellence.jpg";
      case 'volets':
        return "/images/details/volets-excellence.jpg";
      default:
        return "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&auto=format&q=95";
    }
  };

  const galleryImages =
    data.galleryFilterTag && data.galleryFilterTag !== "volets"
      ? realisationProjects
          .filter((project) => project.tag === data.galleryFilterTag)
          .map((project) => project.image)
      : data.galleryImages;
  
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section Service — mobile: 60vh, cadrage bas, overlay premium */}
        <section className="relative h-[60vh] md:min-h-screen md:h-auto flex items-center overflow-hidden pt-14 md:pt-20">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
              style={{
                backgroundImage: `url(${heroImageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
              }}
            />
            <div
              className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
              style={{
                backgroundImage: `url(${heroImageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Overlay global pour lisibilité, plus léger sur mobile */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.6)]"
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 py-24 sm:py-32 lg:py-48 w-full flex justify-center md:block">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl w-full text-center md:text-left"
            >
              {data.breadcrumbPath && (
                <motion.nav
                  variants={itemVariants}
                  className="mb-6 sm:mb-8 flex justify-center md:justify-start"
                  aria-label="Fil d'Ariane"
                >
                  <ol className="flex items-center gap-1.5 text-xs text-white/70">
                    {data.breadcrumbPath.map((item, index) => (
                      <li key={index} className="flex items-center gap-1.5">
                        {index === 0 ? (
                          <Link href={item.href} className="hover:text-white transition-colors">
                            <Home className="h-3 w-3" />
                          </Link>
                        ) : (
                          <>
                            <ChevronRight className="h-2.5 w-2.5 text-white/50" />
                            <Link 
                              href={item.href} 
                              className="hover:text-white transition-colors"
                            >
                              {item.label}
                            </Link>
                          </>
                        )}
                      </li>
                    ))}
                  </ol>
                </motion.nav>
              )}

              {/* Bloc texte Hero — typographie architecturale alignée avec la home */}
              <motion.div variants={itemVariants} className="mb-10 sm:mb-12 max-w-3xl mx-auto md:mx-0">
                <div className="inline-block">
                  <h1
                    className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-light mb-3 sm:mb-5 leading-[1.2] sm:leading-[1.15] uppercase text-white tracking-[0.12em]"
                    style={{
                      color: "#FFFFFF",
                      letterSpacing: "0.12em",
                      textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
                      fontFamily:
                        "var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Montserrat', sans-serif)",
                    }}
                  >
                    {data.heroTitle}
                  </h1>
                </div>
                <p
                  className="mt-4 text-xs sm:text-base lg:text-xl leading-relaxed font-light text-white/80"
                  style={{
                    fontFamily:
                      "var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Montserrat', sans-serif)",
                  }}
                >
                  {data.heroSubtitle}
                </p>
              </motion.div>

              {/* CTAs — centrés sur mobile */}
              <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 mb-16 items-center md:items-start">
                <Link href="/devis" className="w-full sm:w-auto max-w-sm md:max-w-none">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 border border-white text-white text-[10px] tracking-[0.2em] uppercase rounded-full bg-transparent backdrop-blur-sm shadow-none hover:shadow-none transition-all md:gap-3 md:px-8 md:py-4 md:bg-gradient-to-r md:from-[#1e40af] md:to-[#1e3a8a] md:border-transparent md:text-sm md:tracking-normal md:rounded-lg md:shadow-xl md:hover:shadow-2xl"
                  >
                    DEMANDER UN DEVIS
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section "Pourquoi choisir [Produit] ?" */}
        {data.editorialBlocks ? (
          <section className="relative w-full bg-white overflow-hidden">
            {/* Titre de section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="py-16 lg:py-24 px-8 lg:px-16 text-center"
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-[#1e40af] mb-4 leading-tight uppercase tracking-[0.12em]"
                style={{
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontWeight: 200,
                }}
              >
                {data.whyChooseTitle}
              </h2>
            </motion.div>

            {/* Mobile: cartes pleine largeur, séquence immersive */}
            <div className="lg:hidden px-4 pb-16 space-y-16">
              {data.editorialBlocks.map((block, index) => (
                <MobileBenefitCard key={index} block={block} index={index} />
              ))}
            </div>

            {/* Desktop: Split-Screen Edge-to-Edge */}
            <div className="hidden lg:block">
              {data.editorialBlocks.map((block, index) => (
                <SplitScreenBlock key={index} block={block} index={index} />
              ))}
            </div>
          </section>
        ) : (
          // Fallback pour l'ancienne structure (rétrocompatibilité)
          <section className="py-20 lg:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  {data.whyChooseTitle}
                </h2>
              </motion.div>

              {data.benefits && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {data.benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#004aad]/10 mb-6">
                          <IconComponent className="h-7 w-7 text-[#004aad]" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-base text-slate-700 font-normal leading-relaxed">
                          {benefit.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Séparateur élégant */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Section "L'Excellence Technique au service de votre confort" - Bento Grid Architectural */}
        <section className="py-16 lg:py-24 bg-[#F8F9FA]">
          <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12 lg:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                {data.excellenceTitle}
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                {data.excellenceSubtitle}
              </p>
            </motion.div>

            {/* Bento Grid Asymétrique : Image macro (2/3) + Arguments techniques (1/3) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Bloc principal (Gauche - 2/3) : Image macro de détail */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-2 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={getMacroImage()}
                  alt="Détail macro technique"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  quality={95}
                />
                {/* Overlay subtil pour lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

              {/* Blocs secondaires (Droite - 1/3) : Arguments techniques empilés */}
              <div className="lg:col-span-1 space-y-6 lg:space-y-8">
                {data.keyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="relative backdrop-blur-md bg-white/60 border border-white/20 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    {/* Numéro stylisé (remplace l'icône) */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <span 
                          className="text-4xl lg:text-5xl font-bold text-[#004aad]/20 leading-none tracking-tight"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      {/* Ligne de séparation dorée/marine */}
                      <div className="flex-1 pt-3">
                        <div className="h-[1px] w-5 bg-[#004aad]/40" />
                      </div>
                    </div>

                    {/* Titre et description */}
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 leading-tight tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-500 font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Séparateur élégant */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Section "Le sens du détail" */}
        {data.detailSection && (
          <section className="py-16 lg:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${data.detailSection.imagePosition === "right" ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: data.detailSection.imagePosition === "right" ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative rounded-2xl overflow-hidden ${data.detailSection.imagePosition === "right" ? "lg:col-start-2" : ""}`}
                >
                  <Image
                    src={data.detailSection.image}
                    alt={data.detailSection.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                {/* Texte élégant */}
                <motion.div
                  initial={{ opacity: 0, x: data.detailSection.imagePosition === "right" ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className={`space-y-6 ${data.detailSection.imagePosition === "right" ? "lg:col-start-1" : ""}`}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    {data.detailSection.title}
                  </h2>
                  <p className="text-lg text-slate-700 font-normal leading-relaxed">
                    {data.detailSection.text}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Séparateur élégant */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Section "Engagement Châssis One" */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Engagement Châssis One
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#004aad]/10 mb-6 border border-[#004aad]/20">
                  <Award className="h-8 w-8 text-[#004aad]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Garantie 10 ans</h3>
                <p className="text-base text-slate-700 font-normal leading-relaxed">
                  Sur la pose et les matériaux pour votre tranquillité d'esprit
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#004aad]/10 mb-6 border border-[#004aad]/20">
                  <Users className="h-8 w-8 text-[#004aad]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pose par nos experts</h3>
                <p className="text-base text-slate-700 font-normal leading-relaxed">
                  Installation professionnelle par nos artisans qualifiés
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#004aad]/10 mb-6 border border-[#004aad]/20">
                  <Headphones className="h-8 w-8 text-[#004aad]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Service après-vente local</h3>
                <p className="text-base text-slate-700 font-normal leading-relaxed">
                  Support et maintenance à Wavre et dans le Brabant Wallon
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Séparateur élégant */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Galerie de Réalisations */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                {data.galleryTitle}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Réalisation ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final - Split-Screen Luxe Minimaliste */}
        <section className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
          {/* Version desktop : split-screen image + texte */}
          <div className="hidden lg:grid lg:grid-cols-10 h-full min-h-[500px] lg:min-h-[600px]">
            {/* GAUCHE (60%) - Visuel artistique en noir et blanc */}
            <motion.div
              className="relative hidden lg:block lg:col-span-6 overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <Image
                  src={heroImageSrc}
                  alt="Détail architectural"
                  fill
                  className="object-cover object-center grayscale brightness-90 contrast-110"
                  sizes="60vw"
                />
                {/* Overlay très subtil pour renforcer le contraste */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* DROITE (40%) - Action sur fond blanc pur (desktop uniquement) */}
            <div className="lg:col-span-4 bg-white hidden lg:flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-md space-y-6 sm:space-y-8"
              >
                {/* Titre "Haute Couture" */}
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 tracking-widest uppercase leading-tight">
                    L'EXCELLENCE<br />SUR MESURE
                  </h2>
                  {/* Ligne fine de séparation */}
                  <div className="h-px w-12 sm:w-16 bg-[#004aad] mt-4 sm:mt-6" />
                </div>

                {/* Appel à l'action */}
                <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    Transformez votre vision en réalité. Notre équipe d'experts vous accompagne de la conception à la pose.
                  </p>
                  
                  {/* Bouton Ghost & Solid */}
                  <Link href="/devis">
                    <motion.button
                      whileHover={{ 
                        backgroundColor: "#004aad",
                        color: "#ffffff",
                        scale: 1.02
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full lg:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] border-2 border-[#004aad] text-[#004aad] font-medium rounded-sm transition-all duration-300 text-xs sm:text-sm uppercase tracking-wide"
                    >
                      <span>Demander un devis</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>

                {/* Éléments de réassurance discrets */}
                <div className="pt-8 border-t border-gray-100">
                  <p className="text-xs text-slate-500 font-light tracking-wide text-center lg:text-left">
                    Étude technique gratuite • Accompagnement Premium • Devis sous 48h
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Version mobile - Image en haut, contenu en bas */}
          <div className="lg:hidden">
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={heroImageSrc}
                alt="Détail architectural"
                fill
                className="object-cover object-center grayscale brightness-90 contrast-110"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-widest uppercase leading-tight">
                    L'EXCELLENCE<br />SUR MESURE
                  </h2>
                  <div className="h-px w-12 sm:w-16 bg-[#004aad] mt-4" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Transformez votre vision en réalité. Notre équipe d'experts vous accompagne de la conception à la pose.
                </p>
                <Link href="/devis">
                  <motion.button
                    whileHover={{ 
                      backgroundColor: "#004aad",
                      color: "#ffffff",
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] border-2 border-[#004aad] text-[#004aad] font-medium rounded-sm transition-all duration-300 text-xs sm:text-sm uppercase tracking-wide"
                  >
                    <span>Demander un devis</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-xs text-slate-500 font-light tracking-wide text-center">
                    Étude technique gratuite • Accompagnement Premium • Devis sous 48h
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
