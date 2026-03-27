import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuizLayout from "@/components/QuizLayout";
import comoUsarAD from "@/assets/como-usar-antesdepois.png";

const beneficios = [
  "Receta 100% Natural",
  "Activa el GLP-1 de tu cuerpo",
  "Quema de grasa localizada",
  "Regula tu Metabolismo",
  "Ligereza y cuerpo desinflamado",
  "Menos antojos de dulces",
  "Fácil de hacer y de seguir",
];

const QuizComoUsar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "tú";
  const pesoAtual = Number(localStorage.getItem("quiz_peso_atual") || "75");
  const alturaCm = Number(localStorage.getItem("quiz_altura") || "165");
  const alturaM = alturaCm / 100;
  const imc = (pesoAtual / (alturaM * alturaM)).toFixed(1);
  const imcNum = parseFloat(imc);

  let classificacao = "Normal";
  if (imcNum >= 30) classificacao = "Obesidad";
  else if (imcNum >= 25) classificacao = "Sobrepeso";
  else if (imcNum < 18.5) classificacao = "Bajo peso";

  return (
    <QuizLayout progress={100}>
      {/* IMC Result */}
      <h1 className="text-lg font-bold text-foreground mb-6 text-center">
        Resultado de tu <span className="text-primary">análisis</span>, {userName}
      </h1>

      <div className="w-full rounded-2xl border border-border p-6 mb-6 bg-background/50">
        <div className="text-center mb-4">
          <span className="text-6xl font-bold text-primary">{imc}</span>
          <p className="text-muted-foreground text-sm mt-2">
            Tu IMC: <strong className="text-primary">{classificacao}</strong>
          </p>
        </div>

        {/* Alert signs */}
        <div className="border-t border-border pt-4">
          <p className="text-xs font-semibold text-foreground mb-3 flex items-center gap-2">
            ⚠️ Señales de alerta identificadas:
          </p>
          <ul className="space-y-2">
            <li className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-red-600">❌</span> Metabolismo desacelerado
            </li>
            <li className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-red-600">❌</span> Riesgo de acumulación de grasa visceral
            </li>
            <li className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-red-600">❌</span> Hormonas de saciedad desreguladas
            </li>
          </ul>
        </div>
      </div>

      {/* Green info box */}
      <div className="w-full rounded-2xl bg-green-50 border border-green-200 p-4 mb-6">
        <p className="text-xs text-green-900">
          🧪 <strong>El secreto para adelgazar: activar el GLP-1.</strong> La <strong>Gelatina Mounjaro</strong> es el "interruptor" hormonal natural!
        </p>
      </div>

      {/* Benefits */}
      <h2 className="text-lg font-bold text-foreground mb-4 text-center">
        Beneficios de la <span className="text-primary">Gelatina Mounjaro</span> 🍒
      </h2>

      <div className="w-full flex flex-col gap-2 mb-6">
        {beneficios.map((benefit) => (
          <div key={benefit} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border">
            <span className="text-lg">✅</span>
            <span className="text-sm text-foreground font-medium">{benefit}</span>
          </div>
        ))}
      </div>

      {/* Celebrity Testimonial */}
      <div className="w-full mb-6">
        <h3 className="text-base font-bold text-center text-foreground mb-4 flex items-center justify-center gap-1">
          ¡Sí, hasta las famosas lo están usando! <span>⭐</span>
        </h3>
        <div className="rounded-2xl overflow-hidden border border-border mb-3">
          <img src={comoUsarAD} alt="Simone Mendes antes y después" className="w-full object-cover" />
        </div>
        <p className="text-xs text-center text-muted-foreground">
          La Gelatina Mounjaro es tendencia entre celebridades e influencers.
        </p>
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
