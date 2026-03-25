import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const rotinas = [
  { label: "Trabalho fora de casa", emoji: "💼" },
  { label: "Trabalho em home office", emoji: "🏠" },
  { label: "Cuido da casa/família", emoji: "👨‍👩‍👧‍👦" },
  { label: "Estudo", emoji: "📚" },
];

const QuizSono = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const handleContinue = () => {
    localStorage.setItem("rotinas", JSON.stringify(selected));
    navigate("/quiz/17");
  };

  return (
    <QuizLayout progress={82}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center leading-tight">
        Como é sua <span className="text-primary">rotina diária</span>?
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        Selecione todas as que se encaixam.
      </p>

      <div className="w-full flex flex-col gap-3 mb-8">
        {rotinas.map((opt) => (
          <button
            key={opt.label}
            onClick={() => toggleSelect(opt.label)}
            className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-all ${
              selected.includes(opt.label)
                ? "border-primary bg-secondary"
                : "border-border bg-background hover:border-primary/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{opt.emoji}</span>
              <span className="font-medium text-foreground">{opt.label}</span>
            </div>
            <div
              className={`w-5 h-5 rounded border-2 transition-all ${
                selected.includes(opt.label)
                  ? "border-primary bg-primary"
                  : "border-muted-foreground/30"
              }`}
            />
          </button>
        ))}
      </div>

      <Button
        size="lg"
        disabled={selected.length === 0}
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity disabled:opacity-50"
        onClick={handleContinue}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizSono;
