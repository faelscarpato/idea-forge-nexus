
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Filter, FileText, BarChart2, Brain, Users, Plus, ArrowUpDown, PieChart } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart as RPieChart, Pie, Cell } from "recharts";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const COLORS = ["#8b5cf6", "#06b6d4", "#10b981", "#f97316", "#f43f5e", "#8b5cf6"];

const trendsData = [
  { name: "Semana 1", insights: 12, ideias: 8, decisoes: 3 },
  { name: "Semana 2", insights: 19, ideias: 12, decisoes: 5 },
  { name: "Semana 3", insights: 25, ideias: 18, decisoes: 8 },
  { name: "Semana 4", insights: 22, ideias: 15, decisoes: 7 },
  { name: "Semana 5", insights: 30, ideias: 20, decisoes: 10 },
  { name: "Semana 6", insights: 35, ideias: 24, decisoes: 12 },
];

const contributionData = [
  { name: "Engenharia", value: 35 },
  { name: "Produto", value: 28 },
  { name: "Marketing", value: 15 },
  { name: "Design", value: 12 },
  { name: "Gestão", value: 10 },
];

const projectReportsList = [
  {
    id: "report1",
    title: "Análise de Desempenho - Q2",
    project: "Planejamento Estratégico 2024",
    author: "Ana Martins",
    date: "15/05/2023",
    insights: 28,
    type: "Análise Trimestral"
  },
  {
    id: "report2",
    title: "Impacto de Colaboração - Projeto Alpha",
    project: "Lançamento de Produto",
    author: "Carlos Mendes",
    date: "28/04/2023",
    insights: 16,
    type: "Análise de Impacto"
  },
  {
    id: "report3",
    title: "Relatório de Decisões Coletivas",
    project: "Transformação Digital",
    author: "Sofia Santos",
    date: "12/05/2023",
    insights: 22,
    type: "Processo Decisório"
  },
  {
    id: "report4",
    title: "Métricas de Engajamento - Abril",
    project: "Planejamento Estratégico 2024",
    author: "Ricardo Oliveira",
    date: "02/05/2023",
    insights: 18,
    type: "Engajamento"
  },
  {
    id: "report5",
    title: "Padrões de Colaboração - Equipe Técnica",
    project: "Colaboração em Pesquisa",
    author: "Mariana Costa",
    date: "08/05/2023",
    insights: 25,
    type: "Padrões de Colaboração"
  }
];

