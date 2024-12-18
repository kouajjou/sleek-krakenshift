import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <img 
          src="https://assets.kraken.com/files/kraken-logo-light-mode.svg" 
          alt="Kraken Logo" 
          className="h-8"
        />
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
            Products <ChevronDown className="h-4 w-4" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
            Learn <ChevronDown className="h-4 w-4" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">Support</button>
          <Button 
            variant="ghost" 
            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            onClick={() => window.location.href = '/login'}
          >
            Sign In
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex gap-12">
          <div className="flex-1 pt-12">
            <h1 className="text-5xl font-bold mb-6">
              Investissez dans votre avenir
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Kraken est une plateforme d'échange de crypto sécurisée à haut volume de plus de 10 M d'utilisateurs qui ont échangé plus de 207 MILLIARDS DE DOLLARS.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8 text-lg">
              Commencer maintenant <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="flex-1">
            <img 
              src="/lovable-uploads/63d596dc-b691-48c8-9f9b-4a249b7ece2e.png"
              alt="Kraken App Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Crypto Grid */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Gérer votre portefeuille crypto</h2>
          <div className="grid grid-cols-6 gap-4">
            {[
              "Bitcoin", "Ethereum", "Solana", "Polkadot", "Cardano", "USDT",
              "USDC", "Dogecoin", "Chainlink", "Polygon", "Avalanche", "Cosmos",
              "Algorand", "Tezos", "Stellar", "XRP", "Litecoin", "Monero"
            ].map((crypto, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span className="font-medium">{crypto}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12 text-center">Pourquoi Kraken ?</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Sécurité</h3>
              <p className="text-gray-600">Protection de pointe et conformité réglementaire</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Support 24/7</h3>
              <p className="text-gray-600">Une équipe d'experts à votre service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Frais bas</h3>
              <p className="text-gray-600">Des frais compétitifs pour tous les traders</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;