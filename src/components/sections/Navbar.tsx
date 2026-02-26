"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Châssis", href: "/solutions" },
    { label: "Portes", href: "/solutions" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Notre Histoire", href: "/notre-histoire" },
    { label: "Devis", href: "/devis" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold text-[#0a0a0a] tracking-tight hover:opacity-80 transition-opacity"
          >
            Châssis One
          </Link>

          {/* Desktop Navigation - Centré */}
          <div className="hidden md:flex md:items-center md:gap-8 absolute left-1/2 transform -translate-x-1/2">
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
                {/* Micro-hover : soulignement ultra-fin de gauche à droite */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[#1e40af]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Indicateur actif */}
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

          {/* CTA Button - À droite */}
          <div className="hidden md:block">
            <Link href="/devis">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                Devis Gratuit
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0a0a0a]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl border-l border-gray-100 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <span className="text-lg font-bold text-[#0a0a0a]">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[#0a0a0a] hover:bg-[#f9fafb] rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-6 py-8 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-base font-light rounded-lg transition-colors",
                        isActive(item.href)
                          ? "text-[#0a0a0a] bg-[#f9fafb]"
                          : "text-[#64748b] hover:text-[#0a0a0a] hover:bg-[#f9fafb]"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* CTA Footer */}
                <div className="p-6 border-t border-gray-100">
                  <Link href="/devis" onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white font-medium rounded-lg shadow-sm"
                    >
                      Devis Gratuit
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
