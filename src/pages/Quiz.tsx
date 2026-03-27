import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";
import gelatinaCubos from "@/assets/gelatina-cubos.png";

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={10}>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <img
          src={gelatinaCubos}
          alt="Gelatina Mounjaro"
          className="w-40 h-40 object-contain mb-8"
          loading="eager"
        />

        <h1 className="text-2xl font-bold text-foreground mb-3 leading-tight">
          ¡Comencemos tu viaje! 🚀
        </h1>
        <p className="text-muted-foreground mb-10 text-sm">
          Responde algunas preguntas rápidas para personalizar tu plan.
        </p>
        <Button
          size="lg"
          className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
          onClick={() => navigate("/quiz/1")}
        >
          ¡Vamos! 💪
        </Button>
      </div>
    </QuizLayout>
  );
};

export default Quiz;
