"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Suppression des icônes - non utilisées dans le nouveau design

// ============================================
// CONSTANTES
// ============================================

const PRIMARY_COLOR = "#2563eb";
const TEXT_COLOR = "#64748b";

// ============================================
// ICÔNES
// ============================================

const CompassIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#2563eb]"
  >
    <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M20 6 L22 16 L20 20 L18 16 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.8"
    />
    <path
      d="M20 34 L18 24 L20 20 L22 24 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.3"
    />
    <circle cx="20" cy="6" r="1.5" fill="currentColor" />
    <circle cx="20" cy="34" r="1.5" fill="currentColor" />
    <circle cx="6" cy="20" r="1.5" fill="currentColor" />
    <circle cx="34" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

const FloorPlanIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#2563eb]"
  >
    <rect x="6" y="6" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="20" y1="6" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" />
    <line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8" y="8" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
    <rect x="22" y="22" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
    <line x1="20" y1="8" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="22" x2="20" y2="26" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const LocationPinIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#2563eb]"
  >
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path
      d="M20 5 C15 5 10 9 10 14 C10 20 20 32 20 32 C20 32 30 20 30 14 C30 9 25 5 20 5 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="20" cy="14" r="3.5" fill="currentColor" />
  </svg>
);

// ============================================
// DONNÉES
// ============================================

const stats = [
  {
    value: 15,
    suffix: "",
    label: "SAVOIR-FAIRE ÉTABLI",
    icon: CompassIcon,
  },
  {
    value: 1000,
    suffix: "+",
    label: "CHANTIERS",
    icon: FloorPlanIcon,
  },
  {
    value: 100,
    suffix: "%",
    label: "WAVRIEN",
    icon: LocationPinIcon,
  },
];

const TAGLINE = "L'exigence du détail, la force d'un ancrage local.";

// ============================================
// HOOKS
// ============================================

function useCountUp(end: number, duration: number = 2500, start: number = 0, trigger: boolean) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    const startTime = Date.now();
    const startValue = start;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing plus prononcé avec easeOutCubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (end - startValue) * easeOut);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start, trigger]);

  return count;
}

// ============================================
// COMPOSANTS
// ============================================

interface StatItemProps {
  stat: (typeof stats)[0];
  index: number;
  isInView: boolean;
}

function StatItem({ stat, index, isInView }: StatItemProps) {
  const count = useCountUp(stat.value, 1200, 0, isInView);
  const delay = index * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center py-8 lg:py-12"
    >
      {/* Chiffre réduit, typo ultra-fine avec tracking-widest */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4"
      >
        <span 
          className="text-4xl lg:text-5xl font-light text-[#1F2937] tracking-widest"
          style={{ 
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            fontWeight: 300,
          }}
        >
          {count}
        </span>
        {stat.suffix && (
          <span 
            className="text-3xl lg:text-4xl font-light text-[#1F2937] tracking-widest"
            style={{ 
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontWeight: 300,
            }}
          >
            {stat.suffix}
          </span>
        )}
      </motion.div>

      {/* Label en anthracite, font-light */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs lg:text-sm text-[#1F2937] font-light uppercase tracking-widest"
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

export default function PrestigeStatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#f9f9f9] py-48 lg:py-64"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Grille avec lignes de séparation blanches (effet plan d'architecte) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/50">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              stat={stat} 
              index={index} 
              isInView={isInView}
            />
          ))}
        </div>

        {/* Tagline sobre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-20"
        >
          <p 
            className="text-sm lg:text-base text-[#1F2937]/60 font-light"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontWeight: 300 }}
          >
            {TAGLINE}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
