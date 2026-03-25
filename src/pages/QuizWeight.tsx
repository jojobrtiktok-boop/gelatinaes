import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QuizLayout from "@/components/QuizLayout";

const weightOptions = [
  { label: "Afeta minha autoestima", desc: "Me sinto insegura com meu corpo", emoji: "💖" },
  { label: "Afeta minha saúde", desc: "Sinto cansaço, dores e falta de energia", emoji: "🏥" },
  { label: "Afeta meus relacionamentos", desc: "Evito encontros e situações sociais", emoji: "👥" },
  { label: "Afeta minha rotina", desc: "Dificuldade em fazer tarefas simples", emoji: "📅" },
];

const QuizWeight = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(label);
    setTimeout(() => navigate("/quiz/7"), 400);
  };

  return (
    <QuizLayout progress={70}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center">
        Você, como o peso afeta sua vida?
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        Entender isso nos ajuda a criar seu protocolo ideal
      </p>

      <div className="w-full flex flex-col gap-3">
        {weightOptions.map((opt) => (
          <button
            key={opt.label}
            onClick={() => handleSelect(opt.label)}
            className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-all ${
              selected === opt.label
                ? "border-primary bg-secondary"
                : "border-border bg-background hover:border-primary/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{opt.emoji}</span>
              <div className="text-left">
                <span className="font-medium text-foreground block text-sm">{opt.label}</span>
                <span className="text-muted-foreground text-xs">{opt.desc}</span>
              </div>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 transition-all shrink-0 ${
                selected === opt.label ? "border-primary bg-primary" : "border-muted-foreground/30"
              }`}
            />
          </button>
        ))}
      </div>
    </QuizLayout>
  );
};

export default QuizWeight;
