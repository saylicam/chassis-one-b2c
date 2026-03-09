"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 8;
const TOP_THRESHOLD = 20;

const LOGO_PATH = "/images/logo-chassis-one.png";

const solutionsDropdown = [
  { label: "Châssis PVC", href: "/pvc" },
  { label: "Châssis Aluminium", href: "/alu" },
  { label: "Volets Roulants", href: "/volets" },
];

const navItems = [
  { label: "Portes", href: "/portes" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Notre Histoire", href: "/notre-histoire" },
  { label: "Devis", href: "/devis" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY ?? document.documentElement.scrollTop;
      if (y <= TOP_THRESHOLD) {
        setNavbarVisible(true);
      } else if (y > lastScrollY.current && y - lastScrollY.current > SCROLL_THRESHOLD) {
        setNavbarVisible(false);
      } else if (lastScrollY.current - y > SCROLL_THRESHOLD) {
        setNavbarVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isSolutionsActive = solutionsDropdown.some((item) => pathname === item.href);

  // Liste simple pour le menu mobile full-screen (5 items)
  const mobileMenuItems = [
    { label: "Châssis", href: "/solutions" },
    { label: "Portes", href: "/portes" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Notre Histoire", href: "/notre-histoire" },
    { label: "Devis", href: "/devis" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 nav-bar-border md:bg-white/95 md:backdrop-blur-md transition-transform duration-300 ease-out"
      style={{ transform: navbarVisible ? "translateY(0)" : "translateY(-100%)" }}
    >
      {/* Header: mobile = blanc + ombre ; desktop = transparent / blur */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-16 h-14 md:h-16 flex items-center justify-between bg-[#FFFFFF] shadow-sm md:shadow-none md:bg-white/95 md:backdrop-blur-md">
        {/* Logo — gauche, hauteur fixe 30px sur mobile */}
        <Link
          href="/"
          className="relative shrink-0 hover:opacity-90 transition-opacity h-[30px] w-[100px] md:h-10 md:w-[140px]"
          aria-label="Châssis One - Retour à l'accueil"
        >
          <Image
            src={LOGO_PATH}
            alt="Châssis One"
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 100px, 140px"
            priority
          />
        </Link>

          {/* Desktop Navigation - Centré */}
          <div className="hidden md:flex md:items-center md:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {/* Menu déroulant Solutions */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                className={cn(
                  "flex items-center gap-1 relative text-sm font-light text-[#64748b] hover:text-[#0a0a0a] transition-colors tracking-wide py-2",
                  isSolutionsActive && "text-[#0a0a0a]"
                )}
                aria-expanded={isSolutionsOpen}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isSolutionsOpen && "rotate-180")} />
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[#1e40af]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {isSolutionsActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#1e40af]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    className="absolute top-full left-0 pt-1 z-50 min-w-[200px]"
                  >
                    <div className="bg-white rounded-lg border border-gray-100 shadow-lg py-2">
                      {solutionsDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm font-light transition-colors",
                            pathname === item.href ? "text-[#1e40af] bg-[#f0f7ff]" : "text-[#64748b] hover:bg-[#f9fafb] hover:text-[#0a0a0a]"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-light text-[#64748b] hover:text-[#0a0a0a] transition-colors tracking-wide",
                  isActive(item.href) && "text-[#0a0a0a]"
                )}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[#1e40af]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {isActive(item.href) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#1e40af]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Contact (page dédiée) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                CONTACT
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile: hamburger visible sur Hero (backdrop + ombre) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 -m-1 rounded-lg transition-colors bg-white/90 backdrop-blur-sm shadow-md text-[#0f172a] hover:bg-white"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
      </div>

      {/* Mobile Navigation — side drawer via portal (slides from right) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {/* Backdrop: dark semi-transparent, closes menu on click */}
            {isMobileMenuOpen && (
              <motion.div
                key="drawer-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] md:hidden bg-black/50"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden
              />
            )}
            {isMobileMenuOpen && (
              <motion.div
                key="drawer-panel"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                className="fixed top-0 right-0 bottom-0 w-[75%] max-w-[320px] z-[10000] md:hidden flex flex-col bg-[#f8fafc] shadow-xl"
              >
                  {/* Header: site name + X close */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                    <span className="text-lg font-semibold text-[#0f172a]">Châssis One</span>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg text-[#0f172a] hover:bg-slate-200 transition-colors"
                      aria-label="Fermer le menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Nav links */}
                  <nav className="flex-1 overflow-y-auto px-4 py-4">
                    <ul className="flex flex-col">
                      {mobileMenuItems.map((item) => (
                        <li key={item.href} className="border-b border-slate-200 last:border-b-0">
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-4 text-lg text-[#0f172a] hover:text-[#1e40af] transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Contact button — full width, blue */}
                  <div className="p-4 border-t border-slate-200">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block">
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-base font-semibold rounded-lg transition-colors"
                      >
                        Contact
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </Link>
                  </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  );
}
