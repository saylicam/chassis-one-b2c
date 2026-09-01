"use client";

import { useRef, useEffect } from "react";
import type { Map } from "leaflet";
import "leaflet/dist/leaflet.css";

const MAP_CENTER: [number, number] = [50.7172, 4.6104]; // Av. Vésale 26, 1300 Wavre
const CARTO_POSITRON = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

type LeafletContainer = HTMLDivElement & { _leaflet_id?: number };

export default function LeafletShowroomMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let mapInstance: Map | null = null;

    const init = async () => {
      const L = (await import("leaflet")).default;

      if (cancelled || !containerRef.current) return;

      const el = containerRef.current as LeafletContainer;

      // Instance déjà active ou conteneur déjà initialisé par Leaflet
      if (mapRef.current || el._leaflet_id) return;

      mapInstance = L.map(el, {
        center: MAP_CENTER,
        zoom: 16,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      mapRef.current = mapInstance;

      if (cancelled) {
        mapInstance.remove();
        mapRef.current = null;
        mapInstance = null;
        return;
      }

      L.tileLayer(CARTO_POSITRON, {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(mapInstance);

      L.circleMarker(MAP_CENTER, {
        radius: 10,
        fillColor: "#5b7c99",
        color: "#3d5a73",
        weight: 2,
        fillOpacity: 1,
      }).addTo(mapInstance);
    };

    init();

    return () => {
      cancelled = true;
      const map = mapRef.current ?? mapInstance;
      if (map) {
        map.remove();
      }
      mapRef.current = null;
      mapInstance = null;
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
