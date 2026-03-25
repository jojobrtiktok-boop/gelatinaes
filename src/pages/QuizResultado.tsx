import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import antesDepois from "@/assets/antes-depois.png";

const QuizResultado = () => {
  const navigate = useNavigate();
  const pesoAtual = Number(localStorage.getItem("quiz_peso_atual") || "75");
  const alturaCm = Number(localStorage.getItem("quiz_altura") || "165");
  const alturaM = alturaCm / 100;
  const imc = (pesoAtual / (alturaM * alturaM)).toFixed(1);
  const imcNum = parseFloat(imc);

  let classificacao = "Normal";
  if (imcNum >= 30) classificacao = "Obesidade";
  else if (imcNum >= 25) classificacao = "Sobrepeso";
  else if (imcNum < 18.5) classificacao = "Abaixo do peso";

  return (
    <QuizLayout progress={100}>
      <h1 className="text-xl font-bold text-foreground mb-4 text-center">
        Resultado da sua análise, você
      </h1>

      {/* IMC Card */}
      <div className="w-full rounded-2xl border border-border p-6 flex flex-col items-center mb-6">
        <span className="text-5xl font-bold text-primary mb-1">{imc}</span>
        <p className="text-sm text-muted-foreground">
          Seu IMC: <strong className="text-foreground">{classificacao}</strong>
        </p>

        <div className="mt-4 w-full">
          <p className="text-sm font-semibold text-foreground text-center mb-2">
            ⚠️ Sinais de alerta identificados:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 text-center">
            <li>• Metabolismo desacelerado</li>
            <li>• Risco de acúmulo de gordura visceral</li>
            <li>• Hormônios de saciedade desregulados</li>
          </ul>
        </div>
      </div>

      {/* Info box */}
      <div className="w-full rounded-2xl bg-secondary/60 p-4 mb-6">
        <p className="text-sm text-center">
          <strong className="text-primary">O segredo para secar:</strong>{" "}
          <span className="text-muted-foreground">
            não é comer menos, é ativar o GLP-1. A{" "}
            <strong className="text-foreground">Gelatina Mounjaro</strong> atua como um "interruptor" hormonal natural!
          </span>
        </p>
      </div>

      {/* Before/After image */}
      <div className="w-full rounded-2xl overflow-hidden mb-4">
        <img
          src={antesDepois}
          alt="Antes e depois"
          className="w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Testimonial */}
      <div className="text-center mb-6">
        <p className="font-bold text-foreground text-sm">"Perdi 12kg em 5 semanas!"</p>
        <p className="text-xs text-muted-foreground">Maria, 32 anos - São Paulo</p>
        <div className="text-yellow-400 text-lg mt-1">⭐⭐⭐⭐⭐</div>
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/19")}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizResultado;
