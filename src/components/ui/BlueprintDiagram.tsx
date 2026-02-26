"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type BlueprintDiagramType =
  | "fenetres"
  | "portes"
  | "coulissants"
  | "volets"
  | "ouvrant"
  | "oscillo"
  | "fixe";

type Props = {
  type: BlueprintDiagramType;
  className?: string;
  accent?: "architect";
  animate?: boolean;
};

// Style dessin d'architecte : lignes grises très fines
const architectGray = "#94a3b8";
const architectGrayLight = "#cbd5e1";

export default function BlueprintDiagram({
  type,
  className,
  accent = "architect",
  animate = false,
}: Props) {
  const common = {
    fill: "none",
    stroke: architectGray,
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const soft = {
    ...common,
    strokeOpacity: 0.6,
  };

  const glass = {
    fill: "none",
    stroke: architectGrayLight,
    strokeWidth: 0.6,
    strokeOpacity: 0.3,
    strokeDasharray: "2 3",
  };

  // Animation pour les lignes d'ouverture
  const openingAnimation = {
    initial: { pathLength: 0, opacity: 0 },
    animate: animate
      ? {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.4 },
          },
        }
      : { pathLength: 1, opacity: 1 },
  };

  // Style épuré, dessin d'architecte
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("w-full h-full", className)}
      role="img"
      aria-hidden="true"
    >
      {/* Frame */}
      <rect x="20" y="20" width="160" height="160" {...soft} />
      <rect
        x="32"
        y="32"
        width="136"
        height="136"
        {...common}
        strokeOpacity={0.2}
        strokeWidth={0.6}
      />

      {type === "fenetres" && (
        <>
          <line x1="100" y1="20" x2="100" y2="180" {...soft} />
          <line x1="20" y1="110" x2="180" y2="110" {...common} strokeOpacity={0.4} strokeWidth={0.7} />
          <rect x="36" y="38" width="60" height="66" {...glass} />
          <rect x="104" y="38" width="60" height="66" {...glass} />
          <rect x="36" y="116" width="60" height="48" {...glass} />
          <rect x="104" y="116" width="60" height="48" {...glass} />
        </>
      )}

      {type === "portes" && (
        <>
          <line x1="100" y1="20" x2="100" y2="180" {...soft} />
          <rect x="36" y="38" width="60" height="126" {...glass} />
          <rect x="104" y="38" width="60" height="126" {...glass} />
          <circle
            cx="162"
            cy="112"
            r="5.5"
            fill={architectGray}
            fillOpacity={0.5}
          />
          <line x1="152" y1="112" x2="170" y2="112" {...common} strokeOpacity={0.4} strokeWidth={0.7} />
          {/* Ligne d'ouverture animée */}
          <motion.path
            d="M 100 50 L 100 150 M 100 50 L 85 65 M 100 50 L 115 65"
            {...common}
            strokeWidth={1}
            strokeOpacity={0.6}
            {...openingAnimation}
          />
        </>
      )}

      {type === "coulissants" && (
        <>
          <line x1="20" y1="56" x2="180" y2="56" {...common} strokeOpacity={0.3} strokeWidth={0.6} />
          <line x1="20" y1="144" x2="180" y2="144" {...common} strokeOpacity={0.3} strokeWidth={0.6} />
          <line x1="92" y1="32" x2="92" y2="168" {...soft} />
          <line x1="112" y1="32" x2="112" y2="168" {...common} strokeOpacity={0.2} strokeWidth={0.6} />
          <rect x="36" y="62" width="70" height="78" {...glass} />
          <rect x="94" y="62" width="70" height="78" {...glass} />
          {/* Arrow hint - animation du mouvement */}
          <motion.path
            d="M 122 100 L 154 100 M 154 100 L 146 92 M 154 100 L 146 108"
            {...soft}
            strokeWidth={1}
            {...openingAnimation}
          />
        </>
      )}

      {type === "volets" && (
        <>
          {/* shutter slats */}
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.line
              key={i}
              x1="34"
              y1={48 + i * 16}
              x2="166"
              y2={48 + i * 16}
              {...common}
              strokeOpacity={0.25}
              strokeWidth={0.6}
              initial={{ opacity: 0.25 }}
              animate={animate ? { opacity: 0.5 } : { opacity: 0.25 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            />
          ))}
          <rect x="34" y="34" width="132" height="132" {...soft} strokeWidth={1} />
        </>
      )}

      {type === "fixe" && (
        <>
          <rect x="34" y="34" width="132" height="132" {...glass} />
          <line x1="34" y1="34" x2="166" y2="166" {...common} strokeOpacity={0.2} strokeWidth={0.6} />
          <line x1="166" y1="34" x2="34" y2="166" {...common} strokeOpacity={0.2} strokeWidth={0.6} />
        </>
      )}

      {type === "ouvrant" && (
        <>
          <rect x="34" y="34" width="132" height="132" {...glass} />
          {/* Ligne d'ouverture animée */}
          <motion.path
            d="M 34 34 L 34 166 L 158 158"
            {...soft}
            strokeWidth={1}
            {...openingAnimation}
          />
          <motion.path
            d="M 158 158 L 152 146 M 158 158 L 146 152"
            {...soft}
            strokeWidth={1}
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0.6 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          />
        </>
      )}

      {type === "oscillo" && (
        <>
          <rect x="34" y="34" width="132" height="132" {...glass} />
          {/* Tilt indication - animation du basculement */}
          <motion.path
            d="M 34 34 L 166 34 L 150 50"
            {...soft}
            strokeWidth={1}
            {...openingAnimation}
          />
          <motion.path
            d="M 150 50 L 156 44 M 150 50 L 158 52"
            {...soft}
            strokeWidth={1}
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0.6 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          />
          {/* Side hinge line */}
          <line x1="34" y1="34" x2="34" y2="166" {...common} strokeOpacity={0.5} strokeWidth={1} />
        </>
      )}
    </svg>
  );
}
