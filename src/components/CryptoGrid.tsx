import { Bitcoin, Coins, DollarSign } from "lucide-react";

const cryptos = [
  { name: "Bitcoin", symbol: "BTC", icon: Bitcoin, price: "43,524.20", change: "+2.34%" },
  { name: "Ethereum", symbol: "ETH", icon: Coins, price: "2,245.15", change: "+1.89%" },
  { name: "Litecoin", symbol: "LTC", icon: DollarSign, price: "152.48", change: "-0.45%" },
];

export const CryptoGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Bâtissez votre portefeuille crypto
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cryptos.map((crypto, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <crypto.icon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">{crypto.name}</h3>
                  <p className="text-sm text-gray-600">{crypto.symbol}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">${crypto.price}</span>
                <span className={`text-sm ${crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};