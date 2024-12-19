export const TradingInterface = () => {
  return (
    <section className="py-16 bg-[#1A1F2C] text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tradez au comptant ou sur marge
        </h2>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80"
            alt="Interface de trading"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] to-transparent opacity-20"></div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Le tout sur une interface puissante et intuitive.
          </p>
        </div>
      </div>
    </section>
  );
};