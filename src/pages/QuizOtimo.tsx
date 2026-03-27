import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import otimoAntes from "@/assets/otimo-antes.png";
import otimoGelatina from "@/assets/otimo-gelatina.png";
import otimoQueima from "@/assets/otimo-queima.png";
import otimoDepois from "@/assets/otimo-depois.png";

const QuizOtimo = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "tú";

  return (
    <QuizLayout progress={92}>
      <h1 className="text-lg font-bold text-foreground mb-1 text-center leading-tight">
        ¡Genial, <span className="text-primary">{userName}</span>! Mira cómo funciona 🍒
      </h1>
      <p className="text-muted-foreground text-xs mb-6 text-center leading-relaxed">
        La Gelatina Mounjaro activa la quema de grasa natural con ingredientes caseros que preparas en minutos.
      </p>

      {/* Benefits checklist */}
      <div className="w-full flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border">
          <span className="text-lg">✅</span>
          <span className="font-medium text-sm text-foreground">Fácil de preparar</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border">
          <span className="text-lg">✅</span>
          <span className="font-medium text-sm text-foreground">2 veces al día</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border">
          <span className="text-lg">✅</span>
          <span className="font-medium text-sm text-foreground">Receta 100% Natural</span>
        </div>
      </div>

      {/* Process timeline */}
      <div className="w-full rounded-2xl border border-border p-4 mb-6 bg-background/50">
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex gap-3 items-center">
            <img src={otimoAntes} alt="Antes" className="w-14 h-14 object-cover rounded-xl shrink-0" />
            <div className="flex flex-col items-center shrink-0">
              <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</div>
              <div className="w-0.5 h-6 bg-primary/30"></div>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Antes</p>
              <p className="text-xs text-muted-foreground">Grasa acumulada y metabolismo lento</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-3 items-center">
            <img src={otimoGelatina} alt="Gelatina" className="w-14 h-14 object-cover rounded-xl shrink-0" />
            <div className="flex flex-col items-center shrink-0">
              <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</div>
              <div className="w-0.5 h-6 bg-primary/30"></div>
            </div>
            <div>
              <p className="font-semibold text-sm text-primary">Gelatina Mounjaro</p>
              <p className="text-xs text-muted-foreground">Receta casera simple y poderosa</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-3 items-center">
            <img src={otimoQueima} alt="Queima" className="w-14 h-14 object-cover rounded-xl shrink-0" />
            <div className="flex flex-col items-center shrink-0">
              <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">3</div>
              <div className="w-0.5 h-6 bg-primary/30"></div>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Quema natural activada 🔥</p>
              <p className="text-xs text-muted-foreground">Metabolismo acelerado sin dietas</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-3 items-center">
            <img src={otimoDepois} alt="Depois" className="w-14 h-14 object-cover rounded-xl shrink-0" />
            <div className="flex flex-col items-center shrink-0">
              <div className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">¡Cuerpo de ensueño!</p>
              <p className="text-xs text-muted-foreground">Resultado visible en pocas semanas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Green info box */}
      <div className="w-full rounded-2xl bg-green-50 border border-green-200 p-4 mb-6">
        <p className="text-xs text-center text-green-900">
          🧪 <strong>Receta casera que activa el GLP-1</strong>, la misma hormona del Mounjaro, de forma <strong>100% natural!</strong>
        </p>
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/11")}
      >
        ¡Entendido! Continuar 🚀
      </Button>
    </QuizLayout>
  );
};

export default QuizOtimo;
