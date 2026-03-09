"use client";

import { useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";

const MAP_CENTER: [number, number] = [50.7172, 4.6104]; // Av. Vésale 26, 1300 Wavre
const CARTO_POSITRON = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

export default function LeafletShowroomMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let map: L.Map | null = null;

    const init = async () => {
      const L = (await import("leaflet")).default;

      map = L.map(containerRef.current!, {
        center: MAP_CENTER,
        zoom: 16,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer(CARTO_POSITRON, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      // Marqueur : rond bleu acier discret
      L.circleMarker(MAP_CENTER, {
        radius: 10,
        fillColor: "#5b7c99",
        color: "#3d5a73",
        weight: 2,
        fillOpacity: 1,
      }).addTo(map);
    };

    init();

    return () => {
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] lg:min-h-[520px] bg-[#f5f5f5]"
      aria-label="Carte Showroom Wavre - Av. Vésale 26"
    />
  );
}
