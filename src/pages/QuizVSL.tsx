import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizLayout from "@/components/QuizLayout";
import logoMounjaro from "@/assets/logo-mounjaro.png";

const OFFER_ROUTE = "/quiz/28";

const QuizVSL = () => {
  const navigate = useNavigate();
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoUnlocked, setIsVideoUnlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userName = localStorage.getItem("userName") || "você";

  // Track video progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const progress = (video.currentTime / video.duration) * 100;
      setVideoProgress(Math.min(progress, 100));
      if (progress >= 99) {
        setIsVideoUnlocked(true);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
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

      <p className="text-sm text-foreground mb-5 flex items-center gap-1">
        ✅ Assista o vídeo de 2 min para pegar seu Protocolo
      </p>

      {/* Portrait video player */}
      <div className="w-full rounded-2xl overflow-hidden border border-border shadow-lg mb-4 bg-black">
        <video
          ref={videoRef}
          controls
          className="w-full"
          style={{ aspectRatio: "9/16", maxHeight: "60vh", objectFit: "cover" }}
          controlsList="nodownload"
          playsInline
        >
          <source src="https://example.com/vsl-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Progress bar / CTA */}
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
          className="w-full text-base font-bold py-5 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white uppercase tracking-wide transition-colors shadow-lg animate-soft-bounce"
        >
          Pegar meu Protocolo ✅
        </button>
      )}
    </QuizLayout>
  );
};

export default QuizVSL;
