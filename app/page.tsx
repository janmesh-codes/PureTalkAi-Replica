import Navbar from "@/components/layout/Navbar";
import CookieBanner from "@/components/layout/CookieBanner";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-white">
      <Hero>
        <Navbar />
      </Hero>
      <CookieBanner />
    </main>
  );
}