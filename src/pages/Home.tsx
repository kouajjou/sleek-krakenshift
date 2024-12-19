import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <img 
                src="https://assets.kraken.com/files/kraken-logo-light-mode.svg" 
                alt="Kraken Logo" 
                className="h-8"
              />
              <nav className="hidden lg:flex items-center gap-6">
                <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  Buy Crypto <ChevronDown className="h-4 w-4" />
                </button>
                <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  Trade <ChevronDown className="h-4 w-4" />
                </button>
                <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  Earn <ChevronDown className="h-4 w-4" />
                </button>
                <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  Learn <ChevronDown className="h-4 w-4" />
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
                <span>🌐</span>
                FR
              </button>
              <Button 
                variant="ghost" 
                className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                onClick={() => navigate('/login')}
              >
                Connexion
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 hidden sm:flex">
                Créer un compte
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 px-6 pb-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Achetez, vendez et échangez des crypto-monnaies
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Rejoignez des millions d'utilisateurs qui font confiance à Kraken pour acheter, vendre et échanger plus de 200 crypto-monnaies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8 text-lg">
                  Créer un compte <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" className="h-12 px-8 text-lg border-2">
                  Voir les prix
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="/lovable-uploads/bb4d0ee0-e1b8-49d9-9a4b-52b334d04de9.png"
                alt="Kraken Trading Platform"
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translateZ(0)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                200+
              </div>
              <p className="text-gray-600">Crypto-monnaies disponibles</p>
            </div>
            <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                9M+
              </div>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                190
              </div>
              <p className="text-gray-600">Pays supportés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir Kraken ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité de premier ordre</h3>
              <p className="text-gray-600">Protection avancée de vos actifs et données personnelles</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Frais compétitifs</h3>
              <p className="text-gray-600">Des frais parmi les plus bas du marché</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Exécution rapide</h3>
              <p className="text-gray-600">Transactions instantanées et interface réactive</p>
            </div>
          </div>
        </div>
      </section>

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