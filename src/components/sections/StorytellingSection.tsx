"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function StorytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Effet de parallaxe léger
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[600px] lg:min-h-[700px] bg-white overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 h-full min-h-[600px] lg:min-h-[700px]">
        {/* Côté Visuel - Image Lifestyle B&W/Sépia */}
        <motion.div
          style={{ y }}
          className="relative h-full min-h-[400px] lg:min-h-[700px] order-2 lg:order-1"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&auto=format&q=90"
              alt="Artisan au travail - Détail de main d'artisan"
              fill
              className="object-cover grayscale contrast-125 brightness-90"
              sizes="50vw"
              priority
            />
            {/* Overlay sépia léger */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-800/5" />
          </div>
        </motion.div>

        {/* Côté Texte */}
        <div className="relative flex items-center justify-center p-8 lg:p-16 bg-white order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl space-y-8"
          >
            {/* Badge "Garantie Artisanale" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200/50 rounded-full"
            >
              <svg
                className="w-4 h-4 text-amber-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium text-amber-700 uppercase tracking-wider">
                Garantie Artisanale
              </span>
            </motion.div>

            {/* Titre */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight leading-tight"
            >
              Héritage & Passion
            </motion.h2>

            {/* Phrase d'accroche avec typographie littéraire */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-[#475569] font-light leading-relaxed font-serif italic"
            >
              Depuis plus de 15 ans, nous ne posons pas seulement des châssis, nous protégeons vos foyers.
            </motion.p>

            {/* Description supplémentaire */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base text-[#64748b] font-light leading-relaxed"
            >
              Chaque projet raconte une histoire. Chaque pose porte la signature de notre savoir-faire transmis de génération en génération. De l'usine Sofarau de Wavre à votre domicile, nous façonnons l'excellence 100% belge.
            </motion.p>

            {/* Bouton "L'Expérience" avec design différent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/notre-histoire">
                <motion.button
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#0a0a0a] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                >
                  <span>Découvrir notre histoire</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
