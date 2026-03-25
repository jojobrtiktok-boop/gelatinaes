import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const items = [
  "Perfil metabólico analisado",
  "Meta de peso calculada",
  "Compatibilidade verificada",
  "Protocolo de 30 dias montado",
  "Bônus exclusivos selecionados",
  "Oferta especial preparada",
];

// First 2 start checked; items 3-6 check off every ~2s
const ITEM_DELAYS_MS = [0, 0, 2000, 4000, 6000, 8000];
const NAVIGATE_DELAY_MS = 10500;

const QuizLoadingFinal = () => {
  const navigate = useNavigate();
  const [checkedCount, setCheckedCount] = useState(2);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Unlock items 3-6 one by one
    for (let i = 2; i < items.length; i++) {
      timers.push(
        setTimeout(() => setCheckedCount(i + 1), ITEM_DELAYS_MS[i])
      );
    }

    // Progress bar: 0 → 100 over ~10s
    const start = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / (NAVIGATE_DELAY_MS - 500)) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(progressInterval);
    }, 80);

    // Navigate when done (skip if using DevNav)
    if (localStorage.getItem("devnav") !== "1") {
      timers.push(setTimeout(() => navigate("/quiz/25"), NAVIGATE_DELAY_MS));
    }

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Full-width purple banner */}
      <div className="w-full bg-gradient-to-br from-[hsl(270,70%,35%)] to-[hsl(290,70%,25%)] px-6 py-8 flex flex-col items-center relative overflow-hidden">
        {/* Sparkle dots background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <h1 className="text-white text-xl font-extrabold text-center leading-tight relative z-10">
          Seu protocolo da
          <br />
          <span className="text-[hsl(160,80%,60%)]">Gelatina Mounjaro</span>
          <br />
          <span className="bg-[hsl(340,90%,50%)] text-white px-3 py-1 rounded-lg inline-block mt-1">
            de 30 dias está pronto!
          </span>
        </h1>

        {/* Green download arrow */}
        <div className="mt-4 w-12 h-12 rounded-full bg-green-400 flex items-center justify-center shadow-lg relative z-10">
          <span className="text-white text-2xl font-bold">↓</span>
        </div>
      </div>

      {/* Checklist */}
      <div className="flex-1 flex flex-col px-6 py-6">
        <div className="flex flex-col gap-3 mb-8">
          {items.map((item, i) => {
            const isChecked = i < checkedCount;
            return (
              <div key={item} className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                    isChecked
                      ? "bg-green-500 shadow-md"
                      : "bg-gray-200"
                  }`}
                >
                  {isChecked && (
                    <span className="text-white text-sm font-bold">✓</span>
                  )}
                </div>
                <span
                  className={`text-sm font-medium transition-colors duration-500 ${
                    isChecked ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <p className="text-sm text-center">
          🎉 <span className="text-foreground font-medium">Tudo pronto! </span>
          <span className="text-primary font-semibold">Carregando sua oferta...</span>
        </p>
      </div>
    </div>
  );
};

export default QuizLoadingFinal;
