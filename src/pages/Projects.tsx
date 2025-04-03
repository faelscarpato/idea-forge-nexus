
import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projectsData = [
  {
    id: "pro-1",
    name: "Planejamento Estratégico 2024",
    created: "12/01/2023",
    members: 8,
    status: "Em andamento",
    progress: 67,
  },
  {
    id: "pro-2",
    name: "Lançamento de Produto",
    created: "05/03/2023",
    members: 12,
    status: "Em andamento",
    progress: 42,
  },
  {
    id: "pro-3",
    name: "Colaboração em Pesquisa",
    created: "18/11/2022",
    members: 5,
    status: "Concluído",
    progress: 100,
  },
  {
    id: "pro-4",
    name: "Transformação Digital",
    created: "23/04/2023",
    members: 15,
    status: "Em andamento",
    progress: 35,
  },
  {
    id: "pro-5",
    name: "Análise de Mercado",
    created: "07/06/2023",
    members: 4,
    status: "Aguardando",
    progress: 0,
  }
];

const Projects = () => {
  useEffect(() => {
    document.title = "Projetos | NexusMind";
  }, []);

  const handleCreateProject = () => {
    toast.info("Funcionalidade de criação de projeto em desenvolvimento");
  };

  const handleSearchProject = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Funcionalidade de busca em desenvolvimento");
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case "Em andamento":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Concluído":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Aguardando":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300";
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
              <h1 className="text-2xl font-bold">Projetos</h1>
              <p className="text-muted-foreground">
                Gerencie e acompanhe todos os seus projetos de inteligência coletiva
              </p>
            </div>
            <Button onClick={handleCreateProject} className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
              <Plus className="mr-2 h-4 w-4" /> Novo Projeto
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <form onSubmit={handleSearchProject} className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="search" 
                placeholder="Buscar projetos..." 
                className="pl-10"
              />
            </form>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filtros
            </Button>
          </div>

          <div className="rounded-lg border bg-card">
            <Table>
              <TableCaption>Lista de projetos ativos e concluídos.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Nome</TableHead>
                  <TableHead>Criado em</TableHead>
                  <TableHead>Membros</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progresso</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectsData.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>{project.created}</TableCell>
                    <TableCell>{project.members}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(project.status)}`}>
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-nexus-purple to-nexus-turquoise"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium">{project.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => toast.info(`Abrindo projeto: ${project.name}`)}>
                        Acessar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
