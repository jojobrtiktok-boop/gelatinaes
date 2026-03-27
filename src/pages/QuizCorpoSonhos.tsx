import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";
import antesDepoisIlust from "@/assets/compromisso-antesdepois.png";

const options = [
  { label: "¡Sí me comprometo!", emoji: "🤩" },
  { label: "Quiero empezar hoy", emoji: "😎" },
  { label: "No sé...", emoji: "🤔" },
];

const QuizCorpoSonhos = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={97}>
      {/* Before/After illustration */}
      <div className="w-full flex items-center justify-center gap-3 mb-5">
        <img
          src={antesDepoisIlust}
          alt="Antes y después"
          className="w-full max-w-xs object-contain"
          loading="eager"
        />
      </div>

      {/* Purple lock badge */}
      <div className="w-full flex justify-center mb-4">
        <span className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
          🔓 PARA LIBERAR TU PLAN, NECESITO SABER:
        </span>
      </div>

      {/* Question */}
      <p className="text-primary font-bold text-base text-center leading-snug mb-6">
        ¿Te comprometes a aplicar el protocolo{" "}
        <span className="text-foreground">por al menos 1 semana para poder ver los resultados?</span>
      </p>

      {/* Options */}
      <div className="w-full flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => navigate("/quiz/22")}
            className="w-full flex items-center justify-between gap-3 px-4 py-4 rounded-2xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{opt.emoji}</span>
              <span className="text-sm font-medium text-foreground">{opt.label}</span>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-border shrink-0" />
          </button>
        ))}
      </div>
    </QuizLayout>
  );
};

export default QuizCorpoSonhos;
