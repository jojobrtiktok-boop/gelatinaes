import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import famosaMateria from "@/assets/famosa-materia.png";

const QuizFamosas = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={65}>
      <h1 className="text-xl font-bold text-foreground mb-2 leading-tight text-center">
        Sim, até as famosas estão usando! ⭐
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        A Gelatina Mounjaro é tendência entre celebridades e influenciadoras.
      </p>

      {/* News card */}
      <div className="w-full rounded-2xl overflow-hidden border border-border shadow-sm mb-8">
        <img
          src={famosaMateria}
          alt="Matéria sobre famosa usando Gelatina Mounjaro"
          className="w-full object-contain"
          loading="lazy"
          decoding="async"
        />
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
