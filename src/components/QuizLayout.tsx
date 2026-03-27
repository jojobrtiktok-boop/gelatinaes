import { useLocation } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import logoMounjaro from "@/assets/logo-mounjaro.png";

interface QuizLayoutProps {
  progress: number;
  children: React.ReactNode;
  showLogo?: boolean;
}

const QuizLayout = ({ progress, children, showLogo = true }: QuizLayoutProps) => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (location.pathname.startsWith("/quiz") && location.pathname !== "/quiz") {
      window.history.replaceState(window.history.state, "", "/quiz");
    }

    setVisible(false);
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-muted shrink-0">
        <div
          className="h-full bg-primary rounded-r-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={`flex-1 flex flex-col items-center w-full max-w-md mx-auto px-6 py-8 transition-all duration-300 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[60px]"
        }`}
      >
        {showLogo && (
          <img
            src={logoMounjaro}
            alt="Mounjaro Gelatina"
            className="w-40 mb-6 shrink-0"
            loading="eager"
            decoding="async"
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default QuizLayout;
