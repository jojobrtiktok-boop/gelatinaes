import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const QuizTransformacao = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 80) {
          clearInterval(interval);
          setTimeout(() => navigate("/quiz/26"), 2000);
          return 80;
        }
        return prev + Math.random() * 15;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [navigate]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (Math.min(progress, 80) / 100) * circumference;

  return (
    <QuizLayout progress={100}>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Circular Progress */}
        <div className="relative w-32 h-32 mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-secondary"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="text-primary transition-all duration-300"
            />
          </svg>
          {/* Progress text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">{Math.round(Math.min(progress, 80))}%</span>
          </div>
        </div>

        <h1 className="text-lg font-bold text-foreground mb-3 flex items-center justify-center gap-2">
          🧪 Preparando seu plano personalizado...
        </h1>

        {/* Loading dots */}
        <div className="flex gap-2 mb-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i < Math.ceil((progress / 80) * 5) ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <p className="text-muted-foreground text-sm">Aguarde um momento...</p>
      </div>
    </QuizLayout>
  );
};

export default QuizTransformacao;
