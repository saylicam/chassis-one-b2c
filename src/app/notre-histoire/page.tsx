"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { Factory, Handshake, Lightbulb, Users, Award, Phone, FileText, Wrench, ShieldCheck } from "lucide-react";

// Timeline data
const timelineEvents = [
  {
    year: "2009",
    title: "Création",
    description:
      "Naissance de Châssis One avec une vision simple : allier l'excellence industrielle à la précision artisanale.",
    icon: Factory,
  },
  {
    year: "2012",
    title: "Partenariat Schüco",
    description:
      "Signature d'un partenariat exclusif avec Schüco, leader mondial des systèmes de fenêtres haute performance.",
    icon: Handshake,
  },
  {
    year: "2015",
    title: "Synergie Sofarau",
    description:
      "Intégration avec Sofarau, notre unité de production locale à Wavre. Circuit court garanti, qualité maîtrisée.",
    icon: Factory,
  },
  {
    year: "2020",
    title: "Innovation Digitale",
    description:
      "Lancement de notre configurateur en ligne et digitalisation complète du parcours client pour une expérience premium.",
    icon: Lightbulb,
  },
];

const projectSteps = [
  {
    step: "01",
    id: "contact-metre",
    title: "Prise de contact & métré gratuit",
    description:
      "Vous nous contactez, nous organisons une visite technique gratuite et sans engagement à votre domicile.",
    icon: Phone,
  },
  {
    step: "02",
    id: "devis",
    title: "Devis personnalisé sous 48h",
    description:
      "Notre bureau technique de Wavre analyse votre projet et vous transmet un chiffrage détaillé.",
    icon: FileText,
  },
  {
    step: "03",
    id: "fabrication",
    title: "Fabrication chez Sofarau",
    description:
      "Vos châssis sont fabriqués sur mesure dans notre unité de production locale à Wavre, avec la technologie Schüco.",
    icon: Factory,
  },
  {
    step: "04",
    id: "pose",
    title: "Pose par nos artisans certifiés",
    description:
      "Installation professionnelle, propre et soignée, par notre équipe locale.",
    icon: Wrench,
  },
  {
    step: "05",
    id: "suivi-garantie",
    title: "Suivi & garantie 10 ans",
    description:
      "Un interlocuteur unique pour le SAV, et une garantie de 10 ans sur la pose et les matériaux.",
    icon: ShieldCheck,
  },
];

