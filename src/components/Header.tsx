
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 dark:bg-nexus-dark/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise animate-pulse-slow flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
            <div className="pulse-dot"></div>
          </div>
          <span className="text-xl font-display font-bold gradient-text">NexusMind</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-nexus-purple transition-colors">Início</Link>
          <Link to="/discover" className="text-sm font-medium hover:text-nexus-purple transition-colors">Descobrir</Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-nexus-purple transition-colors">Como funciona</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-nexus-purple transition-colors">Preços</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm">Entrar</Button>
          <Button size="sm" className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
            Solicitar acesso
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
