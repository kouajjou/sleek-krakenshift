import { Button } from "@/components/ui/button";

export const QuickStartSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Plateforme d'échange crypto</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Achetez de la crypto en quelques minutes
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Créez votre compte Kraken gratuit</h4>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Connectez votre méthode de financement</h4>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Achetez et vendez plus de 200 crypto-monnaies</h4>
                </div>
              </div>
            </div>
            <Button className="mt-8 bg-[#5D4AAF] hover:bg-[#4D3A9F] text-white">
              Acheter de la crypto
            </Button>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/245da50d-fe95-4a5f-a520-a1dc1320197f.png" 
              alt="Kraken Interface" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};