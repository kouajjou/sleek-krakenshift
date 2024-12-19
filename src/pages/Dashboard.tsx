import { useEffect, useState } from "react";
import { PortfolioSection } from "@/components/dashboard/PortfolioSection";
import { WatchlistSection } from "@/components/dashboard/WatchlistSection";
import { BlockedAccountAlert } from "@/components/dashboard/BlockedAccountAlert";

const Dashboard = () => {
  const [showBlockedAlert, setShowBlockedAlert] = useState(false);

  useEffect(() => {
    // Show alert after 3 seconds
    const timer = setTimeout(() => {
      setShowBlockedAlert(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    window.location.href = "/";
  };

  const handleAnyButtonClick = () => {
    setShowBlockedAlert(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F7FF]">
      <header className="flex justify-between items-center px-6 py-4 bg-white border-b">
        <img 
          src="https://assets.kraken.com/files/kraken-logo-light-mode.svg" 
          alt="Kraken Logo" 
          className="h-8"
          style={{ 
            imageRendering: '-webkit-optimize-contrast',
            transform: 'translateZ(0)',
          }}
        />
        <div className="flex items-center gap-4">
          <button 
            className="text-purple-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors font-inter"
            onClick={handleAnyButtonClick}
            disabled={showBlockedAlert}
          >
            Buy crypto
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={handleAnyButtonClick}
            disabled={showBlockedAlert}
          >
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className={`p-6 ${showBlockedAlert ? "pointer-events-none opacity-50" : ""}`}>
        <h1 className="text-4xl font-bold text-purple-600 mb-8 font-inter">Good afternoon</h1>

        <PortfolioSection 
          onButtonClick={handleAnyButtonClick}
          isBlocked={showBlockedAlert}
        />

        <WatchlistSection 
          onButtonClick={handleAnyButtonClick}
          isBlocked={showBlockedAlert}
        />
      </div>

      <BlockedAccountAlert 
        open={showBlockedAlert}
        onOpenChange={setShowBlockedAlert}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Dashboard;