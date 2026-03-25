import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const QuizPeso = () => {
  const navigate = useNavigate();
  const [peso, setPeso] = useState(75);

  const adjust = (amount: number) => {
    setPeso((prev) => Math.min(150, Math.max(45, prev + amount)));
  };

  return (
    <QuizLayout progress={95}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center">
        Qual é seu peso atual?
      </h1>
      <p className="text-muted-foreground text-sm mb-10 text-center">
        Seja sincera para um resultado preciso
      </p>

      {/* Weight display */}
      <div className="flex items-baseline justify-center mb-6">
        <span className="text-6xl font-bold text-primary">{peso}</span>
        <span className="text-2xl text-muted-foreground ml-1">kg</span>
      </div>

      {/* Controls */}
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

      {/* Range labels */}
      <div className="flex justify-between w-full text-xs text-muted-foreground mb-10">
        <span>45 kg</span>
        <span>150 kg</span>
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => {
          localStorage.setItem("quiz_peso_atual", String(peso));
          navigate("/quiz/12");
        }}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizPeso;
