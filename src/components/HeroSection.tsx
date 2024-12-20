import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F8F9FF] to-[#F3EFFF] pt-20">
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1B1B1B] mb-6 leading-[1.1]">
              Investissez dans votre avenir
            </h1>
            <p className="text-xl text-[#424242] mb-8 leading-relaxed">
              Des millions d'investisseurs en crypto-monnaie font confiance à Kraken,{' '}
              <span className="font-bold text-[#1B1B1B]">la meilleure plateforme crypto.*</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <Input 
                type="email" 
                placeholder="satoshi@email.com"
                className="flex-1 h-12 bg-white border-[#E5E7EB] text-[#1B1B1B] placeholder:text-[#6B7280]"
              />
              <Button className="h-12 px-8 bg-[#7349E5] hover:bg-[#5F3AD1] text-white font-medium text-base">
                Inscription
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
              <img src="/lovable-uploads/245da50d-fe95-4a5f-a520-a1dc1320197f.png" alt="QR Code" className="w-8 h-8" />
              <span className="text-[#424242]">Téléchargez l'application Kraken</span>
            </div>
            <p className="text-[#6B7280] text-sm mt-8">
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