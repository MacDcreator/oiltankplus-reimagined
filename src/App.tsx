import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Installation from "./pages/Installation.tsx";
import Disposal from "./pages/Disposal.tsx";
import Range from "./pages/Range.tsx";
import TankCategory from "./pages/TankCategory.tsx";
import Commercial from "./pages/Commercial.tsx";
import About from "./pages/About.tsx";
import Locations from "./pages/Locations.tsx";
import News from "./pages/News.tsx";
import Contact from "./pages/Contact.tsx";
import Quote from "./pages/Quote.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/oil-tank-installation" element={<Installation />} />
            <Route path="/oil-tank-disposal" element={<Disposal />} />
            <Route path="/oil-tank-range" element={<Range />} />
            <Route path="/oil-tank-range/:slug" element={<TankCategory />} />
            <Route path="/commercial-oil-tanks" element={<Commercial />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
