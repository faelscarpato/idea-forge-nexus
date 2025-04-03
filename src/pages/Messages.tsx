
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Edit, Users, Video, Star, MoreHorizontal, Send, Paperclip, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  isGroup?: boolean;
  isStarred?: boolean;
  messages: Message[];
}

const MessagesPage = () => {
  const [activeConversation, setActiveConversation] = useState<string | null>("conv1");
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample conversations data
  const conversations: Conversation[] = [
    {
      id: "conv1",
      name: "Equipe de Inovação",
      lastMessage: "Vamos agendar uma reunião para discutir os próximos passos?",
      timestamp: new Date(2023, 5, 15, 14, 30),
      unread: 3,
      isGroup: true,
      messages: [
        {
          id: "msg1",
          senderId: "user2",
          content: "Olá pessoal, alguém conseguiu revisar o documento de requisitos?",
          timestamp: new Date(2023, 5, 15, 10, 0),
          read: true
        },
        {
          id: "msg2",
          senderId: "user3",
          content: "Sim, já fiz a revisão e adicionei alguns comentários. Acho que precisamos detalhar melhor a seção de integração com IA.",
          timestamp: new Date(2023, 5, 15, 10, 15),
          read: true
        },
        {
          id: "msg3",
          senderId: "user4",
          content: "Concordo. Também notei que faltam alguns diagramas explicativos na parte de arquitetura.",
          timestamp: new Date(2023, 5, 15, 11, 0),
          read: true
        },
        {
          id: "msg4",
          senderId: "user2",
          content: "Ótimas observações! Vou trabalhar nisso hoje à tarde.",
          timestamp: new Date(2023, 5, 15, 11, 30),
          read: true
        },
        {
          id: "msg5",
          senderId: "user3",
          content: "Vamos agendar uma reunião para discutir os próximos passos?",
          timestamp: new Date(2023, 5, 15, 14, 30),
          read: false
        }
      ]
    },
    {
      id: "conv2",
      name: "Ana Silva",
      avatar: "AS",
      lastMessage: "Podemos conversar sobre a integração da API?",
      timestamp: new Date(2023, 5, 14, 9, 15),
      unread: 0,
      isStarred: true,
      messages: [
        {
          id: "msg6",
          senderId: "user2",
          content: "Oi Ana, tudo bem?",
          timestamp: new Date(2023, 5, 14, 9, 0),
          read: true
        },
        {
          id: "msg7",
          senderId: "user1",
          content: "Tudo ótimo! Estou trabalhando na integração da IA com o módulo de análise.",
          timestamp: new Date(2023, 5, 14, 9, 5),
          read: true
        },
        {
          id: "msg8",
          senderId: "user2",
          content: "Que bom! Como está o progresso?",
          timestamp: new Date(2023, 5, 14, 9, 10),
          read: true
        },
        {
          id: "msg9",
          senderId: "user1",
          content: "Está indo bem, mas encontrei alguns desafios com a API. Podemos conversar sobre a integração da API?",
          timestamp: new Date(2023, 5, 14, 9, 15),
          read: true
        }
      ]
    },
    {
      id: "conv3",
      name: "Carlos Mendes",
      avatar: "CM",
      lastMessage: "Os resultados da pesquisa estão prontos para revisão",
      timestamp: new Date(2023, 5, 13, 16, 45),
      unread: 1,
      messages: [
        {
          id: "msg10",
          senderId: "user3",
          content: "Olá, terminei a análise dos dados da última sessão de colaboração.",
          timestamp: new Date(2023, 5, 13, 16, 30),
          read: true
        },
        {
          id: "msg11",
          senderId: "user1",
          content: "Ótimo! Quais foram os insights principais?",
          timestamp: new Date(2023, 5, 13, 16, 35),
          read: true
        },
        {
          id: "msg12",
          senderId: "user3",
          content: "Encontramos padrões interessantes na forma como os times interagem. Os resultados da pesquisa estão prontos para revisão.",
          timestamp: new Date(2023, 5, 13, 16, 45),
          read: false
        }
      ]
    },
    {
      id: "conv4",
      name: "Projeto Alpha",
      lastMessage: "Reunião adiada para quinta-feira, mesmo horário",
      timestamp: new Date(2023, 5, 12, 11, 20),
      unread: 0,
      isGroup: true,
      messages: [
        {
          id: "msg13",
          senderId: "user4",
          content: "Pessoal, precisamos reagendar a reunião de amanhã.",
          timestamp: new Date(2023, 5, 12, 11, 0),
          read: true
        },
        {
          id: "msg14",
          senderId: "user2",
          content: "Por mim tudo bem. Qual o motivo?",
          timestamp: new Date(2023, 5, 12, 11, 5),
          read: true
        },
        {
          id: "msg15",
          senderId: "user4",
          content: "Surgiu uma reunião de emergência com o cliente. Reunião adiada para quinta-feira, mesmo horário.",
          timestamp: new Date(2023, 5, 12, 11, 20),
          read: true
        }
      ]
    }
  ];

  const filteredConversations = conversations.filter(
    conv => conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentConversation = conversations.find(conv => conv.id === activeConversation);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!messageInput.trim()) return;
    
    if (currentConversation) {
      toast.success("Mensagem enviada com sucesso!");
      setMessageInput("");
    }
  };

  const handleNewConversation = () => {
    toast.info("Funcionalidade de nova conversa em desenvolvimento");
  };

  const formatMessageTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatConversationTime = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return formatMessageTime(date);
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Ontem";
    } else {
      return date.toLocaleDateString();
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
          className="bg-white dark:bg-slate-900 rounded-lg border shadow-sm overflow-hidden h-[calc(100vh-200px)]"
        >
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-full max-w-xs border-r dark:border-slate-800 flex flex-col">
              <div className="p-4 border-b dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-xl font-bold">Mensagens</h1>
                  <Button variant="ghost" size="icon" onClick={handleNewConversation}>
                    <Edit className="h-5 w-5" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    type="search" 
                    placeholder="Buscar conversas..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <Tabs defaultValue="all" className="flex-1 flex flex-col">
                <div className="px-2 border-b dark:border-slate-800">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="all" className="flex-1">Todas</TabsTrigger>
                    <TabsTrigger value="unread" className="flex-1">Não lidas</TabsTrigger>
                    <TabsTrigger value="starred" className="flex-1">Favoritas</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="all" className="flex-1 m-0 p-0">
                  <ScrollArea className="h-full">
                    <div className="divide-y dark:divide-slate-800">
                      {filteredConversations.map((conv) => (
                        <button
                          key={conv.id}
                          className={`w-full text-left p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
                            activeConversation === conv.id ? 'bg-slate-100 dark:bg-slate-800/70' : ''
                          }`}
                          onClick={() => setActiveConversation(conv.id)}
                        >
                          <div className="flex gap-3">
                            {conv.avatar ? (
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center text-white">
                                {conv.avatar}
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                {conv.isGroup ? (
                                  <Users className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                                ) : (
                                  <User className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                                )}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium truncate">{conv.name}</h3>
                                <span className="text-xs text-muted-foreground">
                                  {formatConversationTime(conv.timestamp)}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-end gap-2 mt-1">
                            {conv.isStarred && <Star className="h-3 w-3 fill-amber-400 text-amber-400" />}
                            {conv.unread > 0 && (
                              <span className="rounded-full bg-nexus-purple text-white text-xs px-2 py-0.5 min-w-[1.25rem]">
                                {conv.unread}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                      
                      {filteredConversations.length === 0 && (
                        <div className="p-4 text-center text-muted-foreground">
                          Nenhuma conversa encontrada
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </TabsContent>
                
                <TabsContent value="unread" className="flex-1 m-0 p-0">
                  <ScrollArea className="h-full">
                    <div className="divide-y dark:divide-slate-800">
                      {filteredConversations
                        .filter(conv => conv.unread > 0)
                        .map((conv) => (
                          <button
                            key={conv.id}
                            className={`w-full text-left p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
                              activeConversation === conv.id ? 'bg-slate-100 dark:bg-slate-800/70' : ''
                            }`}
                            onClick={() => setActiveConversation(conv.id)}
                          >
                            <div className="flex gap-3">
                              {conv.avatar ? (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center text-white">
                                  {conv.avatar}
                                </div>
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                  {conv.isGroup ? (
                                    <Users className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                                  ) : (
                                    <User className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                                  )}
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-medium truncate">{conv.name}</h3>
                                  <span className="text-xs text-muted-foreground">
                                    {formatConversationTime(conv.timestamp)}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-end mt-1">
                              <span className="rounded-full bg-nexus-purple text-white text-xs px-2 py-0.5 min-w-[1.25rem]">
                                {conv.unread}
                              </span>
                            </div>
                          </button>
                        ))}
                        
                        {filteredConversations.filter(conv => conv.unread > 0).length === 0 && (
                          <div className="p-4 text-center text-muted-foreground">
                            Nenhuma conversa não lida
                          </div>
                        )}
                    </div>
                  </ScrollArea>
                </TabsContent>
                
                <TabsContent value="starred" className="flex-1 m-0 p-0">
                  <ScrollArea className="h-full">
                    <div className="divide-y dark:divide-slate-800">
                      {filteredConversations
                        .filter(conv => conv.isStarred)
                        .map((conv) => (
                          <button
                            key={conv.id}
                            className={`w-full text-left p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
                              activeConversation === conv.id ? 'bg-slate-100 dark:bg-slate-800/70' : ''
                            }`}
                            onClick={() => setActiveConversation(conv.id)}
                          >
                            <div className="flex gap-3">
                              {conv.avatar ? (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center text-white">
                                  {conv.avatar}
                                </div>
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                  {conv.isGroup ? (
                                    <Users className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                                  ) : (
                                    <User className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                                  )}
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-medium truncate">{conv.name}</h3>
                                  <span className="text-xs text-muted-foreground">
                                    {formatConversationTime(conv.timestamp)}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-end gap-2 mt-1">
                              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                              {conv.unread > 0 && (
                                <span className="rounded-full bg-nexus-purple text-white text-xs px-2 py-0.5 min-w-[1.25rem]">
                                  {conv.unread}
                                </span>
                              )}
                            </div>
                          </button>
                        ))}
                        
                        {filteredConversations.filter(conv => conv.isStarred).length === 0 && (
                          <div className="p-4 text-center text-muted-foreground">
                            Nenhuma conversa favorita
                          </div>
                        )}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Chat area */}
            {activeConversation && currentConversation ? (
              <div className="flex-1 flex flex-col">
                <div className="p-4 border-b dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {currentConversation.avatar ? (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center text-white">
                        {currentConversation.avatar}
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                        {currentConversation.isGroup ? (
                          <Users className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                        ) : (
                          <User className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                        )}
                      </div>
                    )}
                    <div>
                      <h2 className="font-medium">{currentConversation.name}</h2>
                      <p className="text-xs text-muted-foreground">
                        {currentConversation.isGroup ? 'Grupo' : 'Online'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" onClick={() => toast.info("Chamada de vídeo não disponível")}>
                      <Video className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => toast.info("Opções de conversa não disponíveis")}>
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {currentConversation.messages.map((message) => {
                      const isOwnMessage = message.senderId === "user1";
                      
                      return (
                        <div 
                          key={message.id} 
                          className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[70%] rounded-lg p-3 ${
                              isOwnMessage 
                                ? 'bg-nexus-purple text-white' 
                                : 'bg-slate-100 dark:bg-slate-800'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${isOwnMessage ? 'text-white/70' : 'text-muted-foreground'}`}>
                              {formatMessageTime(message.timestamp)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t dark:border-slate-800">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Button type="button" variant="ghost" size="icon">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Textarea 
                      placeholder="Digite sua mensagem..." 
                      className="min-h-[40px] resize-none"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <Button type="submit" size="icon" className="bg-nexus-purple hover:bg-nexus-purple/90">
                      <Send className="h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-xl font-medium mb-2">Nenhuma conversa selecionada</h2>
                  <p className="text-muted-foreground">
                    Selecione uma conversa ou inicie uma nova
                  </p>
                  <Button className="mt-4" onClick={handleNewConversation}>
                    Nova Conversa
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default MessagesPage;
