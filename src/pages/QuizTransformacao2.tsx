import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const NEXT_ROUTE = "/quiz/28";
const DURATION_MS = 4500;

const items = [
  "Analizando tus respuestas",
  "Calculando tu déficit calórico",
  "Seleccionando ingredientes ideales",
  "¡Verificación completada!",
];

const QuizTransformacao2 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    const start = Date.now();

    // Progress: 0 → 100 over DURATION_MS
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(progressInterval);
    }, 50);

    // Check items one by one, ~1s apart
    const itemTimers = items.map((_, i) =>
      setTimeout(() => setCheckedCount(i + 1), (i + 1) * 900)
    );

    // Navigate after duration
    const navTimer = setTimeout(() => navigate(NEXT_ROUTE), DURATION_MS);

    return () => {
      clearInterval(progressInterval);
      itemTimers.forEach(clearTimeout);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <QuizLayout progress={100}>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="relative w-32 h-32 mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-secondary" />
            <circle
              cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="8"
              strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
              strokeLinecap="round" className="text-primary transition-all duration-100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">{Math.round(progress)}%</span>
          </div>
        </div>

        <h1 className="text-base font-bold text-foreground mb-6">
          🧪 Verificando tus datos...
        </h1>

        <div className="w-full flex flex-col gap-3">
          {items.map((item, i) => {
            const isChecked = i < checkedCount;
            return (
              <div key={item} className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center shrink-0 transition-all duration-400 ${
                    isChecked ? "bg-green-500" : "bg-gray-200"
                  }`}
                >
                  {isChecked && <span className="text-white text-sm font-bold">✓</span>}
                </div>
                <span className={`text-sm font-medium text-left transition-colors duration-400 ${isChecked ? "text-foreground" : "text-muted-foreground"}`}>
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </QuizLayout>
  );
};

export default QuizTransformacao2;
