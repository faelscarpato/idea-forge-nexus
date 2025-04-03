
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  type: "meeting" | "deadline" | "reminder";
}

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample events data
  const events: Event[] = [
    {
      id: "evt1",
      title: "Reunião de Brainstorming",
      date: new Date(2023, 5, 15),
      time: "14:00 - 15:30",
      type: "meeting"
    },
    {
      id: "evt2",
      title: "Prazo final - Entrega de pesquisa",
      date: new Date(2023, 5, 22),
      time: "18:00",
      type: "deadline"
    },
    {
      id: "evt3",
      title: "Workshop de Inovação",
      date: new Date(2023, 5, 10),
      time: "09:00 - 12:00",
      type: "meeting"
    },
    {
      id: "evt4",
      title: "Lembrete: Preparar apresentação",
      date: new Date(2023, 5, 18),
      time: "Todo o dia",
      type: "reminder"
    },
    {
      id: "evt5",
      title: "Revisão de projeto",
      date: new Date(),
      time: "11:00 - 12:00",
      type: "meeting"
    }
  ];

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const getEventForDate = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date));
  };

  const handleAddEvent = () => {
    toast.info("Funcionalidade de adicionar evento em desenvolvimento");
  };

  const getEventTypeClass = (type: string) => {
    switch(type) {
      case "meeting":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "deadline":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "reminder":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300";
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
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Calendário</h1>
              <p className="text-muted-foreground">
                Gerencie seus eventos e reuniões de colaboração
              </p>
            </div>
            <Button onClick={handleAddEvent} className="bg-gradient-to-r from-nexus-purple to-nexus-turquoise hover:opacity-90 transition-opacity">
              <Plus className="mr-2 h-4 w-4" /> Novo Evento
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="p-4 lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">
                  {format(currentMonth, "MMMM yyyy", { locale: ptBR })}
                </h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={prevMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-2 text-center text-sm font-medium">
                <div className="text-muted-foreground">Dom</div>
                <div className="text-muted-foreground">Seg</div>
                <div className="text-muted-foreground">Ter</div>
                <div className="text-muted-foreground">Qua</div>
                <div className="text-muted-foreground">Qui</div>
                <div className="text-muted-foreground">Sex</div>
                <div className="text-muted-foreground">Sáb</div>
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: monthStart.getDay() }).map((_, idx) => (
                  <div key={`empty-start-${idx}`} className="h-24 p-1"></div>
                ))}

                {monthDays.map((day, idx) => {
                  const dayEvents = getEventForDate(day);
                  const isToday = isSameDay(day, new Date());
                  const isSelected = isSameDay(day, selectedDate);
                  
                  return (
                    <Popover key={idx}>
                      <PopoverTrigger asChild>
                        <button
                          onClick={() => setSelectedDate(day)}
                          className={`h-24 border rounded-md p-1 relative hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors ${
                            isToday ? 'border-nexus-purple' : 'border-slate-200 dark:border-slate-800'
                          } ${
                            isSelected ? 'bg-nexus-purple/10' : ''
                          }`}
                        >
                          <div className={`text-right mb-1 ${
                            isToday ? 'text-nexus-purple font-medium' : ''
                          }`}>
                            {format(day, "d")}
                          </div>
                          <div className="overflow-hidden space-y-1">
                            {dayEvents.slice(0, 2).map((event, idx) => (
                              <div 
                                key={idx} 
                                className={`text-xs px-1 py-0.5 rounded truncate ${getEventTypeClass(event.type)}`}
                              >
                                {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-muted-foreground text-center">
                                +{dayEvents.length - 2} mais
                              </div>
                            )}
                          </div>
                        </button>
                      </PopoverTrigger>
                      {dayEvents.length > 0 && (
                        <PopoverContent className="w-80 p-0" align="start">
                          <div className="p-4 border-b">
                            <h3 className="font-medium">
                              {format(day, "EEEE, d 'de' MMMM", { locale: ptBR })}
                            </h3>
                          </div>
                          <div className="p-2 max-h-80 overflow-auto">
                            {dayEvents.map((event, idx) => (
                              <div key={idx} className="p-2 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-md">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="font-medium">{event.title}</h4>
                                  <span className={`text-xs px-2 py-0.5 rounded ${getEventTypeClass(event.type)}`}>
                                    {event.type === "meeting" ? "Reunião" : 
                                      event.type === "deadline" ? "Prazo" : "Lembrete"}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground">{event.time}</p>
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      )}
                    </Popover>
                  );
                })}
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <CalendarIcon className="h-5 w-5 text-nexus-purple" />
                <h2 className="text-lg font-semibold">Próximos Eventos</h2>
              </div>
              
              <div className="space-y-3">
                {events
                  .filter(event => event.date >= new Date())
                  .sort((a, b) => a.date.getTime() - b.date.getTime())
                  .slice(0, 5)
                  .map((event, idx) => (
                    <div key={idx} className="p-3 border rounded-md hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getEventTypeClass(event.type)}`}>
                        {event.type === "meeting" ? "Reunião" : 
                          event.type === "deadline" ? "Prazo" : "Lembrete"}
                      </span>
                      <h3 className="font-medium mt-2">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{format(event.date, "dd/MM/yyyy")} • {event.time}</span>
                      </div>
                    </div>
                  ))}
                
                {events.filter(event => event.date >= new Date()).length === 0 && (
                  <div className="text-center py-6 text-muted-foreground">
                    Nenhum evento próximo
                  </div>
                )}
              </div>
              
              <Button variant="outline" className="w-full mt-4" onClick={handleAddEvent}>
                Ver todos os eventos
              </Button>
            </Card>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default CalendarPage;
