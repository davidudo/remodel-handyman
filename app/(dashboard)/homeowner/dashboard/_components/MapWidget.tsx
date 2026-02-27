"use client";

import dynamic from "next/dynamic";

// Dynamically import the Leaflet map component with SSR disabled
const Map = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#0A1628] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
        <span className="text-sm text-blue-500 font-medium animate-pulse tracking-wide uppercase">
          Locating nearby pros...
        </span>
      </div>
    </div>
  ),
});

interface MapWidgetProps {
  selectedCategory?: string | null;
  isTracking?: boolean;
}

export default function MapWidget({
  selectedCategory,
  isTracking,
}: MapWidgetProps) {
  return <Map selectedCategory={selectedCategory} isTracking={isTracking} />;
}
