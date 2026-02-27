import Hero from "./_components/Hero";
import Brands from "./_components/Brands";
import Features from "./_components/Features";
import Launch from "./_components/Launch";
import Testimonials from "./_components/Testimonials";
import Stats from "./_components/Stats";
import Faqs from "./_components/Faqs";
import Cta from "./_components/Cta";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden flex flex-col bg-background">
      <Header />

      {/* ── Sections ── */}
      <Hero />
      <Brands />
      <Features />
      <Launch />
      <Testimonials />
      <Stats />
      <Faqs />
      <Cta />
      <Footer />
    </main>
  );
}
