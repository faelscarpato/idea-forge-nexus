
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Briefcase, Users, BookOpen, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const caseStudies = [
    {
      id: 1,
      title: "Como a TechCorp reduziu tempo de decisão em 70%",
      category: "Estudo de caso",
      industry: "Tecnologia",
      image: "https://via.placeholder.com/400x250",
      description: "A TechCorp enfrentava desafios para alinhar suas equipes globais na tomada de decisões estratégicas. Veja como o NexusMind transformou seu processo."
    },
    {
      id: 2,
      title: "Inovação colaborativa na indústria farmacêutica",
      category: "Estudo de caso",
      industry: "Saúde",
      image: "https://via.placeholder.com/400x250",
      description: "Descubra como uma equipe de pesquisadores usou nossa plataforma para acelerar o desenvolvimento de um novo tratamento."
    },
    {
      id: 3,
      title: "Universidade Federal integra pesquisadores com NexusMind",
      category: "Estudo de caso",
      industry: "Educação",
      image: "https://via.placeholder.com/400x250",
      description: "Como a colaboração aprimorada por IA está transformando a pesquisa acadêmica interdisciplinar."
    }
  ];

  const communities = [
    {
      id: 1,
      name: "Inovadores em Sustentabilidade",
      members: 1250,
      topics: ["Sustentabilidade", "ESG", "Inovação"],
      activity: "Alta"
    },
    {
      id: 2,
      name: "Transformação Digital",
      members: 875,
      topics: ["Tecnologia", "Negócios", "Gestão de Mudança"],
      activity: "Média"
    },
    {
      id: 3,
      name: "Futuro da Educação",
      members: 1630,
      topics: ["Educação", "EdTech", "Aprendizado"],
      activity: "Alta"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Guia de Inteligência Coletiva",
      type: "Ebook",
      description: "Um guia completo sobre como implementar práticas de inteligência coletiva na sua organização."
    },
    {
      id: 2,
      title: "Webinar: IA e Tomada de Decisão",
      type: "Webinar",
      description: "Especialistas discutem como a IA está transformando processos decisórios em equipes."
    },
    {
      id: 3,
      title: "Template: Estrutura de Mapeamento de Problemas",
      type: "Template",
      description: "Um modelo prático para ajudar sua equipe a mapear e estruturar problemas complexos."
    }
  ];

  return (
    <>
      <Header />
      <div className="pt-24 pb-16">
        <section className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Descubra</span> o Potencial da Inteligência Coletiva
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore histórias de sucesso, entre em contato com comunidades e encontre recursos para maximizar o potencial da sua equipe.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar casos de uso, comunidades, recursos..."
                className="pl-12 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90">
                Buscar
              </Button>
            </div>
          </motion.div>

          <Tabs defaultValue="case-studies" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="case-studies" className="py-3 gap-2">
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:block">Estudos de Caso</span>
              </TabsTrigger>
              <TabsTrigger value="communities" className="py-3 gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:block">Comunidades</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="py-3 gap-2">
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:block">Recursos</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="case-studies">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Histórias de Sucesso</h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filtrar
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <Card className="overflow-hidden glass-card h-full flex flex-col">
                      <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-nexus-purple/20 to-nexus-turquoise/20 flex items-center justify-center">
                          <Briefcase className="w-12 h-12 text-white opacity-50" />
                        </div>
                        <div className="absolute top-2 left-2 bg-white dark:bg-slate-800 text-xs font-medium py-1 px-2 rounded-full">
                          {study.industry}
                        </div>
                      </div>
                      <CardContent className="pt-6 flex flex-col flex-grow">
                        <span className="text-sm text-nexus-purple mb-2">{study.category}</span>
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">{study.description}</p>
                        <Link 
                          to={`/case-study/${study.id}`} 
                          className="text-sm font-medium text-nexus-purple flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Ler o caso completo <ArrowRight className="w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline">Ver mais estudos de caso</Button>
              </div>
            </TabsContent>

            <TabsContent value="communities">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Comunidades em Destaque</h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filtrar
                </Button>
              </div>

              <div className="space-y-6">
                {communities.map((community) => (
                  <motion.div
                    key={community.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden glass-card">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{community.name}</h3>
                            <div className="flex items-center gap-4 mb-3">
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Users className="w-4 h-4" /> {community.members} membros
                              </span>
                              <span className="text-sm text-muted-foreground">
                                Atividade: {community.activity}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {community.topics.map((topic, index) => (
                                <span
                                  key={index}
                                  className="bg-slate-100 dark:bg-slate-800 text-xs font-medium py-1 px-3 rounded-full"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <Button className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90">
                              Participar
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline">Ver todas as comunidades</Button>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Recursos Úteis</h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filtrar
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden glass-card h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-nexus-purple/10 to-nexus-turquoise/10 flex items-center justify-center mb-4">
                          {resource.type === "Ebook" && <BookOpen className="w-5 h-5 text-nexus-purple" />}
                          {resource.type === "Webinar" && <Zap className="w-5 h-5 text-nexus-purple" />}
                          {resource.type === "Template" && <Briefcase className="w-5 h-5 text-nexus-purple" />}
                        </div>
                        <span className="text-sm text-nexus-purple mb-2">{resource.type}</span>
                        <h3 className="text-lg font-bold mb-3">{resource.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">{resource.description}</p>
                        <Button variant="outline" className="mt-auto w-full">
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline">Ver biblioteca completa</Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* CTA Section */}
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
                Pronto para transformar a forma como sua equipe colabora?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Junte-se às organizações que estão utilizando o NexusMind para resolver seus desafios mais complexos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
                  <Link to="/cadastro">Começar agora</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/agendar-demo">Agendar demonstração</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Discover;
