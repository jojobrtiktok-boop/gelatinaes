import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import transfGiovanna from "@/assets/transf-giovanna.png";
import transfSandra from "@/assets/transf-sandra.png";
import transfClaudia from "@/assets/transf-claudia.png";
import transfExtra from "@/assets/transf-extra.png";

const testimonials = [
  { image: transfGiovanna, quote: '"Bizarro... Perdi 7kg em 3 semanas!"', name: "Giovanna, 34 - São Paulo" },
  { image: transfSandra, quote: '"Minha barriga sumiu! Não acredito!"', name: "Sandra, 39 - Rio de Janeiro" },
  { image: transfClaudia, quote: '"Voltei a usar minhas roupas antigas!"', name: "Cláudia, 35 - Belo Horizonte" },
  { image: transfExtra, quote: '"Quem usa tem resultado 😄🙌"', name: "Patrícia, 31 - Curitiba" },
];

const QuizHistorias = () => {
  const navigate = useNavigate();

  return (
    <QuizLayout progress={100}>
      <h1 className="text-xl font-bold text-foreground mb-1 text-center underline underline-offset-4">
        Histórias de Transformação
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        Veja quem já transformou o corpo com a Gelatina Mounjaro
      </p>

      <div className="w-full flex flex-col gap-6 mb-8">
        {testimonials.map((t, i) => (
          <div key={i} className="w-full rounded-2xl overflow-hidden border border-border">
            <img src={t.image} alt={t.name} className="w-full object-cover" loading="lazy" decoding="async" />
            <div className="p-4 text-center">
              <p className="font-bold text-foreground text-sm">{t.quote}</p>
              <p className="text-xs text-primary mt-1">{t.name}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/30")}
      >
        Ver meu protocolo personalizado
      </Button>
    </QuizLayout>
  );
};

export default QuizHistorias;
