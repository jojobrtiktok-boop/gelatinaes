import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const options = [
  { label: "Ter mais energia", emoji: "⚡" },
  { label: "Usar roupas que amo", emoji: "👗" },
  { label: "Melhorar autoestima", emoji: "💖" },
  { label: "Ter mais saúde", emoji: "💪" },
  { label: "Me sentir mais leve", emoji: "🦋" },
  { label: "Receber elogios", emoji: "🌟" },
];

const QuizGoals = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <QuizLayout progress={90}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center">
        O que você quer conquistar?
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        Selecione seus maiores objetivos
      </p>

      <div className="w-full grid grid-cols-2 gap-3 mb-8">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => toggleSelect(opt.label)}
            className={`flex items-start justify-between p-4 rounded-xl border transition-all ${
              selected.includes(opt.label)
                ? "border-primary bg-secondary"
                : "border-border bg-background hover:border-primary/40"
            }`}
          >
            <div className="flex flex-col items-start gap-2">
              <span className="text-2xl">{opt.emoji}</span>
              <span className="font-medium text-foreground text-sm">{opt.label}</span>
            </div>
            <div
              className={`w-5 h-5 rounded border-2 transition-all shrink-0 ${
                selected.includes(opt.label) ? "border-primary bg-primary" : "border-muted-foreground/30"
              }`}
            />
          </button>
        ))}
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/10")}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizGoals;
