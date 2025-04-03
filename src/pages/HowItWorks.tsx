
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { ArrowRight, BrainCircuit, Lightbulb, Network, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <Header />
      <div className="pt-24 pb-16">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como <span className="gradient-text">NexusMind</span> Funciona
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa plataforma revoluciona a colaboração e resolução de problemas combinando inteligência coletiva humana com o poder da IA avançada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center mb-4">
                  <BrainCircuit className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Agregação de Conhecimento</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossa IA avançada agrega automaticamente informações de diversas fontes - artigos científicos, documentos internos, discussões online, dados estruturados - e organiza tudo em uma base de conhecimento unificada e pesquisável.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Conexão com múltiplas fontes de dados via APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Processamento de linguagem natural para extração de insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Atualização contínua à medida que novas informações surgem</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-6 rounded-xl overflow-hidden"
            >
              <div className="aspect-video rounded-md bg-gradient-to-br from-nexus-purple/10 to-nexus-turquoise/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center">
                  <BrainCircuit className="h-10 w-10 text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:order-2"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Visualização Dinâmica</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Transforme conhecimento complexo em mapas visuais interativos que mostram as relações entre ideias, conceitos e dados. Explore visualmente a interconexão de informações para obter novas perspectivas.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Grafos de conhecimento interativos e exploráveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Visualizações personalizáveis por tipo de problema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Identificação visual de padrões e lacunas de conhecimento</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-6 rounded-xl overflow-hidden md:order-1"
            >
              <div className="aspect-video rounded-md bg-gradient-to-br from-nexus-purple/10 to-nexus-turquoise/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center">
                  <Network className="h-10 w-10 text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Colaboração Potencializada</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ferramentas projetadas para amplificar a colaboração humana, permitindo que grupos trabalhem juntos de maneira mais eficaz do que seria possível individualmente ou com ferramentas tradicionais.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Espaços de trabalho colaborativos em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Sistema de votação ponderada para tomada de decisão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Ferramentas de facilitação para reuniões produtivas</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-6 rounded-xl overflow-hidden"
            >
              <div className="aspect-video rounded-md bg-gradient-to-br from-nexus-purple/10 to-nexus-turquoise/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:order-2"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">IA como Facilitadora</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossa IA não substitui o pensamento humano - ela o amplifica. Ela atua como uma facilitadora que sugere conexões, identifica contradições, propõe sínteses e desafia pressupostos para expandir o pensamento coletivo.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Assistente de IA que participa ativamente das discussões</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Geração de ideias complementares e abordagens alternativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-nexus-purple mt-1 shrink-0" />
                    <span>Aprendizado contínuo com as interações do grupo</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-6 rounded-xl overflow-hidden md:order-1"
            >
              <div className="aspect-video rounded-md bg-gradient-to-br from-nexus-purple/10 to-nexus-turquoise/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
              </div>
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
                Pronto para explorar <span className="gradient-text">NexusMind</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Junte-se a comunidades que estão redefinindo a resolução colaborativa de problemas e a inovação coletiva com nossa plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
                  <Link to="/cadastro">Solicitar acesso</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/pricing">Ver planos</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default HowItWorks;
