"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, Award, Users } from "lucide-react";

// Placeholder pour les logos - à remplacer par les vrais logos
// Pour l'instant, on utilise des placeholders. Vous devrez remplacer par les vrais logos SVG ou PNG
const partners = [
  {
    name: "Schüco",
    logo: "https://via.placeholder.com/120x40/94a3b8/ffffff?text=Schüco",
  },
  {
    name: "Sofarau",
    logo: "https://via.placeholder.com/120x40/94a3b8/ffffff?text=Sofarau",
  },
  {
    name: "CE",
    logo: "https://via.placeholder.com/60x60/94a3b8/ffffff?text=CE",
  },
  {
    name: "CSTB",
    logo: "https://via.placeholder.com/120x40/94a3b8/ffffff?text=CSTB",
  },
];

const promises = [
  {
    icon: Factory,
    title: "Fabrication Locale",
    description: "Directement de notre usine de Wavre à votre domicile. Circuit court, qualité maîtrisée.",
  },
  {
    icon: Award,
    title: "Expertise Certifiée",
    description: "Plus de 15 ans d'expérience dans la pose de menuiseries haute performance.",
  },
  {
    icon: Users,
    title: "Accompagnement Premium",
    description: "Un interlocuteur unique, de l'étude technique à la réception de chantier.",
  },
];

export default function TransitionSection() {
  return (
    <>
      {/* Social Proof - Bandeau de logos */}
      <section className="py-12 bg-[#f9fafb] border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            {/* Texte */}
            <p className="text-sm font-light text-[#64748b] tracking-wide">
              Nos partenaires d'excellence
            </p>

            {/* Logos */}
            <div className="flex items-center gap-8 md:gap-12 flex-wrap">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-10 w-auto opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="h-full w-auto object-contain"
                      unoptimized
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promesse en trois points */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-16">
            {promises.map((promise, index) => {
              const Icon = promise.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center md:text-left"
                >
                  {/* Icône minimaliste */}
                  <div className="flex justify-center md:justify-start mb-6">
                    <div className="w-12 h-12 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#64748b] stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 tracking-tight">
                    {promise.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748b] font-light leading-relaxed text-base">
                    {promise.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Phrase Manifeste */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-2xl lg:text-3xl font-light text-[#0a0a0a] leading-relaxed tracking-tight">
              La précision de l'industrie, le soin de l'artisanat.
              <br />
              <span className="text-[#64748b]">
                Découvrez nos solutions sur-mesure pour votre habitat.
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
