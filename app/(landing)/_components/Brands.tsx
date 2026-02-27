import Image from "next/image";

const brands = [
  { src: "/home/brands/logo-01.svg", alt: "Brand partner" },
  { src: "/home/brands/logo-02.svg", alt: "Brand partner" },
  { src: "/home/brands/logo-03.svg", alt: "Brand partner" },
  { src: "/home/brands/logo-04.svg", alt: "Brand partner" },
  { src: "/home/brands/logo-05.svg", alt: "Brand partner" },
  { src: "/home/brands/logo-06.svg", alt: "Brand partner" },
];

export default function Brands() {
  return (
    <section className="relative z-10 w-full bg-background py-20 md:py-28">
      {/* ── Subtitle ── */}
      <div className="text-center mb-16 px-6">
        <p className="text-sm md:text-[15px] text-muted leading-relaxed max-w-md mx-auto">
          Trusted by property managers and homeowners nationwide.
        </p>
      </div>

      {/* ── Logo grid ── */}
      <div className="max-w-3xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-14 place-items-center">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="flex items-center justify-center opacity-50 hover:opacity-90 transition-opacity duration-300"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={140}
              height={40}
              className="block w-auto h-7 md:h-8 object-contain brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
