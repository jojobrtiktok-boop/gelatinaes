import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const NEXT_ROUTE = "/quiz/23";
const DURATION_MS = 4000;

const messages = [
  { emoji: "🧬", text: "Analizando tu genética..." },
  { emoji: "⚖️", text: "Calculando tu IMC..." },
  { emoji: "🔬", text: "Analizando tu metabolismo..." },
  { emoji: "✅", text: "Verificando si el protocolo es para ti..." },
];

const QuizTransformacao = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const start = Date.now();

    // Progress bar: 0 → 100 over DURATION_MS
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(progressInterval);
    }, 50);

    // Cycle messages every ~1s
    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => Math.min(prev + 1, messages.length - 1));
    }, 1000);

    // Navigate after duration
    const navTimer = setTimeout(() => navigate(NEXT_ROUTE), DURATION_MS);

    return () => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const { emoji, text } = messages[msgIndex];

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

        <div className="h-16 flex flex-col items-center justify-center">
          <span className="text-4xl mb-2 transition-all duration-300">{emoji}</span>
          <p className="text-sm font-medium text-foreground transition-all duration-300">{text}</p>
        </div>
      </div>
    </QuizLayout>
  );
};

export default QuizTransformacao;
