import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const QuizGestacoes = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "você";
  const pesoAtual = Number(localStorage.getItem("quiz_peso_atual") || "75");
  const pesoDesejado = Number(localStorage.getItem("quiz_peso_desejado") || "65");
  const meta = pesoAtual - pesoDesejado;

  return (
    <QuizLayout progress={100}>
      <div className="text-center mb-8">
        {/* Gelatin → Woman with checkmarks */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-4xl">🍮</span>
          </div>
          <span className="text-2xl">→</span>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">👩</span>
            <div className="text-green-500">
              <span className="block">✅</span>
              <span className="block">✅</span>
              <span className="block">✅</span>
            </div>
          </div>
        </div>
      </div>

      {/* Message card */}
      <div className="w-full rounded-2xl bg-purple-50 border border-purple-200 p-6 mb-8">
        <h1 className="text-lg font-bold text-foreground mb-2 text-center">
          Esse é um ótimo objetivo, <span className="text-primary">{userName}</span>! ❤️
        </h1>
        <p className="text-primary font-semibold text-sm text-center mb-3">
          Meta: {pesoAtual}kg → {pesoDesejado}kg ({meta}kg)
        </p>
        <p className="text-muted-foreground text-sm text-center leading-relaxed">
          Agora vamos ajustar o próximo passo para você começar a perceber diferença <strong>já nos primeiros dias.</strong>
        </p>
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/15")}
      >
        Ok, Vamos lá! 🚀
      </Button>
    </QuizLayout>
  );
};

export default QuizGestacoes;
