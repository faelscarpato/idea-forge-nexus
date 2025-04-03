
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Header from "@/components/Header";
import { toast } from "sonner";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30"
];

const ScheduleDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    message: ""
  });
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !timeSlot) {
      toast.error("Por favor, selecione uma data e horário para a demonstração.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulação de envio do agendamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    toast.success(`Demonstração agendada com sucesso para ${formattedDate} às ${timeSlot}! Enviamos um email de confirmação.`);
    
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      teamSize: "",
      message: ""
    });
    setDate(undefined);
    setTimeSlot("");
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
            Agende uma <span className="gradient-text">Demonstração</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça como a NexusMind pode potencializar a inteligência coletiva da sua organização. Nossos especialistas farão uma apresentação personalizada para suas necessidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Preencha seus dados</h2>
              
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
                  <Label htmlFor="email">Email profissional</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu.email@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Empresa / Organização</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Nome da sua empresa ou organização"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="role">Cargo</Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="Seu cargo"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="teamSize">Tamanho da equipe</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, teamSize: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10</SelectItem>
                        <SelectItem value="11-50">11-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="201-500">201-500</SelectItem>
                        <SelectItem value="501+">501+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">O que você gostaria de descobrir?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos um pouco sobre os desafios que sua organização enfrenta"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Agendando..." : "Agendar demonstração"}
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
                <h2 className="text-2xl font-bold mb-6">Selecione data e horário</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label>Data</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ptBR}
                          initialFocus
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            
                            // Desabilita datas passadas e finais de semana
                            return (
                              date < today ||
                              date.getDay() === 0 ||
                              date.getDay() === 6
                            );
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label>Horário</Label>
                    <Select disabled={!date} onValueChange={setTimeSlot}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione um horário" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4" />
                              {slot} (Brasília)
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">O que esperar</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-nexus-purple/10 text-nexus-purple mr-3 text-sm font-bold">1</span>
                    <span>Uma introdução à plataforma NexusMind adaptada às suas necessidades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-nexus-purple/10 text-nexus-purple mr-3 text-sm font-bold">2</span>
                    <span>Demonstração das principais funcionalidades e casos de uso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-nexus-purple/10 text-nexus-purple mr-3 text-sm font-bold">3</span>
                    <span>Tempo para perguntas e discussão de como adaptar a solução para você</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-nexus-purple/10 text-nexus-purple mr-3 text-sm font-bold">4</span>
                    <span>Próximos passos e opções de implementação</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  A demonstração tem duração de aproximadamente 30 minutos e é conduzida por especialistas da NexusMind.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ScheduleDemo;
