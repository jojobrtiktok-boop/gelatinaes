import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logoMounjaro from "@/assets/logo-mounjaro.png";

const NEXT_ROUTE = "/quiz/29";
const PLAYER_ID = "69c46056f5a026a3bac3dd1f";
const PLAYER_URL = `https://scripts.converteai.net/5f516cb5-1331-4896-8140-9224d21bc287/players/${PLAYER_ID}/v4/embed.html`;
const UNLOCK_DURATION_MS = 30_000; // 30 segundos

const QuizVSL2 = () => {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [progress, setProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const startedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userName = localStorage.getItem("userName") || "tú";

  const startTimer = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / UNLOCK_DURATION_MS) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(intervalRef.current!);
        setIsUnlocked(true);
      }
    }, 300);
  };

  useEffect(() => {
    if (!document.getElementById("vturb-sdk-v4")) {
      const s = document.createElement("script");
      s.id = "vturb-sdk-v4";
      s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      s.async = true;
      document.head.appendChild(s);
    }

    const iframe = iframeRef.current;
    if (iframe) {
      const search = location.search || "?";
      iframe.src = `${PLAYER_URL}${search}&vl=${encodeURIComponent(location.href)}`;
    }

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

      if (
        type.includes("play") ||
        type.includes("timeupdate") ||
        type.includes("start")
      ) {
        const cur = d.currentTime ?? d.time ?? 0;
        if (type.includes("timeupdate") && cur < 0.5) return;
        startTimer();
      }

      if (type.includes("ended")) {
        startTimer();
        setIsUnlocked(true);
        setProgress(100);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-background">
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-muted shrink-0">
        <div
          className="h-full bg-primary rounded-r-full"
          style={{ width: "100%" }}
        />
      </div>

      {/* Logo compact */}
      <div className="flex items-center justify-center pt-2 pb-1">
        <img
          src={logoMounjaro}
          alt="Mounjaro"
          className="w-32"
          loading="eager"
        />
      </div>

      {/* Vturb Portrait Player - takes most space */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-xs font-bold text-foreground mb-1 text-center">
          <span className="text-primary">{userName}</span>, ¡protocolo listo! 🎉
        </h1>
        <div
          id={`ifr_${PLAYER_ID}_wrapper`}
          className="w-full flex-1"
          style={{ maxWidth: "200px", margin: "0 auto" }}
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
      </div>

      {/* Lock bar / CTA at bottom */}
      <div className="w-full px-4 pb-4 shrink-0">
        {!isUnlocked ? (
          <div className="w-full rounded-xl border border-border bg-background px-3 py-2">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <span className="text-base">🔒</span>
                <span className="text-xs font-medium text-foreground">
                  Mira para continuar...
                </span>
              </div>
              <span className="text-xs font-bold text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate(NEXT_ROUTE)}
            className="w-full text-xs font-bold py-3 rounded-xl bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white uppercase tracking-wide shadow-lg animate-pulse"
          >
            Continuar ✅
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizVSL2;
