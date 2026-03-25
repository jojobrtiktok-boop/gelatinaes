import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={10}>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Gelatina image placeholder */}
        <div className="w-32 h-32 bg-pink-100 rounded-2xl flex items-center justify-center mb-8 flex-shrink-0">
          <span className="text-gray-400 text-sm">Imagem será adicionada</span>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-3 leading-tight">
          Vamos começar sua jornada! 🚀
        </h1>
        <p className="text-muted-foreground mb-10 text-sm">
          Responda algumas perguntas rápidas para personalizar seu plano.
        </p>
        <Button
          size="lg"
          className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
          onClick={() => navigate("/quiz/1")}
        >
          Vamos lá! 💪
        </Button>
      </div>
    </QuizLayout>
  );
};

export default Quiz;
