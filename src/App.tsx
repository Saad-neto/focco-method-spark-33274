import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Index1 from "./pages/Index1";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import BioOriginal from "./pages/Bio";
import Bio from "./pages/Bio1";
import Bio2 from "./pages/Bio2";
import Bio3 from "./pages/Bio3";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardPosts from "./pages/DashboardPosts";
import DashboardPostForm from "./pages/DashboardPostForm";
import DashboardAuthorProfile from "./pages/DashboardAuthorProfile";
import DebugAnalytics from "./pages/DebugAnalytics";
import NotFound from "./pages/NotFound";

// Landing Pages Google Ads
import AgendamentoA from "./pages/AgendamentoA";
import AgendamentoB from "./pages/AgendamentoB";
import AgendamentoC from "./pages/AgendamentoC";
import AgendamentoD from "./pages/AgendamentoD";
import AgendamentoE from "./pages/AgendamentoE";
import AgendamentoF from "./pages/AgendamentoF";
import AgendamentoG from "./pages/AgendamentoG";
import AgendamentoH from "./pages/AgendamentoH";
import Obrigado from "./pages/Obrigado";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home-1" element={<Index1 />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/bio-1" element={<BioOriginal />} />
          <Route path="/bio-2" element={<Bio2 />} />
          <Route path="/bio-3" element={<Bio3 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Landing Pages Google Ads - Teste A/B */}
          <Route path="/agendamento-a" element={<AgendamentoA />} />
          <Route path="/agendamento-b" element={<AgendamentoB />} />
          <Route path="/agendamento-c" element={<AgendamentoC />} />
          <Route path="/agendamento-d" element={<AgendamentoD />} />
          <Route path="/agendamento-e" element={<AgendamentoE />} />
          <Route path="/agendamento-f" element={<AgendamentoF />} />
          <Route path="/agendamento-g" element={<AgendamentoG />} />
          <Route path="/agendamento-h" element={<AgendamentoH />} />

          {/* Página de Confirmação */}
          <Route path="/obrigado" element={<Obrigado />} />

          {/* Dashboard Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/debug" element={<DebugAnalytics />} />
          <Route path="/dashboard/posts" element={<DashboardPosts />} />
          <Route path="/dashboard/posts/new" element={<DashboardPostForm />} />
          <Route path="/dashboard/posts/:postId/edit" element={<DashboardPostForm />} />
          <Route path="/dashboard/perfil" element={<DashboardAuthorProfile />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
