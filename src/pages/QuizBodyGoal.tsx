import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizBodyGoal = () => (
  <QuizSingleSelect
    progress={100}
    title="¿Cuál es el cuerpo de tus sueños?"
    subtitle="Elige tu meta."
    options={[
      { label: "En forma y definida", emoji: "🐻" },
      { label: "Natural y saludable", emoji: "🌿" },
    ]}
    nextRoute="/quiz/25"
  />
);

export default QuizBodyGoal;
