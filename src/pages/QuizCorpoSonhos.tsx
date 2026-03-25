import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizCorpoSonhos = () => (
  <QuizSingleSelect
    progress={85}
    title="Qual o corpo dos seus sonhos?"
    subtitle="Escolha sua meta."
    options={[
      { label: "Em forma e definida", emoji: "💪" },
      { label: "Natural e saudável", emoji: "🌿" },
    ]}
    nextRoute="/quiz/22"
  />
);

export default QuizCorpoSonhos;
