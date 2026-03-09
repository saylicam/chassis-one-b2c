"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function EcoConceptionSection() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 h-full min-h-[500px] lg:min-h-[600px]">
        {/* GAUCHE (50%) - Image */}
        <motion.div
          className="relative hidden lg:block overflow-hidden"
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
              src="/images/eco/hero-nature-pvc.jpg"
              alt="Fusion Nature et PVC - Innovation durable"
              fill
              className="object-cover object-center"
              sizes="50vw"
              priority
            />
          </motion.div>
        </motion.div>

        {/* DROITE (50%) - Texte sur fond blanc pur */}
        <div className="bg-white flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md space-y-6 sm:space-y-8"
          >
            {/* Titre */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 tracking-widest uppercase leading-tight">
                L'INNOVATION DURABLE :<br />LE PVC RECYCLÉ
              </h2>
              {/* Ligne fine de séparation */}
              <div className="h-px w-12 sm:w-16 bg-[#1e40af] mt-4 sm:mt-6" />
            </div>

            {/* Appel à l'action */}
            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Rien ne se perd, tout se transforme. Découvrez comment Châssis One réinvente la fenêtre à travers un cycle de vie infini.
              </p>
              
              {/* Bouton Ghost & Solid */}
              <Link href="/engagement-durable">
                <motion.button
                  whileHover={{ 
                    backgroundColor: "#1e40af",
                    color: "#ffffff",
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] border-2 border-[#1e40af] text-[#1e40af] font-medium rounded-sm transition-all duration-300 text-xs sm:text-sm uppercase tracking-wide"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Version mobile - Image en haut, contenu en bas */}
      <div className="lg:hidden">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="/images/eco/hero-nature-pvc.jpg"
            alt="Fusion Nature et PVC - Innovation durable"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
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
                L'INNOVATION DURABLE :<br />LE PVC RECYCLÉ
              </h2>
              <div className="h-px w-12 sm:w-16 bg-[#1e40af] mt-4" />
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Rien ne se perd, tout se transforme. Découvrez comment Châssis One réinvente la fenêtre à travers un cycle de vie infini.
            </p>
            <Link href="/engagement-durable">
              <motion.button
                whileHover={{ 
                  backgroundColor: "#1e40af",
                  color: "#ffffff",
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] border-2 border-[#1e40af] text-[#1e40af] font-medium rounded-sm transition-all duration-300 text-xs sm:text-sm uppercase tracking-wide"
              >
                <span>En savoir plus</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
