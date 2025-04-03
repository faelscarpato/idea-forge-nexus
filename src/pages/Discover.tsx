
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useState } from "react";

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const caseStudies = [
    {
      title: "Pesquisa Médica Colaborativa",
      category: "Saúde",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3",
      description: "Como uma equipe internacional de pesquisadores usou a NexusMind para acelerar descobertas sobre tratamentos inovadores."
    },
    {
      title: "Planejamento Urbano Participativo",
      category: "Governo",
      image: "https://images.unsplash.com/photo-1477959858612-ba67e9aa9d9e?ixlib=rb-4.0.3",
      description: "Uma cidade brasileira implementou um processo de decisão colaborativa para redesenhar um bairro histórico."
    },
    {
      title: "Desenvolvimento de Software Distribuído",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3",
      description: "Como uma empresa de tecnologia usou nossa plataforma para coordenar equipes em cinco países diferentes."
    },
    {
      title: "Educação Adaptativa",
      category: "Educação",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
      description: "Uma universidade criou um currículo personalizado baseado na inteligência coletiva de professores e alunos."
    },
    {
      title: "Gestão de Recursos Naturais",
      category: "Meio Ambiente",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3",
      description: "Comunidades indígenas e cientistas colaboram para preservar uma floresta tropical."
    },
    {
      title: "Inovação em Produto",
      category: "Negócios",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3",
      description: "Uma startup utilizou a sabedoria coletiva de seus usuários para aprimorar seu produto principal."
    }
  ];

  const filteredCaseStudies = searchTerm 
    ? caseStudies.filter(study => 
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        study.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : caseStudies;

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Descubra <span className="gradient-text">Histórias de Sucesso</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Conheça como diferentes comunidades e organizações estão usando a NexusMind para resolver problemas complexos e gerar inovação.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Buscar por categoria, tema ou palavra-chave..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${study.image})` }}
                />
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-nexus-purple/10 text-nexus-purple text-xs font-medium px-2.5 py-0.5 rounded">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-4">
                    {study.description}
                  </p>
                  <Button variant="outline" className="w-full">Ver estudo de caso</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 dark:text-slate-400">Nenhum resultado encontrado para "{searchTerm}"</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Discover;
