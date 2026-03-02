"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Factory, Star, Users, MapPin, ArrowRight } from "lucide-react";

const trustPoints = [
  {
    number: "01",
    title: "Proximité",
    description: "Vos voisins à Wavre. Service de proximité dans le Brabant Wallon.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop&auto=format&q=90",
    size: "square",
    href: null,
  },
  {
    number: "02",
    title: "Transparence",
    description: "Nos poseurs sont nos propres experts. Pas de sous-traitance.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&auto=format&q=90",
    size: "large",
    href: null,
  },
  {
    number: "03",
    title: "Qualité Sofarau",
    description: "Technologie Schüco via notre unité de production 100% belge.",
    // Macro-photo du grain du châssis
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&h=1080&fit=crop&auto=format&q=90",
    size: "square",
    href: "/solutions",
  },
  {
    number: "04",
    title: "Fabrication 100% Belge",
    description: "Savoir-faire d'excellence transmis de génération en génération.",
    // Plan large de l'atelier Sofarau
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop&auto=format&q=90",
    size: "wide",
    href: "/notre-histoire",
  },
  {
    number: "05",
    title: "Garantie de Pose",
    description: "10 ans sur la pose. Votre tranquillité d'esprit est notre priorité.",
    // Main d'artisan en action (focus sur le geste)
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&auto=format&q=90",
    size: "square",
    href: "/realisations",
  },
  {
    number: "06",
    title: "Qualité Certifiée",
    description: "Normes européennes respectées. Certifications garanties.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&h=1080&fit=crop&auto=format&q=90",
    size: "tall",
    href: "/devis",
  },
  {
    number: "07",
    title: "Installation Professionnelle",
    description: "Artisans qualifiés, soucieux des détails. Chaque projet est une signature.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop&auto=format&q=90",
    size: "wide",
    href: null,
  },
];

const testimonials = [
  {
    name: "Marie D.",
    location: "Wavre",
    text: "Un silence absolu depuis l'installation de nos nouveaux châssis. Un confort incomparable !",
    rating: 5,
  },
  {
    name: "Jean-Pierre L.",
    location: "Ottignies",
    text: "Professionnalisme exemplaire et résultat au-delà de nos attentes. Je recommande vivement.",
    rating: 5,
  },
];

export default function TrustSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="apropos" className="py-48 lg:py-64 bg-gradient-to-b from-white/95 to-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Main Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-white border border-[#e2e8f0] rounded-xl">
            <div className="w-12 h-12 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center">
              <Factory className="h-6 w-6 text-[#64748b] stroke-[1.5]" />
            </div>
            <div className="text-left">
              <p className="font-bold text-[#0a0a0a] text-xl mb-1">Fabrication 100% Belge</p>
              <div className="flex items-center gap-2 text-[#64748b]">
                <MapPin className="h-4 w-4" />
                <p className="text-base font-light">Partenariat Sofarau - Wavre</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Header - Nos Valeurs & Engagements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 
            className="text-3xl lg:text-4xl font-medium tracking-tight text-[#1F2937] mb-3"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          >
            Nos Valeurs & Engagements
          </h3>
          <p 
            className="text-base text-[#1F2937]/60 font-light"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          >
            Ce qui nous définit, ce qui nous guide
          </p>
        </motion.div>

        {/* Bento Grid Asymétrique Dynamique avec Effet Focus */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-24 auto-rows-fr">
          {trustPoints.map((point, index) => {
            // Déterminer les classes de taille selon le type
            let colSpan = "";
            let rowSpan = "";
            let aspectClass = "aspect-square";
            
            if (point.size === "large") {
              colSpan = "md:col-span-2 lg:col-span-2";
              rowSpan = "md:row-span-2 lg:row-span-2";
              aspectClass = "md:aspect-square lg:aspect-square";
            } else if (point.size === "wide") {
              colSpan = "md:col-span-2 lg:col-span-2";
              aspectClass = "md:aspect-[2/1] lg:aspect-[2/1]";
            } else if (point.size === "tall") {
              colSpan = "md:col-span-1 lg:col-span-1";
              rowSpan = "md:row-span-2 lg:row-span-2";
              aspectClass = "md:aspect-[1/2] lg:aspect-[1/2]";
            }

            const isHovered = hoveredIndex === index;
            const isBlurred = hoveredIndex !== null && hoveredIndex !== index;

            const CardContent = (
              <>
                {/* Image HD en plein écran avec overlay sombre progressif */}
                <div className="absolute inset-0">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay sombre progressif : plus sombre au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-700" />
                </div>

                {/* Numéro en bleu marine avec 20% opacité (filigrane) */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10">
                  <span 
                    className="text-4xl lg:text-5xl font-extrabold"
                    style={{ 
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      color: "rgba(0, 74, 173, 0.2)",
                      letterSpacing: "-0.05em",
                      lineHeight: "1",
                    }}
                  >
                    {point.number}
                  </span>
                </div>

                {/* Titre en blanc pur en bas (taille réduite) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 z-10">
                  <h4 
                    className="text-base lg:text-lg font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                  >
                    {point.title}
                  </h4>
                  
                  {/* Description cachée par défaut, apparaît au hover avec montée */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      y: isHovered ? 0 : 20 
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm text-white/90 font-extralight leading-relaxed tracking-wide"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 200 }}
                  >
                    {point.description}
                  </motion.p>
                </div>

                {/* Indicateur "En savoir plus +" au hover */}
                {point.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      y: isHovered ? 0 : 20 
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm">
                      <span 
                        className="text-xs font-light text-white uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                      >
                        En savoir plus
                      </span>
                      <span className="text-white text-lg font-light">+</span>
                    </div>
                  </motion.div>
                )}
              </>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  opacity: isBlurred ? 0.3 : 1,
                  filter: isBlurred ? "blur(4px)" : "blur(0px)",
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative ${colSpan} ${rowSpan} ${aspectClass} overflow-hidden rounded-sm ${point.href ? "cursor-pointer" : ""}`}
              >
                {point.href ? (
                  <Link href={point.href} className="absolute inset-0">
                    {CardContent}
                  </Link>
                ) : (
                  CardContent
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 tracking-tight">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-[#64748b] font-light">Des milliers de foyers nous font confiance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full bg-white border border-[#e2e8f0] rounded-xl p-8 hover:border-[#cbd5e1] transition-colors">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#d97706] text-[#d97706]" />
                    ))}
                  </div>
                  <p className="text-[#0a0a0a] mb-6 text-base leading-relaxed font-light">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#64748b] stroke-[1.5]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0a0a0a]">{testimonial.name}</p>
                      <p className="text-[#64748b] font-light text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: "Années d'expérience", value: "15+" },
            { label: "Clients satisfaits", value: "2000+" },
            { label: "Projets réalisés", value: "5000+" },
            { label: "Garantie", value: "10 ans" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-2 tracking-tight">{stat.value}</p>
              <p className="text-[#64748b] text-sm font-light">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
