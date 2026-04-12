import { GalleryShowcaseSection } from "@/components/GalleryShowcaseSection";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/Testimonials";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5 flex flex-col gap-6">
      <HomeHeroSection />
      <GalleryShowcaseSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
