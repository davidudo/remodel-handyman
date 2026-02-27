const testimonials = [
  {
    id: "carlos",
    content:
      "We had an emergency leak and within 3 taps I had a verified plumber heading our way. Tracking his arrival on the GPS map gave me so much peace of mind.",
    author: "Carlos Mendes",
    role: "Homeowner",
    highlight: false,
    avatar: "https://i.pravatar.cc/150?u=carlos",
  },
  {
    id: "noah",
    content:
      "Operating a Remodel Handyman franchise has been incredible. The dispatch technology basically runs the business for me, matching my guys with jobs instantly.",
    author: "Noah Peterson",
    role: "Franchise Partner",
    highlight: true,
    avatar: "https://i.pravatar.cc/150?u=noah",
  },
  {
    id: "jasmine",
    content:
      "The Home Defender Platinum tier is worth every penny. Prioritized service and regular maintenance checks keep my properties in perfect condition year-round.",
    author: "Jasmine Lee",
    role: "Property Investor",
    highlight: false,
    avatar: "https://i.pravatar.cc/150?u=jasmine",
  },
  {
    id: "daniel",
    content:
      "I love that I can see the pricing upfront before I book. No more haggling or surprises when the job is done. Fast, professional, and completely transparent.",
    author: "Daniel Foster",
    role: "Homeowner",
    highlight: false,
    avatar: "https://i.pravatar.cc/150?u=daniel",
  },
  {
    id: "rafael",
    content:
      "As a contractor, this app fills my schedule without me having to market myself. I just flip my status to 'available', accept jobs, and get paid fast.",
    author: "Rafael Torres",
    role: "Verified Professional",
    highlight: true,
    avatar: "https://i.pravatar.cc/150?u=rafael",
  },
  {
    id: "jonathan",
    content:
      "We've used several services, but nothing compares to this. The quality of the tradespeople is unmatched, and the app experience is flawlessly simple.",
    author: "Jonathan Clarke",
    role: "Property Manager",
    highlight: false,
    avatar: "https://i.pravatar.cc/150?u=jonathan",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-background py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-4">
          <span className="inline-flex items-center px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-blue-400 border border-blue-400/20 rounded-full bg-blue-400/10">
            What others say?
          </span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-semibold leading-tight tracking-tight text-white m-0 max-w-[800px]">
            Testimonials
          </h2>
        </div>

        {/* ── Testimonials Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`relative flex flex-col p-8 rounded-3xl border transition-colors ${
                t.highlight
                  ? "bg-blue-950/20 border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.05)]"
                  : "bg-white/2 border-white/5 hover:bg-white/4"
              }`}
            >
              {/* Highlight gradient background if applicable */}
              {t.highlight && (
                <div
                  className="absolute inset-0 z-0 opacity-20 pointer-events-none rounded-3xl"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at top, #3b82f6 0%, transparent 70%)",
                  }}
                />
              )}

              {/* Quote Content */}
              <p className="relative z-10 text-[15px] leading-relaxed text-gray-200 mb-8 grow">
                "{t.content}"
              </p>

              {/* Author Block */}
              <div className="relative z-10 flex items-center gap-4 mt-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium text-white">
                    {t.author}
                  </span>
                  <span className="text-[13px] text-muted">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
