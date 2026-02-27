"use client";

import { MapPin, Clock, DollarSign, X, Check } from "lucide-react";

interface JobAlertModalProps {
  isOpen: boolean;
  jobData: {
    customerName: string;
    distance: string;
    category: string;
    estimatedPayout: string;
    address: string;
  } | null;
  onAccept: () => void;
  onDecline: () => void;
}

export default function JobAlertModal({
  isOpen,
  jobData,
  onAccept,
  onDecline,
}: JobAlertModalProps) {
  if (!jobData) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-end justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-full max-w-lg bg-[#121212] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Urgency Header */}
        <div className="bg-blue-600 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Incoming Job Request
            </span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
            Expires in 45s
          </span>
        </div>

        <div className="p-8">
          {/* Job Primary Info */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-2 tracking-tight">
                {jobData.category}
              </h3>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">
                  {jobData.distance} • {jobData.customerName}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">
                Est. Payout
              </div>
              <div className="text-2xl font-black text-emerald-400">
                {jobData.estimatedPayout}
              </div>
            </div>
          </div>

          {/* Data Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 border border-white/5 p-4 rounded-3xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Response time
                </span>
              </div>
              <div className="text-sm font-bold text-white">
                ASAP (Emergency)
              </div>
            </div>
            <div className="bg-white/5 border border-white/5 p-4 rounded-3xl">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Bonus Rate
                </span>
              </div>
              <div className="text-sm font-bold text-white">
                1.5x Multiplier
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={onDecline}
              className="flex-1 h-16 rounded-2xl border border-white/10 bg-white/5 text-white/60 font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <X className="w-4 h-4" />
              Decline
            </button>
            <button
              onClick={onAccept}
              className="flex-[2] h-16 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-colors shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 active:scale-95 transform transition-transform"
            >
              <Check className="w-4 h-4" />
              Accept Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
