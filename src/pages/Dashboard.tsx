
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Calendar,
  FileText,
  Home,
  MessageSquare,
  PieChart,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import AIIntegration from "@/components/AIIntegration";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const Dashboard = () => {
  const [activeProject, setActiveProject] = useState("strategic-planning");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    { id: "strategic-planning", name: "Planejamento Estratégico 2024" },
    { id: "product-launch", name: "Lançamento de Produto" },
    { id: "research-collaboration", name: "Colaboração em Pesquisa" },
  ];

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProject = (projectId: string) => {
    setActiveProject(projectId);
    toast.success(`Projeto "${projects.find(p => p.id === projectId)?.name}" selecionado`);
  };

  const handleCreateNewProject = () => {
    toast.info("Funcionalidade de criação de projeto em desenvolvimento");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="flex items-center px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-display font-bold gradient-text">NexusMind</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Principal</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={true} tooltip="Dashboard">
                      <Home className="h-[1.2rem] w-[1.2rem]" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Projetos">
                      <FileText className="h-[1.2rem] w-[1.2rem]" />
                      <span>Projetos</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Calendário">
                      <Calendar className="h-[1.2rem] w-[1.2rem]" />
                      <span>Calendário</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Mensagens">
                      <MessageSquare className="h-[1.2rem] w-[1.2rem]" />
                      <span>Mensagens</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarSeparator />
            
            <SidebarGroup>
              <SidebarGroupLabel>Projetos</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-2 my-2">
                  <Input
                    placeholder="Buscar projetos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-8 text-sm"
                  />
                </div>
                
                <ScrollArea className="h-40">
                  <SidebarMenu>
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((project) => (
                        <SidebarMenuItem key={project.id}>
                          <SidebarMenuButton
                            isActive={activeProject === project.id}
                            onClick={() => handleSelectProject(project.id)}
                          >
                            <span>{project.name}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))
                    ) : (
                      <div className="px-2 py-1 text-sm text-muted-foreground">
                        Nenhum projeto encontrado
                      </div>
                    )}
                  </SidebarMenu>
                </ScrollArea>
                
                <Button 
                  onClick={handleCreateNewProject}
                  variant="outline" 
                  className="w-full mt-2 text-sm h-8"
                >
                  Novo Projeto
                </Button>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarSeparator />
            
            <SidebarGroup>
              <SidebarGroupLabel>Análises</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Estatísticas">
                      <BarChart className="h-[1.2rem] w-[1.2rem]" />
                      <span>Estatísticas</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Relatórios">
                      <PieChart className="h-[1.2rem] w-[1.2rem]" />
                      <span>Relatórios</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Configurações">
                  <Settings className="h-[1.2rem] w-[1.2rem]" />
                  <span>Configurações</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Equipe">
                  <Users className="h-[1.2rem] w-[1.2rem]" />
                  <span>Equipe</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <Header />
          <div className="container mx-auto px-4 py-8 pt-24">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                  Bem-vindo ao seu painel de inteligência coletiva.
                </p>
              </div>
              <SidebarTrigger />
            </div>
            
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="projects">Projetos</TabsTrigger>
                <TabsTrigger value="ai-tools">Ferramentas IA</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Projeto Ativo</CardTitle>
                      <CardDescription>
                        {projects.find(p => p.id === activeProject)?.name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <KnowledgeGraph />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">Ver Detalhes</Button>
                      <Button size="sm">Colaborar</Button>
                    </CardFooter>
                  </Card>
                  
                  <AIAssistant />
                </div>
              </TabsContent>
              
              <TabsContent value="projects">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className={`${project.id === activeProject ? 'border-nexus-purple' : ''}`}>
                      <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>
                          Último acesso: há 2 dias
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progresso</span>
                            <span className="font-medium">67%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-nexus-purple to-nexus-turquoise" 
                              style={{ width: '67%' }}
                            ></div>
                          </div>
                          
                          <div className="pt-4 space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Colaboradores</span>
                              <span>12</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Ideias</span>
                              <span>48</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Decisões</span>
                              <span>7</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity"
                          onClick={() => handleSelectProject(project.id)}
                        >
                          Acessar Projeto
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="ai-tools">
                <AIIntegration />
              </TabsContent>
              
              <TabsContent value="insights">
                <Card>
                  <CardHeader>
                    <CardTitle>Insights</CardTitle>
                    <CardDescription>Análises e tendências baseadas nos dados dos seus projetos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center py-10">
                      <p className="text-muted-foreground text-center">
                        Análises avançadas estarão disponíveis conforme você utiliza a plataforma.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
