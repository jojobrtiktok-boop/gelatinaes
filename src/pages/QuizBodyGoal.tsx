import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizBodyGoal = () => (
  <QuizSingleSelect
    progress={100}
    title="Qual o corpo dos seus sonhos?"
    subtitle="Escolha sua meta."
    options={[
      { label: "Em forma e definida", emoji: "🐻" },
      { label: "Natural e saudável", emoji: "🌿" },
    ]}
    nextRoute="/quiz/27"
  />
);

export default QuizBodyGoal;
