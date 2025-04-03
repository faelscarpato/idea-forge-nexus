
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Componente de configuração e integração com Google AI Studio
const AIIntegration = () => {
  const [apiKey, setApiKey] = useState("");
  const [isConfigured, setIsConfigured] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Função para salvar a API Key (em uma implementação real seria armazenada de forma segura no backend)
  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast.error("Por favor, insira uma chave API válida.");
      return;
    }

    // Em uma implementação real, validaríamos a chave antes de armazená-la
    localStorage.setItem("google_ai_api_key", apiKey);
    setIsConfigured(true);
    toast.success("API Key configurada com sucesso!");
  };

  // Função para simular uma consulta à API do Google AI
  const handleSendQuery = async () => {
    if (!query.trim()) {
      toast.error("Por favor, insira uma pergunta.");
      return;
    }

    setIsLoading(true);
    setResponse("");

    try {
      // Em uma implementação real, esta seria uma chamada real para a API do Google AI
      // usando a API Key armazenada
      
      // Simulação de processamento e resposta
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Respostas simuladas baseadas em palavras-chave na pergunta
      if (query.toLowerCase().includes("como")) {
        setResponse("Para utilizar esta funcionalidade, siga os passos descritos no tutorial. Você pode acessar informações detalhadas na seção 'Como Funciona' da plataforma. Nossa IA está aqui para ajudar com sugestões específicas para seu caso de uso.");
      } else if (query.toLowerCase().includes("problema") || query.toLowerCase().includes("desafio")) {
        setResponse("A plataforma NexusMind foi projetada para ajudar a resolver problemas complexos através da inteligência coletiva. Recomendo que você defina claramente o problema, convide colaboradores relevantes e utilize as ferramentas de visualização para mapear todas as dimensões do desafio.");
      } else {
        setResponse("A NexusMind oferece uma plataforma de inteligência coletiva potencializada por IA que ajuda comunidades a resolver problemas complexos, tomar decisões mais inteligentes e gerar inovação. Nossa tecnologia combina o poder do conhecimento humano com análise avançada de dados para criar soluções únicas e eficazes.");
      }
      
      toast.success("Resposta gerada com sucesso!");
    } catch (error) {
      console.error("Erro ao processar consulta:", error);
      toast.error("Ocorreu um erro ao processar sua consulta. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  // Função para redefinir a configuração
  const handleReset = () => {
    localStorage.removeItem("google_ai_api_key");
    setApiKey("");
    setIsConfigured(false);
    setQuery("");
    setResponse("");
    toast.info("Configuração redefinida. Por favor, insira uma nova API Key.");
  };

  // Verificar se já existe uma API Key armazenada
  useState(() => {
    const storedApiKey = localStorage.getItem("google_ai_api_key");
    if (storedApiKey) {
      setApiKey(storedApiKey);
      setIsConfigured(true);
    }
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Integração com IA</CardTitle>
        <CardDescription>
          Configure a integração com o Google AI Studio para potencializar a inteligência coletiva
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isConfigured ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="apiKey" className="block text-sm font-medium mb-1">
                Google AI Studio API Key
              </label>
              <Input
                id="apiKey"
                type="password"
                placeholder="Insira sua API Key aqui"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Obtenha sua API Key no <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-nexus-purple hover:underline">Google AI Studio</a>
              </p>
            </div>
            <Button 
              onClick={handleSaveApiKey}
              className="w-full bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity"
            >
              Salvar Configuração
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="query" className="block text-sm font-medium mb-1">
                Sua pergunta para a IA
              </label>
              <Textarea
                id="query"
                placeholder="Ex: Como posso usar a plataforma para resolver problemas de inovação?"
                rows={3}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            
            <Button 
              onClick={handleSendQuery}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity"
            >
              {isLoading ? "Processando..." : "Enviar Pergunta"}
            </Button>
            
            {response && (
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Resposta:</h3>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-md text-sm">
                  {response}
                </div>
              </div>
            )}
            
            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
              <Button variant="outline" size="sm" onClick={handleReset}>
                Redefinir Configuração
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Seus dados são tratados com segurança e a API Key é armazenada apenas localmente.
      </CardFooter>
    </Card>
  );
};

export default AIIntegration;
