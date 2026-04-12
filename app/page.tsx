import { GalleryShowcaseSection } from "@/components/GalleryShowcaseSection";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5 flex flex-col gap-6">
      <HomeHeroSection />
      <GalleryShowcaseSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  );
}
