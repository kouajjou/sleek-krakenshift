import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const MainHero = () => {
  return (
    <section className="pt-32 px-6 pb-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Achetez, vendez et échangez des crypto-monnaies
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Rejoignez des millions d'utilisateurs qui font confiance à notre plateforme pour acheter, 
              vendre et échanger plus de 200 crypto-monnaies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 h-12 px-8 text-lg"
              >
                Créer un compte <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="h-12 px-8 text-lg border-2"
              >
                Voir les prix
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80"
              alt="Trading Platform"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};