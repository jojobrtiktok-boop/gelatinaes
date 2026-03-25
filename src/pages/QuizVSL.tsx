import { useEffect, useState } from "react";
import logoMounjaro from "@/assets/logo-mounjaro.png";
import gelatinaBowl from "@/assets/gelatina-bowl.png";
import garantia from "@/assets/garantia-30dias.png";
import nutriLuciana from "@/assets/nutri-luciana.webp";

const CHECKOUT_URL = "#"; // Replace with actual checkout URL

const QuizVSL = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          setMinutes((m) => (m === 0 ? 15 : m - 1));
          return 59;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show CTA after 1min30s (90 seconds)
  useEffect(() => {
    const delay = setTimeout(() => setShowCTA(true), 90000);
    return () => clearTimeout(delay);
  }, []);

  const CTA = () => (
    <a
      href={CHECKOUT_URL}
      className="block w-full text-center text-base font-bold py-5 rounded-full bg-green-500 hover:bg-green-600 text-white uppercase tracking-wide transition-colors animate-soft-bounce shadow-lg"
    >
      PEGAR MEU PROTOCOLO DA GELATINA MOUNJARO
    </a>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Urgency bar */}
      <div className="w-full bg-destructive text-white text-center py-2.5 px-4 text-sm font-bold tracking-wide shrink-0">
        ⚠️ ATENÇÃO: Seu plano expira em{" "}
        <span className="font-extrabold">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>

      <div className="flex-1 flex flex-col items-center w-full max-w-md mx-auto px-5 py-6">
        {/* Logo */}
        <img src={logoMounjaro} alt="Mounjaro Gelatina" className="w-28 mb-6" loading="eager" />

        {/* Headline */}
        <h1 className="text-xl md:text-2xl font-extrabold text-foreground text-center leading-tight mb-1">
          ⚠️ DIAGNÓSTICO: Seu receptor de saciedade está bloqueado por <span className="text-destructive font-extrabold">gordura velha</span>.
        </h1>
        <p className="text-sm text-muted-foreground text-center mb-5">
          Veja como o Protocolo da Gelatina destrava seu corpo sem agulhas.
        </p>

        {/* Video placeholder - replace with Vturb embed later */}
        <div className="w-full rounded-xl overflow-hidden border border-border shadow-lg mb-6 bg-muted">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Vídeo em breve
            </div>
          </div>
        </div>

        {/* CTA Button + everything below - appears after 1m30s */}
        <div
          className={`w-full transition-all duration-700 ${
            showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"
          }`}
        >
          <div className="mb-8">
            <CTA />
          </div>

          {/* ===== OFERTA SECTION (integrated) ===== */}

        {/* Success icon */}
        <div className="w-full flex justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <span className="text-primary text-xl">✅</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-foreground mb-1 text-center">
          você, <span className="bg-yellow-200 px-1 font-extrabold">seu plano foi gerado!</span>
        </h2>
        <p className="text-muted-foreground text-xs mb-6 text-center">
          Ele é exclusivo e gerado só uma vez, não saia dessa página para não perdê-lo
        </p>

        {/* Plan timeline */}
        <div className="w-full rounded-2xl overflow-hidden border border-border mb-6">
          <div className="bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white text-center py-3 font-bold text-sm">
            Seu Plano: 1 MÊS DE TRATAMENTO
          </div>
          <div className="p-5">
            <p className="text-sm text-muted-foreground text-center mb-4">
              você, de acordo com seu perfil, você alcançará seu corpo ideal em <u>1 mês</u> com a Gelatina Mounjaro.
            </p>
            <div className="space-y-4">
              {[
                { week: "Semana 1", text: "Primeiros resultados", emoji: "✨" },
                { week: "Semana 2", text: "Perda de até 3 kg", emoji: "📋" },
                { week: "Semana 3", text: "Perda de 5 a 7 kg", emoji: "⚡" },
                { week: "Semana 4", text: "Perda de 9 a 12 kg", emoji: "🔥" },
              ].map((s) => (
                <div key={s.week} className="flex items-center gap-3">
                  <span className="text-xl">{s.emoji}</span>
                  <div>
                    <span className="text-xs text-primary font-semibold">{s.week}</span>
                    <p className="text-sm font-medium text-foreground">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product card */}
        <div className="w-full rounded-2xl overflow-hidden border-2 border-primary mb-6">
          <div className="bg-gradient-to-r from-primary to-[hsl(330,80%,55%)] text-white text-center py-4">
            <p className="font-bold text-base">Gelatina Mounjaro + APP Protocolo Completo</p>
            <p className="text-xs opacity-80 tracking-widest">ACESSO VITALÍCIO</p>
          </div>
          <div className="p-5 flex flex-col items-center">
            <img src={gelatinaBowl} alt="Gelatina" className="w-28 h-28 object-contain mb-4" loading="lazy" decoding="async" />
            <div className="w-full space-y-2 mb-4">
              {[
                "Receita completa da Gelatina Mounjaro",
                "Protocolo de 30 dias passo a passo",
                "Acesso ao Aplicativo Exclusivo",
                "Lista completa dos ingredientes",
                "Dicas para acelerar resultados",
                "Acesso vitalício ao app",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-primary">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Bonuses */}
            <div className="w-full bg-secondary/60 rounded-xl p-4 space-y-2 mb-4">
              {[
                "BÔNUS: Dietas completas",
                "BÔNUS: Receitas doces saudáveis",
                "BÔNUS: Aulas em vídeo de pilates na parede",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <span>🎁</span>
                  <span className="text-primary font-medium">{b}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <p className="text-muted-foreground text-sm line-through italic">TUDO ISSO DE R$109,00</p>
            <p className="text-xs text-muted-foreground">POR APENAS</p>
            <p className="text-5xl font-extrabold text-green-500 my-2">R$ 37,70</p>
            <p className="text-xs text-muted-foreground mb-4">Ou 6x de R$6,28</p>

            <CTA />
          </div>
        </div>


        {/* Guarantee */}
        <div className="w-full border-2 border-yellow-400 rounded-2xl p-6 flex flex-col items-center mb-6">
          <img src={garantia} alt="Garantia 30 dias" className="w-24 mb-4" loading="lazy" decoding="async" />
          <h2 className="font-bold text-foreground text-base mb-2">Garantia de Reembolso</h2>
          <p className="text-xs text-muted-foreground text-center mb-2">
            Todo produto é obrigado a dar no mínimo 7 dias de garantia, porém confiamos tanto na fórmula que oferecemos 30 dias corridos.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Ou seja, se você não gostar ou não funcionar pra você, nós reembolsaremos cada centavo que você pagou, sem questionar.
          </p>
        </div>

        <CTA />

        {/* Nutritionist */}
        <div className="w-full flex flex-col items-center mt-6 mb-4">
          <img src={nutriLuciana} alt="Nutri Luciana Britto" className="w-20 h-20 rounded-full object-cover mb-2" loading="lazy" decoding="async" />
          <p className="text-xs text-muted-foreground">Plano gerado por:</p>
          <p className="font-bold text-foreground text-sm">Nutri Luciana Britto</p>
          <p className="text-xs text-primary">Nutricionista • CRN-PR 08-7734</p>
        </div>

        <div className="w-full mt-4 mb-2">
          <CTA />
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-2 mb-4">
          🔒 Compra 100% segura • Garantia de 30 dias
        </p>

        {/* Footer - security & links */}
        <div className="w-full pt-4 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4 opacity-60">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Site Seguro</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Compra Protegida</span>
            </div>
          </div>
          <div className="flex gap-4 text-[10px] text-muted-foreground">
            <a href="#" className="underline">Termos de Uso</a>
            <a href="#" className="underline">Políticas de Privacidade</a>
          </div>
        </div>
        {/* Close showCTA wrapper */}
        </div>
      </div>
    </div>
  );
};

export default QuizVSL;
