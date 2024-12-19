import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-10"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'subpixel-antialiased'
        }}
      />
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up"
            style={{ 
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            Achetez, vendez et échangez des crypto-monnaies
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-up [animation-delay:200ms]"
            style={{ 
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            La plateforme la plus sécurisée pour acheter et vendre des cryptomonnaies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:400ms]">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-medium"
              style={{ 
                WebkitFontSmoothing: 'antialiased',
                transform: 'translateZ(0)'
              }}
            >
              Commencer
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10 font-medium"
              style={{ 
                WebkitFontSmoothing: 'antialiased',
                transform: 'translateZ(0)'
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