import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const steps = [
  { step: "Passo 1", title: "Prepare a gelatina", desc: "Siga a receita simples do app", emoji: "⭐" },
  { step: "Passo 2", title: "Consuma 2x ao dia", desc: "Uma de manhã e uma antes de dormir", emoji: "🕐" },
  { step: "Passo 3", title: "Siga por 30 dias", desc: "O protocolo completo para resultados", emoji: "📅" },
];

const schedule = [
  { label: "Manhã", desc: "Em jejum", emoji: "🌅" },
  { label: "Dia", desc: "Sem fome", emoji: "☀️" },
  { label: "Noite", desc: "Antes de dormir", emoji: "🌙" },
];

const QuizComoUsar = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={100}>
      <h1 className="text-xl font-bold text-foreground mb-1 text-center">
        Como usar a <span className="text-primary">Gelatina Mounjaro</span>
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">Simples, prático e eficaz</p>

      <div className="w-full flex flex-col gap-3 mb-6">
        {steps.map((s) => (
          <div key={s.step} className="flex items-start gap-4 p-4 rounded-xl border border-border">
            <span className="text-3xl">{s.emoji}</span>
            <div>
              <span className="text-xs text-primary font-semibold">{s.step}</span>
              <p className="font-bold text-foreground text-sm">{s.title}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Schedule */}
      <div className="w-full rounded-2xl bg-secondary/60 p-4 mb-8 flex justify-around">
        {schedule.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl">{s.emoji}</span>
            <span className="font-semibold text-foreground text-xs">{s.label}</span>
            <span className="text-[10px] text-muted-foreground">{s.desc}</span>
          </div>
        ))}
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/20")}
      >
        ✅ Sim, eu me comprometo!
      </Button>
    </QuizLayout>
  );
};

export default QuizComoUsar;
