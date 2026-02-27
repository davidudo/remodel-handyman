import { StarIcon } from "@heroicons/react/20/solid";

export default function Stats() {
  return (
    <section className="relative w-full bg-background py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-8">
        {/* ── Left Side: Text & Badge ── */}
        <div className="flex flex-col max-w-[600px]">
          <h2 className="text-[clamp(32px,4vw,42px)] font-medium leading-[1.2] text-white tracking-tight mb-10">
            We deliver premium property care that is fast, reliable, and built
            on trust.
          </h2>

          {/* Product Hunt Badge */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
              <span className="text-white font-bold text-xl leading-none">
                P
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10">
                <StarIcon className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold leading-none pt-px">
                  4.8
                </span>
              </div>
              <span className="text-gray-300 text-[15px] font-medium">
                on Product Hunt
              </span>
            </div>
          </div>
        </div>

        {/* ── Right Side: Stats Grid ── */}
        <div className="grid grid-cols-2 gap-x-12 sm:gap-x-24 gap-y-16">
          <div className="flex flex-col">
            <span className="text-[clamp(48px,6vw,64px)] font-normal text-white leading-none tracking-tight mb-3">
              &lt; 30<span className="text-gray-400 font-light">s</span>
            </span>
            <span className="text-[15px] text-gray-400">Booking Time</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[clamp(48px,6vw,64px)] font-normal text-white leading-none tracking-tight mb-3">
              10<span className="text-gray-400 font-light">K+</span>
            </span>
            <span className="text-[15px] text-gray-400">Jobs Completed</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[clamp(48px,6vw,64px)] font-normal text-white leading-none tracking-tight mb-3">
              100<span className="text-gray-400 font-light">%</span>
            </span>
            <span className="text-[15px] text-gray-400">Verified Pros</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[clamp(48px,6vw,64px)] font-normal text-white leading-none tracking-tight mb-3">
              5<span className="text-gray-400 font-light">.0</span>
            </span>
            <span className="text-[15px] text-gray-400">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
