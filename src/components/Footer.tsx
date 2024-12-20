import { Twitter, Facebook, Linkedin, Instagram, Youtube, ChevronDown } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <img 
              src="/kraken-logo.svg" 
              alt="Kraken Logo" 
              className="h-8 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6">
              Achetez, vendez et échangez des crypto-monnaies sur Kraken, la plateforme reconnue pour sa sécurité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Explorer</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Prix des cryptos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Buy Bitcoin</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Buy Ethereum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Earn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Produits</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Exchange</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Futures</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Margin Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pro</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Apprendre</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Qu'est-ce que le Bitcoin ?</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Qu'est-ce que l'Ethereum ?</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cryptomonnaies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NFTs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Statut</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white flex items-center gap-2">
                <span>🌐</span>
                Français
                <ChevronDown className="h-4 w-4" />
              </button>
              <span className="text-gray-600">|</span>
              <button className="text-gray-400 hover:text-white flex items-center gap-2">
                €EUR
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">© 2024 Kraken</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions légales</a>
              <a href="#" className="hover:text-white transition-colors">Sécurité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};