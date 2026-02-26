"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
  avatar?: string;
}

interface InfiniteMarqueeProps {
  testimonials: Testimonial[];
  speed?: number;
}

// Generate avatar initials
const getAvatarInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// Location colors for badges
const locationColors: Record<string, string> = {
  Wavre: "from-blue-100 to-blue-50 text-blue-700",
  "Ottignies": "from-emerald-100 to-emerald-50 text-emerald-700",
  "Louvain-la-Neuve": "from-purple-100 to-purple-50 text-purple-700",
  Nivelles: "from-amber-100 to-amber-50 text-amber-700",
  Bruxelles: "from-rose-100 to-rose-50 text-rose-700",
  Waterloo: "from-indigo-100 to-indigo-50 text-indigo-700",
};

export default function InfiniteMarquee({
  testimonials,
  speed = 50,
}: InfiniteMarqueeProps) {
  // Dupliquer les témoignages pour l'effet infini
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
      
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -50 * 100],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => {
          const locationColor = locationColors[testimonial.location] || "from-gray-100 to-gray-50 text-gray-700";
          
          return (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[420px] rounded-[3rem] bg-white p-8 shadow-ultra-soft border border-[#e2e8f0]/50 hover:shadow-ultra-soft-hover transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#d97706] text-[#d97706]"
                  />
                ))}
              </div>
              <p className="text-[#0a0a0a] mb-6 italic text-lg leading-relaxed font-light">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e40af]/20 to-[#1e40af]/10 flex items-center justify-center border-2 border-[#1e40af]/20">
                    <span className="text-[#1e40af] font-semibold text-lg">
                      {testimonial.avatar || getAvatarInitials(testimonial.name)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a0a0a] text-lg">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3 text-[#64748b]" />
                      <span className="text-[#475569] font-light text-sm">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Location Badge */}
                <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${locationColor} text-xs font-semibold flex items-center gap-1`}>
                  <MapPin className="h-3 w-3" />
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
