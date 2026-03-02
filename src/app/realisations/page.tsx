"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PremiumImage from "@/components/images/PremiumImage";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const filters = [
  { label: "Tous", tag: "all" },
  { label: "Châssis PVC", tag: "pvc" },
  { label: "Châssis Aluminium", tag: "alu" },
  { label: "Portes", tag: "portes" },
  { label: "Volets", tag: "volets" },
];

const projects = [
  {
    id: 1,
    title: "Baie Coulissante XXL",
    description: "SYSTEME LEVANT-COULISSANT — SEUIL ENCASTRÉ PMR",
    materiau: "Aluminium",
    type: "Levant-coulissant",
    dormant: "Schüco",
    detail: "Seuil encastré PMR",
    tag: "alu",
    image: "/images/realisations/1.jpg",
  },
  {
    id: 2,
    title: "Façade Structurelle",
    description: "MUR-RIDEAU ALUMINIUM — VITRAGE HAUTE SÉLECTIVITÉ",
    materiau: "Aluminium",
    type: "Mur-rideau",
    dormant: "Schüco",
    detail: "Vitrage haute sélectivité",
    tag: "alu",
    image: "/images/realisations/2.jpg",
  },
  {
    id: 3,
    title: "Entrée Signature",
    description: "PORTE MONOBLOC — TIERCE VITRÉE FEUILLETÉE P4A",
    materiau: "Aluminium",
    type: "Porte d'entrée monobloc",
    dormant: "Sécurité RC2/P4A",
    detail: "Tierce vitrée feuilletée P4A",
    tag: "portes",
    image: "/images/realisations/3.jpg",
  },
  {
    id: 4,
    title: "Cintrage Architectural",
    description: "CHÂSSIS ALU CINTRÉ — ÉTANCHÉITÉ THERMO-SOUDÉE",
    materiau: "Aluminium",
    type: "Châssis cintré",
    dormant: "Schüco",
    detail: "Étanchéité thermo-soudée",
    tag: "alu",
    image: "/images/realisations/4.jpg",
  },
  {
    id: 5,
    title: "Oeil-de-Boeuf Passif",
    description: "CHÂSSIS CIRCULAIRE PVC — TRIPLE VITRAGE ACOUSTIQUE",
    materiau: "PVC",
    type: "Châssis circulaire",
    dormant: "PVC haute performance",
    detail: "Triple vitrage acoustique",
    tag: "pvc",
    image: "/images/realisations/5.jpg",
  },
  {
    id: 6,
    title: "Fenêtre à Frappe",
    description: "PVC GAMME PRESTIGE — OUVRANT CACHÉ MINIMALISTE",
    materiau: "PVC",
    type: "Fenêtre à frappe",
    dormant: "Gamme Prestige",
    detail: "Ouvrant caché minimaliste",
    tag: "pvc",
    image: "/images/realisations/6.jpg",
  },
  {
    id: 7,
    title: "Porte de Haute Sécurité",
    description: "FERMETURE 5 POINTS — SÉCURITÉ CERTIFIÉE RC2",
    materiau: "Aluminium",
    type: "Porte d'entrée",
    dormant: "Sécurité RC2",
    detail: "Fermeture 5 points",
    tag: "portes",
    image: "/images/realisations/7.jpg",
  },
  {
    id: 8,
    title: "Logistique & Pose en Hauteur",
    description: "INSTALLATION PAR ÉLÉVATEUR — MAÎTRISE DES CHANTIERS DIFFICILES",
    materiau: "Aluminium",
    type: "Installation en hauteur",
    dormant: "Maîtrise des chantiers difficiles",
    detail: "Installation par élévateur",
    tag: "alu",
    image: "/images/realisations/8.jpg",
  },
  {
    id: 9,
    title: "Menuiseries de Caractère",
    description: "ENSEMBLE CHÂSSIS & PORTE COORDONNÉS — TEINTE SABLE",
    materiau: "PVC",
    type: "Ensemble coordonné",
    dormant: "Teinte sable",
    detail: "Châssis & porte coordonnés",
    tag: "pvc",
    image: "/images/realisations/9.jpg",
  },
  {
    id: 10,
    title: "Verrière de Toiture",
    description: "PUITS DE LUMIÈRE ALU — CONTRÔLE SOLAIRE INTÉGRÉ",
    materiau: "Aluminium",
    type: "Puits de lumière",
    dormant: "Contrôle solaire intégré",
    detail: "Verrière de toiture aluminium",
    tag: "alu",
    image: "/images/realisations/10.jpg",
  },
  {
    id: 11,
    title: "Porte de Caractère",
    description: "CHÂSSIS DE PORTE CINTRÉ — FINITION BOISÉ HAUTE RÉSISTANCE",
    materiau: "Composite",
    type: "Porte d'entrée",
    dormant: "Finition boisé haute résistance",
    detail: "Châssis de porte cintré",
    tag: "portes",
    image: "/images/realisations/11.jpg",
  },
  {
    id: 12,
    title: "Coulissant d'Angle",
    description: "ANGLE OUVERT SANS POTEAU — FLUIDITÉ INTÉRIEUR-EXTÉRIEUR",
    materiau: "Aluminium",
    type: "Coulissant d'angle",
    dormant: "Ouverture sans poteau",
    detail: "Fluidité intérieur-extérieur",
    tag: "alu",
    image: "/images/realisations/12.jpg",
  },
  {
    id: 13,
    title: "Châssis Oscillo-Battant",
    description: "QUINCAILLERIE INVISIBLE — VENTILATION SÉCURISÉE",
    materiau: "PVC",
    type: "Oscillo-battant",
    dormant: "Quincaillerie invisible",
    detail: "Ventilation sécurisée",
    tag: "pvc",
    image: "/images/realisations/13.jpg",
  },
  {
    id: 14,
    title: "Double Battant Royal",
    description: "PORTE DOUBLE VANTAIL — VITRAGE SABLÉ À MOTIFS",
    materiau: "Aluminium",
    type: "Porte double vantail",
    dormant: "Vitrage sablé à motifs",
    detail: "Entrée majestueuse",
    tag: "portes",
    image: "/images/realisations/14.jpg",
  },
  {
    id: 15,
    title: "Baie à Galandage",
    description: "ALUMINIUM — ESCAMOTAGE DANS LE MUR",
    materiau: "Aluminium",
    type: "Baie à galandage",
    dormant: "Escamotage dans le mur",
    detail: "Disparition totale des ouvrants",
    tag: "alu",
    image: "/images/realisations/15.jpg",
  },
  {
    id: 16,
    title: "Fixe Panoramique",
    description: "CADRE NOYÉ DANS LA MAÇONNERIE — VUE INFINIE",
    materiau: "Aluminium",
    type: "Châssis fixe panoramique",
    dormant: "Cadre noyé dans la maçonnerie",
    detail: "Vue infinie",
    tag: "alu",
    image: "/images/realisations/16.jpg",
  },
  {
    id: 17,
    title: "Menuiserie Industrielle",
    description: "TEINTE ANTHRACITE MAT — PROFILÉS GRANDE RIGIDITÉ",
    materiau: "PVC",
    type: "Châssis PVC",
    dormant: "Teinte anthracite mat",
    detail: "Profils grande rigidité",
    tag: "pvc",
    image: "/images/realisations/17.jpg",
  },
  {
    id: 18,
    title: "Châssis avec Screen",
    description: "ALU — SCREEN MOTORISÉ INTÉGRÉ",
    materiau: "Aluminium",
    type: "Châssis avec screen",
    dormant: "Screen motorisé intégré",
    detail: "Protection solaire dynamique",
    tag: "alu",
    image: "/images/realisations/18.jpg",
  },
  {
    id: 19,
    title: "Entrée Pivotante XL",
    description: "PORTE À PIVOT DYNAMIQUE — FINITION CÉRAMIQUE",
    materiau: "Aluminium",
    type: "Porte pivotante",
    dormant: "Finition céramique",
    detail: "Entrée monumentale",
    tag: "portes",
    image: "/images/realisations/19.jpg",
  },
  {
    id: 20,
    title: "Rénovation de Façade",
    description: "CHÂSSIS PVC HAUTE PERFORMANCE — DÉCOUPE À L'ANCIENNE",
    materiau: "PVC",
    type: "Rénovation façade",
    dormant: "Découpe à l'ancienne",
    detail: "Châssis PVC haute performance",
    tag: "pvc",
    image: "/images/realisations/20.jpg",
  },
  {
    id: 21,
    title: "Entrée Architecturale",
    description:
      "ENSEMBLE PORTE ET CHÂSSIS SUPÉRIEUR — GRIS QUARTZ MAT",
    tag: "portes",
    image: "/images/realisations/21.jpg",
  },
  {
    id: 22,
    title: "Châssis Oscillo-Battant",
    description: "PVC HAUTE PERFORMANCE — COLORIS CHÊNE DORÉ",
    tag: "pvc",
    image: "/images/realisations/22.jpg",
  },
  {
    id: 25,
    title: "Baie à Galandage",
    description:
      "OUVERTURE TOTALE — INTÉGRATION DISCRÈTE DANS LA CLOISON",
    tag: "alu",
    image: "/images/realisations/25.jpg",
  },
  {
    id: 26,
    title: "Porte Design Géométrique",
    description: "MENUISERIE D'ENTRÉE — VITRAGE TRIPLEX SÉCURISÉ",
    tag: "portes",
    image: "/images/realisations/26.jpg",
  },
  {
    id: 27,
    title: "Rénovation de Façade",
    description:
      "REMPLACEMENT GLOBAL — CHÂSSIS PVC THERMO-ISOLANTS",
    tag: "pvc",
    image: "/images/realisations/27.jpg",
  },
  {
    id: 28,
    title: "Logistique de Levage",
    description:
      "POSE PAR GRUE — MANUTENTION DE VITRAGES TRIPLE ÉPAISSEUR",
    tag: "alu",
    image: "/images/realisations/28.jpg",
  },
  {
    id: 30,
    title: "Signature Chêne Doré",
    description:
      "PORTE D'ENTRÉE PVC — FINITION BOISÉ HAUTE RÉSINANCE",
    tag: "portes",
    image: "/images/realisations/30.jpg",
  },
];

