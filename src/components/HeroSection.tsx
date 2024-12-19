import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5D4AAF] via-[#6366F1] to-[#8B5CF6]">
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/ece64c63-8dc0-4c1a-8038-9c409f712543.png')] bg-cover bg-center opacity-10"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up tracking-tight"
            style={{ 
              textRendering: 'geometricPrecision',
              WebkitFontSmoothing: 'antialiased',
              fontFeatureSettings: '"kern" 1',
            }}
          >
            Achetez, vendez et échangez des crypto-monnaies
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up [animation-delay:200ms] tracking-normal"
            style={{ 
              textRendering: 'geometricPrecision',
              WebkitFontSmoothing: 'antialiased',
              fontFeatureSettings: '"kern" 1',
            }}
          >
            La plateforme la plus sécurisée pour acheter et vendre des cryptomonnaies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:400ms]">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold tracking-wide shadow-lg"
              style={{ 
                WebkitFontSmoothing: 'antialiased',
                transform: 'translate3d(0, 0, 0)',
                willChange: 'transform',
              }}
            >
              Commencer
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10 font-semibold tracking-wide"
              style={{ 
                WebkitFontSmoothing: 'antialiased',
                transform: 'translate3d(0, 0, 0)',
                willChange: 'transform',
              }}
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};