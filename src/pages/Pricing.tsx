
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Startup",
      price: billing === "monthly" ? "R$ 499" : "R$ 399",
      period: "/mês",
      description: "Para pequenas equipes começando a colaborar com IA",
      features: [
        "Até 10 usuários",
        "3 projetos ativos",
        "Agregação de conhecimento básica",
        "Visualização de dados simples",
        "Assistente de IA limitado",
        "Suporte por email"
      ],
      popular: false,
      buttonText: "Começar agora",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      price: billing === "monthly" ? "R$ 999" : "R$ 799",
      period: "/mês",
      description: "Para equipes buscando ampliar seu potencial colaborativo",
      features: [
        "Até 25 usuários",
        "10 projetos ativos",
        "Agregação avançada de conhecimento",
        "Grafos de conhecimento personalizáveis",
        "Assistente de IA avançado",
        "Análise de decisão colaborativa",
        "Integrações com ferramentas comuns",
        "Suporte prioritário"
      ],
      popular: true,
      buttonText: "Escolher plano Pro",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Para organizações com necessidades complexas de colaboração",
      features: [
        "Usuários ilimitados",
        "Projetos ilimitados",
        "Agregação de conhecimento personalizada",
        "Visualizações customizadas",
        "IA treinada para seu domínio",
        "Integrações personalizadas",
        "Controles de acesso avançados",
        "Gerente de sucesso dedicado",
        "Suporte 24/7"
      ],
      popular: false,
      buttonText: "Contatar vendas",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <>
      <Header />
      <div className="pt-24 pb-16">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Planos <span className="gradient-text">simples</span>, resultados <span className="gradient-text">extraordinários</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Escolha o plano ideal para ampliar o potencial da sua equipe com nossa plataforma de inteligência coletiva.
            </p>

            <div className="flex justify-center mb-16">
              <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full inline-flex">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-4 py-2 rounded-full text-sm ${
                    billing === "monthly"
                      ? "bg-white dark:bg-slate-700 shadow"
                      : "text-muted-foreground"
                  }`}
                >
                  Mensal
                </button>
                <button
                  onClick={() => setBilling("annual")}
                  className={`px-4 py-2 rounded-full text-sm ${
                    billing === "annual"
                      ? "bg-white dark:bg-slate-700 shadow"
                      : "text-muted-foreground"
                  }`}
                >
                  Anual <span className="text-nexus-purple text-xs font-bold">-20%</span>
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`glass-card p-8 rounded-2xl relative ${plan.popular ? "border-2 border-nexus-purple" : "border border-slate-200 dark:border-slate-700"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 inset-x-0 mx-auto w-fit px-4 py-1 bg-gradient-to-r from-nexus-purple to-nexus-turquoise text-white text-xs font-bold rounded-full">
                    Mais popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <Check className="h-5 w-5 text-nexus-purple mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90"
                      : ""
                  }`}
                >
                  <Link to={plan.name === "Enterprise" ? "/contato" : "/cadastro"}>
                    {plan.buttonText}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="font-bold mb-2">Posso mudar de plano depois?</h3>
                  <p className="text-muted-foreground">Sim, você pode atualizar ou fazer downgrade do seu plano a qualquer momento, com os ajustes de preço calculados pro rata.</p>
                </div>
                <div className="text-left">
                  <h3 className="font-bold mb-2">Há um período de teste?</h3>
                  <p className="text-muted-foreground">Oferecemos uma demonstração guiada para todos os planos, e os planos Startup e Pro incluem um período de teste de 14 dias.</p>
                </div>
                <div className="text-left">
                  <h3 className="font-bold mb-2">Como funciona o suporte?</h3>
                  <p className="text-muted-foreground">Todos os planos incluem suporte por email. Os planos Pro e Enterprise contam com suporte prioritário e o Enterprise inclui suporte 24/7.</p>
                </div>
                <div className="text-left">
                  <h3 className="font-bold mb-2">O que acontece com meus dados?</h3>
                  <p className="text-muted-foreground">Seus dados são criptografados e armazenados com segurança. Nunca compartilhamos seus dados com terceiros sem seu consentimento explícito.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
