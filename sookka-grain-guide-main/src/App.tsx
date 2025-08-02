
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuinoaPage from "./pages/QuinoaPage";
import NotFound from "./pages/NotFound";
import Home from './pages/Home'
import FoodList from './pages/FoodList'
import Homepage from './components/Homepage'
import LoginPage from './components/LoginPage';
import Register from './components/ RegisterForm'
import Additem from './components/additem'
import Logout from "./pages/Logout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quinoa" element={<QuinoaPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/food-list" element={<FoodList />} />
          <Route path="/RegisterForm" element={<Register />} />
          <Route path="/additem" element={<Additem />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
