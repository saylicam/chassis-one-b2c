"use client";

import { Camera } from "lucide-react";
import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
  label?: string;
}

export default function ImagePlaceholder({
  width = 800,
  height = 600,
  className = "",
  label = "Image à venir",
}: ImagePlaceholderProps) {
  const aspectRatio = width / height;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
    >
      <div className="text-center p-8">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-4"
        >
          <Camera className="h-16 w-16 text-[#94a3b8] mx-auto" />
        </motion.div>
        <p className="text-[#64748b] font-light text-lg">{label}</p>
      </div>
    </motion.div>
  );
}
