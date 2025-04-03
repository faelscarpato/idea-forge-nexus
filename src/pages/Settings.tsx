
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  User,
  Lock,
  Bell,
  Globe,
  Shield,
  PieChart,
  Workflow,
  Smartphone,
  LucideIcon,
  CheckCircle,
  CircleUserRound,
  Save
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface SettingsSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children: React.ReactNode;
}

const SettingsSection = ({ icon: Icon, title, description, children }: SettingsSectionProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-nexus-purple" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSave = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Configurações salvas com sucesso!");
    }, 1500);
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
              <h1 className="text-2xl font-bold">Configurações</h1>
              <p className="text-muted-foreground">
                Gerencie suas preferências e configurações da conta
              </p>
            </div>
            <Button 
              onClick={handleSave} 
              disabled={isLoading}
              className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity"
            >
              {isLoading ? (
                <>Salvando...</>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> Salvar Alterações
                </>
              )}
            </Button>
          </div>

          <Tabs defaultValue="account" className="space-y-4">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="account">Conta</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
              <TabsTrigger value="privacy">Privacidade</TabsTrigger>
              <TabsTrigger value="app">Aplicativo</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="space-y-4">
              <SettingsSection
                icon={User}
                title="Informações Pessoais"
                description="Atualize suas informações de perfil"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center text-white text-4xl mb-2">
                      JP
                    </div>
                    <Button variant="outline" className="w-full mt-2">
                      Alterar foto
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" defaultValue="João Paulo Silva" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="joao.silva@exemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Cargo</Label>
                      <Input id="role" defaultValue="Gerente de Inovação" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa/Organização</Label>
                      <Input id="company" defaultValue="Empresa XYZ" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Biografia</Label>
                      <Input id="bio" defaultValue="Especialista em colaboração e inteligência coletiva" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Fuso Horário</Label>
                      <Select defaultValue="America/Sao_Paulo">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Selecionar fuso horário" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/Sao_Paulo">América/São Paulo (GMT-3)</SelectItem>
                          <SelectItem value="America/New_York">América/Nova York (GMT-4)</SelectItem>
                          <SelectItem value="Europe/London">Europa/Londres (GMT+1)</SelectItem>
                          <SelectItem value="Asia/Tokyo">Ásia/Tóquio (GMT+9)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </SettingsSection>
              
              <SettingsSection
                icon={Lock}
                title="Segurança e Acesso"
                description="Gerencie sua senha e opções de segurança"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2"></div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                    <Input id="confirm-password" type="password" placeholder="••••••••" />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-3">Autenticação de Dois Fatores</h3>
                  <div className="flex items-center justify-between border p-4 rounded-lg">
                    <div className="space-y-0.5">
                      <div className="font-medium">Verificação em duas etapas</div>
                      <div className="text-sm text-muted-foreground">
                        Adicione uma camada extra de segurança à sua conta
                      </div>
                    </div>
                    <Button variant="outline" onClick={() => toast.info("Configuração de 2FA em desenvolvimento")}>
                      Configurar
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-3">Sessões Ativas</h3>
                  <div className="space-y-2">
                    <div className="border p-4 rounded-lg flex items-center justify-between">
                      <div>
                        <div className="font-medium">Windows - Chrome</div>
                        <div className="text-sm text-muted-foreground">São Paulo, Brasil • Atual</div>
                      </div>
                      <div className="flex items-center text-sm text-green-600 dark:text-green-500">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Ativo
                      </div>
                    </div>
                    <div className="border p-4 rounded-lg flex items-center justify-between">
                      <div>
                        <div className="font-medium">iPhone - Safari</div>
                        <div className="text-sm text-muted-foreground">São Paulo, Brasil • 2 dias atrás</div>
                      </div>
                      <Button variant="outline" size="sm" className="text-xs h-8">
                        Encerrar
                      </Button>
                    </div>
                  </div>
                </div>
              </SettingsSection>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-4">
              <SettingsSection
                icon={Bell}
                title="Preferências de Notificações"
                description="Gerencie como e quando você recebe notificações"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba notificações por email
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba notificações push no navegador
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">SMS</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba notificações por SMS
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-base font-medium mb-4">Tipos de Notificação</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Menções</Label>
                        <p className="text-sm text-muted-foreground">
                          Quando alguém menciona você em um comentário ou discussão
                        </p>
                      </div>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="important">Importantes</SelectItem>
                          <SelectItem value="none">Nenhuma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Novos comentários</Label>
                        <p className="text-sm text-muted-foreground">
                          Quando alguém comenta em um projeto que você participa
                        </p>
                      </div>
                      <Select defaultValue="important">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="important">Importantes</SelectItem>
                          <SelectItem value="none">Nenhuma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Atualizações de projeto</Label>
                        <p className="text-sm text-muted-foreground">
                          Quando há atualizações nos projetos que você participa
                        </p>
                      </div>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="important">Importantes</SelectItem>
                          <SelectItem value="none">Nenhuma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Convites</Label>
                        <p className="text-sm text-muted-foreground">
                          Quando você é convidado para um novo projeto ou grupo
                        </p>
                      </div>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="important">Importantes</SelectItem>
                          <SelectItem value="none">Nenhuma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </SettingsSection>

              <SettingsSection
                icon={Globe}
                title="Notificações de Marketing"
                description="Gerencie suas preferências de comunicação marketing"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Atualizações do Produto</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba informações sobre novas funcionalidades e melhorias
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Dicas e Tutoriais</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba conteúdo educativo sobre como usar melhor a plataforma
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Newsletter</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba nossa newsletter mensal com novidades e tendências
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Eventos</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba convites para webinars e eventos relacionados
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </SettingsSection>
            </TabsContent>
            
            <TabsContent value="privacy" className="space-y-4">
              <SettingsSection
                icon={Shield}
                title="Privacidade e Visibilidade"
                description="Controle quem pode ver suas informações e atividades"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Perfil Público</Label>
                      <p className="text-sm text-muted-foreground">
                        Permitir que os usuários vejam seu perfil
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Visibilidade de Contribuições</Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar suas contribuições para outros usuários
                      </p>
                    </div>
                    <Select defaultValue="team">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Público</SelectItem>
                        <SelectItem value="team">Equipe</SelectItem>
                        <SelectItem value="private">Privado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Status de Atividade</Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar quando você está online
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Compartilhamento de Dados de Uso</Label>
                      <p className="text-sm text-muted-foreground">
                        Permitir que a plataforma colete dados anônimos para melhorar a experiência
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </SettingsSection>

              <SettingsSection
                icon={CircleUserRound}
                title="Controle de Dados"
                description="Gerencie seus dados pessoais na plataforma"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-medium mb-2">Dados Armazenados</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Você pode solicitar uma cópia de todos os dados que temos sobre você
                    </p>
                    <Button variant="outline" onClick={() => toast.info("Solicitação de exportação de dados iniciada")}>
                      Exportar Meus Dados
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-base font-medium mb-2 text-red-600 dark:text-red-400">Zona de Perigo</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Estas ações não podem ser desfeitas. Por favor, tenha certeza antes de prosseguir.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        variant="outline" 
                        className="border-red-300 hover:bg-red-100 hover:text-red-600 dark:border-red-800 dark:hover:bg-red-950 dark:hover:text-red-400"
                        onClick={() => toast.info("Funcionalidade em desenvolvimento")}
                      >
                        Excluir Meus Dados
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-red-300 hover:bg-red-100 hover:text-red-600 dark:border-red-800 dark:hover:bg-red-950 dark:hover:text-red-400"
                        onClick={() => toast.info("Funcionalidade em desenvolvimento")}
                      >
                        Desativar Minha Conta
                      </Button>
                    </div>
                  </div>
                </div>
              </SettingsSection>
            </TabsContent>
            
            <TabsContent value="app" className="space-y-4">
              <SettingsSection
                icon={Workflow}
                title="Preferências do Aplicativo"
                description="Personalize sua experiência na plataforma"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Tema</Label>
                      <p className="text-sm text-muted-foreground">
                        Escolha o tema de preferência
                      </p>
                    </div>
                    <Select defaultValue="system">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Claro</SelectItem>
                        <SelectItem value="dark">Escuro</SelectItem>
                        <SelectItem value="system">Sistema</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Idioma</Label>
                      <p className="text-sm text-muted-foreground">
                        Selecione o idioma da interface
                      </p>
                    </div>
                    <Select defaultValue="pt-BR">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-BR">Português (BR)</SelectItem>
                        <SelectItem value="en-US">English (US)</SelectItem>
                        <SelectItem value="es-ES">Español</SelectItem>
                        <SelectItem value="fr-FR">Français</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Animações</Label>
                      <p className="text-sm text-muted-foreground">
                        Ativar animações na interface
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Acessibilidade</Label>
                      <p className="text-sm text-muted-foreground">
                        Ativar recursos de acessibilidade
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </SettingsSection>

              <SettingsSection
                icon={PieChart}
                title="Dashboard Personalizado"
                description="Configure os widgets e visualização do seu dashboard"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Projetos Recentes</Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar seus projetos recentes no dashboard
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Gráficos de Análise</Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar gráficos e estatísticas no dashboard
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Atividade da Equipe</Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar atividades recentes da sua equipe
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Notícias e Atualizações</Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar novidades sobre a plataforma
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </SettingsSection>

              <SettingsSection
                icon={Smartphone}
                title="Dispositivos Conectados"
                description="Gerencie os dispositivos que têm acesso à sua conta"
              >
                <div className="space-y-4">
                  <div className="border p-4 rounded-lg flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="h-10 w-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">iPhone 13</div>
                        <div className="text-sm text-muted-foreground">iOS 16.2 • Safari • São Paulo, Brasil</div>
                        <div className="text-xs text-green-600 dark:text-green-500 mt-1">Conectado agora</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => toast.info("Dispositivo desconectado")}>
                      Remover
                    </Button>
                  </div>
                  
                  <div className="border p-4 rounded-lg flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="h-10 w-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">MacBook Pro</div>
                        <div className="text-sm text-muted-foreground">macOS • Chrome • São Paulo, Brasil</div>
                        <div className="text-xs text-slate-500 mt-1">Último acesso: há 2 dias</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => toast.info("Dispositivo desconectado")}>
                      Remover
                    </Button>
                  </div>
                  
                  <div className="border p-4 rounded-lg flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="h-10 w-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Windows PC</div>
                        <div className="text-sm text-muted-foreground">Windows 11 • Edge • São Paulo, Brasil</div>
                        <div className="text-xs text-slate-500 mt-1">Último acesso: há 5 dias</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => toast.info("Dispositivo desconectado")}>
                      Remover
                    </Button>
                  </div>
                </div>
              </SettingsSection>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
