import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const QuizMetaKg = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "você";
  const pesoAtual = Number(localStorage.getItem("quiz_peso_atual") || "75");
  const pesoDesejado = Number(localStorage.getItem("quiz_peso_desejado") || String(pesoAtual - 10));
  const meta = Math.max(3, pesoAtual - pesoDesejado);
  const lower = Math.max(3, Math.round(meta * 0.7));
  const upper = Math.round(meta * 1.1 + 1);

  return (
    <QuizLayout progress={100}>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <span className="text-6xl mb-6">🎯</span>

        <h1 className="text-xl font-bold text-foreground mb-4 leading-tight">
          <span className="text-primary">{userName}</span>, você gostaria de perder entre{" "}
          <span className="text-primary">{lower}</span> e{" "}
          <span className="text-primary">{upper} kilos</span> em poucas semanas?
        </h1>

        <p className="text-muted-foreground text-sm mb-10">
          Baseado no seu perfil, esse resultado é totalmente alcançável com a Gelatina Mounjaro!
        </p>

        <Button
          size="lg"
          className="w-full text-base font-semibold py-6 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
          onClick={() => navigate("/quiz/29")}
        >
          SIM! Quero muito começar! 🔥
        </Button>
      </div>
    </QuizLayout>
  );
};

export default QuizMetaKg;
