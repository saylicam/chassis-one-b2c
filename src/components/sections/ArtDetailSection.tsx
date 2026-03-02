"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = ["Schüco", "Sofarau", "Saint-Gobain"];

export default function ArtDetailSection() {
  return (
    <>
      {/* Ligne de séparation horizontale */}
      <div className="w-full h-px bg-[#004aad]/10" />

      {/* Section "L'Excellence en Détails" - Grille Éditoriale */}
      <section className="relative py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Bloc A : Le Confort (Gauche) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop&auto=format&q=95"
                alt="Châssis posé dans un salon moderne - Vue d'architecte"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
              />
              {/* Texte superposé en bas */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/70 to-transparent">
                <h3
                  className="text-2xl lg:text-3xl font-medium text-white"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                >
                  Le Silence comme Signature
                </h3>
              </div>
            </motion.div>

            {/* Bloc B : La Matière (Droite) - Deux carrés superposés */}
            <div className="grid grid-cols-1 gap-8 lg:gap-12">
              {/* Carré Haut : Profilé Aluminium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[280px] lg:h-[300px] overflow-hidden rounded-sm"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&h=1080&fit=crop&auto=format&q=95"
                  alt="Profilé Aluminium Schüco - Macro"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={95}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p
                    className="text-lg font-medium text-white"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                  >
                    Aluminium Schüco
                  </p>
                </div>
              </motion.div>

              {/* Carré Bas : Triple Vitrage */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[280px] lg:h-[300px] overflow-hidden rounded-sm"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&auto=format&q=95"
                  alt="Triple vitrage haute performance - Macro"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={95}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p
                    className="text-lg font-medium text-white"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                  >
                    Isolation Thermique Uw &lt; 0.8
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Réassurance Locale" */}
      <section className="relative py-24 bg-[#f0f4f8]">
        <div className="mx-auto max-w-4xl px-8 lg:px-16 text-center">
          {/* Texte principal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg lg:text-xl font-light text-[#004aad] leading-relaxed mb-12 tracking-wide"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
          >
            Un Patrimoine Valorisé : Investissement durable et sécurité certifiée RC2.
          </motion.p>

          {/* Logos partenaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-300"
              >
                <p
                  className="text-sm lg:text-base font-light text-[#1F2937]/40 group-hover:text-[#004aad] transition-colors duration-300 tracking-wider"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                >
                  {partner}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transition vers les Avis */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-4xl px-8 lg:px-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-base font-light text-[#1F2937]/60"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
          >
            Ce sont nos clients qui en parlent le mieux.
          </motion.p>
        </div>
      </section>
    </>
  );
}
