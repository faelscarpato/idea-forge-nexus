
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <span className="font-display font-bold">NexusMind</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Transformando colaboração com inteligência artificial
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-muted-foreground hover:text-nexus-purple transition-colors">Funcionalidades</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-nexus-purple transition-colors">Preços</Link></li>
              <li><Link to="/schedule-demo" className="text-muted-foreground hover:text-nexus-purple transition-colors">Demonstração</Link></li>
              <li><Link to="/discover" className="text-muted-foreground hover:text-nexus-purple transition-colors">Casos de sucesso</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tutorial" className="text-muted-foreground hover:text-nexus-purple transition-colors">Tutorial</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-nexus-purple transition-colors">Blog</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-nexus-purple transition-colors">Como funciona</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-nexus-purple transition-colors">Sobre nós</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-nexus-purple transition-colors">Contato</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-nexus-purple transition-colors">Política de privacidade</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-nexus-purple transition-colors">Termos de serviço</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-6 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 NexusMind. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-nexus-purple transition-colors">Twitter</a>
            <a href="#" className="hover:text-nexus-purple transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-nexus-purple transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
