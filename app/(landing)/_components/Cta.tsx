import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Cta() {
  return (
    <section className="relative w-full bg-background pt-32 pb-0 px-4 md:px-6 overflow-hidden">
      {/* ── Background Glow (Half Moon) ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] max-w-[200vw] h-[700px] z-0 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse at center top, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center top, black 30%, transparent 80%)",
        }}
      >
        <Image
          src="/home/cta/half-moon.avif"
          alt=""
          fill
          className="object-top object-cover opacity-90"
          priority
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1000px] mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center px-4 py-1.5 mb-8 text-[11px] font-semibold tracking-widest uppercase text-blue-400 border border-blue-400/20 rounded-full bg-blue-400/10 backdrop-blur-sm">
          Download Now
        </span>

        {/* Headline */}
        <h2 className="text-[clamp(36px,5.5vw,64px)] font-semibold leading-[1.1] tracking-tight text-white mb-6 max-w-[700px]">
          Ready to upgrade your property care?
        </h2>

        {/* Subtext */}
        <p className="text-[17px] leading-relaxed text-gray-400 max-w-[480px] mb-10">
          Download the Remodel Handyman app and experience premium service on
          demand.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white rounded-full border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/25 mb-20 md:mb-28"
        >
          Get the App
          <ChevronRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
