import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import famosaMateria from "@/assets/famosa-materia.png";

const QuizFamosas = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={45}>
      <h1 className="text-xl font-bold text-foreground mb-2 leading-tight text-center">
        ¡Sí, hasta las famosas lo están usando! ⭐
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        La Gelatina Mounjaro es tendencia entre celebridades e influencers.
      </p>

      {/* Testimonial card */}
      <div className="w-full rounded-2xl overflow-hidden shadow-sm mb-6">
        {/* Before/After image */}
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src={famosaMateria}
            alt="Simone Mendes transformação"
            className="w-full object-cover"
            loading="eager"
            decoding="async"
          />
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
