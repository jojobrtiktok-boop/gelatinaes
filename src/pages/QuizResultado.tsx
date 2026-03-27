import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizResultado = () => (
  <QuizSingleSelect
    progress={90}
    title="¿Cuánta agua tomas al día?"
    subtitle="La hidratación acelera los resultados."
    options={[
      { label: "Casi nada", emoji: "🚫" },
      { label: "Menos de 1 litro", emoji: "💧" },
      { label: "1 a 2 litros", emoji: "💦" },
      { label: "Más de 2 litros", emoji: "🌊" },
    ]}
    nextRoute="/quiz/19"
  />
);

export default QuizResultado;
