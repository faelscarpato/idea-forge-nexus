
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // Changed from BrowserRouter to HashRouter

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Discover from "./pages/Discover";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tutorial from "./pages/Tutorial";
import ScheduleDemo from "./pages/ScheduleDemo";
import NotFound from "./pages/NotFound";

// Dashboard Navigation Pages
import Projects from "./pages/Projects";
import CalendarPage from "./pages/Calendar";
import Messages from "./pages/Messages";
import Statistics from "./pages/Statistics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter> {/* Changed from BrowserRouter to HashRouter */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} />
          
          {/* Dashboard Navigation Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/team" element={<Team />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
