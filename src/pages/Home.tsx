import { Header } from "@/components/Header";
import { MainHero } from "@/components/MainHero";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <MainHero />
      <StatsSection />
      <FeaturesGrid />
      
      {/* Trading Platform Preview */}
      <section className="py-16 bg-[#1A1F2C] text-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Une plateforme de trading complète et intuitive
          </h2>
          <div className="relative">
            <img 
              src="/lovable-uploads/bb4d0ee0-e1b8-49d9-9a4b-52b334d04de9.png"
              alt="Kraken Trading Interface"
              className="w-full h-auto rounded-lg shadow-2xl"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                willChange: 'transform',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] to-transparent opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div>
              <h4 className="font-semibold mb-4">À propos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">À propos de Kraken</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pourquoi Kraken</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Carrières</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produits</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Bitcoin</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Ethereum</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Staking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Centre d'aide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src="https://assets.kraken.com/files/kraken-logo-light-mode.svg" 
                  alt="Kraken Logo" 
                  className="h-6"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                  }}
                />
                <span className="text-sm text-gray-600">© 2024 Kraken</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Confidentialité</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Conditions d'utilisation</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sécurité</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;