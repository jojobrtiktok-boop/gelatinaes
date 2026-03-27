import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QuizLayout from "@/components/QuizLayout";

const weightOptions = [
  { label: "Afecta mi autoestima", desc: "Me siento insegura con mi cuerpo", emoji: "❤️" },
  { label: "Afecta mi salud", desc: "Siento cansancio, dolores y falta de energía", emoji: "📱" },
  { label: "Afecta mis relaciones", desc: "Evito encuentros y situaciones sociales", emoji: "👥" },
  { label: "Afecta mi rutina", desc: "Dificultad para hacer tareas simples", emoji: "📋" },
];

const QuizWeight = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const userName = localStorage.getItem("userName") || "tú";

  const handleSelect = (label: string) => {
    setSelected(label);
    localStorage.setItem("weightImpact", label);
    setTimeout(() => navigate("/quiz/7"), 400);
  };

  return (
    <QuizLayout progress={60}>
      <h1 className="text-lg font-bold text-foreground mb-2 text-center leading-tight">
        <span className="text-primary">{userName}</span>, ¿cómo afecta el peso tu vida?
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        Entender esto nos ayuda a crear tu protocolo ideal
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
