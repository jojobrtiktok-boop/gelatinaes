import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QuizLayout from "@/components/QuizLayout";

const options = [
  { label: "No estoy feliz", emoji: "😢" },
  { label: "Podría ser mejor", emoji: "😊" },
  { label: "Estoy trabajando en ello", emoji: "💪" },
];

const QuizHappy = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(label);
    localStorage.setItem("happinessLevel", label);
    setTimeout(() => navigate("/quiz/8"), 400);
  };

  return (
    <QuizLayout progress={70}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center leading-tight">
        ¿Estás feliz con <span className="text-primary">tu apariencia actual</span>?
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        Sé sincera contigo misma
      </p>

      <div className="w-full flex flex-col gap-3">
        {options.map((opt) => (
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
              <span className="font-medium text-foreground">{opt.label}</span>
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

export default QuizHappy;
