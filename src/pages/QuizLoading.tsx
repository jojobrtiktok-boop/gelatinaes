import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const steps = [
  { num: 1, title: "Prepare a gelatina", desc: "Receita simples do app", emoji: "🍯" },
  { num: 2, title: "Consuma 2x ao dia", desc: "Manhã e antes de dormir", emoji: "⏰" },
  { num: 3, title: "Siga por 30 dias", desc: "Protocolo completo", emoji: "📋" },
];

const schedule = [
  { label: "Manhã", desc: "Em jejum", emoji: "☀️" },
  { label: "Dia", desc: "Sem fome", emoji: "⚡" },
  { label: "Noite", desc: "Antes de dormir", emoji: "🌙" },
];

const QuizLoading = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={100}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center">
        Como usar a <span className="text-primary">Gelatina Mounjaro</span>
      </h1>
      <p className="text-muted-foreground text-sm mb-8 text-center">Simples, prático e eficaz</p>

      {/* Gelatin → Checklist image */}
      <div className="w-full flex items-center justify-center gap-4 mb-8">
        <div className="w-20 h-20 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-4xl">🍮</span>
        </div>
        <span className="text-2xl">→</span>
        <div className="w-20 h-20 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-3xl">✅</span>
        </div>
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
        ✅ Sim, eu me comprometo!
      </Button>
    </QuizLayout>
  );
};

export default QuizLoading;
