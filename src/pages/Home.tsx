import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <img 
          src="https://assets.kraken.com/files/kraken-logo-light-mode.svg" 
          alt="Kraken Logo" 
          className="h-8"
        />
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            className="text-gray-600 hover:text-gray-800"
            onClick={() => navigate('/login')}
          >
            Connexion
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Commencer
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">
              Investissez dans votre avenir
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Plus de 10 millions d'utilisateurs ont échangé plus de 207 milliards de dollars sur Kraken, une plateforme d'échange de crypto sécurisée à haut volume.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8 text-lg">
              Commencer maintenant <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="flex-1">
            <img 
              src="/lovable-uploads/bb4d0ee0-e1b8-49d9-9a4b-52b334d04de9.png"
              alt="Kraken App Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">+ de 10 Min</div>
              <p className="text-gray-600">Utilisateurs actifs</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">+ de 90</div>
              <p className="text-gray-600">Cryptomonnaies disponibles</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">+ de 207 Mrd $</div>
              <p className="text-gray-600">Volume d'échange</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Kraken ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Sécurité</h3>
              <p className="text-gray-600">Protection de pointe et conformité réglementaire</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Support 24/7</h3>
              <p className="text-gray-600">Une équipe d'experts à votre service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Frais bas</h3>
              <p className="text-gray-600">Des frais compétitifs pour tous les traders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Gagnez des récompenses sur votre crypto</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              "Bitcoin", "Ethereum", "Solana", "Polkadot", "Cardano", "USDT",
              "USDC", "Dogecoin", "Chainlink", "Polygon", "Avalanche", "Cosmos",
              "Algorand", "Tezos", "Stellar", "XRP", "Litecoin", "Monero"
            ].map((crypto, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span className="font-medium text-sm">{crypto}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Platform Section */}
      <section className="py-16 bg-[#1A1F2C] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Accédez au trading spot et avec marge, <br />
            le tout sur une seule plateforme
          </h2>
          <img 
            src="/lovable-uploads/bb4d0ee0-e1b8-49d9-9a4b-52b334d04de9.png"
            alt="Trading Platform"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;