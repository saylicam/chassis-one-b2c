"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PremiumImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
}

export default function PremiumImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className = "",
  priority = false,
  objectFit = "cover",
}: PremiumImageProps) {
  // Placeholder haute qualité pour intérieurs modernes avec baies vitrées
  const placeholder = `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=${width}&h=${height}&fit=crop&auto=format&q=80`;
  
  if (!src) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative overflow-hidden rounded-[3rem] ${className}`}
        style={{ aspectRatio: width / height }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-[#64748b] font-light text-lg">Image à venir</p>
          </div>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-[3rem] ${className}`}
      style={{ aspectRatio: width / height }}
    >
      <Image
        src={src || placeholder}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`w-full h-full object-${objectFit} transition-transform duration-700 hover:scale-110`}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </motion.div>
  );
}
