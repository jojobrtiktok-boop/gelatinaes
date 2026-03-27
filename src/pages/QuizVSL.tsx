import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const PLAYER_ID = "69c46061f5a026a3bac3dd4e";

const QuizVSL = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Set timeout to show button after 30 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QuizLayout progress={100}>
      <div className="w-full flex flex-col items-center gap-4">
        <h2 className="text-lg font-bold text-foreground text-center">
          Mira la explicación rápida 👀
        </h2>

        {/* Video Player Iframe */}
        <div className="w-full max-w-xs">
          <div style={{ position: "relative", paddingBottom: "177.64%", height: 0 }}>
            <iframe
              src={`https://scripts.converteai.net/5f516cb5-1331-4896-8140-9224d21bc287/players/${PLAYER_ID}/v4/embed.html`}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px"
              }}
            />
          </div>
        </div>

        {/* Button appears after 30 seconds */}
        {showButton ? (
          <button
            onClick={() => navigate("/quiz/24")}
            className="w-full max-w-xs text-base font-bold py-4 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white uppercase shadow-lg animate-pulse"
          >
            Continuar ✅
          </button>
        ) : (
          <p className="text-sm text-muted-foreground">Cargando...</p>
        )}
      </div>
    </QuizLayout>
  );
};

export default QuizVSL;
