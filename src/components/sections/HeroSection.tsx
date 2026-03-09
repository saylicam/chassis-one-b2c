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
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images.hero.main})`,
          }}
        />
        {/* Cinematic overlay - Bleu Nuit profond avec texture */}
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
          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-[0.95] tracking-tight">
              Votre Confort,
              <br />
              <span className="relative inline-block">
                <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: "2px white" }}>
                  Notre Expertise
                </span>
                <span className="relative text-white">Notre Expertise</span>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed font-light">
              Transformez votre maison en havre de paix. Châssis, portes et volets de qualité supérieure pour un silence parfait, une chaleur préservée et une sécurité renforcée pour votre famille.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/devis">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all"
              >
                DEMANDER UN DEVIS
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                NOS SOLUTIONS
              </motion.button>
            </Link>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
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
