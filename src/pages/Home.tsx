import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { CryptoGrid } from "@/components/CryptoGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TradingInterface } from "@/components/TradingInterface";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <CryptoGrid />
      <FeaturesSection />
      <TradingInterface />
      <Footer />
    </div>
  );
};

export default Home;