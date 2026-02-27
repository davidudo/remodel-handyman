"use client";

import { useState } from "react";
import MapWidget from "./_components/MapWidget";
import BookingHud from "./_components/BookingHud";
import TrackingStatusBar from "./_components/TrackingStatusBar";
import HomeDefenderModal from "./_components/HomeDefenderModal";
import { Shield, Bell } from "lucide-react";

export default function HomeownerDashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDispatch = () => {
    setIsTracking(true);
  };

  return (
    <main className="relative w-full h-dvh overflow-hidden bg-black font-sans">
      {/* ── Background Map ── */}
      <MapWidget selectedCategory={selectedCategory} isTracking={isTracking} />

      {/* ── Top Bar (Floating Overlay) ── */}
      <div className="absolute top-6 left-0 right-0 z-490 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Status Badge */}
          <div className="flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">
              12 Professionals On-Duty
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Home Defender Trigger */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-2xl shadow-xl transition-all active:scale-95 group"
            >
              <Shield className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                Home Defender™
              </span>
            </button>

            <button className="relative w-11 h-11 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white shadow-xl hover:bg-white/10 transition-colors">
              <Bell className="w-5 h-5" />
              <div className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-[#F59E0B]" />
            </button>

            <button className="w-11 h-11 rounded-2xl border border-white/10 overflow-hidden shadow-xl bg-black/50">
              <img
                src="https://i.pravatar.cc/150?img=33"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Tracking Status (Conditional) ── */}
      {isTracking && <TrackingStatusBar />}

      {/* ── Booking HUD (Floating - Bottom) ── */}
      {!isTracking && (
        <BookingHud
          onCategorySelect={setSelectedCategory}
          onDispatch={handleDispatch}
        />
      )}

      {/* ── Home Defender Modal ── */}
      <HomeDefenderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
