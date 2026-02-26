"use client";

import { motion } from "framer-motion";
import { Award, Shield, Factory, CheckCircle, Star, Users, MapPin } from "lucide-react";

const trustPoints = [
  {
    icon: Factory,
    title: "Fabrication 100% Belge",
    description: "Produits Sofarau, fabriqués en Belgique avec un savoir-faire d'excellence.",
  },
  {
    icon: Shield,
    title: "Garantie de Pose",
    description: "Garantie de 10 ans sur la pose et l'installation de vos châssis.",
  },
  {
    icon: Award,
    title: "Qualité Certifiée",
    description: "Normes européennes respectées, certifications de qualité garanties.",
  },
  {
    icon: CheckCircle,
    title: "Installation Professionnelle",
    description: "Pose experte par nos artisans qualifiés, soucieux des détails.",
  },
];

const testimonials = [
  {
    name: "Marie D.",
    location: "Wavre",
    text: "Un silence absolu depuis l'installation de nos nouveaux châssis. Un confort incomparable !",
    rating: 5,
  },
  {
    name: "Jean-Pierre L.",
    location: "Ottignies",
    text: "Professionnalisme exemplaire et résultat au-delà de nos attentes. Je recommande vivement.",
    rating: 5,
  },
];

export default function TrustSection() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Main Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-white border border-[#e2e8f0] rounded-xl">
            <div className="w-12 h-12 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center">
              <Factory className="h-6 w-6 text-[#64748b] stroke-[1.5]" />
            </div>
            <div className="text-left">
              <p className="font-bold text-[#0a0a0a] text-xl mb-1">Fabrication 100% Belge</p>
              <div className="flex items-center gap-2 text-[#64748b]">
                <MapPin className="h-4 w-4" />
                <p className="text-base font-light">Partenariat Sofarau - Wavre</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full bg-white border border-[#e2e8f0] rounded-xl p-8 text-center hover:border-[#cbd5e1] transition-colors">
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-[#64748b] stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3 tracking-tight">{point.title}</h3>
                  <p className="text-[#64748b] text-base font-light leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 tracking-tight">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-[#64748b] font-light">Des milliers de foyers nous font confiance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full bg-white border border-[#e2e8f0] rounded-xl p-8 hover:border-[#cbd5e1] transition-colors">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#d97706] text-[#d97706]" />
                    ))}
                  </div>
                  <p className="text-[#0a0a0a] mb-6 text-base leading-relaxed font-light">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#64748b] stroke-[1.5]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0a0a0a]">{testimonial.name}</p>
                      <p className="text-[#64748b] font-light text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: "Années d'expérience", value: "15+" },
            { label: "Clients satisfaits", value: "2000+" },
            { label: "Projets réalisés", value: "5000+" },
            { label: "Garantie", value: "10 ans" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-2 tracking-tight">{stat.value}</p>
              <p className="text-[#64748b] text-sm font-light">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
