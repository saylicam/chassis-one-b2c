"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const pointsForts = [
  "Expertise Schüco & Sofarau",
  "Pose Artisanale Certifiée",
  "Service de Proximité Wavrien",
];

export default function HeritageSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax pour l'image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="heritage"
      className="relative min-h-screen py-48 lg:py-64 bg-gradient-to-b from-white to-white/95 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Colonne Gauche : Texte avec reveal latéral + ligne verticale */}
          <div className="lg:col-span-2 relative">
            {/* Ligne verticale discrète */}
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-[#1F2937]/10 hidden lg:block" />
            
            <div className="space-y-12">
              {/* Titre avec reveal (taille réduite) */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <h2 
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#1F2937]"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                >
                  Une signature brabançonne
                </h2>
              </motion.div>

              {/* Paragraphe avec reveal */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p 
                  className="text-lg lg:text-xl text-[#1F2937] font-extralight leading-relaxed tracking-wider"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 200 }}
                >
                  Née de la passion pour l'artisanat, Châssis One allie aujourd'hui la force d'une <strong className="font-medium">production locale</strong> (Sofarau) à la précision d'une <strong className="font-medium">pose artisanale</strong> pour un <strong className="font-medium">confort ultime</strong>.
                </p>
              </motion.div>

              {/* Zone "En chiffres" */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="pt-4"
              >
                <p 
                  className="text-[10px] font-light text-[#1F2937]/60 uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                >
                  25 ans de savoir-faire | +1500 projets réalisés
                </p>
              </motion.div>

            {/* Points Forts ultra-minimaliste */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 pt-8"
            >
              {pointsForts.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4"
                >
                  <span 
                    className="text-sm font-light text-[#004aad] tracking-widest"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                  >
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <p 
                    className="text-sm font-light text-[#1F2937] tracking-wide"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                  >
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Boutons Ghost */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 pt-8"
            >
              <Link
                href="/notre-histoire"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#1F2937]/30 rounded-sm overflow-hidden transition-all duration-300 hover:border-[#004aad]"
              >
                <span 
                  className="relative z-10 text-sm font-light uppercase tracking-widest text-[#1F2937] group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                >
                  Notre Histoire
                </span>
                <div className="absolute inset-0 bg-[#004aad] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
              <Link
                href="/realisations"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#1F2937]/30 rounded-sm overflow-hidden transition-all duration-300 hover:border-[#004aad]"
              >
                <span 
                  className="relative z-10 text-sm font-light uppercase tracking-widest text-[#1F2937] group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                >
                  Notre Atelier
                </span>
                <div className="absolute inset-0 bg-[#004aad] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
            </div>
          </div>

          {/* Colonne Droite : Image 60% avec parallax et effet cadre d'exposition */}
          <motion.div
            style={{ 
              y: imageY,
              boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)",
            }}
            className="lg:col-span-3 relative h-[600px] lg:h-[800px] overflow-hidden rounded-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop&auto=format&q=95"
              alt="Atelier Châssis One - Réalisation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              quality={95}
            />
          </motion.div>
        </div>

        {/* Logos Partenaires en bas (opacité 40%) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 pt-16 border-t border-[#1F2937]/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {["Schüco", "Sofarau", "Saint-Gobain"].map((partner, index) => (
              <div
                key={partner}
                className="opacity-40"
              >
                <p 
                  className="text-lg font-light text-[#1F2937] tracking-wider"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                >
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
