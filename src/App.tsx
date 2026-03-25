import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import QuizAge from "./pages/QuizAge";
import QuizBody from "./pages/QuizBody";
import QuizAreas from "./pages/QuizAreas";
import QuizFamosas from "./pages/QuizFamosas";
import QuizName from "./pages/QuizName";
import QuizWeight from "./pages/QuizWeight";
import QuizHappy from "./pages/QuizHappy";
import QuizBarriers from "./pages/QuizBarriers";
import QuizGoals from "./pages/QuizGoals";
import QuizOtimo from "./pages/QuizOtimo";
import QuizPeso from "./pages/QuizPeso";
import QuizAltura from "./pages/QuizAltura";
import QuizPesoDesejado from "./pages/QuizPesoDesejado";
import QuizGestacoes from "./pages/QuizGestacoes";
import QuizRotina from "./pages/QuizRotina";
import QuizSono from "./pages/QuizSono";
import QuizAgua from "./pages/QuizAgua";
import QuizResultado from "./pages/QuizResultado";
import QuizComoUsar from "./pages/QuizComoUsar";
import QuizLoading from "./pages/QuizLoading";
import QuizCorpoSonhos from "./pages/QuizCorpoSonhos";
import QuizTransformacao from "./pages/QuizTransformacao";
import QuizHistorias from "./pages/QuizHistorias";
import QuizLoadingFinal from "./pages/QuizLoadingFinal";
import QuizVSL from "./pages/QuizVSL";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/1" element={<QuizAge />} />
          <Route path="/quiz/2" element={<QuizBody />} />
          <Route path="/quiz/3" element={<QuizAreas />} />
          <Route path="/quiz/4" element={<QuizFamosas />} />
          <Route path="/quiz/5" element={<QuizName />} />
          <Route path="/quiz/6" element={<QuizWeight />} />
          <Route path="/quiz/7" element={<QuizHappy />} />
          <Route path="/quiz/8" element={<QuizBarriers />} />
          <Route path="/quiz/9" element={<QuizGoals />} />
          <Route path="/quiz/10" element={<QuizOtimo />} />
          <Route path="/quiz/11" element={<QuizPeso />} />
          <Route path="/quiz/12" element={<QuizAltura />} />
          <Route path="/quiz/13" element={<QuizPesoDesejado />} />
          <Route path="/quiz/14" element={<QuizGestacoes />} />
          <Route path="/quiz/15" element={<QuizRotina />} />
          <Route path="/quiz/16" element={<QuizSono />} />
          <Route path="/quiz/17" element={<QuizAgua />} />
          <Route path="/quiz/18" element={<QuizResultado />} />
          <Route path="/quiz/19" element={<QuizComoUsar />} />
          <Route path="/quiz/20" element={<QuizLoading />} />
          <Route path="/quiz/21" element={<QuizCorpoSonhos />} />
          <Route path="/quiz/22" element={<QuizTransformacao />} />
          <Route path="/quiz/23" element={<QuizHistorias />} />
          <Route path="/quiz/24" element={<QuizLoadingFinal />} />
          <Route path="/quiz/25" element={<QuizVSL />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
