import { useEffect, useState } from "react";
import logoMounjaro from "@/assets/logo-mounjaro.png";
import antesDepois from "@/assets/antes-depois.png";
import gelatinaBowl from "@/assets/gelatina-bowl.png";
import garantia from "@/assets/garantia-30dias.png";

const CHECKOUT_URL = "#"; // Replace with actual checkout URL

const TOTAL_SECONDS = 3 * 60 + 43; // 3:43

const weeks = [
  { emoji: "✨", bg: "bg-purple-100", color: "text-purple-600", week: "SEMANA 1", text: "Desincha e primeiros resultados", meta: false },
  { emoji: "📋", bg: "bg-blue-100", color: "text-blue-600", week: "SEMANA 2", text: "Perda de até 3 kg", meta: false },
  { emoji: "⚡", bg: "bg-yellow-100", color: "text-yellow-600", week: "SEMANA 3", text: "Perda de 5 a 7 kg", meta: false },
  { emoji: "🔥", bg: "bg-orange-100", color: "text-orange-600", week: "SEMANA 4", text: "Perda de 9 a 12 kg", meta: true },
];

const benefits = [
  "Receita completa da Gelatina Mounjaro",
  "Protocolo de 30 dias passo a passo",
  "Acesso ao Aplicativo Exclusivo",
  "Lista completa dos ingredientes",
  "Dicas para acelerar resultados",
  "Acesso vitalício ao app",
];

const bonuses = [
  "BÔNUS: Dietas completas",
  "BÔNUS: Receitas doces saudáveis",
  "BÔNUS: Aulas em vídeo de pilates na parede",
];

const faqs = [
  {
    q: "A Gelatina Mounjaro realmente funciona?",
    a: "Sim! A fórmula é baseada em estudos científicos e milhares de mulheres já comprovaram os resultados seguindo o protocolo de 30 dias.",
  },
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "A maioria das usuárias nota diferença já na primeira semana, com resultados significativos em 30 dias.",
  },
  {
    q: "É seguro? Tem efeitos colaterais?",
    a: "A gelatina é feita com ingredientes 100% naturais e seguros. Não há efeitos colaterais conhecidos.",
  },
  {
    q: "Como vou receber o protocolo?",
    a: "Você receberá acesso imediato ao protocolo completo e ao aplicativo exclusivo após a compra.",
  },
  {
    q: "E se não funcionar pra mim?",
    a: "Oferecemos garantia de 30 dias. Se não ficar satisfeita, devolvemos 100% do seu dinheiro.",
  },
  {
    q: "O pagamento é seguro?",
    a: "Sim! Utilizamos plataformas de pagamento com criptografia de dados e certificação SSL.",
  },
  {
    q: "Preciso comprar ingredientes caros?",
    a: "Não! Todos os ingredientes são acessíveis e encontrados em qualquer supermercado.",
  },
];

const CTA = () => (
  <a
    href={CHECKOUT_URL}
    className="block w-full text-center text-base font-extrabold py-5 rounded-full bg-green-500 hover:bg-green-600 text-white uppercase tracking-wide transition-colors shadow-lg"
  >
    QUERO COMEÇAR 🤩
  </a>
);

