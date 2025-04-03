
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  UserPlus, 
  Mail, 
  Users, 
  Settings, 
  UserX, 
  Shield 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  department: string;
  status: "online" | "away" | "offline";
  isAdmin: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: "user1",
    name: "João Paulo Silva",
    email: "joao.silva@exemplo.com",
    role: "Gerente de Inovação",
    avatar: "JP",
    department: "Inovação",
    status: "online",
    isAdmin: true
  },
  {
    id: "user2",
    name: "Ana Martins",
    email: "ana.martins@exemplo.com",
    role: "Analista de UX",
    avatar: "AM",
    department: "Design",
    status: "online",
    isAdmin: false
  },
  {
    id: "user3",
    name: "Carlos Mendes",
    email: "carlos.mendes@exemplo.com",
    role: "Desenvolvedor Full-Stack",
    avatar: "CM",
    department: "Tecnologia",
    status: "offline",
    isAdmin: false
  },
  {
    id: "user4",
    name: "Sofia Santos",
    email: "sofia.santos@exemplo.com",
    role: "Gerente de Projeto",
    avatar: "SS",
    department: "Operações",
    status: "away",
    isAdmin: true
  },
  {
    id: "user5",
    name: "Ricardo Oliveira",
    email: "ricardo.oliveira@exemplo.com",
    role: "Especialista em Dados",
    avatar: "RO",
    department: "Análise",
    status: "online",
    isAdmin: false
  },
  {
    id: "user6",
    name: "Mariana Costa",
    email: "mariana.costa@exemplo.com",
    role: "Gerente de Marketing",
    avatar: "MC",
    department: "Marketing",
    status: "offline",
    isAdmin: false
  },
  {
    id: "user7",
    name: "Pedro Almeida",
    email: "pedro.almeida@exemplo.com",
    role: "Especialista em IA",
    avatar: "PA",
    department: "Tecnologia",
    status: "online",
    isAdmin: false
  },
  {
    id: "user8",
    name: "Juliana Lima",
    email: "juliana.lima@exemplo.com",
    role: "Analista de Negócios",
    avatar: "JL",
    department: "Estratégia",
    status: "away",
    isAdmin: false
  }
];

const Team = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase());
      
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "online") return matchesSearch && member.status === "online";
    if (activeTab === "admin") return matchesSearch && member.isAdmin;
    
    return matchesSearch;
  });

  const handleInviteTeamMember = () => {
    toast.info("Funcionalidade de convite em desenvolvimento");
  };

  const statusColor = (status: string) => {
    switch(status) {
      case "online": return "bg-green-500";
      case "away": return "bg-amber-500";
      case "offline": return "bg-slate-300 dark:bg-slate-600";
      default: return "bg-slate-300 dark:bg-slate-600";
    }
  };

  const statusText = (status: string) => {
    switch(status) {
      case "online": return "Online";
      case "away": return "Ausente";
      case "offline": return "Offline";
      default: return "Desconhecido";
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Equipe</h1>
              <p className="text-muted-foreground">
                Gerencie membros da equipe e suas permissões
              </p>
            </div>
            <Button onClick={handleInviteTeamMember} className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
              <UserPlus className="mr-2 h-4 w-4" /> Convidar Membro
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="online">Online</TabsTrigger>
                <TabsTrigger value="admin">Administradores</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="search" 
                placeholder="Buscar membros..." 
                className="pl-10 w-full sm:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredMembers.map(member => (
                <Card key={member.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3 items-center">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center text-white font-medium">
                          {member.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${statusColor(member.status)}`}></div>
                      </div>
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => toast.info(`Enviando mensagem para ${member.name}...`)}>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Enviar mensagem</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toast.info(`Vendo detalhes do perfil de ${member.name}...`)}>
                          <Users className="mr-2 h-4 w-4" />
                          <span>Ver perfil</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toast.info(`Editando permissões de ${member.name}...`)}>
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Editar permissões</span>
                        </DropdownMenuItem>
                        {!member.isAdmin && (
                          <DropdownMenuItem
                            onClick={() => toast.info(`${member.name} removido da equipe`)}
                            className="text-red-600 dark:text-red-400"
                          >
                            <UserX className="mr-2 h-4 w-4" />
                            <span>Remover da equipe</span>
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Email:</span> {member.email}
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Departamento:</span> {member.department}
                    </div>
                    <div className="text-sm flex items-center gap-2">
                      <span className="text-muted-foreground">Status:</span> 
                      <span className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${statusColor(member.status)}`}></span>
                        {statusText(member.status)}
                      </span>
                    </div>
                    <div className="pt-2 flex items-center gap-2">
                      {member.isAdmin && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Shield className="h-3 w-3" /> Admin
                        </Badge>
                      )}
                      <Badge variant="outline">{member.department}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="p-6 flex flex-col items-center justify-center border-dashed">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  <Plus className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-1">Adicionar Membro</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Convide novos membros para sua equipe
                </p>
                <Button variant="outline" onClick={handleInviteTeamMember}>
                  Convidar
                </Button>
              </Card>
            </div>
          </TabsContent>
          
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Convites Pendentes</h2>
              <Button variant="outline" size="sm">Ver Todos</Button>
            </div>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium">Fernanda Torres</h3>
                    <p className="text-sm text-muted-foreground">fernanda.torres@exemplo.com</p>
                  </div>
                </div>
                <div>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 border-amber-200 dark:border-amber-800">
                    Pendente
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">Enviado há 2 dias</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