export default function NotreHistoirePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&auto=format&q=90"
              alt="Usine Sofarau - Wavre"
              fill
              className="object-cover grayscale"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-white">De l'usine à votre domicile :</span>
                <br />
                <span className="text-amber-400">l'excellence 100% belge</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-light max-w-3xl mx-auto">
                Une histoire de passion, d'expertise et d'engagement local depuis plus de 15 ans
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 lg:mb-24"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 tracking-tight">
                Notre Parcours
              </h2>
              <p className="text-lg text-[#64748b] font-light max-w-2xl mx-auto">
                Les étapes qui ont façonné notre identité et notre expertise
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 hidden lg:block" />

              {/* Events */}
              <div className="space-y-16 lg:space-y-24">
                {timelineEvents.map((event, index) => {
                  const IconComponent = event.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Point sur la ligne */}
                      <div className="absolute left-8 lg:left-1/2 top-8 transform -translate-x-1/2 z-10">
                        <div className="w-4 h-4 rounded-full bg-[#1e40af] border-4 border-white shadow-lg" />
                      </div>

                      {/* Contenu */}
                      <div
                        className={`flex-1 lg:w-1/2 ${
                          isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-4 mb-4 ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          <div className="w-12 h-12 rounded-lg bg-[#1e40af]/10 flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-[#1e40af]" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-[#1e40af] uppercase tracking-wider">
                              {event.year}
                            </span>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#0a0a0a] mt-1">
                              {event.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-[#64748b] font-light leading-relaxed text-lg">
                          {event.description}
                        </p>
                      </div>

                      {/* Espace vide pour l'alternance */}
                      <div className="hidden lg:block lg:w-1/2" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Duo Gagnant Section */}
        <section className="py-20 lg:py-32 bg-[#f9fafb]">
          <div className="mx-auto max-w-7xl px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 lg:mb-24"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 tracking-tight">
                Le Duo Gagnant
              </h2>
              <p className="text-lg text-[#64748b] font-light max-w-2xl mx-auto">
                La synergie parfaite entre fabrication industrielle et savoir-faire artisanal
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Sofarau */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 lg:p-12 border border-[#e2e8f0]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#1e40af]/10 flex items-center justify-center">
                    <Factory className="h-8 w-8 text-[#1e40af]" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0a0a0a]">
                      Sofarau
                    </h3>
                    <p className="text-[#64748b] font-light">La puissance de fabrication</p>
                  </div>
                </div>
                <p className="text-[#64748b] font-light leading-relaxed text-lg mb-6">
                  Notre unité de production locale à Wavre, spécialisée dans la fabrication de
                  châssis haute performance. Accès direct à la technologie Schüco, contrôle qualité
                  rigoureux, et circuit court garanti.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#0a0a0a]">
                    <Award className="h-5 w-5 text-[#1e40af] flex-shrink-0" />
                    <span className="font-light">Certification Schüco</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#0a0a0a]">
                    <Award className="h-5 w-5 text-[#1e40af] flex-shrink-0" />
                    <span className="font-light">Production 100% belge</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#0a0a0a]">
                    <Award className="h-5 w-5 text-[#1e40af] flex-shrink-0" />
                    <span className="font-light">Contrôle qualité à chaque étape</span>
                  </li>
                </ul>
              </motion.div>

              {/* Châssis One */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 lg:p-12 border border-[#e2e8f0]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Users className="h-8 w-8 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0a0a0a]">
                      Châssis One
                    </h3>
                    <p className="text-[#64748b] font-light">La précision de la pose et le conseil</p>
                  </div>
                </div>
                <p className="text-[#64748b] font-light leading-relaxed text-lg mb-6">
                  Notre équipe d'experts locaux, formée aux dernières techniques de pose. Un
                  accompagnement personnalisé de l'étude technique à la réception de chantier, avec
                  un interlocuteur unique pour chaque projet.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#0a0a0a]">
                    <Award className="h-5 w-5 text-amber-700 flex-shrink-0" />
                    <span className="font-light">Poseurs certifiés</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#0a0a0a]">
                    <Award className="h-5 w-5 text-amber-700 flex-shrink-0" />
                    <span className="font-light">Conseil sur mesure</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#0a0a0a]">
                    <Award className="h-5 w-5 text-amber-700 flex-shrink-0" />
                    <span className="font-light">Suivi de A à Z</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comment se déroule votre projet */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 lg:mb-24"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 tracking-tight">
                Comment se déroule votre projet
              </h2>
              <p className="text-lg text-[#64748b] font-light max-w-2xl mx-auto">
                De la prise de contact à la garantie, un accompagnement complet par notre équipe locale
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 hidden lg:block" />

              <div className="space-y-16 lg:space-y-24">
                {projectSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      <div className="absolute left-8 lg:left-1/2 top-8 transform -translate-x-1/2 z-10">
                        <div className="w-4 h-4 rounded-full bg-[#1e40af] border-4 border-white shadow-lg" />
                      </div>

                      <div
                        className={`flex-1 lg:w-1/2 ${
                          isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-4 mb-4 ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          <div className="w-12 h-12 rounded-lg bg-[#1e40af]/10 flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-[#1e40af]" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-[#1e40af] uppercase tracking-wider">
                              Étape {step.step}
                            </span>
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#0a0a0a] mt-1">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-[#64748b] font-light leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>

                      <div className="hidden lg:block lg:w-1/2" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
