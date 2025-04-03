
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, BarChart2, PieChart, Users, Brain, Zap, Activity } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart as RPieChart, Pie, Cell } from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const COLORS = ["#8b5cf6", "#06b6d4", "#10b981", "#f97316", "#f43f5e", "#8b5cf6"];

const engagementData = [
  { name: "Jan", usuarios: 20, ideias: 15, decisoes: 5 },
  { name: "Fev", usuarios: 28, ideias: 19, decisoes: 7 },
  { name: "Mar", usuarios: 35, ideias: 25, decisoes: 10 },
  { name: "Abr", usuarios: 42, ideias: 30, decisoes: 15 },
  { name: "Mai", usuarios: 50, ideias: 38, decisoes: 18 },
  { name: "Jun", usuarios: 65, ideias: 45, decisoes: 25 }
];

const ideaTypesData = [
  { name: "Produto", value: 35 },
  { name: "Processo", value: 25 },
  { name: "Marketing", value: 18 },
  { name: "Tecnologia", value: 22 },
  { name: "Outros", value: 10 }
];

const participationData = [
  { name: "Segunda", participacao: 78 },
  { name: "Terça", participacao: 85 },
  { name: "Quarta", participacao: 92 },
  { name: "Quinta", participacao: 87 },
  { name: "Sexta", participacao: 60 },
  { name: "Sábado", participacao: 35 },
  { name: "Domingo", participacao: 40 }
];

const Statistics = () => {
  const [timeFrame, setTimeFrame] = useState("6m");

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
              <h1 className="text-2xl font-bold">Estatísticas</h1>
              <p className="text-muted-foreground">
                Visualize métricas e insights sobre o uso da plataforma
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Período:</span>
              <Select value={timeFrame} onValueChange={setTimeFrame}>
                <SelectTrigger className="w-36">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">Último mês</SelectItem>
                  <SelectItem value="3m">Últimos 3 meses</SelectItem>
                  <SelectItem value="6m">Últimos 6 meses</SelectItem>
                  <SelectItem value="1y">Último ano</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Exportar</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Participantes
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">246</div>
                <p className="text-xs text-muted-foreground">
                  +12% em relação ao período anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Ideias Geradas
                </CardTitle>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">172</div>
                <p className="text-xs text-muted-foreground">
                  +8% em relação ao período anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Decisões Tomadas
                </CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">80</div>
                <p className="text-xs text-muted-foreground">
                  +15% em relação ao período anterior
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="engagement" className="space-y-4">
            <TabsList>
              <TabsTrigger value="engagement">Engajamento</TabsTrigger>
              <TabsTrigger value="ideas">Ideias</TabsTrigger>
              <TabsTrigger value="participation">Participação</TabsTrigger>
            </TabsList>
            
            <TabsContent value="engagement" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Engajamento ao longo do tempo</CardTitle>
                  <CardDescription>
                    Métricas de usuários ativos, ideias geradas e decisões tomadas
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={engagementData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="usuarios" name="Usuários Ativos" fill="#8b5cf6" />
                        <Bar dataKey="ideias" name="Ideias Geradas" fill="#06b6d4" />
                        <Bar dataKey="decisoes" name="Decisões Tomadas" fill="#10b981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Taxa de Conversão de Ideias</CardTitle>
                    <CardDescription>
                      Porcentagem de ideias que resultam em decisões
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex items-center justify-center">
                      <div className="relative h-40 w-40 flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-slate-100 dark:text-slate-800 stroke-current"
                            strokeWidth="10"
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                          ></circle>
                          <circle
                            className="text-nexus-purple stroke-current"
                            strokeWidth="10"
                            strokeLinecap="round"
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            strokeDasharray="251.2"
                            strokeDashoffset="67.8"
                          ></circle>
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold">73%</span>
                          <span className="text-xs text-muted-foreground">Taxa de Conversão</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tempo Médio de Engajamento</CardTitle>
                    <CardDescription>
                      Quanto tempo os usuários passam colaborando
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-[200px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-4">
                          <div>
                            <div className="text-3xl font-bold">28</div>
                            <div className="text-xs text-muted-foreground">minutos/sessão</div>
                          </div>
                          <div className="h-12 w-px bg-slate-200 dark:bg-slate-700"></div>
                          <div>
                            <div className="text-3xl font-bold">4.2</div>
                            <div className="text-xs text-muted-foreground">sessões/semana</div>
                          </div>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">
                          Aumento de 18% em relação ao período anterior
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="ideas" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição de Tipos de Ideias</CardTitle>
                  <CardDescription>
                    Visualização das categorias de ideias geradas
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RPieChart>
                        <Pie
                          data={ideaTypesData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {ideaTypesData.map((entry, index) => (
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Taxa de Implementação</CardTitle>
                    <CardDescription>
                      Porcentagem de ideias que são implementadas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Produto</span>
                          <span className="text-sm font-medium">48%</span>
                        </div>
                        <div className="mt-1 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-nexus-purple" style={{ width: "48%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Processo</span>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                        <div className="mt-1 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-500" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Marketing</span>
                          <span className="text-sm font-medium">42%</span>
                        </div>
                        <div className="mt-1 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Tecnologia</span>
                          <span className="text-sm font-medium">78%</span>
                        </div>
                        <div className="mt-1 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500" style={{ width: "78%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tempo Médio de Implementação</CardTitle>
                    <CardDescription>
                      Quanto tempo leva para implementar uma ideia
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Impacto Baixo</span>
                          <span className="text-sm font-medium">3 dias</span>
                        </div>
                        <div className="mt-1 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Impacto Médio</span>
                          <span className="text-sm font-medium">12 dias</span>
                        </div>
                        <div className="mt-1 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500" style={{ width: "50%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Impacto Alto</span>
                          <span className="text-sm font-medium">28 dias</span>
                        </div>
                        <div className="mt-1 w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="participation" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Participação por Dia da Semana</CardTitle>
                  <CardDescription>
                    Nível de engajamento ao longo da semana
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={participationData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="participacao" name="Índice de Participação" fill="#8b5cf6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Participação por Departamento</CardTitle>
                    <CardDescription>
                      Distribuição de participação por área
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RPieChart>
                          <Pie
                            data={[
                              { name: "Produto", value: 35 },
                              { name: "Engenharia", value: 30 },
                              { name: "Marketing", value: 15 },
                              { name: "Design", value: 12 },
                              { name: "Outros", value: 8 }
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label
                          >
                            {ideaTypesData.map((entry, index) => (
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
                    <CardTitle>Participantes Mais Ativos</CardTitle>
                    <CardDescription>
                      Usuários com mais contribuições
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center text-white">
                            AM
                          </div>
                          <span>Ana Martins</span>
                        </div>
                        <span className="font-medium">48 contribuições</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                            CS
                          </div>
                          <span>Carlos Santos</span>
                        </div>
                        <span className="font-medium">42 contribuições</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center text-white">
                            JL
                          </div>
                          <span>Juliana Lima</span>
                        </div>
                        <span className="font-medium">37 contribuições</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white">
                            RF
                          </div>
                          <span>Rafael Ferreira</span>
                        </div>
                        <span className="font-medium">35 contribuições</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Statistics;
