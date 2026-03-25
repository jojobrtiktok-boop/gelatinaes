import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const QuizTransformacao = () => {
  const navigate = useNavigate();
  const pesoAtual = Number(localStorage.getItem("quiz_peso_atual") || "75");
  const metaMin = Math.max(3, Math.round(pesoAtual * 0.1));
  const metaMax = metaMin + 3;

  return (
    <QuizLayout progress={100}>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <span className="text-5xl mb-6">🎯</span>

        <h1 className="text-xl font-bold text-foreground mb-3 leading-tight">
          você, você gostaria de perder entre{" "}
          <span className="text-green-500">{metaMin}</span> e{" "}
          <span className="text-green-500">{metaMax} kilos</span> em poucas semanas?
        </h1>

        <p className="text-muted-foreground text-sm mb-8">
          Baseado no seu perfil, esse resultado é totalmente alcançável com a Gelatina Mounjaro!
        </p>

        <Button
          size="lg"
          className="w-full text-base font-semibold py-6 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
          onClick={() => navigate("/quiz/23")}
        >
          SIM! Quero essa transformação! 🔥
        </Button>
      </div>
    </QuizLayout>
  );
};

export default QuizTransformacao;
