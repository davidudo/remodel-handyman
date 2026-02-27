"use client";

import { Power } from "lucide-react";

interface OnDutyToggleProps {
  isOnDuty: boolean;
  onToggle: (value: boolean) => void;
}

export default function OnDutyToggle({
  isOnDuty,
  onToggle,
}: OnDutyToggleProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">
          System Status
        </span>
        <span
          className={`text-sm font-bold ${isOnDuty ? "text-blue-400" : "text-white/60"} transition-colors`}
        >
          {isOnDuty ? "ONLINE / DISPATCH READY" : "OFF-DUTY / INVISIBLE"}
        </span>
      </div>

      <button
        onClick={() => onToggle(!isOnDuty)}
        className="relative group p-1"
      >
        {/* Pulsing Glow Background */}
        <div
          className={`absolute inset-0 bg-blue-500/30 blur-xl rounded-full transition-opacity duration-1000 ${
            isOnDuty
              ? "opacity-100 animate-pulse-blue"
              : "opacity-0 pointer-events-none"
          }`}
        />

        <div
          className={`relative w-16 h-8 rounded-full transition-all duration-500 flex items-center px-1 ${
            isOnDuty
              ? "bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              : "bg-white/10"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
              isOnDuty
                ? "bg-white text-blue-600 translate-x-8"
                : "bg-white/30 text-white translate-x-0"
            }`}
          >
            <Power className="w-3.5 h-3.5" strokeWidth={3} />
          </div>
        </div>
      </button>
    </div>
  );
}