const QuizOffer = () => {
  const userName = localStorage.getItem("userName") || "você";
  const pesoAtual = Number(localStorage.getItem("quiz_peso_atual") || "75");
  const pesoDesejado = Number(localStorage.getItem("quiz_peso_desejado") || String(pesoAtual - 10));
  const meta = Math.max(3, pesoAtual - pesoDesejado);
  const lower = Math.max(3, Math.round(meta * 0.7));
  const upper = Math.round(meta * 1.1 + 1);

  const [seconds, setSeconds] = useState(TOTAL_SECONDS);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Logo */}
      <div className="flex justify-center pt-4 pb-2">
        <img src={logoMounjaro} alt="Mounjaro Gelatina" className="w-24" />
      </div>

      {/* Urgency bar */}
      <div className="mx-4 mb-4 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white text-sm font-bold py-2.5 px-4 flex items-center justify-center gap-2">
        <span>🤯 Seu protocolo expira em:</span>
        <span className="bg-white text-primary font-extrabold px-3 py-0.5 rounded-full text-sm">
          {mins}:{secs}
        </span>
      </div>

      <div className="flex flex-col items-center px-5 pb-10 gap-6">
        {/* Success check + title */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-14 h-14 rounded-full border-4 border-green-500 flex items-center justify-center mb-1">
            <span className="text-green-500 text-2xl font-bold">✓</span>
          </div>
          <p className="text-lg font-bold text-foreground">
            <span className="text-primary">{userName}</span>, seu
          </p>
          <div className="w-full rounded-xl bg-green-50 border border-green-200 px-4 py-3">
            <p className="text-green-800 font-extrabold text-base text-center leading-snug">
              Plano da Gelatina de 30 dias foi<br />Gerado com Sucesso!
            </p>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Ele é exclusivo e gerado só uma vez, não saia dessa página para não perdê-lo
          </p>
        </div>

        {/* Before/After image */}
        <div className="w-full rounded-2xl overflow-hidden border border-border">
          <img src={antesDepois} alt="Antes e Depois" className="w-full object-cover" />
        </div>

        {/* Plan timeline */}
        <div className="w-full rounded-2xl overflow-hidden border border-border">
          <div className="bg-gradient-to-r from-primary to-[hsl(330,80%,55%)] text-white text-center py-3">
            <p className="text-xs font-bold tracking-widest uppercase opacity-80">SEU PLANO EXCLUSIVO</p>
            <p className="font-extrabold text-lg">1 Mês de Tratamento 🎯</p>
          </div>
          <div className="p-5">
            <p className="text-sm text-muted-foreground mb-4">
              {userName}, seguindo o protocolo certinho, veja o que vai acontecer:
            </p>
            <div className="space-y-3">
              {weeks.map((w) => (
                <div key={w.week} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${w.bg} flex items-center justify-center shrink-0 text-lg`}>
                    {w.emoji}
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs font-bold ${w.color}`}>{w.week}</p>
                    <p className="text-sm font-medium text-foreground">{w.text}</p>
                  </div>
                  {w.meta && (
                    <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      META
                    </span>
                  )}
                </div>
              ))}
            </div>
            {/* Expected result badge */}
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl px-4 py-2">
              <p className="text-green-800 text-sm font-semibold text-center">
                🎯 Resultado esperado: -{lower} a {upper} kg em 30 dias
              </p>
            </div>
          </div>
        </div>

        {/* Product card */}
        <div className="w-full rounded-2xl overflow-hidden border-2 border-primary">
          <div className="bg-gradient-to-r from-primary to-[hsl(330,80%,55%)] text-white text-center py-4">
            <p className="font-bold text-base">Gelatina Mounjaro + APP Protocolo Completo</p>
            <p className="text-xs opacity-80 tracking-widest text-yellow-300 font-bold">ACESSO VITALÍCIO</p>
          </div>
          <div className="p-5 flex flex-col items-center">
            <img src={gelatinaBowl} alt="Gelatina" className="w-28 h-28 object-contain mb-4" loading="lazy" decoding="async" />
            <div className="w-full space-y-2 mb-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Bonuses */}
            <div className="w-full bg-yellow-50 border border-yellow-200 rounded-xl p-4 space-y-1.5 mb-5">
              {bonuses.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm">
                  <span>🎁</span>
                  <span className="text-yellow-800 font-semibold">{b}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <p className="text-muted-foreground text-sm line-through italic">TUDO ISSO DE R$109,00</p>
            <p className="text-xs text-muted-foreground font-semibold">POR APENAS</p>
            <p className="text-6xl font-extrabold text-green-500 my-1">R$ 27</p>
            <p className="text-xs text-muted-foreground mb-5">Ou 6x de R$5,32</p>
            <CTA />
          </div>
        </div>

        {/* Guarantee */}
        <div className="w-full border-2 border-yellow-400 rounded-2xl p-6 flex flex-col items-center">
          <img src={garantia} alt="Garantia 30 dias" className="w-24 mb-3" loading="lazy" decoding="async" />
          <h2 className="font-bold text-foreground text-base mb-2">Garantia de Reembolso</h2>
          <p className="text-xs text-muted-foreground text-center mb-2">
            Todo produto é obrigado a dar no mínimo 7 dias de garantia, porém confiamos tanto na fórmula que oferecemos 30 dias corridos.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Ou seja, se você não gostar ou não funcionar pra você, nós reembolsaremos cada centavo que você pagou, sem questionar.
          </p>
        </div>

        <CTA />

        {/* FAQ */}
        <div className="w-full">
          <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
            ❓ Perguntas Frequentes
          </h2>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-medium text-foreground pr-2">{faq.q}</span>
                  <span className={`text-lg font-bold shrink-0 transition-colors ${openFaq === i ? "text-red-500" : "text-green-500"}`}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <CTA />

        <p className="text-[10px] text-muted-foreground text-center">
          🔒 Compra 100% segura • Garantia de 30 dias
        </p>
      </div>
    </div>
  );
};

export default QuizOffer;
