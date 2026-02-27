"use client";

import { Clock, ShieldCheck } from "lucide-react";

export default function TrackingStatusBar() {
  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 z-[480] animate-in slide-in-from-top-4 duration-500">
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-emerald-500 animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">
              Handyman arriving in
            </p>
            <h3 className="text-white font-black text-lg">~8 Minutes</h3>
          </div>
        </div>

        <div className="h-10 w-[1px] bg-white/10" />

        <div className="flex items-center gap-2 pr-2">
          <ShieldCheck className="w-5 h-5 text-blue-500" />
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
            On-Duty
          </span>
        </div>
      </div>

      {/* Progress Line */}
      <div className="mt-2 w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <div className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-progress" />
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 65%;
          }
          100% {
            width: 0%;
          }
        }
        .animate-progress {
          animation: progress 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
