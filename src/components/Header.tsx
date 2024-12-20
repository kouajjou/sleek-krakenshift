import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <img 
              src="https://cdn.kraken.com/web-assets/icons/logo-light.svg" 
              alt="Kraken Logo" 
              className="h-8"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
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
            <Button 
              className="bg-purple-600 hover:bg-purple-700 hidden sm:flex"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
            >
              Créer un compte
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};