
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const AIAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockSuggestions = [
        "Considere como o blockchain pode ser implementado para verificação de contribuições.",
        "Integre análise de sentimento para avaliar reações emocionais às ideias.",
        "Explore modelos de machine learning para prever impacto de decisões.",
        "Adicione ferramentas de visualização 3D para representação espacial de dados."
      ];
      setSuggestions(mockSuggestions);
      setIsProcessing(false);
      setPrompt("");
    }, 2000);
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-nexus-purple to-nexus-turquoise flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div>
            <CardTitle className="text-lg">IA Assistente</CardTitle>
            <CardDescription>Peça sugestões ou ajuda na resolução de problemas</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="Ex: Como podemos melhorar nossa tomada de decisão?"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={isProcessing || !prompt.trim()}
            className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity"
          >
            {isProcessing ? "Processando..." : "Perguntar"}
          </Button>
        </form>

        {isProcessing && (
          <div className="flex justify-center my-6">
            <div className="w-8 h-8 rounded-full border-2 border-nexus-purple border-t-transparent animate-spin"></div>
          </div>
        )}

        {suggestions.length > 0 && (
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-medium text-nexus-purple">Sugestões do Assistente:</h4>
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <motion.li
                  key={index}
                  className="p-3 bg-slate-50 dark:bg-slate-800 rounded-md text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {suggestion}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Este assistente está usando IA generativa para criar sugestões
      </CardFooter>
    </Card>
  );
};

export default AIAssistant;
