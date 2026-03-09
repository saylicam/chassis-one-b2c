"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight, Mail, Phone } from "lucide-react";

const EMAIL = "info@chassisone.com";
const PHONE = "010/81 67 81";
const PHONE_LINK = "tel:+3210816781";

export default function ContactPage() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact depuis le site Châssis One");
    const body = encodeURIComponent(
      `Nom : ${nom}\nE-mail : ${email}\nTéléphone : ${telephone}\n\nMessage :\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFFFF]">
        <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase text-[#0a0a0a] mb-12 sm:mb-16 text-center"
            style={{
              fontFamily: "var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Montserrat', sans-serif",
            }}
          >
            PARLONS DE VOTRE PROJET
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
            {/* Formulaire */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div>
                <label htmlFor="nom" className="sr-only">
                  Nom
                </label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                  className="w-full bg-transparent border-0 border-b border-[#0a0a0a]/20 pb-3 pt-1 text-[#0a0a0a] placeholder:text-[#64748b] focus:outline-none focus:border-[#0a0a0a]/50 transition-colors text-base font-light"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-0 border-b border-[#0a0a0a]/20 pb-3 pt-1 text-[#0a0a0a] placeholder:text-[#64748b] focus:outline-none focus:border-[#0a0a0a]/50 transition-colors text-base font-light"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                />
              </div>
              <div>
                <label htmlFor="telephone" className="sr-only">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  placeholder="Téléphone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#0a0a0a]/20 pb-3 pt-1 text-[#0a0a0a] placeholder:text-[#64748b] focus:outline-none focus:border-[#0a0a0a]/50 transition-colors text-base font-light"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-[#0a0a0a]/20 pb-3 pt-1 text-[#0a0a0a] placeholder:text-[#64748b] focus:outline-none focus:border-[#0a0a0a]/50 transition-colors text-base font-light resize-y min-h-[100px]"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                />
              </div>
              <div className="pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#0a0a0a] text-[#0a0a0a] text-xs font-medium tracking-[0.15em] uppercase bg-transparent hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                >
                  Envoyer
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.button>
              </div>
            </motion.form>

            {/* Infos de contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-0 lg:pt-2 border-t lg:border-t-0 lg:border-l border-[#e5e7eb] lg:pl-12"
            >
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#64748b] mb-4">
                Contact direct
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-[#0a0a0a] font-light hover:opacity-70 transition-opacity mb-4"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                <Mail className="h-4 w-4 shrink-0 text-[#0a0a0a]/60" />
                <span>{EMAIL}</span>
              </a>
              <a
                href={PHONE_LINK}
                className="flex items-center gap-3 text-[#0a0a0a] font-light hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
              >
                <Phone className="h-4 w-4 shrink-0 text-[#0a0a0a]/60" />
                <span>{PHONE}</span>
              </a>
              <p className="mt-6 text-sm text-[#64748b] font-light leading-relaxed">
                Av. Vésale 26, 1300 Wavre
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
