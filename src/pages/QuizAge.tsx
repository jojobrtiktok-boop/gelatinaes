import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QuizLayout from "@/components/QuizLayout";

const ageOptions = [
  { label: "18 - 27 años", emoji: "🌸" },
  { label: "28 - 39 años", emoji: "🌼" },
  { label: "40 - 54 años", emoji: "🌺" },
  { label: "54+ años", emoji: "🌷" },
];

const QuizAge = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(label);
    setTimeout(() => navigate("/quiz/2"), 400);
  };

  return (
    <QuizLayout progress={15}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center">¿Cuál es tu edad?</h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">Selecciona tu rango de edad.</p>

      <div className="w-full flex flex-col gap-3">
        {ageOptions.map((opt) => (
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
              className={`w-5 h-5 rounded-full border-2 transition-all ${
                selected === opt.label ? "border-primary bg-primary" : "border-muted-foreground/30"
              }`}
            />
          </button>
        ))}
      </div>
    </QuizLayout>
  );
};

export default QuizAge;
