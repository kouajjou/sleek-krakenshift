import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">À propos de nous</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Kraken Clone. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};