export default function RealisationsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredRealisations =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.tag === selectedFilter);

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
        {/* Section Intro : "L'Art de la Métamorphose" */}
        <section className="relative py-32 lg:py-48 bg-white">
          <div className="mx-auto max-w-4xl px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h1
                className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-8 leading-tight"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                Nos Réalisations
              </h1>
              <p
                className="text-lg lg:text-xl font-light text-[#1F2937]/70 leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
              >
                Découvrez nos interventions les plus marquantes dans le Brabant Wallon. Une démonstration de notre savoir-faire, entre performance technique Schüco et esthétique durable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filtres Ultra-Minimalistes */}
        <section className="py-8 bg-white border-b border-[#004aad]/10">
          <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
            <div className="flex flex-wrap gap-8 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.tag}
                  onClick={() => setSelectedFilter(filter.tag)}
                  className={`relative text-sm font-light uppercase tracking-widest transition-all duration-300 ${
                    selectedFilter === filter.tag
                      ? "text-[#004aad]"
                      : "text-[#1F2937]/60 hover:text-[#004aad]"
                  }`}
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
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

        {/* Grille de Réalisations - 3 Colonnes Fixes Grand Format */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1500px] px-8 lg:px-16">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-3 gap-16"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence mode="popLayout">
                {filteredRealisations.map((realisation, index) => (
                  <motion.div
                    key={realisation.id}
                    layout
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    exit={{ opacity: 0, y: 30 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(realisation)}
                  >
                    <div className="relative bg-white rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
                      {/* Image grand format avec ratio uniforme 4/5 (portrait élégant) */}
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

                      {/* Ligne de séparation fine (Bleu Marine très léger) */}
                      <div className="h-px bg-[#004aad]/10" />

                      {/* Typographie sous l'image */}
                      <div className="p-6">
                        <h3
                          className="text-base font-semibold text-[#004aad] mb-2 leading-snug line-clamp-2 transition-transform duration-300 group-hover:translate-x-[3px]"
                          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                        >
                          {realisation.title}
                        </h3>
                        <p
                          className="text-[10px] font-light text-[#1F2937]/60 uppercase tracking-[0.3em] transition-transform duration-300 group-hover:translate-x-[3px]"
                          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                        >
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

        {/* Section CTA "Votre Projet" */}
        <section className="relative py-32 lg:py-48 bg-white">
          <div className="mx-auto max-w-4xl px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-xl lg:text-2xl font-light text-[#1F2937] mb-12 leading-relaxed"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
              >
                Votre vision mérite notre expertise. Discutons de votre future réalisation.
              </p>
              <Link href="/devis">
                <motion.button
                  whileHover={{ opacity: 0.9 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-[#0a0a0a] text-white font-medium rounded-full transition-opacity duration-300"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                >
                  Demander une étude personnalisée
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Galerie immersive : image centrée + infos sous l'image, fond flouté */}
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
              {/* Bouton de fermeture */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-4 -right-2 md:-top-6 md:-right-6 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
              >
                <X className="h-5 w-5 text-[#020617]" />
              </button>

              {/* Image centrée, entourée d'espace (max 85vh/85vw) */}
              <div className="relative w-full max-w-[1100px] max-h-[85vh] flex items-center justify-center">
                {/* Flèche gauche (style Apple) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = projects.findIndex(
                      (p) => p.id === selectedProject.id
                    );
                    const prevIndex =
                      (currentIndex - 1 + projects.length) % projects.length;
                    setSelectedProject(projects[prevIndex]);
                  }}
                  className="absolute left-0 md:-left-12 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/20"
                  aria-label="Projet précédent"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

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

                {/* Flèche droite (style Apple) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = projects.findIndex(
                      (p) => p.id === selectedProject.id
                    );
                    const nextIndex = (currentIndex + 1) % projects.length;
                    setSelectedProject(projects[nextIndex]);
                  }}
                  className="absolute right-0 md:-right-12 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/20"
                  aria-label="Projet suivant"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Bloc texte sous l'image (sans boîte blanche, texte pur) */}
              <div className="mt-6 text-center">
                <h2
                  className="text-base font-semibold text-white mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                >
                  {selectedProject.title}
                </h2>
                <p
                  className="text-[10px] font-light text-white/80 uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
                >
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
