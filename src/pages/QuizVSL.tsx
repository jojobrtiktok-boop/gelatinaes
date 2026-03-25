import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const OFFER_ROUTE = "/quiz/28";
const PLAYER_ID = "69c46061f5a026a3bac3dd4e";
const PLAYER_URL = `https://scripts.converteai.net/5f516cb5-1331-4896-8140-9224d21bc287/players/${PLAYER_ID}/v4/embed.html`;

const QuizVSL = () => {
  const navigate = useNavigate();
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoUnlocked, setIsVideoUnlocked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const userName = localStorage.getItem("userName") || "você";

  useEffect(() => {
    // Inject Vturb SDK script once
    if (!document.getElementById("vturb-sdk-v4")) {
      const s = document.createElement("script");
      s.id = "vturb-sdk-v4";
      s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      s.async = true;
      document.head.appendChild(s);
    }

    // Set iframe src (lazy load, same as original embed)
    const iframe = iframeRef.current;
    if (iframe) {
      const search = location.search || "?";
      iframe.src = `${PLAYER_URL}${search}&vl=${encodeURIComponent(location.href)}`;
    }

    // Listen for postMessage events from Vturb player
    const handleMessage = (event: MessageEvent) => {
      const d = event.data;
      if (!d || typeof d !== "object") return;

      // Vturb fires events with playerid or id matching the player
      const isOurPlayer =
        d.playerid === PLAYER_ID || d.id === PLAYER_ID || d.playerId === PLAYER_ID;

      if (!isOurPlayer) return;

      const type = d.type || d.event || "";

      if (type === "timeupdate" || type === "smartplayer:timeupdate") {
        const cur = d.currentTime ?? d.time ?? 0;
        const dur = d.duration ?? 1;
        if (dur > 0) {
          const pct = Math.min((cur / dur) * 100, 100);
          setVideoProgress(pct);
          if (pct >= 99) setIsVideoUnlocked(true);
        }
      }

      if (type === "ended" || type === "smartplayer:ended") {
        setIsVideoUnlocked(true);
        setVideoProgress(100);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <QuizLayout progress={100}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shrink-0">
          <span className="text-white text-sm font-bold">✓</span>
        </div>
        <h1 className="text-lg font-bold text-foreground leading-tight">
          <span className="text-primary">{userName}</span>, seu protocolo está{" "}
          <span className="text-primary">pronto!</span>
        </h1>
      </div>

      <p className="text-sm text-foreground mb-4">
        ✅ Assista o vídeo de 2 min para pegar seu Protocolo
      </p>

      {/* Vturb Portrait Player */}
      <div
        id={`ifr_${PLAYER_ID}_wrapper`}
        className="w-full mb-4"
        style={{ maxWidth: "400px", margin: "0 auto 16px" }}
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
      {!isVideoUnlocked ? (
        <div className="w-full rounded-2xl border border-border bg-background p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-xl">🔒</span>
            <span className="text-sm font-medium text-foreground truncate">
              Clique no vídeo para iniciar ▶
            </span>
          </div>
          <span className="text-sm font-bold text-primary shrink-0">
            {Math.round(videoProgress)}%
          </span>
        </div>
      ) : (
        <button
          onClick={() => navigate(OFFER_ROUTE)}
          className="w-full text-base font-bold py-5 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white uppercase tracking-wide shadow-lg animate-soft-bounce"
        >
          Pegar meu Protocolo ✅
        </button>
      )}
    </QuizLayout>
  );
};

export default QuizVSL;
