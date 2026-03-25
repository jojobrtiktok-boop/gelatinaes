import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const QuizFamosas = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={40}>
      <h1 className="text-xl font-bold text-foreground mb-2 leading-tight text-center">
        Sim, até as famosas estão usando! ⭐
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        A Gelatina Mounjaro é tendência entre celebridades e influenciadoras.
      </p>

      {/* News card */}
      <div className="w-full rounded-2xl overflow-hidden border border-border shadow-sm mb-6 bg-white">
        {/* News source badge */}
        <div className="flex items-center gap-2 p-4 bg-red-600 text-white">
          <span className="font-bold text-lg">g1</span>
          <span className="font-semibold">SAÚDE</span>
        </div>

        {/* Article content */}
        <div className="p-4">
          <h3 className="font-bold text-foreground text-base mb-3 leading-tight">
            Simone Mendes comenta sobre como a famosa 'gelatina do TikTok' ajudou na perda de peso. Cantora eliminou 30kg em apenas 3 meses.
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            Por Gustavo Foster, g1 RS<br />
            01/05/2024 — Atualizado há 6 horas
          </p>

          {/* Social share buttons placeholder */}
          <div className="flex gap-4 justify-center py-4 border-t border-border">
            <button className="text-primary hover:opacity-80">👍</button>
            <button className="text-primary hover:opacity-80">💬</button>
            <button className="text-primary hover:opacity-80">📤</button>
          </div>

          {/* Image placeholder */}
          <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-400 text-sm">Imagem será adicionada</span>
          </div>
        </div>
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/5")}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizFamosas;
