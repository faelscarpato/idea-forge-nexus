
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Search, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Simulação de estado de login - em uma implementação real, isso viria de um contexto de autenticação
  const isLoggedIn = location.pathname.includes("dashboard");

  // Fechar o menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-white/80 dark:bg-nexus-dark/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
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

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={`text-sm font-medium px-4 py-2 hover:text-nexus-purple transition-colors ${location.pathname === '/' ? 'text-nexus-purple' : ''}`}>
                    Início
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/discover">
                  <NavigationMenuLink className={`text-sm font-medium px-4 py-2 hover:text-nexus-purple transition-colors ${location.pathname === '/discover' ? 'text-nexus-purple' : ''}`}>
                    Descobrir
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/how-it-works">
                  <NavigationMenuLink className={`text-sm font-medium px-4 py-2 hover:text-nexus-purple transition-colors ${location.pathname === '/how-it-works' ? 'text-nexus-purple' : ''}`}>
                    Como funciona
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/pricing">
                  <NavigationMenuLink className={`text-sm font-medium px-4 py-2 hover:text-nexus-purple transition-colors ${location.pathname === '/pricing' ? 'text-nexus-purple' : ''}`}>
                    Preços
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          {isLoggedIn ? (
            <Link to="/dashboard">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center">
                <span className="text-white font-medium">JP</span>
              </div>
            </Link>
          ) : (
            <>
              <Link to="/login" className="hidden sm:block">
                <Button variant="outline" size="sm">Entrar</Button>
              </Link>
              <Link to="/cadastro">
                <Button size="sm" className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
                  Solicitar acesso
                </Button>
              </Link>
            </>
          )}

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-nexus-dark border-b border-slate-200 dark:border-slate-700 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium py-2 hover:text-nexus-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
              Início
            </Link>
            <Link to="/discover" className="text-sm font-medium py-2 hover:text-nexus-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
              Descobrir
            </Link>
            <Link to="/how-it-works" className="text-sm font-medium py-2 hover:text-nexus-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
              Como funciona
            </Link>
            <Link to="/pricing" className="text-sm font-medium py-2 hover:text-nexus-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
              Preços
            </Link>
            {!isLoggedIn && (
              <Link to="/login" className="text-sm font-medium py-2 hover:text-nexus-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
                Entrar
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
