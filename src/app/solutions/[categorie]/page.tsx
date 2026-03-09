"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PremiumImage from "@/components/images/PremiumImage";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { images } from "@/lib/images";

const solutions = {
  "chassis-pvc": {
    title: "Châssis PVC",
    subtitle: "Isolation exceptionnelle et confort optimal",
    description: "Les châssis PVC offrent une isolation thermique et phonique exceptionnelle, garantissant un confort optimal toute l'année. Fabriqués en Belgique avec des matériaux de première qualité, ils allient performance énergétique et esthétique moderne.",
    benefits: [
      "Isolation thermique exceptionnelle (jusqu'à -30% sur vos factures)",
      "Isolation phonique renforcée pour un silence absolu",
      "Entretien minimal, résistance aux intempéries",
      "Garantie 10 ans sur la pose et les matériaux",
      "Fabrication 100% belge (Sofarau)",
    ],
    image: images.solutions["chassis-pvc"].hero,
  },
  "chassis-aluminium": {
    title: "Châssis Aluminium",
    subtitle: "Design moderne et résistance maximale",
    description: "Les châssis aluminium allient esthétique contemporaine et performance technique. Parfaits pour les projets modernes, ils offrent une résistance exceptionnelle et des finitions soignées.",
    benefits: [
      "Design contemporain et élégant",
      "Résistance maximale aux intempéries",
      "Profils fins pour des ouvertures maximales",
      "Personnalisation des couleurs et finitions",
      "Durabilité exceptionnelle (30+ ans)",
    ],
    image: images.solutions["chassis-aluminium"].hero,
  },
  portes: {
    title: "Portes d'Entrée",
    subtitle: "Sécurité renforcée et isolation parfaite",
    description: "Protégez votre foyer avec nos portes d'entrée haut de gamme. Alliant sécurité renforcée, isolation thermique et esthétique soignée, elles sont le premier rempart de votre maison.",
    benefits: [
      "Sécurité renforcée (multi-points, serrures certifiées)",
      "Isolation thermique et phonique optimale",
      "Design personnalisable selon vos goûts",
      "Résistance aux effractions (certification A2P)",
      "Garantie 10 ans sur la pose",
    ],
    image: images.solutions.portes.hero,
  },
  volets: {
    title: "Volets Roulants",
    subtitle: "Protection solaire, sécurité et intimité",
    description: "Les volets roulants offrent une protection complète : isolation thermique, sécurité renforcée, intimité et protection solaire. Un investissement qui améliore significativement votre confort de vie.",
    benefits: [
      "Isolation thermique supplémentaire (jusqu'à -15% d'énergie)",
      "Protection solaire efficace",
      "Sécurité renforcée contre les effractions",
      "Intimité totale",
      "Motorisation disponible (domotique compatible)",
    ],
    image: images.solutions.volets.hero,
  },
  moustiquaires: {
    title: "Moustiquaires",
    subtitle: "Protection contre les insectes sans compromis",
    description: "Profitez de la ventilation naturelle tout en étant protégé des insectes. Nos moustiquaires s'intègrent parfaitement à vos châssis existants et nouveaux.",
    benefits: [
      "Protection efficace contre les insectes",
      "Ventilation naturelle préservée",
      "Installation discrète et esthétique",
      "Entretien minimal",
      "Différents systèmes disponibles (coulissantes, fixes, pliantes)",
    ],
    image: images.solutions.moustiquaires.hero,
  },
};

export default function SolutionPage({
  params,
}: {
  params: { categorie: string };
}) {
  const [mounted, setMounted] = useState(false);
  const [solutionData, setSolutionData] = useState<typeof solutions[keyof typeof solutions] | null>(null);

  useEffect(() => {
    setMounted(true);
    const sol = solutions[params.categorie as keyof typeof solutions];
    if (sol) {
      // Use centralized image system
      const imageData = images.solutions[params.categorie as keyof typeof images.solutions];
      if (imageData) {
        sol.image = imageData.hero;
      }
      setSolutionData(sol);
    }
  }, [params.categorie]);

  if (!mounted) {
    return null;
  }

  const solution = solutionData || solutions[params.categorie as keyof typeof solutions];

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0a0a0a] mb-4">Page non trouvée</h1>
          <p className="text-[#475569] mb-8">Cette solution n'existe pas.</p>
          <Link href="/solutions">
            <Button variant="primary">Retour aux solutions</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/5 via-white to-[#f1f5f9]" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0a0a0a] mb-6 leading-tight tracking-tight">
                  {solution.title}
                </h1>
                <p className="text-2xl text-[#475569] mb-8 font-light">
                  {solution.subtitle}
                </p>
                <p className="text-xl text-[#64748b] mb-12 leading-relaxed font-light">
                  {solution.description}
                </p>
                <Link href="/devis">
                  <Button variant="primary" size="lg" className="px-10 py-6 rounded-2xl">
                    Demander un Devis
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <PremiumImage
                  src={solution.image}
                  alt={solution.title}
                  width={800}
                  height={600}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 lg:py-48 bg-white">
          <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6 leading-tight">
                Avantages & Bénéfices
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {solution.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 p-6 rounded-3xl bg-gradient-to-br from-white to-[#f8fafc] border border-[#e2e8f0]/50 shadow-ultra-soft hover:shadow-ultra-soft-hover transition-all duration-500"
                >
                  <div className="p-2 bg-[#1e40af]/10 rounded-xl flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-[#1e40af]" />
                  </div>
                  <p className="text-lg text-[#0a0a0a] font-light leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 lg:py-48 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a]">
          <div className="mx-auto max-w-4xl px-8 sm:px-12 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Prêt à transformer votre intérieur ?
              </h2>
              <p className="text-xl text-white/90 mb-12 font-light">
                Obtenez un devis personnalisé et gratuit pour votre projet
              </p>
              <Link href="/devis">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-12 py-6 rounded-2xl text-lg"
                >
                  Demander un Devis
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
