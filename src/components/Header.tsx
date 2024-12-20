import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#5D4AAF] z-50">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <img 
              src="/kraken-logo.svg" 
              alt="Kraken Logo" 
              className="h-8"
            />
            <nav className="hidden lg:flex items-center gap-6">
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Explorer
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Prix
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Pourquoi Kraken ?
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Apprendre
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Support
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-white/90 flex items-center gap-2">
              <span>🌐</span>
              FR
            </button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-white/90 hover:bg-white/10"
              onClick={() => navigate('/login')}
            >
              Connexion
            </Button>
            <Button 
              className="bg-white text-[#5D4AAF] hover:bg-white/90"
            >
              Inscription
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};