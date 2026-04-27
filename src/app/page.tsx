import { Hero } from "@/components/sections/Hero";
import { Packages } from "@/components/sections/Packages";
import { Story } from "@/components/sections/Story";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Packages />
      <Story />
      <Footer />
    </main>
  );
}
