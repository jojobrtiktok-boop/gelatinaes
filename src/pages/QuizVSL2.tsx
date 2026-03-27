import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logoMounjaro from "@/assets/logo-mounjaro.png";
import QuizLayout from "@/components/QuizLayout";

const NEXT_ROUTE = "/quiz/29";
const PLAYER_ID = "69c46056f5a026a3bac3dd1f";
const PLAYER_URL = `https://scripts.converteai.net/5f516cb5-1331-4896-8140-9224d21bc287/players/${PLAYER_ID}/v4/embed.html`;
const UNLOCK_DELAY_MS = 30_000; // 30 segundos

const QuizVSL2 = () => {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showButton, setShowButton] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userName = localStorage.getItem("userName") || "tú";

  useEffect(() => {
    // Inject Vturb SDK
    if (!document.getElementById("vturb-sdk-v4")) {
      const s = document.createElement("script");
      s.id = "vturb-sdk-v4";
      s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      s.async = true;
      document.head.appendChild(s);
    }

    // Setup iframe
    const iframe = iframeRef.current;
    if (iframe) {
      const search = location.search || "?";
      iframe.src = `${PLAYER_URL}${search}&vl=${encodeURIComponent(location.href)}`;
    }

    // Simple timer - show button after 30 seconds
    timerRef.current = setTimeout(() => {
      setShowButton(true);
    }, UNLOCK_DELAY_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <QuizLayout progress={100} compact showLogo={false}>
      <div className="w-full flex flex-col items-center gap-3">
        {/* Logo */}
        <img
          src={logoMounjaro}
          alt="Mounjaro"
          className="w-32 mb-2"
          loading="eager"
        />

        {/* Title */}
        <h1 className="text-sm font-bold text-center mb-2">
          <span className="text-primary">{userName}</span>, ¡protocolo listo! 🎉
        </h1>

        {/* Video Player */}
        <div
          id={`ifr_${PLAYER_ID}_wrapper`}
          className="w-full"
          style={{ maxWidth: "220px", margin: "0 auto" }}
        >
          <div
            id={`ifr_${PLAYER_ID}_aspect`}
            style={{ position: "relative", paddingBottom: "177.59%", paddingTop: 0 }}
          >
            <iframe
              ref={iframeRef}
              id={`ifr_${PLAYER_ID}`}
              frameBorder={0}
              allowFullScreen
              allow="autoplay; fullscreen"
              referrerPolicy="origin"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* Button - appears after 30 seconds */}
        {showButton && (
          <button
            onClick={() => navigate(NEXT_ROUTE)}
            className="w-full max-w-xs mt-4 text-sm font-bold py-3 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white uppercase shadow-lg animate-pulse"
          >
            Continuar ✅
          </button>
        )}

        {!showButton && (
          <p className="text-xs text-muted-foreground mt-4">
            Aguardando...
          </p>
        )}
      </div>
    </QuizLayout>
  );
};

export default QuizVSL2;
