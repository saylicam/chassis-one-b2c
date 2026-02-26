"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServiceGrid from "@/components/sections/ServiceGrid";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/5 via-white to-[#f1f5f9]" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-tight tracking-tight">
                Nos Solutions
              </h1>
              <p className="text-2xl text-[#475569] font-light max-w-3xl mx-auto">
                Découvrez notre gamme complète de produits pour transformer votre intérieur
              </p>
            </motion.div>
          </div>
        </section>

        <ServiceGrid />
      </main>
      <Footer />
    </>
  );
}
