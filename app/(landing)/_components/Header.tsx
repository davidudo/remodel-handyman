import Image from "next/image";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-6 md:px-10 py-5">
      {/* Logo */}
      <a href="/" className="flex items-center no-underline">
        <Image
          src="/logos/remodel-handyman-logo-white.png"
          alt="Remodel Handyman"
          width={120}
          height={32}
          className="h-26 w-auto"
        />
      </a>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-1 bg-background border border-border rounded-full px-1 py-1">
        {["Homeowners", "Handymen"].map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}/dashboard`}
            className="px-5 py-2 text-sm text-muted rounded-full no-underline transition-colors duration-200 hover:text-foreground hover:bg-white/6"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button className="px-6 py-2.5 text-sm font-medium text-foreground bg-background border border-border rounded-full cursor-pointer transition-all duration-200 hover:bg-white/6 hover:border-white/24">
        Download App
      </button>
    </nav>
  );
}
