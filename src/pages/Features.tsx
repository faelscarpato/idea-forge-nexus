
import { motion } from "framer-motion";
import { Network, Database, Users, Lock, Calendar, Braces } from "lucide-react";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";

const Features = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Funcionalidades <span className="gradient-text">Essenciais</span>
          </h1>
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
          >
            <FeatureCard 
              icon={Braces}
              title="Integração com Ferramentas"
              description="Conecte-se facilmente com as ferramentas que você já usa, como GitHub, Slack, Notion e muitas outras."
            />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Features;
