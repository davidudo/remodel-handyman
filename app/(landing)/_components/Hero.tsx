import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative w-full bg-background pt-26 pb-0 px-4 md:px-6">
      {/* ── Contained hero box ── */}
      <div className="relative w-full max-w-[1150px] mx-auto min-h-[calc(100vh-160px)] overflow-hidden rounded-2xl md:rounded-3xl flex flex-col">
        {/* ── Background poster ── */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/home/hero/bg-video-poster.avif"
            className="w-full h-full object-cover opacity-50 grayscale"
          >
            <source src="/home/hero/hero-bg-video.mp4" type="video/mp4" />
          </video>

          {/* ── Fabric Pattern Overlay ── */}
          <div
            className="absolute inset-0 z-1 flex-none overflow-hidden pointer-events-none mix-blend-soft-light"
            style={{
              backgroundImage: "url('/home/hero/fabric-pattern.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              mixBlendMode: "soft-light",
              opacity: 0.82,
              willChange: "var(--framer-will-change-filter-override, filter)",
            }}
          />

          {/* ── Video Overlay ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              WebkitBackdropFilter: "blur(12px)",
              backdropFilter: "blur(12px)",
              backgroundColor:
                "var(--token-29fcaa64-fee4-4ab0-aa54-8bf0b0f85eda, #0109077a)",
            }}
          />
        </div>

        {/* ── Glow overlay ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 600px 500px at 50% 55%, rgba(46,232,154,0.12) 0%, transparent 70%)",
              "conic-gradient(from 200deg at 50% 50%, transparent 0deg, rgba(46,232,154,0.08) 140deg, rgba(46,232,154,0.18) 180deg, rgba(46,232,154,0.08) 220deg, transparent 360deg)",
            ].join(", "),
          }}
        />

        {/* ── Dot grid ── */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(244,247,245,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* ── Floating decorative cards ── */}
        <div className="hidden lg:block">
          {/* Left top */}
          <div className="absolute z-[4] top-[18%] left-[4%] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/home/hero/hero-item-left-top.avif"
              alt=""
              width={180}
              height={140}
              className="block"
            />
          </div>

          {/* Left bottom */}
          <div className="absolute z-[4] bottom-[10%] left-[4%] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/home/hero/hero-item-left-bottom.svg"
              alt=""
              width={161}
              height={41}
              className="block"
            />
          </div>

          {/* Right top */}
          <div className="absolute z-[4] top-[28%] right-[4%] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/home/hero/hero-item-right-top.avif"
              alt=""
              width={160}
              height={120}
              className="block"
            />
          </div>

          {/* Right bottom */}
          <div className="absolute z-[4] bottom-[22%] right-[4%] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/home/hero/hero-item-right-bottom.avif"
              alt=""
              width={160}
              height={100}
              className="block"
            />
          </div>
        </div>

        {/* ── Hero content ── */}
        <div className="relative z-[5] flex-1 flex flex-col items-center justify-center text-center px-5 md:px-6 gap-6 py-24">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-white border border-blue-800/20 rounded-full bg-blue-800/40">
            On-Demand Home Repairs
          </span>

          {/* Headline */}
          <h1 className="text-[clamp(36px,5.5vw,68px)] font-semibold leading-[1.1] tracking-tight text-foreground max-w-[720px] m-0">
            The fastest way to hire a trusted handyman.
          </h1>

          {/* Subtitle */}
          <p className="text-[clamp(14px,1.2vw,17px)] text-muted max-w-[520px] leading-relaxed m-0">
            Connect with verified tradespeople in seconds. GPS-powered dispatch
            meets premium service for your property.
          </p>

          {/* CTA button */}
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-foreground bg-black/40 border border-border rounded-full no-underline transition-all duration-250 hover:bg-white/[0.1] hover:border-white/[0.24]"
          >
            Book a Service
            <ChevronRightIcon className="w-4 h-4 transition-transform duration-200" />
          </a>
        </div>

        {/* ── Edge fades ── */}
        {/* Top */}
        <div
          className="absolute top-0 left-0 right-0 h-24 z-[6] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, transparent, var(--background))",
          }}
        />
        {/* Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-[6] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--background))",
          }}
        />
        {/* Left */}
        <div
          className="absolute top-0 bottom-0 left-0 w-24 z-[6] pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, transparent, var(--background))",
          }}
        />
        {/* Right */}
        <div
          className="absolute top-0 bottom-0 right-0 w-24 z-[6] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--background))",
          }}
        />
      </div>
    </section>
  );
}
