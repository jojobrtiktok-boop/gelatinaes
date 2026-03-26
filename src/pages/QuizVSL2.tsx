import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";

const NEXT_ROUTE = "/quiz/24";
const PLAYER_ID = "69c46056f5a026a3bac3dd1f";
const PLAYER_URL = `https://scripts.converteai.net/5f516cb5-1331-4896-8140-9224d21bc287/players/${PLAYER_ID}/v4/embed.html`;

const QuizVSL2 = () => {
  const navigate = useNavigate();
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoUnlocked, setIsVideoUnlocked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const userName = localStorage.getItem("userName") || "você";

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
      <h1 className="text-lg font-bold text-foreground mb-4 text-center leading-tight">
        <span className="text-primary">{userName}</span>, seu protocolo está{" "}
        <span className="text-primary">pronto!</span> 🎉
      </h1>

      <div
        id={`ifr_${PLAYER_ID}_wrapper`}
        className="w-full mb-4"
        style={{ maxWidth: "400px", margin: "0 auto 16px" }}
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

      {!isVideoUnlocked ? (
        <div className="w-full rounded-2xl border border-border bg-background p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-xl">🔒</span>
            <span className="text-sm font-medium text-foreground truncate">
              Assista para continuar...
            </span>
          </div>
          <span className="text-sm font-bold text-primary shrink-0">
            {Math.round(videoProgress)}%
          </span>
        </div>
      ) : (
        <button
          onClick={() => navigate(NEXT_ROUTE)}
          className="w-full text-base font-bold py-5 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white uppercase tracking-wide shadow-lg animate-soft-bounce"
        >
          Pegar meu Protocolo ✅
        </button>
      )}
    </QuizLayout>
  );
};

export default QuizVSL2;
