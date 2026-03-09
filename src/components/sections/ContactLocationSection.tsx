"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LeafletShowroomMap from "./LeafletShowroomMap";

const ADDRESS = "Av. Vésale 26, 1300 Wavre";
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const HORAIRES = [
  { jours: "Lun – Ven", creneau: "08:30 – 12:00  |  13:00 – 17:00", key: "weekday" },
  { jours: "Sam", creneau: "10:00 – 13:00", key: "saturday" },
  { jours: "Dim", creneau: "Fermé", key: "sunday" },
] as const;

function isOpenNow(): boolean {
  const now = new Date();
  const brussels = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Brussels" }));
  const day = brussels.getDay();
  const hour = brussels.getHours();
  const minute = brussels.getMinutes();
  const timeMinutes = hour * 60 + minute;
  if (day === 0) return false;
  if (day === 6) return timeMinutes >= 10 * 60 && timeMinutes < 13 * 60;
  const morningOpen = 8 * 60 + 30;
  const morningClose = 12 * 60;
  const afternoonOpen = 13 * 60;
  const afternoonClose = 17 * 60;
  return (
    (timeMinutes >= morningOpen && timeMinutes < morningClose) ||
    (timeMinutes >= afternoonOpen && timeMinutes < afternoonClose)
  );
}

export default function ContactLocationSection() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(isOpenNow());
  }, []);

  return (
    <section className="bg-[#FFFFFF] text-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-8 lg:px-16 py-16 lg:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-light tracking-tight text-center mb-12 lg:mb-14"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        >
          Nous Rencontrer
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[65%_1fr] gap-0 items-stretch">
          {/* Carte Leaflet + CartoDB Positron — 65% desktop */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden min-h-[320px] order-2 lg:order-1"
          >
            <LeafletShowroomMap />
          </motion.div>

          {/* Bloc Infos Atelier — 35% desktop */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col justify-center lg:pl-12 lg:pr-0 pt-10 lg:pt-0 order-1 lg:order-2"
          >
            <h3
              className="text-lg font-bold tracking-[0.2em] uppercase text-[#0a0a0a] mb-6"
              style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
            >
              Showroom Wavre
            </h3>

            <p className="text-sm font-light text-[#404040] mb-6 leading-relaxed" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
              {ADDRESS}
            </p>

            {/* Horaires : colonnes propres, ligne pointillée entre jour et heure */}
            <ul className="space-y-0 mb-8">
              {HORAIRES.map((h) => (
                <li key={h.key} className="grid grid-cols-[auto_1fr_auto] gap-3 items-baseline py-3 border-b border-[#e5e5e5] last:border-b-0">
                  <span className="text-sm font-bold text-[#0a0a0a] shrink-0" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
                    {h.jours}
                  </span>
                  <span className="border-b border-dotted border-[#c4c4c4] min-w-0 self-end mb-1" aria-hidden />
                  <span className="text-sm text-[#0a0a0a] shrink-0 text-right tabular-nums" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
                    {h.creneau}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-[#737373] mb-6" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
              {isOpen ? "Ouvert maintenant" : "Fermé"}
            </p>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-4 bg-white border border-[#0a0a0a] text-[#0a0a0a] text-sm font-medium tracking-wide hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300"
              style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
            >
              Ouvrir dans Google Maps
            </a>
          </motion.div>
        </div>

        {/* Formulaire de contact minimaliste — destination info@chassisone.com */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 lg:mt-24 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-light text-[#0a0a0a] mb-8 text-center" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
            Nous écrire
          </h3>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

const CONTACT_EMAIL = "info@chassisone.com";

function ContactForm() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(sujet || "Contact depuis le site");
    const body = encodeURIComponent(
      [
        `Nom : ${nom}`,
        `E-mail : ${email}`,
        `Téléphone : ${telephone}`,
        `Sujet : ${sujet}`,
        "",
        message,
      ].join("\n")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="sr-only">Nom</span>
          <input
            type="text"
            required
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-[#e5e5e5] rounded text-[#0a0a0a] text-sm font-light placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1e40af] transition-colors"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          />
        </label>
        <label className="block">
          <span className="sr-only">E-mail</span>
          <input
            type="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-[#e5e5e5] rounded text-[#0a0a0a] text-sm font-light placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1e40af] transition-colors"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Téléphone</span>
        <input
          type="tel"
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-[#e5e5e5] rounded text-[#0a0a0a] text-sm font-light placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1e40af] transition-colors"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        />
      </label>
      <label className="block">
        <span className="sr-only">Sujet</span>
        <input
          type="text"
          required
          placeholder="Sujet"
          value={sujet}
          onChange={(e) => setSujet(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-[#e5e5e5] rounded text-[#0a0a0a] text-sm font-light placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1e40af] transition-colors"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          required
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full px-4 py-3 bg-white border border-[#e5e5e5] rounded text-[#0a0a0a] text-sm font-light placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1e40af] transition-colors resize-y min-h-[120px]"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        />
      </label>
      <button
        type="submit"
        className="w-full py-4 bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-sm font-medium rounded transition-colors duration-300"
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        Envoyer
      </button>
    </form>
  );
}
