import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#5D4AAF] to-[#7E69AB] pt-20">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Investissez dans votre avenir
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Des millions d'investisseurs en crypto-monnaie font confiance à Kraken,{' '}
            <span className="font-bold">la meilleure plateforme crypto.*</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="satoshi@email.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-[#6E59A5] hover:bg-[#8957FF] text-white">
              Inscription
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <img src="/lovable-uploads/245da50d-fe95-4a5f-a520-a1dc1320197f.png" alt="QR Code" className="w-8 h-8" />
            <span className="text-white">Téléchargez l'application Kraken</span>
          </div>
          <p className="text-white/60 text-sm mt-8">
            *Sur la base d'une évaluation des plateformes crypto de Forbes Advisor en septembre 2024.
          </p>
        </div>
      </div>
    </div>
  );
};