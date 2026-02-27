import Image from "next/image";

const features = [
  {
    id: "journey",
    title: "Speed & Simplicity",
    description:
      "Book a trusted professional in under 30 seconds with our effortless flow.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="m10 10-6.157 5.277a.5.5 0 0 0 .152.879l5.247 1.75a.5.5 0 0 1 .31.31l1.75 5.247a.5.5 0 0 0 .879.152L17.46 17.46" />
        <path d="M14 14 2 2" />
        <path d="m14 6-2.286-2.286a1 1 0 0 0-1.428 0v0a1 1 0 0 0 0 1.428L12.57 7.43" />
        <path d="m18 10 2.286-2.286a1 1 0 0 0 0-1.428v0a1 1 0 0 0-1.428 0L16.57 8.57" />
        <path d="M22 22 10.5 10.5" />
      </svg>
    ),
    illustration: "/home/features/feature-01-illustration.svg",
    bgClass: "bg-blue-500/5",
    borderClass: "border-blue-500/10",
  },
  {
    id: "search",
    title: "Verified Professionals",
    description:
      "Every contractor is vetted, licensed, and insured for your peace of mind.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    illustration: "/home/features/feature-02-illustration.svg",
    bgClass: "bg-orange-500/5",
    borderClass: "border-orange-500/10",
  },
  {
    id: "conversion",
    title: "Live GPS Tracking",
    description:
      "Watch your handyman arrive in real-time with our dynamic dispatch map.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    illustration: "/home/features/feature-03-illustration.svg",
    bgClass: "bg-amber-500/5",
    borderClass: "border-amber-500/10",
  },
  {
    id: "infrastructure",
    title: "Transparent Pricing",
    description:
      "No surprises. See clear pricing and estimates before you confirm your booking.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
    illustration: "/home/features/feature-04-illustration.svg",
    bgClass: "bg-blue-500/5",
    borderClass: "border-blue-500/10",
  },
];

export default function Features() {
  return (
    <section className="relative w-full bg-background py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-[1150px] mx-auto flex flex-col items-center">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-5">
          <span className="inline-flex items-center px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-blue-400 border border-blue-400/20 rounded-full bg-blue-400/10">
            Premium Service
          </span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-semibold leading-tight tracking-tight text-white m-0 max-w-[800px]">
            Why choose Remodel Handyman?
          </h2>
        </div>

        {/* ── Feature Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`relative flex flex-col overflow-hidden rounded-3xl border border-white/6 bg-white/2 transition-colors hover:bg-white/4`}
            >
              {/* Background gradient tint */}
              <div
                className={`absolute inset-0 z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60 ${feature.bgClass}`}
                style={{
                  maskImage:
                    "radial-gradient(ellipse at top, black 0%, transparent 70%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at top, black 0%, transparent 70%)",
                }}
              />

              {/* Dot grid subtle overlay inside card */}
              <div
                className="absolute inset-0 z-1 opacity-50 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  maskImage:
                    "linear-gradient(to bottom, black 0%, transparent 80%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, transparent 80%)",
                }}
              />

              {/* Illustration Area */}
              <div className="relative z-10 w-full pt-16 pb-12 px-8 flex items-center justify-center min-h-[300px]">
                <Image
                  src={feature.illustration}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="w-auto h-auto max-h-[160px] object-contain drop-shadow-2xl"
                />
              </div>

              {/* Content Area */}
              <div className="relative z-10 flex flex-col gap-3 px-8 pb-10 mt-auto">
                <div className="w-10 h-10 mb-2 flex items-center justify-center opacity-80">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium tracking-tight text-white m-0">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted max-w-[400px] m-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
