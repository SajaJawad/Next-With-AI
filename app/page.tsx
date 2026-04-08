import { Button } from "@/components/ui/button";
import { GalleryShowcaseSection } from "@/components/ui/components/GalleryShowcaseSection";
import { HomeHeroSection } from "@/components/ui/HomeHeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5 ">
      <HomeHeroSection />
      <GalleryShowcaseSection />
    </main>
  );
}
