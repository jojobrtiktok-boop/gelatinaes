import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QuizLayout from "@/components/QuizLayout";

const loadingSteps = [
  "Analisando seu perfil...",
  "Calculando seu metabolismo basal...",
  "Verificando seu IMC e gordura corporal...",
  "Identificando áreas prioritárias...",
  "Montando seu protocolo personalizado...",
  "Finalizando seu plano exclusivo...",
];

const QuizLoading = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepDuration = 5000 / loadingSteps.length;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const timeout = setTimeout(() => {
      navigate("/quiz/21");
    }, 5500);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <QuizLayout progress={100} showLogo={true}>
      <div className="flex flex-col items-center w-full mt-8">
        {/* Spinning loader */}
        <div className="w-16 h-16 rounded-full border-4 border-secondary border-t-primary animate-spin mb-8" />

        {/* Current step text */}
        <p className="text-foreground font-semibold text-base mb-6 text-center min-h-[24px] transition-all">
          {loadingSteps[currentStep]}
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-xs h-2 bg-muted rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-primary rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground">{Math.min(progress, 100)}%</span>

        {/* Previous steps */}
        <div className="mt-8 w-full max-w-xs space-y-2">
          {loadingSteps.slice(0, currentStep).map((step, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-green-500">✓</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </QuizLayout>
  );
};

export default QuizLoading;
