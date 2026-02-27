import Image from "next/image";

const navLinks = [
  { label: "Homeowner App", href: "#homeowners" },
  { label: "Contractor Portal", href: "#handymen" },
  { label: "Franchise Opportunities", href: "#franchise" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  { label: "Twitter (X)", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-background overflow-hidden">
      {/* ── Footer Content ── */}
      <div className="relative z-10 px-6 md:px-10 pt-8 pb-8">
        {/* Top row: Logo + Links */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 pb-10 border-b border-white/5">
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

          {/* Link Columns */}
          <div className="flex gap-20 md:gap-32">
            {/* Nav Links */}
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-gray-400 no-underline transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-gray-400 no-underline transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 pb-2">
          <p className="text-[13px] text-gray-500 m-0">
            Copyright © {new Date().getFullYear()} Remodel Handyman Inc. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[13px] text-gray-500 no-underline transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[13px] text-gray-500 no-underline transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
