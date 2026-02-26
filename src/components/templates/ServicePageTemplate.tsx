"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Thermometer, Shield, Sparkles, Zap, Lock, Sun, DollarSign, Volume2, LockKeyhole, Palette, Award, Users, Headphones, FileText, ChevronRight, Home } from "lucide-react";
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
  icon: React.ElementType;
  title: string;
  description: string;
}

interface EditorialBlock {
  image: string;
  imageAlt: string;
  title: string;
  titleHighlight?: string; // Partie du titre à mettre en évidence (italique ou gras)
  text: string;
  number: string; // "01", "02", etc.
  imagePosition: "left" | "right";
}

interface KeyBenefit {
  icon: React.ElementType;
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
  ctaTitle: string;
  ctaSubtitle: string;
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  // Déterminer l'image Hero : priorité à heroImage explicite, sinon mapping automatique
  const heroImageSrc = data.heroImage || (data.serviceCategory ? getHeroImage(data.serviceCategory) : '/images/services/hero-default.jpg');
  
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section Service - Structure identique à la page d'accueil */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          {/* Background Image with Cinematic Overlay - Structure identique à l'Accueil */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroImageSrc})`,
              }}
            />
            {/* Cinematic overlay - Bleu Nuit profond avec texture (identique à l'Accueil) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/60 via-[#1e293b]/50 to-[#0f172a]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent_60%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16 py-32 lg:py-48">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              {/* Fil d'Ariane - Discret en haut */}
              {data.breadcrumbPath && (
                <motion.nav
                  variants={itemVariants}
                  className="mb-8"
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

              {/* Main Title - Texte spécifique au service */}
              <motion.div variants={itemVariants} className="mb-8">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                  VOTRE MAISON LUMINEUSE.
                  <br />
                  <span className="relative inline-block">
                    <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: "2px white" }}>
                      VOTRE VIE PRIVÉE PRÉSERVÉE.
                    </span>
                    <span className="relative text-white">VOTRE VIE PRIVÉE PRÉSERVÉE.</span>
                  </span>
                </h1>
              </motion.div>

              {/* Description - Texte spécifique au service */}
              <motion.div variants={itemVariants} className="mb-12">
                <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed font-light">
                  Découvrez nos fenêtres haute performance : clarté, isolation thermique et acoustique pour un confort ultime.
                </p>
              </motion.div>

              {/* CTAs - Identique à l'Accueil */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link href="/devis">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Demander un Devis Gratuit
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section "Pourquoi choisir [Produit] ?" - Design Éditorial Asymétrique */}
        {data.editorialBlocks ? (
          <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#fafafa] overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-12 sm:mb-16 md:mb-20"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4 sm:mb-6 leading-tight px-2">
                  {data.whyChooseTitle}
                </h2>
              </motion.div>

              {/* Blocs éditoriaux alternés */}
              <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
                {data.editorialBlocks.map((block, index) => {
                  const isEven = index % 2 === 0;
                  const imageFirst = block.imagePosition === "left" || (block.imagePosition !== "right" && isEven);
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center ${
                        !imageFirst ? "lg:grid-flow-dense" : ""
                      }`}
                    >
                      {/* Image avec effet parallaxe - TOUJOURS en premier sur mobile */}
                      <motion.div
                        initial={{ opacity: 0, x: imageFirst ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className={`relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] order-1 ${
                          !imageFirst ? "lg:col-start-2 lg:order-2" : "lg:order-1"
                        }`}
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)"
                        }}
                      >
                        <motion.div
                          initial={{ scale: 1.15 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={block.image}
                            alt={block.imageAlt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                          />
                        </motion.div>
                      </motion.div>

                      {/* Texte avec numéro en fond - TOUJOURS en second sur mobile */}
                      <motion.div
                        initial={{ opacity: 0, x: imageFirst ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`relative order-2 px-2 sm:px-4 md:px-0 ${!imageFirst ? "lg:col-start-1 lg:order-1" : "lg:order-2"}`}
                      >
                        {/* Numéro discret en fond - Caché sur mobile si trop encombrant */}
                        <div className="hidden md:block absolute -top-8 -left-4 lg:-top-12 lg:-left-8 text-[80px] md:text-[120px] lg:text-[180px] font-black text-slate-100 leading-none select-none z-0">
                          {block.number}
                        </div>

                        {/* Contenu */}
                        <div className="relative z-10 space-y-4 sm:space-y-5 md:space-y-6">
                          {/* Ligne verticale fine - Cachée sur mobile */}
                          <div className="hidden sm:block h-8 sm:h-10 md:h-12 w-[0.5px] bg-[#004aad]/30" />
                          
                          {/* Titre avec typographie signature */}
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
                            {block.title.split(" ").map((word, wordIndex) => {
                              const isHighlight = block.titleHighlight && word.toLowerCase().includes(block.titleHighlight.toLowerCase());
                              return (
                                <span key={wordIndex}>
                                  {isHighlight ? (
                                    <span className="font-bold italic text-[#004aad]">{word}</span>
                                  ) : (
                                    <span>{word}</span>
                                  )}
                                  {wordIndex < block.title.split(" ").length - 1 && " "}
                                </span>
                              );
                            })}
                          </h3>

                          {/* Ligne horizontale fine */}
                          <div className="w-12 sm:w-16 h-[0.5px] bg-slate-300" />

                          {/* Texte sensoriel */}
                          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-slate-700 font-light leading-relaxed max-w-xl">
                            {block.text}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
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

        {/* Section "L'Excellence Technique au service de votre confort" - Bénéfices Clés */}
        <section className="py-16 lg:py-24 bg-[#fafafa]">
          <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {data.excellenceTitle}
              </h2>
              <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
                {data.excellenceSubtitle}
              </p>
            </motion.div>

            {/* Grille de 4 blocs visuels larges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {data.keyBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white border border-[#004aad]/20 rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#004aad]/10 mb-6 border border-[#004aad]/20">
                      <IconComponent className="h-8 w-8 text-[#004aad]" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-slate-700 font-normal leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
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
              {data.galleryImages.map((image, index) => (
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
          <div className="grid lg:grid-cols-10 h-full min-h-[500px] lg:min-h-[600px]">
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
                  src={data.heroImage}
                  alt="Détail architectural"
                  fill
                  className="object-cover object-center grayscale brightness-90 contrast-110"
                  sizes="60vw"
                />
                {/* Overlay très subtil pour renforcer le contraste */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* DROITE (40%) - Action sur fond blanc pur */}
            <div className="lg:col-span-4 bg-white flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
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
                src={data.heroImage}
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
