import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ArrowLeftRight, ArrowUpFromLine, Minus, Plus } from "lucide-react";

interface PortfolioSectionProps {
  onButtonClick: () => void;
  isBlocked: boolean;
}

export const PortfolioSection = ({ onButtonClick, isBlocked }: PortfolioSectionProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-sm text-gray-600 font-inter">Portfolio value</h3>
          <div className="text-3xl font-bold font-inter">$8,783,000.00</div>
          <div className="text-sm text-gray-600 font-inter">$0.00 (0.00%) last month</div>
        </div>
        <Button 
          variant="ghost" 
          className="text-purple-600" 
          onClick={onButtonClick}
          disabled={isBlocked}
        >
          Portfolio →
        </Button>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-6">
        {[
          { icon: Plus, label: "Buy" },
          { icon: Minus, label: "Sell" },
          { icon: ArrowLeftRight, label: "Convert" },
          { icon: ArrowDownToLine, label: "Deposit" },
          { icon: ArrowUpFromLine, label: "Withdraw" }
        ].map((action, index) => (
          <Button 
            key={index}
            variant="ghost" 
            className="flex flex-col items-center gap-2 h-auto py-4" 
            onClick={onButtonClick}
            disabled={isBlocked}
          >
            <action.icon className="h-6 w-6 text-purple-600" />
            <span className="font-inter">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};