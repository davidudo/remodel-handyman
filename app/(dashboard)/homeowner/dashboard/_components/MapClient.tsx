"use client";

import { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with Next.js
if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}

function MapUpdater({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true, duration: 1.5 });
  }, [center, zoom, map]);
  return null;
}

interface MapClientProps {
  selectedCategory?: string | null;
  isTracking?: boolean;
}

export default function MapClient({
  selectedCategory,
  isTracking,
}: MapClientProps) {
  const homePosition: [number, number] = [34.0522, -118.2437];
  const [mapCenter, setMapCenter] = useState<[number, number]>(homePosition);
  const [mapZoom, setMapZoom] = useState(13);

  const allContractors = useMemo(
    () => [
      {
        id: 1,
        lat: 34.0532,
        lng: -118.2547,
        name: "Mike D.",
        rating: "4.9",
        avatar: "https://i.pravatar.cc/150?img=11",
        category: "plumbing",
      },
      {
        id: 2,
        lat: 34.062,
        lng: -118.233,
        name: "Sarah K.",
        rating: "4.8",
        avatar: "https://i.pravatar.cc/150?img=9",
        category: "electrical",
      },
      {
        id: 3,
        lat: 34.041,
        lng: -118.2317,
        name: "John T.",
        rating: "5.0",
        avatar: "https://i.pravatar.cc/150?img=12",
        category: "painting",
      },
      {
        id: 4,
        lat: 34.045,
        lng: -118.255,
        name: "Anna L.",
        rating: "4.7",
        avatar: "https://i.pravatar.cc/150?img=5",
        category: "carpentry",
      },
    ],
    [],
  );

  const [movingPinPos, setMovingPinPos] = useState<[number, number] | null>(
    null,
  );

  const filteredContractors = useMemo(() => {
    if (!selectedCategory || selectedCategory === "all") return allContractors;
    return allContractors.filter(
      (c) => c.category.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }, [selectedCategory, allContractors]);

  useEffect(() => {
    if (isTracking) {
      const startPos: [number, number] = [34.0532, -118.2547];
      setMovingPinPos(startPos);
      setMapCenter([
        (startPos[0] + homePosition[0]) / 2,
        (startPos[1] + homePosition[1]) / 2,
      ]);
      setMapZoom(15);

      let progress = 0;
      const interval = setInterval(() => {
        progress += 0.005;
        if (progress > 1) {
          clearInterval(interval);
          return;
        }
        const lat = startPos[0] + (homePosition[0] - startPos[0]) * progress;
        const lng = startPos[1] + (homePosition[1] - startPos[1]) * progress;
        setMovingPinPos([lat, lng]);
      }, 50);

      return () => clearInterval(interval);
    } else {
      setMovingPinPos(null);
      setMapCenter(homePosition);
      setMapZoom(13);
    }
  }, [isTracking]);

  const createCustomIcon = (c: any, isHome = false) => {
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div class="relative w-12 h-12 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full bg-[#1B4FD8] opacity-30 animate-pulse scale-150"></div>
          <div class="relative z-10 w-10 h-10 rounded-full overflow-hidden border-2 border-[#1B4FD8] shadow-lg bg-black">
            ${
              isHome
                ? `<div class="w-full h-full flex items-center justify-center bg-[#1B4FD8] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                 </div>`
                : `<img src="${c.avatar}" alt="${c.name}" class="w-full h-full object-cover" />`
            }
          </div>
          ${!isHome ? `<div class="absolute -bottom-1 -right-1 bg-emerald-500 text-white text-[10px] font-bold px-1 rounded-full border border-black shadow-sm">${c.rating}</div>` : ""}
        </div>
      `,
      iconSize: [48, 48],
      iconAnchor: [24, 24],
    });
  };

  return (
    <div className="absolute inset-0 z-0">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        zoomControl={false}
        className="w-full h-full"
        style={{ background: "#000000" }}
      >
        <MapUpdater center={mapCenter} zoom={mapZoom} />
        <TileLayer
          attribution="&copy; CARTO"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={homePosition} icon={createCustomIcon({}, true)} />
        {!isTracking &&
          filteredContractors.map((c) => (
            <Marker
              key={c.id}
              position={[c.lat, c.lng]}
              icon={createCustomIcon(c)}
            />
          ))}
        {isTracking && movingPinPos && (
          <Marker
            position={movingPinPos}
            icon={createCustomIcon(allContractors[0])}
          />
        )}
      </MapContainer>
      <div className="absolute inset-0 z-400 pointer-events-none bg-gradient-to-t from-black via-transparent to-black opacity-40" />
    </div>
  );
}
