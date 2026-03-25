import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const QuizOtimo = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "você";

  return (
    <QuizLayout progress={92}>
      <h1 className="text-lg font-bold text-foreground mb-1 text-center leading-tight">
        Ótimo, <span className="text-primary">{userName}</span>! Veja como funciona 🍒
      </h1>
      <p className="text-muted-foreground text-xs mb-6 text-center leading-relaxed">
        A Gelatina Mounjaro ativa a queima de gordura natural com ingredientes caseiros que você prepara em minutos.
      </p>

      {/* Benefits checklist */}
      <div className="w-full flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border">
          <span className="text-lg">✅</span>
          <span className="font-medium text-sm text-foreground">Fácil de preparar</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border">
          <span className="text-lg">✅</span>
          <span className="font-medium text-sm text-foreground">2 vezes ao dia</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border">
          <span className="text-lg">✅</span>
          <span className="font-medium text-sm text-foreground">Receita 100% Natural</span>
        </div>
      </div>

      {/* Process timeline */}
      <div className="w-full rounded-2xl border border-border p-4 mb-6 bg-background/50">
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</div>
              <div className="w-1 h-8 bg-primary/30"></div>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Antes</p>
              <p className="text-xs text-muted-foreground">Gordura acumulada e metabolismo lento</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</div>
              <div className="w-1 h-8 bg-primary/30"></div>
            </div>
            <div>
              <p className="font-semibold text-sm text-primary">Gelatina Mounjaro</p>
              <p className="text-xs text-muted-foreground">Receita caseira simples e poderosa</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">3</div>
              <div className="w-1 h-8 bg-primary/30"></div>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Queima natural ativada 🔥</p>
              <p className="text-xs text-muted-foreground">Metabolismo acelerado sem dietas</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">✓</div>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Corpo dos sonhos!</p>
              <p className="text-xs text-muted-foreground">Resultado visível em poucas semanas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Green info box */}
      <div className="w-full rounded-2xl bg-green-50 border border-green-200 p-4 mb-6">
        <p className="text-xs text-center text-green-900">
          🧪 <strong>Receita caseira que ativa o GLP-1</strong>, o mesmo hormônio do Mounjaro, de forma <strong>100% natural!</strong>
        </p>
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/11")}
      >
        Entendi! Continuar 🚀
      </Button>
    </QuizLayout>
  );
};

export default QuizOtimo;
