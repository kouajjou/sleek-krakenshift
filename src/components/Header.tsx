import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Prix
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Pourquoi Kraken ?
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Apprendre
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Support
                <ChevronDown className="h-4 w-4" />
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-white/90 flex items-center gap-2">
              <span>🌐</span>
              FR
              <ChevronDown className="h-4 w-4" />
            </button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-white/90 hover:bg-white/10"
              onClick={() => navigate('/login')}
            >
              Connexion
            </Button>
            <Button 
              className="bg-white hover:bg-white/90 text-[#5D4AAF]"
            >
              Inscription
            </Button>
            <Button
              variant="ghost"
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4">
            <nav className="flex flex-col gap-4">
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Explorer
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Prix
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Pourquoi Kraken ?
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Apprendre
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="text-white hover:text-white/90 flex items-center gap-1">
                Support
                <ChevronDown className="h-4 w-4" />
              </button>
              <Button 
                className="bg-white hover:bg-white/90 text-[#5D4AAF] w-full"
              >
                Inscription
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
