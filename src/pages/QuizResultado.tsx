import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizResultado = () => (
  <QuizSingleSelect
    progress={90}
    title="Quanta água você bebe por dia?"
    subtitle="A hidratação acelera resultados."
    options={[
      { label: "Quase nada", emoji: "🚫" },
      { label: "Menos de 1 litro", emoji: "💧" },
      { label: "1 a 2 litros", emoji: "💦" },
      { label: "Mais de 2 litros", emoji: "🌊" },
    ]}
    nextRoute="/quiz/19"
  />
);

export default QuizResultado;
