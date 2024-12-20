export const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nous accélérons l'adoption des crypto-monnaies dans le monde entier depuis 2011
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">+ de 10 Mio</div>
            <p className="text-gray-600">Clients</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">+ de 190</div>
            <p className="text-gray-600">Pays pris en charge</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">+ de 207 Mrd $</div>
            <p className="text-gray-600">Volume de trading trimestriel</p>
          </div>
        </div>
      </div>
    </section>
  );
};