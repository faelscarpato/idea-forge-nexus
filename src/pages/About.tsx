
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Co-fundadora",
      bio: "Especialista em IA e sistemas complexos, com PhD em Ciência da Computação e mais de 15 anos de experiência em projetos de inteligência artificial.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
    },
    {
      name: "Ricardo Mendes",
      role: "CTO & Co-fundador",
      bio: "Engenheiro de software com vasta experiência em arquiteturas distribuídas e sistemas escaláveis. Anteriormente, liderou equipes de desenvolvimento em grandes empresas de tecnologia.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
    },
    {
      name: "Carla Rodrigues",
      role: "Diretora de Produto",
      bio: "Especialista em UX/UI e em design centrado no usuário, com foco na criação de experiências intuitivas mesmo para problemas complexos.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3"
    },
    {
      name: "Paulo Nascimento",
      role: "Cientista de Dados Chefe",
      bio: "Pesquisador com experiência em modelos de machine learning e processamento de linguagem natural, focado em sistemas de recomendação e tomada de decisão.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3"
    }
  ];

  const values = [
    {
      title: "Colaboração Acima de Tudo",
      description: "Acreditamos que inteligências conectadas são mais poderosas que mentes isoladas."
    },
    {
      title: "Tecnologia para o Bem",
      description: "Nossa missão é desenvolver ferramentas que ajudem a resolver os problemas mais importantes da humanidade."
    },
    {
      title: "Inclusão e Diversidade",
      description: "A inteligência coletiva só alcança seu potencial máximo quando integra múltiplas perspectivas e experiências."
    },
    {
      title: "Transparência e Ética",
      description: "Comprometemo-nos com o uso ético da IA e a transparência em nossas operações e algoritmos."
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="gradient-text">Missão</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Na NexusMind, nossa missão é democratizar o acesso à inteligência coletiva e potencializar a capacidade humana de resolver problemas complexos através da combinação de colaboração estruturada e inteligência artificial.
            </p>
          </div>
        </motion.section>

        {/* Story Section */}
        <section className="bg-slate-50 dark:bg-slate-900 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
                <p className="text-muted-foreground mb-4">
                  A NexusMind nasceu da visão de que os maiores desafios da sociedade não podem ser resolvidos por indivíduos ou tecnologias isoladas, mas por comunidades colaborativas potencializadas pelas ferramentas certas.
                </p>
                <p className="text-muted-foreground mb-4">
                  Fundada em 2021 por um grupo de cientistas da computação, designers de interação e especialistas em tomada de decisão coletiva, nossa empresa cresceu rapidamente com o objetivo de criar uma plataforma que permita às comunidades enfrentarem juntas seus maiores desafios.
                </p>
                <p className="text-muted-foreground">
                  Hoje, atendemos organizações em diversos setores, desde pesquisa científica até governança corporativa, ajudando-as a aproveitar todo o potencial da inteligência distribuída em suas equipes.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3"
                    alt="NexusMind Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-nexus-purple/10 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Na NexusMind, estes princípios guiam nossas decisões e o desenvolvimento de nossa plataforma.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-slate-50 dark:bg-slate-900 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Um grupo diversificado de especialistas comprometidos em construir a melhor plataforma de inteligência coletiva.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-nexus-purple font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-16 rounded-2xl relative overflow-hidden text-center max-w-3xl mx-auto"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-nexus-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-nexus-turquoise/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Junte-se à revolução da <span className="gradient-text">inteligência coletiva</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Estamos construindo o futuro da colaboração e resolução de problemas. Venha fazer parte dessa jornada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
                  <Link to="/cadastro">Solicitar acesso</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Fale conosco</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default About;
