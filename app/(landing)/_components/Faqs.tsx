"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    id: "coding",
    question: "How quickly can a handyman arrive?",
    answer:
      "Our system dispatches the closest available professional. In many areas, a handyman can be at your door in under 30 minutes for urgent requests, or you can schedule exactly when you need them.",
    column: "left",
  },
  {
    id: "fast",
    question: "Are your contractors verified?",
    answer:
      "Yes. Every professional on our platform undergoes a strict vetting process, including background checks, license verification, and insurance validation before they can accept jobs.",
    column: "left",
  },
  {
    id: "domain",
    question: "What is the Home Defender subscription?",
    answer:
      "Home Defender is our premium membership offering comprehensive property protection. It comes in four tiers (Silver, Gold, Platinum, Enterprise) offering prioritized dispatch, discounted hourly rates, and seasonal maintenance.",
    column: "left",
  },
  {
    id: "seo",
    question: "Is pricing transparent before I book?",
    answer:
      "Absolutely. You will see clear hourly rates and estimates before you confirm your booking. No hidden fees, no surprises.",
    column: "right",
  },
  {
    id: "mobile",
    question: "Can I join as a franchise owner?",
    answer:
      "Yes! We offer franchise territories for ambitious operators who want to run their own property service business powered by our proprietary dispatch technology and brand.",
    column: "right",
  },
  {
    id: "analytics",
    question: "How do I become a Remodel Handyman contractor?",
    answer:
      "Download our contractor app to apply. Provide your credentials, portfolio, and pass our background check to start receiving dispatch alerts in your area.",
    column: "right",
  },
];

export default function Faqs() {
  const [openId, setOpenId] = useState<string>("coding");

  return (
    <section className="relative w-full bg-background pt-24 pb-32 md:pt-32 px-4 md:px-6 overflow-hidden">
      {/* ── Background Scanline Texture ── */}
      <div className="absolute top-0 left-0 right-0 h-[600px] z-0 pointer-events-none opacity-50 flex justify-center">
        <div
          className="w-[1200px] max-w-full h-full relative"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        >
          <Image
            src="/home/stats/stat-header-bg.avif"
            alt=""
            fill
            className="object-top object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-4 mt-8 md:mt-20">
          <span className="inline-flex items-center px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-blue-400 border border-blue-400/20 rounded-full bg-blue-400/10">
            FAQS
          </span>
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-tight tracking-tight text-white m-0 max-w-[800px]">
            Got questions
            <br />
            We've got answers.
          </h2>
        </div>

        {/* ── FAQ Grid ── */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-[1000px]">
          {/* Left Column */}
          <div className="flex flex-col gap-4 flex-1">
            {faqs
              .filter((faq) => faq.column === "left")
              .map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    onClick={() => setOpenId(isOpen ? "" : faq.id)}
                    className={`flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isOpen
                        ? "bg-blue-950/20 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)]"
                        : "bg-white/2 border-white/5 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between p-6">
                      <h3 className="text-[16px] font-medium text-white pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 text-muted transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </div>
                    {/* Answer content (collapsible) */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted m-0">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 flex-1">
            {faqs
              .filter((faq) => faq.column === "right")
              .map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    onClick={() => setOpenId(isOpen ? "" : faq.id)}
                    className={`flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isOpen
                        ? "bg-blue-950/20 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)]"
                        : "bg-white/2 border-white/5 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between p-6">
                      <h3 className="text-[16px] font-medium text-white pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 text-muted transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted m-0">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
