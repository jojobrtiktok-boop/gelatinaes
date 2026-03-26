import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const QuizTransformacao2 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const isDevNav = localStorage.getItem("devnav") === "1";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (!isDevNav) setTimeout(() => navigate("/quiz/25"), 1000);
          return 100;
        }
        return Math.min(prev + Math.random() * 12, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, [navigate]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <QuizLayout progress={100}>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="relative w-32 h-32 mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-secondary" />
            <circle
              cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="8"
              strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
              strokeLinecap="round" className="text-primary transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">{Math.round(progress)}%</span>
          </div>
        </div>

        <h1 className="text-lg font-bold text-foreground mb-3 flex items-center justify-center gap-2">
          🧪 Preparando seu plano personalizado...
        </h1>

        <div className="flex gap-2 mb-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-all ${i < Math.ceil((progress / 100) * 5) ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>

        <p className="text-muted-foreground text-sm">Aguarde um momento...</p>
      </div>
    </QuizLayout>
  );
};

export default QuizTransformacao2;