const ReportsPage = () => {
  const [timeFrame, setTimeFrame] = useState("30d");
  const [sortColumn, setSortColumn] = useState("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedReports = [...projectReportsList].sort((a, b) => {
    let comparison = 0;
    
    switch (sortColumn) {
      case "title":
        comparison = a.title.localeCompare(b.title);
        break;
      case "project":
        comparison = a.project.localeCompare(b.project);
        break;
      case "author":
        comparison = a.author.localeCompare(b.author);
        break;
      case "date":
        const dateA = new Date(a.date.split("/").reverse().join("-"));
        const dateB = new Date(b.date.split("/").reverse().join("-"));
        comparison = dateA.getTime() - dateB.getTime();
        break;
      case "insights":
        comparison = a.insights - b.insights;
        break;
      case "type":
        comparison = a.type.localeCompare(b.type);
        break;
      default:
        comparison = 0;
    }
    
    return sortDirection === "asc" ? comparison : -comparison;
  });

  const handleCreateReport = () => {
    toast.info("Funcionalidade de criação de relatório em desenvolvimento");
  };

  const handleDownloadReport = (id: string) => {
    const report = projectReportsList.find(r => r.id === id);
    toast.success(`Relatório "${report?.title}" sendo baixado...`);
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
              <h1 className="text-2xl font-bold">Relatórios</h1>
              <p className="text-muted-foreground">
                Gerencie e visualize relatórios de inteligência coletiva
              </p>
            </div>
            <Button onClick={handleCreateReport} className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
              <Plus className="mr-2 h-4 w-4" /> Novo Relatório
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="reports">Relatórios</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h2 className="text-lg font-semibold">Resumo de Insights</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Período:</span>
                  <Select value={timeFrame} onValueChange={setTimeFrame}>
                    <SelectTrigger className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7d">Últimos 7 dias</SelectItem>
                      <SelectItem value="30d">Últimos 30 dias</SelectItem>
                      <SelectItem value="90d">Últimos 90 dias</SelectItem>
                      <SelectItem value="1y">Último ano</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Insights Gerados
                    </CardTitle>
                    <Brain className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">143</div>
                    <p className="text-xs text-muted-foreground">
                      +12% em relação ao período anterior
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Relatórios Criados
                    </CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18</div>
                    <p className="text-xs text-muted-foreground">
                      +5% em relação ao período anterior
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Visualizações de Relatórios
                    </CardTitle>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">324</div>
                    <p className="text-xs text-muted-foreground">
                      +28% em relação ao período anterior
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Tendências de Insights e Decisões</CardTitle>
                  <CardDescription>
                    Evolução da geração de insights, ideias e decisões ao longo do tempo
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={trendsData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="insights" name="Insights" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                        <Area type="monotone" dataKey="ideias" name="Ideias" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                        <Area type="monotone" dataKey="decisoes" name="Decisões" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Contribuição por Departamento</CardTitle>
                    <CardDescription>
                      Distribuição de insights por área de expertise
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RPieChart>
                          <Pie
                            data={contributionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {contributionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </RPieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Relatórios em Destaque</CardTitle>
                    <CardDescription>
                      Relatórios mais visualizados no período
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sortedReports.slice(0, 3).map((report, index) => (
                        <div key={index} className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">{report.title}</h3>
                            <p className="text-sm text-muted-foreground">{report.project}</p>
                            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                              <span>{report.author}</span>
                              <span>•</span>
                              <span>{report.date}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" onClick={() => handleDownloadReport(report.id)}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="w-full" onClick={() => document.querySelector('[data-value="reports"]')?.dispatchEvent(new Event('click'))}>
                      Ver todos os relatórios
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <CardTitle>Lista de Relatórios</CardTitle>
                      <CardDescription>
                        Relatórios gerados pela plataforma de inteligência coletiva
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" /> Filtrar
                      </Button>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-36">
                          <SelectValue placeholder="Tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos os tipos</SelectItem>
                          <SelectItem value="analytics">Análise</SelectItem>
                          <SelectItem value="impact">Impacto</SelectItem>
                          <SelectItem value="decisions">Decisões</SelectItem>
                          <SelectItem value="engagement">Engajamento</SelectItem>
                          <SelectItem value="patterns">Padrões</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("title")}>
                          <div className="flex items-center gap-1">
                            Título
                            {sortColumn === "title" && (
                              <ArrowUpDown className="h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("project")}>
                          <div className="flex items-center gap-1">
                            Projeto
                            {sortColumn === "project" && (
                              <ArrowUpDown className="h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("author")}>
                          <div className="flex items-center gap-1">
                            Autor
                            {sortColumn === "author" && (
                              <ArrowUpDown className="h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
                          <div className="flex items-center gap-1">
                            Data
                            {sortColumn === "date" && (
                              <ArrowUpDown className="h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("insights")}>
                          <div className="flex items-center gap-1">
                            Insights
                            {sortColumn === "insights" && (
                              <ArrowUpDown className="h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("type")}>
                          <div className="flex items-center gap-1">
                            Tipo
                            {sortColumn === "type" && (
                              <ArrowUpDown className="h-4 w-4" />
                            )}
                          </div>
                        </TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedReports.map((report) => (
                        <TableRow key={report.id}>
                          <TableCell>{report.title}</TableCell>
                          <TableCell>{report.project}</TableCell>
                          <TableCell>{report.author}</TableCell>
                          <TableCell>{report.date}</TableCell>
                          <TableCell>{report.insights}</TableCell>
                          <TableCell>{report.type}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm" onClick={() => toast.info(`Visualizando relatório: ${report.title}`)}>
                                <FileText className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleDownloadReport(report.id)}>
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ReportsPage;
