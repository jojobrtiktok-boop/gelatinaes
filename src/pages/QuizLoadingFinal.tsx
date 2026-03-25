import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QuizLayout from "@/components/QuizLayout";

const loadingMessages = [
  "Analisando suas respostas...",
  "Preparando seu protocolo...",
  "Calculando sua fórmula ideal...",
  "Preparando oferta exclusiva...",
  "Quase pronto...",
];

const QuizLoadingFinal = () => {
  const navigate = useNavigate();
  const [currentMsg, setCurrentMsg] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setCurrentMsg((prev) => {
        if (prev >= loadingMessages.length - 1) {
          clearInterval(msgInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 100);

    const timeout = setTimeout(() => {
      navigate("/quiz/25");
    }, 7500);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  const displayProgress = Math.min(Math.round(progress), 100);

  return (
    <QuizLayout progress={100}>
      <div className="flex flex-col items-center w-full mt-8">

        {/* Spinning circle with icon */}
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-secondary border-t-primary animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl">📋</span>
          </div>
        </div>

        {/* Current message */}
        <p className="text-foreground font-medium text-base mb-8 text-center min-h-[24px]">
          {loadingMessages[currentMsg]}
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-xs h-3 bg-muted rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] rounded-full transition-all duration-200"
            style={{ width: `${displayProgress}%` }}
          />
        </div>
        <span className="text-sm text-primary font-medium mb-6">{displayProgress}% concluído</span>

        <p className="text-muted-foreground text-sm text-center">
          Aguarde enquanto preparamos tudo para você...
        </p>
      </div>
    </QuizLayout>
  );
};

export default QuizLoadingFinal;
