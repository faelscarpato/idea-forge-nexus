
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white/30 dark:from-slate-900 dark:to-slate-800/30 pt-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-nexus-purple/10 to-nexus-turquoise/10 flex items-center justify-center">
                <span className="text-6xl font-display font-bold gradient-text">404</span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-nexus-purple/5 to-nexus-turquoise/5 rounded-full blur-3xl"></div>
            </div>
            <h1 className="text-3xl font-display font-bold mb-4">Página não encontrada</h1>
            <p className="text-muted-foreground mb-8">
              Parece que você está tentando acessar uma página que não existe em nossa plataforma de Inteligência Coletiva.
            </p>
            <Button asChild className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
              <a href="/">Voltar à página inicial</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
