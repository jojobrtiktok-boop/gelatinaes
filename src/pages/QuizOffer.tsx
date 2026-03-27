import { useEffect, useState } from "react";
import logoMounjaro from "@/assets/logo-mounjaro.png";
import antesDepois from "@/assets/antes-depois.png";
import gelatinaBowl from "@/assets/gelatina-bowl.png";
import garantia from "@/assets/garantia-30dias.png";

const CHECKOUT_URL = "https://pay.hotmart.com/S105015763T?checkoutMode=10";

const TOTAL_SECONDS = 3 * 60 + 43; // 3:43

const weeks = [
  { emoji: "✨", bg: "bg-purple-100", color: "text-purple-600", week: "SEMANA 1", text: "Desinflamación y primeros resultados", meta: false },
  { emoji: "📋", bg: "bg-blue-100", color: "text-blue-600", week: "SEMANA 2", text: "Pérdida de hasta 3 kg", meta: false },
  { emoji: "⚡", bg: "bg-yellow-100", color: "text-yellow-600", week: "SEMANA 3", text: "Pérdida de 5 a 7 kg", meta: false },
  { emoji: "🔥", bg: "bg-orange-100", color: "text-orange-600", week: "SEMANA 4", text: "Pérdida de 9 a 12 kg", meta: true },
];

const benefits = [
  "Receta completa de la Gelatina Mounjaro",
  "Protocolo de 30 días paso a paso",
  "Acceso a la Aplicación Exclusiva",
  "Lista completa de los ingredientes",
  "Consejos para acelerar los resultados",
  "Acceso de por vida al app",
];

const bonuses = [
  "BONO: Dietas completas",
  "BONO: Recetas de dulces saludables",
  "BONO: Clases en video de pilates en la pared",
];

const faqs = [
  {
    q: "¿La Gelatina Mounjaro realmente funciona?",
    a: "¡Sí! La fórmula está basada en estudios científicos y miles de mujeres ya han comprobado los resultados siguiendo el protocolo de 30 días.",
  },
  {
    q: "¿Cuánto tiempo tarda en ver resultados?",
    a: "La mayoría de las usuarias nota la diferencia ya en la primera semana, con resultados significativos en 30 días.",
  },
  {
    q: "¿Es seguro? ¿Tiene efectos secundarios?",
    a: "La gelatina está hecha con ingredientes 100% naturales y seguros. No hay efectos secundarios conocidos.",
  },
  {
    q: "¿Cómo recibiré el protocolo?",
    a: "Recibirás acceso inmediato al protocolo completo y a la aplicación exclusiva después de la compra.",
  },
  {
    q: "¿Y si no funciona para mí?",
    a: "Ofrecemos garantía de 30 días. Si no estás satisfecha, te devolvemos el 100% de tu dinero.",
  },
  {
    q: "¿El pago es seguro?",
    a: "¡Sí! Utilizamos plataformas de pago con cifrado de datos y certificación SSL.",
  },
  {
    q: "¿Necesito comprar ingredientes caros?",
    a: "¡No! Todos los ingredientes son accesibles y se encuentran en cualquier supermercado.",
  },
];

const CTA = () => (
  <a
    href={CHECKOUT_URL}
    className="block w-full text-center text-base font-extrabold py-5 rounded-full bg-green-500 hover:bg-green-600 text-white uppercase tracking-wide transition-colors shadow-lg"
  >
    QUIERO EMPEZAR 🤩
  </a>
);

const QuizOffer = () => {
  const userName = localStorage.getItem("userName") || "tú";
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
        <img src={logoMounjaro} alt="Mounjaro Gelatina" className="w-40" />
      </div>

      {/* Urgency bar */}
      <div className="mx-4 mb-4 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] text-white text-sm font-bold py-2.5 px-4 flex items-center justify-center gap-2">
        <span>🤯 Tu protocolo expira en:</span>
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
            <span className="text-primary">{userName}</span>, tu
          </p>
          <div className="w-full rounded-xl bg-green-50 border border-green-200 px-4 py-3">
            <p className="text-green-800 font-extrabold text-base text-center leading-snug">
              Plan de Gelatina de 30 días fue<br />¡Generado con Éxito!
            </p>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Es exclusivo y se genera solo una vez, no salgas de esta página para no perderlo
          </p>
        </div>

        {/* Before/After image */}
        <div className="w-full rounded-2xl overflow-hidden border border-border relative">
          <img src={antesDepois} alt="Antes y Después" className="w-full object-cover" />
          {/* Arrow in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-lg font-bold">→</span>
          </div>
          {/* Antes label */}
          <div className="absolute bottom-3 left-4">
            <span className="bg-gray-700/80 text-white text-xs font-bold px-3 py-1 rounded-full">
              Antes
            </span>
          </div>
          {/* Depois label */}
          <div className="absolute bottom-3 right-4">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Después ✨
            </span>
          </div>
        </div>

        {/* Plan timeline */}
        <div className="w-full rounded-2xl overflow-hidden border border-border">
          <div className="bg-gradient-to-r from-primary to-[hsl(330,80%,55%)] text-white text-center py-3">
            <p className="text-xs font-bold tracking-widest uppercase opacity-80">TU PLAN EXCLUSIVO</p>
            <p className="font-extrabold text-lg">1 Mes de Tratamiento 🎯</p>
          </div>
          <div className="p-5">
            <p className="text-sm text-muted-foreground mb-4">
              {userName}, siguiendo el protocolo correctamente, mira lo que va a pasar:
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
                🎯 Resultado esperado: -{lower} a {upper} kg en 30 días
              </p>
            </div>
          </div>
        </div>

        {/* Product card */}
        <div className="w-full rounded-2xl overflow-hidden border-2 border-primary">
          <div className="bg-gradient-to-r from-primary to-[hsl(330,80%,55%)] text-white text-center py-4">
            <p className="font-bold text-base">Gelatina Mounjaro + APP Protocolo Completo</p>
            <p className="text-xs opacity-80 tracking-widest text-yellow-300 font-bold">ACCESO DE POR VIDA</p>
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
            <p className="text-muted-foreground text-sm line-through italic">TODO ESTO DE $47,00 USD</p>
            <p className="text-xs text-muted-foreground font-semibold">POR SOLO</p>
            <p className="text-6xl font-extrabold text-green-500 my-1">$ 12,90</p>
            <p className="text-xs text-muted-foreground mb-5">O 3x de $4,30</p>
            <CTA />
          </div>
        </div>

        {/* Guarantee */}
        <div className="w-full border-2 border-yellow-400 rounded-2xl p-6 flex flex-col items-center">
          <img src={garantia} alt="Garantía 30 días" className="w-24 mb-3" loading="lazy" decoding="async" />
          <h2 className="font-bold text-foreground text-base mb-2">Garantía de Reembolso</h2>
          <p className="text-xs text-muted-foreground text-center mb-2">
            Todo producto está obligado a ofrecer al menos 7 días de garantía, pero confiamos tanto en la fórmula que ofrecemos 30 días corridos.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Es decir, si no te gusta o no funciona para ti, te reembolsaremos cada centavo que pagaste, sin preguntas.
          </p>
        </div>

        <CTA />

        {/* FAQ */}
        <div className="w-full">
          <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
            ❓ Preguntas Frecuentes
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
          🔒 Compra 100% segura • Garantía de 30 días
        </p>
      </div>
    </div>
  );
};

export default QuizOffer;
