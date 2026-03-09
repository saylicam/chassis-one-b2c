"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PremiumImage from "@/components/images/PremiumImage";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  realisationFilters as filters,
  realisationProjects as projects,
} from "@/data/realisations";

export default function RealisationsPage() {
  const [filteredProjects, setFilteredProjects] = useState<(typeof projects)[0][]>(
    projects
  );
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const handleFilter = (tag: string) => {
    if (tag === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.tag === tag));
    }
    setSelectedFilter(tag);
  };

  return (
    <>
      <Navbar />

      {/* Effet de grain très léger sur toute la page Réalisations */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.02] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15,23,42,0.25) 1px, transparent 0)",
          backgroundSize: "3px 3px",
        }}
      />

      <main className="relative z-10 bg-transparent">
        {/* Section Intro */}
        <section className="relative py-32 lg:py-48 bg-white">
          <div className="mx-auto max-w-4xl px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-8 leading-tight">
                Nos Réalisations
              </h1>
              <p className="text-lg lg:text-xl font-light text-[#1F2937]/70 leading-relaxed max-w-3xl mx-auto">
                Découvrez nos interventions les plus marquantes dans le Brabant
                Wallon. Une démonstration de notre savoir-faire, entre performance
                technique Schüco et esthétique durable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filtres */}
        <section className="py-8 bg-white border-b border-[#004aad]/10">
          <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
            <div className="flex flex-wrap gap-8 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.tag}
                  onClick={() => handleFilter(filter.tag)}
                  className={`relative text-sm font-light uppercase tracking-widest transition-all duration-300 ${
                    selectedFilter === filter.tag
                      ? "text-[#004aad]"
                      : "text-[#1F2937]/60 hover:text-[#004aad]"
                  }`}
                >
                  {filter.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-px bg-[#004aad] transition-all duration-300 ${
                      selectedFilter === filter.tag
                        ? "opacity-100"
                        : "opacity-0 hover:opacity-50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grille de Réalisations */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1500px] px-8 lg:px-16">
            <div
              key={selectedFilter}
              className="grid grid-cols-1 md:grid-cols-3 gap-16"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((realisation, index) => (
                  <motion.div
                    key={realisation.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(realisation)}
                  >
                    <div className="relative bg-white rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          whileHover={{ scale: 1.03 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <Image
                            src={realisation.image}
                            alt={realisation.title}
                            fill
                            className="object-cover transition duration-300 group-hover:brightness-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            quality={95}
                          />
                        </motion.div>
                      </div>

                      <div className="h-px bg-[#004aad]/10" />

                      <div className="p-6">
                        <h3 className="text-base font-semibold text-[#004aad] mb-2 leading-snug line-clamp-2 transition-transform duration-300 group-hover:translate-x-[3px]">
                          {realisation.title}
                        </h3>
                        <p className="text-[10px] font-light text-[#1F2937]/60 uppercase tracking-[0.3em] transition-transform duration-300 group-hover:translate-x-[3px]">
                          {realisation.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA "Votre Projet" */}
        <section className="relative py-32 lg:py-48 bg-white">
          <div className="mx-auto max-w-4xl px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xl lg:text-2xl font-light text-[#1F2937] mb-12 leading-relaxed">
                Votre vision mérite notre expertise. Discutons de votre future
                réalisation.
              </p>
              <Link href="/devis">
                <motion.button
                  whileHover={{ opacity: 0.9 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-[#0a0a0a] text-white font-medium rounded-full transition-opacity duration-300"
                >
                  Demander une étude personnalisée
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Modale projet plein écran */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f172a]/40 backdrop-blur-2xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center max-w-[85vw]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-4 -right-2 md:-top-6 md:-right-6 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
              >
                <X className="h-5 w-5 text-[#020617]" />
              </button>

              <div className="relative w-full max-w-[1100px] max-h-[85vh] flex items-center justify-center">
                <div className="relative w-full aspect-[4/5] cursor-zoom-out">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain rounded-[1.5rem]"
                    sizes="(max-width: 768px) 100vw, 70vw"
                    quality={95}
                  />
                </div>
              </div>

              <div className="mt-6 text-center">
                <h2 className="text-base font-semibold text-white mb-2 leading-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-[10px] font-light text-white/80 uppercase tracking-[0.3em]">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

