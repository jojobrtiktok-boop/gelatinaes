import bodyMedio from "@/assets/body-medio.jpg";
import bodyPlussize from "@/assets/body-plussize.jpg";
import bodyAcimapeso from "@/assets/body-acimapeso.jpg";
import bodySobrepeso from "@/assets/body-sobrepeso.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QuizLayout from "@/components/QuizLayout";

const bodyOptions = [
  { label: "Promedio", image: bodyMedio },
  { label: "Plus Size", image: bodyPlussize },
  { label: "Por encima del peso", image: bodyAcimapeso },
  { label: "Sobrepeso", image: bodySobrepeso },
];

const QuizBody = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(label);
    setTimeout(() => navigate("/quiz/3"), 400);
  };

  return (
    <QuizLayout progress={25}>
      <h1 className="text-xl font-bold text-foreground mb-1 leading-tight text-center">
        ¿Cómo clasificas <span className="text-primary">tu cuerpo</span>?
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">Selecciona la opción que mejor te describe</p>

      <div className="w-full grid grid-cols-2 gap-3">
        {bodyOptions.map((opt) => (
          <button
            key={opt.label}
            onClick={() => handleSelect(opt.label)}
            className={`relative rounded-2xl overflow-hidden aspect-[3/4] transition-all ${
              selected === opt.label ? "ring-3 ring-primary" : "ring-1 ring-border"
            }`}
          >
            <img
              src={opt.image}
              alt={opt.label}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-3 left-0 right-0 text-center text-sm font-semibold text-white">
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </QuizLayout>
  );
};

export default QuizBody;
