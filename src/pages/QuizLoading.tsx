import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import loadingGelatina from "@/assets/loading-gelatina-plano.png";

const steps = [
  { num: 1, title: "Prepara la gelatina", desc: "Receta simple del app", emoji: "🍯" },
  { num: 2, title: "Consúmela 2x al día", desc: "Mañana y antes de dormir", emoji: "⏰" },
  { num: 3, title: "Síguela por 30 días", desc: "Protocolo completo", emoji: "📋" },
];

const schedule = [
  { label: "Mañana", desc: "En ayunas", emoji: "☀️" },
  { label: "Día", desc: "Sin hambre", emoji: "⚡" },
  { label: "Noche", desc: "Antes de dormir", emoji: "🌙" },
];

const QuizLoading = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={100}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center">
        Cómo usar la <span className="text-primary">Gelatina Mounjaro</span>
      </h1>
      <p className="text-muted-foreground text-sm mb-8 text-center">Simple, práctico y eficaz</p>

      {/* Gelatin → Plan image */}
      <div className="w-full mb-8 rounded-2xl overflow-hidden">
        <img src={loadingGelatina} alt="Gelatina Mounjaro plano" className="w-full object-contain" />
      </div>

      {/* Steps */}
      <div className="w-full flex flex-col gap-3 mb-8">
        {steps.map((s) => (
          <div key={s.num} className="flex items-start gap-4 p-4 rounded-xl border border-border">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
              {s.num}
            </div>
            <div className="flex-1">
              <p className="font-bold text-foreground text-sm">{s.title}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
            <span className="text-xl">{s.emoji}</span>
          </div>
        ))}
      </div>

      {/* Schedule */}
      <div className="w-full rounded-2xl bg-secondary/60 p-4 mb-8 flex justify-around">
        {schedule.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl">{s.emoji}</span>
            <span className="font-semibold text-foreground text-xs">{s.label}</span>
            <span className="text-[10px] text-muted-foreground text-center">{s.desc}</span>
          </div>
        ))}
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/21")}
      >
        ✅ ¡Sí, me comprometo!
      </Button>
    </QuizLayout>
  );
};

export default QuizLoading;
