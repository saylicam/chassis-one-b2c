"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Thermometer, Volume2 } from "lucide-react";
import { images } from "@/lib/images";

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

export default function HeroSection() {
  return (
    <section id="accueil" className="relative h-[85vh] md:min-h-screen md:h-auto flex items-center overflow-hidden pt-14 md:pt-20">
      {/* Background Image — mobile: 80vh, object-position 70% center; desktop: center */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: cadrage intelligent sur le bas de l'image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
          style={{
            backgroundImage: `url(${images.hero.main})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />
        {/* Desktop: centre */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: `url(${images.hero.main})`,
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

      {/* Hero Mobile — version minimaliste luxury */}
      <div className="relative z-10 mx-auto h-full w-full px-6 flex items-center justify-center md:hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md text-center space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-base tracking-[0.15em] font-light text-white uppercase"
            style={{
              letterSpacing: "0.15em",
              textShadow: "0px 2px 8px rgba(0,0,0,0.4)",
              color: "#FFFFFF",
              fontFamily:
                "var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Montserrat', sans-serif)",
            }}
          >
            VOTRE CONFORT. NOTRE EXCELLENCE.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xs text-white leading-relaxed"
            style={{
              color: "#FFFFFF",
              fontFamily:
                "var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Montserrat', sans-serif)",
            }}
          >
            Une signature d&apos;architecte pour votre intérieur.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4">
            <Link href="/devis">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white text-white text-[10px] tracking-[0.2em] uppercase rounded-full bg-transparent backdrop-blur-sm"
              >
                DEMANDER UN DEVIS
                <ArrowRight className="h-3 w-3" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Desktop / Tablet — version complète */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 pt-8 pb-24 sm:py-32 lg:py-48 w-full hidden md:block">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full text-center md:text-left"
        >
          {/* Main Title — typographie architecturale, ultra-subtile */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 relative">
            <h1
              className="text-3xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-[1.15] tracking-[0.12em] uppercase"
              style={{
                letterSpacing: "0.12em",
                textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
                color: "#FFFFFF",
                fontFamily:
                  "var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Montserrat', sans-serif)",
              }}
            >
              VOTRE CONFORT,
              <br />
              NOTRE EXPERTISE
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-12">
            <p
              className="text-base lg:text-xl text-white/80 max-w-2xl leading-relaxed font-light mx-auto md:mx-0"
              style={{
                fontFamily:
                  "var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Montserrat', sans-serif)",
              }}
            >
              Transformez votre maison en havre de paix. Châssis, portes et volets de qualité supérieure pour un silence parfait, une chaleur préservée et une sécurité renforcée pour votre famille.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 mb-12 sm:mb-16 items-center md:items-start"
          >
            <Link href="/devis" className="w-full sm:w-auto max-w-sm md:max-w-none">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all"
              >
                DEMANDER UN DEVIS
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
            <Link href="/solutions" className="w-full sm:w-auto max-w-sm md:max-w-none">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                NOS SOLUTIONS
              </motion.button>
            </Link>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto md:mx-0"
          >
            {[
              { icon: Volume2, text: "Silence absolu" },
              { icon: Thermometer, text: "Chaleur préservée" },
              { icon: Shield, text: "Sécurité renforcée" },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-white">{benefit.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/70 font-light tracking-wider uppercase">Découvrir</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
