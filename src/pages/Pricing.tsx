
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Gratuito",
      description: "Para pequenas comunidades começarem",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { included: true, text: "Até 10 usuários" },
        { included: true, text: "Agregação básica de conhecimento" },
        { included: true, text: "Visualização simplificada" },
        { included: false, text: "IA avançada para sugestões" },
        { included: false, text: "Ferramentas de tomada de decisão" },
        { included: false, text: "Acesso a API" }
      ]
    },
    {
      name: "Profissional",
      description: "Para comunidades em crescimento",
      monthlyPrice: 49,
      annualPrice: 39,
      popular: true,
      features: [
        { included: true, text: "Até 50 usuários" },
        { included: true, text: "Agregação avançada de conhecimento" },
        { included: true, text: "Visualização dinâmica completa" },
        { included: true, text: "IA para sugestões e análises" },
        { included: true, text: "Ferramentas básicas de decisão" },
        { included: false, text: "Acesso a API" }
      ]
    },
    {
      name: "Enterprise",
      description: "Para grandes organizações",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        { included: true, text: "Usuários ilimitados" },
        { included: true, text: "Agregação personalizada de conhecimento" },
        { included: true, text: "Visualização avançada personalizada" },
        { included: true, text: "IA avançada com modelo dedicado" },
        { included: true, text: "Ferramentas completas de decisão" },
        { included: true, text: "Acesso a API e integrações" }
      ]
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
            Planos e <span className="gradient-text">Preços</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para potencializar a inteligência coletiva da sua comunidade.
          </p>
          
          <div className="flex justify-center mt-8 space-x-2 bg-slate-100 dark:bg-slate-800 rounded-full p-1 max-w-xs mx-auto">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white dark:bg-slate-700 shadow-sm"
                  : "text-slate-600 dark:text-slate-400"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Mensal
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "annual"
                  ? "bg-white dark:bg-slate-700 shadow-sm"
                  : "text-slate-600 dark:text-slate-400"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              Anual <span className="text-nexus-purple text-xs">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card rounded-xl p-6 ${
                plan.popular
                  ? "border-2 border-nexus-purple relative"
                  : "border border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-nexus-purple to-nexus-turquoise text-white text-xs font-bold py-1 px-3 rounded-full">
                  Mais Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-end justify-center">
                  <span className="text-3xl font-bold">
                    R${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-slate-500 dark:text-slate-400 ml-1">
                      /mês
                    </span>
                  )}
                </div>
                {billingCycle === "annual" && plan.monthlyPrice > 0 && (
                  <p className="text-xs text-nexus-purple mt-1">
                    Economia de R${(plan.monthlyPrice - plan.annualPrice) * 12} por ano
                  </p>
                )}
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {feature.included ? (
                      <CheckCircle className="h-5 w-5 text-nexus-purple mr-2 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-slate-500"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90"
                    : plan.name === "Gratuito"
                    ? "bg-white text-nexus-purple border border-nexus-purple hover:bg-nexus-purple/10"
                    : "bg-slate-800 dark:bg-white dark:text-slate-800 hover:bg-slate-700 dark:hover:bg-slate-100"
                }`}
              >
                <Link to="/cadastro">
                  {plan.name === "Gratuito" ? "Começar agora" : "Solicitar acesso"}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 p-8 glass-card rounded-xl max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-2">Precisa de algo personalizado?</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Entre em contato para discutirmos um plano que atenda às necessidades específicas da sua organização.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Fale conosco</Link>
          </Button>
        </motion.div>
      </main>
    </>
  );
};

export default Pricing;
