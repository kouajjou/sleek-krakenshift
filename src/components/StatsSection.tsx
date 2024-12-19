export const StatsSection = () => {
  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              200+
            </div>
            <p className="text-gray-600">Crypto-monnaies disponibles</p>
          </div>
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              9M+
            </div>
            <p className="text-gray-600">Clients satisfaits</p>
          </div>
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              190
            </div>
            <p className="text-gray-600">Pays supportés</p>
          </div>
        </div>
      </div>
    </section>
  );
};