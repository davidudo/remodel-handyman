"use client";

import { X, Check, Shield, Star, Zap, Crown } from "lucide-react";

const TIERS = [
  {
    name: "Silver",
    price: "$29",
    features: ["Emergency Dispatch", "24/7 Support", "Standard Rates"],
    icon: Shield,
    color: "gray",
  },
  {
    name: "Gold",
    price: "$49",
    features: ["Priority Dispatch", "10% Off Services", "Monthly Inspection"],
    icon: Zap,
    color: "yellow",
  },
  {
    name: "Platinum",
    price: "$79",
    recommended: true,
    features: [
      "True GPS Tracking",
      "20% Off Services",
      "Dedicated Handler",
      "Unlimited Inspections",
    ],
    icon: Crown,
    color: "blue",
  },
  {
    name: "Enterprise",
    price: "$199",
    features: [
      "Multi-property Support",
      "Wholesale Rates",
      "Direct Line to HQ",
    ],
    icon: Star,
    color: "purple",
  },
];

export default function HomeDefenderModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 fade-in duration-300">
        <div className="p-8 pb-4 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">
              Home Defender™ Tiers
            </h2>
            <p className="text-gray-500 font-medium">
              Subscription engine for ultimate property peace of mind.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                tier.recommended
                  ? "bg-blue-600/10 border-blue-500 ring-2 ring-blue-500/50"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-bounce">
                  Recommended
                </div>
              )}

              <tier.icon
                className={`w-8 h-8 mb-4 ${tier.recommended ? "text-blue-400" : "text-gray-400"}`}
              />
              <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-white font-black text-2xl">
                  {tier.price}
                </span>
                <span className="text-gray-500 text-sm font-medium">/mo</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-gray-400"
                  >
                    <Check className="w-4 h-4 text-blue-500 shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 ${
                  tier.recommended
                    ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Select Tier
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
