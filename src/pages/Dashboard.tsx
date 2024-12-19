import { Plus, Minus, ArrowLeftRight, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Dashboard = () => {
  const [showBlockedAlert, setShowBlockedAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlockedAlert(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7FF]">
      <header className="flex justify-between items-center px-6 py-4 bg-white border-b">
        <img 
          src="https://assets.kraken.com/files/kraken-logo-light-mode.svg" 
          alt="Kraken Logo" 
          className="h-8"
        />
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-purple-600">
            Buy crypto
          </Button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="p-6">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Good afternoon</h1>

        {/* Verification Card */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/289aec14-cb32-421d-9a74-4259296d71e5.png" 
                alt="Start Journey" 
                className="w-10 h-10"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Start your journey!</h2>
              <p className="text-gray-600">We'll ask for a few personal details. You'll also need to upload your ID and take a selfie.</p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                Verify identity
              </Button>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-sm text-gray-600">Portfolio value</h3>
              <div className="text-3xl font-bold">$0.00</div>
              <div className="text-sm text-gray-600">$0.00 (0.00%) last month</div>
            </div>
            <Button variant="ghost" className="text-purple-600">
              Portfolio →
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-5 gap-4 mt-6">
            <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-4">
              <Plus className="h-6 w-6 text-purple-600" />
              <span>Buy</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-4">
              <Minus className="h-6 w-6 text-purple-600" />
              <span>Sell</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-4">
              <ArrowLeftRight className="h-6 w-6 text-purple-600" />
              <span>Convert</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-4">
              <ArrowDownToLine className="h-6 w-6 text-purple-600" />
              <span>Deposit</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center gap-2 h-auto py-4">
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
              <button className="p-2 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
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
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dashboard;