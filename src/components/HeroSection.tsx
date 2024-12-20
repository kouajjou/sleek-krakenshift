import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] pt-20">
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Investissez dans votre avenir
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Des millions d'investisseurs en crypto-monnaie font confiance à Kraken,{' '}
              <span className="font-bold">la meilleure plateforme crypto.*</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input 
                type="email" 
                placeholder="satoshi@email.com"
                className="flex-1 bg-white border-gray-300"
              />
              <Button className="bg-[#5D4AAF] hover:bg-[#4C3A8F] text-white px-8">
                Inscription
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <img src="/lovable-uploads/245da50d-fe95-4a5f-a520-a1dc1320197f.png" alt="QR Code" className="w-8 h-8" />
              <span className="text-gray-600">Téléchargez l'application Kraken</span>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              *Sur la base d'une évaluation des plateformes crypto de Forbes Advisor en septembre 2024.
            </p>
          </div>
          <div className="hidden lg:block">
            <img 
              src="/lovable-uploads/fd2600b6-0582-4e09-9c95-f18521d83cf9.png" 
              alt="Kraken Mobile App" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};