"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { Factory, Handshake, Lightbulb, Users, Award } from "lucide-react";

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

// Team members
const teamMembers = [
  {
    name: "Jean Dupont",
    role: "Poseur Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=90",
    experience: "12 ans d'expérience",
  },
  {
    name: "Marie Martin",
    role: "Métreur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format&q=90",
    experience: "8 ans d'expérience",
  },
  {
    name: "Pierre Dubois",
    role: "Poseur Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format&q=90",
    experience: "10 ans d'expérience",
  },
  {
    name: "Sophie Lambert",
    role: "Conseillère Technique",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format&q=90",
    experience: "6 ans d'expérience",
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                De l'usine à votre domicile :
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
                      key={index}
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

        {/* Les Visages - Galerie de portraits */}
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
                Les Visages
              </h2>
              <p className="text-lg text-[#64748b] font-light max-w-2xl mx-auto">
                L'équipe locale qui donne vie à chaque projet avec passion et expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:border-[#cbd5e1] transition-colors">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-[#0a0a0a] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#64748b] font-light mb-2">{member.role}</p>
                      <p className="text-sm text-[#94a3b8] font-light">{member.experience}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
