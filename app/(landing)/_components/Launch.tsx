import {
  DocumentDuplicateIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: "paste",
    title: "Select Service",
    description: "Choose exactly what you need with a single tap.",
    icon: <DocumentDuplicateIcon className="w-5 h-5 text-blue-400" />,
  },
  {
    id: "scan",
    title: "Confirm Location",
    description: "Pinpoint your property on the map for instant dispatch.",
    icon: <MagnifyingGlassIcon className="w-5 h-5 text-blue-400" />,
  },
  {
    id: "launch",
    title: "Track Arrival",
    description:
      "Follow your verified pro via live GPS tracking straight to your door.",
    icon: <RocketLaunchIcon className="w-5 h-5 text-blue-400" />,
  },
];

export default function Launch() {
  return (
    <section className="relative w-full bg-background py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        {/* ── Section Header ── */}
        <h2 className="text-[clamp(28px,3vw,36px)] font-semibold leading-tight tracking-tight text-white text-center mb-16 md:mb-24">
          Book a handyman in 3 simple steps.
        </h2>

        {/* ── Steps Grid ── */}
        <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0 lg:divide-x lg:divide-white/10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex-1 flex flex-col items-center text-center px-4 md:px-8"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                {/* Icon wrapper */}
                <div className="relative z-10 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-sm">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-[17px] font-medium text-white mb-2">
                {step.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted max-w-[260px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
