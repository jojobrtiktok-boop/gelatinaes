import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

import mulherAreas from "@/assets/mulher-areas.png";

const areaOptions = [
  { label: "Papada", emoji: "😋" },
  { label: "Brazos", emoji: "💪" },
  { label: "Barriga", emoji: "🍩" },
  { label: "Cintura", emoji: "⌛" },
  { label: "Glúteos", emoji: "🍑" },
  { label: "Muslos", emoji: "🦵" },
  { label: "Cuerpo Entero", emoji: "✨" },
];

const QuizAreas = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <QuizLayout progress={35}>
      <h1 className="text-xl font-bold text-foreground mb-1 leading-tight text-center">
        ¿En qué zonas{" "}
        <span className="text-primary">quieres perder más grasa?</span>
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        Toca las zonas deseadas.
      </p>

      <div className="w-full flex gap-3 mb-8">
        {/* Woman body image */}
        <div className="w-28 shrink-0 rounded-xl overflow-hidden bg-secondary/40 flex items-center justify-center self-stretch">
            <img src={mulherAreas} alt="Cuerpo" className="w-full h-full object-cover object-top" />
        </div>

        {/* Options list */}
        <div className="flex-1 flex flex-col gap-2">
          {areaOptions.map((opt) => (
            <button
              key={opt.label}
              onClick={() => toggleSelect(opt.label)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all ${
                selected.includes(opt.label)
                  ? "border-primary bg-secondary"
                  : "border-border bg-background hover:border-primary/40"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{opt.emoji}</span>
                <span className="font-medium text-foreground text-sm">{opt.label}</span>
              </div>
              <div
                className={`w-5 h-5 rounded border-2 transition-all shrink-0 ${
                  selected.includes(opt.label)
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/4")}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizAreas;
