import { Button } from "@/components/ui/button";

interface WatchlistSectionProps {
  onButtonClick: () => void;
  isBlocked: boolean;
}

export const WatchlistSection = ({ onButtonClick, isBlocked }: WatchlistSectionProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold font-inter">Watchlist</h3>
        <div className="flex gap-2">
          <button 
            className="p-2 hover:bg-gray-100 rounded" 
            onClick={onButtonClick}
            disabled={isBlocked}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
            </svg>
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded" 
            onClick={onButtonClick}
            disabled={isBlocked}
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
              <div className="font-semibold font-inter">Bitcoin</div>
              <div className="text-sm text-gray-600 font-inter">BTC</div>
            </div>
          </div>
          <div className="text-red-500 font-inter">-1.40%</div>
          <div className="font-semibold font-inter">$102,252.89</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600">Ξ</span>
            </div>
            <div>
              <div className="font-semibold font-inter">Ethereum</div>
              <div className="text-sm text-gray-600 font-inter">ETH</div>
            </div>
          </div>
          <div className="text-red-500 font-inter">-3.95%</div>
          <div className="font-semibold font-inter">$3,677.99</div>
        </div>
      </div>
    </div>
  );
};