
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Users, Zap, Clock, Star, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import KnowledgeGraph from "@/components/KnowledgeGraph";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Dados simulados de projetos
  const recentProjects = [
    {
      id: 1,
      name: "Estratégia de Expansão LATAM",
      description: "Análise colaborativa para expansão de mercado na América Latina",
      members: 8,
      lastUpdated: "2h atrás",
      progress: 65
    },
    {
      id: 2,
      name: "Pesquisa de UX do Produto",
      description: "Análise colaborativa da experiência do usuário do novo produto",
      members: 5,
      lastUpdated: "Ontem",
      progress: 30
    },
    {
      id: 3,
      name: "Metas ESG 2024",
      description: "Definição colaborativa de metas ambientais, sociais e de governança",
      members: 12,
      lastUpdated: "3d atrás",
      progress: 90
    }
  ];

  const suggestedTopics = [
    "Inovação de produtos", "Inteligência artificial", 
    "Estratégia de marketing", "Transformação digital",
    "Sustentabilidade", "Cultura organizacional"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header para Dashboard */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 dark:bg-nexus-dark/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise animate-pulse-slow flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <div className="pulse-dot"></div>
            </div>
            <span className="text-xl font-display font-bold gradient-text">NexusMind</span>
          </Link>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Buscar projetos, insights, documentos..." 
                className="pl-9 bg-slate-100 dark:bg-slate-800 border-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Plus size={16} /> Novo Projeto
            </Button>
            
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center">
              <span className="text-white font-medium">JP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold">Olá, João Paulo</h1>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Clock size={16} /> Atividade recente
                </Button>
              </div>

              {/* Recent Projects */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Projetos Recentes</h2>
                  <Button variant="link" size="sm" asChild>
                    <Link to="/projetos">Ver todos</Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recentProjects.map(project => (
                    <div key={project.id} className="glass-card p-6 rounded-xl">
                      <h3 className="font-bold mb-2">{project.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mb-4">
                        <div 
                          className="h-full bg-gradient-to-r from-nexus-purple to-nexus-turquoise rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{project.members}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{project.lastUpdated}</span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center border-dashed border-2 border-slate-200 dark:border-slate-700">
                    <Plus size={24} className="text-muted-foreground mb-2" />
                    <p className="text-muted-foreground mb-3">Iniciar um novo projeto</p>
                    <Button size="sm" variant="outline">Criar Projeto</Button>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-3">
                    <Users size={20} />
                    <span>Convidar Membros</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-3">
                    <BrainCircuit size={20} />
                    <span>Explorar Insights</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-3">
                    <Zap size={20} />
                    <span>Consultar IA</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              {/* Knowledge Graph */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Seu Grafo de Conhecimento</h2>
                <div className="glass-card overflow-hidden rounded-xl p-4 h-[300px]">
                  <KnowledgeGraph />
                </div>
              </div>
              
              {/* Recent Insights */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Insights Recentes</h2>
                <div className="glass-card p-4 rounded-xl space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <Zap className="text-nexus-purple shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">Detectada correlação entre feedback dos clientes e métricas de retenção no projeto <span className="font-medium text-nexus-purple">Pesquisa de UX</span>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <Zap className="text-nexus-purple shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">Descoberta tendência crescente de interesse em sustentabilidade nos últimos 6 meses no projeto <span className="font-medium text-nexus-purple">Metas ESG</span>.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Suggested Topics */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Tópicos Sugeridos</h2>
                <div className="flex flex-wrap gap-2">
                  {suggestedTopics.map((topic, index) => (
                    <Button key={index} variant="outline" size="sm" className="rounded-full">
                      {topic}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
