import { Wallet, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Portefeuille Sécurisé",
    description: "Stockez vos cryptomonnaies en toute sécurité avec notre technologie de pointe",
  },
  {
    icon: Shield,
    title: "Protection Maximale",
    description: "Vos actifs sont protégés par les meilleurs systèmes de sécurité",
  },
  {
    icon: Zap,
    title: "Trading Instantané",
    description: "Exécutez vos ordres instantanément sur notre plateforme haute performance",
  },
  {
    icon: Globe,
    title: "Support Global",
    description: "Une assistance disponible 24/7 dans plus de 190 pays",
  },
];

export const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi choisir notre plateforme ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};