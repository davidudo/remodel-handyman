"use client";

import { useState } from "react";
import {
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  BoltIcon,
  BeakerIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function ServiceSelector() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "plumbing",
      name: "Plumbing",
      icon: <BeakerIcon className="w-6 h-6" />,
    },
    {
      id: "electrical",
      name: "Electrical",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      id: "painting",
      name: "Painting",
      icon: <PaintBrushIcon className="w-6 h-6" />,
    },
    {
      id: "general",
      name: "Gen Handyman",
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    },
  ];

  const handleSelectService = (id: string) => {
    setSelectedService(id);
    setStep(2);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-500 p-4 md:p-6 pb-8">
      <div className="max-w-md mx-auto bg-[#0A1628] rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden backdrop-blur-xl bg-opacity-95">
        {step === 1 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-1">
              What do you need help with?
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Select a service to find nearby professionals.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleSelectService(service.id)}
                  className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#1B4FD8]/50 transition-all active:scale-95"
                >
                  <div className="text-[#1B4FD8]">{service.icon}</div>
                  <span className="text-sm font-medium text-white">
                    {service.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setStep(1)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRightIcon className="w-5 h-5 rotate-180" />
              </button>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Confirm Location
                </h2>
                <p className="text-sm text-gray-400">
                  12 Pros available nearby
                </p>
              </div>
            </div>

            <div className="w-full p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="text-sm text-white font-medium truncate">
                123 Main St, New York, NY 10001
              </span>
            </div>

            <button className="w-full py-4 rounded-xl bg-[#1B4FD8] hover:bg-[#153eb0] text-white font-semibold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_4px_20px_rgba(27,79,216,0.3)]">
              Request {services.find((s) => s.id === selectedService)?.name}
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
