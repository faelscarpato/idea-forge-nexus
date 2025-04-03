
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Crie seu espaço colaborativo",
      description: "Cadastre-se na plataforma e configure seu espaço de trabalho personalizado para sua comunidade ou equipe."
    },
    {
      title: "2. Defina o problema a resolver",
      description: "Estabeleça claramente qual é o desafio que sua comunidade está enfrentando e quais são os objetivos."
    },
    {
      title: "3. Agregue conhecimento",
      description: "A plataforma coletará automaticamente informações relevantes de diversas fontes, organizando-as para fácil acesso."
    },
    {
      title: "4. Convide colaboradores",
      description: "Adicione membros da sua comunidade para contribuir com ideias, votar em propostas e participar do processo."
    },
    {
      title: "5. Explore o mapa de conhecimento",
      description: "Visualize as conexões entre diferentes ideias, dados e opiniões através de nossos mapas interativos."
    },
    {
      title: "6. Receba insights da IA",
      description: "Nossa IA sugerirá novas perspectivas, identificará lacunas no conhecimento e proporá soluções criativas."
    },
    {
      title: "7. Tome decisões colaborativas",
      description: "Use nossas ferramentas de votação, simulação de cenários e análise de impacto para chegar a decisões consensuais."
    }
  ];

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
            Como <span className="gradient-text">Funciona</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            NexusMind é uma plataforma revolucionária que potencializa a inteligência coletiva da sua comunidade através de tecnologias avançadas de IA.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-8 flex gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-nexus-purple to-nexus-turquoise/20 ml-4" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
              <Link to="/cadastro">Solicitar acesso</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/schedule-demo">Agendar demonstração</Link>
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;
