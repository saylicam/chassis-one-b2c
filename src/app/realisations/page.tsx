"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PremiumImage from "@/components/images/PremiumImage";
import ImagePlaceholder from "@/components/images/ImagePlaceholder";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { images } from "@/lib/images";

const categories = ["Tous", "Châssis PVC", "Châssis Aluminium", "Portes", "Volets"];

const realisations = images.realisations.map((img, index) => {
  const baseData = [
    {
      title: "Rénovation complète - Wavre",
      category: "Châssis PVC",
      description: "Remplacement de 12 châssis PVC dans une maison familiale",
      location: "Wavre",
      year: "2024",
    },
    {
      title: "Maison moderne - Ottignies",
      category: "Châssis Aluminium",
      description: "Installation de grandes baies vitrées aluminium",
      location: "Ottignies",
      year: "2024",
    },
    {
      title: "Porte d'entrée sécurisée - Louvain-la-Neuve",
      category: "Portes",
      description: "Porte d'entrée avec serrure multi-points",
      location: "Louvain-la-Neuve",
      year: "2023",
    },
    {
      title: "Volets roulants motorisés - Nivelles",
      category: "Volets",
      description: "Installation de volets roulants avec motorisation domotique",
      location: "Nivelles",
      year: "2024",
    },
    {
      title: "Rénovation énergétique - Bruxelles",
      category: "Châssis PVC",
      description: "Remplacement complet pour améliorer l'isolation",
      location: "Bruxelles",
      year: "2023",
    },
    {
      title: "Villa contemporaine - Waterloo",
      category: "Châssis Aluminium",
      description: "Baies vitrées sur mesure pour une villa moderne",
      location: "Waterloo",
      year: "2024",
    },
  ];
  
  return {
    id: img.id,
    ...baseData[index],
    image: img.image,
  };
});

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<typeof realisations[0] | null>(null);

  const filteredRealisations =
    selectedCategory === "Tous"
      ? realisations
      : realisations.filter((r) => r.category === selectedCategory);

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
                Nos Réalisations
              </h1>
              <p className="text-2xl text-[#475569] font-light max-w-3xl mx-auto">
                Découvrez nos projets récents et laissez-vous inspirer par nos réalisations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-white border-b border-[#e2e8f0]/50">
          <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#1e40af] text-white shadow-ultra-soft"
                      : "bg-white text-[#0a0a0a] hover:bg-[#f8fafc] border border-[#e2e8f0]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredRealisations.map((realisation, index) => (
                  <motion.div
                    key={realisation.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(realisation)}
                  >
                    <div className="relative overflow-hidden rounded-[3rem] bg-white shadow-ultra-soft hover:shadow-ultra-soft-hover transition-all duration-500 border border-[#e2e8f0]/50">
                      <div className="relative h-64 overflow-hidden">
                        <PremiumImage
                          src={realisation.image}
                          alt={realisation.title}
                          width={600}
                          height={400}
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <p className="text-sm font-medium">{realisation.location} • {realisation.year}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <span className="text-sm font-semibold text-[#1e40af] mb-2 block">
                          {realisation.category}
                        </span>
                        <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">
                          {realisation.title}
                        </h3>
                        <p className="text-[#475569] font-light">
                          {realisation.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-[3rem] overflow-hidden shadow-ultra-soft-hover"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <X className="h-6 w-6 text-[#0a0a0a]" />
              </button>
              <div className="relative h-96">
                <PremiumImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1200}
                  height={600}
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <span className="text-sm font-semibold text-[#1e40af] mb-2 block">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-lg text-[#475569] mb-4 font-light">
                  {selectedProject.description}
                </p>
                <div className="flex items-center gap-4 text-[#64748b]">
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <span>{selectedProject.year}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
