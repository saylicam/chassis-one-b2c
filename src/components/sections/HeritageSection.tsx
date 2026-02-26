"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Eye, Award } from "lucide-react";

// Image placeholder pour l'atelier/équipe
const teamImage = "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=800&fit=crop&auto=format&q=80";

const values = [
  {
    icon: Heart,
    title: "Proximité",
    description: "Nous ne sommes pas une multinationale, nous sommes vos voisins.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description: "Pas de sous-traitance obscure. Nos poseurs sont nos propres experts.",
  },
  {
    icon: Award,
    title: "Qualité Sofarau",
    description: "L'accès direct à la technologie Schüco via notre propre unité de production.",
  },
];

export default function HeritageSection() {
  return (
    <section
      id="heritage"
      className="py-20 bg-white"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-4 leading-tight">
            Plus qu'une entreprise, une signature brabançonne.
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto font-light leading-relaxed">
            Depuis plus de 15 ans, nous façonnons le confort des foyers de Wavre et ses environs.
          </p>
        </motion.div>

        {/* Split Layout - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed font-light">
                Née de la passion pour l'artisanat, Châssis One allie aujourd'hui la force d'une production industrielle locale (Sofarau) à la précision d'une pose artisanale.
              </p>
              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed font-light">
                Chaque projet est une histoire unique, chaque pose une signature de notre savoir-faire transmis de génération en génération. Nous ne construisons pas seulement des fenêtres, nous façonnons le confort et la sérénité de vos foyers.
              </p>
            </div>

            {/* Signature épurée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8 border-t border-[#e2e8f0]"
            >
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent" />
                <div className="text-[#64748b] font-light text-lg">
                  L'équipe Châssis One
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column - Cadre épuré */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white border border-[#e2e8f0] rounded-xl overflow-hidden"
            >
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={teamImage}
                  alt="L'équipe Châssis One devant l'atelier de Wavre"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Label épuré */}
              <div className="p-4 text-center border-t border-[#e2e8f0]">
                <p className="text-[#64748b] font-light text-sm">
                  Wavre, Brabant Wallon
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>


        {/* Valeurs & Engagements - Bento Grid épurée */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-4">
              Nos Valeurs & Engagements
            </h3>
            <p className="text-lg text-[#64748b] font-light">
              Ce qui nous définit, ce qui nous guide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="h-full rounded-xl p-8 bg-white border border-[#e2e8f0] hover:border-[#cbd5e1] transition-colors"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-[#64748b] stroke-[1.5]" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight text-[#0a0a0a] mb-4 text-center">
                      {value.title}
                    </h4>
                    <p className="text-[#64748b] text-lg font-light leading-relaxed text-center">
                      {value.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
