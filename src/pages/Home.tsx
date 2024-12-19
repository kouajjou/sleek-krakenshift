import { Header } from "@/components/Header";
import { MainHero } from "@/components/MainHero";
import { StatsSection } from "@/components/StatsSection";
import { CryptoGrid } from "@/components/CryptoGrid";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { TradingInterface } from "@/components/TradingInterface";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MainHero />
      <StatsSection />
      <CryptoGrid />
      <FeaturesGrid />
      <TradingInterface />
      <Footer />
    </div>
  );
};

export default Home;