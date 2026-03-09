"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "Châssis PVC", href: "/pvc" },
    { label: "Châssis Aluminium", href: "/alu" },
    { label: "Volets Roulants", href: "/volets" },
    { label: "Portes d'Entrée", href: "/portes" },
  ],
  navigation: [
    { label: "À propos", href: "#apropos" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Devis", href: "/devis" },
    { label: "Garanties", href: "#apropos" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100027942717306", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/chassisone/?hl=fr", label: "Instagram" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 py-20 lg:py-28">
        {/* Main Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Column 1: BRANDING */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <h3 
                className="text-2xl font-light tracking-[0.15em] uppercase text-white"
                style={{
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontWeight: 300,
                  color: "#FFFFFF",
                }}
              >
                Châssis One
              </h3>
            </Link>
            <p 
              className="text-sm text-[#b5b5b5] leading-relaxed font-light"
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontWeight: 300,
              }}
            >
              Expert en pose de châssis et menuiserie à Wavre. Votre confort, notre expertise depuis plus de 15 ans.
            </p>
          </div>

          {/* Column 2: SOLUTIONS */}
          <div>
            <h4 
              className="text-sm font-semibold mb-6 uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                color: "#FFFFFF",
              }}
            >
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b5b5b5] hover:text-white transition-colors duration-300 font-light"
                    style={{
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: NAVIGATION */}
          <div>
            <h4 
              className="text-sm font-semibold mb-6 uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                color: "#FFFFFF",
              }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-sm text-[#b5b5b5] hover:text-white transition-colors duration-300 font-light"
                    style={{
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div>
            <h4 
              className="text-sm font-semibold mb-6 uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                color: "#FFFFFF",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#b5b5b5] mt-0.5 shrink-0" aria-hidden />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+V%C3%A9sale+26,+1300+Wavre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#b5b5b5] hover:text-white transition-colors duration-300 font-light leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Av. Vésale 26, 1300 Wavre
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#b5b5b5] shrink-0" aria-hidden />
                <a
                  href="tel:+3210816781"
                  className="text-sm text-[#b5b5b5] hover:text-white transition-colors duration-300 font-light"
                  style={{
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  010/81 67 81
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#b5b5b5] shrink-0" aria-hidden />
                <a
                  href="mailto:info@chassisone.com"
                  className="text-sm text-[#b5b5b5] hover:text-white transition-colors duration-300 font-light"
                  style={{
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  info@chassisone.com
                </a>
              </li>
            </ul>
            {/* Social Icons — alignés sous le bloc contact */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b5b5b5] hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright Signature */}
        <div className="border-t border-[#2a2a2a] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1">
            <p 
              className="text-xs text-[#b5b5b5] font-light text-center"
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontWeight: 300,
              }}
            >
              © {new Date().getFullYear()} Châssis One. Expertise & Durabilité.
            </p>
            <span className="hidden sm:inline text-xs text-[#2a2a2a]">|</span>
            <p 
              className="text-xs text-[#b5b5b5] font-light text-center"
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontWeight: 300,
              }}
            >
              Crafted with precision by{" "}
              <a
                href="https://ilyxlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFFFF] hover:text-[#FFFFFF] transition-all duration-300 font-light relative group"
                style={{
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                }}
              >
                <span className="relative">
                  ilyxlabs
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#FFFFFF] group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
