import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const QuizPesoDesejado = () => {
  const navigate = useNavigate();
  const pesoAtual = Number(localStorage.getItem("quiz_peso_atual") || "75");
  const [peso, setPeso] = useState(Math.max(40, pesoAtual - 10));

  const maxDesejado = pesoAtual - 1;
  const minDesejado = 40;

  const adjust = (amount: number) => {
    setPeso((prev) => Math.min(maxDesejado, Math.max(minDesejado, prev + amount)));
  };

  const meta = pesoAtual - peso;

  return (
    <QuizLayout progress={98}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center">
        Qual é seu peso desejado?
      </h1>
      <p className="text-muted-foreground text-sm mb-10 text-center">
        Qual o peso que você sonha alcançar?
      </p>

      <div className="flex items-baseline justify-center mb-6">
        <span className="text-6xl font-bold text-primary">{peso}</span>
        <span className="text-2xl text-muted-foreground ml-1">kg</span>
      </div>

      <div className="flex items-center justify-center gap-3 mb-4">
        {[{ label: "-5", val: -5 }, { label: "−", val: -1 }, { label: "+", val: 1 }, { label: "+5", val: 5 }].map((btn) => (
          <button
            key={btn.label}
            onClick={() => adjust(btn.val)}
            className="w-12 h-12 rounded-full border border-border bg-secondary text-foreground font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="flex justify-between w-full text-xs text-muted-foreground mb-6">
        <span>{minDesejado} kg</span>
        <span>{maxDesejado} kg</span>
      </div>

      {/* Meta badge */}
      <div className="bg-green-100 text-green-700 font-semibold text-sm px-6 py-2 rounded-full mb-8">
        Meta: perder {meta} kg 🎯
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/14")}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizPesoDesejado;
