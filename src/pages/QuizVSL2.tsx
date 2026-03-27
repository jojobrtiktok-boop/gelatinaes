import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const PLAYER_ID = "69c46056f5a026a3bac3dd1f";

const QuizVSL2 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const startedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userName = localStorage.getItem("userName") || "tú";

  useEffect(() => {
    // Listen for video play events
    const handleMessage = (event: MessageEvent) => {
      const d = event.data;
      if (!d || typeof d !== "object") return;

      const isOurPlayer =
        d.playerid === PLAYER_ID ||
        d.id === PLAYER_ID ||
        d.playerId === PLAYER_ID ||
        d.videoId === PLAYER_ID;

      if (!isOurPlayer) return;

      const type = String(d.type || d.event || "").toLowerCase();

      // Start progress on play
      if (
        type.includes("play") ||
        type.includes("timeupdate") ||
        type.includes("start")
      ) {
        if (startedRef.current) return;
        startedRef.current = true;

        const startTime = Date.now();
        intervalRef.current = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const pct = Math.min((elapsed / 30000) * 100, 100);
          setProgress(pct);

          if (pct >= 100) {
            clearInterval(intervalRef.current!);
            setShowButton(true);
          }
        }, 300);
      }

      // If video ends, show button immediately
      if (type.includes("ended")) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setProgress(100);
        setShowButton(true);
      }
    };

    window.addEventListener("message", handleMessage);

    // Fallback: show button after 30 seconds anyway
    const fallbackTimer = setTimeout(() => {
      setShowButton(true);
      if (intervalRef.current) clearInterval(intervalRef.current);
      setProgress(100);
    }, 30000);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <QuizLayout progress={100}>
      <div className="w-full flex flex-col items-center gap-4">
        <h2 className="text-lg font-bold text-foreground text-center">
          <span className="text-primary">{userName}</span>, ¡tu protocolo está listo! 🎉
        </h2>

        {/* Video Player Iframe */}
        <div className="w-full max-w-xs">
          <div style={{ position: "relative", paddingBottom: "177.59%", height: 0 }}>
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

        {/* Progress bar */}
        {!showButton && (
          <div className="w-full max-w-xs">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">🔒</span>
                <span className="text-xs font-medium text-foreground">
                  Assista para continuar...
                </span>
              </div>
              <span className="text-xs font-bold text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Button appears after 30 seconds */}
        {showButton && (
          <button
            onClick={() => navigate("/quiz/29")}
            className="w-full max-w-xs text-base font-bold py-4 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white uppercase shadow-lg animate-pulse"
          >
            Continuar ✅
          </button>
        )}
      </div>
    </QuizLayout>
  );
};

export default QuizVSL2;
