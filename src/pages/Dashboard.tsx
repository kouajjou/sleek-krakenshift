import { Plus, Minus, ArrowLeftRight, ArrowDownToLine, ArrowUpFromLine, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Dashboard = () => {
  const [showBlockedAlert, setShowBlockedAlert] = useState(false);

  useEffect(() => {
    // Show alert after 3 seconds instead of 10
    const timer = setTimeout(() => {
      setShowBlockedAlert(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    window.location.href = "/";
  };

  // Handler for any button click
  const handleAnyButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBlockedAlert(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F7FF]">
      <header className="flex justify-between items-center px-6 py-4 bg-white border-b">
        <img 
          src="https://assets.kraken.com/files/kraken-logo-light-mode.svg" 
          alt="Kraken Logo" 
          className="h-8"
          style={{ imageRendering: 'crisp-edges' }}
        />
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-purple-600"
            onClick={handleAnyButtonClick}
            disabled={showBlockedAlert}
          >
            Buy crypto
          </Button>
          <button 
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={handleAnyButtonClick}
            disabled={showBlockedAlert}
          >
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
            </svg>
          </button>
        </div>
      </header>

      <div className={`p-6 ${showBlockedAlert ? "pointer-events-none opacity-50" : ""}`}>
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Good afternoon</h1>

        {/* Portfolio Section - Moved to top */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-sm text-gray-600">Portfolio value</h3>
              <div className="text-3xl font-bold">$8,783,000.00</div>
              <div className="text-sm text-gray-600">$0.00 (0.00%) last month</div>
            </div>
            <Button 
              variant="ghost" 
              className="text-purple-600" 
              onClick={handleAnyButtonClick}
              disabled={showBlockedAlert}
            >
              Portfolio →
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-5 gap-4 mt-6">
            <Button 
              variant="ghost" 
              className="flex flex-col items-center gap-2 h-auto py-4" 
              onClick={handleAnyButtonClick}
              disabled={showBlockedAlert}
            >
              <Plus className="h-6 w-6 text-purple-600" />
              <span>Buy</span>
            </Button>
            <Button 
              variant="ghost" 
              className="flex flex-col items-center gap-2 h-auto py-4" 
              onClick={handleAnyButtonClick}
              disabled={showBlockedAlert}
            >
              <Minus className="h-6 w-6 text-purple-600" />
              <span>Sell</span>
            </Button>
            <Button 
              variant="ghost" 
              className="flex flex-col items-center gap-2 h-auto py-4" 
              onClick={handleAnyButtonClick}
              disabled={showBlockedAlert}
            >
              <ArrowLeftRight className="h-6 w-6 text-purple-600" />
              <span>Convert</span>
            </Button>
            <Button 
              variant="ghost" 
              className="flex flex-col items-center gap-2 h-auto py-4" 
              onClick={handleAnyButtonClick}
              disabled={showBlockedAlert}
            >
              <ArrowDownToLine className="h-6 w-6 text-purple-600" />
              <span>Deposit</span>
            </Button>
            <Button 
              variant="ghost" 
              className="flex flex-col items-center gap-2 h-auto py-4" 
              onClick={handleAnyButtonClick}
              disabled={showBlockedAlert}
            >
              <ArrowUpFromLine className="h-6 w-6 text-purple-600" />
              <span>Withdraw</span>
            </Button>
          </div>
        </div>

        {/* Watchlist */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Watchlist</h3>
            <div className="flex gap-2">
              <button 
                className="p-2 hover:bg-gray-100 rounded" 
                onClick={handleAnyButtonClick}
                disabled={showBlockedAlert}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
                </svg>
              </button>
              <button 
                className="p-2 hover:bg-gray-100 rounded" 
                onClick={handleAnyButtonClick}
                disabled={showBlockedAlert}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600">₿</span>
                </div>
                <div>
                  <div className="font-semibold">Bitcoin</div>
                  <div className="text-sm text-gray-600">BTC</div>
                </div>
              </div>
              <div className="text-red-500">-1.40%</div>
              <div className="font-semibold">$102,252.89</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">Ξ</span>
                </div>
                <div>
                  <div className="font-semibold">Ethereum</div>
                  <div className="text-sm text-gray-600">ETH</div>
                </div>
              </div>
              <div className="text-red-500">-3.95%</div>
              <div className="font-semibold">$3,677.99</div>
            </div>
          </div>
        </div>
      </div>

      <AlertDialog open={showBlockedAlert} onOpenChange={setShowBlockedAlert}>
        <AlertDialogContent className="bg-[#1A1F2C] border-[#6E59A5]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#F1F1F1] text-xl">
              Compte Bloqué / Account Blocked
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#F1F1F1] text-base">
              Votre compte est bloqué. Veuillez contacter le support pour débloquer votre compte.
              <br /><br />
              Your account is blocked. Please contact support to unlock your account.
              <br /><br />
              Support: <a href="mailto:support@kraken.com" className="text-[#9b87f5] hover:underline">support@kraken.com</a>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col gap-2">
            <Button 
              onClick={handleLogout}
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dashboard;