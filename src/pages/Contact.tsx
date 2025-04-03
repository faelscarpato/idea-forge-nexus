
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Informações gerais",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      subject: "Informações gerais",
      message: ""
    });
    setIsSubmitting(false);
  };

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
            Entre em <span className="gradient-text">Contato</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem uma dúvida, sugestão ou quer saber mais sobre nossa plataforma? Nossa equipe está pronta para ajudar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-xl h-full">
              <h2 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Seu nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label>Assunto</Label>
                  <RadioGroup 
                    value={formData.subject}
                    onValueChange={handleSubjectChange}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Informações gerais" id="info" />
                      <Label htmlFor="info" className="cursor-pointer">Informações gerais</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Suporte técnico" id="support" />
                      <Label htmlFor="support" className="cursor-pointer">Suporte técnico</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Vendas e preços" id="sales" />
                      <Label htmlFor="sales" className="cursor-pointer">Vendas e preços</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Parcerias" id="partnership" />
                      <Label htmlFor="partnership" className="cursor-pointer">Parcerias</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-nexus-purple/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-nexus-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-slate-500 dark:text-slate-400">contato@nexusmind.com.br</p>
                      <p className="text-slate-500 dark:text-slate-400">suporte@nexusmind.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-nexus-purple/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-nexus-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <p className="text-slate-500 dark:text-slate-400">+55 (11) 3456-7890</p>
                      <p className="text-slate-500 dark:text-slate-400">Seg - Sex, 9:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-nexus-purple/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-nexus-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Endereço</h3>
                      <p className="text-slate-500 dark:text-slate-400">
                        Av. Paulista, 1000, 10º andar<br />
                        Bela Vista, São Paulo - SP<br />
                        01310-100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Como funciona a demonstração?</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                      Nossa demonstração é uma sessão online de 30 minutos onde apresentamos a plataforma e respondemos suas dúvidas.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Quanto tempo leva para implementar?</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                      O tempo de implementação varia de acordo com as necessidades específicas, mas geralmente leva de 1 a 3 semanas.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Oferecem treinamento?</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                      Sim, oferecemos treinamento completo para administradores e usuários, incluído em todos os planos pagos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Contact;
