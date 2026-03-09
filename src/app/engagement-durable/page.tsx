"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface MuseumBlockProps {
  id: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imagePlaceholder: string;
}

function MuseumBlock({
  id,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imagePlaceholder,
}: MuseumBlockProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <section
      id={id}
      className="relative w-full bg-white py-[15vh]"
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        {/* Image avec animation reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 lg:mb-20"
        >
          {hasError || !imageSrc ? (
            <div className="w-full aspect-[16/10] bg-slate-100 flex items-center justify-center rounded-lg">
              <p className="text-sm text-slate-400 font-light px-8 text-center max-w-md">
                {imagePlaceholder}
              </p>
            </div>
          ) : (
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                onError={() => setHasError(true)}
              />
            </div>
          )}
        </motion.div>

        {/* Contenu texte - Style musée */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Titre en bleu Contact */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-[#1e40af] mb-8 leading-tight uppercase tracking-[0.12em]"
            style={{
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontWeight: 200,
            }}
          >
            {title}
          </motion.h2>

          {/* Paragraphes aérés */}
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-base sm:text-lg lg:text-xl font-light text-[#1f2937] leading-[1.9]"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const museumBlocks: MuseumBlockProps[] = [
  {
    id: "origine",
    title: "RIEN NE SE PERD.",
    paragraphs: [
      "Le caractère durable d'un châssis commence par son origine. Chez Châssis One, nous intégrons le cycle complet du PVC Schüco.",
      "Grâce à des processus de pointe, les chutes de production et les anciens profilés sont transformés en granulés de haute pureté. Cette matière première recyclée est réinjectée au cœur de nos nouveaux châssis.",
      "Résultat : une empreinte carbone réduite de 40% par rapport à un PVC vierge, sans altérer la blancheur ni la résistance structurelle.",
    ],
    imageSrc: "/images/eco/eco-1.jpg",
    imageAlt: "Processus de recyclage PVC Schüco - Économie circulaire",
    imagePlaceholder: "En attente de visuel : Économie circulaire PVC",
  },
  {
    id: "bouclier",
    title: "L'EFFICIENCE COMME STANDARD.",
    paragraphs: [
      "La véritable écologie réside dans l'énergie que vous ne consommez pas. Nos systèmes multi-chambres avec joints EPDM haute densité agissent comme un bouclier thermique actif.",
      "En stabilisant la température intérieure de votre foyer, nos châssis permettent une réduction drastique des émissions de CO2 liées au chauffage et à la climatisation.",
      "C'est l'alliance parfaite entre le confort absolu du Brabant Wallon et le respect des objectifs climatiques européens.",
    ],
    imageSrc: "/images/eco/eco-2.jpg",
    imageAlt: "Isolation thermique multi-chambres - Performance énergétique",
    imagePlaceholder: "En attente de visuel : Performance thermique",
  },
  {
    id: "heritage",
    title: "INVESTIR DANS LE TEMPS.",
    paragraphs: [
      "Réduire l'impact environnemental, c'est avant tout fabriquer des produits qui durent. La technologie Schüco 'Made in Germany' assure une stabilité mécanique et une tenue des couleurs garanties sur plusieurs décennies.",
      "En choisissant des matériaux capables de traverser 30 ou 40 ans sans perte de performance, vous limitez le renouvellement des ressources.",
      "Vous valorisez durablement votre patrimoine immobilier avec une conscience écologique affirmée.",
    ],
    imageSrc: "/images/eco/eco-3.jpg",
    imageAlt: "Châssis Schüco durable - Investissement long terme",
    imagePlaceholder: "En attente de visuel : Durabilité Signature",
  },
];

export default function EngagementDurablePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Bouton Retour discret */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed top-24 left-8 z-50"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white text-[#1f2937] font-light rounded-full text-sm transition-all duration-300 hover:bg-[#f9fafb] shadow-sm border border-[#e5e7eb]"
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              RETOUR
            </motion.button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="relative py-32 lg:py-48 bg-white">
          <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#1e40af] mb-8 leading-tight uppercase tracking-[0.12em]"
                style={{
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontWeight: 200,
                }}
              >
                ENGAGEMENT DURABLE
              </h1>
              <p
                className="text-xl lg:text-2xl text-[#1f2937] font-light leading-relaxed"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                L'innovation écologique au service de votre habitat
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blocs musée - Style Floating */}
        {museumBlocks.map((block) => (
          <MuseumBlock key={block.id} {...block} />
        ))}

        {/* Section finale */}
        <section className="relative py-32 lg:py-48 bg-white">
          <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-[#1e40af] mb-8 leading-tight uppercase tracking-[0.12em]"
                style={{
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontWeight: 200,
                }}
              >
                UNE FENÊTRE, UN ENGAGEMENT
              </h2>
              <p
                className="text-lg sm:text-xl lg:text-2xl text-[#1f2937] font-light leading-relaxed max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                Choisir Châssis One, c'est opter pour un habitat durable qui respecte l'environnement tout en préservant votre confort et votre patrimoine.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
