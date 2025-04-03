
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Como a Inteligência Coletiva está mudando a forma de resolver problemas",
      date: "14 de maio de 2023",
      category: "Tendências",
      excerpt: "A convergência entre inteligência humana e artificial está criando novas possibilidades para enfrentar desafios complexos que antes pareciam impossíveis.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3",
      slug: "inteligencia-coletiva-mudando-resolucao-problemas"
    },
    {
      title: "5 técnicas para facilitar a tomada de decisão em grupos",
      date: "22 de abril de 2023",
      category: "Guia Prático",
      excerpt: "Descubra métodos comprovados para superar vieses cognitivos e alcançar consenso mesmo em grupos diversificados com diferentes perspectivas.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3",
      slug: "tecnicas-facilitar-tomada-decisao-grupos"
    },
    {
      title: "O impacto da IA na democracia participativa",
      date: "9 de março de 2023",
      category: "Opinião",
      excerpt: "Como as ferramentas de inteligência artificial podem fortalecer processos democráticos ao permitir maior participação cidadã em decisões importantes.",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3",
      slug: "impacto-ia-democracia-participativa"
    },
    {
      title: "Case study: Como uma ONG global coordenou ajuda humanitária usando NexusMind",
      date: "28 de fevereiro de 2023",
      category: "Cases",
      excerpt: "A história de como equipes em 12 países conectaram-se para otimizar a distribuição de recursos durante uma crise humanitária complexa.",
      image: "https://images.unsplash.com/photo-1469571486292-b53376e58b09?ixlib=rb-4.0.3",
      slug: "case-study-ong-global-ajuda-humanitaria-nexusmind"
    },
    {
      title: "Combinando conhecimento tradicional e tecnologia avançada",
      date: "15 de janeiro de 2023",
      category: "Inovação",
      excerpt: "Como comunidades tradicionais estão usando plataformas de inteligência coletiva para preservar conhecimentos ancestrais e resolver problemas contemporâneos.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3",
      slug: "combinando-conhecimento-tradicional-tecnologia-avancada"
    },
    {
      title: "O futuro do trabalho: colaboração além das barreiras geográficas",
      date: "5 de janeiro de 2023",
      category: "Futuro",
      excerpt: "As novas dinâmicas de trabalho que estão emergindo com o uso de plataformas de inteligência coletiva em organizações distribuídas globalmente.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
      slug: "futuro-trabalho-colaboracao-alem-barreiras-geograficas"
    }
  ];

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
            Nosso <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, pesquisas e histórias sobre inteligência coletiva, IA colaborativa e o futuro da resolução de problemas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardContent className="p-6">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="inline-block bg-nexus-purple/10 text-nexus-purple text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="ghost" className="p-0 h-auto hover:bg-transparent hover:underline">
                    <Link to={`/blog/${post.slug}`}>
                      Continuar lendo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
