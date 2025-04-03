
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Search, Network, Users, Database, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import AIAssistant from "@/components/AIAssistant";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Inteligência Coletiva <br />
                <span className="gradient-text">Aprimorada por IA</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                NexusMind é uma plataforma revolucionária que permite que comunidades resolvam problemas complexos através da colaboração potencializada por inteligência artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
                  <Link to="/cadastro">Solicitar acesso</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link to="/how-it-works">
                    <Search size={18} />
                    Como funciona
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-nexus-blue flex items-center justify-center text-white text-xs">TG</div>
                  <div className="w-8 h-8 rounded-full bg-nexus-purple flex items-center justify-center text-white text-xs">JM</div>
                  <div className="w-8 h-8 rounded-full bg-nexus-turquoise flex items-center justify-center text-white text-xs">KL</div>
                </div>
                <span>Acesso inicial limitado a times selecionados</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <KnowledgeGraph />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-nexus-purple/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-nexus-turquoise/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funcionalidades <span className="gradient-text">Essenciais</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma combina o poder da colaboração humana com análise avançada de IA para criar uma experiência única de resolução de problemas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <FeatureCard 
                icon={Database}
                title="Agregação de Conhecimento"
                description="Nossa IA agrega automaticamente informações relevantes de diversas fontes, organizando-as para fácil acesso e análise."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <FeatureCard 
                icon={Network}
                title="Visualização Dinâmica"
                description="Explore mapas visuais interativos que mostram relações entre ideias, facilitando a compreensão de problemas complexos."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <FeatureCard 
                icon={Users}
                title="Tomada de Decisão Colaborativa"
                description="Ferramentas avançadas para votação ponderada, simulações de cenários e análise de impacto para decisões consensuais."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <FeatureCard 
                icon={Lock}
                title="Acesso Restrito e Seguro"
                description="Crie espaços de colaboração privados para sua comunidade com controle granular de acesso e permissões."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <FeatureCard 
                icon={Calendar}
                title="Aprendizado Contínuo"
                description="Nossa plataforma evolui com cada interação, aprendendo padrões e aprimorando suas capacidades de análise e sugestão."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <AIAssistant />
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-16 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-nexus-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-nexus-turquoise/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Eleve o potencial da sua equipe com <span className="gradient-text">NexusMind</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Acesso inicial limitado a comunidades com problemas complexos e relevantes para resolver. Junte-se à lista de espera para estar entre os primeiros a experimentar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
                  <Link to="/cadastro">Solicitar acesso</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/schedule-demo">Agendar demonstração</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
