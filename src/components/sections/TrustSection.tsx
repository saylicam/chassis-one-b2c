"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Factory, Star, Users, MapPin } from "lucide-react";

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

function ExpertiseImage({
  src,
  alt,
  placeholder,
}: {
  src: string;
  alt: string;
  placeholder: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-slate-50 border border-slate-100 rounded-3xl shadow-sm flex items-center justify-center px-8 text-center">
        <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
          {placeholder}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] rounded-3xl overflow-hidden shadow-[0_22px_45px_rgba(15,23,42,0.08)] bg-slate-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

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

        {/* Section Header - L'Expertise en Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h3 
            className="text-xs sm:text-sm md:text-base font-light tracking-[0.25em] text-[#6B7280] uppercase mb-4"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          >
            L'expertise en action
          </h3>
          <p 
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#111827] leading-tight"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          >
            Quand le terrain parle plus fort que les promesses
          </p>
        </motion.div>

        {/* Section "L'Expertise en Action" - Layout en Z */}
        <div className="space-y-16 lg:space-y-24 mb-24">
          {/* Bloc 1 : Image gauche / Texte droite */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-5 order-1 lg:order-1">
              <ExpertiseImage
                src="/images/services/expertise/fourgons.jpg"
                alt="Flotte de véhicules d'intervention Châssis One"
                placeholder="En attente de visuel : Flotte de véhicules d'intervention Châssis One - Section 01"
              />
            </div>
            <div className="lg:col-span-7 order-2 lg:order-2">
              <p
                className="text-xs sm:text-sm font-light tracking-[0.25em] text-[#6B7280] uppercase mb-4"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                Une flotte dédiée
              </p>
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-light text-[#111827] mb-4 lg:mb-6 leading-snug uppercase tracking-[0.12em]"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                UNE FLOTTE DÉDIÉE, UNE RÉACTIVITÉ ABSOLUE
              </h3>
              <p
                className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                Parce que l&apos;excellence commence par une logistique maîtrisée. Notre flotte de véhicules
                d&apos;intervention nous permet de garantir une ponctualité rigoureuse et un suivi de chantier sans
                intermédiaire sur tout le Brabant. Nous ne dépendons de personne pour honorer nos rendez-vous.
              </p>
            </div>
          </motion.div>

          {/* Bloc 2 : Texte gauche / Image droite */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-7 order-2 lg:order-1">
              <p
                className="text-xs sm:text-sm font-light tracking-[0.25em] text-[#6B7280] uppercase mb-4"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                Robot de levage haute sécurité
              </p>
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-light text-[#111827] mb-4 lg:mb-6 leading-snug uppercase tracking-[0.12em]"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                LA PRÉCISION DU GESTE, LA FORCE DU MATÉRIEL
              </h3>
              <p
                className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                Vos projets de grandes dimensions exigent une manipulation d&apos;orfèvre. Grâce à nos robots de
                levage à ventouses haute sécurité, nous assurons une pose millimétrée de vos vitrages Signature,
                préservant l&apos;intégrité de vos châssis et la sécurité de votre demeure lors de l&apos;installation.
              </p>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <ExpertiseImage
                src="/images/services/expertise/robot-levage.jpg"
                alt="Robot de levage à ventouses en action sur chantier"
                placeholder="En attente de visuel : Robot de levage à ventouses - Section 02"
              />
            </div>
          </motion.div>

          {/* Bloc 3 : Image gauche / Texte droite */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-5 order-1 lg:order-1">
              <ExpertiseImage
                src="/images/services/expertise/remorque.jpg"
                alt="Remorque et matériel spécialisé pour menuiserie haut de gamme"
                placeholder="En attente de visuel : Remorque et matériel spécialisé - Section 03"
              />
            </div>
            <div className="lg:col-span-7 order-2 lg:order-2">
              <p
                className="text-xs sm:text-sm font-light tracking-[0.25em] text-[#6B7280] uppercase mb-4"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                Équipement professionnel dédié
              </p>
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-light text-[#111827] mb-4 lg:mb-6 leading-snug uppercase tracking-[0.12em]"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                UN ÉQUIPEMENT À LA MESURE DE VOS AMBITIONS
              </h3>
              <p
                className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                L&apos;artisanat moderne ne s&apos;improvise pas. Des remorques sécurisées aux outils de post-mesurage
                laser, chaque équipe Châssis One dispose du matériel professionnel spécifique à la menuiserie de luxe.
                C&apos;est ainsi que nous transformons une simple pose en une installation d&apos;exception.
              </p>
            </div>
          </motion.div>
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
