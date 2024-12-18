import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;