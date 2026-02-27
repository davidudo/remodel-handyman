"use client";

import { useState, useEffect } from "react";
import {
  Droplets,
  Zap,
  Hammer,
  Paintbrush,
  ChevronRight,
  CheckCircle2,
  Star,
  MapPin,
  Clock,
} from "lucide-react";

const CATEGORIES = [
  { id: "plumbing", name: "Plumbing", icon: Droplets, color: "#3b82f6" },
  { id: "electrical", name: "Electrical", icon: Zap, color: "#eab308" },
  { id: "carpentry", name: "Carpentry", icon: Hammer, color: "#f97316" },
  { id: "painting", name: "Painting", icon: Paintbrush, color: "#a855f7" },
];

const PROS = [
  {
    id: 1,
    name: "Mike D.",
    rating: 4.9,
    category: "plumbing",
    image: "https://i.pravatar.cc/150?img=11",
    price: "$65/hr",
  },
  {
    id: 2,
    name: "Sarah K.",
    rating: 4.8,
    category: "electrical",
    image: "https://i.pravatar.cc/150?img=9",
    price: "$80/hr",
  },
  {
    id: 3,
    name: "John T.",
    rating: 5.0,
    category: "painting",
    image: "https://i.pravatar.cc/150?img=12",
    price: "$55/hr",
  },
  {
    id: 4,
    name: "Anna L.",
    rating: 4.7,
    category: "carpentry",
    image: "https://i.pravatar.cc/150?img=5",
    price: "$70/hr",
  },
];

interface BookingHudProps {
  onCategorySelect: (catId: string | null) => void;
  onDispatch: () => void;
}

export default function BookingHud({
  onCategorySelect,
  onDispatch,
}: BookingHudProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCatClick = (id: string) => {
    setSelectedCat(id);
    onCategorySelect(id);
    setStep(2);
  };

  const selectedPro = PROS.find((p) => p.category === selectedCat) || PROS[0];

  return (
    <div
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 z-[500] transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      {step === 1 && (
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest text-center opacity-70">
            Select Service
          </h3>
          <div className="flex justify-between gap-2 overflow-x-auto no-scrollbar pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCatClick(cat.id)}
                className="flex flex-col items-center gap-3 min-w-[80px] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                  <cat.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[10px] font-medium text-gray-400 group-hover:text-white transition-colors uppercase tracking-wider">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <img
                src={selectedPro.image}
                alt={selectedPro.name}
                className="w-16 h-16 rounded-2xl object-cover"
              />
              <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1 border-2 border-black">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">
                  {selectedPro.name}
                </h3>
                <span className="text-amber-500 font-bold flex items-center gap-1">
                  {selectedPro.rating} <Star className="w-4 h-4 fill-current" />
                </span>
              </div>
              <p className="text-gray-400 text-sm">Professional Specialist</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                Response Time
              </p>
              <div className="flex items-center gap-2 text-white font-medium">
                <Clock className="w-4 h-4 text-blue-400" /> ~8 mins
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                Rate
              </p>
              <div className="flex items-center gap-2 text-white font-medium">
                <Droplets className="w-4 h-4 text-emerald-400" />{" "}
                {selectedPro.price}
              </div>
            </div>
          </div>

          <button
            onClick={() => setStep(3)}
            className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-black font-extrabold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_10px_30px_rgba(245,158,11,0.3)]"
          >
            Confirm Selection
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="bg-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_20px_60px_rgba(245,158,11,0.2)] text-center animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-amber-500 animate-bounce" />
          </div>
          <h3 className="text-2xl font-black text-white mb-2">
            Ready to Dispatch?
          </h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            We'll send {selectedPro.name} to your current location immediately.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={onDispatch}
              className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 text-lg uppercase tracking-tighter"
            >
              Request Dispatch
              <CheckCircle2 className="w-6 h-6" />
            </button>
            <button
              onClick={() => setStep(2)}
              className="text-gray-500 font-bold hover:text-white transition-colors py-2"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
