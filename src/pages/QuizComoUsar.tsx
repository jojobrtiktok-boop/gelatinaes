import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";

const beneficios = [
  "Receita 100% Natural",
  "Ativa o GLP-1 do seu corpo",
  "Queima de Gordura localizada",
  "Regula o seu Metabolismo",
  "Leveza e corpo Desinchado",
  "Menos impulsos por doces",
  "Fácil de fazer e seguir",
];

const QuizComoUsar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "você";
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
      {/* IMC Result */}
      <h1 className="text-lg font-bold text-foreground mb-6 text-center">
        Resultado da sua <span className="text-primary">análise</span>, {userName}
      </h1>

      <div className="w-full rounded-2xl border border-border p-6 mb-6 bg-background/50">
        <div className="text-center mb-4">
          <span className="text-6xl font-bold text-primary">{imc}</span>
          <p className="text-muted-foreground text-sm mt-2">
            Seu IMC: <strong className="text-primary">{classificacao}</strong>
          </p>
        </div>

        {/* Alert signs */}
        <div className="border-t border-border pt-4">
          <p className="text-xs font-semibold text-foreground mb-3 flex items-center gap-2">
            ⚠️ Sinais de alerta identificados:
          </p>
          <ul className="space-y-2">
            <li className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-red-600">❌</span> Metabolismo desacelerado
            </li>
            <li className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-red-600">❌</span> Risco de acúmulo de gordura visceral
            </li>
            <li className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-red-600">❌</span> Hormônios de saciedade desregulados
            </li>
          </ul>
        </div>
      </div>

      {/* Green info box */}
      <div className="w-full rounded-2xl bg-green-50 border border-green-200 p-4 mb-6">
        <p className="text-xs text-green-900">
          🧪 <strong>O segredo para secar: ativar o GLP-1.</strong> A <strong>Gelatina Mounjaro</strong> é o "interruptor" hormonal natural!
        </p>
      </div>

      {/* Benefits */}
      <h2 className="text-lg font-bold text-foreground mb-4 text-center">
        Benefícios da <span className="text-primary">Gelatina Mounjaro</span> 🍒
      </h2>

      <div className="w-full flex flex-col gap-2 mb-6">
        {beneficios.map((benefit) => (
          <div key={benefit} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border">
            <span className="text-lg">✅</span>
            <span className="text-sm text-foreground font-medium">{benefit}</span>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="w-full rounded-2xl bg-background/50 border border-border p-4 mb-6 text-center">
        <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center flex-shrink-0">
          <span className="text-gray-500 text-sm">Imagem será adicionada</span>
        </div>
        <p className="font-semibold text-foreground text-sm mb-2">
          "Perdi 12kg em 5 semanas!"
        </p>
        <p className="text-xs text-muted-foreground">
          Maria, 32 anos - São Paulo
        </p>
        <div className="flex justify-center gap-1 mt-2">
          {[1,2,3,4,5].map((i) => <span key={i} className="text-lg">⭐</span>)}
        </div>
      </div>

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/20")}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizComoUsar;
