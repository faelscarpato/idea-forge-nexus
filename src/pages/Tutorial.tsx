
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Tutorial = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const tutorialVideos = [
    {
      id: "intro",
      title: "Introdução ao NexusMind",
      description: "Conheça a plataforma, sua interface e principais funcionalidades",
      duration: "3:42",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "workspace",
      title: "Configurando seu espaço de trabalho",
      description: "Aprenda a personalizar e organizar seu ambiente de colaboração",
      duration: "5:18",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "knowledge-map",
      title: "Explorando o Mapa de Conhecimento",
      description: "Como navegar e utilizar as visualizações interativas de ideias e dados",
      duration: "4:55",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "ai-assistant",
      title: "Usando o Assistente de IA",
      description: "Maximize o potencial do assistente virtual para gerar insights",
      duration: "6:10",
      thumbnail: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "collaboration",
      title: "Colaboração em tempo real",
      description: "Ferramentas para trabalhar em conjunto com sua equipe",
      duration: "4:32",
      thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "decision-making",
      title: "Tomada de decisão colaborativa",
      description: "Como usar votações, simulações e ferramentas de consenso",
      duration: "7:15",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const tutorialSteps = [
    {
      title: "Criando sua conta",
      steps: [
        "Acesse nexusmind.com.br e clique em 'Solicitar acesso'",
        "Preencha o formulário com suas informações",
        "Verifique seu email para confirmar a conta",
        "Configure seu perfil de usuário"
      ]
    },
    {
      title: "Configurando seu primeiro projeto",
      steps: [
        "No Dashboard, clique em 'Novo Projeto'",
        "Dê um nome e descrição ao seu projeto",
        "Selecione um modelo ou comece do zero",
        "Personalize as configurações do projeto"
      ]
    },
    {
      title: "Convidando colaboradores",
      steps: [
        "No menu do projeto, selecione 'Membros'",
        "Clique em 'Convidar' e insira os emails",
        "Defina os níveis de permissão para cada membro",
        "Os convidados receberão um email para se juntar"
      ]
    },
    {
      title: "Agregando conhecimento",
      steps: [
        "Use a ferramenta 'Importar' para adicionar documentos",
        "Conecte fontes de dados externas usando integrações",
        "Adicione notas, ideias e comentários diretamente na plataforma",
        "Use o Assistente de IA para processar e organizar informações"
      ]
    },
    {
      title: "Visualizando dados",
      steps: [
        "Acesse a visualização 'Mapa de Conhecimento'",
        "Explore as conexões entre ideias e conceitos",
        "Filtre a visualização por categorias ou tags",
        "Personalize a exibição conforme suas necessidades"
      ]
    },
    {
      title: "Tomando decisões",
      steps: [
        "Crie uma 'Sessão de Decisão' no projeto",
        "Defina as opções e critérios de avaliação",
        "Convide os participantes para votar e comentar",
        "Use as ferramentas de análise para interpretar resultados"
      ]
    }
  ];

  const handlePlayVideo = (videoId: string) => {
    setActiveVideo(videoId);
  };

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
            Como usar a <span className="gradient-text">NexusMind</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprenda como aproveitar todo o potencial da nossa plataforma para potencializar a inteligência coletiva da sua comunidade.
          </p>
        </motion.div>

        <Tabs defaultValue="videos" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="videos">Vídeos tutoriais</TabsTrigger>
            <TabsTrigger value="guide">Guia passo a passo</TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos">
            {activeVideo ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <Button 
                  variant="outline" 
                  onClick={() => setActiveVideo(null)}
                  className="mb-4"
                >
                  Voltar para lista de vídeos
                </Button>
                
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src={tutorialVideos.find(v => v.id === activeVideo)?.videoUrl}
                    title={tutorialVideos.find(v => v.id === activeVideo)?.title}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {tutorialVideos.find(v => v.id === activeVideo)?.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {tutorialVideos.find(v => v.id === activeVideo)?.description}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorialVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass-card rounded-xl overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button
                          onClick={() => handlePlayVideo(video.id)}
                          className="bg-white text-nexus-purple hover:bg-white/90"
                        >
                          <Play className="w-5 h-5 mr-2" />
                          Assistir
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="guide">
            <div className="space-y-8">
              {tutorialSteps.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1, duration: 0.5 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <h2 className="text-xl font-bold mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-nexus-purple/10 text-nexus-purple mr-3 text-sm font-bold">{sectionIndex + 1}</span>
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4 pl-11">
                    {section.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-nexus-purple mr-2 mt-1 flex-shrink-0" />
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center mt-8"
              >
                <p className="text-muted-foreground mb-4">
                  Precisa de mais ajuda? Nossa equipe de suporte está pronta para auxiliar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline">
                    <Link to="/contact">Entrar em contato</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
                    <Link to="/schedule-demo">Agendar demonstração</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
};

export default Tutorial;
