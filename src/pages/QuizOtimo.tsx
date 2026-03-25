import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import gelatinaBowl from "@/assets/gelatina-bowl.png";

const QuizOtimo = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={92}>
      <h1 className="text-xl font-bold text-foreground mb-3 text-center">
        Ótimo, Você! 🎉
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center leading-relaxed">
        Sem esforço ou dietas chatas: a Gelatina Mounjaro faz o trabalho pesado por você, ativando a queima de gordura com ingredientes caseiros que você prepara em minutos.
      </p>

      {/* Card with gelatin image and flow */}
      <div className="w-full rounded-2xl border border-border p-6 flex flex-col items-center mb-6">
        <img src={gelatinaBowl} alt="Gelatina Mounjaro" className="w-32 h-32 object-contain mb-4" loading="lazy" decoding="async" />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="text-2xl">👤</span>
            <span>Você</span>
          </div>
          <span>→</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl">🍮</span>
            <span className="font-semibold text-foreground">Gelatina</span>
          </div>
          <span>→</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl">🌟</span>
            <span>Seu objetivo</span>
          </div>
        </div>
      </div>

      {/* Info box */}
      <div className="w-full rounded-2xl bg-secondary/60 p-4 mb-8">
        <p className="text-sm text-center">
          <strong className="text-primary">Como funciona:</strong>{" "}
          <span className="text-muted-foreground">
            A receita caseira ativa o GLP-1, o mesmo hormônio que faz o efeito do Mounjaro, mas de forma 100% natural!
          </span>
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
