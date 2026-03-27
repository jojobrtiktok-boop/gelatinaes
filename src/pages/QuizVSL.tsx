import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const NEXT_ROUTE = "/quiz/24";
const PLAYER_ID = "69c46061f5a026a3bac3dd4e";
const PLAYER_URL = `https://scripts.converteai.net/5f516cb5-1331-4896-8140-9224d21bc287/players/${PLAYER_ID}/v4/embed.html`;
const UNLOCK_DURATION_MS = 30_000; // 30 segundos

const QuizVSL = () => {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [progress, setProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const startedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    // Inject Vturb SDK once
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

      // Start on any play or timeupdate event (first non-zero currentTime)
      if (
        type.includes("play") ||
        type.includes("timeupdate") ||
        type.includes("start")
      ) {
        const cur = d.currentTime ?? d.time ?? 0;
        if (type.includes("timeupdate") && cur < 0.5) return; // ignore very start
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
    <QuizLayout progress={100}>
      <h1 className="text-sm font-bold text-foreground mb-2 text-center leading-tight">
        Mira la explicación rápida de{" "}
        <span className="text-primary">1 Minuto</span> 👀
      </h1>

      {/* Vturb Portrait Player */}
      <div
        id={`ifr_${PLAYER_ID}_wrapper`}
        className="w-full"
        style={{ maxWidth: "220px", margin: "0 auto 0" }}
      >
        <div
          id={`ifr_${PLAYER_ID}_aspect`}
          style={{ position: "relative", paddingBottom: "177.64%", paddingTop: 0 }}
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

      {/* Lock bar / CTA */}
      {!isUnlocked ? (
        <div className="w-full max-w-xs mx-auto rounded-2xl border border-border bg-background px-4 py-3 mt-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">🔒</span>
              <span className="text-xs font-medium text-foreground">
                Mira el video para continuar...
              </span>
            </div>
            <span className="text-xs font-bold text-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate(NEXT_ROUTE)}
          className="w-full max-w-xs mx-auto block text-sm font-bold py-4 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white uppercase tracking-wide shadow-lg animate-pulse mt-2"
        >
          Continuar ✅
        </button>
      )}
    </QuizLayout>
  );
};

export default QuizVSL;
